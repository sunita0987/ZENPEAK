function toggleBio(button) {
    const bio = button.nextElementSibling.nextElementSibling;
    if (bio.style.display === "block") {
        bio.style.display = "none";
        button.innerHTML = "+ SHOW BIO";
    } else {
        bio.style.display = "block";
        button.innerHTML = "- HIDE BIO";
    }
}