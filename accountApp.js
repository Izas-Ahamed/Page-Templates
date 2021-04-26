var url_string = window.location;
console.log(url_string)
var url = new URL(url_string);
var email = url.searchParams.get("email");
document.getElementById("center-info").textContent=`Welcome ${email}!`;