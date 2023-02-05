const testimonial = [
    {
        name: "Tirrell I.",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        text: "Apple is worth much more than I paid. I STRONGLY recommend Apple to EVERYONE interested in running a successful online business! No matter where you go, Apple is the coolest, most happening thing around!"
    },
    {
        name: "Jack F.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        text: "I would also like to say thank you to all your staff. I would also like to say thank you to all your staff. I like Apple more and more each day because it makes my life a lot easier."
    },
    {
        name: "Bela B.",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I just can't get enough of Apple. I want to get a T-Shirt with Apple on it so I can show it off to everyone. Your company is truly upstanding and is behind its product 100%. If you want real marketing that works and effective implementation - Apple's got you covered. I would be lost without Apple"
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 4000);
}