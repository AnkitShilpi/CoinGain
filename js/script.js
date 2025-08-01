const menuIcon=document.getElementById("menu-icon"),navMenu=document.getElementById("nav-menu");menuIcon.addEventListener("click",()=>{navMenu.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{navMenu.classList.remove("active")})});let currentIndex=0;const slides=document.querySelectorAll(".slide"),slider=document.getElementById("slider");function showSlide(e){currentIndex=(e+slides.length)%slides.length,slider.style.transform=`translateX(-${100*currentIndex}%)`}function nextSlide(){showSlide(currentIndex+1)}function prevSlide(){showSlide(currentIndex-1)}setInterval(()=>{nextSlide()},5e3);
    let current = 0;
    const testimonials = document.querySelectorAll(".testimonial");

    function showTestimonial(index) {
      testimonials.forEach((t, i) => {
        t.classList.toggle("active", i === index);
      });
    }

    function changeTestimonial(direction) {
      current += direction;
      if (current < 0) current = testimonials.length - 1;
      if (current >= testimonials.length) current = 0;
      showTestimonial(current);
    }