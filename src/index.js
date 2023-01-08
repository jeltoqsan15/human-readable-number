module.exports = function toReadable (number) {

    const sourceNumber = number.toString();
    
    const zeroPosition = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const firstPositionWithOne = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const firstPosition = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const printOneDigitNumber = (num) => {
        return zeroPosition[+num];
    }

    const printTwoDigitNumber = (num) => {
        if (num[0] === '1') {
            return firstPositionWithOne[+num[1]];
        } else {
            if (num[1] === '0') return firstPosition[+num[0]];

            return `${firstPosition[+num[0]]} ${zeroPosition[+num[1]]}`
        }
    }

    if (sourceNumber.length === 1) {
        return printOneDigitNumber(sourceNumber);

    } else if (sourceNumber.length === 2) {
        return printTwoDigitNumber(sourceNumber);
    } else {
        if (sourceNumber[1] === '0' && sourceNumber[2] === '0') {
            return `${printOneDigitNumber(sourceNumber[0])} hundred`;
        } else if (sourceNumber[1] === '0') {
            return `${printOneDigitNumber(sourceNumber[0])} hundred ${printOneDigitNumber(sourceNumber[2])}`;
        } else {
            return `${printOneDigitNumber(sourceNumber[0])} hundred ${printTwoDigitNumber(sourceNumber.slice(1))}`;
        }
    }
}
