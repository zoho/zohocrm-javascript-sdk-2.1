class FieldAttachment {
    static async getFieldAttachments(moduleAPIName, recordId, fieldsAttachmentId = null) {
        //Get instance of FieldAttachmentsOperations Class
        let fieldAttachmentsOperations = new ZCRM.FieldAttachment.Operations(moduleAPIName, recordId, fieldsAttachmentId);

        //Call getFieldAttachments method
        let response = await fieldAttachmentsOperations.getFieldAttachments();

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content\n");

                return;
            }

            //Get object from response
            let responseHandler = response.getObject();

            if (responseHandler != null) {
                //Check if expected FileBodyWrapper instance is received
                if (responseHandler instanceof ZCRM.FieldAttachment.Model.FileBodyWrapper) {
                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper = responseHandler.getFile();

                    //Get name from StreamWrapper instance
                    let fileName = streamWrapper.getName();

                    //Get the stream from StreamWrapper instance
                    let readStream = streamWrapper.getStream();

                    var url = URL.createObjectURL(readStream);

                    var ttt = document.createElement('a');

                    ttt.href = url;

                    ttt.download = fileName;

                    ttt.click();
                }
                //Check if the request returned an exception
                else if (responseHandler instanceof ZCRM.FieldAttachment.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseHandler.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseHandler.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseHandler.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseHandler.getMessage().getValue());
                }
            }
        }
    }
}