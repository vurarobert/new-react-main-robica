document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/_vurarobert_"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/vura.robert"
        },
        {
            name: "GitHub",
            url: "https://github.com/vurarobert"
        }
    ];
    const socialButtonsContainer = document.getElementById("social-links");
    socialLinks.forEach((social)=>{
        const socialButton = document.createElement("div");
        socialButton.classList.add("social-link");
        socialButton.innerHTML = `<a href="${social.url}" class="social-icon">${social.name}</a>`;
        socialButtonsContainer.appendChild(socialButton);
    });
});

//# sourceMappingURL=index.4999a459.js.map
