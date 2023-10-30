
/** 
* @param {Array|Object}
* @returns {Array|Object}
* 
*/


function objectDeleteNullValue(arrayOfObj: any): any {
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