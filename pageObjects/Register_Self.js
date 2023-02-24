class Register_Self {
	
	get firstName() { return$("//input[@id='customer.firstName']");}
	get lastName() { return$("//input[@id='customer.lastName']");}
	get address() { return$("//input[@id='customer.address.street']");}
	get city() { return$("//input[@id='customer.address.city']");}
	get state() { return$("//input[@id='customer.address.state']");}
	get zip() { return$("//input[@id='customer.address.zipCode']");}
	get phone() { return$("//input[@id='customer.phoneNumber']");}
	get ssn() { return$("//input[@id='customer.username']");}
	get uname() { return$("//input[@id='customer.password']");}
	get pswd() { return$("//input[@id='repeatedPassword']");}
	get cpswd() { return$("//input[@value='Register']");}
	 register(){ return$("//a[text()='Register']");}
	
	
}
export default Register_Self;
//module.exports  = new Register_Self();