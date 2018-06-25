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
        console.log(arr3[0][1]);
        function compareByer() { //原谅取的这个名字
            for (i in arr3) {
                if (i < arr3.length - 1) {
                    if (arr3[i][1] < arr3[i + 1][1]) {
                        return -1;
                    } else if (arr3[i][1] > arr3[i + 1][1]) {
                        return 1;
                    } else if (arr3[i][1] = arr3[i + 1][1]) {
                        return 0;
                    } 
                } else {
                    if (arr3[i][1] < arr3[i - 1][1]) {
                        return -1;
                    } else if (arr3[i][1] > arr3[i - 1][1]) {
                        return 1;
                    } else if (arr3[i][1] = arr3[i - 1][1]) {
                        return 0;
                    }
                }
            }
        }
        console.log(arr3.sort(compareByer));