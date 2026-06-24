import { LightningElement } from 'lwc';

export default class ParentChildLifeCycleHooks extends LightningElement {

    constructor() {
        super();
        console.log('Parent Constructor is called');
    }

    connectedCallback() {
        console.log('Parent Connected Callback is fired');
    }

    renderedCallback() {
        console.log('Parent Rendered Callback is fired');
    }

    disconnectedCallback() {
        console.log('Parent Disconnected Callback is fired');
    }

     errorCallback(error, stack) {
        
        console.error(stack + '---' + trace);
    }
}