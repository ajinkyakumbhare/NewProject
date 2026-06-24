import { LightningElement } from 'lwc';
import MYLOGO from "@salesforce/resourceUrl/sms";
import SHOWINPRODUCTION from "@salesforce/label/c.Show_in_Production";

export default class ImportUtility extends LightningElement {
    src = MYLOGO;
    label = SHOWINPRODUCTION;


    get showinproduction() {
        return this.label == 'true' ? true : false;
    }
}