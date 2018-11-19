class Authorise {
   constructor (elem) {
       this._elem = elem
       this._authBtn = this._elem.querySelector('[data-auth-btn]')
   }

   onInit () {
       console.log(`auth class class`)
       /**
        * Check if user has already authorised and hide/show
        * app/auth based on results from db
        */

       this._authBtn.addEventListener('click', e => {
           e.preventDefault()

           console.log('click')
       })
   }
}

export default Authorise
