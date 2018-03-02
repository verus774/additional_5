module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let openBrackets = [];
    let closeBrackets = [];

    function isOpenBracket(char) {
        return openBrackets.indexOf(char) >= 0;
    }

    function isCloseBracket(char) {
        return closeBrackets.indexOf(char) >= 0;
    }

    function peek() {
        return stack[stack.length - 1];
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (isOpenBracket(char) && isCloseBracket(char)) {
            if (peek() === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (isOpenBracket(char)) {
            stack.push(char);
        } else if (isCloseBracket(char)) {
            if (peek() === openBrackets[closeBrackets.indexOf(char)]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0;
};
