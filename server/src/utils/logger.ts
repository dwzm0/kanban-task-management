import pino from 'pino';
import dayjs from 'dayjs';
import pretty from 'pino-pretty'

const stream = pretty({
    levelFirst: true,
    colorize: true,
    ignore: "time,hostname,pid",
  });

const log = pino({
    name: "MyLogger",
    level: process.env.NODE_ENV === "development" ? "debug" : "info",
    timestamp: () => `,"time":"${dayjs().format()}"`
},
    stream
);

export default log;
