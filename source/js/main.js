import Authorise from './auth/authorise'
import Timer from './components/timer'
import Test from './components/test'

import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui'

// https://firebase.google.com/docs/auth/web/firebaseui
// https://github.com/firebase/firebaseui-web#demo

var config = {
    apiKey: "AIzaSyBtPMqe1nAPsJw1zqLbwo4ZZYSbCFMjf1w",
    authDomain: "monzo-app-181a0.firebaseapp.com",
    databaseURL: "https://monzo-app-181a0.firebaseio.com",
    projectId: "monzo-app-181a0",
    storageBucket: "monzo-app-181a0.appspot.com",
    messagingSenderId: "19214649606"
}

firebase.initializeApp(config);

console.dir(firebase)

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
