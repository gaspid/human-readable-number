  
module.exports = function toReadable (number) {
    let digits1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let digits2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen' , 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let digits3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let str = '';
    let num = 0;
    if (number === 0) str+= 'zero';
    if (number >= 100) {
        num = Math.floor(number / 100);
        number = number % 100;
        str += digits1[num - 1] + ' hundred';
    }
    if (number >= 20 && number <= 99) {
        num = Math.floor(number / 10);
        number = number % 10;
        str += str.length != 0 ? ' ' + digits3[num - 1] : digits3[num - 1];
    }
    if (number > 10 && number <= 19) {
        num = number % 10;
        str += str.length != 0 ? ' ' + digits2[num - 1] : digits2[num - 1];
    }
    if (number === 10)
    {
        number = number % 10;
        str += str.length != 0 ? ' ' + digits3[0] : digits3[0];
    }
    if (number < 10 && number > 0)
        str += str.length != 0 ? ' ' + digits1[number - 1] : digits1[number - 1];
    return str;
}