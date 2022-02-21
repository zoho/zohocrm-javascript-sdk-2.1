ZCRM.BluePrint = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		Transition : class{
			constructor(){

				this.nextTransitions=null;
				this.parentTransition=null;
				this.percentPartialSave=null;
				this.data=null;
				this.nextFieldValue=null;
				this.name=null;
				this.criteriaMatched=null;
				this.id=null;
				this.fields=null;
				this.criteriaMessage=null;
				this.type=null;
				this.executionTime=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the nextTransitions
			 * @returns {List} An Array representing the nextTransitions
			 */
			getNextTransitions()	{
				return this.nextTransitions;

			}

			/**
			 * The method to set the value to nextTransitions
			 * @param {List} nextTransitions An Array
			 */
			setNextTransitions(nextTransitions)	{
				if((nextTransitions != null) && (!(Object.prototype.toString.call(nextTransitions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextTransitions EXPECTED TYPE: Array", null, null);
				}
				this.nextTransitions = nextTransitions;
				this.keyModified.set("next_transitions", 1);

			}

			/**
			 * The method to get the parentTransition
			 * @returns {Transition} An instance of Transition
			 */
			getParentTransition()	{
				return this.parentTransition;

			}

			/**
			 * The method to set the value to parentTransition
			 * @param {Transition} parentTransition An instance of Transition
			 */
			setParentTransition(parentTransition)	{
				if((parentTransition != null) && (!(parentTransition instanceof ZCRM.BluePrint.Model.Transition))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentTransition EXPECTED TYPE: Transition", null, null);
				}
				this.parentTransition = parentTransition;
				this.keyModified.set("parent_transition", 1);

			}

			/**
			 * The method to get the percentPartialSave
			 * @returns {Double} A Float representing the percentPartialSave
			 */
			getPercentPartialSave()	{
				return this.percentPartialSave;

			}

			/**
			 * The method to set the value to percentPartialSave
			 * @param {Double} percentPartialSave A Float
			 */
			setPercentPartialSave(percentPartialSave)	{
				if((percentPartialSave != null) && (!(Object.prototype.toString.call(percentPartialSave) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: percentPartialSave EXPECTED TYPE: Float", null, null);
				}
				this.percentPartialSave = percentPartialSave;
				this.keyModified.set("percent_partial_save", 1);

			}

			/**
			 * The method to get the data
			 * @returns {Record} An instance of Record
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {Record} data An instance of Record
			 */
			setData(data)	{
				if((data != null) && (!(data instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the nextFieldValue
			 * @returns {String} A String representing the nextFieldValue
			 */
			getNextFieldValue()	{
				return this.nextFieldValue;

			}

			/**
			 * The method to set the value to nextFieldValue
			 * @param {String} nextFieldValue A String
			 */
			setNextFieldValue(nextFieldValue)	{
				if((nextFieldValue != null) && (!(Object.prototype.toString.call(nextFieldValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextFieldValue EXPECTED TYPE: String", null, null);
				}
				this.nextFieldValue = nextFieldValue;
				this.keyModified.set("next_field_value", 1);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the criteriaMatched
			 * @returns {Boolean} A Boolean representing the criteriaMatched
			 */
			getCriteriaMatched()	{
				return this.criteriaMatched;

			}

			/**
			 * The method to set the value to criteriaMatched
			 * @param {Boolean} criteriaMatched A Boolean
			 */
			setCriteriaMatched(criteriaMatched)	{
				if((criteriaMatched != null) && (!(Object.prototype.toString.call(criteriaMatched) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMatched EXPECTED TYPE: Boolean", null, null);
				}
				this.criteriaMatched = criteriaMatched;
				this.keyModified.set("criteria_matched", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the fields
			 * @returns {List} An Array representing the fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {List} fields An Array
			 */
			setFields(fields)	{
				if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

			}

			/**
			 * The method to get the criteriaMessage
			 * @returns {String} A String representing the criteriaMessage
			 */
			getCriteriaMessage()	{
				return this.criteriaMessage;

			}

			/**
			 * The method to set the value to criteriaMessage
			 * @param {String} criteriaMessage A String
			 */
			setCriteriaMessage(criteriaMessage)	{
				if((criteriaMessage != null) && (!(Object.prototype.toString.call(criteriaMessage) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMessage EXPECTED TYPE: String", null, null);
				}
				this.criteriaMessage = criteriaMessage;
				this.keyModified.set("criteria_message", 1);

			}

			/**
			 * The method to get the type
			 * @returns {String} A String representing the type
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {String} type A String
			 */
			setType(type)	{
				if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

			}

			/**
			 * The method to get the executionTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getExecutionTime()	{
				return this.executionTime;

			}

			/**
			 * The method to set the value to executionTime
			 * @param {OffsetDateTime} executionTime An instance of OffsetDateTime
			 */
			setExecutionTime(executionTime)	{
				if((executionTime != null) && (!(executionTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executionTime EXPECTED TYPE: Date", null, null);
				}
				this.executionTime = executionTime;
				this.keyModified.set("execution_time", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		BluePrint : class{
			constructor(){

				this.transitionId=null;
				this.data=null;
				this.processInfo=null;
				this.transitions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the transitionId
			 * @returns {Long} A BigInt representing the transitionId
			 */
			getTransitionId()	{
				return this.transitionId;

			}

			/**
			 * The method to set the value to transitionId
			 * @param {Long} transitionId A BigInt
			 */
			setTransitionId(transitionId)	{
				if((transitionId != null) && (!(Object.prototype.toString.call(transitionId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionId EXPECTED TYPE: BigInt", null, null);
				}
				this.transitionId = transitionId;
				this.keyModified.set("transition_id", 1);

			}

			/**
			 * The method to get the data
			 * @returns {Record} An instance of Record
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {Record} data An instance of Record
			 */
			setData(data)	{
				if((data != null) && (!(data instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the processInfo
			 * @returns {ProcessInfo} An instance of ProcessInfo
			 */
			getProcessInfo()	{
				return this.processInfo;

			}

			/**
			 * The method to set the value to processInfo
			 * @param {ProcessInfo} processInfo An instance of ProcessInfo
			 */
			setProcessInfo(processInfo)	{
				if((processInfo != null) && (!(processInfo instanceof ZCRM.BluePrint.Model.ProcessInfo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processInfo EXPECTED TYPE: ProcessInfo", null, null);
				}
				this.processInfo = processInfo;
				this.keyModified.set("process_info", 1);

			}

			/**
			 * The method to get the transitions
			 * @returns {List} An Array representing the transitions
			 */
			getTransitions()	{
				return this.transitions;

			}

			/**
			 * The method to set the value to transitions
			 * @param {List} transitions An Array
			 */
			setTransitions(transitions)	{
				if((transitions != null) && (!(Object.prototype.toString.call(transitions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitions EXPECTED TYPE: Array", null, null);
				}
				this.transitions = transitions;
				this.keyModified.set("transitions", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Escalation : class{
			constructor(){

				this.days=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the days
			 * @returns {Integer} An Integer representing the days
			 */
			getDays()	{
				return this.days;

			}

			/**
			 * The method to set the value to days
			 * @param {Integer} days An Integer
			 */
			setDays(days)	{
				if((days != null) && (!(Object.prototype.toString.call(days) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: Integer", null, null);
				}
				this.days = days;
				this.keyModified.set("days", 1);

			}

			/**
			 * The method to get the status
			 * @returns {String} A String representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {String} status A String
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		SuccessResponse : class{
			constructor(){

				this.status=null;
				this.code=null;
				this.message=null;
				this.details=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the message
			 * @returns {Choice} An instance of Choice
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {Choice} message An instance of Choice
			 */
			setMessage(message)	{
				if((message != null) && (!(message instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		BodyWrapper : class{
			constructor(){

				this.blueprint=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the blueprint
			 * @returns {List} An Array representing the blueprint
			 */
			getBlueprint()	{
				return this.blueprint;

			}

			/**
			 * The method to set the value to blueprint
			 * @param {List} blueprint An Array
			 */
			setBlueprint(blueprint)	{
				if((blueprint != null) && (!(Object.prototype.toString.call(blueprint) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprint EXPECTED TYPE: Array", null, null);
				}
				this.blueprint = blueprint;
				this.keyModified.set("blueprint", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		NextTransition : class{
			constructor(){

				this.id=null;
				this.criteriaMatched=null;
				this.name=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the criteriaMatched
			 * @returns {Boolean} A Boolean representing the criteriaMatched
			 */
			getCriteriaMatched()	{
				return this.criteriaMatched;

			}

			/**
			 * The method to set the value to criteriaMatched
			 * @param {Boolean} criteriaMatched A Boolean
			 */
			setCriteriaMatched(criteriaMatched)	{
				if((criteriaMatched != null) && (!(Object.prototype.toString.call(criteriaMatched) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMatched EXPECTED TYPE: Boolean", null, null);
				}
				this.criteriaMatched = criteriaMatched;
				this.keyModified.set("criteria_matched", 1);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the type
			 * @returns {String} A String representing the type
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {String} type A String
			 */
			setType(type)	{
				if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ProcessInfo : class{
			constructor(){

				this.fieldId=null;
				this.isContinuous=null;
				this.apiName=null;
				this.continuous=null;
				this.fieldLabel=null;
				this.name=null;
				this.columnName=null;
				this.fieldValue=null;
				this.id=null;
				this.fieldName=null;
				this.escalation=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fieldId
			 * @returns {String} A String representing the fieldId
			 */
			getFieldId()	{
				return this.fieldId;

			}

			/**
			 * The method to set the value to fieldId
			 * @param {String} fieldId A String
			 */
			setFieldId(fieldId)	{
				if((fieldId != null) && (!(Object.prototype.toString.call(fieldId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldId EXPECTED TYPE: String", null, null);
				}
				this.fieldId = fieldId;
				this.keyModified.set("field_id", 1);

			}

			/**
			 * The method to get the isContinuous
			 * @returns {Boolean} A Boolean representing the isContinuous
			 */
			getIsContinuous()	{
				return this.isContinuous;

			}

			/**
			 * The method to set the value to isContinuous
			 * @param {Boolean} isContinuous A Boolean
			 */
			setIsContinuous(isContinuous)	{
				if((isContinuous != null) && (!(Object.prototype.toString.call(isContinuous) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isContinuous EXPECTED TYPE: Boolean", null, null);
				}
				this.isContinuous = isContinuous;
				this.keyModified.set("is_continuous", 1);

			}

			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

			}

			/**
			 * The method to set the value to apiName
			 * @param {String} apiName A String
			 */
			setAPIName(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.apiName = apiName;
				this.keyModified.set("api_name", 1);

			}

			/**
			 * The method to get the continuous
			 * @returns {Boolean} A Boolean representing the continuous
			 */
			getContinuous()	{
				return this.continuous;

			}

			/**
			 * The method to set the value to continuous
			 * @param {Boolean} continuous A Boolean
			 */
			setContinuous(continuous)	{
				if((continuous != null) && (!(Object.prototype.toString.call(continuous) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: continuous EXPECTED TYPE: Boolean", null, null);
				}
				this.continuous = continuous;
				this.keyModified.set("continuous", 1);

			}

			/**
			 * The method to get the fieldLabel
			 * @returns {String} A String representing the fieldLabel
			 */
			getFieldLabel()	{
				return this.fieldLabel;

			}

			/**
			 * The method to set the value to fieldLabel
			 * @param {String} fieldLabel A String
			 */
			setFieldLabel(fieldLabel)	{
				if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
				}
				this.fieldLabel = fieldLabel;
				this.keyModified.set("field_label", 1);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the columnName
			 * @returns {String} A String representing the columnName
			 */
			getColumnName()	{
				return this.columnName;

			}

			/**
			 * The method to set the value to columnName
			 * @param {String} columnName A String
			 */
			setColumnName(columnName)	{
				if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
				}
				this.columnName = columnName;
				this.keyModified.set("column_name", 1);

			}

			/**
			 * The method to get the fieldValue
			 * @returns {String} A String representing the fieldValue
			 */
			getFieldValue()	{
				return this.fieldValue;

			}

			/**
			 * The method to set the value to fieldValue
			 * @param {String} fieldValue A String
			 */
			setFieldValue(fieldValue)	{
				if((fieldValue != null) && (!(Object.prototype.toString.call(fieldValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldValue EXPECTED TYPE: String", null, null);
				}
				this.fieldValue = fieldValue;
				this.keyModified.set("field_value", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the fieldName
			 * @returns {String} A String representing the fieldName
			 */
			getFieldName()	{
				return this.fieldName;

			}

			/**
			 * The method to set the value to fieldName
			 * @param {String} fieldName A String
			 */
			setFieldName(fieldName)	{
				if((fieldName != null) && (!(Object.prototype.toString.call(fieldName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldName EXPECTED TYPE: String", null, null);
				}
				this.fieldName = fieldName;
				this.keyModified.set("field_name", 1);

			}

			/**
			 * The method to get the escalation
			 * @returns {Escalation} An instance of Escalation
			 */
			getEscalation()	{
				return this.escalation;

			}

			/**
			 * The method to set the value to escalation
			 * @param {Escalation} escalation An instance of Escalation
			 */
			setEscalation(escalation)	{
				if((escalation != null) && (!(escalation instanceof ZCRM.BluePrint.Model.Escalation))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: escalation EXPECTED TYPE: Escalation", null, null);
				}
				this.escalation = escalation;
				this.keyModified.set("escalation", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ResponseWrapper : class{
			constructor(){

				this.blueprint=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the blueprint
			 * @returns {BluePrint} An instance of BluePrint
			 */
			getBlueprint()	{
				return this.blueprint;

			}

			/**
			 * The method to set the value to blueprint
			 * @param {BluePrint} blueprint An instance of BluePrint
			 */
			setBlueprint(blueprint)	{
				if((blueprint != null) && (!(blueprint instanceof ZCRM.BluePrint.Model.BluePrint))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprint EXPECTED TYPE: BluePrint", null, null);
				}
				this.blueprint = blueprint;
				this.keyModified.set("blueprint", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		APIException : class{
			constructor(){

				this.status=null;
				this.code=null;
				this.message=null;
				this.details=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the message
			 * @returns {Choice} An instance of Choice
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {Choice} message An instance of Choice
			 */
			setMessage(message)	{
				if((message != null) && (!(message instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ValidationError : class{
			constructor(){

				this.apiName=null;
				this.infoMessage=null;
				this.message=null;
				this.index=null;
				this.parentAPIName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

			}

			/**
			 * The method to set the value to apiName
			 * @param {String} apiName A String
			 */
			setAPIName(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.apiName = apiName;
				this.keyModified.set("api_name", 1);

			}

			/**
			 * The method to get the infoMessage
			 * @returns {String} A String representing the infoMessage
			 */
			getInfoMessage()	{
				return this.infoMessage;

			}

			/**
			 * The method to set the value to infoMessage
			 * @param {String} infoMessage A String
			 */
			setInfoMessage(infoMessage)	{
				if((infoMessage != null) && (!(Object.prototype.toString.call(infoMessage) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: infoMessage EXPECTED TYPE: String", null, null);
				}
				this.infoMessage = infoMessage;
				this.keyModified.set("info_message", 1);

			}

			/**
			 * The method to get the message
			 * @returns {String} A String representing the message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {String} message A String
			 */
			setMessage(message)	{
				if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the index
			 * @returns {Integer} An Integer representing the index
			 */
			getIndex()	{
				return this.index;

			}

			/**
			 * The method to set the value to index
			 * @param {Integer} index An Integer
			 */
			setIndex(index)	{
				if((index != null) && (!(Object.prototype.toString.call(index) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: index EXPECTED TYPE: Integer", null, null);
				}
				this.index = index;
				this.keyModified.set("index", 1);

			}

			/**
			 * The method to get the parentapiName
			 * @returns {String} A String representing the parentAPIName
			 */
			getParentAPIName()	{
				return this.parentAPIName;

			}

			/**
			 * The method to set the value to parentapiName
			 * @param {String} parentAPIName A String
			 */
			setParentAPIName(parentAPIName)	{
				if((parentAPIName != null) && (!(Object.prototype.toString.call(parentAPIName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentAPIName EXPECTED TYPE: String", null, null);
				}
				this.parentAPIName = parentAPIName;
				this.keyModified.set("parent_api_name", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Field : class{
			constructor(){

				this.systemMandatory=null;
				this.webhook=null;
				this.private1=null;
				this.layouts=null;
				this.profiles=null;
				this.sequenceNumber=null;
				this.content=null;
				this.columnName=null;
				this.type=null;
				this.transitionSequence=null;
				this.personalityName=null;
				this.message=null;
				this.mandatory=null;
				this.criteria=null;
				this.relatedDetails=null;
				this.jsonType=null;
				this.crypt=null;
				this.fieldLabel=null;
				this.tooltip=null;
				this.createdSource=null;
				this.fieldReadOnly=null;
				this.displayLabel=null;
				this.uiType=null;
				this.readOnly=null;
				this.associationDetails=null;
				this.quickSequenceNumber=null;
				this.businesscardSupported=null;
				this.multiModuleLookup=null;
				this.currency=null;
				this.id=null;
				this.customField=null;
				this.lookup=null;
				this.filterable=null;
				this.visible=null;
				this.pickListValuesSortedLexically=null;
				this.length=null;
				this.viewType=null;
				this.subform=null;
				this.apiName=null;
				this.sortable=null;
				this.unique=null;
				this.dataType=null;
				this.formula=null;
				this.decimalPlace=null;
				this.massUpdate=null;
				this.blueprintSupported=null;
				this.multiselectlookup=null;
				this.multiuserlookup=null;
				this.pickListValues=null;
				this.autoNumber=null;
				this.defaultValue=null;
				this.validationRule=null;
				this.convertMapping=null;
				this.external=null;
				this.historyTracking=null;
				this.displayType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the systemMandatory
			 * @returns {Boolean} A Boolean representing the systemMandatory
			 */
			getSystemMandatory()	{
				return this.systemMandatory;

			}

			/**
			 * The method to set the value to systemMandatory
			 * @param {Boolean} systemMandatory A Boolean
			 */
			setSystemMandatory(systemMandatory)	{
				if((systemMandatory != null) && (!(Object.prototype.toString.call(systemMandatory) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemMandatory EXPECTED TYPE: Boolean", null, null);
				}
				this.systemMandatory = systemMandatory;
				this.keyModified.set("system_mandatory", 1);

			}

			/**
			 * The method to get the webhook
			 * @returns {Boolean} A Boolean representing the webhook
			 */
			getWebhook()	{
				return this.webhook;

			}

			/**
			 * The method to set the value to webhook
			 * @param {Boolean} webhook A Boolean
			 */
			setWebhook(webhook)	{
				if((webhook != null) && (!(Object.prototype.toString.call(webhook) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webhook EXPECTED TYPE: Boolean", null, null);
				}
				this.webhook = webhook;
				this.keyModified.set("webhook", 1);

			}

			/**
			 * The method to get the private
			 * @returns {Private} An instance of Private
			 */
			getPrivate()	{
				return this.private1;

			}

			/**
			 * The method to set the value to private
			 * @param {Private} private1 An instance of Private
			 */
			setPrivate(private1)	{
				if((private1 != null) && (!(private1 instanceof ZCRM.Field.Model.Private))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: private1 EXPECTED TYPE: Private", null, null);
				}
				this.private1 = private1;
				this.keyModified.set("private", 1);

			}

			/**
			 * The method to get the layouts
			 * @returns {Layout} An instance of Layout
			 */
			getLayouts()	{
				return this.layouts;

			}

			/**
			 * The method to set the value to layouts
			 * @param {Layout} layouts An instance of Layout
			 */
			setLayouts(layouts)	{
				if((layouts != null) && (!(layouts instanceof ZCRM.Layout.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Layout", null, null);
				}
				this.layouts = layouts;
				this.keyModified.set("layouts", 1);

			}

			/**
			 * The method to get the profiles
			 * @returns {List} An Array representing the profiles
			 */
			getProfiles()	{
				return this.profiles;

			}

			/**
			 * The method to set the value to profiles
			 * @param {List} profiles An Array
			 */
			setProfiles(profiles)	{
				if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
				}
				this.profiles = profiles;
				this.keyModified.set("profiles", 1);

			}

			/**
			 * The method to get the sequenceNumber
			 * @returns {Integer} An Integer representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {Integer} sequenceNumber An Integer
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

			}

			/**
			 * The method to get the content
			 * @returns {String} A String representing the content
			 */
			getContent()	{
				return this.content;

			}

			/**
			 * The method to set the value to content
			 * @param {String} content A String
			 */
			setContent(content)	{
				if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
				}
				this.content = content;
				this.keyModified.set("content", 1);

			}

			/**
			 * The method to get the columnName
			 * @returns {String} A String representing the columnName
			 */
			getColumnName()	{
				return this.columnName;

			}

			/**
			 * The method to set the value to columnName
			 * @param {String} columnName A String
			 */
			setColumnName(columnName)	{
				if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
				}
				this.columnName = columnName;
				this.keyModified.set("column_name", 1);

			}

			/**
			 * The method to get the type
			 * @returns {String} A String representing the type
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {String} type A String
			 */
			setType(type)	{
				if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
				}
				this.type = type;
				this.keyModified.set("_type", 1);

			}

			/**
			 * The method to get the transitionSequence
			 * @returns {Integer} An Integer representing the transitionSequence
			 */
			getTransitionSequence()	{
				return this.transitionSequence;

			}

			/**
			 * The method to set the value to transitionSequence
			 * @param {Integer} transitionSequence An Integer
			 */
			setTransitionSequence(transitionSequence)	{
				if((transitionSequence != null) && (!(Object.prototype.toString.call(transitionSequence) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionSequence EXPECTED TYPE: Integer", null, null);
				}
				this.transitionSequence = transitionSequence;
				this.keyModified.set("transition_sequence", 1);

			}

			/**
			 * The method to get the personalityName
			 * @returns {String} A String representing the personalityName
			 */
			getPersonalityName()	{
				return this.personalityName;

			}

			/**
			 * The method to set the value to personalityName
			 * @param {String} personalityName A String
			 */
			setPersonalityName(personalityName)	{
				if((personalityName != null) && (!(Object.prototype.toString.call(personalityName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityName EXPECTED TYPE: String", null, null);
				}
				this.personalityName = personalityName;
				this.keyModified.set("personality_name", 1);

			}

			/**
			 * The method to get the message
			 * @returns {String} A String representing the message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {String} message A String
			 */
			setMessage(message)	{
				if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the mandatory
			 * @returns {Boolean} A Boolean representing the mandatory
			 */
			getMandatory()	{
				return this.mandatory;

			}

			/**
			 * The method to set the value to mandatory
			 * @param {Boolean} mandatory A Boolean
			 */
			setMandatory(mandatory)	{
				if((mandatory != null) && (!(Object.prototype.toString.call(mandatory) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandatory EXPECTED TYPE: Boolean", null, null);
				}
				this.mandatory = mandatory;
				this.keyModified.set("mandatory", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Criteria} An instance of Criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Criteria} criteria An instance of Criteria
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(criteria instanceof ZCRM.CustomView.Model.Criteria))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

			}

			/**
			 * The method to get the relatedDetails
			 * @returns {RelatedDetails} An instance of RelatedDetails
			 */
			getRelatedDetails()	{
				return this.relatedDetails;

			}

			/**
			 * The method to set the value to relatedDetails
			 * @param {RelatedDetails} relatedDetails An instance of RelatedDetails
			 */
			setRelatedDetails(relatedDetails)	{
				if((relatedDetails != null) && (!(relatedDetails instanceof ZCRM.Field.Model.RelatedDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedDetails EXPECTED TYPE: RelatedDetails", null, null);
				}
				this.relatedDetails = relatedDetails;
				this.keyModified.set("related_details", 1);

			}

			/**
			 * The method to get the jsonType
			 * @returns {String} A String representing the jsonType
			 */
			getJsonType()	{
				return this.jsonType;

			}

			/**
			 * The method to set the value to jsonType
			 * @param {String} jsonType A String
			 */
			setJsonType(jsonType)	{
				if((jsonType != null) && (!(Object.prototype.toString.call(jsonType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonType EXPECTED TYPE: String", null, null);
				}
				this.jsonType = jsonType;
				this.keyModified.set("json_type", 1);

			}

			/**
			 * The method to get the crypt
			 * @returns {Crypt} An instance of Crypt
			 */
			getCrypt()	{
				return this.crypt;

			}

			/**
			 * The method to set the value to crypt
			 * @param {Crypt} crypt An instance of Crypt
			 */
			setCrypt(crypt)	{
				if((crypt != null) && (!(crypt instanceof ZCRM.Field.Model.Crypt))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
				}
				this.crypt = crypt;
				this.keyModified.set("crypt", 1);

			}

			/**
			 * The method to get the fieldLabel
			 * @returns {String} A String representing the fieldLabel
			 */
			getFieldLabel()	{
				return this.fieldLabel;

			}

			/**
			 * The method to set the value to fieldLabel
			 * @param {String} fieldLabel A String
			 */
			setFieldLabel(fieldLabel)	{
				if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
				}
				this.fieldLabel = fieldLabel;
				this.keyModified.set("field_label", 1);

			}

			/**
			 * The method to get the tooltip
			 * @returns {ToolTip} An instance of ToolTip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {ToolTip} tooltip An instance of ToolTip
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(tooltip instanceof ZCRM.Field.Model.ToolTip))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: ToolTip", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

			}

			/**
			 * The method to get the createdSource
			 * @returns {String} A String representing the createdSource
			 */
			getCreatedSource()	{
				return this.createdSource;

			}

			/**
			 * The method to set the value to createdSource
			 * @param {String} createdSource A String
			 */
			setCreatedSource(createdSource)	{
				if((createdSource != null) && (!(Object.prototype.toString.call(createdSource) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdSource EXPECTED TYPE: String", null, null);
				}
				this.createdSource = createdSource;
				this.keyModified.set("created_source", 1);

			}

			/**
			 * The method to get the fieldReadOnly
			 * @returns {Boolean} A Boolean representing the fieldReadOnly
			 */
			getFieldReadOnly()	{
				return this.fieldReadOnly;

			}

			/**
			 * The method to set the value to fieldReadOnly
			 * @param {Boolean} fieldReadOnly A Boolean
			 */
			setFieldReadOnly(fieldReadOnly)	{
				if((fieldReadOnly != null) && (!(Object.prototype.toString.call(fieldReadOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldReadOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.fieldReadOnly = fieldReadOnly;
				this.keyModified.set("field_read_only", 1);

			}

			/**
			 * The method to get the displayLabel
			 * @returns {String} A String representing the displayLabel
			 */
			getDisplayLabel()	{
				return this.displayLabel;

			}

			/**
			 * The method to set the value to displayLabel
			 * @param {String} displayLabel A String
			 */
			setDisplayLabel(displayLabel)	{
				if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
				}
				this.displayLabel = displayLabel;
				this.keyModified.set("display_label", 1);

			}

			/**
			 * The method to get the uiType
			 * @returns {Integer} An Integer representing the uiType
			 */
			getUiType()	{
				return this.uiType;

			}

			/**
			 * The method to set the value to uiType
			 * @param {Integer} uiType An Integer
			 */
			setUiType(uiType)	{
				if((uiType != null) && (!(Object.prototype.toString.call(uiType) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: uiType EXPECTED TYPE: Integer", null, null);
				}
				this.uiType = uiType;
				this.keyModified.set("ui_type", 1);

			}

			/**
			 * The method to get the readOnly
			 * @returns {Boolean} A Boolean representing the readOnly
			 */
			getReadOnly()	{
				return this.readOnly;

			}

			/**
			 * The method to set the value to readOnly
			 * @param {Boolean} readOnly A Boolean
			 */
			setReadOnly(readOnly)	{
				if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.readOnly = readOnly;
				this.keyModified.set("read_only", 1);

			}

			/**
			 * The method to get the associationDetails
			 * @returns {AssociationDetails} An instance of AssociationDetails
			 */
			getAssociationDetails()	{
				return this.associationDetails;

			}

			/**
			 * The method to set the value to associationDetails
			 * @param {AssociationDetails} associationDetails An instance of AssociationDetails
			 */
			setAssociationDetails(associationDetails)	{
				if((associationDetails != null) && (!(associationDetails instanceof ZCRM.Field.Model.AssociationDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
				}
				this.associationDetails = associationDetails;
				this.keyModified.set("association_details", 1);

			}

			/**
			 * The method to get the quickSequenceNumber
			 * @returns {Integer} An Integer representing the quickSequenceNumber
			 */
			getQuickSequenceNumber()	{
				return this.quickSequenceNumber;

			}

			/**
			 * The method to set the value to quickSequenceNumber
			 * @param {Integer} quickSequenceNumber An Integer
			 */
			setQuickSequenceNumber(quickSequenceNumber)	{
				if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.quickSequenceNumber = quickSequenceNumber;
				this.keyModified.set("quick_sequence_number", 1);

			}

			/**
			 * The method to get the businesscardSupported
			 * @returns {Boolean} A Boolean representing the businesscardSupported
			 */
			getBusinesscardSupported()	{
				return this.businesscardSupported;

			}

			/**
			 * The method to set the value to businesscardSupported
			 * @param {Boolean} businesscardSupported A Boolean
			 */
			setBusinesscardSupported(businesscardSupported)	{
				if((businesscardSupported != null) && (!(Object.prototype.toString.call(businesscardSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businesscardSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.businesscardSupported = businesscardSupported;
				this.keyModified.set("businesscard_supported", 1);

			}

			/**
			 * The method to get the multiModuleLookup
			 * @returns {MultiModuleLookup} An instance of MultiModuleLookup
			 */
			getMultiModuleLookup()	{
				return this.multiModuleLookup;

			}

			/**
			 * The method to set the value to multiModuleLookup
			 * @param {MultiModuleLookup} multiModuleLookup An instance of MultiModuleLookup
			 */
			setMultiModuleLookup(multiModuleLookup)	{
				if((multiModuleLookup != null) && (!(multiModuleLookup instanceof ZCRM.Field.Model.MultiModuleLookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiModuleLookup EXPECTED TYPE: MultiModuleLookup", null, null);
				}
				this.multiModuleLookup = multiModuleLookup;
				this.keyModified.set("multi_module_lookup", 1);

			}

			/**
			 * The method to get the currency
			 * @returns {Currency} An instance of Currency
			 */
			getCurrency()	{
				return this.currency;

			}

			/**
			 * The method to set the value to currency
			 * @param {Currency} currency An instance of Currency
			 */
			setCurrency(currency)	{
				if((currency != null) && (!(currency instanceof ZCRM.Field.Model.Currency))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
				}
				this.currency = currency;
				this.keyModified.set("currency", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the customField
			 * @returns {Boolean} A Boolean representing the customField
			 */
			getCustomField()	{
				return this.customField;

			}

			/**
			 * The method to set the value to customField
			 * @param {Boolean} customField A Boolean
			 */
			setCustomField(customField)	{
				if((customField != null) && (!(Object.prototype.toString.call(customField) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customField EXPECTED TYPE: Boolean", null, null);
				}
				this.customField = customField;
				this.keyModified.set("custom_field", 1);

			}

			/**
			 * The method to get the lookup
			 * @returns {Module} An instance of Module
			 */
			getLookup()	{
				return this.lookup;

			}

			/**
			 * The method to set the value to lookup
			 * @param {Module} lookup An instance of Module
			 */
			setLookup(lookup)	{
				if((lookup != null) && (!(lookup instanceof ZCRM.Field.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Module", null, null);
				}
				this.lookup = lookup;
				this.keyModified.set("lookup", 1);

			}

			/**
			 * The method to get the filterable
			 * @returns {Boolean} A Boolean representing the filterable
			 */
			getFilterable()	{
				return this.filterable;

			}

			/**
			 * The method to set the value to filterable
			 * @param {Boolean} filterable A Boolean
			 */
			setFilterable(filterable)	{
				if((filterable != null) && (!(Object.prototype.toString.call(filterable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterable EXPECTED TYPE: Boolean", null, null);
				}
				this.filterable = filterable;
				this.keyModified.set("filterable", 1);

			}

			/**
			 * The method to get the visible
			 * @returns {Boolean} A Boolean representing the visible
			 */
			getVisible()	{
				return this.visible;

			}

			/**
			 * The method to set the value to visible
			 * @param {Boolean} visible A Boolean
			 */
			setVisible(visible)	{
				if((visible != null) && (!(Object.prototype.toString.call(visible) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visible EXPECTED TYPE: Boolean", null, null);
				}
				this.visible = visible;
				this.keyModified.set("visible", 1);

			}

			/**
			 * The method to get the pickListValuesSortedLexically
			 * @returns {Boolean} A Boolean representing the pickListValuesSortedLexically
			 */
			getPickListValuesSortedLexically()	{
				return this.pickListValuesSortedLexically;

			}

			/**
			 * The method to set the value to pickListValuesSortedLexically
			 * @param {Boolean} pickListValuesSortedLexically A Boolean
			 */
			setPickListValuesSortedLexically(pickListValuesSortedLexically)	{
				if((pickListValuesSortedLexically != null) && (!(Object.prototype.toString.call(pickListValuesSortedLexically) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValuesSortedLexically EXPECTED TYPE: Boolean", null, null);
				}
				this.pickListValuesSortedLexically = pickListValuesSortedLexically;
				this.keyModified.set("pick_list_values_sorted_lexically", 1);

			}

			/**
			 * The method to get the length
			 * @returns {Integer} An Integer representing the length
			 */
			getLength()	{
				return this.length;

			}

			/**
			 * The method to set the value to length
			 * @param {Integer} length An Integer
			 */
			setLength(length)	{
				if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: Integer", null, null);
				}
				this.length = length;
				this.keyModified.set("length", 1);

			}

			/**
			 * The method to get the viewType
			 * @returns {ViewType} An instance of ViewType
			 */
			getViewType()	{
				return this.viewType;

			}

			/**
			 * The method to set the value to viewType
			 * @param {ViewType} viewType An instance of ViewType
			 */
			setViewType(viewType)	{
				if((viewType != null) && (!(viewType instanceof ZCRM.Field.Model.ViewType))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

			}

			/**
			 * The method to get the subform
			 * @returns {Module} An instance of Module
			 */
			getSubform()	{
				return this.subform;

			}

			/**
			 * The method to set the value to subform
			 * @param {Module} subform An instance of Module
			 */
			setSubform(subform)	{
				if((subform != null) && (!(subform instanceof ZCRM.Field.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subform EXPECTED TYPE: Module", null, null);
				}
				this.subform = subform;
				this.keyModified.set("subform", 1);

			}

			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

			}

			/**
			 * The method to set the value to apiName
			 * @param {String} apiName A String
			 */
			setAPIName(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.apiName = apiName;
				this.keyModified.set("api_name", 1);

			}

			/**
			 * The method to get the sortable
			 * @returns {Boolean} A Boolean representing the sortable
			 */
			getSortable()	{
				return this.sortable;

			}

			/**
			 * The method to set the value to sortable
			 * @param {Boolean} sortable A Boolean
			 */
			setSortable(sortable)	{
				if((sortable != null) && (!(Object.prototype.toString.call(sortable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortable EXPECTED TYPE: Boolean", null, null);
				}
				this.sortable = sortable;
				this.keyModified.set("sortable", 1);

			}

			/**
			 * The method to get the unique
			 * @returns {Unique} An instance of Unique
			 */
			getUnique()	{
				return this.unique;

			}

			/**
			 * The method to set the value to unique
			 * @param {Unique} unique An instance of Unique
			 */
			setUnique(unique)	{
				if((unique != null) && (!(unique instanceof ZCRM.Field.Model.Unique))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unique EXPECTED TYPE: Unique", null, null);
				}
				this.unique = unique;
				this.keyModified.set("unique", 1);

			}

			/**
			 * The method to get the dataType
			 * @returns {String} A String representing the dataType
			 */
			getDataType()	{
				return this.dataType;

			}

			/**
			 * The method to set the value to dataType
			 * @param {String} dataType A String
			 */
			setDataType(dataType)	{
				if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
				}
				this.dataType = dataType;
				this.keyModified.set("data_type", 1);

			}

			/**
			 * The method to get the formula
			 * @returns {Formula} An instance of Formula
			 */
			getFormula()	{
				return this.formula;

			}

			/**
			 * The method to set the value to formula
			 * @param {Formula} formula An instance of Formula
			 */
			setFormula(formula)	{
				if((formula != null) && (!(formula instanceof ZCRM.Field.Model.Formula))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
				}
				this.formula = formula;
				this.keyModified.set("formula", 1);

			}

			/**
			 * The method to get the decimalPlace
			 * @returns {Integer} An Integer representing the decimalPlace
			 */
			getDecimalPlace()	{
				return this.decimalPlace;

			}

			/**
			 * The method to set the value to decimalPlace
			 * @param {Integer} decimalPlace An Integer
			 */
			setDecimalPlace(decimalPlace)	{
				if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: Integer", null, null);
				}
				this.decimalPlace = decimalPlace;
				this.keyModified.set("decimal_place", 1);

			}

			/**
			 * The method to get the massUpdate
			 * @returns {Boolean} A Boolean representing the massUpdate
			 */
			getMassUpdate()	{
				return this.massUpdate;

			}

			/**
			 * The method to set the value to massUpdate
			 * @param {Boolean} massUpdate A Boolean
			 */
			setMassUpdate(massUpdate)	{
				if((massUpdate != null) && (!(Object.prototype.toString.call(massUpdate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: massUpdate EXPECTED TYPE: Boolean", null, null);
				}
				this.massUpdate = massUpdate;
				this.keyModified.set("mass_update", 1);

			}

			/**
			 * The method to get the blueprintSupported
			 * @returns {Boolean} A Boolean representing the blueprintSupported
			 */
			getBlueprintSupported()	{
				return this.blueprintSupported;

			}

			/**
			 * The method to set the value to blueprintSupported
			 * @param {Boolean} blueprintSupported A Boolean
			 */
			setBlueprintSupported(blueprintSupported)	{
				if((blueprintSupported != null) && (!(Object.prototype.toString.call(blueprintSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprintSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.blueprintSupported = blueprintSupported;
				this.keyModified.set("blueprint_supported", 1);

			}

			/**
			 * The method to get the multiselectlookup
			 * @returns {MultiSelectLookup} An instance of MultiSelectLookup
			 */
			getMultiselectlookup()	{
				return this.multiselectlookup;

			}

			/**
			 * The method to set the value to multiselectlookup
			 * @param {MultiSelectLookup} multiselectlookup An instance of MultiSelectLookup
			 */
			setMultiselectlookup(multiselectlookup)	{
				if((multiselectlookup != null) && (!(multiselectlookup instanceof ZCRM.Field.Model.MultiSelectLookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: MultiSelectLookup", null, null);
				}
				this.multiselectlookup = multiselectlookup;
				this.keyModified.set("multiselectlookup", 1);

			}

			/**
			 * The method to get the multiuserlookup
			 * @returns {MultiUserLookup} An instance of MultiUserLookup
			 */
			getMultiuserlookup()	{
				return this.multiuserlookup;

			}

			/**
			 * The method to set the value to multiuserlookup
			 * @param {MultiUserLookup} multiuserlookup An instance of MultiUserLookup
			 */
			setMultiuserlookup(multiuserlookup)	{
				if((multiuserlookup != null) && (!(multiuserlookup instanceof ZCRM.Field.Model.MultiUserLookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiuserlookup EXPECTED TYPE: MultiUserLookup", null, null);
				}
				this.multiuserlookup = multiuserlookup;
				this.keyModified.set("multiuserlookup", 1);

			}

			/**
			 * The method to get the pickListValues
			 * @returns {List} An Array representing the pickListValues
			 */
			getPickListValues()	{
				return this.pickListValues;

			}

			/**
			 * The method to set the value to pickListValues
			 * @param {List} pickListValues An Array
			 */
			setPickListValues(pickListValues)	{
				if((pickListValues != null) && (!(Object.prototype.toString.call(pickListValues) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValues EXPECTED TYPE: Array", null, null);
				}
				this.pickListValues = pickListValues;
				this.keyModified.set("pick_list_values", 1);

			}

			/**
			 * The method to get the autoNumber
			 * @returns {AutoNumber} An instance of AutoNumber
			 */
			getAutoNumber()	{
				return this.autoNumber;

			}

			/**
			 * The method to set the value to autoNumber
			 * @param {AutoNumber} autoNumber An instance of AutoNumber
			 */
			setAutoNumber(autoNumber)	{
				if((autoNumber != null) && (!(autoNumber instanceof ZCRM.Field.Model.AutoNumber))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber EXPECTED TYPE: AutoNumber", null, null);
				}
				this.autoNumber = autoNumber;
				this.keyModified.set("auto_number", 1);

			}

			/**
			 * The method to get the defaultValue
			 * @returns {String} A String representing the defaultValue
			 */
			getDefaultValue()	{
				return this.defaultValue;

			}

			/**
			 * The method to set the value to defaultValue
			 * @param {String} defaultValue A String
			 */
			setDefaultValue(defaultValue)	{
				if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: String", null, null);
				}
				this.defaultValue = defaultValue;
				this.keyModified.set("default_value", 1);

			}

			/**
			 * The method to get the validationRule
			 * @returns {Map} A Map representing the validationRule
			 */
			getValidationRule()	{
				return this.validationRule;

			}

			/**
			 * The method to set the value to validationRule
			 * @param {Map} validationRule A Map
			 */
			setValidationRule(validationRule)	{
				if((validationRule != null) && (!(Object.prototype.toString.call(validationRule) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: validationRule EXPECTED TYPE: Map", null, null);
				}
				this.validationRule = validationRule;
				this.keyModified.set("validation_rule", 1);

			}

			/**
			 * The method to get the convertMapping
			 * @returns {Map} A Map representing the convertMapping
			 */
			getConvertMapping()	{
				return this.convertMapping;

			}

			/**
			 * The method to set the value to convertMapping
			 * @param {Map} convertMapping A Map
			 */
			setConvertMapping(convertMapping)	{
				if((convertMapping != null) && (!(Object.prototype.toString.call(convertMapping) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: Map", null, null);
				}
				this.convertMapping = convertMapping;
				this.keyModified.set("convert_mapping", 1);

			}

			/**
			 * The method to get the external
			 * @returns {External} An instance of External
			 */
			getExternal()	{
				return this.external;

			}

			/**
			 * The method to set the value to external
			 * @param {External} external An instance of External
			 */
			setExternal(external)	{
				if((external != null) && (!(external instanceof ZCRM.Field.Model.External))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: external EXPECTED TYPE: External", null, null);
				}
				this.external = external;
				this.keyModified.set("external", 1);

			}

			/**
			 * The method to get the historyTracking
			 * @returns {HistoryTracking} An instance of HistoryTracking
			 */
			getHistoryTracking()	{
				return this.historyTracking;

			}

			/**
			 * The method to set the value to historyTracking
			 * @param {HistoryTracking} historyTracking An instance of HistoryTracking
			 */
			setHistoryTracking(historyTracking)	{
				if((historyTracking != null) && (!(historyTracking instanceof ZCRM.Field.Model.HistoryTracking))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: HistoryTracking", null, null);
				}
				this.historyTracking = historyTracking;
				this.keyModified.set("history_tracking", 1);

			}

			/**
			 * The method to get the displayType
			 * @returns {Choice} An instance of Choice
			 */
			getDisplayType()	{
				return this.displayType;

			}

			/**
			 * The method to set the value to displayType
			 * @param {Choice} displayType An instance of Choice
			 */
			setDisplayType(displayType)	{
				if((displayType != null) && (!(displayType instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayType EXPECTED TYPE: Choice", null, null);
				}
				this.displayType = displayType;
				this.keyModified.set("display_type", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		}
	},
	Operations : class {


		/**
		 * Creates an instance of BluePrintOperations with the given parameters
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 */
		constructor(recordId, moduleAPIName){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.recordId = recordId;
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get blueprint
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getBlueprint(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/blueprint");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("BluePrint.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update blueprint
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateBlueprint(request){
			if((request != null) && (!(request instanceof ZCRM.BluePrint.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/blueprint");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("BluePrint.Model.ActionResponse", "application/json");

		}

	},

}