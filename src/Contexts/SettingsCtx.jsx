import { createContext, useEffect, useState } from "react";
import settings from "../Components/Settings/settings";

export const SettingsContext = createContext({})

export const SettingsProvider = ({children}) => {

    const [settingsData, setSettingsData] = useState(null)

    useEffect(() => {
        setSettingsData(settings.get())
    }, [])

    return (
        <SettingsContext.Provider value={{settingsData, setSettingsData}}>
            {settingsData ? children : null}
        </SettingsContext.Provider>
    )

}