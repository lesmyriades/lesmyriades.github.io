const randomTextContainer = document.getElementById('randomTextContainer');

function generateRandomText() {
    const words = ["root","roots","rooted"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

function addRandomText() {
    const randomText = generateRandomText();
    const textNode = document.createTextNode(randomText + " ");
    randomTextContainer.appendChild(textNode);
}

setInterval(addRandomText, 1000); // Change 1000 to the desired interval in milliseconds

// Initialisation du lecteur audio
document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');

    if (audio) {
        // Ajouter des contrôles pour la lecture et la pause
        document.getElementById('pause-button').addEventListener('click', () => {
            audio.pause();
        });

        document.getElementById('play-button').addEventListener('click', () => {
            audio.play();
        });
    } else {
        console.error("Element #background-audio not found.");
    }
});
