const removeSpecialCharsFromString = (text) => {
    if (typeof text !== 'string')  return text; 
    return text.replace(/[^\w\s]/gi, '');
}

export default removeSpecialCharsFromString;