class Variable {
    /**
     * <h3> Get Variables </h3>
     * This method is used to retrieve all the available variables through an API request and print the response.
     */
    static async getVariables() {
        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        /* Possible parameters of Get Variables operation */
        await paramInstance.add(ZCRM.Variable.Model.GetVariablesParam.GROUP, "General");

        //Call getVariables method that takes ParameterMap instance as parameter
        let response = await variablesOperations.getVariables(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ResponseWrapper) {
                    //Get the array of obtained Variable instances
                    let variables = responseObject.getVariables();

                    variables.forEach(variable => {
                        //Get the ID of each Variable
                        console.log("Variable ID: " + variable.getId());

                        //Get the APIName of each Variable
                        console.log("Variable APIName: " + variable.getAPIName());

                        //Get the Name of each Variable
                        console.log("Variable Name: " + variable.getName());

                        //Get the Description of each Variable
                        console.log("Variable Description: " + variable.getDescription());

                        //Get the Type of each Variable
                        console.log("Variable Type: " + variable.getType());

                        //Get the VariableGroup instance of each Variable
                        let variableGroup = variable.getVariableGroup();

                        //Check if variableGroup is not null
                        if (variableGroup != null) {
                            //Get the APIName of the VariableGroup
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());

                            //Get the ID of the VariableGroup
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }

                        //Get the Value of each Variable
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Create Variables </h3>
     * This method is used to create variables and print the response.
     */
    static async createVariables() {
        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Variable.Model.BodyWrapper();

        //Array to hold Variable instances
        let variableArray = [];

        //Get instance of Variable Class
        let variable1 = new ZCRM.Variable.Model.Variable();

        //Set the name to variable
        variable1.setName("Variable555");

        //Set the API name to variable
        variable1.setAPIName("Variable555");

        //Get instance of VariableGroup Class
        let variableGroup = new ZCRM.VariableGroup.Model.VariableGroup();

        //Set the ID to VariableGroup instance
        variableGroup.setName("Create me");

        //Set the VariableGroup to Variable instance
        variable1.setVariableGroup(variableGroup);

        //Set the type to Variable
        variable1.setType("integer");

        //Set the value to Variable
        variable1.setValue("55");

        variable1.setDescription("This denotes variable 5 description");

        //Add the variable instance to the array
        variableArray.push(variable1);

        variable1 = new ZCRM.Variable.Model.Variable();

        variable1.setName("Variable666");

        variable1.setAPIName("Variable666");

        variableGroup = new ZCRM.VariableGroup.Model.VariableGroup();

        variableGroup.setName("General");

        variable1.setVariableGroup(variableGroup);

        variable1.setType("text");

        variable1.setValue("Hello");

        variable1.setDescription("This denotes variable 6 description");

        //Add the variable instance to the array
        variableArray.push(variable1);

        //Set the array to variables in BodyWrapper instance
        request.setVariables(variableArray);

        //Call createVariables method that takes BodyWrapper instance as parameter
        let response = await variablesOperations.createVariables(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Variable.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Variable.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Update Variables </h3>
     * This method is used to update details of variables in CRM and print the response.
     */
    static async updateVariables() {
        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Variable.Model.BodyWrapper();

        //Array to hold Variable instances
        let variableArray = [];

        //Get instance of Variable Class
        let variable1 = new ZCRM.Variable.Model.Variable();

        variable1.setId(347706113471n);

        variable1.setValue("4763");

        variableArray.push(variable1);

        variable1 = new ZCRM.Variable.Model.Variable();

        variable1.setId(34096432275035n);

        variable1.setDescription("This is a new description");

        variableArray.push(variable1);

        variable1 = new ZCRM.Variable.Model.Variable();

        variable1.setId(34770615826003n);

        variable1.setAPIName("NewAPI");

        variableArray.push(variable1);

        //Set the array to variables in BodyWrapper instance
        request.setVariables(variableArray);

        //Call updateVariables method that takes BodyWrapper class instance as parameter
        let response = await variablesOperations.updateVariables(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Variable.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Variable.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     *  <h3> Delete Variables </h3>
     * This method is used to delete details of multiple variables in CRM simultaneously and print the response.
     * @param {Array} variableIds The array of Variable IDs to be deleted
     */
    static async deleteVariables(variableIds) {
        //example
        //let variableIds = [34096432275025n, 34096432275035n];

        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        /* Possible parameters of Delete Variables operation */
        for (let variableId of variableIds) {
            await paramInstance.add(ZCRM.Variable.Model.DeleteVariablesParam.IDS, variableId);
        }

        //Call deleteVariables method that takes ParameterMap instance as parameter
        let response = await variablesOperations.deleteVariables(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Variable.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Variable.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Get Variable By Id </h3>
     * This method is used to get the details of any specific variable.
     * Specify the unique ID of the variable in your API request to get the data for that particular variable group.
     * @param {BigInt} variableId The ID of the Variable to be obtained
     */
    static async getVariableById(variableId) {
        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        /* Possible parameters of Get Variable By ID operation */
        await paramInstance.add(ZCRM.Variable.Model.GetVariableByIDParam.GROUP, "34770613089001");

        //Call getVariableByGroupId method that takes paramInstance and variableId as parameter
        let response = await variablesOperations.getVariableById(variableId, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ResponseWrapper) {
                    //Get the array of obtained Variable instances
                    let variables = responseObject.getVariables();

                    variables.forEach(variable => {
                        //Get the ID of each Variable
                        console.log("Variable ID: " + variable.getId());

                        //Get the APIName of each Variable
                        console.log("Variable APIName: " + variable.getAPIName());

                        //Get the Name of each Variable
                        console.log("Variable Name: " + variable.getName());

                        //Get the Description of each Variable
                        console.log("Variable Description: " + variable.getDescription());

                        //Get the Type of each Variable
                        console.log("Variable Type: " + variable.getType());

                        //Get the VariableGroup instance of each Variable
                        let variableGroup = variable.getVariableGroup();

                        //Check if variableGroup is not null
                        if (variableGroup != null) {
                            //Get the APIName of the VariableGroup
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());

                            //Get the ID of the VariableGroup
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }

                        //Get the Value of each Variable
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Update Variable By Id </h3>
     * This method is used to update details of a specific variable in CRM and print the response.
     * @param {BigInt} variableId The ID of the Variable to be updated
     */
    static async updateVariableById(variableId) {
        //example
        //let variableId = 34096432275025n;

        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Variable.Model.BodyWrapper();

        //Array to hold Variable instances
        let variableArray = [];

        //Get instance of Variable Class
        let variable1 = new ZCRM.Variable.Model.Variable();

        variable1.setAPIName("TestAPIName");

        //Add the instance to the array
        variableArray.push(variable1);

        //Set the array to variables in BodyWrapper instance
        request.setVariables(variableArray);

        //Call updateVariableById method that takes BodyWrapper instance and variableId as parameter
        let response = await variablesOperations.updateVariableById(variableId, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Variable.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Variable.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Delete Variable </h3>
     * This method is used to delete details of a specific variable in CRM and print the response.
     * @param {BigInt} variableId The ID of the Variable to be deleted
     */
    static async deleteVariable(variableId) {
        //example
        //let variableId = 34096432275025n;

        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Call deleteVariable method that takes variableId as parameter
        let response = await variablesOperations.deleteVariable(variableId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Variable.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Variable.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Get Variable for API Name </h3>
     * This method is used to get the details of any specific variable.
     * Specify the unique name of the variable in your API request to get the data for that particular variable group.
     * @param {String} variableName The API name of the Variable to be obtained
     */
    static async getVariableForAPIName(variableName) {
        //example
        //let variableName = "Variable55";

        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        /* Possible parameters for Get Variable for API Name operation */
        await paramInstance.add(ZCRM.Variable.Model.GetVariableForAPINameParam.GROUP, "General");

        //Call getVariableForGroupAPIName method that takes ParameterMap instance and variableName as parameter
        let response = await variablesOperations.getVariableForAPIName(variableName, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ResponseWrapper) {
                    //Get the array of obtained Variable instances
                    let variables = responseObject.getVariables();

                    variables.forEach(variable => {
                        //Get the ID of each Variable
                        console.log("Variable ID: " + variable.getId());

                        //Get the APIName of each Variable
                        console.log("Variable APIName: " + variable.getAPIName());

                        //Get the Name of each Variable
                        console.log("Variable Name: " + variable.getName());

                        //Get the Description of each Variable
                        console.log("Variable Description: " + variable.getDescription());

                        //Get the Type of each Variable
                        console.log("Variable Type: " + variable.getType());

                        //Get the VariableGroup instance of each Variable
                        let variableGroup = variable.getVariableGroup();

                        //Check if variableGroup is not null
                        if (variableGroup != null) {
                            //Get the APIName of the VariableGroup
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());

                            //Get the ID of the VariableGroup
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }

                        //Get the Value of each Variable
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Update Variable by API Name </h3>
     * This method is used to update details of a specific variable in CRM and print the response.
     * @param {String} variableName The name of the Variable to be updated
     */
    static async updateVariableByAPIName(variableName) {
        //example
        //let variableName = "Variable55";

        //Get instance of VariablesOperations Class
        let variablesOperations = new ZCRM.Variable.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Variable.Model.BodyWrapper();

        //Array to hold Variable instances
        let variableArray = [];

        //Get instance of Variable Class
        let variable1 = new ZCRM.Variable.Model.Variable();

        variable1.setDescription("Test update Variable By APIName");

        //Add the instance to array
        variableArray.push(variable1);

        //Set the array to variables in BodyWrapper instance
        request.setVariables(variableArray);

        //Call updateVariableByAPIName method that takes BodyWrapper instance and variableName as parameter
        let response = await variablesOperations.updateVariableByAPIName(variableName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received 
                if (responseObject instanceof ZCRM.Variable.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Variable.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Variable.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Variable.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}