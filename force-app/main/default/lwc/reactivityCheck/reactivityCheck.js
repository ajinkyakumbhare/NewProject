import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    userAddress = '32 Vikram Shila Nagar';

    myPersonalDetails = {
                            "result": [
                                {
                                "message": "Hello, Montana! Your order number is: #50",
                                "phoneNumber": "492.813.5311",
                                "phoneVariation": "+90 366 923 10 26",
                                "status": "active",
                                "name": {
                                    "first": "Winfield",
                                    "middle": "Greer",
                                    "last": "Johnson"
                                },
                                "location": {
                                    "street": "71024 Rosalyn Radial",
                                    "city": "Anjalichester",
                                    "state": "North Dakota",
                                    "country": "Cape Verde",
                                    "zip": "61836",
                                    "coordinates": {
                                    "latitude": "-25.052",
                                    "longitude": "122.8983"
                                    }
                                },
                                "uuid": "d75d0853-fc6c-4c78-9b01-53faebe3812d",
                                "objectId": "681f124d0c19289e6bfa94fe"
                                }
                            ]
                            };
    
    updateAddress(){
        this.userAddress = '32 Vikram Shila Nagar, Patna';

    }

    get personalDetails(){
        return JSON.parse(this.myPersonalDetails);
    }
}