function initializeGallery() {
    console.log("Page loaded. Initializing gallery.");
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach((figure, index) => {
        figure.setAttribute('tabindex', '0');
        console.log(`Added tabindex to figure ${index + 1}`);
    });
}

function upDate(element) {
    const img = element.querySelector('img');
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${img.src})`;
    imageDiv.textContent = img.alt;
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'none';
    imageDiv.textContent = 'Hover over an image below to display here.';
}
