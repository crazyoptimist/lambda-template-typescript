import pino from 'pino';
import { lambdaRequestTracker, pinoLambdaDestination } from 'pino-lambda';

// custom destination formatter
const destination = pinoLambdaDestination();

export const logger = pino(
  process.env.NODE_ENV !== 'production'
    ? {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      }
    : {},
  destination,
);

/**
 * call it once at the beginning of your lambda handler
 * trackRequest(event, context)
 */
export const trackRequest = lambdaRequestTracker();
