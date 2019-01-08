import config from '../auth/config'
import axios from 'axios'

import * as Auth from '../auth/authorise'

export const getMonzoAccount = () => {

    let endpoint = `${config.monzoUrl}/accounts?account_type=uk_retail`
    let monzoAccountID

    axios({
        method: 'get',
        url: endpoint,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    }).then(response => {

        // console.table(response.data)
        // console.group('Response')
        // console.log(response)
        // console.groupEnd()
        monzoAccountID = response.data.accounts[0].id
        localStorage.setItem('accountId', monzoAccountID )

    })
    .catch((error) => {
        console.log(`error: ${error}`)

        console.group('error')
        console.log(error.response)
        console.groupEnd()

        if (error.response.status == 401) {
            Auth.refreshAccessToken()
        }
    })

    return monzoAccountID

}

export const getTransactions = async () => {

    /*-------------
    Endpoints exclude the milliseconds but
    the actual transaction object doesn't
    --------------*/
    let dateStart = new Date().toISOString().split('.')[0]+'Z',
        dateEnd   = new Date();
        dateEnd.setMonth(dateEnd.getMonth()-1),
        dateEnd   = dateEnd.toISOString().split('.')[0]+'Z'

    const endpoint = `${config.monzoUrl}/transactions?account_id=${localStorage.getItem('accountId')}&since=${dateEnd}&before=${dateStart}`

    let response = await axios({
        method: 'get',
        url: endpoint,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    })

    let data = await response
    return data

}