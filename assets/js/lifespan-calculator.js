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
    if (weeks < 8) return Math.round(weeks) + " week" + (Math.round(weeks) === 1 ? "" : "s");
    var months = weeks / 4.345;
    return Math.round(months * 10) / 10 + " month" + (Math.round(months * 10) / 10 === 1 ? "" : "s");
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
        result.innerHTML = '<p class="calc-error" role="alert">Enter your typical weekly mileage (running + walking in these shoes) to get an estimate.</p>';
        return;
      }
      if (currentMiles < 0 || currentMiles > 2000) {
        result.hidden = false;
        result.innerHTML = '<p class="calc-error" role="alert">Double-check the miles already on this pair &mdash; that number looks out of range.</p>';
        return;
      }

      var calc = calculate(weeklyMiles, currentMiles);
      result.hidden = false;

      if (currentMiles >= MILES_PER_PAIR) {
        result.innerHTML =
          '<div class="calc-result-grid"><div class="calc-result-item is-input"><span class="calc-label">Status</span><span class="calc-value">Replace now</span></div></div>' +
          '<p class="calc-note">This pair is already past the typical 300-500 mile support window (we use ' + MILES_PER_PAIR + ' as the midpoint). The midsole cushioning and any stability structure have likely broken down even if the outsole tread still looks fine.</p>';
        return;
      }

      result.innerHTML =
        '<div class="calc-result-grid">' +
        '<div class="calc-result-item"><span class="calc-label">Miles left</span><span class="calc-value">~' + calc.remainingMiles + "</span></div>" +
        '<div class="calc-result-item is-input"><span class="calc-label">Estimated time left</span><span class="calc-value">~' + calc.estimate + "</span></div>" +
        "</div>" +
        '<p class="calc-note">Based on a ' + MILES_PER_PAIR + '-mile support window (the middle of the commonly-cited 300-500 mile range). Rougher terrain, higher body weight, and running (versus walking) all wear support down faster than this estimate assumes &mdash; treat this as a planning estimate, not a precise cutoff.</p>';
    });
  });
})();
