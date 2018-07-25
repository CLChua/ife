
function showTime() {
    var nowDate = new Date();
    document.getElementById("result").innerHTML = Date();
}
//setInterval("showTime()", 1000);

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

//setInterval("showTime2()", 1000);

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

//setInterval("showTime3()", 1000);

//获取下拉列表的值
function selectVaule(id) {
    var selectedValue = document.getElementById(id);
    var optionValue = selectedValue.getElementsByTagName("option");
    for(var i in optionValue) {
        console.log(optionValue[i].selected);
        if(optionValue[i].selected == true) {
            return optionValue[i].value;
        }
    }
    console.log(selectedValue);
}

//展示时间
function showTime4() {
    document.getElementById("result-wrapper").innerHTML = "现在距离" + selectVaule("year-select") + "年" + selectVaule("month-select") + "月";
}

setInterval("showTime4()", 1000);

selectVaule("year-select");