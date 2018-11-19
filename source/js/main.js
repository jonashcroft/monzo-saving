import Authorise from './auth/authorise'
import Timer from './components/timer';

const components = {
    'authorise': Authorise,
    'timer': Timer
}

class App {
    constructor () {
        this._components = []
    }

    initComponents () {
        // let timeElement = new Timer( document.querySelector('[data-timer]') )
        // timeElement.onInit()

        for (let key in components) {
            let buildComponents = components[key]
            let elements = document.querySelectorAll(`[data-${key}]`)

            for (let elem of elements) {

                let instance = new buildComponents(elem)
                instance.onInit()
            }
        }
    }
}

export default App
