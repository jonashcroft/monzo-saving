import config from './../helpers/config'

class ClassName {
    constructor (theme, elem) {
        this._elem = elem
    }

    onInit () {
        console.log('Main should be ready!')
        console.dir(this._elem)

        console.dir(config)
    }
}

export default ClassName
