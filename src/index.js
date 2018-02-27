module.exports = function check(str, bracketsConfig) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        for (let j = 0; j < bracketsConfig.length; j++) {
            let openBracket = bracketsConfig[j][0];
            let closeBracket = bracketsConfig[j][1];

            if (char === openBracket) counter++;
            else if (char === closeBracket) counter--;
            if (counter < 0) return false;
        }
    }

    return counter === 0;
};
