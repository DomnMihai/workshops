function generateLambdaError() {
  const randomNumber = Math.random();
  if (randomNumber < 0.2) {
    return new Error("Random number is " + randomNumber);
  }

  return undefined;
}

export default { generateLambdaError };
