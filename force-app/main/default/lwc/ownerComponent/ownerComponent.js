import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {

    productList = [
        {id:'1', name:'MacBook', rating:'3/5'},
        {id:'2', name:'Dell XPS', rating:'4/5'},
        {id:'3', name:'HP Spectre', rating:'5/5'},
    ];
}