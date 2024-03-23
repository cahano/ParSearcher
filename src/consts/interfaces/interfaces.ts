//
// interfaces for Caliburn Site
//

import { ReactNode } from "react"

// Interface for auth context provider
export interface Props {
    children?: ReactNode
}

// Interface for AWS Cognito Auth
export interface CognitoUser {
    username?: string,
    userid?: string,
    details?: object
}


