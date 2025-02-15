function myMenuFunction(){
    var menuBth = document.getElementById("MyNavMenu");

    if(menuBth.className === "nav-menu"){
        menuBth.className += " responsive ";

    }else{
        menuBth.className = "nav-menu";
    }
}

// Dart mode 

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
}
);


// Typing effect

var typingEffect = new Typed(".tepedText",{
    Strings: ["Developer","Freelancer", "Coder"],
    loop: true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000, 


})


//Scroll Animation

const sr = scrollReveal({
  origin: "top",
  distance: "80",
  duration: 2000,
  reset: true,
});

sr.reveal(" .featured-name", {delay:100});
sr. reveal(" .text-info", {delay:200});
sr. reveal(" .text-btn", {delay:200});
sr. reveal(" .social_icons", {delay:200});
sr. reveal(" .featured_image", {delay:320});

sr.reveal(" .project-box", {interval:200});
sr.reveal(" .top-header", {});

const srLeft = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,


})

srLeft.reveal(" .about-info",{delay:100});
srLeft.reveal(" .contac-info",{delay:100});

const srRight = scrollReveal({
    origin: "Right",
    distance: "80px",
    duration: 2000,
    reset: true,


})

srRight.reveal(" .about-info",{delay:100});
srRight.reveal(" .contac-info",{delay:100});

// active link

const sections = document.querySelectorAll(".sectio[id]");
function  scrollActive(){
    const scrollY=window.scrollY;
    sections.foreach((currect)=>{
        const sectionHeight = current.offsetHeight,
        SectionTop  = current.offsetHeight - 50,
        SectionId = current.getAttribute(id);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document
            .querySelector(".nav-menu a[href*=" + sectionID + "]")
            .classList.add("active-link");

        }else{
            document
            .querySelector(".nav-menu a[href*=" + sectionID + "]")
            .classList.remove("active-link");

        }

    }
);
}

window.addEventListener("scroll",scrollActive);