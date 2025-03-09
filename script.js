// JSON data for assignments
const assignments = [
  {
    title: "Array Operations Visualizer",
    description: "Understand and visualize array operations.",
    link: "./MiniProjects/ArrayOperationVisualizer/index.html",
  },
  {
    title: "ICC Champions Trophy 2025",
    description: "Explore the world of ICC Champions Trophy.",
    link: "./MiniProjects/ICC-ChampionsTrophy2024/index.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-10 (Assignments)/Assignment 1 - Style a Heading and Paragraph.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-10 (Assignments)/Assignment 2 - Internal CSS Practice.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-10 (Assignments)/Assignment 3 - Using Selectors.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-11 (Assignments)/Assignment 4 - Adding Background Colors.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-11 (Assignments)/Assignment 5 - Using Named Colors.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-11 (Assignments)/Assignment 6 - Transparency.html",
  },
  {
    title: "CSS Styling Basics",
    description: "Learn how to style text and layouts.",
    link: "./Assignments/Chapter-11 (Assignments)/Chapter 10 and 11 combine assignment.html",
  },
];

// Dynamically create cards
const cardsContainer = document.getElementById("cards-container");

assignments.forEach((assignment) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerText = assignment.title;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.innerHTML = `
          <p>${assignment.description}</p>
          <a href="${assignment.link}" class="assignment-link" target="_blank">View Assignment</a>
        `;

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  cardsContainer.appendChild(card);
});

// Toggle Theme function
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const themeToggleButton = document.querySelector(".theme-toggle");
  themeToggleButton.style.backgroundColor = document.body.classList.contains(
    "light-mode"
  )
    ? "#007BFF"
    : "#34495E";
  document.querySelector(".footer").classList.toggle("footer-light");
}
