/* ==========================================================================
   Goosse Toast – Demo
   ========================================================================== */

document.getElementById('btn-info').addEventListener('click', () => {
    goosseToast.show({
        type: 'info',
        title: 'Information',
        message: 'This is an informational toast.'
    });
});

document.getElementById('btn-success').addEventListener('click', () => {
    goosseToast.show({
        type: 'success',
        title: 'Success',
        message: 'The operation completed successfully.'
    });
});

document.getElementById('btn-warning').addEventListener('click', () => {
    goosseToast.show({
        type: 'warning',
        title: 'Warning',
        message: 'Please pay attention to this warning.'
    });
});

document.getElementById('btn-danger').addEventListener('click', () => {
    goosseToast.show({
        type: 'danger',
        title: 'Error',
        message: 'Something went wrong.'
    });
});

document.getElementById('btn-progress').addEventListener('click', () => {
    goosseToast.show({
        type: 'success',
        title: 'Saving',
        message: 'Your changes are being saved…',
        progress: true,
        delay: 5000
    });
});