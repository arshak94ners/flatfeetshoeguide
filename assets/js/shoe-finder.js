/*
 * Shoe Finder quiz — flatfeetshoeguide.com
 * Requires products-data.js to be loaded first (defines FFSG_PRODUCTS).
 *
 * Every question here changes at least one real recommendation path.
 * We deliberately don't ask things like gender, since our current
 * catalog doesn't have gender-specific picks that would change the
 * answer — asking a question that doesn't affect the result would be
 * misleading. Every recommendation points at a product we've actually
 * reviewed on this site, never an invented model.
 */
(function () {
  "use strict";

  var PRODUCTS = FFSG_PRODUCTS;

  // Each step function receives the answers collected so far and
  // returns null (skip this step) or a step definition to render.
  var STEPS = [
    {
      id: "activity",
      when: function () { return true; },
      question: "What will you mainly use these for?",
      options: [
        { value: "running", label: "Running" },
        { value: "walking", label: "Walking / on my feet a lot" },
        { value: "work", label: "Work shifts" },
        { value: "gym", label: "Gym / training" },
        { value: "sandals", label: "Sandals (warm weather)" },
        { value: "casual", label: "Everyday casual sneaker" },
        { value: "insoles", label: "Just insoles for shoes I own" }
      ]
    },
    {
      id: "severity",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "How would you describe your arch collapse / overpronation?",
      options: [
        { value: "mild", label: "Mild — slightly flat, not much rolling in" },
        { value: "moderate", label: "Moderate — noticeably flat" },
        { value: "severe", label: "Severe — significant arch collapse" }
      ]
    },
    {
      id: "walkingPref",
      when: function (a) { return a.activity === "walking"; },
      question: "What matters more to you?",
      options: [
        { value: "stability", label: "Extra stability and a wide, structured fit" },
        { value: "cushion", label: "Maximum cushioning for hard floors" }
      ]
    },
    {
      id: "workSafety",
      when: function (a) { return a.activity === "work"; },
      question: "Does your job require safety-toe (composite/steel toe) footwear?",
      options: [
        { value: "yes", label: "Yes, it's required" },
        { value: "no", label: "No, comfort matters more" }
      ]
    },
    {
      id: "gymType",
      when: function (a) { return a.activity === "gym"; },
      question: "What's most of your gym time spent on?",
      options: [
        { value: "lifting", label: "Mostly heavy barbell lifting" },
        { value: "mixed", label: "A mix of cardio and moderate lifting" }
      ]
    },
    {
      id: "sandalBreakIn",
      when: function (a) { return a.activity === "sandals"; },
      question: "Are you OK with a 1-2 week break-in period for firmer support?",
      options: [
        { value: "yes", label: "Yes, I want the most structure" },
        { value: "no", label: "No, I want comfort from step one" }
      ]
    },
    {
      id: "width",
      when: function (a) { return a.activity === "running" || a.activity === "walking"; },
      question: "Do you need a wide or extra-wide fit?",
      options: [
        { value: "standard", label: "Standard width" },
        { value: "wide", label: "Wide or extra-wide" }
      ]
    },
    {
      id: "budget",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "What's your budget?",
      options: [
        { value: "affordable", label: "Keep it affordable" },
        { value: "mid", label: "Mid-range is fine" },
        { value: "premium", label: "Best option regardless of price" }
      ]
    }
  ];

  function activeSteps(answers) {
    return STEPS.filter(function (step) {
      return step.when(answers);
    });
  }

  function getRecommendation(a) {
    switch (a.activity) {
      case "running":
        if (a.severity === "severe") {
          return {
            primary: "asicsGelKayano",
            alt: "brooksAdrenaline",
            why: "Significant arch collapse calls for the Gel-Kayano's firmer, more structured 4D Guidance System rather than a gentler guided-stability shoe."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sauconyGuide",
            alt: "brooksAdrenaline",
            why: "For mild-to-moderate overpronation on a budget, the Guide's lighter PWRRUN foam gives real mild stability without the premium price."
          };
        }
        return {
          primary: "brooksAdrenaline",
          alt: "asicsGelKayano",
          why: "The Adrenaline GTS's guided support suits mild-to-moderate overpronation well, without feeling like more shoe than you need."
        };

      case "walking":
        if (a.walkingPref === "stability") {
          return {
            primary: "newBalance928",
            alt: "hokaBondi",
            why: "The 928 is purpose-built as a walking shoe with a rollbar heel stabilizer and one of the widest size ranges around."
          };
        }
        return {
          primary: "hokaBondi",
          alt: "newBalance928",
          why: "The Bondi's tall, wide-based stack is specifically suited to absorbing repeated impact on hard floors all day."
        };

      case "work":
        if (a.workSafety === "yes") {
          return {
            primary: "timberlandPro",
            alt: "skechersWork",
            why: "If your job requires certified toe protection, that requirement comes first — the Timberland PRO's anti-fatigue footbed still gives you real support underneath it."
          };
        }
        return {
          primary: "skechersWork",
          alt: "timberlandPro",
          why: "Without a safety-toe requirement, the Relaxed Fit's roomier toe box and memory-foam insole prioritize all-shift comfort."
        };

      case "gym":
        if (a.gymType === "lifting") {
          return {
            primary: "nikeMetcon",
            alt: "asicsGelQuantum",
            why: "Heavy barbell work benefits from the Metcon's firm, near-flat heel plate for maximum ground stability under load."
          };
        }
        return {
          primary: "asicsGelQuantum",
          alt: "nikeMetcon",
          why: "For a mix of cardio and moderate lifting, the Gel-Quantum's added cushioning is more forgiving across a full session than a dedicated lifting shoe."
        };

      case "sandals":
        if (a.sandalBreakIn === "yes") {
          return {
            primary: "birkenstockArizona",
            alt: "oofosOoahh",
            why: "The Arizona's cork footbed gives genuine structural arch support once it molds to your foot over the first week or two."
          };
        }
        return {
          primary: "oofosOoahh",
          alt: "birkenstockArizona",
          why: "The OOahh's soft foam is comfortable from the very first step, with no adjustment period."
        };

      case "casual":
        return {
          primary: "newBalance990",
          alt: null,
          why: "Not a sport-specific shoe, but the 990's wide, stable platform and unusually broad width range solve a common everyday problem for flat, wider feet."
        };

      case "insoles":
        if (a.severity === "severe") {
          return {
            primary: "superfeetGreen",
            alt: "powerstepPinnacle",
            why: "Significant arch collapse needs the GREEN's rigid stabilizer shell, not just extra cushioning."
          };
        }
        if (a.severity === "moderate") {
          return {
            primary: "powerstepPinnacle",
            alt: "superfeetGreen",
            why: "The Pinnacle's semi-rigid shell gives noticeable support without the fully rigid feel of a maximum-firmness insole."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sofSole",
            alt: "powerstepPinnacle",
            why: "For mild symptoms on a budget, targeted heel and arch cushioning is a reasonable, lower-cost place to start."
          };
        }
        return {
          primary: "powerstepPinnacle",
          alt: "superfeetGreen",
          why: "Even for mild flat feet, the Pinnacle's balance of structure and comfort tends to hold up better than a purely cushioning-based insole."
        };

      default:
        return null;
    }
  }

  function widthNote(a) {
    if (a.width !== "wide") return "";
    if (a.activity === "running") {
      return "Both the Adrenaline GTS and Gel-Kayano are available in wide sizing.";
    }
    if (a.activity === "walking") {
      return "Both the 928 and Bondi offer a wide option, with the 928 covering the broadest size range.";
    }
    return "";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderProductCard(key, roleLabel) {
    var p = PRODUCTS[key];
    if (!p) return "";
    return (
      '<div class="finder-product">' +
      '<span class="tag">' + escapeHtml(roleLabel) + "</span>" +
      '<a href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">' +
      '<img src="' + p.img + '" alt="' + escapeHtml(p.alt) + '" width="200" height="133" loading="lazy">' +
      '<span class="visually-hidden"> (opens in a new tab)</span>' +
      "</a>" +
      "<h3>" + escapeHtml(p.name) + "</h3>" +
      '<div class="finder-product-ctas">' +
      '<a class="btn btn-primary btn-sm" href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">Check Price on Amazon<span class="visually-hidden"> (opens in a new tab)</span></a>' +
      '<a class="btn btn-secondary btn-sm" href="' + p.review + '">Read full review</a>' +
      "</div>" +
      "</div>"
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("shoe-finder");
    if (!root) return;

    var answers = {};
    var history = [];

    function currentStep() {
      return activeSteps(answers)[history.length];
    }

    function renderStep() {
      var steps = activeSteps(answers);
      var step = steps[history.length];

      if (!step) {
        renderResult();
        return;
      }

      var stepNum = history.length + 1;
      var total = steps.length;
      // The total is only known once activity (step 1) is answered, since
      // every later step's visibility depends on it. Showing "of 1" on the
      // very first question would falsely imply it's the only question.
      var progressLabel = history.length === 0 ? "Let's start" : "Question " + stepNum + " of " + total;

      var html =
        '<div class="finder-progress">' + progressLabel + "</div>" +
        "<h2>" + escapeHtml(step.question) + "</h2>" +
        '<div class="finder-options" role="group" aria-label="' + escapeHtml(step.question) + '">';

      step.options.forEach(function (opt) {
        html +=
          '<button type="button" class="finder-option" data-value="' + escapeHtml(opt.value) + '">' +
          escapeHtml(opt.label) +
          "</button>";
      });
      html += "</div>";

      if (history.length > 0) {
        html += '<button type="button" class="finder-back">&larr; Back</button>';
      }

      root.innerHTML = html;

      root.querySelectorAll(".finder-option").forEach(function (btn) {
        btn.addEventListener("click", function () {
          answers[step.id] = btn.getAttribute("data-value");
          history.push(step.id);
          renderStep();
          if (root.scrollIntoView) { root.scrollIntoView({ behavior: "smooth", block: "start" }); }
        });
      });

      var backBtn = root.querySelector(".finder-back");
      if (backBtn) {
        backBtn.addEventListener("click", function () {
          var lastId = history.pop();
          delete answers[lastId];
          renderStep();
        });
      }
    }

    function renderResult() {
      var rec = getRecommendation(answers);
      if (!rec) {
        root.innerHTML = "<p>Something went wrong — please retake the quiz.</p>";
        return;
      }

      var note = widthNote(answers);

      var html =
        '<div class="finder-result">' +
        '<p class="eyebrow">Your recommendation</p>' +
        "<p>" + escapeHtml(rec.why) + "</p>" +
        (note ? '<p class="muted">' + escapeHtml(note) + "</p>" : "") +
        '<div class="finder-products">' +
        renderProductCard(rec.primary, "Best match");

      if (rec.alt) {
        html += renderProductCard(rec.alt, "Also worth a look");
      }

      html +=
        "</div>" +
        '<button type="button" class="btn btn-secondary" id="finder-restart">Retake the quiz</button>' +
        "</div>";

      root.innerHTML = html;
      root.querySelector("#finder-restart").addEventListener("click", function () {
        answers = {};
        history = [];
        renderStep();
      });
      if (root.scrollIntoView) { root.scrollIntoView({ behavior: "smooth", block: "start" }); }
    }

    renderStep();
  });
})();
