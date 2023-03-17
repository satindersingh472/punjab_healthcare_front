import React from "react";
import { AppBar } from "@mui/material";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <AppBar>
                { isAuthenticated ? <SignOutButton/> : <SignInButton /> }
            </AppBar>
            
        </>
    );
};