import { createContext, useState } from "react";
import DeleteModal from "../../Elements/DeleteModal";

export const DeleteContext = createContext(null);

export const DeleteProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    const [promiseResolver, setPromiseResolver] = useState(null);
    const [message, setMessage] = useState(null)

    const confirm = (message) => {
        setMessage(message)
        return new Promise((resolve, reject) => {
            setPromiseResolver(() => resolve);
            setActive(true);
        });
    };

    const handleConfirm = () => {
        if (promiseResolver) {
            promiseResolver(true); // Resolve with true if confirmed
        }
        setActive(false);
        setMessage(null)
    };

    const handleCancel = () => {
        if (promiseResolver) {
            promiseResolver(false); // Resolve with false if canceled
        }
        setActive(false);
        setMessage(null)
    };

    return (
        <DeleteContext.Provider value={confirm}>
            {(active && message) && (
                <DeleteModal
                    message={message}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
            {children}
        </DeleteContext.Provider>
    );
};
