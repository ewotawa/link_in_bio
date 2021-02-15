let projects = [
  [
    "Adventures of the Penguin Phoenix",
    "Check out my portfolio of HTML and data science projects on my portfolio page.",
    "https://github.com/ewotawa/portfolio",
    "https://www.elizabethwotawa.com/"
  ],[
    "Grapevine Plots",
    "A data-driven celebration of wine. I examine Wine Spectator reviews using data science, analytics, statistics, and visualization tools.",
    "https://github.com/ewotawa/grapevine_plots",
    "https://www.grapevineplots.com/"
  ]
];

for (i = 0; i < projects.length; i++) {
console.log(projects[i][0]);
}

function addProject(projects) {
for (project in projects) {

  console.log(project);

  /* create a new element to hold the project */
  let article = document.createElement("article");

  /* add style tags to article */
  article.setAttribute("class", "project-tile");

  /* add header to article */
  let header = document.createElement("h3");
  header.setAttribute("class", "flex-item");
  let headerText = document.createTextNode(projects[project][0]);
  header.appendChild(headerText);
  article.appendChild(header);

  /* add description to article */
  let p = document.createElement("p");
  p.setAttribute("class", "flex-item");
  let pText = document.createTextNode(projects[project][1]);
  p.appendChild(pText);
  article.appendChild(p);
  console.log(p);

  /* add github link to article */
  let github = document.createElement("a");
  github.setAttribute("class", "flex-item");
  let githubIcon = document.createElement("i");
  githubIcon.setAttribute("class", "fab fa-github");
  github.appendChild(githubIcon);
  let githubText = document.createTextNode(' GitHub');
  github.appendChild(githubText);
  github.setAttribute("href",  projects[project][2]);
  github.setAttribute("target", "_blank");
  article.appendChild(github);

  /* add linkedin link to article */
  let linkedin = document.createElement("a");
  linkedin.setAttribute("class", "flex-item");
  let linkedinIcon = document.createElement("i");
  linkedinIcon.setAttribute("class", "fas fa-external-link-alt");
  linkedin.appendChild(linkedinIcon);
  let linkedinText = document.createTextNode(' Link');
  linkedin.appendChild(linkedinText);
  linkedin.setAttribute("href",  projects[project][3]);
  linkedin.setAttribute("target", "_blank");
  article.appendChild(linkedin);

  console.log(article);

  /* add to the DOM */
  var container = document.getElementById("articles");

  console.log(container);

  container.appendChild(article);
}

}

document.body.onload = addProject(projects);
