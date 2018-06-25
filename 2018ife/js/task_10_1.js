//任务五
        //实现如阅读材料中，队列的相关入队、出队、获取队头、判空的操作
        //队头对应数组中最后一个元素
        //入队和出队操作后，需要在 id 为 queue-cont 的 p 标签中更新显示队列中的内容，队头在最右侧，中间用 -> 连接
        var queue = ["apple", "pear"];
        var queueCont = document.getElementById("queue-cont");
        var queueInput = document.getElementById("queue-input");

        function button1() {
            queue.push(queueInput.value);
            queueCont.innerHTML = "队列内容：" + queue.join("->");
        }
        
        function button2() {
            queue.pop();
            queueCont.innerHTML = "队列内容：" + queue.join("->");
        }

        function button3() {
            queueCont.innerHTML = "队头内容：" + queue[queue.length - 1];
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
        