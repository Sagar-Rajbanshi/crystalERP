// selecting the first element with the class given 
const q_s = (element)=>document.querySelector(element);
// selecting the all element with the class given 
const q_s_a = (element)=>document.querySelectorAll(element);

// changing color using "active" class for nav links in header section 
{
    function color(element){
        let store = document.querySelectorAll("nav>ul>li>a");
        for(let i = 0; i < store.length; i++){
            if(store[i].classList.contains("active")){
                store[i].classList.remove("active");
            }
        }
        element.classList.add("active");
    }
}


// navbar toggle button to show or hide navbar
{
let store = document.querySelectorAll(".toggle-icon");
let nav_bar = document.querySelector(".nav-bar");
    function opens(element){
        element.style.display = "none";
        store[1].style.display = "block";
        nav_bar.style.display = "block";
    }
    function closes(element){
        element.style.display = "none";
        store[0].style.display = "block";
        nav_bar.style.display = "none";
    }
}

// navbar drop on click event
{
    function drop(element){
        element.nextElementSibling.classList.toggle("d-none");
    }
    function BachMas(element){
        let store = document.getElementsByClassName("js-display-none");
        for(let i = 0; i < store.length; i++){
            store[i].classList.add("d-none");
        }
        element.nextElementSibling.classList.toggle("d-none");
        document.querySelector("nav>ul").scrollBy(400,0);


    }
    // close the dropdown if the user clicks outside of it 
    window.onclick = (e)=>{        
        if(!e.target.matches('.p')){
            let store = document.getElementsByClassName("window-show-hide");
            for(let i = 0; i < store.length; i++){
                if(!store[i].classList.contains("d-none")){
                    store[i].classList.add("d-none");
                }
            }
        }
        if(!e.target.matches('.q')){            
            let store = document.getElementsByClassName("window2-show-hide");
            for(let i = 0; i < store.length; i++){
                if(!store[i].classList.contains("d-none")){
                    store[i].classList.add("d-none");
                }
            }
        }
        if(!e.target.matches('.a')){            
            let store = document.getElementsByClassName("window3-show-hide");
            for(let i = 0; i < store.length; i++){
                if(!store[i].classList.contains("d-none")){
                    store[i].classList.add("d-none");
                }
            }
        }
        if(!e.target.matches('.e')){            
            let store = document.getElementsByClassName("window4-show-hide");
            for(let i = 0; i < store.length; i++){
                if(!store[i].classList.contains("d-none")){
                    store[i].classList.add("d-none");
                }
            }
        }
    }
}

// slider section 
{
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activess", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activess";
    }
}



// slider section 
{
    let slideIndex2 = 1;
    showSlides(slideIndex2);

    function testimonial(n) {
    showSlides(slideIndex2 += n);
    }
    function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".testimonial-img-cont>section");
    if (n > slides.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("d-none");  
    }
    slides[slideIndex2-1].classList.remove("d-none");  
    }    
}

// slide down button 
{
    function down(element){
    element.parentElement.nextElementSibling.scrollIntoView();
    }
}

// slider section array content
{

    let store = document.querySelectorAll(".mySlides>main>section:nth-child(2)>p");
    const slider_content = [];
    slider_content.push("C, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam beatae labore, nulla ut accusamus minus vero officia quod, magnam dignissimos asperiores sunt mollitia deleniti totam possimus eos omnis cupiditate et similique rem velit tempore at? Quam odio omnis mollitia commodi perspiciatis temporibus, omnis.");
    slider_content.push("DSA, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam beatae labore, nulla ut accusamus minus vero officia quod, magnam dignissimos asperiores sunt mollitia deleniti totam possimus eos omnis cupiditate et similique rem velit tempore at? Quam odio omnis mollitia commodi perspiciatis temporibus, omnis.");
    slider_content.push("Networking, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam beatae labore, nulla ut accusamus minus vero officia quod, magnam dignissimos asperiores sunt mollitia deleniti totam possimus eos omnis cupiditate et similique rem velit tempore at? Quam odio omnis mollitia commodi perspiciatis temporibus, omnis.");
    slider_content.push("PHP, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam beatae labore, nulla ut accusamus minus vero officia quod, magnam dignissimos asperiores sunt mollitia deleniti totam possimus eos omnis cupiditate et similique rem velit tempore at? Quam odio omnis mollitia commodi perspiciatis temporibus, omnis.");
    slider_content.push("CCNA, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam beatae labore, nulla ut accusamus minus vero officia quod, magnam dignissimos asperiores sunt mollitia deleniti totam possimus eos omnis cupiditate et similique rem velit tempore at? Quam odio omnis mollitia commodi perspiciatis temporibus, omnis.");
    for (let i = 0; i < store.length; i++) {
        store[i].innerHTML = slider_content[i];
    }
}

{
    q_s("title").innerHTML = `Nepal Collage Of Management`;
}
// content for about us section
{
    let store = q_s_a(".aboutus-box>div:nth-child(2)>div:nth-child(2)>p");
    let text = [];
    text.push(`sanam ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit molestias necessitatibus at est exercitationem. Lorem ipsum dolor sit amet.`);
    text.push(`sagar ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit molestias necessitatibus at est exercitationem. Lorem ipsum dolor sit amet.`);
    text.push(`tiger ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit molestias necessitatibus at est exercitationem. Lorem ipsum dolor sit amet.`);
    text.push(`lion ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit molestias necessitatibus at est exercitationem. Lorem ipsum dolor sit amet.`);
    for (let i = 0; i < store.length; i++) {
        store[i].innerHTML = text[i];
    }
}