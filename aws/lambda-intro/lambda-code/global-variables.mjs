let RANDOM_GLOBAL_VAR = Math.random() + 10;

export const handler = async (event, context) => {
  console.log("event: " + JSON.stringify(event, undefined, 2));
  console.log("context: " + JSON.stringify(context, undefined, 2));

  // Set sleep
  let sleepMillis = event["sleepMillis"];
  if (!sleepMillis || sleepMillis < 10) {
    sleepMillis = 10;
  }

  // Manipulate global variable
  console.log('randomGlobalVar BEFORE: ' + RANDOM_GLOBAL_VAR);
  RANDOM_GLOBAL_VAR = Math.random();
  console.log('randomGlobalVar AFTER: ' + RANDOM_GLOBAL_VAR);

  // Hard work simulator
  await new Promise(resolve => {
    setTimeout(() => resolve(), sleepMillis);
  });

  // Response
  const responseBody = {
    message: "Hello from Lambda!",
    sleepMillis: sleepMillis,
    RANDOM_GLOBAL_VAR: RANDOM_GLOBAL_VAR
  };

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody, undefined, 2)
  };
};
