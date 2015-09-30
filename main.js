var result = function (x, y) {
  return x + y;
};



var numberOneInput = document.querySelector('#num_one');
var numberTwoInput = document.querySelector('#num_two');
var calcBtn = document.querySelector ('#calculateBtn');
var answerSlot = document.querySelector ('#answer');

calBtn.addEventListener('click', function() {

 var numOne = Number(numOneInput.value);
 var numTwo = Number(numberTwoInput.value);
 
 var theAnswer = numOne + numTwo ; 

  answerSlot.textContent = theAnswer;
});





 







