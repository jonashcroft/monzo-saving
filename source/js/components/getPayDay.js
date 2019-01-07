import config from '../auth/config'
import * as Monzo from '../components/monzo'

const getPayDay = () => {
    console.log(`get paydays`)

    Monzo.getMonzoAccount()

    // let transactions = Monzo.getTransactions()

    Monzo.getTransactions()
    .then(response => {
        console.table(response)

        console.group('Payments')
        console.log(response.data)
        console.groupEnd()

    })
    .catch((error) => {
        console.log(`error: ${error}`)
    })
}

export default getPayDay
