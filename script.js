// Get the button element
const fullscreenButton = document.getElementById('fullscreenButton');

// Add an event listener for the button click
fullscreenButton.addEventListener('click', function () {
    if (!document.fullscreenElement) {
        // Request fullscreen mode
        document.documentElement.requestFullscreen()
            .catch(err => console.log(`Error attempting to enable full-screen mode: ${err.message}`));
    } else {
        // Exit fullscreen mode
        document.exitFullscreen()
            .catch(err => console.log(`Error attempting to exit full-screen mode: ${err.message}`));
    }
});
