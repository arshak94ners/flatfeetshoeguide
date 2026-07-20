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

  // Russian plural rule: 1 -> one form, 2-4 -> few form, 0/5-20 -> many form
  // (based on the last one/two digits of the number).
  function ruPlural(n, one, few, many) {
    var mod100 = Math.abs(Math.round(n)) % 100;
    var mod10 = mod100 % 10;
    if (mod100 > 10 && mod100 < 20) return many;
    if (mod10 === 1) return one;
    if (mod10 >= 2 && mod10 <= 4) return few;
    return many;
  }

  function formatWeeks(weeks) {
    if (weeks < 0) return "0";
    if (weeks < 8) {
      var w = Math.round(weeks);
      return w + " " + ruPlural(w, "неделя", "недели", "недель");
    }
    var months = weeks / 4.345;
    var m = Math.round(months * 10) / 10;
    // Fractional quantities ("2.3", "9.5") take the genitive singular form
    // in Russian regardless of the digit they end in.
    if (Math.floor(m) !== m) {
      return m + " месяца";
    }
    return m + " " + ruPlural(m, "месяц", "месяца", "месяцев");
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
        result.innerHTML = '<p class="calc-error" role="alert">Укажите свой обычный недельный пробег (бег + ходьба в этой обуви), чтобы получить оценку.</p>';
        return;
      }
      if (currentMiles < 0 || currentMiles > 2000) {
        result.hidden = false;
        result.innerHTML = '<p class="calc-error" role="alert">Перепроверьте, сколько миль уже пройдено в этой паре &mdash; цифра выглядит некорректно.</p>';
        return;
      }

      var calc = calculate(weeklyMiles, currentMiles);
      result.hidden = false;

      if (currentMiles >= MILES_PER_PAIR) {
        result.innerHTML =
          '<div class="calc-result-grid"><div class="calc-result-item is-input"><span class="calc-label">Статус</span><span class="calc-value">Замените сейчас</span></div></div>' +
          '<p class="calc-note">Эта пара уже превысила типичный ресурс поддержки в 300-500 миль (мы используем ' + MILES_PER_PAIR + ' как среднее значение). Амортизация в подошве и структура стабилизации, скорее всего, уже износились, даже если протектор подошвы всё ещё выглядит неплохо.</p>';
        return;
      }

      result.innerHTML =
        '<div class="calc-result-grid">' +
        '<div class="calc-result-item"><span class="calc-label">Осталось миль</span><span class="calc-value">~' + calc.remainingMiles + "</span></div>" +
        '<div class="calc-result-item is-input"><span class="calc-label">Примерный оставшийся срок</span><span class="calc-value">~' + calc.estimate + "</span></div>" +
        "</div>" +
        '<p class="calc-note">Оценка основана на ресурсе поддержки в ' + MILES_PER_PAIR + ' миль (среднее значение часто упоминаемого диапазона 300-500 миль). Пересечённая местность, больший вес тела и бег (в отличие от ходьбы) изнашивают поддержку быстрее, чем предполагает эта оценка &mdash; воспринимайте её как ориентир для планирования, а не точный порог замены.</p>';
    });
  });
})();
