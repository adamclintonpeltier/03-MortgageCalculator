//button 
function calculator(){

//variables for input fields
	var loanBalance = $("#loanBalance").val() ;
	var interestRate = $("#interestRate").val() ;
	var loanTerm = $("#loanTerm").val() ;
	var period = $("#period option:selected").val() ;

	var numberOfPayments = loanTerm * period;
	var monthlyInterestRate = (interestRate/100)/period;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate)/(compoundedInterestRate-1);
	
	monthlyPayment = Math.round((loanBalance * interestQuotient) * 100)/100;
	$("#monthlyPayment").html(" Your Monthly Payment is $" + monthlyPayment);

}