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

        // let targetNode = document.getElementById('app')

        // let config = { attributes: true, childList: true, subtree: true };

        // let callback = (mutationsList, observer) => {
        //     for(var mutation of mutationsList) {
        //         console.group('mutation')
        //         console.log(mutation)
        //         console.groupEnd()

        //         if (mutation.type == 'childList') {
        //             console.log('A child node has been added or removed.')
        //         }
        //         else if (mutation.type == 'attributes') {
        //             console.log('The ' + mutation.attributeName + ' attribute was modified.')
        //         }
        //     }
        // }
        // let observer = new MutationObserver(callback)

        // observer.observe(targetNode, config)
    }
}

export default App
