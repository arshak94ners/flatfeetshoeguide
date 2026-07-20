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
    if (weeks < 8) {
      var wholeWeeks = Math.round(weeks);
      return wholeWeeks + " " + (wholeWeeks === 1 ? "շաբաթ" : "շաբաթ");
    }
    var months = weeks / 4.345;
    var roundedMonths = Math.round(months * 10) / 10;
    return roundedMonths + " " + (roundedMonths === 1 ? "ամիս" : "ամիս");
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
        result.innerHTML = '<p class="calc-error" role="alert">Մուտքագրեք ձեր սովորական շաբաթական մղոնաժամը (վազք + քայլք այս կոշիկներով)՝ գնահատական ստանալու համար։</p>';
        return;
      }
      if (currentMiles < 0 || currentMiles > 2000) {
        result.hidden = false;
        result.innerHTML = '<p class="calc-error" role="alert">Ստուգեք այս զույգի վրա արդեն անցած մղոնաշարքը &mdash; այդ թիվը տիրույթից դուրս է թվում։</p>';
        return;
      }

      var calc = calculate(weeklyMiles, currentMiles);
      result.hidden = false;

      if (currentMiles >= MILES_PER_PAIR) {
        result.innerHTML =
          '<div class="calc-result-grid"><div class="calc-result-item is-input"><span class="calc-label">Կարգավիճակ</span><span class="calc-value">Փոխարինեք հիմա</span></div></div>' +
          '<p class="calc-note">Այս զույգն արդեն դուրս է եկել սովորական 300-500 մղոն աջակցության տիրույթից (մենք որպես միջին թիվ օգտագործում ենք ' + MILES_PER_PAIR + ' մղոն)։ Միջներբանի ամորտիզացիան և ցանկացած կայունացնող կառուցվածք, ամենայն հավանականությամբ, արդեն մաշված են, նույնիսկ եթե տակափայտի փորվածքն ինքնին դեռ նորմալ տեսք ունի։</p>';
        return;
      }

      result.innerHTML =
        '<div class="calc-result-grid">' +
        '<div class="calc-result-item"><span class="calc-label">Մնացած մղոններ</span><span class="calc-value">~' + calc.remainingMiles + "</span></div>" +
        '<div class="calc-result-item is-input"><span class="calc-label">Մնացած մոտավոր ժամանակը</span><span class="calc-value">~' + calc.estimate + "</span></div>" +
        "</div>" +
        '<p class="calc-note">Հիմնված է ' + MILES_PER_PAIR + '-մղոն աջակցության տիրույթի վրա (հաճախ նշվող 300-500 մղոն միջակայքի միջինը)։ Ավելի կոշտ ռելիեֆը, ավելի մեծ մարմնի քաշը և վազքը (քայլքի փոխարեն) ավելի արագ են մաշում աջակցությունը, քան այս գնահատականն ենթադրում է &mdash; վերաբերվեք սրան որպես պլանավորման գնահատական, ոչ թե ճշգրիտ սահման։</p>';
    });
  });
})();
