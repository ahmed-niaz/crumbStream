import app from "./app";
import { Server } from "http";
import logger from "./config/logger";
import { Config } from "./config";

async function main() {
  const port = Number(Config.PORT);
  if (!port) {
    throw new Error("port is not defined");
  }
  try {
    const _server: Server = app.listen(port, () => {
      logger.info(`auth server is running ⚡${port}`);
    });
    // handleGracefulShutdown(server);
    // await connectDB();
  } catch (e) {
    logger.error(`auth server failed to start${e}`);
    process.exit(1);
  }
}
main();
