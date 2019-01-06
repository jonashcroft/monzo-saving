import initAuth from './auth/authorise'
import Test from './components/test'

// const components = {
    // 'authorise': Authorise,
    // 'test': Test,
// }

class App {
    constructor () {
        this._components = []
    }

    initComponents () {

        let accessToken = localStorage.getItem('accessToken')

        if ( typeof accessToken !== 'undefined' && accessToken !== null ) {
            console.log(`we've got the access token`)

            getMonzoAccount()
        } else {
            initAuth()
        }

        /**
         * If Access token exists and access
         * token got - go straight to app,
         * else authorise
         */

        // if ( accessToken ) {

        // }

        // for (let key in components) {
        //     let buildComponents = components[key]
        //     let elements = document.querySelectorAll(`[data-${key}]`)

        //     for (let elem of elements) {
        //         let instance = new buildComponents(elem)
        //         instance.onInit()
        //     }
        // }
    }
}

export default App
