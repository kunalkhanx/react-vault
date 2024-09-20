import React, { useContext, useState } from 'react'
import loader from '../../Lib/loader'
import FileInput from '../../Elements/FileInput'
import TextInput from '../../Elements/TextInput'
import { PassKey } from '../Contexts/PassKey'
import PrimaryButton from '../../Elements/PrimaryButton'
import { ToastContext } from '../Contexts/ToastContext'

const ImportExport = () => {

    const [file, setFile] = useState(null)
    // const [fileData, setFileData] = useState(null)
    const [passKeyInput, setPassKeyInput] = useState('')

    const {key} = useContext(PassKey)
    const {runToast} = useContext(ToastContext)

    const fileUploadHandler = (value) => {
        setFile(value)
    }

    const readFile = (e) => {
        e.preventDefault()
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    // setFileData(jsonData);
                    loader.import(jsonData, passKeyInput, key)
                    setPassKeyInput('')
                    setFile(null)
                    runToast('Data imported!')
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    runToast('Invalid file format!', 'error')
                }
            };

            reader.onerror = (error) => {
                console.error("Error reading file:", error);
                runToast('Unable to read file!', 'error')
            };

            reader.readAsText(file);
        }else{
            runToast('No file selected!', 'error')
        }
    }

    const exportData = () => {
        loader.export()
        runToast('Data exported!')
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-4 items-center'>
                <p>Export Data:</p>
                <PrimaryButton color='success' onClick={exportData}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    <span>Download</span>
                </PrimaryButton>
            </div>

            <form onSubmit={readFile} className='grid grid-cols-2 gap-4 items-start'>
                <p>Import Data:</p>
                <div className='flex flex-col gap-2'>

                    <div className='flex gap-2 items-center'>
                        <FileInput label={null} setValue={fileUploadHandler} />
                        <TextInput type='password' placeholder={'Enter Passkey'} value={passKeyInput} setValue={setPassKeyInput} />
                    </div>
                    <PrimaryButton type='submit' disabled={!file || !passKeyInput}>
                        Import
                    </PrimaryButton>
                </div>
            </form>
        </>
    )
}

export default ImportExport