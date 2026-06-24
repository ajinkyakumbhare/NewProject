import { LightningElement, api, wire } from 'lwc';
import {getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class LoadRecordWithoutOFField extends LightningElement {
    
    @api recordId = '500NS00000S7Q8GYAV';
    fields = ['CaseNumber' , 'Reason', 'Status', 'Origin'];

    @wire (getRecord, {recordId: '$recordId', fields: '$fields'}) CaseVar;

    get casenumber(){
    return getFieldValue(this.CaseVar.data, 'CaseNumber');
        }
}