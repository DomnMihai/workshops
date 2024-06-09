export const handler = async (event, context) => {
  console.log("event: " + JSON.stringify(event, undefined, 2));
  console.log("context: " + JSON.stringify(context, undefined, 2));

  // Response
  const responseBody = {
    message: "Hello from Lambda!"
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody, undefined, 2)
  };
  return response;
};
