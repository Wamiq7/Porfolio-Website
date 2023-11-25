// Sample data for projects and education
const projectsData = [
    { name: "E-commerce Website", technology: "MERN" },
    { name: "Clone of MI", technology: "React" },
    { name: "Data Extraction from Gaint DataSets", technology: "C++" },
    // Add more projects as needed
];


// Function to filter projects based on technology
function filterProjects() {
    const filterInput = document.getElementById("technologyFilter").value.toLowerCase();
    const projectList = document.getElementById("projectList");

    // Clear existing projects
    projectList.innerHTML = "";

    // Filter and display projects
    projectsData.forEach(project => {
        if (project.technology.toLowerCase().includes(filterInput)) {
            const listItem = document.createElement("li");
            listItem.textContent = project.name + " - " + project.technology;
            projectList.appendChild(listItem);
        }
    });
}
filterProjects();



