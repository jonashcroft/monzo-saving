class ClassName {
   constructor (theme, elem) {
       this._elem = elem
   }

   onInit () {
       console.log(`Test test test`)
       console.dir(this._elem)
   }
}

export default ClassName
