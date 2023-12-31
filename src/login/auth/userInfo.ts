//
// Getting logged in user info -> Cognito User info hook
//

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
    return { username: 'none', userId: 'none', signInDetails: undefined }

  }
 
}
