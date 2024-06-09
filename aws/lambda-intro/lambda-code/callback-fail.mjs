export const handler = async (event, context, callback) => {
  console.log("event: " + JSON.stringify(event, undefined, 2));
  console.log("context: " + JSON.stringify(context, undefined, 2));

  // Set random error
  const randomNumber = Math.random();
  let statusCode = 200;
  let lambdaError = undefined;
  if (randomNumber < 0.2) {
    statusCode = 500;
    lambdaError = new Error("Random number is " + randomNumber)
  }

  // Response
  const responseBody = {
    message: "Hello from Lambda!",
    randomNumber: randomNumber
  };

  const response = {
    statusCode: statusCode,
    body: JSON.stringify(responseBody, undefined, 2)
  };
  callback(lambdaError, response);
};
