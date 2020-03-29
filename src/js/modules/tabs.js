const tabs = (headerElement, tabElement, contentElement, activeElement) => {
    const header = document.querySelector(headerElement),
        tab = document.querySelectorAll(tabElement),
        content = document.querySelectorAll(contentElement);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeElement);
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeElement);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabElement.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabElement.replace(/\./, '')))) {
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent();
                    showTabContent(i)
                }
            });
        }
    });
};

export default tabs;
