var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.tranding-slide');
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const target = this.getAttribute('data-popup-target');
            if (target) {
                const popupContent = document.createElement('div');
                popupContent.innerHTML = document.querySelector(target).innerHTML;
                popupContent.classList.add('overlay', 'active');
                document.body.appendChild(popupContent);
            }
        });
    });

    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('close') || event.target.classList.contains('overlay')) {
            const popup = document.querySelector('.overlay.active');
            if (popup) {
                popup.remove();
            }
        }
    });
});


function toggleMute(button) {
  const audio = button.parentElement.querySelector('audio');
  if (audio.muted) {
      audio.muted = false;
      button.textContent = 'Mute';
  } else {
      audio.muted = true;
      button.textContent = 'Unmute';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
      const audio = popup.querySelector('audio');
      audio.volume = 0.5; // Здесь вы можете установить громкость аудио по умолчанию
      popup.addEventListener('click', function(event) {
          if (event.target.classList.contains('close') || !event.target.closest('.content')) {
              this.closest('.overlay').classList.remove('active');
              audio.pause();
          }
      });
  });
});
