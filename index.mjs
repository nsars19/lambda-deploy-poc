import axios from "axios";

export const handler = async (event) => {
  try {
    const data = (String(event.data) || "Here's some data!").toUpperCase();
    // const axiosRes = await axios.get("https://catfact.ninja/fact");
    // const axiosData = axiosRes.data.fact;

    const axiosRes = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const { setup, punchline } = axiosRes.data;
    const axiosData = `${setup} ${punchline}`;

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
