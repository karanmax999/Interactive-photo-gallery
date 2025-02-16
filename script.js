// Sample image data with categories
const images = [
    { src: 'https://th.bing.com/th/id/OIP.5SjKih2sQZ_ysAcRIOzJhgHaEo?rs=1&pid=ImgDetMain', category: 'nature' },
    { src: 'https://th.bing.com/th/id/R.f9d1cf0fbc8e415ecfe7ec3b1b41ecc7?rik=uiYzbBGKjdYhNA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2f3%2fc%2f155483.jpg&ehk=XHY8OzRZJ%2fIkNyoWR938Mq3TDTb%2fqKs9gHGZAkUINew%3d&risl=&pid=ImgRaw&r=0/city1.jpg', category: 'city' },
    { src: 'https://th.bing.com/th/id/OIP.KOKMz6W9YOxWVY76n5807gHaJP?w=132&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', category: 'people' },
    { src: 'https://wallpaperaccess.com/full/2432640.jpg', category: 'nature' },
    { src: 'https://wallpaperaccess.com/full/895.jpg', category: 'city' },
    { src: 'https://th.bing.com/th/id/OIP.YjVegzligoKHGYWiqpS6XgHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7', category: 'people' },
    { src: 'https://th.bing.com/th/id/R.57e0bc5babb92cc094bcc5d646db342b?rik=sMHICn3QJXE2%2fg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-HD-Cool-Nature-Background-Pictures.jpg&ehk=bUtFziBPpKHdmJLuZ9CUKHj37%2bW5ubjx5tz17NUkFPc%3d&risl=&pid=ImgRaw&r=0', category: 'nature' },
    { src: 'https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg', category: 'city' },
    { src: 'karanprofessional.jpg', category: 'people' }
];

// Get DOM elements
const gallery = document.querySelector('.gallery');
const filterSelect = document.getElementById('filter');
const sortSelect = document.getElementById('sort');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Function to display images
function displayImages(imagesToShow) {
    gallery.innerHTML = imagesToShow.map(img => `
        <div class="gallery-item">
            <img src="${img.src}" alt="${img.category}" data-category="${img.category}">
        </div>
    `).join('');
}

// Initial display of all images
displayImages(images);

// Filter functionality
filterSelect.addEventListener('change', () => {
    const selectedCategory = filterSelect.value;
    const filteredImages = selectedCategory === 'all' 
        ? images 
        : images.filter(img => img.category === selectedCategory);
    displayImages(filteredImages);
});

// Sort functionality
sortSelect.addEventListener('change', () => {
    const sortValue = sortSelect.value;
    let sortedImages = [...images];
    
    if (sortValue === 'asc') {
        sortedImages.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortValue === 'desc') {
        sortedImages.sort((a, b) => b.category.localeCompare(a.category));
    }
    
    displayImages(sortedImages);
});

// Lightbox functionality
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightbox.style.display = 'block';
        lightboxImg.src = e.target.src;
    }
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
