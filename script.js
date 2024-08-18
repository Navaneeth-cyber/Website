document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const videoItems = document.querySelectorAll('.video-item');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        videoItems.forEach(item => {
            const title = item.querySelector('h2').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
