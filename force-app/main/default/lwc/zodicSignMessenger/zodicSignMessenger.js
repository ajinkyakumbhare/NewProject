import { LightningElement } from 'lwc';

export default class ZodicSignMessenger extends LightningElement {
   
    zodiacTraits = [
            {
                sign: 'Capricorn',
                from: '12-22',
                to: '01-19',
                emoji: '🐐',
                trait: "You are disciplined, practical, and quietly ambitious. You build success through patience and hard work."
            },
            {
                sign: 'Aquarius',
                from: '01-20',
                to: '02-18',
                emoji: '🏺',
                trait: "You are innovative, independent, and forward-thinking. You love unique ideas and value freedom."
            },
            {
                sign: 'Pisces',
                from: '02-19',
                to: '03-20',
                emoji: '🐟',
                trait: "You are compassionate, imaginative, and deeply intuitive. You connect with emotions and creativity."
            },
            {
                sign: 'Aries',
                from: '03-21',
                to: '04-19',
                emoji: '♈',
                trait: "You are bold, energetic, and fearless. You enjoy challenges and naturally take the lead."
            },
            {
                sign: 'Taurus',
                from: '04-20',
                to: '05-20',
                emoji: '🐂',
                trait: "You are reliable, patient, and grounded. You value stability, comfort, and loyalty."
            },
            {
                sign: 'Gemini',
                from: '05-21',
                to: '06-20',
                emoji: '👯',
                trait: "You are curious, adaptable, and expressive. You love learning new things and meeting people."
            },
            {
                sign: 'Cancer',
                from: '06-21',
                to: '07-22',
                emoji: '🦀',
                trait: "You are caring, protective, and emotionally intelligent. Family and close relationships matter most."
            },
            {
                sign: 'Leo',
                from: '07-23',
                to: '08-22',
                emoji: '🦁',
                trait: "You are confident, charismatic, and creative. You enjoy inspiring others and shining brightly."
            },
            {
                sign: 'Virgo',
                from: '08-23',
                to: '09-22',
                emoji: '🌾',
                trait: "You are analytical, organized, and detail-oriented. You strive for excellence in everything you do."
            },
            {
                sign: 'Libra',
                from: '09-23',
                to: '10-22',
                emoji: '⚖️',
                trait: "You are diplomatic, charming, and fair-minded. You seek balance and harmony in life."
            },
            {
                sign: 'Scorpio',
                from: '10-23',
                to: '11-21',
                emoji: '🦂',
                trait: "You are passionate, determined, and mysterious. You value loyalty and emotional depth."
            },
            {
                sign: 'Sagittarius',
                from: '11-22',
                to: '12-21',
                emoji: '🏹',
                trait: "You are adventurous, optimistic, and open-minded. You love exploring new places and ideas."
            }
            ];

    username;
    userBirthdate;

    handleNameChange(event){
            this.username = event.target.value;
    }

    handleDateChange(event){
             this.userBirthdate = event.target.value;


    }
    handleSubmit(){
        let userDob = new Date(this.userBirthdate);
        const userMonth = userDob.getMonth() + 1; // getMonth() returns 0-11
        const userDate = userDob.getDate();
        this.checkZodiacSign

        this.checkZodiacSign(userMonth, userDate);
    }

        checkZodiacSign(month, day){

            console.log('Date recieved :' + month + '-' + day);
            for(let sign of this.zodiacTraits){
                console.log('sign recieved', sign);

        }

    }
}