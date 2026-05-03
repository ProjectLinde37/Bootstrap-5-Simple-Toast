/* ==========================================================================
   Goosse Toast Module
   - Bootstrap 5 native
   - Geen vaste HTML
   - On-demand DOM injectie
   - Zelfopruimend

   Depends on Bootstrap 5 (bootstrap.bundle.js via CDN)
   Uses: bootstrap.Modal
========================================================================== */


(function (window)
{
    'use strict';

    const DEFAULT_TOAST_DELAY = 4000; // ms (4 seconden)

    const TYPE_CONFIG = {
        info: {
            bgClass: 'text-bg-primary'
        },
        success: {
            bgClass: 'text-bg-success'
        },
        warning: {
            bgClass: 'text-bg-warning'
        },
        danger: {
            bgClass: 'text-bg-danger'
        }
    };

    const CONFIG = {
        icons: {
            info: '<i class="ti ti-info-circle text-primary"></i>',
            success: '<i class="ti ti-check text-success"></i>',
            warning: '<i class="ti ti-alert-triangle text-warning"></i>',
            danger: '<i class="ti ti-alert-octagon text-danger"></i>'
        }
    };

    function ensureContainer()
    {
        let container = document.getElementById('goosse-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'goosse-toast-container';
            container.className = 'toast-container position-fixed top-0 end-0 p-3';
            document.body.appendChild(container);
        }
        return container;
    }

    function showToast(options)
    {

        const {
            type = 'info',
            title = '',
            message = '',
            delay = DEFAULT_TOAST_DELAY,
            progress = false
        } = options || {};


        const config = TYPE_CONFIG[type] || TYPE_CONFIG.info;
        const icon = CONFIG.icons[type] || CONFIG.icons.info;
        const id = 'goosse-toast-' + (crypto.randomUUID?.() || Date.now());

        const container = ensureContainer();
        const toastEl = document.createElement('div');

        toastEl.innerHTML = `
  <div id="${id}" class="toast goosse-toast ${config.bgClass}" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <span class="me-2">${icon}</span>
      <strong class="me-auto">${esc(title)}</strong>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" aria-label="Sluiten"></button>
    </div>
    <div class="toast-body">
      ${esc(message)}
    </div>

    ${progress && delay > 0 ? `
      <div class="goosse-toast-progress">
        <div class="goosse-toast-progress-bar"></div>
      </div>
    ` : ''}
  </div>
`;

        container.appendChild(toastEl.firstElementChild);

        const toastNode = document.getElementById(id);

        const toast = new bootstrap.Toast(toastNode, {
            delay,
            autohide: delay > 0
        });


        toastNode.addEventListener('hidden.bs.toast', () =>
        {
            toastNode.remove();
        });

        /* ✅ Progressbar logica - start wanneer toast zichtbaar wordt */
        if (progress && delay > 0) {
            const bar = toastNode.querySelector('.goosse-toast-progress-bar');

            if (bar) {
                // Start animatie wanneer toast getoond wordt
                toastNode.addEventListener('shown.bs.toast', () => {
                    bar.style.width = '100%'; // start positie
                    bar.getBoundingClientRect(); // force reflow
                    bar.style.transition = `width ${delay}ms linear`;
                    bar.style.width = '0%'; // eind positie
                }, { once: true });
            }
        }

        toast.show();
    }

    /* ==========================
       Helpers
       ========================== */

    /**
     * Eenvoudige HTML escaping voor veiligheid (XSS)
     */
    function esc(str = '')
    {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /* ==========================
       Publieke API
       ========================== */

    window.goosseToast = {
        config: CONFIG,
        show(options)
        {
            showToast(options);
        }
    };

    

})(window);