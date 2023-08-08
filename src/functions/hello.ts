import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

import { logger, trackRequest } from '../utils/logger';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  trackRequest(event, context);

  logger.info(event.body);

  const message = 'Hello World!';

  return {
    statusCode: 200,
    body: message,
  };
};
