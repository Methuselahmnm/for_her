// Function to handle proposal message and audio
function propose() {
    const messageElement = document.getElementById("proposalMessage");
    const audioElement = document.getElementById("loveAudio");

    // Set the proposal message content
    messageElement.textContent = "I Love You, Mercy 💖 No Amount Of Words Can Express How I Feel For You. Will You Make Me The Happiest Man On Earth And Be My Girlfriend?";

    // Add fade-in effect class
    messageElement.classList.add("fade-in");

    // Play the audio
    audioElement.play();
}

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("background-slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
