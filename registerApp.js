function validator()
{  
    emailId = document.getElementById('email').value;
    password1 = document.getElementById('password1').value; 
    password2 = document.getElementById('password2').value;
    mobileNumber = document.getElementById('mobileNumber').value;

    // emailId Verification
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailCheck =!(emailId.match(mailformat)); 

    if(emailCheck)
    {
      document.getElementById("email-error").textContent="Invalid Email";
    }
    else
    {
      document.getElementById("email-error").textContent="";
    }

    //password Verification
    var hasNumber = /\d/;
    var numberCheck=hasNumber.test(password1);
  
    if(emailId.length==0)
    {
        document.getElementById("email-error").textContent="Email Required";
     
    }
    else
    {
        document.getElementById("email-error").textContent="";

    }

    if(password1.length==0)
    {
        document.getElementById("password1-error").textContent="Password Required";
        return false;
    }
    else
    {
        document.getElementById("password1-error").textContent="";

    }
    
    if(password1.length<5)
    {
        document.getElementById("password1-error").textContent="Minimum 5 Characters Required";
        return false;
    }
    else
    {
        document.getElementById("password1-error").textContent="";

    }

    
    if(!numberCheck)
    { 
     document.getElementById("password1-error").textContent="Invalid Password";
     return false;
    
    }
    else
    {
        document.getElementById("password1-error").textContent="";
        
    }

    if(!(password1==password2))
    {
        document.getElementById("password2-error").textContent="Password Not Matched";
        return false;
    }
    else
    {
        document.getElementById("password2-error").textContent="";
    }



    if(!(mobileNumber.length == 10))
    {
        document.getElementById("mobileNo-error").textContent="Invalid Mobile Number";
        
        if(emailCheck || !numberCheck || !(mobileNumber.length == 10) || emailId.length ==0)
            return false;
    }
    else{

        document.getElementById("mobileNo-error").textContent="";
    }

   
    
   
    var nums = /^[0-9]+$/;
    if(!(mobileNumber).match(nums))
    {
        document.getElementById("mobileNo-error").textContent="Invalid Mobile Number";
        
        if(emailCheck || !numberCheck || !(mobileNumber.length == 10) || !(mobileNumber).match(nums) || emailId.length ==0)
            return false;
        
    }
    else
    {
        document.getElementById("mobileNo-error").textContent="";

    }

    
    
 
    

    document.location.href = 'registerSuccessPage.html';

}