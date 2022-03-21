import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent } from "aws-lambda";

const hello = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body);

  return formatJSONResponse({
    message: `Hello ${body.name}, welcome to the exciting Serverless world!`,
  });
};

export const main = hello;
