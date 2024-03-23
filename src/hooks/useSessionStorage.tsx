//
// Hook to get and store info in session storage
//

import { useState } from 'react';


export const useSessionStorage = () => {

    // State for storing cognito user
    const [value, setValue] = useState<string | null>(null)

    const setSessionStorage = (key: string, value: string) => {
        sessionStorage.setItem(key, value)
        setValue(value);
    }

    const getSessionStorage = (key: string) => {
        const value = sessionStorage.getItem(key)
        setValue(value)
        return value;
    }

    const cleanSessionStorage = (key: string) => {
        sessionStorage.removeItem(key)
        setValue(null)
    }
    
    return { value, setSessionStorage, getSessionStorage, cleanSessionStorage }

} 
