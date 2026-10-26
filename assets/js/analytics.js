/*
 * Google Analytics (GA4) config.
 * Kept in an external file (not an inline <script> block) on purpose —
 * this site's CSP (_headers) uses script-src 'self' with no unsafe-inline,
 * and this file satisfies that without weakening the policy.
 * The gtag.js loader tag lives in each page's <head>, next to this one.
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-TYN4PKDMQK");

// Affiliate clicks, tagged with where on the page the link sits, so GA4 can
// show which placements (top-picks strip, card header, sticky bar...) earn.
document.addEventListener("click", function (event) {
  var link = event.target.closest && event.target.closest('a[rel~="sponsored"]');
  if (!link) return;
  var placements = [
    [".sticky-cta", "sticky_bar"],
    [".top-picks", "top_picks"],
    [".card-cta", "card_header"],
    [".affiliate-cta", "card_footer"],
    [".product-photo", "card_photo"],
    [".finder-result", "shoe_finder"],
    ["table", "table"]
  ];
  var placement = "other";
  for (var i = 0; i < placements.length; i++) {
    if (link.closest(placements[i][0])) { placement = placements[i][1]; break; }
  }
  var card = link.closest(".pick-card, .product-card, .sticky-cta, tr");
  var name = card && card.querySelector(".pick-name, h3, .sticky-cta-name, td");
  gtag("event", "affiliate_click", {
    placement: placement,
    product: name ? name.textContent.replace(/\s+/g, " ").trim().slice(0, 100) : "",
    link_url: link.href,
    transport_type: "beacon"
  });
});
