import Authorise from './auth/authorise'
import Timer from './components/timer'
import Test from './components/test'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

console.dir(firebase)

// https://firebase.google.com/docs/auth/web/custom-auth

// https://firebase.google.com/docs/auth/web/anonymous-auth

// firebase.database().ref('config').set({
//     clientId: 'clientid',
//     clientSecret: 'sfgdsgsdfs',
// });

// var ref = firebase.database().ref();
//     ref.on("value", function(snapshot){
//     output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
// });




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

        if ( accessToken ) {

        }

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
