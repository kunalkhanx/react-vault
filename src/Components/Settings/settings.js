const settings = {

    get(){
        let response = JSON.parse(localStorage.getItem('settings'))
        if(!response){
            response = {
                passkey_expire: 60
            }
            localStorage.setItem('settings', JSON.stringify(response))
        }
        return response
    },

    save(data){
        localStorage.setItem('settings', JSON.stringify(data))
        return data
    }

}

export default settings