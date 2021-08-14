var bill = 0;
var tipPercent = 0;
var numOfPeople = 1;

function calculate() {
  var tipPerPerson = ((bill * tipPercent)/numOfPeople).toFixed(2);
  var totalPerPerson = ((bill * (1 + tipPercent))/numOfPeople).toFixed(2);
  $(".tip-amount").text("$" + tipPerPerson);
  $(".total-amount").text("$" + totalPerPerson);
}

function resetTipSelection() {
  $(".percent-selector").removeClass("bg-strong-cyan");
}

$(".bill-input").on("input", function() {
  bill = Number($(".bill-input").val());
  calculate();
})

$(".percent-selector").click(function() {
  var userSelection = "." + this.classList[1];
  tipPercent = Number(this.classList[1].slice(0,2))/100;
  resetTipSelection();
  $(".custom-percent-input").val("");
  $(userSelection).addClass("bg-strong-cyan");
  calculate();
})

$(".custom-percent-input").focus(function() {
  resetTipSelection();
})

$(".custom-percent-input").on('input', function() {
  tipPercent = Number($(".custom-percent-input").val())/100;
  calculate();
})

$(".num-of-people-input").on('input', function() {
  numOfPeople = Number($(".num-of-people-input").val())
  if (numOfPeople === 0) {
    $(".error-message-zero-num-of-people").show();
    $(".num-of-people-input").addClass("num-of-people-error");
    $(".num-of-people-input").addClass("border-error-red");
  } else {
    $(".error-message-zero-num-of-people").hide();
    $(".num-of-people-input").removeClass("num-of-people-error");
    $(".num-of-people-input").removeClass("border-error-red");
    calculate();
  }
})

$(".reset-selector").click(function() {
  bill = 0;
  tipPercent = 0;
  numOfPeople = 1;
  calculate();
  resetTipSelection();
  $(".bill-input").val("");
  $(".custom-percent-input").val("");
  $(".num-of-people-input").val("");
  $(".error-message-zero-num-of-people").hide();
  $(".num-of-people-input").removeClass("num-of-people-error");
  $(".num-of-people-input").removeClass("border-error-red");
})
