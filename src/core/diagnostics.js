export function collectDiagnostics() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        online: navigator.onLine,
        timestamp: Date.now()
    };
}
