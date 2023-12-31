//
// Setting aurg context for Caliburn/Parser
//

// /src/hooks/useAuth.tsx
import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { getAuthedUser } from "../login/auth/userInfo";


// // Interface for current user cognito creds
interface cognitoUser {
    username: string,
    userId: string,
    signInDetails?: object | undefined;
}

interface IAuthContext {
    auth: cognitoUser;
    setAuth: (state: cognitoUser) => void;
}

const initAuth = {
    auth: {username: '',
           userId: ''},
    setAuth: () => {}
}

// Create the context 
export const AuthContext = createContext<IAuthContext>(initAuth);

export const AuthProvider = (children: ReactNode) => {

	 // Using the useState hook to keep track of the value authed (if a 
   // user is logged in)
   const [auth, setAuth] = useState({username: initAuth.auth.username,
                                     userId: initAuth.auth.userId});

    useEffect(() => {
        const login = async (): Promise<void> => {
            // Checking if user is logged in
            const result = await getAuthedUser();
            console.log(result);
            if (result.username !== '') {
                console.log("user has logged in");

                setAuth({username: result.username,
                         userId: result.userId});
            }
        };

        login();

    }, []);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )

//    return (
// 			// Using the provider so that ANY component in our application can 
// 			// use the values that we are sending.
//       <AuthContext.Provider value={{ auth, setAuth }}>
//          {children}
//       </AuthContext.Provider>
//    );
};

// Finally creating the custom hook 
export const useAuth = () => useContext(AuthContext);



// SCRAP

//    const logout = async (): Promise<void> => {
//       const result = await fakeAsyncLogout();

//       if (result) {
//          console.log("The User has logged out");
//          setAuthed(false);
//       }
//    };

   /// Mock Async Login API call.
   // TODO: Replace with your actual login API Call code
//    const fakeAsyncLogin = async (): Promise<string> => {
//       return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve("Logged In");
//          }, 300);
//       });
//    };

   // Mock Async Logout API call.
   // TODO: Replace with your actual logout API Call code
//    const fakeAsyncLogout = async (): Promise<string> => {
//       return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve("The user has successfully logged on the server");
//          }, 300);
//       });
//    };
