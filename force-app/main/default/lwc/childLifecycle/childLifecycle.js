import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {

    constructor() {
        super();
        console.log('child Constructor is called');
    }

    connectedCallback() {
        console.log('child Connected Callback is fired');
    }

    renderedCallback() {
        console.log('child Rendered Callback is fired');
    }

    disconnectedCallback() {
        console.log('child component is done with what it was supposed to do');
    }

     errorCallback(error, stack) {
        
        console.error(stack + '---' + trace);
    }
}