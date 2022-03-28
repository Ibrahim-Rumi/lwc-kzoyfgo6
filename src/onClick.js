import { LightningElement } from 'lwc';

export default class ButtonOnclick extends LightningElement {
    toggleIconName = 'utility:preview';
    toggleButtonLabel = 'Hide content';
    isDialogVisible = false;
    originalMessage; 
    displayMessage = 'Click on the \'Open Confirmation\' button to test the dialog.';
    textvalue= 'random';
    // Handles click on the 'Show/hide content' button
    handleToggleClick() {
        // retrieve the classList from the specific element
        const contentBlockClasslist = this.template.querySelector(
            '.lgc-id_content-toggle'
        ).classList;
        // toggle the hidden class
        contentBlockClasslist.toggle('slds-hidden');

        // if the current icon-name is `utility:preview` then change it to `utility:hide`
        if (this.toggleIconName === 'utility:preview') {
            this.toggleIconName = 'utility:hide';
            this.toggleButtonLabel = 'Reveal content';
        } else {
            this.toggleIconName = 'utility:preview';
            this.toggleButtonLabel = 'Hide content';
        }
    }

      handleClick(event){
        if(event.target.name === 'openConfirmation'){
            //it can be set dynamically based on your logic
            this.originalMessage = 'test message';
            //shows the component
            this.isDialogVisible = true;
        }else if(event.target.name === 'confirmModal'){

            //when user clicks outside of the dialog area, the event is dispatched with detail value  as 1
            if(event.detail !== 1){
                //gets the detail message published by the child component
                this.displayMessage = 'Status: ' + event.detail.status + '. Event detail: ' + JSON.stringify(event.detail.originalMessage) + '.';

                //you can do some custom logic here based on your scenario
                if(event.detail.status === 'confirm') {
                    //do something
                }else if(event.detail.status === 'cancel'){
                    //do something else
                }
            }

            //hides the component
            this.isDialogVisible = false;
        }
  }

  search(event){

  }
}
