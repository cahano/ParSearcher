//
// Cognito Client Pool
//

export default {
    "REGION": "us-east-1",
    "USER_POOL_ID": "us-east-1_VKDOwsugx",
    "USER_POOL_APP_CLIENT_ID": "17cn6it0fjrivsbohigruo156r"
}

// NOT USED NOW BUT SHOULD BE WITH MORE COMPLEX AUTH SYSTEM...
export interface cognitoUser {
    username: string,
    userId: string,
    signInDetails?: object | undefined
  }

