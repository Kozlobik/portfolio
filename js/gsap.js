gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({})
  
  tlStart.from('.info',{
    x:-400,
    duration:2,
    opacity:0,
    ease:"back.out(1.5)",
    
  })

  gsap.from('.skill-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.my-skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
  })

  gsap.from('.card-project',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.my-works',
        start: 'top 40%',
        end:'60% 70%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
  })

  function paralax() {
    const preview = document.querySelector('.preview');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
      const mouseX = event.clientX - initialX;
      const mouseY = event.clientY - initialY;

      gsap.to(
        '.bgtxt', 
        {
        x: mouseX * 0.01, 
        y: -mouseY * 0.01, 
        ease: 'power2.out' ,
        },);

      gsap.to(
        '.avatar__shadow--second', 
        {
        x: -mouseX * 0.0125, 
        y: mouseY * 0.0125, 
        ease: 'power2.out' ,
        },);

      gsap.to(
        '.avatar__shadow--first', 
        {
        x: mouseX * 0.015, 
        y: -mouseY * 0.015, 
        ease: 'power2.out' ,
        },);

        gsap.to(
          '.avatar__shadow--third', 
          {
          x: -mouseX * 0.02, 
          y: -mouseY * 0.02, 
          ease: 'power2.out' ,
          },);

      gsap.to(
        '.avatar__img', 
        {
        x: -mouseX * 0.0175, 
        y: mouseY * 0.0175, 
        ease: 'power2.out' ,
        },);
    }) 

  }

  paralax()
