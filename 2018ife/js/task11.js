
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