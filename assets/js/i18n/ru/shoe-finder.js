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
      question: "Для чего вы в основном будете использовать обувь?",
      options: [
        { value: "running", label: "Бег" },
        { value: "walking", label: "Ходьба / много времени на ногах" },
        { value: "work", label: "Рабочие смены" },
        { value: "gym", label: "Спортзал / тренировки" },
        { value: "sandals", label: "Сандалии (тёплое время года)" },
        { value: "casual", label: "Повседневные кроссовки" },
        { value: "insoles", label: "Только стельки для имеющейся обуви" }
      ]
    },
    {
      id: "severity",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Как бы вы описали опущение свода стопы / гиперпронацию?",
      options: [
        { value: "mild", label: "Лёгкая степень — стопа слегка плоская, заваливание внутрь незначительное" },
        { value: "moderate", label: "Умеренная степень — заметное плоскостопие" },
        { value: "severe", label: "Выраженная степень — значительное опущение свода стопы" }
      ]
    },
    {
      id: "walkingPref",
      when: function (a) { return a.activity === "walking"; },
      question: "Что для вас важнее?",
      options: [
        { value: "stability", label: "Дополнительная стабильность и широкая, структурированная посадка" },
        { value: "cushion", label: "Максимальная амортизация для твёрдых полов" }
      ]
    },
    {
      id: "workSafety",
      when: function (a) { return a.activity === "work"; },
      question: "Требует ли ваша работа обувь с защитным носком (композитным/стальным)?",
      options: [
        { value: "yes", label: "Да, это обязательное требование" },
        { value: "no", label: "Нет, важнее комфорт" }
      ]
    },
    {
      id: "gymType",
      when: function (a) { return a.activity === "gym"; },
      question: "На что уходит большая часть времени в зале?",
      options: [
        { value: "lifting", label: "В основном тяжёлая работа со штангой" },
        { value: "mixed", label: "Смешанные кардио и умеренная силовая нагрузка" }
      ]
    },
    {
      id: "sandalBreakIn",
      when: function (a) { return a.activity === "sandals"; },
      question: "Готовы ли вы к 1-2 неделям разнашивания ради более жёсткой поддержки?",
      options: [
        { value: "yes", label: "Да, мне важна максимальная структурированность" },
        { value: "no", label: "Нет, хочу комфорт с первого шага" }
      ]
    },
    {
      id: "width",
      when: function (a) { return a.activity === "running" || a.activity === "walking"; },
      question: "Нужна ли вам широкая или очень широкая посадка?",
      options: [
        { value: "standard", label: "Стандартная ширина" },
        { value: "wide", label: "Широкая или очень широкая" }
      ]
    },
    {
      id: "budget",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Какой у вас бюджет?",
      options: [
        { value: "affordable", label: "Ограниченный бюджет" },
        { value: "mid", label: "Средний бюджет подойдёт" },
        { value: "premium", label: "Лучший вариант независимо от цены" }
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
            why: "Значительное опущение свода стопы требует более жёсткой и структурированной системы 4D Guidance System от Gel-Kayano, а не более мягкой модели с направленной стабилизацией."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sauconyGuide",
            alt: "brooksAdrenaline",
            why: "При лёгкой-умеренной гиперпронации и ограниченном бюджете лёгкая пена PWRRUN в Guide обеспечивает реальную лёгкую стабилизацию без премиальной цены."
          };
        }
        return {
          primary: "brooksAdrenaline",
          alt: "asicsGelKayano",
          why: "Направленная поддержка Adrenaline GTS хорошо подходит при лёгкой-умеренной гиперпронации, не создавая ощущения избыточности."
        };

      case "walking":
        if (a.walkingPref === "stability") {
          return {
            primary: "newBalance928",
            alt: "hokaBondi",
            why: "928 создана специально для ходьбы: стабилизатор пятки Rollbar и один из самых широких диапазонов размеров на рынке."
          };
        }
        return {
          primary: "hokaBondi",
          alt: "newBalance928",
          why: "Высокая, широкая подошва Bondi отлично поглощает многократные удары при ходьбе по твёрдым полам весь день."
        };

      case "work":
        if (a.workSafety === "yes") {
          return {
            primary: "timberlandPro",
            alt: "skechersWork",
            why: "Если работа требует сертифицированной защиты носка, это требование в приоритете — при этом стелька против усталости в Timberland PRO всё же обеспечивает реальную поддержку."
          };
        }
        return {
          primary: "skechersWork",
          alt: "timberlandPro",
          why: "Без требования защитного носка более просторный носок и стелька с эффектом памяти в Relaxed Fit обеспечивают комфорт на протяжении всей смены."
        };

      case "gym":
        if (a.gymType === "lifting") {
          return {
            primary: "nikeMetcon",
            alt: "asicsGelQuantum",
            why: "Для тяжёлой работы со штангой жёсткая, почти плоская пластина в пятке Metcon обеспечивает максимальную устойчивость под нагрузкой."
          };
        }
        return {
          primary: "asicsGelQuantum",
          alt: "nikeMetcon",
          why: "При смешанных кардио- и силовых тренировках дополнительная амортизация Gel-Quantum комфортнее на протяжении всей тренировки, чем узкоспециализированная обувь для силовой работы."
        };

      case "sandals":
        if (a.sandalBreakIn === "yes") {
          return {
            primary: "birkenstockArizona",
            alt: "oofosOoahh",
            why: "Пробковая стелька Arizona обеспечивает настоящую структурную поддержку свода стопы, когда разносится по ноге за первые одну-две недели."
          };
        }
        return {
          primary: "oofosOoahh",
          alt: "birkenstockArizona",
          why: "Мягкая пена OOahh комфортна с первого шага, без периода привыкания."
        };

      case "casual":
        return {
          primary: "newBalance990",
          alt: null,
          why: "Это не спортивная обувь, но широкая устойчивая платформа и необычно широкий диапазон размеров 990 решают распространённую повседневную проблему широкой плоской стопы."
        };

      case "insoles":
        if (a.severity === "severe") {
          return {
            primary: "superfeetGreen",
            alt: "powerstepPinnacle",
            why: "При значительном опущении свода стопы нужен жёсткий стабилизирующий каркас GREEN, а не просто дополнительная амортизация."
          };
        }
        if (a.severity === "moderate") {
          return {
            primary: "powerstepPinnacle",
            alt: "superfeetGreen",
            why: "Полужёсткий каркас Pinnacle даёт заметную поддержку без ощущения максимально жёсткой стельки."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sofSole",
            alt: "powerstepPinnacle",
            why: "При лёгких симптомах и ограниченном бюджете точечная амортизация пятки и свода стопы — разумный недорогой вариант для начала."
          };
        }
        return {
          primary: "powerstepPinnacle",
          alt: "superfeetGreen",
          why: "Даже при лёгком плоскостопии баланс структуры и комфорта Pinnacle обычно работает лучше, чем стелька, полагающаяся исключительно на амортизацию."
        };

      default:
        return null;
    }
  }

  function widthNote(a) {
    if (a.width !== "wide") return "";
    if (a.activity === "running") {
      return "И Adrenaline GTS, и Gel-Kayano доступны в широкой посадке.";
    }
    if (a.activity === "walking") {
      return "И 928, и Bondi предлагают широкую версию, при этом 928 охватывает самый широкий диапазон размеров.";
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
      '<span class="visually-hidden"> (открывается в новой вкладке)</span>' +
      "</a>" +
      "<h3>" + escapeHtml(p.name) + "</h3>" +
      '<div class="finder-product-ctas">' +
      '<a class="btn btn-primary btn-sm" href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">Посмотреть цену на Amazon<span class="visually-hidden"> (открывается в новой вкладке)</span></a>' +
      '<a class="btn btn-secondary btn-sm" href="' + p.review + '">Читать полный обзор</a>' +
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
      var progressLabel = history.length === 0 ? "Начнём" : "Вопрос " + stepNum + " из " + total;

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
        root.innerHTML = "<p>Что-то пошло не так — пожалуйста, пройдите тест заново.</p>";
        return;
      }

      var note = widthNote(answers);

      var html =
        '<div class="finder-result">' +
        '<p class="eyebrow">Ваша рекомендация</p>' +
        "<p>" + escapeHtml(rec.why) + "</p>" +
        (note ? '<p class="muted">' + escapeHtml(note) + "</p>" : "") +
        '<div class="finder-products">' +
        renderProductCard(rec.primary, "Лучший вариант");

      if (rec.alt) {
        html += renderProductCard(rec.alt, "Также стоит обратить внимание");
      }

      html +=
        "</div>" +
        '<button type="button" class="btn btn-secondary" id="finder-restart">Пройти тест заново</button>' +
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
