import config from '../auth/config'
import formatCurrency from './../helpers/currency'

import * as Monzo from '../components/monzo'

import getLeftovers from '../components/getLeftovers'

const getPayDay = () => {
    console.log(`get paydays`)

    Monzo.getMonzoAccount()

    Monzo.getTransactions()
    .then(response => {
        let incoming = response.data.transactions.filter(transaction => transaction['amount'] > 5000 && transaction['scheme'] == 'payport_faster_payments')

        let bills = response.data.transactions.filter(transaction => transaction['description'].includes('BILLS'))

        populatePayDays(incoming)

    })
    .catch((error) => {
        console.log(`error: ${error}`)
    })
}

const populatePayDays = (incoming) => {

    let payDayElem = document.createElement('div')
    payDayElem.setAttribute( 'data-paydays', '');
    payDayElem.setAttribute( 'class', 'paydays');
    let list = document.createElement('ul')

    config.app.appendChild(payDayElem)
    payDayElem.appendChild(list)

    for (let income of incoming) {
        // TODO: Dates are broken (January)
        let payAmount  = formatCurrency( income['amount'] ),
            readable   = new Date( income['created'] ),
            m          = readable.getMonth() + 1, // returns 6
            d          = readable.getDay(),  // returns 15
            y          = readable.getFullYear(),  // returns 2012

            payDate    = `${d}/${m}/${y}`

        payDayElem.querySelector('ul').insertAdjacentHTML('beforeend',
            `<li data-payday data-amount="${income['amount']}"><div class="pl-wrap">${income['counterparty'].name}
                <b>&pound;${payAmount}</b>
            </div>
            <div class="pl-date">
                <span>${payDate} "${income['notes']}"</span>
            </div></li>`
        )
    }

    let payDays = list.querySelectorAll('[data-payday')

    for (let payDay of payDays) {
        payDay.addEventListener('click', e => {
            e.preventDefault()
            config['salary'] = payDay.dataset.amount

            getLeftovers()
        })
    }

}

export default getPayDay
