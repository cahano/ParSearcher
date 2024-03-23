//
// Auth hook
//

import { Amplify } from "aws-amplify";
import { Hub } from 'aws-amplify/utils';
import {  signOut as awsSO } from "aws-amplify/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

import { awsConfig } from "../consts/auth";
import { useSessionStorage } from "./useSessionStorage";


// Configuring Amplify <-> Cognito cnxn
Amplify.configure({
    Auth: { 
      Cognito: {
        userPoolId:        awsConfig.USER_POOL_ID,
        userPoolClientId:  awsConfig.USER_POOL_APP_CLIENT_ID
      }
    }
});

// Auth interface
interface UseAuth {
    isLoading: boolean;
    isAuthenticated: boolean;
    // String or null to facilitate session storage
    username: string | null;
    // signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}

// General node type
type Props = {
    children?: React.ReactNode;
};

// Initiating auth context for ParSearch app
const authContext = createContext({} as UseAuth);

// Providing auth to downstream components
export const ProvideAuth: React.FC<Props> = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// Setting auth context 
export const useAuth = () => {
    return useContext(authContext);
};

// context vars, funcs
const useProvideAuth = (): UseAuth => {

    // Calling SessionStorage hook
    const { setSessionStorage, cleanSessionStorage, getSessionStorage } = useSessionStorage();

    // Auth states
    const [isLoading, setIsLoading] = useState(false);
    // Initiating user state with session storage, if exists
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const initUser = getSessionStorage('user');
        return initUser ? true : false
    });
    // Initiating user state with session storage, if exsists
    const [username, setUsername] = useState(() => {
        const initUser = getSessionStorage('user');
        return initUser ? initUser : ""
    });

    // Listening for change in user Auth status
    useEffect(() => {
        Hub.listen("auth", (data) => {
            // Loading while AWS listens for auth event
            setIsLoading(true)
          if (data?.payload?.event === "signedIn") {
            // If user logs in, update states
            setUsername(data.payload.data.username)
            setIsAuthenticated(true)
            setIsLoading(false)
            // Storing user in session storage
            setSessionStorage('user', data.payload.data.username)
          }
        });
      }, []);

    // Custom signout that combines AWS signout and session storage removal
    async function signOut() {
        try {
            // AWS cognito logout
            await awsSO({ global: true });
            // State updates
            setIsAuthenticated(false);
            setUsername("")
            // Cleaning session storage
            cleanSessionStorage('user')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return {
        isLoading,
        isAuthenticated,
        username,
        signOut
    };
};



// OLD

// import {  fetchAuthSession, getCurrentUser, signOut as awsSO } from "aws-amplify/auth";

    // useEffect(() => {
    //     getCurrentUser()
    //         .then((result) => {
    //             console.log(result.username)
    //             setUsername(result.username);
    //             setIsAuthenticated(true);
    //             setIsLoading(false);
    //         })
    //         .catch(() => {
    //             setUsername("");
    //             setIsAuthenticated(false);
    //             setIsLoading(false);
    //         });
    // }, [username]);

        // async function signOut() {
    //     try {
    //       await awsSO({ global: true });
    //       setIsAuthenticated(false);
    //     } catch (error) {
    //       console.log('error signing out: ', error);
    //     }
    // }