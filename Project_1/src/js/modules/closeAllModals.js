const closeAllModals = (dataAttribute) => {
    dataAttribute.forEach(item => {
        item.style.display = 'none';
    });
};

export default closeAllModals;
