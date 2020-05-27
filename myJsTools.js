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

//保留n位小数并格式化输出（不足的部分补0）
let fomatFloat = function(value, n) {
    var f = Math.round(value*Math.pow(10,n))/Math.pow(10,n);
    var s = f.toString();
    var rs = s.indexOf('.');   
    if (rs < 0) {     
        s += '.';   
    } 
    for(var i = s.length - s.indexOf('.'); i <= n; i++){
      s += "0";
    }
    return s;
}

/**
 * 将首尾颜色分段
 * @param {开始颜色} startColor #fff
 * @param {结尾颜色} endColor #000
 * @param {分段数} step 10
 */
function gradient(startColor, endColor, step) {
    // rgb to hex
    function rgbToHex(r, g, b) {
        var hex = ((r << 16) | (g << 8) | b).toString(16);
        return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    }

    // hex to rgb
    function hexToRgb(hex) {
        var rgb = [];
        for (var i = 1; i < 7; i += 2) {
            rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
        }
        return rgb;
    }
    var sColor = hexToRgb(startColor),
        eColor = hexToRgb(endColor);
    var rStep = (eColor[0] - sColor[0]) / step;
    gStep = (eColor[1] - sColor[1]) / step;
    bStep = (eColor[2] - sColor[2]) / step;
    var gradientColorArr = [];
    for (var i = 0; i < step; i++) {
        gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
    }
    return gradientColorArr;
}

/**
 * 对对象数组进行分组
 * @param {Array} arr 需要分组的对象数组
 * @param {String} key 分组字段
 * @example groupBy([{a:1,b:2}], 'a') 
 */
function groupBy(arr, key) {
    return arr.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}

/**
 * 对象数组去重
 * @param {Array} objArray 对象数组
 */
function distict(objArray) {
    let result = [];//去重后返回的结果数组
    let temp = {};//临时对象
    //将对象数组中每一项的name值作为属性，若temp不拥有此属性时则为temp添加此属性且将其值赋为true，并将这一项push到结果数组中
    for(let i=0; i < objArray.length; i++){  
        let myname = objArray[i].name;
        if(temp[myname]){//如果temp中已经存在此属性名，则说明遇到重复项
            continue;//不继续执行接下来的代码，跳转至循环开头
        }  
        temp[myname] = true;//为temp添加此属性（myname）且将其值赋为true
        result.push(objArray[i]);//将这一项复制到结果数组result中去
    }  
    return result;  
}


