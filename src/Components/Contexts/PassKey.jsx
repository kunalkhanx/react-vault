import { createContext, useState } from "react";
import PassKeyScreen from "../PassKey/PassKeyScreen";

export const PassKey = createContext(null)


export const PassKeyProvider = ({children}) => {

    const [key, setKey] = useState('123')

    return (
        <PassKey.Provider value={{key}}>
            {key ? children : <PassKeyScreen setValue={(value) => setKey(value)} />}
        </PassKey.Provider>
    )
}