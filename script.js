document.addEventListener('DOMContentLoaded', () => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // let str = document.querySelector('#string');
    // str.addEventListener("mousemove", function(dets) {
    //     console.log(dets.y);
    //     path  = `M 10 100 Q ${dets.x} ${dets.y} 1190 80`
    //     gsap.to("svg path",{
    //         attr:{d:path},
    //         duration:0.5,
    //         ease:'ease-out'
    //     });
    // });
    // str.addEventListener("mouseleave", function(dets) {
    //     console.log(dets.y);
    //     path  = `M 10 100 Q 600 100 1190 80`
    //     gsap.to("svg path",{
    //         attr:{d:path},
    //         duration:0.5,
    //         ease:'elastic',
    //     });
    // });

    // Initialize GSAP timeline for text animations in #page1
    const tl = gsap.timeline();
    tl.from(".firstheading", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power1.out"
    }).from(".secondHeading", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power1.out"
    }, "-=0.5") // Start this animation half a second before the previous one ends
    .from(".thirdheading", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power1.out"
    }, "-=0.5");

    // GSAP animation for #page2 h1
    gsap.to("#page2 h1", {
        x: "-300%", // Move the element on the X-axis
        color: "white", // Change the text color to white
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            
            start: "top 0%",
            end: "top -200%",
            scrub: 6,
            pin: true,
        }
    });


  const tl2 = gsap.timeline({
      scrollTrigger: {
          trigger: "#page3 div",
          scroller: "body",
          start: "top 40%", // Adjust the start position
          end: "bottom 100%", // Adjust the end position
          scrub: true, // Smooth animation based on scroll position
          
          pin:true// Optional: Display markers for debugging
      
      }
  });

  // Add animations to the timeline for each element
  tl2.from("#page3 h2", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power1.out"
  })
  .from("#page3 h1", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power1.out"
  }) // Start the h1 animation 1.5 seconds before the h2 animation ends
  .from("#page3 h3", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power1.out"
  } ); // Start the h3 animation 1.5 seconds before the h1 animation ends
     
  
      // ScrollTrigger and GSAP for #Satoshis h1 animation
     


});



   


  



particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.40246529723245905,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 224.4776885211732,
        "color": "#ffffff",
        "opacity": 0.49705773886831206,
        "width": 1.2827296486924182
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 1122.388442605866,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
