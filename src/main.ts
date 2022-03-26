import { LoggerService } from './loger/loger.service';
import { App } from './app'


async function bootsrap() {
    const app = new App(new LoggerService);
    await app.init();
}

bootsrap();