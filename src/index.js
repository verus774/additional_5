module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let openBrackets = [];
    let closeBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (openBrackets.indexOf(char) >= 0) {
            stack.push(char);
        }

        if (closeBrackets.indexOf(char) >= 0) {
            const stackLength = stack.length;
            const topEl = stack[stackLength - 1];

            if (stackLength > 0 && topEl === openBrackets[closeBrackets.indexOf(char)]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
