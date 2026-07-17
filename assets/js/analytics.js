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
