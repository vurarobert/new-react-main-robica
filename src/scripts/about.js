document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = [
        { name: 'Twitter', url: 'https://twitter.com/r0trv' },
        { name: 'Instagram', url: 'https://instagram.com/_vurarobert_' },
        { name: 'Facebook', url: 'https://facebook.com/vurarobert' }
    ];

    const socialLinksContainer = document.getElementById('socialLinks');

    socialLinks.forEach(social => {
        const socialItem = document.createElement('li');
        const socialLink = document.createElement('a');
        socialLink.href = social.url;
        socialLink.target = '_blank';
        socialLink.innerHTML = `<i class="fab fa-${social.name.toLowerCase()}"></i>`;
        socialItem.appendChild(socialLink);
        socialLinksContainer.appendChild(socialItem);
    });
});
