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

/**
 * matching common prefix for string array
 * @param {Array} str
 * @returns "" or prefix
 */
function commonPrefix(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix == "") return "";
        }
    return prefix;
}

/**
 * will be removes the specified prefix symbol
 * @param {Array} data
 * @param {string} prefix - default string is "."
 */
namespace.removePrefixForData = function (data, prefix) {
    if (!prefix) {
        prefix = ".";
    }
    let results = [];
    for (let i = 0; i < data.length; i++) {
        let record = {};
        for (let key in data[i]) {
            let propName = key;
            if (key && key.indexOf(prefix) >= 0) {
                propName = key.substring(key.indexOf(prefix) + 1);
            }
            record[propName] = data[i][key];
        }
        results.push(record);
    }
    return results;
}

/**
 * xss过滤
 */
function escapeHtml(value) {
    if (typeof value !== 'string') {
      return value
    }
    return value.replace(/[&<>`"'\/]/g, function(result) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '`': '&#x60;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2f;',
      }[result]
    })
  }

/**
 * topElement 为jQuery对象
 */
function hasEmptyForRequiredFields(topElement){
    let fields = topElement.find("[required]");
    for(let field of fields){
        let val = $(field).val();
        if(!val){                
            return true;
        }
    }
    return false;
}
