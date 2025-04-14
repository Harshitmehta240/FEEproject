// Function to trigger birthday magic
function triggerBirthdayMagic() {
    // Change text color randomly
    const birthdayText = document.querySelector('.happy-birthday');
    const colors = ['#ff3366', '#ff6699', '#ff9933', '#66ccff', '#ffcc00'];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    birthdayText.style.color = newColor;

    // Trigger confetti effect
    triggerConfetti();
}

// Function to trigger confetti animation
function triggerConfetti() {
    const container = document.querySelector('.confetti-container');
    const numConfetti = 100;

    // Generate confetti pieces
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Randomize the size, color, and position of each confetti piece
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Automatically trigger confetti on page load
document.addEventListener('DOMContentLoaded', triggerConfetti);
