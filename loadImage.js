function loadImageFromLocalhost() {
    const img = document.createElement('img');
    img.src = 'http://localhost:9000/image.png';
    img.alt = 'Fetched Image';
    document.getElementById('image-container').appendChild(img);
}
