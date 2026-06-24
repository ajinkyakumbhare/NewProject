import { LightningElement, api } from 'lwc';

export default class LoadCustomviewRecord extends LightningElement {
     @api recordId='500fj00001PWH6BAAX';
        objectApiName='Case';
        fieldList=['CaseNumber', 'Priority','Status' , 'Reason', 'Type'];
}