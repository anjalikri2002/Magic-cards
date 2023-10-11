document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "card"
    const cards = document.querySelectorAll(".card");
  
    // Add event listeners to each card
    cards.forEach((card) => {
      // Get the audio element within the card
      const audio = card.querySelector("audio");
  
      // Add a hover event listener to the card
      card.addEventListener("mouseenter", function () {
        // Play the audio when the mouse enters the card
        audio.play();
      });
  
      // Add a mouseout event listener to the card
      card.addEventListener("mouseleave", function () {
        // Pause and reset the audio when the mouse leaves the card
        audio.pause();
        audio.currentTime = 0;
      });
    });
  });
  

  
  