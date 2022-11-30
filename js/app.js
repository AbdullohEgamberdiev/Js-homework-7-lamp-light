let imageElement = document.querySelector(".img");

// imageElement.style.display = "flex";
// imageElement.style.alignItems = "center";


setInterval(() => {
  let src = imageElement.getAttribute("src");
  if (src === "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg") {
    imageElement.setAttribute("src", "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg");
  }
  // else if (src === "images/mount-2.jpg") {
  //   imageElement.setAttribute("src", "images/mount-3.jpg.jpg");
  // }
  else {
    imageElement.setAttribute("src", "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg");
  }
}, 100);