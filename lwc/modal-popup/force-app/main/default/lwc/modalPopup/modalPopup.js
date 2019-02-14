import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    openModalPopup() {
        const modalbox = this.template.querySelector(
            '.modal-box'
        ).classList;
        const modalbackdrop = this.template.querySelector(
            '.modal-backdrop'
        ).classList;
        modalbox.toggle('slds-fade-in-open');
        modalbackdrop.toggle('slds-backdrop--open');
    }

    closeModalPopup() {
        const modalbox = this.template.querySelector(
            '.modal-box'
        ).classList;
        const modalbackdrop = this.template.querySelector(
            '.modal-backdrop'
        ).classList;
        modalbox.toggle('slds-fade-in-open');
        modalbackdrop.toggle('slds-backdrop--open');
    }
}
