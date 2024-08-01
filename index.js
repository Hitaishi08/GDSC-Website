let text1 = document.getElementsByClassName('hero-heading')[0];
let text2 = document.getElementsByClassName('hero-heading2')[0];
let para = document.getElementsByClassName("tagline")[0];
let btn =  document.getElementsByClassName("join-btn")[0];
const maxOffset = 450;
window.addEventListener('scroll', () => {
    const value = window.scrollY; // Use scrollY instead of screenY
    const parallaxFactor = 1.5; // Adjust parallax factor as needed
  
    const offset1 = Math.min(value * parallaxFactor, maxOffset);
  const offset2 = Math.min(value * parallaxFactor, maxOffset);
  const offset3 = Math.min(value * parallaxFactor, maxOffset);

  text1.style.transform = `translateY(${offset1}px)`;
  text2.style.transform = `translateY(${offset2}px)`;
  para.style.transform = `translateY(${offset3}px)`;
  btn.style.transform = `translateY(${offset3}px)`;
  });

let next = document.getElementsByClassName('next')[0];
let prev = document.getElementsByClassName('prev')[0];

next.addEventListener('click',()=>{
    let event = document.querySelectorAll('.event')
    document.querySelector('.card-container').appendChild(event[0])
})

let home = document.getElementById('home');
let about = document.getElementById('about');
let event = document.getElementById('event');
let team = document.getElementById('team');

home.addEventListener('click',()=>{
  let main = document.getElementsByClassName('hero-section')[0];
  main.scrollIntoView({ 
    behavior: 'smooth' 
});
})
about.addEventListener('click',()=>{
  let section1 = document.getElementsByClassName('section-2')[0];
  section1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

event.addEventListener('click',()=>{
  let section4 = document.getElementsByClassName('section4')[0];
  section4.scrollIntoView({ 
    behavior: 'smooth' 
});
})

team.addEventListener('click',()=>{
  let section5 = document.getElementsByClassName('section5')[0];
  section5.scrollIntoView({ 
    behavior: 'smooth' 
});
})

let bar = document.getElementById('bars');
let click = false;
bar.addEventListener('click',()=>{
  console.log('clicked');
  let nav = document.getElementsByClassName('navigation')[0];
  if(click == false){
  nav.style.display = "block";
  click  = true;
  }
  else{
    nav.style.display = "none";
  click  = false;
  }
})