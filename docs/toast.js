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

    const POSITION_MAP = {
        'top-right':    'top-0 end-0',
        'middle-right': 'top-50 end-0 translate-middle-y',
        'bottom-right': 'bottom-0 end-0',

        'top-left':     'top-0 start-0',
        'middle-left':  'top-50 start-0 translate-middle-y',
        'bottom-left':  'bottom-0 start-0',

        'center':       'top-50 start-50 translate-middle'
    };

    const CONFIG = {
        icons: {
            info: '<i class="ti ti-info-circle text-primary"></i>',
            success: '<i class="ti ti-check text-success"></i>',
            warning: '<i class="ti ti-alert-triangle text-warning"></i>',
            danger: '<i class="ti ti-alert-octagon text-danger"></i>'
        }
    };

    function ensureContainer(position = 'top-right') {
        const posClass = POSITION_MAP[position] || POSITION_MAP['top-right'];
        const id = 'goosse-toast-container-' + position;

        let container = document.getElementById(id);
        if (!container) {
            container = document.createElement('div');
            container.id = id;
            container.className = `toast-container position-fixed ${posClass} p-3`;
            container.style.zIndex = 1080;
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
            progress = false,
            position = 'top-right',
            allowHtml = false
        } = options || {};


        const config = TYPE_CONFIG[type] || TYPE_CONFIG.info;
        const icon = CONFIG.icons[type] || CONFIG.icons.info;
        const id = 'goosse-toast-' + (crypto.randomUUID?.() || Date.now());

        const container = ensureContainer(position);
        const toastEl = document.createElement('div');

        toastEl.innerHTML = `
  <div id="${id}" class="toast goosse-toast ${config.bgClass}" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <span class="me-2">${icon}</span>
      <strong class="me-auto">${render(title, allowHtml)}</strong>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" aria-label="Sluiten"></button>
    </div>
    <div class="toast-body">
      ${render(message, allowHtml)}
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

        const bodyEl = toastNode.querySelector('.toast-body');
        if (bodyEl) {
            bodyEl.style.cursor = 'copy';

            bodyEl.addEventListener('click', (e) => {
                e.stopPropagation();
                const text = bodyEl.innerText.trim();
                if (!text) return;

                navigator.clipboard.writeText(text).then(() => {
                    bodyEl.classList.add('opacity-75');
                    setTimeout(() => bodyEl.classList.remove('opacity-75'), 300);
                });
            });
        }

        const toast = new bootstrap.Toast(toastNode, {
            delay,
            autohide: delay > 0
        });



        toastNode.addEventListener('hidden.bs.toast', () => {
            toastNode.remove();
        });

        if (progress && delay > 0) {
            const bar = toastNode.querySelector('.goosse-toast-progress-bar');
            let remaining = delay;
            let startTime = null;
            let timeoutId = null;

            const start = () => {
                startTime = Date.now();
                bar.style.transition = `width ${remaining}ms linear`;
                bar.style.width = '0%';

                timeoutId = setTimeout(() => {
                    toast.hide();
                }, remaining);
            };

            const pause = () => {
                clearTimeout(timeoutId);
                const elapsed = Date.now() - startTime;
                remaining -= elapsed;

                const currentWidth = getComputedStyle(bar).width;
                bar.style.transition = 'none';
                bar.style.width = currentWidth;
            };

            toastNode.addEventListener('shown.bs.toast', () => {
                bar.style.width = '100%';
                bar.getBoundingClientRect(); // force reflow
                start();
            }, { once: true });

            toastNode.addEventListener('mousedown', pause);
            toastNode.addEventListener('mouseup', start);
            toastNode.addEventListener('mouseleave', start);
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


    function decodeHtmlEntities(str = '') {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        return textarea.value;
    }



    function render(str = '', allowHtml = false) {
        if (!allowHtml) {
            return esc(str);
        }

        // allowHtml = true
        // → decode entities → render as HTML
        return decodeHtmlEntities(String(str));
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