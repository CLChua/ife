var postfixList = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net'];



// inputDom的输入监听 = function() {
//     获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
//     控制email-sug-wrapper的显示/隐藏状态
// }

function getUserInput() {
    //拿到input输入框的输入内容trim后返回
    var inputContent = document.getElementById("email-input").value;
    inputContent = inputContent.trim();
    return inputContent;
    //console.log(inputContent);    
}

function liContent() {
    var userInput = getUserInput();
    var promptContent = [];
    for (var i in postfixList) {
        //把用户输入和每一个postfix进行结合成为每一个Li
        promptContent[i] = userInput + postfixList[i];
        //console.log(i);
    }
    //返回生成的提示内容
    return promptContent;
}

function showPromptContent() {
    //获取生成提示框中的提示内容
    //将内容添加到email-sug-wrapper中
    var ulList = document.getElementById("email-sug-wrapper");
    var liList = ulList.getElementsByTagName("li");
    // var nodeName = "";
    // var nodeContent = "";
    if (!ulList.hasChildNodes()) {
        for (var i in liContent()) {
            var nodeName = document.createElement("li");
            var nodeContent = document.createTextNode(liContent()[i]);
            nodeName.appendChild(nodeContent);
            ulList.appendChild(nodeName);
        }
    } else {
        for (var i in liContent()) {
            //console.log(liList[i].innerHTML);
            liList[i].innerHTML = liContent()[i];
        }
    }
    // for (var i in liContent()) {
    //     var nodeName = document.createElement("li");
    //     var nodeContent = document.createTextNode(liContent()[i]);
    //     nodeName.appendChild(nodeContent);
    //     ulList.appendChild(nodeName);
    // }
}

// function 控制email-sug-wrapper的显示/隐藏状态() {
//     if 用户输入为空 {
//         隐藏提示框
//     } else {
//         显示提示框
//     }
// }

// function 隐藏提示框() {
//     做具体隐藏提示框的操作
// }

// function 显示提示框() {
//     做具体显示提示框的操作
// }
