const resetButton = document.querySelector(".reset-button");
const ourForm = document.querySelector(".our-form");
const ourField0 = document.querySelector(".our-field-0");
const ourField1 = document.querySelector(".our-field-1");
const ourField2 = document.querySelector(".our-field-2");
const ourField3 = document.querySelector(".our-field-3");
const ourField4 = document.querySelector(".our-field-4");
const ourField5 = document.querySelector(".our-field-5");
const ourField6 = document.querySelector(".our-field-6");
const ourField7 = document.querySelector(".our-field-7");

let state = {
    state: 0,
    wrongAnswer: 0,
}
function updateProblem() {
    state.currentProblem0 = generateAdditionProblem();
    state.currentProblem1 = generateAdditionProblem();
    state.currentProblem2 = generateAdditionProblem();
    state.currentProblem3 = generateAdditionProblem();
    state.currentProblem4 = generateAdditionProblem();
    state.currentProblem5 = generateAdditionProblem();
    state.currentProblem6 = generateAdditionProblem();
    state.currentProblem7 = generateAdditionProblem();
    var numberArray = [
                        state.currentProblem0,
                        state.currentProblem1,
                        state.currentProblem2,
                        state.currentProblem3,
                        state.currentProblem4,
                        state.currentProblem5,
                        state.currentProblem6,
                        state.currentProblem7,
                    ]
    
    $('.problem').each(function(i) {
        $(this).html(`
                <h1 >${numberArray[i].numberOne}</h1>
                <div class="numberandoperator">
                <h2>${numberArray[i].operator}</h2>  
                <h1>${numberArray[i].numberTwo}</h1>
                
                
            `);
    });


    ourField0.value = "";
    ourField1.value = "";
    ourField2.value = "";
    ourField3.value = "";
    ourField4.value = "";
    ourField5.value = "";
    ourField6.value = "";
    ourField7.value = "";
    // ourField.focus();
}
updateProblem();

function generateNumbers(max) {
    var number = Math.floor(Math.random() * (max + 1));
    if (number < 10) {
        number = '0' + number;
    } else {
        number = number;
    }
    return number;
}

function generateAdditionProblem() {
    return {
        numberOne: generateNumbers(100),
        numberTwo: generateNumbers(100),
        operator: '+',
    }
}


$('#answer0').click(function (e) {
    e.preventDefault()
  
    let correctAnswer;
    const p = state.currentProblem0;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField0.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});
const myModal = document.getElementById('congratsModal');

$('#answer1').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem1;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;
    console.log(correctAnswer);

    if (parseInt(ourField1.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
       
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});
$('#answer2').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem2;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField2.value, 10) === correctAnswer) {
        state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        state.wrongAnswers++
        $('#o-button').click();
    }
});
$('#answer3').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem3;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField3.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});
$('#answer4').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem4;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField4.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});
$('#answer5').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem5;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField5.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});
$('#answer6').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem6;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField6.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});
$('#answer7').click(function (e) {
    e.preventDefault()
    // alert("hello");
    let correctAnswer;
    const p = state.currentProblem7;
    console.log(p);
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;


    if (parseInt(ourField7.value, 10) === correctAnswer) {
        // state.score++
        // updateProblem()
        $('#c-button').click();
    } else {
        // state.wrongAnswers++
        $('#o-button').click();
    }
});

resetButton.addEventListener("click", resetGame);
function resetGame() {
    updateProblem()
    state.score = 0
    state.wrongAnswers = 0
}



