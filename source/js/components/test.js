class ClassName {
    constructor (theme, elem) {
        this._elem = elem
    }

    onInit () {
        console.log('Main should be ready!')
        console.dir(this._elem)
    }
}

export default ClassName
