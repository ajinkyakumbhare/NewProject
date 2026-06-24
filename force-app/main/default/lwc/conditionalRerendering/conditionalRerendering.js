/**
 * @Company Name      : Persistent Systems Limited
 * @Developer Name    : Ajinkya Kumbhare
 * @Edcast Project    : Edcast
 * @last modified on  : 06-08-2026
 * @Team Name         : Galaxy Team
 * @last modified by  : Ajinkya Kumbhare
**/
import { LightningElement, track } from 'lwc';

export default class ButtonIconStatefulBasic extends LightningElement {
    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;

    displaySettings = true;
    displayFirst = false;
    displaySecond = false;
    displayThird = false;
    

    handleLikeButtonClick1(event) {
        this.displayFirst = true;
        this.displaySecond = false;
        this.displayThird = false;

    }

     handleLikeButtonClick2(event) {
        this.displayFirst = false;
        this.displaySecond = true;
        this.displayThird = false;
    }

     handleLikeButtonClick3(event) {
        this.displayFirst = false;
        this.displaySecond = false;
        this.displayThird = true;
    }



    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] = !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}