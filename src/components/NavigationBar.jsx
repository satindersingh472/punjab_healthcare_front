import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const NavigationBar = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <AppBar sx={{display:'grid',justifyItems:'end'}} >
            <Toolbar>
            { isAuthenticated ? <SignOutButton/> : <SignInButton /> }
            </Toolbar>
            </AppBar>
            <Toolbar/>
            
        </>
    );
};