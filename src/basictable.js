import { LightningElement, api } from 'lwc';
import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class BasicDatatable extends LightningElement {
    data = [];
    columns = columns;
    searchable;
    @api searchTerm = 'aa';
    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 100 });
        this.data = data;
    }

    search(e){
        
        this.searchTerm = e.target.value;
        this.searchTerm = this.searchTerm.toLowerCase();
        
        const regex = new RegExp('(^' + this.searchTerm + ')|(.' + this.searchTerm + ')|(' + this.searchTerm + '$)');
        if(this.searchTerm.length > 2){
            this.searchable = this.data.filter(item => {
             //console.log(JSON.stringify(item));
                if(regex.test(item.name.toLowerCase() + ' ' + item.name.toLowerCase())){
                    return item;
                }
            })
        }
        else if(this.searchTerm.length <= 2){this.searchable = this.data}                
    }
}
