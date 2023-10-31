
const tzPhoneNumberValidator = '(255|0)[^0123459]([0-9]{8})';
const generalPhoneNumber = '[0-9]{6,}';
const onlyTextValidator = '^[a-zA-Z.,][a-zA-Z0-9.,-s ]*$';
const onlyNumberValidator = '^[0-9]+$';
const domainNameValidator = '((ftp|http|https)://)?(?:[a-z](?:[a-z]{0,61}[a-z])?.)+[a-z][a-z]{0,61}[a-z]';
const phoneNumbervalidator = '(255|0)([0-9]{9})$';
const phoneNumbervalidatorWithPrefix = '[^0123459][0-9]{8}';
const percentageValidator = '([1-9]|[1-9][0-9]|100)';
const ipAddressValidator = '/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/';

const regex = {
    tzPhoneNumberValidator,
    generalPhoneNumber,
    onlyTextValidator,
    onlyNumberValidator,
    domainNameValidator,
    phoneNumbervalidator,
    phoneNumbervalidatorWithPrefix,
    percentageValidator,
    ipAddressValidator
}

export default regex;