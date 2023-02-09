export const handler = async (event) => {
  const data = (event.data || "Here's some data!").toLowerCase();
  const response = {
    statusCode: 200,
    body: { data },
  };
  return response;
};
