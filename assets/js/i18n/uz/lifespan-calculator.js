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

  function formatWeeks(weeks) {
    if (weeks < 0) return "0";
    if (weeks < 8) return Math.round(weeks) + " hafta";
    var months = weeks / 4.345;
    return Math.round(months * 10) / 10 + " oy";
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
        result.innerHTML = '<p class="calc-error" role="alert">Taxminiy hisob-kitob olish uchun ushbu poyabzalda odatdagi haftalik masofangizni (yugurish + yurish) kiriting.</p>';
        return;
      }
      if (currentMiles < 0 || currentMiles > 2000) {
        result.hidden = false;
        result.innerHTML = '<p class="calc-error" role="alert">Ushbu juftlikda allaqachon bosib o\'tilgan masofani qayta tekshiring &mdash; bu raqam mos kelmayotganga o\'xshaydi.</p>';
        return;
      }

      var calc = calculate(weeklyMiles, currentMiles);
      result.hidden = false;

      if (currentMiles >= MILES_PER_PAIR) {
        result.innerHTML =
          '<div class="calc-result-grid"><div class="calc-result-item is-input"><span class="calc-label">Holat</span><span class="calc-value">Hoziroq almashtiring</span></div></div>' +
          '<p class="calc-note">Bu juftlik allaqachon odatdagi 300-500 milyalik tayanch muddatidan o\'tgan (biz o\'rtacha qiymat sifatida ' + MILES_PER_PAIR + ' milyani olamiz). Tashqi taglik hali yaxshi ko\'rinsa ham, o\'rta taglikning yumshoqligi va har qanday stabillik tuzilmasi allaqachon buzilgan bo\'lishi mumkin.</p>';
        return;
      }

      result.innerHTML =
        '<div class="calc-result-grid">' +
        '<div class="calc-result-item"><span class="calc-label">Qolgan masofa</span><span class="calc-value">~' + calc.remainingMiles + "</span></div>" +
        '<div class="calc-result-item is-input"><span class="calc-label">Taxminiy qolgan vaqt</span><span class="calc-value">~' + calc.estimate + "</span></div>" +
        "</div>" +
        '<p class="calc-note">' + MILES_PER_PAIR + '-milyalik tayanch muddatiga asoslangan (odatda ko\'rsatiladigan 300-500 milya oralig\'ining o\'rtasi). Notekis yer, yuqori tana vazni va yurish o\'rniga yugurish tayanchni bu taxmindan tezroq eskirtiradi &mdash; buni aniq chegara emas, balki rejalashtirish uchun taxmin sifatida qabul qiling.</p>';
    });
  });
})();
