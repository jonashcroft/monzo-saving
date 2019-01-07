import config from '../auth/config'
import formatCurrency from './../helpers/currency'

import * as Monzo from '../components/monzo'

const getPayDay = () => {
    console.log(`get paydays`)

    Monzo.getMonzoAccount()

    Monzo.getTransactions()
    .then(response => {
        const incoming = response.data.transactions.filter(transaction => transaction['amount'] > 500 && transaction['scheme'] == 'payport_faster_payments')

        populatePayDays(incoming)

    })
    .catch((error) => {
        console.log(`error: ${error}`)
    })
}

const populatePayDays = (incoming) => {

    let payDayElem = document.createElement('div')
    payDayElem.setAttribute( 'data', 'paydays');
    let list = document.createElement('ul')

    config.app.appendChild(payDayElem)
    payDayElem.appendChild(list)

    for (let income of incoming) {
        // TODO: Dates are broken (January)
        let payAmount  = formatCurrency( income['amount'] ),
            readable   = new Date( income['created'] ),
            m          = readable.getMonth(), // returns 6
            d          = readable.getDay(),  // returns 15
            y          = readable.getFullYear(),  // returns 2012

            payDate    = `${d}/${m}/${y}`

        payDayElem.querySelector('ul').insertAdjacentHTML('beforeend',
            `<li><div class="pl-wrap">${income['counterparty'].name}
                <b>&pound;${payAmount}</b>
            </div>
            <div class="pl-date">
                <span>${payDate} "${income['notes']}"</span>
            </div></li>`
        )
    }

}

export default getPayDay
