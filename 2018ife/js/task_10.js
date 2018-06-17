//按照HTML中按钮的描述以此实现功能
//计算结果显示在 id 为 result 的 P 标签中
//除了第一个按钮，其它按钮操作时，都需要判断输入是否为数字，否则在 console 中输出错误信息

//获参
var radioValue;
function getRadioValue(id) {
    radioValue = document.getElementById(id).value;
}

//button1 判断当前选中的输入框输入内容是否为数字
function button1() {   
    var inputId = "num-" + radioValue;
    var inputValue = document.getElementById(inputId).value;
    console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") {
        document.getElementById("result").innerHTML = "Number:" + radioValue + "中输入的不是数字";
        console.log("执行了");
    } else {
        document.getElementById("result").innerHTML = "Number:" + radioValue + "中输入的是数字";
        console.log("执行了");
    }  
}

//button2 把 A 四舍五入为 B 个小数位数的数字


//button3 当前选中数字的绝对值
function button3() {
    var inputId = "num-" + radioValue;
    //console.log(inputId);
    var inputValue = document.getElementById(inputId).value;
    //console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") {
        console.log("Number:" + radioValue + "中输入的不是数字");
    } else {
        if (inputValue >= 0) {
            document.getElementById("result").innerHTML = "Number:" + radioValue + "的绝对值为：" + inputValue;
        } else {
            inputValue = -inputValue;
            document.getElementById("result").innerHTML = "Number:" + radioValue + "的绝对值为：" + inputValue;
        }
        console.log("执行了");
    }
}

//button4 对当前选中的数字进行上舍入
function button4() {
    var inputId = "num-" + radioValue;
    //console.log(inputId);
    var inputValue = document.getElementById(inputId).value;
    //console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") {
        console.log("Number:" + radioValue + "中输入的不是数字");
    } else {
        if (inputValue % 1 === 0) {
            document.getElementById("result").innerHTML = "Number:" + radioValue + "输入的为整数，上舍入就是它本身：" + inputValue;
        } else {
            if (inputValue > 0) {
                inputValue = parseInt(inputValue) + 1;
                console.log(inputValue);
                document.getElementById("result").innerHTML = "Number:" + radioValue + "上舍入的值为：" + inputValue;
            } else if (inputValue < 0) {
                inputValue = parseInt(inputValue);
                document.getElementById("result").innerHTML = "Number:" + radioValue + "上舍入的值为：" + inputValue;
            }
        }
    }
}

//button5 对当前选中的数字进行下舍入
function button5() {
    var inputId = "num-" + radioValue;
    //console.log(inputId);
    var inputValue = document.getElementById(inputId).value;
    //console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") {
        console.log("Number:" + radioValue + "中输入的不是数字");
    } else {
        if (inputValue % 1 === 0) {
            document.getElementById("result").innerHTML = "Number:" + radioValue + "输入的为整数，下舍入就是它本身：" + inputValue;
        } else {
            if (inputValue > 0) {
                inputValue = parseInt(inputValue);
                //console.log(inputValue);
                document.getElementById("result").innerHTML = "Number:" + radioValue + "下舍入的值为：" + inputValue;
            } else if (inputValue < 0) {
                inputValue = parseInt(inputValue) - 1;
                document.getElementById("result").innerHTML = "Number:" + radioValue + "下舍入的值为：" + inputValue;
            }
        }
    }
}

//button6 把当前选中的数字四舍五入为最接近的整数
function button6() {
    var inputId = "num-" + radioValue;
    //console.log(inputId);
    var inputValue = document.getElementById(inputId).value;
    //console.log(inputValue);
    var yuInputValue = parseFloat((inputValue % 1).toFixed(1));
    console.log(yuInputValue);
    if (isNaN(inputValue) || inputValue == "") {
        console.log("Number:" + radioValue + "中输入的不是数字");
    } else {
        if (yuInputValue === 0) {
            document.getElementById("result").innerHTML = "Number:" + radioValue + "输入的为整数";
        } else {
            if (inputValue > 0) {
                //console.log(inputValue % 1);
                if (0 < yuInputValue < 0.5) {
                    inputValue = parseInt(inputValue);
                    //console.log(inputValue % 1 + "正四舍");
                    document.getElementById("result").innerHTML = "Number:" + radioValue + "四舍五入为：" + inputValue;
                 } //else if (0.5 <= yuInputValue <= 0.9) {
                //     inputValue = parseInt(inputValue) + 1;
                //     //console.log(inputValue + "正五入");
                //     document.getElementById("result").innerHTML = "Number:" + radioValue + "四舍五入为：" + inputValue;
                // }   
            } else if (inputValue < 0) {
                if (-yuInputValue < 0.5) {
                    inputValue = parseInt(inputValue);
                    //console.log(inputValue + "负四舍");
                    document.getElementById("result").innerHTML = "Number:" + radioValue + "四舍五入为：" + inputValue;
                } else if (0.5 <= -yuInputValue <= 0.9) {
                    inputValue = parseInt(inputValue) - 1;
                    //console.log(inputValue + "负五入");
                    document.getElementById("result").innerHTML = "Number:" + radioValue + "四舍五入为：" + inputValue;
                } 
            }
        }
    }
}

//button7 返回 A 和 B 中的最高值
function button7() {
    var aValue = document.getElementById("num-a").value;
    var bValue = document.getElementById("num-b").value;
    if (aValue > bValue) {
        document.getElementById("result").innerHTML = "NumberA大";
    } else if (aValue < bValue) {
        document.getElementById("result").innerHTML = "NumberB大";
    } else if (aValue = bValue) {
        document.getElementById("result").innerHTML = "一样大";
    }
}

//button8 返回 A 和 B 中的最低值
function button8() {
    var aValue = document.getElementById("num-a").value;
    var bValue = document.getElementById("num-b").value;
    if (aValue > bValue) {
        document.getElementById("result").innerHTML = "NumberB小";
    } else if (aValue < bValue) {
        document.getElementById("result").innerHTML = "NumberA小";
    } else if (aValue = bValue) {
        document.getElementById("result").innerHTML = "一样大";
    }
}
