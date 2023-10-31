
/** 
* @param {Array|Object}
* @returns {Array|Object}
* 
*/

export const objectDeleteNullValue = (arrayOfObj) => {
  if (typeof arrayOfObj === 'object' && arrayOfObj !== null) {
    for (const key in arrayOfObj) {
      if (arrayOfObj.hasOwnProperty(key)) {
        if (arrayOfObj[key] === null || arrayOfObj[key] === '') {
          delete arrayOfObj[key];
        }
      }
    }
    return arrayOfObj;
  } 
  else {
    arrayOfObj;
  }
}