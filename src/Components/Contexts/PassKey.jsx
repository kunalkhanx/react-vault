import { createContext, useContext, useEffect, useState } from "react";
import PassKeyScreen from "../PassKey/PassKeyScreen";
import { SettingsContext } from "./SettingsCtx";

export const PassKey = createContext(null)


export const PassKeyProvider = ({children}) => {

    const [key, setKey] = useState(null)
    const [reset, setReset] = useState(0)
    const {settingsData} = useContext(SettingsContext)

    useEffect(() => {
        const handler = setTimeout(() => {
            setKey(null)
        }, settingsData.passkey_expire*1000)
        
        return () => clearTimeout(handler)
    }, [settingsData, reset])

    const resetTimer = () => {
        setReset(prev => prev+1)
    }

    return (
        <PassKey.Provider value={{key, resetTimer}}>
            {key ? children : <PassKeyScreen setValue={(value) => setKey(value)} />}
        </PassKey.Provider>
    )
}