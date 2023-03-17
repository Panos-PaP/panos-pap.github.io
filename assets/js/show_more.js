function showMoreLinks() {
  var moreText = document.getElementById("moreText"),
      btnText = document.getElementById("showMoreLinks");

  if (moreText.style.display != "inline") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}

function showMoreProjects() {
  var moreProjects = document.getElementById("moreProjects"),
      btnText = document.getElementById("showMoreProjects");

  if (moreProjects.style.display != "flex") {
    moreProjects.style.display = "flex";
    btnText.innerHTML = "Show Less";
  } else {
    moreProjects.style.display = "none";
    btnText.innerHTML = "Show More";
  }
}
