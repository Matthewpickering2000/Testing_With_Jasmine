window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const principalInput=document.getElementById('loan-amount');
  const yearsInput=document.getElementById('loan-years');
  const rateInput=document.getElementById('loan-rate');
  const values={amount:35000,years:15, rate:6.8};
  principalInput.value=values.amount;
  yearsInput.value=values.years;
  rateInput.value=values.rate;
update()
}
// Get the current values from the UI
// Update the monthly payment
function update() {
const currentUIValues=getCurrentUIValues();
updateMonthly(calculateMonthlyPayment(currentUIValues));
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i= (values.rate/100)/12;
  const n=Math.floor(values.years*12);
  return (
    (i*values.amount)/(1-Math.pow((1+i),-n))).toFixed(2);
}
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText=`$${monthly}`;
}
