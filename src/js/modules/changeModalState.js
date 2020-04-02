import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElements(event, element, property) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[property] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[property] = 'Холодное' : state[property] = 'Теплое';
                            element.forEach((box, j) => {
                                j === i ? box.checked = true : box.checked = false;
                            });
                        } else {
                            state[property] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[property] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElements('click', windowForm, 'form');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', windowProfile, 'profile');

};

export default changeModalState;
