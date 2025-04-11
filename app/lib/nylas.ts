import Nylas from "nylas";

export const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID,
  callbackUri: process.env.NEXT_PUBLIC_URL + "/api/oauth/exchange",
  apiKey: process.env.NYLAS_API_SECRET_KEY,
  apiUri: process.env.NYLAS_API_URL,
};
// NYLAS_API_SECRET_KEY=nyk_v0_rfbVMMvg8M7irj4WaaZDm8Cd2rgExlymx3EW30x3eH3R5o5JwJ5elm0DnQkKTw2l
// NYLAS_API_URL=https://api.us.nylas.com
// NYLAS_CLIENT_ID=e9572033-4eb3-413a-87f9-de0c9fcf18d6


const AuthConfig = {
  clientId: process.env.NYLAS_CLIENT_ID as string,
  redirectUri: "http://localhost:3000/api/oauth/exchange", // http://localhost:3000/api/oauth/exchange
};
export const nylas = new Nylas({
  apiKey: process.env.NYLAS_API_SECRET_KEY!,
  apiUri: process.env.NYLAS_API_URL,
});
