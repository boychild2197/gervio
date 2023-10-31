/**
 * The function checks if two objects are identical
 * @param {object} obj1 
 * @param {object} obj2 
 * @returns { boolean}
 */

const compareObjects = ( obj1, obj2 ) => {
    let same = true;
    if(typeof obj2 !=="object" || !obj2 || !obj1) { // @ts-ignore
      return;
    }
    Object.keys( obj1 ).forEach( key => {
      if(!obj1[key]) return
      same = same && obj1[key] === obj2[key];
    });
    return same;
}

export default compareObjects;