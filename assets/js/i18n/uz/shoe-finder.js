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
      question: "Ularni asosan nima uchun ishlatasiz?",
      options: [
        { value: "running", label: "Yugurish" },
        { value: "walking", label: "Yurish / ko'p vaqt oyoqda bo'lish" },
        { value: "work", label: "Ish smenalari" },
        { value: "gym", label: "Sport zali / mashqlar" },
        { value: "sandals", label: "Sandallar (issiq havo uchun)" },
        { value: "casual", label: "Kundalik oddiy krossovka" },
        { value: "insoles", label: "Faqat egallik qilgan poyabzallarim uchun ichki tagliklar" }
      ]
    },
    {
      id: "severity",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Gumbaz cho'kishi / ortiqcha pronatsiyangizni qanday ta'riflaysiz?",
      options: [
        { value: "mild", label: "Yengil — biroz yassi, ko'p ichkariga botmaydi" },
        { value: "moderate", label: "O'rtacha — sezilarli darajada yassi" },
        { value: "severe", label: "Og'ir — gumbaz sezilarli darajada cho'kkan" }
      ]
    },
    {
      id: "walkingPref",
      when: function (a) { return a.activity === "walking"; },
      question: "Siz uchun nima muhimroq?",
      options: [
        { value: "stability", label: "Qo'shimcha stabillik va keng, tuzilgan moslik" },
        { value: "cushion", label: "Qattiq yuzalar uchun maksimal yumshoqlik" }
      ]
    },
    {
      id: "workSafety",
      when: function (a) { return a.activity === "work"; },
      question: "Ishingiz himoya burnli (composite/po'lat burunli) poyabzal talab qiladimi?",
      options: [
        { value: "yes", label: "Ha, bu talab qilinadi" },
        { value: "no", label: "Yo'q, qulaylik muhimroq" }
      ]
    },
    {
      id: "gymType",
      when: function (a) { return a.activity === "gym"; },
      question: "Sport zalidagi vaqtingizning ko'pi nimaga sarflanadi?",
      options: [
        { value: "lifting", label: "Asosan og'ir shtanga ko'tarish" },
        { value: "mixed", label: "Kardio va o'rtacha og'irlik ko'tarish aralashmasi" }
      ]
    },
    {
      id: "sandalBreakIn",
      when: function (a) { return a.activity === "sandals"; },
      question: "Qattiqroq tayanch uchun 1-2 haftalik moslashuv davriga rozimisiz?",
      options: [
        { value: "yes", label: "Ha, maksimal tuzilmani xohlayman" },
        { value: "no", label: "Yo'q, birinchi qadamdan qulaylik kerak" }
      ]
    },
    {
      id: "width",
      when: function (a) { return a.activity === "running" || a.activity === "walking"; },
      question: "Sizga keng yoki juda keng o'lcham kerakmi?",
      options: [
        { value: "standard", label: "Standart kenglik" },
        { value: "wide", label: "Keng yoki juda keng" }
      ]
    },
    {
      id: "budget",
      when: function (a) { return a.activity === "running" || a.activity === "insoles"; },
      question: "Byudjetingiz qancha?",
      options: [
        { value: "affordable", label: "Arzonroq bo'lsin" },
        { value: "mid", label: "O'rtacha narx yetarli" },
        { value: "premium", label: "Narxidan qat'i nazar eng yaxshisi" }
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
            why: "Gumbazning sezilarli darajada cho'kishi Gel-Kayano'ning qattiqroq, ancha tuzilgan 4D yo'naltirish tizimini talab qiladi, yumshoqroq yo'naltirilgan stabillik poyabzalidan ko'ra."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sauconyGuide",
            alt: "brooksAdrenaline",
            why: "Tejamkor narxda yengil-o'rtacha ortiqcha pronatsiya uchun Guide'ning yengilroq PWRRUN ko'pigi qimmat narxsiz haqiqiy yengil stabillikni beradi."
          };
        }
        return {
          primary: "brooksAdrenaline",
          alt: "asicsGelKayano",
          why: "Adrenaline GTS'ning yo'naltirilgan tayanchi yengil-o'rtacha ortiqcha pronatsiyaga yaxshi mos keladi, kerakligidan ortiq poyabzal his qildirmasdan."
        };

      case "walking":
        if (a.walkingPref === "stability") {
          return {
            primary: "newBalance928",
            alt: "hokaBondi",
            why: "928 rollbar poshna stabilizatori va eng keng o'lcham diapazonlaridan biri bilan maxsus yurish poyabzali sifatida yaratilgan."
          };
        }
        return {
          primary: "hokaBondi",
          alt: "newBalance928",
          why: "Bondi'ning baland, keng asosli stack'i kun bo'yi qattiq yuzalarda takroriy zarbani yutishga maxsus mos keladi."
        };

      case "work":
        if (a.workSafety === "yes") {
          return {
            primary: "timberlandPro",
            alt: "skechersWork",
            why: "Ishingiz sertifikatlangan burun himoyasini talab qilsa, bu talab birinchi o'rinda turadi — Timberland PRO'ning charchashga qarshi tagchasi shu bilan birga haqiqiy tayanchni ham beradi."
          };
        }
        return {
          primary: "skechersWork",
          alt: "timberlandPro",
          why: "Himoya burni talab qilinmasa, Relaxed Fit'ning kengroq burun qismi va memory-foam ichki tagchasi butun smena davomida qulaylikni birinchi o'ringa qo'yadi."
        };

      case "gym":
        if (a.gymType === "lifting") {
          return {
            primary: "nikeMetcon",
            alt: "asicsGelQuantum",
            why: "Og'ir shtanga bilan ishlash uchun Metcon'ning qattiq, deyarli tekis poshna plitasi yuk ostida maksimal yer bilan aloqani ta'minlaydi."
          };
        }
        return {
          primary: "asicsGelQuantum",
          alt: "nikeMetcon",
          why: "Kardio va o'rtacha og'irlik ko'tarish aralashmasi uchun Gel-Quantum'ning qo'shimcha yumshoqligi butun mashg'ulot davomida maxsus ko'tarish poyabzaliga qaraganda qulayroq."
        };

      case "sandals":
        if (a.sandalBreakIn === "yes") {
          return {
            primary: "birkenstockArizona",
            alt: "oofosOoahh",
            why: "Arizona'ning probka tagchasi birinchi hafta-ikki hafta ichida oyog'ingizga moslashgach, haqiqiy tuzilgan gumbaz tayanchini beradi."
          };
        }
        return {
          primary: "oofosOoahh",
          alt: "birkenstockArizona",
          why: "OOahh'ning yumshoq ko'pigi hech qanday moslashuv davrisiz, birinchi qadamdanoq qulay."
        };

      case "casual":
        return {
          primary: "newBalance990",
          alt: null,
          why: "Sport uchun maxsus poyabzal emas, lekin 990'ning keng, barqaror platformasi va noodatiy keng o'lcham diapazoni yassi, kengroq oyoqlar uchun kundalik keng tarqalgan muammoni hal qiladi."
        };

      case "insoles":
        if (a.severity === "severe") {
          return {
            primary: "superfeetGreen",
            alt: "powerstepPinnacle",
            why: "Gumbazning sezilarli darajada cho'kishi GREEN'ning qattiq stabilizator korpusini talab qiladi, shunchaki qo'shimcha yumshoqlik emas."
          };
        }
        if (a.severity === "moderate") {
          return {
            primary: "powerstepPinnacle",
            alt: "superfeetGreen",
            why: "Pinnacle'ning yarim qattiq korpusi maksimal qattiqlikdagi ichki taglikning to'liq qattiq hissiyotisiz sezilarli tayanch beradi."
          };
        }
        if (a.budget === "affordable") {
          return {
            primary: "sofSole",
            alt: "powerstepPinnacle",
            why: "Tejamkor narxda yengil alomatlar uchun maqsadli poshna va gumbaz yumshoqligi arzonroq, oqilona boshlang'ich nuqta hisoblanadi."
          };
        }
        return {
          primary: "powerstepPinnacle",
          alt: "superfeetGreen",
          why: "Hatto yengil yassi tovon uchun ham, Pinnacle'ning tuzilma va qulaylik muvozanati faqat yumshoqlikka asoslangan ichki taglikka qaraganda uzoqroq xizmat qiladi."
        };

      default:
        return null;
    }
  }

  function widthNote(a) {
    if (a.width !== "wide") return "";
    if (a.activity === "running") {
      return "Adrenaline GTS ham, Gel-Kayano ham keng o'lchamda mavjud.";
    }
    if (a.activity === "walking") {
      return "928 ham, Bondi ham keng variantga ega, 928 esa eng keng o'lcham diapazonini qamrab oladi.";
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
      '<span class="visually-hidden"> (yangi oynada ochiladi)</span>' +
      "</a>" +
      "<h3>" + escapeHtml(p.name) + "</h3>" +
      '<div class="finder-product-ctas">' +
      '<a class="btn btn-primary btn-sm" href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">Amazon\'da narxini ko\'ring<span class="visually-hidden"> (yangi oynada ochiladi)</span></a>' +
      '<a class="btn btn-secondary btn-sm" href="' + p.review + '">To\'liq sharhni o\'qing</a>' +
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
      var progressLabel = history.length === 0 ? "Boshlaymiz" : stepNum + "-savol, jami " + total;

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
        html += '<button type="button" class="finder-back">&larr; Orqaga</button>';
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
        root.innerHTML = "<p>Xatolik yuz berdi — iltimos, testni qaytadan o'ting.</p>";
        return;
      }

      var note = widthNote(answers);

      var html =
        '<div class="finder-result">' +
        '<p class="eyebrow">Sizga tavsiya</p>' +
        "<p>" + escapeHtml(rec.why) + "</p>" +
        (note ? '<p class="muted">' + escapeHtml(note) + "</p>" : "") +
        '<div class="finder-products">' +
        renderProductCard(rec.primary, "Eng mos variant");

      if (rec.alt) {
        html += renderProductCard(rec.alt, "E'tiborga loyiq yana bir variant");
      }

      html +=
        "</div>" +
        '<button type="button" class="btn btn-secondary" id="finder-restart">Testni qayta o\'ting</button>' +
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
