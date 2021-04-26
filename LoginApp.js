function validator()
{
    var password ="nonumber";
    var email="noemail"
    emailId = document.getElementById('email').value;
    password = document.getElementById('password').value; 
    
    // emailId Verification
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailCheck =!(emailId.match(mailformat)); 
    if(emailCheck)
    {
      document.getElementById("email-error").textContent="Invalid Email";
    }
    else{
        document.getElementById("email-error").textContent="";
    }

    if(password.length==0)
    {
        document.getElementById("password-error").textContent="Password Required";
         return false;
    } 
    else{
        document.getElementById("password-error").textContent="";

    }
    if(password.length<5)
    {
        document.getElementById("password-error").textContent="Invalid Password";
         return false;
    } 
    else{
        document.getElementById("password-error").textContent="";

    }

    //password Verification
    var hasNumber = /\d/;
    var numberCheck=hasNumber.test(password);
    if(!numberCheck)
    { 
     document.getElementById("password-error").textContent="Invalid Password";
     if(emailCheck || !numberCheck)
        return false;
    }
    else
    {
        document.getElementById("password-error").textContent="";
        if(emailCheck || !numberCheck)
        return false;
    }

    document.location.href = `accountPage.html?email=${emailId}`;

}