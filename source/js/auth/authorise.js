import config from './config'
import axios from 'axios'

// https://itnext.io/how-to-create-an-application-using-the-monzo-bank-api-700e90e1f949

export const initAuth = () => {

    let authDiv = document.createElement('div');
        authDiv.setAttribute( 'data', 'authorise');

    config.app.appendChild(authDiv);

    authDiv.insertAdjacentHTML('beforeend',
        `<div class="authorise" data-authorise>
            <button data-auth-btn>authorise!</button>
        </div>`
    )

    if (config.app.querySelector('[data-authorise')) {

        let accessCode = new URLSearchParams(document.location.search).get('code'),
            authBtn    = config.app.querySelector('[data-auth-btn]')

        if ( accessCode ) {
           getAccessToken( accessCode )
        }

        authBtn.addEventListener('click', e => {
            e.preventDefault()

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')

            authMonzo()
        })
    }
}

const authMonzo = () => {
    let authUrl = `https://auth.monzo.com/?client_id=${ config.clientId }&redirect_uri=${ config.redirectUrl }&response_type=code&state=${ Math.random().toString(23).substring(4) }`

    window.location.replace(authUrl)
}

const getAccessToken = (accessCode) => {
    console.dir(`Access Code: ${accessCode}`)

    let formData = new FormData()

    formData.append('client_id', config.clientId)
    formData.append('client_secret', config.clientSecret)
    formData.append('code', accessCode)
    formData.append('grant_type', 'authorization_code')
    formData.append('redirect_uri', config.redirectUrl)

    let url = `${config.monzoUrl}/oauth2/token`

    axios({
        method: 'post',
        url: url,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then( (response) => {
        //handle success
        // console.log(response)
        // console.log(response.data)
        // console.log(response.data.access_token)
        // console.log(response.data.refresh_token)

        localStorage.setItem('accessToken', response.data.access_token)
        localStorage.setItem('refreshToken', response.data.refresh_token)

        window.history.replaceState(null, null, window.location.pathname);
    })
    .catch( (error) => {
        console.log(error)
    })
}

export const refreshAccessToken = () => {
    console.log(`refresh token`)

    let formData = new FormData()

    formData.append('grant_type', 'refresh_token')
    formData.append('client_id', config.clientId)
    formData.append('client_secret', config.clientSecret)
    formData.append('refresh_token', localStorage.getItem('refreshToken'))

    let url = `${config.monzoUrl}/oauth2/token`

    axios({
        method: 'post',
        url: url,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then( (response) => {
        console.group('refresh')
        console.log(response)
        console.groupEnd()

        localStorage.setItem('accessToken', response.data.access_token)
        localStorage.setItem('refreshToken', response.data.refresh_token)

        // location.reload()
    })
    .catch( (response) => {
        console.log(response);
    })

}