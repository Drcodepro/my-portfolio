
// Mouse move cursor animation
let crcr = document.querySelector('#cursor');
let crcrBlur =document.querySelector('#cursor-blur');
document.addEventListener('mousemove',(cursorPoint)=>{
   crcrBlur.style.left = cursorPoint.x -100 + "px";  // -150 so our circle moves with the cursor 
   crcrBlur.style.top = cursorPoint.y -100 + "px";
   crcr.style.left = cursorPoint.x +"px";
   crcr.style.top = cursorPoint.y +"px";
})



// script for the toggle the nav bar
document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementById('menu');
  var navbar = document.querySelector('.navbar');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  });

  window.addEventListener('scroll', function () {
    menuButton.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
  });
});


const myImage = document.getElementById('my_image');
const header = document.getElementById('Header');
const about_info = document.querySelector(".about_info_container .my_info")
const skill_container = document.querySelector(".skill_container .my_Skills");

// my poster image animation when the page loads 

window.onload = function() {
    setTimeout(()=>{
        myImage.classList.add('rotate'); // Add the 'rotate' class on page load
        showProjects();
    },500)
};
myImage.classList.remove('rotate');




// *********  about Page animation  *********

const aboutPage = document.querySelector(".aboutPage");
const infoContainer = document.querySelector(".about_info_container");

const aboutObserver = new IntersectionObserver(
  (entries,aboutObserver)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
  infoContainer.classList.add("my_info_anime");
}
else infoContainer.classList.remove("my_info_anime");
});
},{threshold:0.1}
);
aboutObserver.observe(aboutPage);





///********** animation project page  *********

  // Target the content container
  const contentContainer = document.querySelector(".All_project_container");
  const contentAnimat = document.querySelector(".projectPage");

  // Create a new Intersection Observer
  const projectObserver = new IntersectionObserver(
    (entries, projectObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          contentContainer.classList.add("content-visible");
          // Stop observing once the animation has been triggered
          // observer.unobserve(entry.target);
        } else {
          // Remove the class when the content is not in view
          contentContainer.classList.remove("content-visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  // Observe the content container
  projectObserver.observe(contentAnimat);



  
//***********  educaation animationn    **********

  const educationPage = document.querySelector(".educationPage");
  const educationContainer = document.querySelector(".education_container");

  const EducationObserver = new IntersectionObserver(
    (entries, EducationObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          educationContainer.classList.add("education-animate");
        } else {
          // Remove the class when the content is not in view
          educationContainer.classList.remove("education-animate");
        }

      });
    },
    { threshold: 0.1 }
  );
  // Observe the content container
  EducationObserver.observe(educationPage);




  // ***********   skills page animation **********


  const skillPage = document.querySelector(".skillsPage");
  const skillsContainer = document.querySelector(".my_Skills");

  const skillObserver = new IntersectionObserver(
    (entries, skillObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          skillsContainer.classList.add("my_skills_anim");
        } else {
          // Remove the class when the content is not in view
          skillsContainer.classList.remove("my_skills_anim");
        }

      });
    },
    { threshold: 0.1 }
  );
  // Observe the content container
  skillObserver.observe(skillPage);








     // scroll event on window  for changing the background color of nav bar

  const previousScrollY = 20; // initial value of scroll 0
  window.addEventListener('scroll', function() { 
    const currentScrollY =  Math.round(window.scrollY); // when user scroll then scroll value
    // Scrolling up (user back to top)
    if (previousScrollY > currentScrollY) {
      header.classList.remove('scrolled');
    } else { // Scrolling down
      header.classList.add('scrolled');
    }
  // animation for the poster image
    if(currentScrollY>=0 && currentScrollY<370){
      myImage.classList.add('rotate');
    }
    else{
      myImage.classList.remove('rotate');
    }
    });

    


    const All_Projects=[
      {
        "name": "Mini music player",
        "desc": "Play songs with diffirent category & genres.",
        "image": "./project_photos/musicPlayer.png",
        "links": {
          "view": "https://dr-music-player.netlify.app/",
          "code": "https://github.com/Drcodepro/Mini-MusicPlayer"
        }
      },
      {
        "name": "Expense Tracker App",
        "desc": "Shows expenses based on year and month.",
        "image": "./project_photos/expenseTrackerss.png",
        "links": {
          "view": "https://expense-tracker-my-mini.netlify.app/",
          "code": "https://github.com/Drcodepro/Expenses_tracker"
        }
      },
      {
        "name": "Currency-Swift",
        "desc": "Compare a currency of different nations.",
        "image": "./project_photos/currencyConvertSS.png",
        "links": {
          "view": "https://mycurrencyswift.netlify.app/",
          "code": "https://github.com/Drcodepro/currencyConvertor"
        }
      },
      {
        "name": "noughts-and-crosse Game",
        "desc": "Re-call your childhood memories with this game..",
        "image": "./project_photos/crose&cicleSS.png",
        "links": {
          "view": "https://noughts-and-crosse.netlify.app/",
          "code": "https://github.com/Drcodepro/Noughts-Crosses_Game"
        }
      },
      {
        "name": "Guess The Number Game",
        "desc": "Dynamic number Guess game with beautifull uI.",
        "image": "./project_photos/guessNumberSS.png",
        "links": {
          "view": "https://guess-random-number-10.netlify.app/",
          "code": "https://github.com/Drcodepro/Guess_Number_Game"
        }
      },
      {
        "name": "rock-paper-scissors Game",
        "desc": "This game allows you to play game with Robot.",
        "image": "./project_photos/rockPaperSS.png",
        "links": {
          "view": "https://rock-paper-scissors-98.netlify.app/",
          "code": "https://github.com/Drcodepro/Stone_Paper_scissore_GAME"
        }
      }
    ]


      let projectsContainer = document.querySelector(".All_project_container");
      let projectsHTML = "";
    function showProjects(){

      All_Projects.forEach(project => {
          projectsHTML += `
          <div class="project_box">
          <img draggable="false" src="${project.image}" alt="project" />

          <div class="content">
            <div class="project_tag">
              <h3>${project.name}</h3>
            </div>

            <div class="description">
              <p>${project.desc}</p>
            </div>
            <div class="btns">
                <a href="${project.links.view}" class="btn"
                  ><i class="fas fa-eye"></i> View</a
                >
                <a href="${project.links.code}" class="btn"
                  >Code <i class="fas fa-code"></i
                ></a>
              </div>
          </div>
        </div>`
      });
      projectsContainer.innerHTML = projectsHTML;
    }
  
  



  

  


  
