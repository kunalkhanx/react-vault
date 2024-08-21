import { v4 as uuidv4 } from 'uuid';

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

    savedata(name, data, id) {
        if(id){
            data.id = id
            updatedFromVault(name, id, data)
            return data
        }
        const uid = uuidv4()
        data.id = uid
        addToVault(name, uid, data)
        return data
    },

    getData(name){
        const data = fetchList(name)
        return Object.values(data)
    },

    deleteData(name, id){
        deleteItem(name, id)
    },

}

export default store