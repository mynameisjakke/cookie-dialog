document.addEventListener('DOMContentLoaded', function () {
  (function () {
    // Hämta den aktuella domänens hostnamn
    const hostname = window.location.hostname;

    // Skapa dynamiska länkar för cookie- och integritetspolicy som PDF
    const cookiePolicyURL = `https://upload.visionmedia.io/${hostname}/cookiepolicy.pdf`;
    const privacyPolicyURL = `https://upload.visionmedia.io/${hostname}/integritetspolicy.pdf`;

    // Kontrollera om användaren redan har gjort ett val
    const consentGiven = localStorage.getItem('cookie-consent');
    if (consentGiven) return;

    // Lägg till cookie-bannern till sidan
    const bannerHTML = `
      <div id="cookieConsentBanner" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #fff; padding: 40px; border-radius: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 10000; width: 70%; text-align: center;">
        <img style="width: 74px;" src="https://cdn.prod.website-files.com/6571c3fc34406a264170f6fd/65b9602fff6fb7f0915d6fc2_cookie-webflow-cloneable-template-brix-templates.svg" alt="Cookie banner icon">
        <h6 style="color: #202324; margin-top: 10px; margin-bottom: 10px; font-size: 1rem; font-weight: 700; line-height: 1.375rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Vår hemsida använder cookies</h6>
        <p style="color: #45494b; font-size: 0.82rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; padding-bottom: 10px;">
          Vi använder cookies för att ge dig den bästa upplevelsen. 
          Vänligen välj om du vill acceptera eller neka våra cookies. 
          Läs mer om vår <a style="color: #2251ff;" href="${cookiePolicyURL}" target="_blank">Cookiepolicy</a> och <a style="color: #2251ff;" href="${privacyPolicyURL}" target="_blank">Integritetspolicy</a>.
        </p>
        <button style="padding: 8px 18px; border: 1px solid #202324; border-radius: 5px; background-color: #202324; color: #fff;" id="acceptCookies">Acceptera alla</button>
        <button style="padding: 8px 18px; border: 1px solid #202324; border-radius: 5px; background-color: #fff; color: #202324;" id="rejectCookies">Neka alla</button>
      </div>
      <style>
      @media (min-width: 1024px) {
        #cookieConsentBanner {
          width: 20% !important;
          transform: translateX(-90%) !important;
          left: 95% !important;
        }
      }
        button {
          transition: 0.3s;
        }

        button:hover {
          cursor: pointer !important;
          opacity: 0.7 !important;
        }
      </style>
    `;
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    document.getElementById('acceptCookies').addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'accepted');
      removeBanner();
    });

    document.getElementById('rejectCookies').addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'rejected');
      removeBanner();
    });

    function removeBanner() {
      const banner = document.getElementById('cookieConsentBanner');
      if (banner) {
        banner.remove();
      }
    }
  })();
});
