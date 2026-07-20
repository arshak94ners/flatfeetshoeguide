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
      question: "Ինչի՞ համար եք հիմնականում օգտագործելու այս կոշիկները",
      options: [
        { value: "running", label: "Վազքի համար" },
        { value: "walking", label: "Քայլքի համար / երկար ժամանակ ոտքի վրա եմ" },
        { value: "work", label: "Աշխատանքային հերթափոխերի համար" },
        { value: "gym", label: "Մարզասրահի / մարզումների համար" },
        { value: "sandals", label: "Սանդալներ (տաք եղանակի համար)" },
        { value: "casual", label: "Ամենօրյա, ոչ ֆորմալ կոշիկ" },
        { value: "insoles", label: "Միայն ներբաններ՝ առկա կոշիկների համար" }
      ]
    },
    {
      id: "severity",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Ինչպե՞ս կնկարագրեիք ձեր կամարի իջեցումը / գերպրոնացիան",
      options: [
        { value: "mild", label: "Թեթև — մի փոքր տափակ է, ներս գլորում գրեթե չկա" },
        { value: "moderate", label: "Միջին — նկատելիորեն տափակ է" },
        { value: "severe", label: "Ծանր — կամարի զգալի իջեցում" }
      ]
    },
    {
      id: "walkingPref",
      when: function (a) { return a.activity === "walking"; },
      question: "Ի՞նչն է ձեզ համար ավելի կարևոր",
      options: [
        { value: "stability", label: "Հավելյալ կայունություն և լայն, կառուցվածքային տեղավորում" },
        { value: "cushion", label: "Առավելագույն ամորտիզացիա կոշտ հատակների համար" }
      ]
    },
    {
      id: "workSafety",
      when: function (a) { return a.activity === "work"; },
      question: "Ձեր աշխատանքը պահանջու՞մ է պաշտպանիչ քիթ ունեցող կոշիկներ (կոմպոզիտային/պողպատե)",
      options: [
        { value: "yes", label: "Այո, դա պարտադիր է" },
        { value: "no", label: "Ոչ, հարմարավետությունն ավելի կարևոր է" }
      ]
    },
    {
      id: "gymType",
      when: function (a) { return a.activity === "gym"; },
      question: "Ինչի՞ վրա եք հիմնականում ծախսում ձեր մարզասրահի ժամանակը",
      options: [
        { value: "lifting", label: "Հիմնականում ծանր վարժություններ շտանգայով" },
        { value: "mixed", label: "Կարդիո և չափավոր կշիռների համադրություն" }
      ]
    },
    {
      id: "sandalBreakIn",
      when: function (a) { return a.activity === "sandals"; },
      question: "Կհամաձայնվե՞ք 1-2 շաբաթ «կրելու» շրջանի հետ՝ ավելի ամուր աջակցության համար",
      options: [
        { value: "yes", label: "Այո, ուզում եմ առավելագույն կառուցվածք" },
        { value: "no", label: "Ոչ, ուզում եմ հարմարավետություն հենց առաջին քայլից" }
      ]
    },
    {
      id: "width",
      when: function (a) { return a.activity === "running" || a.activity === "walking"; },
      question: "Ձեզ անհրաժե՞շտ է լայն կամ հավելյալ լայն տեղավորում",
      options: [
        { value: "standard", label: "Ստանդարտ լայնություն" },
        { value: "wide", label: "Լայն կամ հավելյալ լայն" }
      ]
    },
    {
      id: "budget",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Ի՞նչ բյուջե ունեք",
      options: [
        { value: "affordable", label: "Ուզում եմ մատչելի տարբերակ" },
        { value: "mid", label: "Միջին գնային տարբերակը լավ է" },
        { value: "premium", label: "Լավագույն տարբերակը՝ անկախ գնից" }
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
            why: "Կամարի զգալի իջեցումը պահանջում է Gel-Kayano-ի ավելի ամուր, ավելի կառուցվածքային 4D ուղղորդման համակարգը, այլ ոչ թե ավելի մեղմ, ուղղորդված կայունությամբ կոշիկ։"
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sauconyGuide",
            alt: "brooksAdrenaline",
            why: "Թեթև-միջին գերպրոնացիայի համար, սահմանափակ բյուջեով, Guide-ի ավելի թեթև PWRRUN փրփուրն ապահովում է իրական, մեղմ կայունություն՝ առանց պրեմիում գնի։"
          };
        }
        return {
          primary: "brooksAdrenaline",
          alt: "asicsGelKayano",
          why: "Adrenaline GTS-ի ուղղորդված աջակցությունը լավ է համապատասխանում թեթև-միջին գերպրոնացիային, առանց այն զգացողության, թե կրում եք ավելի շատ կոշիկ, քան ձեզ պետք է։"
        };

      case "walking":
        if (a.walkingPref === "stability") {
          return {
            primary: "newBalance928",
            alt: "hokaBondi",
            why: "928-ը հատուկ ստեղծված է որպես քայլքի կոշիկ՝ rollbar կրունկի կայունարարով և ամենալայն չափերի տիրույթներից մեկով։"
          };
        }
        return {
          primary: "hokaBondi",
          alt: "newBalance928",
          why: "Bondi-ի բարձր, լայն հիմքով ներբանը հատուկ հարմարեցված է ամբողջ օրվա ընթացքում կրկնվող հարվածները կլանելու համար՝ կոշտ հատակների վրա։"
        };

      case "work":
        if (a.workSafety === "yes") {
          return {
            primary: "timberlandPro",
            alt: "skechersWork",
            why: "Եթե ձեր աշխատանքը պահանջում է սերտիֆիկացված քթի պաշտպանություն, այդ պահանջն առաջին տեղում է — Timberland PRO-ի հոգնածությունը նվազեցնող ներբանն այնուամենայնիվ ապահովում է իրական աջակցություն։"
          };
        }
        return {
          primary: "skechersWork",
          alt: "timberlandPro",
          why: "Առանց պաշտպանիչ քթի պահանջի՝ Relaxed Fit-ի ավելի ազատ քթամասն ու memory-foam ներբանը առաջնահերթություն են տալիս ամբողջ հերթափոխի հարմարավետությանը։"
        };

      case "gym":
        if (a.gymType === "lifting") {
          return {
            primary: "nikeMetcon",
            alt: "asicsGelQuantum",
            why: "Ծանր վարժություններ շտանգայով անելիս օգտակար է Metcon-ի կոշտ, գրեթե հարթ կրունկի հենարանը, որն ապահովում է առավելագույն կայունություն բեռի տակ։"
          };
        }
        return {
          primary: "asicsGelQuantum",
          alt: "nikeMetcon",
          why: "Կարդիոյի և չափավոր կշիռների համադրության համար Gel-Quantum-ի հավելյալ ամորտիզացիան ավելի հարմար է ամբողջ մարզման ընթացքում, քան մասնագիտացված մարզական կոշիկը։"
        };

      case "sandals":
        if (a.sandalBreakIn === "yes") {
          return {
            primary: "birkenstockArizona",
            alt: "oofosOoahh",
            why: "Arizona-ի խցանե ներբանն ապահովում է իրական կառուցվածքային կամարային աջակցություն, երբ առաջին մեկ-երկու շաբաթվա ընթացքում ընդունում է ձեր ոտքի ձևը։"
          };
        }
        return {
          primary: "oofosOoahh",
          alt: "birkenstockArizona",
          why: "OOahh-ի փափուկ փրփուրը հարմարավետ է հենց առաջին քայլից՝ առանց հարմարեցման շրջանի։"
        };

      case "casual":
        return {
          primary: "newBalance990",
          alt: null,
          why: "Սպորտային մասնագիտացված կոշիկ չէ, բայց 990-ի լայն, կայուն հենքն ու անսովոր լայն չափերի տիրույթը լուծում են տափակ, լայն ոտքերի տերերի հաճախակի հանդիպող խնդիրը։"
        };

      case "insoles":
        if (a.severity === "severe") {
          return {
            primary: "superfeetGreen",
            alt: "powerstepPinnacle",
            why: "Կամարի զգալի իջեցումը պահանջում է GREEN-ի կոշտ, կայունացնող պատյանը, ոչ միայն հավելյալ ամորտիզացիա։"
          };
        }
        if (a.severity === "moderate") {
          return {
            primary: "powerstepPinnacle",
            alt: "superfeetGreen",
            why: "Pinnacle-ի կիսակոշտ պատյանն ապահովում է նկատելի աջակցություն՝ առանց առավելագույն կոշտության ներբանի լրիվ կոշտ զգացողության։"
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sofSole",
            alt: "powerstepPinnacle",
            why: "Թեթև ախտանիշների և սահմանափակ բյուջեի դեպքում կրունկի և կամարի նպատակային ամորտիզացիան ողջամիտ, ավելի էժան մեկնարկային տարբերակ է։"
          };
        }
        return {
          primary: "powerstepPinnacle",
          alt: "superfeetGreen",
          why: "Նույնիսկ թեթև տափակաթաթության դեպքում Pinnacle-ի կառուցվածքի և հարմարավետության հավասարակշռությունը սովորաբար ավելի երկար է դիմանում, քան զուտ ամորտիզացիայի վրա հիմնված ներբանը։"
        };

      default:
        return null;
    }
  }

  function widthNote(a) {
    if (a.width !== "wide") return "";
    if (a.activity === "running") {
      return "Ե՛վ Adrenaline GTS-ը, և՛ Gel-Kayano-ն հասանելի են լայն չափսերով։";
    }
    if (a.activity === "walking") {
      return "Ե՛վ 928-ը, և՛ Bondi-ն ունեն լայն տարբերակ, իսկ 928-ը ծածկում է ամենալայն չափերի տիրույթը։";
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
      '<a class="btn btn-primary btn-sm" href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">Ստուգել գինը Amazon-ում<span class="visually-hidden"> (opens in a new tab)</span></a>' +
      '<a class="btn btn-secondary btn-sm" href="' + p.review + '">Կարդալ ամբողջական ակնարկը</a>' +
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
      var progressLabel = history.length === 0 ? "Սկսենք" : "Հարց " + stepNum + " / " + total;

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
        html += '<button type="button" class="finder-back">&larr; Հետ</button>';
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
        root.innerHTML = "<p>Ինչ-որ բան այն չգնաց — խնդրում ենք կրկին անցնել թեստը։</p>";
        return;
      }

      var note = widthNote(answers);

      var html =
        '<div class="finder-result">' +
        '<p class="eyebrow">Ձեր առաջարկը</p>' +
        "<p>" + escapeHtml(rec.why) + "</p>" +
        (note ? '<p class="muted">' + escapeHtml(note) + "</p>" : "") +
        '<div class="finder-products">' +
        renderProductCard(rec.primary, "Լավագույն համընկնում");

      if (rec.alt) {
        html += renderProductCard(rec.alt, "Նաև արժե ուշադրության");
      }

      html +=
        "</div>" +
        '<button type="button" class="btn btn-secondary" id="finder-restart">Կրկին անցնել թեստը</button>' +
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
