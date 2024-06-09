export const handler = async (event, context) => {
  console.log("event: " + JSON.stringify(event, undefined, 2));
  console.log("context: " + JSON.stringify(context, undefined, 2));

  // Get event variables
  let sleepMillis = event["sleepMillis"];
  if (!sleepMillis || sleepMillis < 10) {
    sleepMillis = 10;
  }


  // Response
  const responseBody = {
    message: "Hello from Lambda!",
    sleepMillis: sleepMillis
  };

  await new Promise(resolve => {
    setTimeout(() => resolve(), sleepMillis);
  });


  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody, undefined, 2)
  };

  return response;
}
