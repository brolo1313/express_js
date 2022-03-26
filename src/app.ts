import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";
import { LoggerService } from './loger/loger.service';


export class App {
  app: Express;
  server: Server;
  port: number;
  logger : LoggerService;

  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 3000;
    this.logger =logger;
  }

  useRoutes() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log('serv start on port' + this.port);
  }
}
