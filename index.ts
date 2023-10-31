

export const objectDeleteNullValue = (arrayOfObj: Array<any> | object) => {
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
      return arrayOfObj;
    }
  }

export function helloGervio() {
    return "Hello Gervio!";
}
