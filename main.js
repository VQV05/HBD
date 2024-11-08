function checkLogin() {
  const pass = document.getElementById('pass').value;

  if (pass === 'tramnamhanhphuc') {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Chào mừng Kay.....",
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout(() => {
      document.querySelector('.login').classList.add('hidden');
      document.querySelector('.loading-container').style.display = 'flex';
      document.getElementById('successGif1').style.display = 'block';

      setTimeout(() => {
        window.location.href = 'https://vqv05.github.io/finished-effect-2';
      }, 6000);
    }, 1500); // Đợi 1.5 giây trước khi hiện GIF và thanh loading
  } else if (pass === 'chucdaulsomcobo') {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Chào mừng Dâu.....",
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout(() => {
      document.querySelector('.login').classList.add('hidden');
      document.querySelector('.loading-container').style.display = 'flex';
      document.getElementById('successGif2').style.display = 'block';

      setTimeout(() => {
        window.location.href = 'https://vqv05.github.io/finished/';
      }, 6000);
    }, 1500); // Đợi 1.5 giây trước khi hiện GIF và thanh loading
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Opps!',
      text: 'Mật khẩu bạn vừa nhập không đúng! Vui lòng nhập lại.',
      timer: 1500,
      showConfirmButton: false
    });
  }
}
