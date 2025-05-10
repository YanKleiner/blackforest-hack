import winston from 'winston';

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.prettyPrint({
    depth: 5,
  }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const consoleTransport = new winston.transports.Console({
  format: consoleFormat,
});

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    consoleTransport,
    // httpTransport,
  ],
});

export default logger;
