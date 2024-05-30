
    // Script pour ajouter du texte aléatoire à intervalles réguliers
    

const randomTextContainer = document.getElementById('randomTextContainer');

function generateRandomText() {
    const words = ["root", "roots", "rooted"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

function addRandomText() {
    const randomText = generateRandomText();
    const textNode = document.createTextNode(randomText + " ");
    randomTextContainer.appendChild(textNode);
}

setInterval(addRandomText, 1000); // Change 1000 to the desired interval in milliseconds

