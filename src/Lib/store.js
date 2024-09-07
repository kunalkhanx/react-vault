import { v4 as uuidv4 } from 'uuid';
import { AES, enc } from 'crypto-js';

const getVaults = (name) => {
    let vaults = JSON.parse(localStorage.getItem(`${name}_vaults`));
    if (!vaults || vaults.length === 0) {
        vaults = [`${name}_0`]
        localStorage.setItem(`${name}_vaults`, JSON.stringify(vaults))
    }
    return vaults
}

const createVault = (name, id) => {
    const vaults = getVaults(name)
    vaults.push(id)
    localStorage.setItem(`${name}_vaults`, JSON.stringify(vaults))
}

const getVault = (vault_id) => {
    let vault = JSON.parse(localStorage.getItem(vault_id));
    if(!vault || vault === null){
        vault = {}
    }
    return vault
}

const saveToVault = (vault_id, data) => {
    localStorage.setItem(vault_id, JSON.stringify(data))
}

const addToVault = (name, id, data) => {
    const vaults = getVaults(name)
    let vault_id = `${name}_${vaults.length - 1}`
    let vault = getVault(vault_id)
    if(Object.keys(vault).length >= 4){
        vault_id = `${name}_${vaults.length}`
        createVault(name, vault_id)
        vault = {}
    }
    vault[id] = data
    saveToVault(vault_id, vault)
}

const updatedFromVault = (name, id, data) => {
    const vaults = getVaults(name)
    for(let i in vaults){
        const vault = getVault(vaults[i])
        for(let j in vault){
            if(j === id){
                vault[j] = data
                saveToVault(vaults[i], vault)
                break;
            }
        }
    }
}

const fetchList = (name) => {
    const vaults = getVaults(name)
    const data = {}
    for(let i in vaults){
        const vault = getVault(vaults[i])
        Object.assign(data, vault);
    }
    return data
}

const deleteItem = (name, id) => {
    const vaults = getVaults(name)
    for(let i in vaults){
        const vault = getVault(vaults[i])
        for(let j in vault){
            if(j === id){
                delete vault[j]
                saveToVault(vaults[i], vault)
                break;
            }
        }
    }
}

const store = {

    savedata(name, data, id, key) {
        if(id){
            data.id = id
            const encData = AES.encrypt(JSON.stringify(data), key).toString()
            updatedFromVault(name, id, encData)
            return data
        }
        const uid = uuidv4()
        data.id = uid
        const encData = AES.encrypt(JSON.stringify(data), key).toString()
        addToVault(name, uid, encData)
        return data
    },

    getData(name, key){
        const data = fetchList(name)
        const result = []
        for(let i in data){
            result.push(JSON.parse(AES.decrypt(data[i], key).toString(enc.Utf8)))
        }
        return result
    },

    deleteData(name, id){
        deleteItem(name, id)
    },

    state(name, value){
        const states = JSON.parse(localStorage.getItem('_state')) || {};
        if(!value){
            return states[name];
        }
        states[name] = value
        localStorage.setItem('_state', JSON.stringify(states))
    }

}

export default store