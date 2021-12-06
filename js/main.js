// Picture carousel
var container3 = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("testimonial");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display ="none";
  }
  container3++;
  if (container3 > slides.length) {container3 = 1}
    slides[container3 - 1].style.display = "block";
    setTimeout(SlideShow, 3000); //pics change in every 3 seconds
}

// const back = document.querySelector('.back');

// back.addEventListener('click', backButton);


// function backButton(e) {
//   alert(123)
//   let backward = 0;

//   var slides = document.getElementsByClassName("testimonial");
//   for(let i = 0; i <= slides.length; i++) {
//     backward++;
//   }

//   e.preventDefault();
// }
  
  // Sticky menu background
  window.addEventListener('scroll', moveDown);
  
  function moveDown() {
    if (window.scrollY > 150) {
      document.querySelector('.navbar').style.opacity = 0.8;
    } else {
      document.querySelector('.navbar').style.opacity = 1;
    }
  }


  
  // Smooth Scrolling
  $('.navbar a, .btn-1').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
      
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 120
        },
       600
      );
    }
  });


//   // Form Validation
//   document.getElementById('name').addEventListener('blur', validateName);
// email = document.querySelector('#email');
// message = document.querySelector('#message');

// email.addEventListener('blur', validateEmail);
// message.addEventListener('blur', validateMessage);

// function validateName() {
//   const name = document.getElementById('name');
//   const re = /^[a-zA-Z]{2,10}$/;

//   if(!re.test(name.value)){
//     name.classList.add('is-invalid');
//   } else {
//     name.classList.remove('is-invalid');
//   }
// }

// function validateEmail() {
// const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// if(!re.test(email.value)) {
// email.classList.add('is-invalid');
// } else {
// email.classList.remove('is-invalid');
// }
// }
