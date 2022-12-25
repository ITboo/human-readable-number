//CommonJS
module.exports = function toReadable(number) {
    //создаём словарь (ключ-значение)
    const dictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
// проверяем наличие в словаре
    if (number in dictionary) {
        return dictionary[number];
    }
// числа до 100
    if (number < 100) {
        const dozen = number - (number % 10);
        return dictionary[dozen] + " " + dictionary[number - dozen];
    }
// числа до 1000
    if (number < 1000) {
        const hundreds = (number / 100) | 0;
        const rest = number % 100;
        return (
            dictionary[hundreds] +
            " hundred " +
            (rest === 0 ? "" : toReadable(rest))
        ).trim(); //trim() удаляет пробельные символы с начала и конца строки
    }
};
