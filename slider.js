// // Carousel setup
// async function fetchNBAImages() {
//     const store = sessionStorage.getItem('nbaImages');
//     if (store) {
//       return JSON.parse(store);
//     }
  
//     const playerImages = [
//       'https://www.willistonian.org/wp-content/uploads/2023/11/16921371407671.jpg',
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YvWcvQx3XQmmbROCq8JhyILHiFZZd6oyVQ&s',
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8enHSTrdxx5ru8r55SnsvOqNW-TJI6H5dUw&s',
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkakNQF_OrifrdoB9yyrTVzP1WcWxnKRIWog&s',
//     ];
  
//     sessionStorage.setItem('nbaImages', JSON.stringify(playerImages));
//     return playerImages;
//   }
  
//   async function setupCarousel() {
//     const images = await fetchNBAImages();
//     const carousel = document.getElementById('nbaImages');
  
//       images.forEach(image => {
//         const imgElement = document.createElement('img');
//         imgElement.src = image;
//         imgElement.alt = 'NBA Player';
//         imgElement.style.width = '100%';
//         carousel.appendChild(imgElement);
//       });
  
//       simpleslider.getSlider();
// // }


// images.forEach(image => {
//     const frame = document.createElement('div');
//     frame.className = 'simple-slider-frame';
    
//     const imgElement = document.createElement('img');
//     imgElement.src = image;
//     imgElement.alt = 'NBA Player';
    
//     frame.appendChild(imgElement);
//     carousel.appendChild(frame);
//   });

// // // setupCarousel();
//     window.onload = () => {
//     setupCarousel();
// }

  
// simpleslider.getSlider({
//     container: carousel,
//     delay: 3
//   });
// }



// Fetch NBA images
async function fetchNBAImages() {
    try {
      const store = sessionStorage.getItem('nbaImages');
      if (store) {
        return JSON.parse(store);
      }
  
      const playerImages = [
        'https://www.willistonian.org/wp-content/uploads/2023/11/16921371407671.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YvWcvQx3XQmmbROCq8JhyILHiFZZd6oyVQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8enHSTrdxx5ru8r55SnsvOqNW-TJI6H5dUw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkakNQF_OrifrdoB9yyrTVzP1WcWxnKRIWog&s',
      ];
  
      sessionStorage.setItem('nbaImages', JSON.stringify(playerImages));
      return playerImages;
    } catch (error) {
      console.error('Error fetching NBA images:', error);
      return [];
    }
  }
  
  async function setupCarousel() {
    const images = await fetchNBAImages();
    const carousel = document.getElementById('nbaImages');
  
    // Clear any existing content
    carousel.innerHTML = '';
  
    // Add images to the carousel
    images.forEach((image) => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = 'NBA Player';
      carousel.appendChild(imgElement);
    });
  
    // Initialize the slider with the correct container
    if (images.length > 0) {
      simpleslider.getSlider({
        container: carousel,
        delay: 3
      });
    }
  }
  