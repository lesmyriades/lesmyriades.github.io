document.addEventListener('DOMContentLoaded', (event) => {
    const imageElement = document.getElementById('full-screen-image');
    const panzoom = Panzoom(imageElement, {
        maxScale: 10,
        minScale: 1,
        contain: 'outside',
        step: 0.1,
    });

    imageElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
});

