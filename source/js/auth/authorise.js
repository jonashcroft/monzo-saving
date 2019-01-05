import config from '../helpers/config'
import axios from 'axios'

class Authorise {
    constructor (elem) {
       this._elem = elem
       this._authBtn = this._elem.querySelector('[data-auth-btn]')
    }

    onInit () {
        console.log(`auth class class`)
       /**
        * Check if user has already authorised and hide/show
        * app/auth based on results from db
        */

       let accessCode = new URLSearchParams(document.location.search).get('code')

        if ( accessCode ) {
           this._getAccessToken( accessCode )
        }

        this._authBtn.addEventListener('click', e => {
            e.preventDefault()

            this._initAuth()
        })
    }

    _initAuth () {
        /**
         * Redirect to Mozno Auth URL, redirect
         * back with Access Code and parse from URL
         */

        let authUrl = `https://auth.monzo.com/?client_id=${ config.clientId }&redirect_uri=${ config.redirectUrl }&response_type=code&state=${ Math.random().toString(23).substring(4) }`;

        window.location.replace(authUrl)

    }

    _getAccessToken ( accessCode ) {
        console.dir(`Access Code: ${accessCode}`)
        /**
         * Axios request to Monzo
         */

        let formData = new FormData()

        formData.append('client_id', config.clientId);
        formData.append('client_secret', config.clientSecret);
        formData.append('code', accessCode);
        formData.append('grant_type', 'authorization_code');
        formData.append('redirect_uri', config.redirectUrl);

        const url = `${config.monzoUrl}/oauth2/token`;

        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response)
                console.log(response.data)
                console.log(response.data.access_token)
                console.log(response.data.refresh_token)

                // sessionStorage.setItem('accessToken', authResponse.access_token);
                // sessionStorage.setItem('refreshToken', authResponse.refresh_token);

            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })
    }
}

export default Authorise
