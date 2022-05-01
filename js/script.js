var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });

document.getElementById('sweetalert').addEventListener('click', function(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank for clicking me!',
    showConfirmButton: false,
    timer: 1500
  })
})

document.getElementById('signup1').addEventListener('click', function(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank for clicking me!',
    showConfirmButton: false,
    timer: 1500
  })
})

document.getElementById('signup2').addEventListener('click', function(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank for clicking me!',
    showConfirmButton: false,
    timer: 1500
  })
})

document.getElementById('signup3').addEventListener('click', function(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank for clicking me!',
    showConfirmButton: false,
    timer: 1500
  })
})

document.getElementById('signup4').addEventListener('click', function(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank for clicking me!',
    showConfirmButton: false,
    timer: 1500
  })
})


