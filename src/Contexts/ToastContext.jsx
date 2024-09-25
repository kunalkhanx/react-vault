import { createContext, useState } from "react";
import Toast from "../Elements/Toast";

export const ToastContext = createContext(null)


export const ToastProvider = ({children}) => {

    const [toast, setToast] = useState(null)
    const [handler, setHanlder] = useState(null)

    const runToast = (message, type = 'success') => {
        clearTimeout(handler)
        setToast({message, type})
        const _h = setTimeout(() => {
            setToast(null)
        }, [3000])
        setHanlder(_h)
    }

    const closeToast = () => {
        clearTimeout(handler)
        setToast(null)
    }

    return (
        <ToastContext.Provider value={{runToast}}>
            {toast && <Toast type={toast?.type} message={toast?.message} onClose={closeToast} />}            
            {children}
        </ToastContext.Provider>
    )

}