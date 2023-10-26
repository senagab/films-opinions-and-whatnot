const menu = document.getElementById("menu");
const signInButton = document.getElementById("sign-in-btn");
const signInModal = document.getElementById("sign-in-modal");

signInButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Smoothly fade out the menu by changing its opacity
    // menu.style.transition = "opacity 0.5s";
    menu.style.opacity = 0;

    // Prevent clicks on the hidden menu
    menu.style.pointerEvents = "none";

    // Show the sign-in modal
    signInModal.style.display = "block";

    // Optionally, you can fade in the sign-in modal as well
    // signInModal.style.transition = "opacity 0.5s";
    signInModal.style.opacity = 1;
});
