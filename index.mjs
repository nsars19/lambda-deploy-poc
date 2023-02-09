export const handler = async (event) => {
  const data = (String(event.data) || "Here's some data!").toUpperCase();
  const response = {
    statusCode: 200,
    body: { data },
  };
  return response;
};
