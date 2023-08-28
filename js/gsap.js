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
        markers:true,
        trigger: '.my-skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
  })