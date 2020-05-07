const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            [...e.target.value].some(char => char.match(/[^а-яё 0-9]/ig) ? e.target.value = '' : e.target.value);
        });

        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        })
    })
};

export default checkTextInputs;
