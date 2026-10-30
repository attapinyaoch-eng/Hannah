
const button = document.getElementById("surpriseButton");
const cake = document.getElementById("cake");
const music = document.getElementById("birthdayMusic");
const message = document.getElementById("message");

button.addEventListener("click", async function () {
    // Restart the cake animation
    cake.classList.remove("drop");
    message.classList.remove("show");

    void cake.offsetWidth;

    cake.classList.add("drop");
    message.classList.add("show");

    // Start the music after the user's click
    music.currentTime = 0;

    try {
        await music.play();
    } catch (error) {
        console.log("Could not play music:", error);
    }

    button.textContent = "Happy birthday pookie 😉";
});
