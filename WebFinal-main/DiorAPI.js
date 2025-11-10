document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'JV4mOEMWfksBmwaxtfTc36gtwUh3NLkMaKryoiv3KfEWOvjbGJPYzhNm';

    fetch('https://api.pexels.com/v1/search?query=dior+sauvage&per_page=1', {
      headers: { Authorization: API_KEY }
    })
    .then(res => res.json())
    .then(data => {
      if(data.photos && data.photos.length > 0){
        const photo = data.photos[0];

        const slidesContainer = document.querySelector('.slides');
        const thumbsContainer = document.querySelector('.thumbnails');

        const newSlideId = `slide${slidesContainer.children.length + 1}`;
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'slide';
        input.id = newSlideId;
        slidesContainer.parentNode.insertBefore(input, slidesContainer.nextSibling);

        const img = document.createElement('img');
        img.src = photo.src.large;
        img.className = newSlideId;
        img.alt = photo.photographer;
        slidesContainer.appendChild(img);

        const label = document.createElement('label');
        label.htmlFor = newSlideId;
        label.className = `thumb${slidesContainer.children.length}`;
        const thumbImg = document.createElement('img');
        thumbImg.src = photo.src.tiny;
        thumbImg.alt = photo.photographer;
        label.appendChild(thumbImg);
        thumbsContainer.appendChild(label);
      }
    })
    .catch(err => console.error(err));
});