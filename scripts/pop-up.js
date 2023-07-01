// JavaScript array to store project information
const projects = [
    {
      name: "Tonic",
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      image: "images/Portoflio Card/Snapshoot Portfolio 3.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://example.com/tonic",
      sourceLink: "https://github.com/example/tonic"
    },
    {
      name: "Multi-Post Stories",
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      image: "images/Portoflio Card/Snapshoot Portfolio 4.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://example.com/multi-post-stories",
      sourceLink: "https://github.com/example/multi-post-stories"
    }
    // Add more project objects as needed
  ];
  
  // Function to create project cards dynamically
  function createProjectCards() {
    const projectSection = document.getElementById("projects");
  
    // Loop through each project and create a card
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
  
      // Create card elements
      const card = document.createElement("div");
      card.classList.add("cards");
  
      const screenshot = document.createElement("div");
      screenshot.classList.add("screenshoot");
  
      const image = document.createElement("img");
      image.src = project.image;
      image.alt = "portfolio screenshot";
  
      screenshot.appendChild(image);
  
      const projectDescription = document.createElement("div");
      projectDescription.classList.add("description");
  
      const projectName = document.createElement("h2");
      projectName.textContent = project.name;
  
      const projectTechStack = document.createElement("span");
      projectTechStack.classList.add("tech-stack");
  
      const techList = document.createElement("ul");
      project.technologies.forEach(tech => {
        const techItem = document.createElement("li");
        techItem.textContent = tech;
        techList.appendChild(techItem);
      });
  
      projectTechStack.appendChild(techList);
  
      const projectButton = document.createElement("button");
      projectButton.classList.add("see-project");
      projectButton.textContent = "See Project";
      projectButton.dataset.project = project.name;
  
      projectDescription.appendChild(projectName);
      projectDescription.appendChild(projectTechStack);
      projectDescription.appendChild(projectButton);
  
      card.appendChild(screenshot);
      card.appendChild(projectDescription);
  
      projectSection.appendChild(card);
    }
  }
  
  // Function to handle the "See Project" button click
  function handleSeeProjectClick(event) {
    const projectName = event.target.dataset.project;
  
    // Find the selected project in the projects array
    const selectedProject = projects.find(project => project.name === projectName);
  
    if (selectedProject) {
      // Update the popup card with the project details
      const popupTitle = document.getElementById("popup-title");
      const popupDescription = document.getElementById("popup-description");
      const popupImage = document.getElementById("popup-image");
      const popupTechnologies = document.getElementById("popup-technologies");
      const popupLiveLink = document.getElementById("popup-live-link");
      const popupSourceLink = document.getElementById("popup-source-link");
  
      popupTitle.textContent = selectedProject.name;
      popupDescription.textContent = selectedProject.description;
      popupImage.src = selectedProject.image;
      popupTechnologies.textContent = "Technologies used: " + selectedProject.technologies.join(", ");
      popupLiveLink.href = selectedProject.liveLink;
      popupSourceLink.href = selectedProject.sourceLink;
  
      // Show the popup container
      const popupContainer = document.getElementById("popup-container");
      popupContainer.style.display = "block";
    }
  }
  
  // Function to close the popup when the close button is clicked
  function handleCloseButtonClick() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";
  }
  
  // Attach click event handlers
  document.addEventListener("DOMContentLoaded", function () {
    createProjectCards();
  
    const seeProjectButtons = document.querySelectorAll(".see-project");
    seeProjectButtons.forEach(button => {
      button.addEventListener("click", handleSeeProjectClick);
    });
  
    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", handleCloseButtonClick);
  });
  