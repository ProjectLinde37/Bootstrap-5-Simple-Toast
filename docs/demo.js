/* ==========================================================================
 Goosse Toast – Demo (extended)
========================================================================== */

/* Basic toasts */
document.getElementById('btn-info').addEventListener('click', () => {
    goosseToast.show({
        type: 'info',
        title: 'Information',
        message: 'Click this text to copy it to the clipboard.'
    });
});

document.getElementById('btn-success').addEventListener('click', () => {
    goosseToast.show({
        type: 'success',
        title: 'Success',
        message: 'Operation completed successfully.',
        position: 'top-right'
    });
});

document.getElementById('btn-warning').addEventListener('click', () => {
    goosseToast.show({
        type: 'warning',
        title: 'Warning',
        message: 'This is a warning message.',
        position: 'top-right'
    });
});

document.getElementById('btn-danger').addEventListener('click', () => {
    goosseToast.show({
        type: 'danger',
        title: 'Error',
        message: 'Something went wrong.',
        position: 'top-right'
    });
});

/* Progress + click-to-pause */
document.getElementById('btn-progress').addEventListener('click', () => {
    goosseToast.show({
        type: 'success',
        title: 'Saving',
        message: 'Click the toast to pause the countdown.',
        progress: true,
        delay: 5000,
        position: 'bottom-right'
    });
});

/* Position demos */
document.getElementById('btn-top-left').addEventListener('click', () => {
    goosseToast.show({
        title: 'Top left',
        message: 'Top left position',
        position: 'top-left'
    });
});

document.getElementById('btn-middle-left').addEventListener('click', () => {
    goosseToast.show({
        title: 'Middle left',
        message: 'Middle left position',
        position: 'middle-left'
    });
});

document.getElementById('btn-bottom-left').addEventListener('click', () => {
    goosseToast.show({
        title: 'Bottom left',
        message: 'Bottom left position',
        position: 'bottom-left'
    });
});

document.getElementById('btn-top-right').addEventListener('click', () => {
    goosseToast.show({
        title: 'Top right',
        message: 'Top right position',
        position: 'top-right'
    });
});

document.getElementById('btn-middle-right').addEventListener('click', () => {
    goosseToast.show({
        title: 'Middle right',
        message: 'Middle right position',
        position: 'middle-right'
    });
});

document.getElementById('btn-bottom-right').addEventListener('click', () => {
    goosseToast.show({
        title: 'Bottom right',
        message: 'Bottom right position',
        position: 'bottom-right'
    });
});

document.getElementById('btn-center').addEventListener('click', () => {
    goosseToast.show({
        type: 'info',
        title: 'Centered toast - manueel sluiten!',
        message: 'Centered toast. Click text to copy.',
        position: 'center',
        delay: 0
    });
});

/* HTML content demos */

document.getElementById('btn-html-message').addEventListener('click', () => {
    goosseToast.show({
        type: 'success',
        title: 'HTML message',
        message: 'User <strong>John Doe</strong> was saved<br><small>ID: 42</small>',
        allowHtml: true
    });
});

document.getElementById('btn-html-title-message').addEventListener('click', () => {
    goosseToast.show({
        type: 'info',
        title: String.raw`<strong>Saving</strong> <small class="text-muted">(HTML)</small>`,
        message: `
            This toast supports <em>HTML</em> content.<br>
            <a href="#" onclick="event.preventDefault()">Example link</a>
        `,
        allowHtml: true,
        position: 'center',
        delay: 0
    });
});
