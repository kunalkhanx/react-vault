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
    }

}

export default loader