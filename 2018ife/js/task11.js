
function showTime() {
    var nowDate = new Date();
    document.getElementById("result").innerHTML = Date();
}
setInterval("showTime()", 1000);

// var nowYear = nowDate.getFullYear();
// var nowMonth = nowDate.getMonth();
// var nowDay = nowDate.getDate();
// var nowWeekDay = "";

function showTime2() {
    var nowDate = new Date(); 
    var nowYear = nowDate.getFullYear();
    var nowMonth = nowDate.getMonth();
    var nowDay = nowDate.getDate();
    var nowWeekDay = "";
    var nowHour = nowDate.getHours();
    var nowMinute = nowDate.getMinutes();
    var nowSecond = nowDate.getSeconds();
    switch(nowDate.getDay()) {
        case 0:
            nowWeekDay = "星期天";
            break;
        case 1:
            nowWeekDay = "星期一";
            break;
        case 2:
            nowWeekDay = "星期二";
            break;
        case 3:
            nowWeekDay = "星期三";
            break;
        case 4:
            nowWeekDay = "星期四";
            break;
        case 5:
            nowWeekDay = "星期五";
            break;
        case 6:
            nowWeekDay = "星期六";
            break;
    }
    nowMonth = checkTime(nowMonth);
    nowDay = checkTime(nowDay);
    nowMinute = checkTime(nowMinute);
    nowHour = checkTime(nowHour);
    nowSecond = checkTime(nowSecond);
    document.getElementById("result2").innerHTML = nowYear + "年" + nowMonth + "月" + nowDay + "日" + " " + nowWeekDay + " " + nowHour + ":" + nowMinute + ":" + nowSecond;
    
}



function style2() {
    
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;      
    }  
    return i;
}

setInterval("showTime2()", 1000);

//把每个功能都分开
var nowDate = new Date();
//获取年
function getNowYear() {
    return nowDate.getFullYear();
}
//获取月
function getNowMonth() {
    var nowMonth =  nowDate.getMonth();
    return checkTime3(nowMonth);
}
//获取日
function getNowDay() {
    var nowDay =  nowDate.getDate();
    return checkTime3(nowDay);
}
//获取时
function getNowHours() {
    var nowDate = new Date();
    var nowHour =  nowDate.getHours();
    return checkTime3(nowHour);
}
//获取分
function getNowMinutes() {
    var nowDate = new Date();
    var NowMinute =  nowDate.getMinutes();
    return checkTime3(NowMinute);
}
//获取秒
function getNowSeconds() {
    var nowDate = new Date();
    var nowSecond =  nowDate.getSeconds();
    return checkTime3(nowSecond);
}
//获取星期几
function getWeekDay() {
    var nowDate = new Date();
    var nowWeekDay = "";
    switch(nowDate.getDay()) {
        case 0:
            return "星期天";
            break;
        case 1:
            return "星期一";
            break;
        case 2:
            return "星期二";
            break;
        case 3:
            return "星期三";
            break;
        case 4:
            return "星期四";
            break;
        case 5:
            return "星期五";
            break;
        case 6:
            return "星期六";
            break;
    }
}

function checkTime3(i) {
    if (i < 10) {
        i = "0" + i;      
    }  
    return i;
}

function showTime3() {
    document.getElementById("result3").innerHTML = getNowYear() + "-" + getNowMonth() + "-" + getNowDay() + " " + getWeekDay() + " " + getNowHours() + ":" + getNowMinutes() + ":" + getNowSeconds();
}

setInterval("showTime3()", 1000);

//获取下拉列表的值
function selectVaule(id) {
    var selectedValue = document.getElementById(id);
    var optionValue = selectedValue.getElementsByTagName("option");
    for(var i in optionValue) {
        //console.log(optionValue[i].selected);
        if(optionValue[i].selected == true) {
            return checkTime4(optionValue[i].value)
        }
    }
    //console.log(selectedValue);
}

function checkTime4(i) {
    if (i < 10) {
        i = "0" + i;      
    }  
    return i;
}

//展示时间
var selectedNowTime = ""; //获取选择的时间
var diffTime = 0;
var diffDay = 0;
var diffHour = 0;
var diffMinute = 0;
var diffSecond = 0;
function showTime4() {
    selectedNowTime =  selectVaule("year-select") + "/" + selectVaule("month-select") + "/" + selectVaule("day-select") + " " + selectVaule("hour-select") + ":" + selectVaule("minute-select") + ":" + selectVaule("second-select");
    var nowDate = new Date();
    var selectedNowTime = new Date(selectedNowTime);
    if(nowDate.getTime() > selectedNowTime.getTime()) {
        diffTime = nowDate.getTime() - selectedNowTime.getTime();
        diffDay = Math.floor(diffTime / (24 * 3600 * 1000));
        var temp1 = diffTime % (24 * 3600 * 1000);
        diffHour = Math.floor(temp1 / (3600 * 1000));
        var temp2 = temp1 % (3600 * 1000);
        diffMinute = Math.floor(temp2 / (60 * 1000));
        var temp3 = temp2 % (60 * 1000);
        diffSecond = Math.floor(temp3 / 1000);
        document.getElementById("result-wrapper").innerHTML = "现在距离" + selectVaule("year-select") + "年" + selectVaule("month-select") + "月" + selectVaule("day-select") + "日" + " " + selectVaule("hour-select") + ":" + selectVaule("minute-select") + ":" + selectVaule("second-select") + " 已经过去 " + diffDay + "天" + diffHour + "小时" + diffMinute + "分" + diffSecond + "秒";
    } else if(nowDate.getTime() < selectedNowTime.getTime()) {
        diffTime = Math.abs(nowDate.getTime() - selectedNowTime.getTime());
        diffDay = Math.floor(diffTime / (24 * 3600 * 1000));
        var temp1 = diffTime % (24 * 3600 * 1000);
        diffHour = Math.floor(temp1 / (3600 * 1000));
        var temp2 = temp1 % (3600 * 1000);
        diffMinute = Math.floor(temp2 / (60 * 1000));
        var temp3 = temp2 % (60 * 1000);
        diffSecond = Math.floor(temp3 / 1000);
        document.getElementById("result-wrapper").innerHTML = "现在距离" + selectVaule("year-select") + "年" + selectVaule("month-select") + "月" + selectVaule("day-select") + "日" + " " + selectVaule("hour-select") + ":" + selectVaule("minute-select") + ":" + selectVaule("second-select") + " 还有 " + diffDay + "天" + diffHour + "小时" + diffMinute + "分" + diffSecond + "秒";
    }  
}

//setInterval("showTime4()", 1000);
