const problemElement1 = $(".problem1");
const problemElement2 = $(".problem2");
const problemElement3 = $(".problem3");
const problemElement4 = $(".problem4");
const problemElement5 = $(".problem5");
const resetButton = document.querySelector(".reset-button");
const ourForm = document.querySelector(".our-form");
const ourField = document.querySelector(".our-field");

let state = {
    state:0,
    wrongAnswer:0,
}
function updateProblem(){
    state.currentProblem1 = generateAdditionProblem1();
    state.currentProblem2 = generateAdditionProblem2();
    state.currentProblem3 = generateAdditionProblem3();
    state.currentProblem4 = generateAdditionProblem4();
    state.currentProblem5 = generateAdditionProblem5();
    problemElement1.html(`
    <h1 >${state.currentProblem1.numberOne}</h1>
    <div class="numberandoperator">
    <h2>${state.currentProblem1.operator}</h2>  
    <h1>${state.currentProblem1.numberTwo}</h1>
    </div>
    `);
    problemElement2.html(`
    <h1>${state.currentProblem2.numberOne}</h1>
    <div class="numberandoperator">
        <h2>${state.currentProblem2.operator}</h2>  
        <h1>${state.currentProblem2.numberTwo}</h1>
    </div>
    `);
    problemElement3.html(`
    <h1>${state.currentProblem3.numberOne}</h1>
    <div class="numberandoperator">
        <h2>${state.currentProblem3.operator}</h2>  
        <h1>${state.currentProblem3.numberTwo}</h1>
    </div>
    `);
    problemElement4.html(`
    <h1>${state.currentProblem4.numberOne}</h1>
    <div class="numberandoperator">
        <h2>${state.currentProblem4.operator}</h2>  
        <h1>${state.currentProblem4.numberTwo}</h1>
    </div>
    `);
    problemElement5.html(`
    <h1>${state.currentProblem5.numberOne}</h1>
    <div class="numberandoperator">
        <h2>${state.currentProblem5.operator}</h2>  
        <h1>${state.currentProblem5.numberTwo}</h1>
    </div>
    `);
    
    ourField.value = "";
    // ourField.focus();
}
updateProblem();

function generateNumbers1(max){
    return Math.floor(Math.random()*(max + 1));
}
function generateNumbers2(max){
    return Math.floor(Math.random()*(max + 1));
}
function generateNumbers3(max){
    return Math.floor(Math.random()*(max + 1));
}
function generateNumbers4(max){
    return Math.floor(Math.random()*(max + 1));
}
function generateNumbers5(max){
    return Math.floor(Math.random()*(max + 1));
}
function generateAdditionProblem1(){
    return {
        numberOne: generateNumbers1(100),
        numberTwo: generateNumbers1(100),
        operator:'+',
    }
}
function generateAdditionProblem2(){
    return {
        numberOne: generateNumbers2(100),
        numberTwo: generateNumbers2(100),
        operator:'+',
    }
}
function generateAdditionProblem3(){
    return {
        numberOne: generateNumbers3(100),
        numberTwo: generateNumbers3(100),
        operator:'+',
    }
}
function generateAdditionProblem4(){
    return {
        numberOne: generateNumbers4(100),
        numberTwo: generateNumbers4(100),
        operator:'+',
    }
}
function generateAdditionProblem5(){
    return {
        numberOne: generateNumbers5(100),
        numberTwo: generateNumbers5(100),
        operator:'+',
    }
}

$('#answer').click(function(e){
    e.preventDefault()
    // alert("hello");
  let correctAnswer;
  const p = state.currentProblem1;
  if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;
  

  if (parseInt(ourField.value, 10) === correctAnswer) {
    state.score++
    updateProblem()
    alert("Hurray! its the right answer");
  } else {
    state.wrongAnswers++
    alert("Oops! its the wrong answer, Try Again");
  }
});


resetButton.addEventListener("click", resetGame);
function resetGame() {
    updateProblem()
    state.score = 0
    state.wrongAnswers = 0
  }


console.log(generateAdditionProblem1());

