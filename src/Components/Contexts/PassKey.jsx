import { createContext, useState } from "react";
import PassKeyScreen from "../PassKey/PassKeyScreen";

export const PassKey = createContext(null)


export const PassKeyProvider = ({children}) => {

    const [key, setKey] = useState(null)

    return (
        <PassKey.Provider value={{key}}>
            {key ? children : <PassKeyScreen setValue={(value) => setKey(value)} />}
        </PassKey.Provider>
    )
}