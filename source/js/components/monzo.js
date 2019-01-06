import config from '../auth/config'
import axios from 'axios'

const getMonzoAccount = () => {

    let endpoint = `${config.monzoUrl}/accounts?account_type=uk_retail`
    let monzoAccountID

    axios({
        method: 'get',
        url: endpoint,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    }).then(response => {

        console.table(response.data)
        monzoAccountID = response.data.accounts[0].id

    })
    .catch((error) => {
        console.log(`error: ${error}`)
    })

    return monzoAccountID

}

export default getMonzoAccount
