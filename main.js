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


function checkLogin() {
    var tenBe = document.getElementById('tenBe').value;
    var ngaySinhBe = document.getElementById('ngaySinhBe').value;
  
    // Kiểm tra thông tin đăng nhập (thay thế điều kiện này bằng thông tin thực của bạn)
    if (tenBe === 'ngocthao' && ngaySinhBe === '09012005') {
      // Chuyển hướng đến trang Google.com khi đăng nhập đúng
      window.location.href = 'https://tientranba.github.io/02012024/';
    } else {
      alert('Có phải bồ tui khong đó???');
    }
  }