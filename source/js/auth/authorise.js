class Authorise {
   constructor (elem) {
       this._elem = elem
       this._authBtn = this._elem.querySelector('[data-auth-btn]')
   }

   onInit () {
       console.log(`auth class class`)

       this._authBtn.addEventListener('click', e => {
           e.preventDefault()

           console.log('click')
       })
   }
}

export default Authorise
