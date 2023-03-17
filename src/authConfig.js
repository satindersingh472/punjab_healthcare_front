import { LogLevel } from "@azure/msal-browser";


export const msalConfig = {
  auth: {
    clientId: "ecfffd9b-7626-4fe5-809c-526e8a2d9208",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:3000/"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {	
    loggerOptions: {	
        loggerCallback: (level, message, containsPii) => {	
            if (containsPii) {		
                return;		
            }		
            switch (level) {		
                case LogLevel.Error:		
                    console.error(message);		
                    return;		
                case LogLevel.Info:		
                    console.info(message);		
                    return;		
                case LogLevel.Verbose:		
                    console.debug(message);		
                    return;		
                case LogLevel.Warning:		
                    console.warn(message);		
                    return;		
            }	
        }	
    }	
}
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
