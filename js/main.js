// Get references to your modal and modal elements
const modal = document.getElementById('modal-review');
const modalTitulo = modal.querySelector('h3');
const modalParagrafo = modal.querySelectorAll('p');
const modalImg = modal.querySelector('img');

// Assuming you have 24 image IDs like "img-1", "img-2", ...
for (let i = 1; i <= 24; i++) {
    const image = document.getElementById(`img-${i}`);

    image.addEventListener('click', () => {
    modalTitulo.textContent = 'Title for Image ' + i;
    
    const paragraphsContent = [
        'First paragraph for Image ' + i,
        'Second paragraph for Image ' + i,
        'Third paragraph for Image ' + i,
    ];

    for (let j = 0; j < paragraphsContent.length; j++) {
            aphs[j].textContent = paragraphsContent[j];
        }

        // Update the image source
        modalImg.src = `./img/film-${i}.jpg`;

        // Show the modal
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    });
}
