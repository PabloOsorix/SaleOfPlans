Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && 
      isFinite(value) && 
      Math.floor(value) === value;
  };


export function isNumber(inputNumber) {
    if (typeof inputNumber != "string") return false // we only process strings!  
    return !isNaN(inputNumber) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(inputNumber)) // ...and ensure strings of whitespace fail
  }
  

export function getDecimalPart(inputNumber) {

    return (inputNumber + "").split(".")[1];
}