

export const msalConfig = {
  auth: {
    clientId: "5f82d7f5-d568-4911-b869-2e7d1f114635",
    authority: "https://login.microsoftonline.com/365bd8ed-635b-46fd-87d0-6988e43571c5",
    redirectUri: "http://localhost:3000"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },

};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
