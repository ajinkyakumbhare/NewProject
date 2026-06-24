import { LightningElement } from 'lwc';

export default class ChildToTriggerEvent extends LightningElement {

    selectedProduct;

    handleFiringEvent() {

        this.selectedProduct = 'Geely Coolray';

        const event = new CustomEvent('sendproductselected', {
            detail: this.selectedProduct
        });

        this.dispatchEvent(event);
    }
}