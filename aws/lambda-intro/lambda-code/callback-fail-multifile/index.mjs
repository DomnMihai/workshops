import errorGenerator from "./error-generator.mjs";

export const handler = async(event, context, callback) => {
  console.log("event: " + JSON.stringify(event, undefined, 2));
  console.log("context: " + JSON.stringify(context, undefined, 2));

  // Set random error
  let statusCode = 200;
  const lambdaError = errorGenerator.generateLambdaError();
  if (lambdaError) {
    statusCode = 500;
  }

  // Response
  const responseBody = {
    message: "Hello from Lambda!",
  };

  const response = {
    statusCode: statusCode,
    body: JSON.stringify(responseBody, undefined, 2)
  };

  callback(lambdaError, response);
};
