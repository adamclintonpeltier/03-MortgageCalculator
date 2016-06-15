

// Defining button. 

function calculator() {

	//values taken from the input fields.

	var loanBalance = $("#loanBalance").val();
	var interestRate = $("#interestRate").val();
	var loanTerm = $("#loanTerm").val();
	var period = $("#period option:selected").val();

	// Equations for processing results.

	var numberOfPayments = loanTerm * period;
	var monthlyInterestRate = (interestRate / 100) / period;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

	// Results: Your total monthly payment.	

	monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;
	$("#monthlyPayment").html(" Your Monthly Payment is $" + monthlyPayment);

}

// Initialed By: RN, MTS, AP.