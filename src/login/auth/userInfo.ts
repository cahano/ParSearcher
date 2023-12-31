//
// Getting logged in user info -> Cognito User info hook
//

import { useState, useEffect } from "react"

// import AuthContext from '../../context/AuthContext'

// AWS func for checking user auth status
import { getCurrentUser } from 'aws-amplify/auth';


// Interface for current user cognito creds
interface cognitoUser {
  username: string,
  userId: string,
  signInDetails?: object | undefined
}

// Async func linked to cognitoUser interface
export async function getAuthedUser(): Promise<cognitoUser> {
  
  // Attempting AWS auth -> Throws error when user is NOT logged in
  try {
    const ourUser: cognitoUser = await getCurrentUser();
    
    console.log(`The username: ${ourUser.username}`);
    console.log(`The userId: ${ourUser.userId}`);
    console.log(`The signInDetails: ${ourUser.signInDetails}`);

    return ourUser

  } catch(e) {

    console.log(e)
    return { username: '', userId: '', signInDetails: undefined }

  }
 
}

// export const AuthProvider = ({children}) => {

//   const [user, setUser] = useState('');

//   useEffect(() => {
//     getAuthedUser().then((r) => {
//         console.log(r.username)
//         // If userid isn't 'none; (i.e. not logged in)
//         if (r.userId === '') {
//             console.log('SETTING USERNAME IN STATE')
//             setUser(r.username)
//         } else {
//             console.log('USER logged in')
//             setUser('')
//         }
//     })
//   }, []);

//   return ( <AuthProvider.)

// }