export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer)
        this.newOfficer = document.querySelector(newOfficer)
        this.items = items;
        this.oldItems = this.oldOfficer.querySelectorAll(this.items);
        this.newItems = this.newOfficer.querySelectorAll(this.items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    hideItems(items) {
        items.forEach(item => {
            if (item !== item.parentElement.lastElementChild) {
                item.style.display = 'none';
            }
        });
    }

    bindTriggers(officer, officerCounter, officerItems) {
        officer.querySelector('.plus').addEventListener('click', () => {
            console.log(officer, officerCounter, officerItems);
            if (officerCounter !== officerItems.length - 2) {
                officerItems[officerCounter].style.display = 'flex';
                officerCounter++;
            } else {
                officerItems[officerCounter].style.display = 'flex';
                officerItems[officerItems.length - 1].remove();
            }
        });
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems);
        this.bindTriggers(this.newOfficer, this.newCounter, this.newItems);
    }
}