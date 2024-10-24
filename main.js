function moveToPassword(event) {
if (event.key === "Enter") {
  document.getElementById("ngaySinhBe").focus();
}
}
  
function moveToSubmit(event) {
if (event.key === "Enter") {
  document.getElementById("submitBtn").click();
}
}


function checkLogin() 
{
    var pass = document.getElementById('pass').value;
  
    
    if (pass === '1') 
    {
      window.location.href = 'https://www.facebook.com/quangvy.van.1';
    }
}
  