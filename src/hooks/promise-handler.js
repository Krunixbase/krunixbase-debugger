export function registerPromiseHandler() {
    window.addEventListener(
        'unhandledrejection',
        event => {
            console.error(
                '[PROMISE REJECTION]',
                event.reason
            );
        }
    );
}
