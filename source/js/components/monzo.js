import config from '../auth/config'
import axios from 'axios'

const getMonzoAccount = () => {

    let endpoint = `${config.monzoUrl}/accounts?account_type=uk_retail`

    axios({
        method: 'get',
        url: endpoint,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    }).then(response => {
        // If request is good...
        console.table(response.data);

    })
    .catch((error) => {
        console.log('error ' + error);
    })

}

export default getMonzoAccount
