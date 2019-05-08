/**
 * convert white-space to _ ,upper to lower
 * @param {string or Array} strOrArr 
 */
function convertSpaceAndCase(strOrArr) {
    if (strOrArr) {
        if (typeof strOrArr == 'string') {
            let temp = strOrArr;
            temp = temp.toLowerCase().trim();
            temp = temp.replace(/\s/g, "_");
            return temp;
        } else if (typeof strOrArr == 'object') {
            // let tempStr = JSON.stringify(strOrArr);
            // let resultStr = convertSpaceAndCase(tempStr);
            // return JSON.parse(resultStr)

            let temp = strOrArr.slice();
            for (let i = 0; i < strOrArr.length; i++) {
                temp[i] = convertSpaceAndCase(strOrArr[i]);
            }
            return temp;
        }
    }
    return strOrArr;
}

/**
 * convert SpecialCharacter to _
 * @param {String or Array} strOrArr 
 */
function convertSpecialCharacter(strOrArr) {
    if (typeof strOrArr == 'string') {
        let tempStr = strOrArr;
        tempStr = tempStr.replace(/\[|\]|\'|\;|\-|\=|\~|\\|\||\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\}|\{|\"|\:|\?|\/|\<|\>|\,|\./g, "_");
        while (tempStr.includes('__')) {
            tempStr = tempStr.replace(/__/g, '_');
        }
        return tempStr;
    }
    else if (typeof strOrArr == 'object') {
        let tempArr = strOrArr.slice();
        for (let index = 0; index < strOrArr.length; index++) {
            tempArr[index] = convertSpecialCharacter(strOrArr[index]);
        }
        return tempArr;
    }
    return strOrArr;
}