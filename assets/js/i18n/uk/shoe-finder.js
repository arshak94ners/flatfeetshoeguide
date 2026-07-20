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
      question: "Для чого вам в основному потрібне це взуття?",
      options: [
        { value: "running", label: "Біг" },
        { value: "walking", label: "Ходьба / багато часу на ногах" },
        { value: "work", label: "Робочі зміни" },
        { value: "gym", label: "Спортзал / тренування" },
        { value: "sandals", label: "Сандалі (тепла погода)" },
        { value: "casual", label: "Повсякденні кросівки" },
        { value: "insoles", label: "Тільки устілки для наявного взуття" }
      ]
    },
    {
      id: "severity",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Як би ви описали сплощення склепіння / гіперпронацію?",
      options: [
        { value: "mild", label: "Легка — трохи плоска стопа, невелике завалювання всередину" },
        { value: "moderate", label: "Помірна — помітно плоска стопа" },
        { value: "severe", label: "Виражена — значне сплощення склепіння" }
      ]
    },
    {
      id: "walkingPref",
      when: function (a) { return a.activity === "walking"; },
      question: "Що для вас важливіше?",
      options: [
        { value: "stability", label: "Додаткова стабільність і широка, структурована посадка" },
        { value: "cushion", label: "Максимальна амортизація для твердих підлог" }
      ]
    },
    {
      id: "workSafety",
      when: function (a) { return a.activity === "work"; },
      question: "Чи вимагає ваша робота взуття із захисним носком (композитним/сталевим)?",
      options: [
        { value: "yes", label: "Так, це обов'язково" },
        { value: "no", label: "Ні, комфорт важливіший" }
      ]
    },
    {
      id: "gymType",
      when: function (a) { return a.activity === "gym"; },
      question: "На що йде більшість часу в залі?",
      options: [
        { value: "lifting", label: "Переважно важка робота зі штангою" },
        { value: "mixed", label: "Суміш кардіо та помірних силових тренувань" }
      ]
    },
    {
      id: "sandalBreakIn",
      when: function (a) { return a.activity === "sandals"; },
      question: "Чи готові ви розношувати взуття 1-2 тижні заради жорсткішої підтримки?",
      options: [
        { value: "yes", label: "Так, хочу максимум структурованості" },
        { value: "no", label: "Ні, хочу комфорт з першого кроку" }
      ]
    },
    {
      id: "width",
      when: function (a) { return a.activity === "running" || a.activity === "walking"; },
      question: "Чи потрібна вам широка або дуже широка посадка?",
      options: [
        { value: "standard", label: "Стандартна ширина" },
        { value: "wide", label: "Широка або дуже широка" }
      ]
    },
    {
      id: "budget",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Який у вас бюджет?",
      options: [
        { value: "affordable", label: "Хочу доступний варіант" },
        { value: "mid", label: "Середній ціновий сегмент підійде" },
        { value: "premium", label: "Найкращий варіант незалежно від ціни" }
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
            why: "Значне сплощення склепіння вимагає жорсткішої, більш структурованої системи 4D Guidance System моделі Gel-Kayano, а не м'якшого варіанту з керованою стабільністю."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sauconyGuide",
            alt: "brooksAdrenaline",
            why: "При легкій-помірній гіперпронації та обмеженому бюджеті легша піна PWRRUN моделі Guide дає реальну помірну стабільність без преміальної ціни."
          };
        }
        return {
          primary: "brooksAdrenaline",
          alt: "asicsGelKayano",
          why: "Керована підтримка Adrenaline GTS добре підходить для легкої-помірної гіперпронації, не даючи відчуття зайвої жорсткості, якщо вона вам не потрібна."
        };

      case "walking":
        if (a.walkingPref === "stability") {
          return {
            primary: "newBalance928",
            alt: "hokaBondi",
            why: "928 створена спеціально як взуття для ходьби з п'ятковим стабілізатором Rollbar і одним із найширших діапазонів розмірів на ринку."
          };
        }
        return {
          primary: "hokaBondi",
          alt: "newBalance928",
          why: "Високий, широкий стек Bondi спеціально розрахований на поглинання повторюваних ударів на твердих підлогах протягом усього дня."
        };

      case "work":
        if (a.workSafety === "yes") {
          return {
            primary: "timberlandPro",
            alt: "skechersWork",
            why: "Якщо робота вимагає сертифікованого захисту носка, ця вимога — головна, а устілка проти втоми Timberland PRO все одно забезпечує реальну підтримку під нею."
          };
        }
        return {
          primary: "skechersWork",
          alt: "timberlandPro",
          why: "Без вимоги захисного носка просторіший носок Relaxed Fit та устілка з піни з ефектом пам'яті ставлять комфорт протягом усієї зміни на перше місце."
        };

      case "gym":
        if (a.gymType === "lifting") {
          return {
            primary: "nikeMetcon",
            alt: "asicsGelQuantum",
            why: "Важка робота зі штангою виграє від жорсткої, майже плоскої п'яткової пластини Metcon, яка забезпечує максимальну стабільність під навантаженням."
          };
        }
        return {
          primary: "asicsGelQuantum",
          alt: "nikeMetcon",
          why: "Для суміші кардіо та помірних силових тренувань додаткова амортизація Gel-Quantum комфортніша протягом усього заняття, ніж спеціалізоване взуття для важкої атлетики."
        };

      case "sandals":
        if (a.sandalBreakIn === "yes") {
          return {
            primary: "birkenstockArizona",
            alt: "oofosOoahh",
            why: "Коркова устілка Arizona дає справжню структурну підтримку склепіння, щойно розноситься під форму вашої стопи протягом першого тижня-двох."
          };
        }
        return {
          primary: "oofosOoahh",
          alt: "birkenstockArizona",
          why: "М'яка піна OOahh комфортна з першого кроку, без жодного періоду розношування."
        };

      case "casual":
        return {
          primary: "newBalance990",
          alt: null,
          why: "Не спеціалізоване спортивне взуття, але широка, стабільна платформа та незвично широкий діапазон повнот 990 вирішують поширену повсякденну проблему для плоскої, широкої стопи."
        };

      case "insoles":
        if (a.severity === "severe") {
          return {
            primary: "superfeetGreen",
            alt: "powerstepPinnacle",
            why: "Значне сплощення склепіння потребує жорсткого стабілізуючого каркаса GREEN, а не просто додаткової амортизації."
          };
        }
        if (a.severity === "moderate") {
          return {
            primary: "powerstepPinnacle",
            alt: "superfeetGreen",
            why: "Напівжорсткий каркас Pinnacle дає відчутну підтримку без повністю жорсткого відчуття максимально твердої устілки."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sofSole",
            alt: "powerstepPinnacle",
            why: "При легких симптомах і обмеженому бюджеті цільова амортизація п'яти та склепіння — розумний, недорогий варіант для початку."
          };
        }
        return {
          primary: "powerstepPinnacle",
          alt: "superfeetGreen",
          why: "Навіть при легкому плоскостопітті баланс структури й комфорту Pinnacle зазвичай тримається краще, ніж устілка, розрахована лише на амортизацію."
        };

      default:
        return null;
    }
  }

  function widthNote(a) {
    if (a.width !== "wide") return "";
    if (a.activity === "running") {
      return "І Adrenaline GTS, і Gel-Kayano доступні у широкій повноті.";
    }
    if (a.activity === "walking") {
      return "І 928, і Bondi мають широку повноту, причому 928 охоплює найширший діапазон розмірів.";
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
      '<span class="visually-hidden"> (відкривається у новій вкладці)</span>' +
      "</a>" +
      "<h3>" + escapeHtml(p.name) + "</h3>" +
      '<div class="finder-product-ctas">' +
      '<a class="btn btn-primary btn-sm" href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">Перевірити ціну на Amazon<span class="visually-hidden"> (відкривається у новій вкладці)</span></a>' +
      '<a class="btn btn-secondary btn-sm" href="' + p.review + '">Читати повний огляд</a>' +
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
      var progressLabel = history.length === 0 ? "Почнімо" : "Питання " + stepNum + " з " + total;

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
        html += '<button type="button" class="finder-back">&larr; Назад</button>';
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
        root.innerHTML = "<p>Щось пішло не так — будь ласка, пройдіть опитування ще раз.</p>";
        return;
      }

      var note = widthNote(answers);

      var html =
        '<div class="finder-result">' +
        '<p class="eyebrow">Ваша рекомендація</p>' +
        "<p>" + escapeHtml(rec.why) + "</p>" +
        (note ? '<p class="muted">' + escapeHtml(note) + "</p>" : "") +
        '<div class="finder-products">' +
        renderProductCard(rec.primary, "Найкращий варіант");

      if (rec.alt) {
        html += renderProductCard(rec.alt, "Також варто розглянути");
      }

      html +=
        "</div>" +
        '<button type="button" class="btn btn-secondary" id="finder-restart">Пройти опитування знову</button>' +
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
