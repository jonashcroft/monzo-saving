// import './js/more.js';
// import 'more.js'

import ClassName from './test.js'

const components = {
    'testing': ClassName
}

class App {
    constructor () {
        this._components = []
    }

    registerComponents () {
        for (let key in components) {
            let ComponentConstructor = components[key]
            let elements = document.querySelectorAll(`[data-${key}]`)

            for (let elem of elements) {
                var instance = new ComponentConstructor(this, elem)
                this._components.push(instance)

                instance.onInit()
            }
        }
        // window.ThemeComponents = this._components
        // window.__Theme = this
    }

    getComponents () {
        return this._components
    }
}

export default App
