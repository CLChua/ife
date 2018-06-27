//任务五
//实现如阅读材料中，队列的相关入队、出队、获取队头、判空的操作
//队头对应数组中第一个元素
//入队和出队操作后，需要在 id 为 queue-cont 的 p 标签中更新显示队列中的内容，队头在最左侧，中间用 <- 连接（练习使用数组的join方法）
var queue = ["apple", "pear"];
var queueCont = document.getElementById("queue-cont");
var queueInput = document.getElementById("queue-input");

function button1() {
    queue.unshift(queueInput.value);
    console.log(queue);
    queueCont.innerHTML = "队列内容：" + queue.join("<-");
}

function button2() {
    queue.shift();
    queueCont.innerHTML = "队列内容：" + queue.join("<-");
}

function button3() {
    queueCont.innerHTML = "队头内容：" + queue[0];
}

function button4() {
    if (queue.length == 0) {
        queueCont.innerHTML = "数组内容为空";
    } else {
        queueCont.innerHTML = "数组内容不为空";
    }
}
        // window.onload = function () {
        //     document.getElementById("container3").onclick = function (event) {
        //     console.log("f");
        //     var e = event;
        //     var onclickTarget = e.target;
        //     if (onclickTarget.nodeName.toLowerCase() == "button") {
        //         var btnList = document.querySelectorAll("button");
        //         var btnIndex = Array.prototype.indexOf.call(btnList, onclickTarget);
        //         console.log(btnIndex);
        //         switch(btnIndex) {
        //             case 20:
        //             queue.push(queueInput.value);
        //             console.log(queue.join("->"));
        //             break;
        //         }
        //     }
        // }
        // }

        //排序任务
        //由小到大
        function compareByGreater(a, b) {
            return a - b;
        }

        //由大到小
        function compareByLess(a, b) {
            return b - a;
        }
        
        var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
        console.log(arr1.sort(compareByGreater));
        console.log(arr1.sort(compareByLess));

        var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
        console.log(arr2.sort());
        console.log(arr2.sort().reverse());

        //将二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出
        var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
        function compareByer(a, b) { //原谅取的这个名字
            if (a[1] < b[1]) {
                return 1;
            } else if(a[1] > b[1]) {
                return -1;
            } else {
                return 0;
            }
        }
        console.log(arr3.sort(compareByer));

        //将数组分别按元素对象的value值从小到大进行排序后输出
        var arr4 = [
            {
                id: 1,
                name: 'candy',
                value: 40
            }, {
                id: 2,
                name: 'Simon',
                value: 50
            }, {
                id: 3,
                name: 'Tony',
                value: 45
            }, {
                id: 4,
                name: 'Annie',
                value: 60
            }
        ];

        console.log(arr4.sort(function(a, b) {
            if(a.value < b.value) {
                return -1;
            } else if(a.value > b.value) {
                return 1;
            } else {
                return 0;
            }
        }));

        //对象转数组
        var scoreObject = {
            "Tony": {
                "Math": 95,
                "English": 79,
                "Music": 68
            }, 
            "Simon": {
                "Math": 100,
                "English": 95,
                "Music": 98
            }, 
            "Annie": {
                "Math": 54,
                "English": 65,
                "Music": 88
            }
        }
        console.log(scoreObject.Tony.Math);

        var scoreArr = new Array();
        function otoa() {
            for(i in scoreObject) {
                console.log(i);
                scoreArr[i] = scoreObject[i];
            }
            console.log(scoreArr);
        }
        otoa();

        //转化为二维数组
        
        function otoa2(obj) {
            var scoreArr2 = new Array();
            var score = new Array();
            var arr;
            for(i in obj) {
                score = obj[i];
                arr = [i];
                scoreArr2.push(arr);
                for(j in score) {
                    arr.push(score[j]);
                }
            }
            console.log(scoreArr2);
        }
        otoa2(scoreObject);
        