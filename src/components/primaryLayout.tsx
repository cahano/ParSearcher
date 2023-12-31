//
// Primary Layout for Caliburn Site - used for *protected routes* context
//

import { Authenticator, View } from '@aws-amplify/ui-react';

interface Props { children: JSX.Element | JSX.Element[] }

export const PrimaryLayout = ({ children }: Props) => {

    return (
        <Authenticator.Provider>
            <View>
                {children}
            </View>
        </Authenticator.Provider>
    )

}
