import winston from "winston";
import { Config } from ".";

const logger = winston.createLogger({
  level: "info",

  defaultMeta: { service: "auth-service" },
  transports: [
    new winston.transports.File({
      level: "info",
      dirname: "logs",
      filename: "auth.info.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint({ colorize: true })
      ),
      silent: Config.NODE_ENV === "test",
    }),
    new winston.transports.File({
      level: "error",
      dirname: "logs",
      filename: "auth.error.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint({ colorize: true })
      ),
      silent: Config.NODE_ENV === "test",
    }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint({ colorize: true })
      ),
      silent: false,
    }),
  ],
});

export default logger;
