export function registerGlobalErrorHandler() {
    window.addEventListener(
        'error',
        event => {
            console.error(
                '[GLOBAL ERROR]',
                event.error
            );
        }
    );
}
