var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15],
    correctAnswer: 2
}, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 18],
    correctAnswer: 3
}, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134],
    correctAnswer: 0
}, {
    question: "What is 1*7?",
    choices: [4, 5, 7, 8],
    correctAnswer: 2
}, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 64],
    correctAnswer: 3
}];
var answers = [];
var sum = 0;
var index = 0;

document.getElementById("output").innerHTML = document.getElementById("start").innerHTML;



function display() {
    var q = document.getElementById("ques");
    q.innerHTML = questions[index].question;
    var a1 = document.getElementById("ans1");
    a1.innerHTML = questions[index].choices[0];
    var a2 = document.getElementById("ans2");
    a2.innerHTML = questions[index].choices[1];
    var a3 = document.getElementById("ans3");
    a3.innerHTML = questions[index].choices[2];
    var a4 = document.getElementById("ans4");
    a4.innerHTML = questions[index].choices[3];
    if (index == questions.length - 1) {
        document.getElementById("next").style.display = "none";
    }
}

display();

function isOneChecked() {
    // All <input> tags...
    var chx = document.getElementsByTagName('input');
    for (var i = 0; i < chx.length; i++) {
        // If you have more than one radio group, also check the name attribute
        // for the one you want as in && chx[i].name == 'choose'
        // Return true from the function on first match of a checked item
        if (chx[i].type == 'radio' && chx[i].checked) {
            answers.push(i);
            //document.write(answers[0]);
            return true;
        }
    }
    // End of the loop, return false
    answers.push(4);
    return false;
}

function beginquiz() {
    document.getElementById("output").innerHTML = document.getElementById("container").innerHTML;
    document.getElementById("output").style.textAlign = "left";
    document.getElementById("btn").innerHTML = document.getElementById("control").innerHTML;
    document.getElementById("btn").style.visibility = "visible";
}

function nxt() {
    isOneChecked();
    var ele = document.getElementsByName("ans");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
    index += 1;
    display();
}

function sbmt() {
    isOneChecked();
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] == questions[i].correctAnswer) {
            sum += 4;
        }
    }
    document.getElementById("heading").innerHTML = "Your Score is";
    document.getElementById("result").innerHTML = sum;
    document.getElementById("output").innerHTML = document.getElementById("scorecard").innerHTML;
    document.getElementById("btn").innerHTML = document.getElementById("restart").innerHTML;
}

function beginagain() {
    document.getElementById("heading").innerHTML = "JavaScript Quiz";
    document.getElementById("output").innerHTML = document.getElementById("start").innerHTML;
    document.getElementById("output").style.textAlign = "center";
    document.getElementById("btn").style.visibility = "hidden";
}