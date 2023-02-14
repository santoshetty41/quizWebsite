let quizQuestion = [
    {
        'question': " What does HTML stand for?",
        'a': "Hiper Text Markup Language",
        'b': "Hyper Text Manipulating Language",
        'c': "Hyper Text Markup Language",
        'd': "Hyper Text Marketing Language",
        'writeAns': "c"
    },
    {
        'question': " What does CSS stand for?",
        'a': "Cascading Style Sheet",
        'b': "Coscading Style Sheets",
        'c': "Cascadding Style Sheets",
        'd': "Cascading Style Sheets",
        'writeAns': "d"
    },
    {
        'question': " What does JS stand for?",
        'a': "Java Script",
        'b': "Java Scripting",
        'c': "Java Styling",
        'd': "None of these",
        'writeAns': "a"
    },
    {
        'question': " Number of primitive data types in Java are?",
        'a': "6",
        'b': "7",
        'c': "8",
        'd': "9",
        'writeAns': "c"
    },
    {
        'question': " What is the size of float and double in java?",
        'a': "32 and 64",
        'b': "32 and 32",
        'c': "64 and 64",
        'd': "64 and 32",
        'writeAns': "a"
    },
    {
        'question': " When an array is passed to a method, what does the method receive?",
        'a': "A copy of the array",
        'b': "The refrerence of the array",
        'c': "Length of the array",
        'd': "Copy of first element",
        'writeAns': "b"
    },
    {
        'question': " Select the valid statement.",
        'a': "char[] ch = new char(5)",
        'b': "char[] ch = new char[]",
        'c': "char[] ch = new char[5]",
        'd': "char[] ch = new char()",
        'writeAns': "c"
    },
    {
        'question': " Identify the corrected definition of a package.",
        'a': "A package is a collection of editing tool",
        'b': "A package is a collection of classes",
        'c': "A package is a collection of interfaces",
        'd': "A package is a collection of classes and interfaces",
        'writeAns': "d"
    },
    {
        'question': " Identify the keyword among the following that makes a variable belong to a class, rather than being defined for each instance of the class.",
        'a': "static",
        'b': "final",
        'c': "volatile",
        'd': "abstract",
        'writeAns': "a"
    },
    {
        'question': "  compareTo() returns",
        'a': "True",
        'b': "False",
        'c': "An int value",
        'd': "None",
        'writeAns': "c"
    }

]

let question = document.getElementById("question");
let btn = document.getElementById("btn");

let options = document.querySelectorAll(".options");

let length = quizQuestion.length;
let index = 0;
let right = 0;
let wronge = 0;

function loadQuestion() {

    resetOption();
    const data = quizQuestion[index];
    if (quizQuestion.length == index) {
        endQuiz();
    }
    else {
        question.innerText = `${index + 1}.${data.question}`;
        options[0].nextElementSibling.innerText = data.a;
        options[1].nextElementSibling.innerText = data.b;
        options[2].nextElementSibling.innerText = data.c;
        options[3].nextElementSibling.innerText = data.d;

    }
}
function resetOption() {
    options.forEach((input) => {
        input.checked = false;
        console.log(input.checked);

    })
}

function getAns() {
    var ans = '';
    options.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    })
    return ans;

}

function endQuiz() {
    document.getElementsByClassName("box")[0].innerHTML = `
    <div style="text-align:center"> 

    <h1>Congratulation you complete the Quiz Game. </h1>

    <h2 style="margin:10px 0px"> 
    You choose  ${right} right answer out of ${length}
    </h2>
    </div>
    `
}



btn.addEventListener("click", function () {

    let ans = getAns();

    const data = quizQuestion[index];

    if (ans == data.writeAns) {
        right++;
    }
    else {
        wronge++;
    }

    index++;
    loadQuestion();
})


loadQuestion();