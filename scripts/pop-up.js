const projectCards = document.querySelectorAll('.cards');
const popupContainer = document.getElementById('popup-container');
const popupCard = document.getElementById('popup-card');
const closeBtn = document.getElementById('close-btn');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupImage = document.getElementById('popup-image');
const popupTechnologies = document.getElementById('popup-technologies');
const popupLiveLink = document.getElementById('popup-live-link');
const popupSourceLink = document.getElementById('popup-source-link');
const closeBtns = document.querySelectorAll('.close-btn');
const cards = document.querySelectorAll('.cards');

closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    cards[index].style.display = 'none';
  });
});


// Add click event listeners to each project card
projectCards.forEach((card, index) => {
  const seeProjectBtn = card.querySelector('.see-project');
  seeProjectBtn.addEventListener('click', () => openPopup(index));
});

function openPopup(index) {
  const projectCard = projectCards[index];
  const projectName = projectCard.querySelector('h2').textContent;
  const projectDescription = projectCard.querySelector('p').textContent;
  const projectImageSrc = projectCard.querySelector('.screenshoot img').src;
  const projectTechnologies = projectCard.querySelector('.tech-stack ul').textContent;
  
  // Set the popup content
  popupTitle.textContent = projectName;
  popupDescription.textContent = projectDescription;
  popupImage.src = projectImageSrc;
  popupTechnologies.textContent = `Technologies used: ${projectTechnologies}`;
  
  // Show the popup
  popupContainer.style.display = 'block';
}

const seeProjectButtons = document.querySelectorAll('.see-project');


// Event listener for the See Project buttons
seeProjectButtons.forEach((seeProjectButton) => {
  seeProjectButton.addEventListener('click', (event) => {
    const card = event.target.closest('.cards');
    if (card) {
      const title = card.querySelector('h2').textContent;
      const description = card.querySelector('p').textContent;
      const imageSrc = card.querySelector('img').getAttribute('src');
      const technologies = card.querySelectorAll('.tech-stack li');
      const liveLink = card.querySelector('.button a:first-child').getAttribute('href');
      const sourceLink = card.querySelector('.button a:last-child').getAttribute('href');

      document.getElementById('popup-title').textContent = title;
      document.getElementById('popup-description').textContent = description;
      document.getElementById('popup-image').setAttribute('src', imageSrc);
      document.getElementById('popup-technologies').innerHTML = '';
      technologies.forEach((tech) => {
        const li = document.createElement('li');
        li.textContent = tech.textContent;
        document.getElementById('popup-technologies').appendChild(li);
      });
      document.getElementById('popup-live-link').setAttribute('href', liveLink);
      document.getElementById('popup-source-link').setAttribute('href', sourceLink);

      popupContainer.classList.add('active');
    }
  });
});

// Event listener for the Close button
closeBtn.addEventListener('click', () => {
  popupContainer.classList.remove('active');
});





