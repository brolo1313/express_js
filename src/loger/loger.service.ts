import {Logger} from 'tslog'


export class LoggerService {
    public  logger: Logger;

    constructor() {
        this.logger = new Logger({
            displayInstanceName : false,
            displayLoggerName : false,
            displayFilePath : 'hidden',
            displayFunctionName : false
        });
    }

    log(...args: any[]) {
        this.logger.info(...args);
    }

    
    erro(...args: any[]) {
        this.logger.error(...args);
    }

    
    warn(...args: any[]) {
        this.logger.warn(...args);
    }
}