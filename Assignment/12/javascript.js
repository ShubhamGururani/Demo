function validate(){  
	var email=document.loginform.email.value;  
	var password=document.loginform.password.value;  

	if (email==null || email==""){  
		alert("email can't be blank");  
		return false;  
	}
	if(password.length<6){  
		alert("Password must be at least 6 characters long.");  
		return false;  
	}
}  