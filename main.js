var result = function (x, y) {
  return x + y;
};



var a = document.querySelector('#num_one');
var b = document.querySelector('#num_two');


var num1, num2, sum

var work = function () {
  num1 = Number(a.value);
  num2 = Number(b.value); 
  sum = result(num1, num2);
  answer.textContent = sum;
}



calculateBtn.addEventListener ('click', work);


 







