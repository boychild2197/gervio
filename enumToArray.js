/**
 * 
 * @param {enum} _enum 
 * @returns { Array }
 * 
 */

const enumToArray = (_enum) => {
    var array = [];
    for (const key in _enum) array.push(_enum[key]);
    return array;
}

export default enumToArray;