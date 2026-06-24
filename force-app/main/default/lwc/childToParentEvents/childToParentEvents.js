import { LightningElement } from 'lwc';

export default class ChildToParentEvents extends LightningElement {

    showFinalValue;

    handleProductSelected(event) {
        this.selectedProduct = event.detail;
    }
}