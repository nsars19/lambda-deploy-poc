import axios from "axios";

export const handler = async (event) => {
  try {
    const data = (String(event.data) || "Here's some data!").toUpperCase();
    const axiosRes = await axios.get("https://example.com");
    const axiosData = axiosRes.data;
    const response = {
      statusCode: 200,
      body: { data: axiosData },
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500,
      body: {
        data: "OOPS something broke!",
      },
    };
  }
};
