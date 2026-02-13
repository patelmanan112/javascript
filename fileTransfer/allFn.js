import Cm from './kmTocm.js'
import Mile from './kmToMIle.js'
 export  var cm 
 export  var feet1
 export  var Mile1
function feet(a){
    var feet = a*3280.8399
    console.log("Kilometer to Feet" , a*3280.8399);
    return feet;
}
 export function cal(a , b){
    if(b == "feet"){
   feet1 = feet(a);
   cm = NaN;
   Mile1 = NaN
    }
    if(b == "cm"){
 cm =   Cm(a);
 feet1 = NaN
 Mile1 = NaN
    }
  if(b == "mile"){
    Mile1 =  Mile(a);
     feet1 = NaN
     cm = NaN;
  }
  
    
}
// export default cal