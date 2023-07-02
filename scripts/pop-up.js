const seeProjectButtons = document.querySelectorAll('.see-project');
const closeBtn = document.querySelector('.close-btn');
const popupContainer = document.getElementById('popup-container');
const popupCard = document.getElementById('popup-card');

// Function to show the popup with project details
function showPopup(project) {
  const projectData = {
    tonic: {
      title: 'Tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      imageSrc: 'images/Portoflio Card/Snapshoot Portfolio 3.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/tonic',
      sourceLink: 'https://github.com/example/tonic'
    },
    'multi-post-stories': {
      title: 'Multi-Post Stories',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      imageSrc: 'images/Portoflio Card/Snapshoot Portfolio 4.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/multi-post-stories',
      sourceLink: 'https://github.com/example/multi-post-stories'
    }
    // Add more project data here
  };

  const data = projectData[project];

  if (data) {
    document.getElementById('popup-title').textContent = data.title;
    document.getElementById('popup-description').textContent = data.description;
    document.getElementById('popup-image').setAttribute('src', data.imageSrc);
    document.getElementById('popup-technologies').innerHTML = data.technologies
      .map(tech => `<li>${tech}</li>`)
      .join('');
    document.getElementById('popup-live-link').setAttribute('href', data.liveLink);
    document.getElementById('popup-source-link').setAttribute('href', data.sourceLink);

    // Show the popup and set body overflow to hidden
    popupContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Function to hide the popup
function hidePopup() {
  // Hide the popup and restore body overflow
  popupContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event listener for the See Project buttons
seeProjectButtons.forEach(seeProjectButton => {
  seeProjectButton.addEventListener('click', event => {
    const project = event.target.dataset.project;
    if (project) {
      showPopup(project);
    }
  });
});

// Event listener for the Close button
closeBtn.addEventListener('click', hidePopup);
