const roles = ["Front End Developer", "Graphic Designer"];
let currentRoleIndex = 0;
const typingSpeed = 150;
const delayBetweenSwitches = 2000;

// Image switching variables
let currentImageIndices = []; // Array to store current image indices for each project card
const imageSwitchInterval = 5000; // Interval in milliseconds to switch images

// Function to switch images for a specific project card
function switchImages(projectCardIndex) {
    const projectImages = document.querySelectorAll(`.project-card:nth-of-type(${projectCardIndex + 1}) .project-images img`);
    projectImages.forEach((img, index) => {
        if (index === currentImageIndices[projectCardIndex]) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
}

// Function to handle typing animation
function typeWriter(text, index, callback) {
    if (index < text.length) {
        document.getElementById("role").textContent += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(text, index, callback), typingSpeed);
    } else {
        setTimeout(callback, delayBetweenSwitches);
    }
}

// Function to handle deleting text
function deleteText(text, callback) {
    let index = text.length;
    function erase() {
        if (index >= 0) {
            document.getElementById("role").textContent = text.substring(0, index);
            index--;
            setTimeout(erase, typingSpeed / 2);
        } else {
            callback();
        }
    }
    erase();
}

// Function to start animation
function startAnimation() {
    const roleElement = document.getElementById("role");
    roleElement.textContent = "";
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    typeWriter(roles[currentRoleIndex], 0, () => {
        deleteText(roles[currentRoleIndex], startAnimation);
    });

    // Initialize current image indices for each project card
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
        currentImageIndices[index] = 0; // Start each project card's image index at 0
        switchImages(index); // Initial switch
    });
}

document.addEventListener("DOMContentLoaded", startAnimation);

// Event listeners for image navigation buttons
document.querySelectorAll(".project-card .prev").forEach((button, index) => {
    button.addEventListener("click", () => {
        const projectImages = document.querySelectorAll(`.project-card:nth-of-type(${index + 1}) .project-images img`);
        currentImageIndices[index] = (currentImageIndices[index] - 1 + projectImages.length) % projectImages.length;
        switchImages(index);
    });
});

document.querySelectorAll(".project-card .next").forEach((button, index) => {
    button.addEventListener("click", () => {
        const projectImages = document.querySelectorAll(`.project-card:nth-of-type(${index + 1}) .project-images img`);
        currentImageIndices[index] = (currentImageIndices[index] + 1) % projectImages.length;
        switchImages(index);
    });
});
