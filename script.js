function calculateLone() {
  loanAmount = document.getElementById("loan_amount").value;

  interestRate = document.getElementById("interest_rate").value;

  month_to_pay = document.getElementById("months_to_pay").value;

  interest = (loanAmount * (interestRate * 0.01)) / month_to_pay;

  monthlyPayment = (loanAmount / month_to_pay + interest).toFixed(3);

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment : ${monthlyPayment}`;
}
