import config from '../auth/config'

// import formatCurrency from './../helpers/currency'

// import * as Monzo from '../components/monzo'

const getLeftovers = () => {
    console.log(`Get Leftovers...`)

    config.app.querySelector('[data-paydays]').remove()

    let billsElem = document.createElement('div')
    billsElem.setAttribute( 'data-leftovers', '');

    /*-------------
    Get current balance and minus salary
    to get the "leftovers"
    --------------*/

    config.app.appendChild(billsElem)
    billsElem.insertAdjacentHTML('beforeend',
        `last month leftovers here`
    )
}

export default getLeftovers