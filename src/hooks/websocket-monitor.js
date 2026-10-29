export function monitorWebSocket(ws) {

    ws.addEventListener('open', () => {
        console.log('WS OPEN');
    });

    ws.addEventListener('close', () => {
        console.log('WS CLOSE');
    });

    ws.addEventListener('error', err => {
        console.error('WS ERROR', err);
    });

}
