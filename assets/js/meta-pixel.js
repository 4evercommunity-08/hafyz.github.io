(function () {
  var PIXEL_ID = '1537787853829726';
  var CONSENT_KEY = 'hafyz-cookie-consent-v2';

  function getConsent() {
    try {
      return JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
    } catch (error) {
      return null;
    }
  }

  function hasMarketingConsent() {
    var consent = getConsent();
    return !!(consent && consent.marketing);
  }

  function loadPixel() {
    if (window.__hafyzMetaPixelLoaded || window.__HAFYZ_META_PIXEL_LOADED) return;

    window.__hafyzMetaPixelLoaded = true;
    window.__HAFYZ_META_PIXEL_LOADED = true;

    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  if (hasMarketingConsent()) {
    loadPixel();
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a');
    if (!link || !hasMarketingConsent() || !window.fbq) return;

    var href = link.href || '';
    if (/ffm\.to|found\.ee|presave/i.test(href)) {
      window.fbq('trackCustom', 'PreSaveClick', { page: window.location.pathname });
    }
    if (/spotify\.com/i.test(href)) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Spotify',
        content_category: 'music'
      });
    }
  });
}());
