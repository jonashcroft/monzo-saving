class Authorise {
    constructor (elem) {
       this._elem = elem
       this._clientIdInput = this._elem.querySelector('[data-auth-client-id]')
       this._clientSecretInput = this._elem.querySelector('[data-auth-client-secret]')
       this._authBtn = this._elem.querySelector('[data-auth-btn]')
    }

    onInit () {
        console.log(`auth class class`)
       /**
        * Check if user has already authorised and hide/show
        * app/auth based on results from db
        */

       let accessToken = new URLSearchParams(document.location.search).get('code')

        if ( accessToken ) {
           this._getAccessToken( accessToken );
        }

        let clientId
        let clientSecret

        this._authBtn.addEventListener('click', e => {
            e.preventDefault()

            clientId = this._clientIdInput.value
            clientSecret = this._clientSecretInput.value

            console.log(`Client ID: ${clientId}`, `Client Secret: ${clientSecret}`)

            this._initAuth()
        })
    }

    _initAuth () {
        /**
         * Redirect to Mozno Auth URL, redirect
         * back with Access Code and parse from URL
         */

        let authUrl = `https://auth.monzo.com/?client_id=${ config.clientId }&redirect_uri=${ config.redirectUrl }&response_type=code&state=${ Math.random().toString(23).substring(4) }`;

        window.location.replace(authUrl);

    }

    _getAccessToken ( accessToken ) {
        /**
         * Axios request to Monzo
         */
    }
}

export default Authorise
