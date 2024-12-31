fetch('poems.json')
  .then(response => response.json())
  .then(poems => {
    // Render poems dynamically
  });


  // Example: Fetch media files dynamically from Firebase
const galleryContainer = document.querySelector('.gallery-container');

const mediaFiles = [
    { type: 'image', url: 'https://via.placeholder.com/300' },
    { type: 'gif', url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' },
    { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
];

mediaFiles.forEach(media => {
    const mediaItem = document.createElement('div');
    mediaItem.className = 'media-item';

    if (media.type === 'image' || media.type === 'gif') {
        mediaItem.innerHTML = `
            <img src="${media.url}" alt="Media">
            <button class="download-btn" onclick="downloadContent('${media.url}')">📥</button>
        `;
    } else if (media.type === 'video') {
        mediaItem.innerHTML = `
            <video loop autoplay muted>
                <source src="${media.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <button class="download-btn" onclick="downloadContent('${media.url}')">📥</button>
        `;
    }

    galleryContainer.appendChild(mediaItem);
});

// JavaScript function to open download in a new tab
function downloadContent(url) {
  window.open(url, '_blank');
}
