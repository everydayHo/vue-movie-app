exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'joe',
      age: 30,
      email: 'joe@gmail.com',
    }),
  };
};
