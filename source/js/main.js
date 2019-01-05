import Authorise from './auth/authorise'
import Timer from './components/timer'
import Test from './components/test'

const components = {
    'authorise': Authorise,
    'test': Test,
    'timer': Timer
}

class App {
    constructor () {
        this._components = []
    }

    initComponents () {

        /**
         * If Access token exists and access
         * token got - go straight to app,
         * else authorise
         */

        // if ( accessToken ) {

        // }

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
