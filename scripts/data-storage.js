// Sample project data
const projects = [
    {
      name: "Tonic",
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      featuredImage: "images/Portoflio Card/Snapshoot Portfolio 3.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.example.com/tonic",
      sourceLink: "https://github.com/example/tonic"
    },
    // Add more projects here...
  ];
  
  // Function to create project cards
  function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "cards";
  
    const screenshot = document.createElement("div");
    screenshot.className = "screenshoot";
    const image = document.createElement("img");
    image.src = project.featuredImage;
    image.alt = "project screenshot";
    screenshot.appendChild(image);
    card.appendChild(screenshot);
  
    const description = document.createElement("div");
    description.className = "description";
    const title = document.createElement("h2");
    title.textContent = project.name;
    description.appendChild(title);
  
    const part = document.createElement("span");
    part.className = "part";
    const partList = document.createElement("ul");
    const canopy = document.createElement("li");
    canopy.id = "canopy";
    canopy.textContent = "CANOPY";
    partList.appendChild(canopy);
    // Add other <li> elements for project details if needed
    part.appendChild(partList);
    description.appendChild(part);
  
    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;
    description.appendChild(projectDesc);
  
    const techStack = document.createElement("span");
    techStack.className = "tech-stack";
    const techList = document.createElement("ul");
    project.technologies.forEach(function (technology) {
      const tech = document.createElement("li");
      tech.textContent = technology;
      techList.appendChild(tech);
    });
    techStack.appendChild(techList);
    description.appendChild(techStack);
  
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button";
    const button = document.createElement("button");
    button.textContent = "See Projects";
   
  }