/* ===========================
   GOOGLE ANALYTICS 4
   =========================== */
(function () {
  const GA_MEASUREMENT_ID = 'G-H8LJN382SG';
  const isConfigured =
    /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID) &&
    GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

  function noopTrackEvent() {
    return false;
  }

  window.FOLLTECH_ANALYTICS = {
    measurementId: isConfigured ? GA_MEASUREMENT_ID : null,
    trackEvent: noopTrackEvent,
  };

  if (!isConfigured) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  function fileNameFromPath(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    return decodeURIComponent(parts[parts.length - 1] || '');
  }

  function trackEvent(eventName, params, options) {
    const payload = Object.assign({}, params || {});
    const opts = options || {};
    let finished = false;

    if (typeof opts.callback === 'function') {
      payload.event_callback = function () {
        if (finished) return;
        finished = true;
        opts.callback();
      };
      payload.event_timeout = opts.timeout || 900;
      window.setTimeout(function () {
        if (finished) return;
        finished = true;
        opts.callback();
      }, payload.event_timeout + 100);
    }

    window.gtag('event', eventName, payload);
    return true;
  }

  window.FOLLTECH_ANALYTICS.trackEvent = trackEvent;

  document.addEventListener('click', function (event) {
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;

    const url = new URL(link.getAttribute('href'), window.location.href);
    if (!url.pathname.toLowerCase().endsWith('.pdf')) return;

    const isCompanyLp = url.pathname.indexOf('/company_LP/') !== -1;
    const eventName = isCompanyLp ? 'company_lp_pdf_click' : 'pdf_click';
    const isNewContext =
      link.target === '_blank' ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0;

    const params = {
      file_extension: 'pdf',
      file_name: fileNameFromPath(url.pathname),
      link_text: (link.textContent || '').trim(),
      link_url: url.href,
      page_location: window.location.href,
    };

    if (isNewContext) {
      trackEvent(eventName, params);
      return;
    }

    event.preventDefault();
    trackEvent(eventName, params, {
      callback: function () {
        window.location.href = url.href;
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.indexOf('/company_LP/') === -1) return;
    if (window.location.pathname.toLowerCase().endsWith('.pdf')) return;

    trackEvent('company_lp_view', {
      content_type: 'pdf_landing',
      pdf_file: '260616_LP.pdf',
      page_location: window.location.href,
    });
  });
}());
