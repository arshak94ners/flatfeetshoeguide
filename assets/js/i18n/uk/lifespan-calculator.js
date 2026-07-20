/*
 * Shoe lifespan calculator — flatfeetshoeguide.com
 *
 * Rough estimate only. Uses the commonly-cited 300-500 mile support
 * window for supportive/stability shoes (400 miles as the midpoint),
 * or a 6-12 month window for low-mileage/standing-only use, whichever
 * input the visitor provides.
 */
(function () {
  "use strict";

  var MILES_PER_PAIR = 400;
  var MONTHS_PER_PAIR_LIGHT_USE = 9;

  // Ukrainian has three plural forms depending on the number:
  //  - "one" form:  n ends in 1, except when n ends in 11 (1, 21, 31... тиждень)
  //  - "few" form:  n ends in 2-4, except 12-14 (2, 3, 4, 22... тижні)
  //  - "many" form: everything else, incl. 0, 11-14 (5, 11, 25... тижнів)
  function ukPluralInt(n, one, few, many) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
    return many;
  }

  function formatWeeks(weeks) {
    if (weeks < 0) return "0";
    if (weeks < 8) {
      var wholeWeeks = Math.round(weeks);
      return wholeWeeks + " " + ukPluralInt(wholeWeeks, "тиждень", "тижні", "тижнів");
    }
    var months = Math.round((weeks / 4.345) * 10) / 10;
    // Non-whole values (e.g. 2.3) take the genitive-singular form, same
    // as the "few" form (місяця) — that's how fractional quantities are
    // said in Ukrainian regardless of the leading digit.
    var monthWord = months % 1 !== 0 ? "місяця" : ukPluralInt(months, "місяць", "місяці", "місяців");
    return months + " " + monthWord;
  }

  function calculate(weeklyMiles, currentMiles) {
    var remainingMiles = MILES_PER_PAIR - currentMiles;
    if (weeklyMiles > 0) {
      var weeksLeft = remainingMiles / weeklyMiles;
      return {
        remainingMiles: Math.max(0, Math.round(remainingMiles)),
        estimate: formatWeeks(weeksLeft),
        method: "mileage"
      };
    }
    return null;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("lifespan-calculator");
    var result = document.getElementById("lifespan-result");
    if (!form || !result) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var weeklyMiles = parseFloat(document.getElementById("lifespan-weekly-miles").value);
      var currentMiles = parseFloat(document.getElementById("lifespan-current-miles").value) || 0;

      if (isNaN(weeklyMiles) || weeklyMiles <= 0) {
        result.hidden = false;
        result.innerHTML = '<p class="calc-error" role="alert">Введіть ваш звичайний тижневий пробіг (біг + ходьба в цьому взутті), щоб отримати оцінку.</p>';
        return;
      }
      if (currentMiles < 0 || currentMiles > 2000) {
        result.hidden = false;
        result.innerHTML = '<p class="calc-error" role="alert">Перевірте пробіг, уже накопичений цією парою, &mdash; це число виглядає нереалістичним.</p>';
        return;
      }

      var calc = calculate(weeklyMiles, currentMiles);
      result.hidden = false;

      if (currentMiles >= MILES_PER_PAIR) {
        result.innerHTML =
          '<div class="calc-result-grid"><div class="calc-result-item is-input"><span class="calc-label">Стан</span><span class="calc-value">Замінити зараз</span></div></div>' +
          '<p class="calc-note">Ця пара вже вийшла за межі типового діапазону підтримки 300-500 миль (ми беремо ' + MILES_PER_PAIR + ' як середнє значення). Амортизація підошви та будь-яка стабілізуюча структура, ймовірно, вже зношені, навіть якщо протектор підошви все ще виглядає непогано.</p>';
        return;
      }

      result.innerHTML =
        '<div class="calc-result-grid">' +
        '<div class="calc-result-item"><span class="calc-label">Залишилось миль</span><span class="calc-value">~' + calc.remainingMiles + "</span></div>" +
        '<div class="calc-result-item is-input"><span class="calc-label">Орієнтовний залишок часу</span><span class="calc-value">~' + calc.estimate + "</span></div>" +
        "</div>" +
        '<p class="calc-note">Оцінка базується на діапазоні підтримки ' + MILES_PER_PAIR + ' миль (середина типового діапазону 300-500 миль). Нерівна поверхня, більша вага тіла та біг (порівняно з ходьбою) зношують підтримку швидше, ніж припускає ця оцінка, &mdash; сприймайте це як орієнтовний прогноз, а не точну межу.</p>';
    });
  });
})();
