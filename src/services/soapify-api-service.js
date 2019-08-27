import config from '../config'
import TokenService from '../services/token-service'

const SoapifyApiService = {
    getSoap(userId, userSoapId) {
        return fetch(`${config.API_ENDPOINT}/user/${userId}/customSoap/${userSoapId}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => 
                (!res.ok) 
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getSoapList(userId) {
        return fetch(`${config.API_ENDPOINT}/user/${userId}`, {
            method: 'GET',
            headers: {
                'authorization' : `bearer ${TokenService.getAuthToken()}`
            }
        })
    }
    ,
    getSAPValues() {
        return fetch(`${config.API_ENDPOINT}/oils`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
    },
    postSoap(userId, name, text) {
        return fetch(`${config.API_ENDPOINT}/user/${userId}/`, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                user_id: userId,
                name,
                text
            }),
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default SoapifyApiService