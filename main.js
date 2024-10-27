
  function moveToSubmit(event) {
    if (event.key === "Enter") {
      checkLogin(); // Gọi hàm checkLogin() khi nhấn Enter
    }
  }


function checkLogin() {
  var pass = document.getElementById('pass').value;

  // Ẩn các phần tử khác
  document.querySelector('.cloud-container').classList.add('hidden');
  document.querySelector('.login').classList.add('hidden');

  if (pass === '1') {
    // Hiển thị ảnh GIF 1
    document.getElementById('successGif1').style.display = 'block';
    
    // Chuyển trang sau 3 giây
    setTimeout(function() {
      window.location.href = 'https://www.facebook.com/quangvy.van.1';
    }, 3000);
  } else if (pass === '2') {
    // Hiển thị ảnh GIF 2
    document.getElementById('successGif2').style.display = 'block';
    
    // Chuyển trang sau 3 giây
    setTimeout(function() {
      window.location.href = 'https://www.youtube.com/'; // Đổi URL nếu cần
    }, 3000);
  } else {
    alert("Mật khẩu không đúng. Vui lòng thử lại!");
  }
}
  