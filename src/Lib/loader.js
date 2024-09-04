import { AES, enc } from 'crypto-js';
import store from './store';

const generateData = () => {
    const data = {
        passwords_vaults: JSON.parse(localStorage.getItem('passwords_vaults')),
        cards_vaults: JSON.parse(localStorage.getItem('cards_vaults')),
        notes_vaults: JSON.parse(localStorage.getItem('notes_vaults'))
    }

    const allList = [...data.passwords_vaults, ...data.cards_vaults, ...data.notes_vaults]

    for (let i in allList) {
        const vault = allList[i]
        data[vault] = JSON.parse(localStorage.getItem(vault))
    }
    return data
}

const validateStructure = (data) => {
    if(data.cards_vaults && !Array.isArray(data.cards_vaults)){
        throw new Error('Invalid data');
    }
    if(data.notes_vaults && !Array.isArray(data.notes_vaults)){
        throw new Error('Invalid data');
    }
    if(data.passwords_vaults && !Array.isArray(data.passwords_vaults)){
        throw new Error('Invalid data');
    }
}

const importCards = (data, inputKey, key) => {
    for(let i in data.cards_vaults){
        const vaultId = data.cards_vaults[i]
        const vault = data[vaultId]
        if(typeof vault === 'object' && !Array.isArray(vault)){
            for(let j in vault){
                const card = JSON.parse(AES.decrypt(vault[j], inputKey).toString(enc.Utf8))
                if(!card || 
                    card.cardName === undefined || 
                    card.cardType === undefined  || 
                    card.cardNumber === undefined  || 
                    card.cardExpireMonth === undefined  || 
                    card.cardExpireYear === undefined  || 
                    card.cvv === undefined){
                    throw new Error('Invalid data');
                }
                store.savedata('cards', card, null, key)
            }
        }else{
            throw new Error('Invalid data');
        }
    }
}

const importPasswords = (data, inputKey, key) => {
    for(let i in data.passwords_vaults){
        const vaultId = data.passwords_vaults[i]
        const vault = data[vaultId]
        if(typeof vault === 'object' && !Array.isArray(vault)){
            for(let j in vault){
                const password = JSON.parse(AES.decrypt(vault[j], inputKey).toString(enc.Utf8))
                if(!password || 
                    password.siteName === undefined || 
                    password.username === undefined  || 
                    password.password === undefined){
                    throw new Error('Invalid data');
                }
                store.savedata('passwords', password, null, key)
            }
        }else{
            throw new Error('Invalid data');
        }
    }
}

const importNotes = (data, inputKey, key) => {
    for(let i in data.notes_vaults){
        const vaultId = data.notes_vaults[i]
        const vault = data[vaultId]
        if(typeof vault === 'object' && !Array.isArray(vault)){
            for(let j in vault){
                const note = JSON.parse(AES.decrypt(vault[j], inputKey).toString(enc.Utf8))
                if(!note || 
                    note.title === undefined || 
                    note.content === undefined){
                    throw new Error('Invalid data');
                }
                store.savedata('notes', note, null, key)
            }
        }else{
            throw new Error('Invalid data');
        }
    }
}

const loader = {

    export() {
        const data = generateData()
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = 'exported.json';
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    import(data, inputKey, key){
        validateStructure(data)
        if(data.cards_vaults){
            importCards(data, inputKey, key)
        }
        if(data.passwords_vaults){
            importPasswords(data, inputKey, key)
        }
        if(data.notes_vaults){
            importNotes(data, inputKey, key)
        }
    }

}

export default loader