/**
 * 
 * @param {enum} _enum 
 * @returns { Array }
 */
const enumToObjectArray = (_enum) => {
    var array = [];
    for (const key in _enum) array.push({ name:_enum[key], value:key });
    return array;
}

export default enumToObjectArray;