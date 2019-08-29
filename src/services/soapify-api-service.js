import config from '../config'

const SoapifyApiService = {
    getSAPValues() {
        return fetch(`${config.API_ENDPOINT}/oils`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}

export default SoapifyApiService