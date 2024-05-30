document.addEventListener('DOMContentLoaded', (event) => {
    // Script pour zoomer et déplacer l'image en plein écran
    const images = document.querySelectorAll('.full-screen-image img');
    images.forEach((imageElement) => {
        const panzoom = Panzoom(imageElement, {
            maxScale: 10,
            minScale: 1,
            contain: 'outside',
            step: 0.1,
        });
        imageElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
    });

    // Script pour ajouter du texte aléatoire à intervalles réguliers
    const randomTextContainer = document.getElementById('randomTextContainer');
    
    if (randomTextContainer) {
        function generateRandomText() {
            const words = ["roots", "root", "rooted"];
            const randomWord = words[Math.floor(Math.random() * words.length)];
            return randomWord;
        }

        function addRandomText() {
            const randomText = generateRandomText();
            const textNode = document.createTextNode(randomText + " ");
            randomTextContainer.appendChild(textNode);
        }

        setInterval(addRandomText, 1000); // Change 1000 to the desired interval in milliseconds
    } else {
        console.error("Element #randomTextContainer not found.");
    }
});
