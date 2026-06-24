/**
 * @Company Name      : Persistent Systems Limited
 * @Developer Name    : Ajinkya Kumbhare
 * @Edcast Project    : Edcast
 * @last modified on  : 06-04-2026
 * @Team Name         : Galaxy Team
 * @last modified by  : Ajinkya Kumbhare
**/
import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    userName = 'Ravi';
    currentTime = new Date().toLocaleDateString();
    subcriberScore = 9;

    totalLessonsWatched = 50*10;

    MemberStatus;

    updateMemberStatus(event){
        this.MemberStatus = event.target.value;
    }
}