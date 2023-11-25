
const educationData = [
    { course: "Maths", grade: "9th grade" },
    { course: "Physics", grade: "10th grade" },
    { course: "Chemistry", grade: "11th grade" },
    // Add more courses as needed
];

// Function to populate education section
function populateEducation() {
    const educationList = document.getElementById("educationList");

    // Populate education items
    educationData.forEach(course => {
        const listItem = document.createElement("li");
        listItem.textContent = course.course + " - " + course.grade;
        educationList.appendChild(listItem);
    });
}

// Call function to initially populate the education page
populateEducation();

// Call functions to initially populate the page
