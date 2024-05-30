document.addEventListener('DOMContentLoaded', (event) => {
    // Script pour zoomer et déplacer l'image en plein écran
    const imageElement = document.querySelector('.full-screen-image img');
    const panzoom = Panzoom(imageElement, {
        maxScale: 10,
        minScale: 1,
        contain: 'outside',
        step: 0.1,
    });

    imageElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
    

const randomTextContainer = document.getElementById('randomTextContainer');

function generateRandomText() {
    const words = ["root", "root", "roots", "rooted", "uprooted", "unrooted", "rooting", "radix", "radices", "wurtz", "racine", "raciner", "enraciner"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

function addRandomText() {
    const randomText = generateRandomText();
    const textNode = document.createTextNode(randomText + " ");
    randomTextContainer.appendChild(textNode);
}

setInterval(addRandomText, 1000); // Change 1000 to the desired interval in milliseconds


