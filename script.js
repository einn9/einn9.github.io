document.querySelectorAll(".button").forEach(function(button) {
    button.addEventListener("mouseenter", function(event) {

        event.preventDefault(); // Prevent the default behavior
        document.getElementById("water-sound").play(); // Play the sound
    });

    button.addEventListener("mouseleave", function(event) {
        let audio = document.getElementById("water-sound"); // Get the audio element
        audio.pause(); // Stop the sound
        audio.currentTime = 0; // Reset the sound to the beginning
    });
});
