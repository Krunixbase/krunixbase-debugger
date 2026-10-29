export class Debugger {
    constructor() {
        this.logs = [];
    }

    log(level, message) {
        this.logs.push({
            timestamp: Date.now(),
            level,
            message
        });

        console`[Krunixbase Debugger] ${message}`
        ;
    }

    getLogs() {
        return this.logs;
    }
}
