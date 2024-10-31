function submitOnEnter(event) {
  if (event.key === "Enter") {
    checkLogin(); // Gọi hàm checkLogin() khi nhấn Enter
  }
}

function checkLogin() {
  var pass = document.getElementById('pass').value;

  if (pass === '1') {
    document.querySelector('.login').classList.add('hidden');
    document.querySelector('.loading-container').style.display = 'flex';
    document.getElementById('successGif1').style.display = 'block';

    setTimeout(function() {
      window.location.href = 'https://www.facebook.com/quangvy.van.1';
    }, 6000);
  } else if (pass === '2') {
    document.querySelector('.login').classList.add('hidden');
    document.querySelector('.loading-container').style.display = 'flex';
    document.getElementById('successGif2').style.display = 'block';

    setTimeout(function() {
      window.location.href = 'https://www.youtube.com/';
    }, 6000);
  } else {
    alert("Mật khẩu không đúng. Vui lòng thử lại!");
  }
}
