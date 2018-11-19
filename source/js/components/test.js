import config from './../helpers/config'
import formatCurrency from './../helpers/currency'

class ClassName {
    constructor (elem) {
        this._elem = elem
    }

    onInit () {
        console.log('Main should be ready!')
        console.dir(this._elem)
        console.dir(config)

        console.log( formatCurrency(10000) )
    }
}

export default ClassName
