import initAuth from './auth/authorise'
import getPayDay from './components/getPayDay'

// import getMonzoAccount from './components/monzo'

class App {
    initComponents () {

        let accessToken = localStorage.getItem('accessToken')

        if ( typeof accessToken !== 'undefined' && accessToken !== null ) {
            console.log(`we've got the access token`)

            getPayDay()

        } else {

            initAuth()

        }
    }
}

export default App
