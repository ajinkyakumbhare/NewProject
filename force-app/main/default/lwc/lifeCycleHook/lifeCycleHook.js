import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {
    username = 'Ajinkya Kumbhare';

    handleNameChange(){
        this.username = 'Shraddha Kumbhare';
    }
}