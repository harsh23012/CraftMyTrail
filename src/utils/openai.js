import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "YOUR_API_KEY",
  dangerouslyAllowBrowser: true,
});

export default client;
