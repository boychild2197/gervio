
/** 
* @param {Object}
* @returns {Object}
* 

* @example 

*    var data = {
*      name: 'foo', 
*     value: 'bar',
*      size: ''
*    }

*    var newData = removeNullValueFromObject(data);

*    console.log(newData);

*    result { name: 'foo', value: 'bar' }
* 
*/

const removeNullValueFromObject = (object) => {
  if (typeof object === 'object' && object !== null) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] === null || object[key] === '') {
          delete object[key];
        }
      }
    }
    return object;
  } 
  else {
    return object;
  }
}

export default removeNullValueFromObject;