export const handler = async (event, context) => {
  console.log("event: " + JSON.stringify(event, undefined, 2));
  console.log("context: " + JSON.stringify(context, undefined, 2));

  // Get environment variables
  const appVersion = process.env.APP_VERSION;
  const configArn = process.env.CONFIG_ARN;
  const dataTableName = process.env.DATA_TABLE_NAME;

  console.log("All environment variables: " + JSON.stringify(process.env, undefined, 2));

  console.log('appVersion: ' + appVersion);
  console.log('configArn: ' + configArn);
  console.log('dataTableName: ' + dataTableName);

  // Response
  const responseBody = {
    message: "Hello from Lambda!",
    appVersion: appVersion,
    configArn: configArn,
    dataTableName: dataTableName
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody, undefined, 2)
  };
  return response;
};
