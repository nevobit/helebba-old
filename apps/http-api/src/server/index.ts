import dotenv from "dotenv";
import os from "os";
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
// import fastifyRateLimit from "@fastify/rate-limit";
import fastifyMultipart from '@fastify/multipart';
import {
  ConsoleTransport,
  Logger,
  LoggerTransportName,
  MonoContext,
} from "@helebba/core-modules";
import { version, name } from "../../package.json";
import { registerRoutes } from "../routes";
import { initDataSources } from '@helebba/data-sources';
import { setLogger } from "@helebba/constant-definitions";
import { swaggerOptions, swaggerUiOptions } from "../docs";
import { verify } from "@helebba/business-logic";
import fs from 'fs';
import path from 'path';
const envFilePath = './apps/http-api/.env'

const envFilePathDat = path.join(__dirname, '.env');

if (fs.existsSync(envFilePathDat)) {
  console.log("El archivo .env existe en el directorio actual.");
} else {
  console.log("El archivo .env no existe en el directorio actual.");
}
dotenv.config({ path: envFilePath });

const { PORT, HOST, REGION, ENVIRONMENT, MONGO_URL, REDIS_URL } = process.env;

const consoleOptions = {
  transport: LoggerTransportName.CONSOLE,
  options: {
    destination: LoggerTransportName.CONSOLE,
    channelName: LoggerTransportName.CONSOLE,
  },
};
const logger = new Logger({
  optionsByLevel: {
    debug: [consoleOptions],
    info: [consoleOptions],
    warn: [consoleOptions],
    error: [consoleOptions],
    fatal: [consoleOptions],
    all: [consoleOptions],
    raw: [consoleOptions],
  },
  transports: {
    [LoggerTransportName.CONSOLE]: ConsoleTransport,
  },
  appIdentifiers: {
    region: REGION,
    clusterType: "",
    hostname: os.hostname(),
    app: name,
    version: version,
    environment: ENVIRONMENT,
    developer: os.userInfo().username
  },
  catchTransportErrors: true,
  logLevel: "all",

});

const corsOptions = {
  origin: "*",
};

setLogger(logger);

MonoContext.setState({
  version,
  secret: null,
});

const main = async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: MONGO_URL
    },
    redisdb: {
      redisReadUrl: REDIS_URL,
      redisWriteUrl: REDIS_URL
    }
  });

  const server = fastify({
    logger: false,
  });

  server.register(fastifyCors, corsOptions);
  // server.register(fastifyRateLimit, {
  //   max: 10000,
  //   timeWindow: "1 minute",
  //   keyGenerator: (request) => request.ip,
  //   errorResponseBuilder: (_request, context) => {
  //     return {
  //       code: 429,
  //       error: "Too Many Requests",
  //       message: `Rate limit exceeded, retry in ${context.after}`,
  //       date: Date.now(),
  //       expiresIn: context.after,
  //     };
  //   },
  // });



  server.register(fastifySwagger, swaggerOptions);
  server.register(fastifySwaggerUi, swaggerUiOptions);

  server.addHook('preValidation', async (req, reply) => {
    if (req.routeOptions.url?.includes('/health-check')) {
      return;
    }
    const data = await verify({ url: req.routeOptions.url, body: req.body, headers: req.headers, protocol: req.protocol });

    if (data?.type == "error") {
      return reply.code(500).send({ type: data.type, message: data.message })
    }
  });
  server.register(fastifyMultipart);


  server.register(
    (instance, _options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "/api/v1" }
  );

  server.listen(
    { port: Number(PORT) || 8000, host: HOST },
    (err, address) => {
      console.log(err)
      logger.all(`Server successfully started on: ${address}`, { address });
      logger.info("Press CTRL-c to stop");
    }
  );
};

void main();