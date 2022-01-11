ZCRM.SendMail = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		Template : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

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

		ResponseWrapper : class{
			constructor(){

				this.fromAddresses=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fromAddresses
			 * @returns {List} An Array representing the fromAddresses
			 */
			getFromAddresses()	{
				return this.fromAddresses;

			}

			/**
			 * The method to set the value to fromAddresses
			 * @param {List} fromAddresses An Array
			 */
			setFromAddresses(fromAddresses)	{
				if((fromAddresses != null) && (!(Object.prototype.toString.call(fromAddresses) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddresses EXPECTED TYPE: Array", null, null);
				}
				this.fromAddresses = fromAddresses;
				this.keyModified.set("from_addresses", 1);

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

		Mail : class{
			constructor(){

				this.from=null;
				this.to=null;
				this.cc=null;
				this.bcc=null;
				this.replyTo=null;
				this.template=null;
				this.email=null;
				this.id=null;
				this.inReplyTo=null;
				this.scheduledTime=null;
				this.subject=null;
				this.content=null;
				this.paperType=null;
				this.viewType=null;
				this.mailFormat=null;
				this.consentEmail=null;
				this.orgEmail=null;
				this.attachments=null;
				this.inventoryDetails=null;
				this.dataSubjectRequest=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the from
			 * @returns {UserAddress} An instance of UserAddress
			 */
			getFrom()	{
				return this.from;

			}

			/**
			 * The method to set the value to from
			 * @param {UserAddress} from An instance of UserAddress
			 */
			setFrom(from)	{
				if((from != null) && (!(from instanceof ZCRM.SendMail.Model.UserAddress))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: UserAddress", null, null);
				}
				this.from = from;
				this.keyModified.set("from", 1);

			}

			/**
			 * The method to get the to
			 * @returns {List} An Array representing the to
			 */
			getTo()	{
				return this.to;

			}

			/**
			 * The method to set the value to to
			 * @param {List} to An Array
			 */
			setTo(to)	{
				if((to != null) && (!(Object.prototype.toString.call(to) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: Array", null, null);
				}
				this.to = to;
				this.keyModified.set("to", 1);

			}

			/**
			 * The method to get the cc
			 * @returns {List} An Array representing the cc
			 */
			getCc()	{
				return this.cc;

			}

			/**
			 * The method to set the value to cc
			 * @param {List} cc An Array
			 */
			setCc(cc)	{
				if((cc != null) && (!(Object.prototype.toString.call(cc) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cc EXPECTED TYPE: Array", null, null);
				}
				this.cc = cc;
				this.keyModified.set("cc", 1);

			}

			/**
			 * The method to get the bcc
			 * @returns {List} An Array representing the bcc
			 */
			getBcc()	{
				return this.bcc;

			}

			/**
			 * The method to set the value to bcc
			 * @param {List} bcc An Array
			 */
			setBcc(bcc)	{
				if((bcc != null) && (!(Object.prototype.toString.call(bcc) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bcc EXPECTED TYPE: Array", null, null);
				}
				this.bcc = bcc;
				this.keyModified.set("bcc", 1);

			}

			/**
			 * The method to get the replyTo
			 * @returns {UserAddress} An instance of UserAddress
			 */
			getReplyTo()	{
				return this.replyTo;

			}

			/**
			 * The method to set the value to replyTo
			 * @param {UserAddress} replyTo An instance of UserAddress
			 */
			setReplyTo(replyTo)	{
				if((replyTo != null) && (!(replyTo instanceof ZCRM.SendMail.Model.UserAddress))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: UserAddress", null, null);
				}
				this.replyTo = replyTo;
				this.keyModified.set("reply_to", 1);

			}

			/**
			 * The method to get the template
			 * @returns {Template} An instance of Template
			 */
			getTemplate()	{
				return this.template;

			}

			/**
			 * The method to set the value to template
			 * @param {Template} template An instance of Template
			 */
			setTemplate(template)	{
				this.template = template;
				this.keyModified.set("template", 1);

			}

			/**
			 * The method to get the email
			 * @returns {Integer} An Integer representing the email
			 */
			getEmail()	{
				return this.email;

			}

			/**
			 * The method to set the value to email
			 * @param {Integer} email An Integer
			 */
			setEmail(email)	{
				if((email != null) && (!(Object.prototype.toString.call(email) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: Integer", null, null);
				}
				this.email = email;
				this.keyModified.set("email", 1);

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
			 * The method to get the inReplyTo
			 * @returns {String} A String representing the inReplyTo
			 */
			getInReplyTo()	{
				return this.inReplyTo;

			}

			/**
			 * The method to set the value to inReplyTo
			 * @param {String} inReplyTo A String
			 */
			setInReplyTo(inReplyTo)	{
				if((inReplyTo != null) && (!(Object.prototype.toString.call(inReplyTo) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inReplyTo EXPECTED TYPE: String", null, null);
				}
				this.inReplyTo = inReplyTo;
				this.keyModified.set("in_reply_to", 1);

			}

			/**
			 * The method to get the scheduledTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getScheduledTime()	{
				return this.scheduledTime;

			}

			/**
			 * The method to set the value to scheduledTime
			 * @param {OffsetDateTime} scheduledTime An instance of OffsetDateTime
			 */
			setScheduledTime(scheduledTime)	{
				if((scheduledTime != null) && (!(scheduledTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduledTime EXPECTED TYPE: Date", null, null);
				}
				this.scheduledTime = scheduledTime;
				this.keyModified.set("scheduled_time", 1);

			}

			/**
			 * The method to get the subject
			 * @returns {String} A String representing the subject
			 */
			getSubject()	{
				return this.subject;

			}

			/**
			 * The method to set the value to subject
			 * @param {String} subject A String
			 */
			setSubject(subject)	{
				if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
				}
				this.subject = subject;
				this.keyModified.set("subject", 1);

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
			 * The method to get the paperType
			 * @returns {String} A String representing the paperType
			 */
			getPaperType()	{
				return this.paperType;

			}

			/**
			 * The method to set the value to paperType
			 * @param {String} paperType A String
			 */
			setPaperType(paperType)	{
				if((paperType != null) && (!(Object.prototype.toString.call(paperType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paperType EXPECTED TYPE: String", null, null);
				}
				this.paperType = paperType;
				this.keyModified.set("paper_type", 1);

			}

			/**
			 * The method to get the viewType
			 * @returns {String} A String representing the viewType
			 */
			getViewType()	{
				return this.viewType;

			}

			/**
			 * The method to set the value to viewType
			 * @param {String} viewType A String
			 */
			setViewType(viewType)	{
				if((viewType != null) && (!(Object.prototype.toString.call(viewType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: String", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

			}

			/**
			 * The method to get the mailFormat
			 * @returns {String} A String representing the mailFormat
			 */
			getMailFormat()	{
				return this.mailFormat;

			}

			/**
			 * The method to set the value to mailFormat
			 * @param {String} mailFormat A String
			 */
			setMailFormat(mailFormat)	{
				if((mailFormat != null) && (!(Object.prototype.toString.call(mailFormat) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailFormat EXPECTED TYPE: String", null, null);
				}
				this.mailFormat = mailFormat;
				this.keyModified.set("mail_format", 1);

			}

			/**
			 * The method to get the consentEmail
			 * @returns {Boolean} A Boolean representing the consentEmail
			 */
			getConsentEmail()	{
				return this.consentEmail;

			}

			/**
			 * The method to set the value to consentEmail
			 * @param {Boolean} consentEmail A Boolean
			 */
			setConsentEmail(consentEmail)	{
				if((consentEmail != null) && (!(Object.prototype.toString.call(consentEmail) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentEmail EXPECTED TYPE: Boolean", null, null);
				}
				this.consentEmail = consentEmail;
				this.keyModified.set("consent_email", 1);

			}

			/**
			 * The method to get the orgEmail
			 * @returns {Boolean} A Boolean representing the orgEmail
			 */
			getOrgEmail()	{
				return this.orgEmail;

			}

			/**
			 * The method to set the value to orgEmail
			 * @param {Boolean} orgEmail A Boolean
			 */
			setOrgEmail(orgEmail)	{
				if((orgEmail != null) && (!(Object.prototype.toString.call(orgEmail) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgEmail EXPECTED TYPE: Boolean", null, null);
				}
				this.orgEmail = orgEmail;
				this.keyModified.set("org_email", 1);

			}

			/**
			 * The method to get the attachments
			 * @returns {List} An Array representing the attachments
			 */
			getAttachments()	{
				return this.attachments;

			}

			/**
			 * The method to set the value to attachments
			 * @param {List} attachments An Array
			 */
			setAttachments(attachments)	{
				if((attachments != null) && (!(Object.prototype.toString.call(attachments) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachments EXPECTED TYPE: Array", null, null);
				}
				this.attachments = attachments;
				this.keyModified.set("attachments", 1);

			}

			/**
			 * The method to get the inventoryDetails
			 * @returns {InventoryDetails} An instance of InventoryDetails
			 */
			getInventoryDetails()	{
				return this.inventoryDetails;

			}

			/**
			 * The method to set the value to inventoryDetails
			 * @param {InventoryDetails} inventoryDetails An instance of InventoryDetails
			 */
			setInventoryDetails(inventoryDetails)	{
				if((inventoryDetails != null) && (!(inventoryDetails instanceof ZCRM.SendMail.Model.InventoryDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryDetails EXPECTED TYPE: InventoryDetails", null, null);
				}
				this.inventoryDetails = inventoryDetails;
				this.keyModified.set("inventory_details", 1);

			}

			/**
			 * The method to get the dataSubjectRequest
			 * @returns {DataSubjectRequest} An instance of DataSubjectRequest
			 */
			getDataSubjectRequest()	{
				return this.dataSubjectRequest;

			}

			/**
			 * The method to set the value to dataSubjectRequest
			 * @param {DataSubjectRequest} dataSubjectRequest An instance of DataSubjectRequest
			 */
			setDataSubjectRequest(dataSubjectRequest)	{
				if((dataSubjectRequest != null) && (!(dataSubjectRequest instanceof ZCRM.SendMail.Model.DataSubjectRequest))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataSubjectRequest EXPECTED TYPE: DataSubjectRequest", null, null);
				}
				this.dataSubjectRequest = dataSubjectRequest;
				this.keyModified.set("data_subject_request", 1);

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

		UserAddress : class{
			constructor(){

				this.userName=null;
				this.type=null;
				this.email=null;
				this.id=null;
				this.default1=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the userName
			 * @returns {String} A String representing the userName
			 */
			getUserName()	{
				return this.userName;

			}

			/**
			 * The method to set the value to userName
			 * @param {String} userName A String
			 */
			setUserName(userName)	{
				if((userName != null) && (!(Object.prototype.toString.call(userName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userName EXPECTED TYPE: String", null, null);
				}
				this.userName = userName;
				this.keyModified.set("user_name", 1);

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
			 * The method to get the email
			 * @returns {String} A String representing the email
			 */
			getEmail()	{
				return this.email;

			}

			/**
			 * The method to set the value to email
			 * @param {String} email A String
			 */
			setEmail(email)	{
				if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
				}
				this.email = email;
				this.keyModified.set("email", 1);

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
			 * The method to get the default
			 * @returns {Boolean} A Boolean representing the default1
			 */
			getDefault()	{
				return this.default1;

			}

			/**
			 * The method to set the value to default
			 * @param {Boolean} default1 A Boolean
			 */
			setDefault(default1)	{
				if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
				}
				this.default1 = default1;
				this.keyModified.set("default", 1);

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

				this.data=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

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

		InventoryDetails : class{
			constructor(){

				this.inventoryTemplate=null;
				this.paperType=null;
				this.viewType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the inventoryTemplate
			 * @returns {InventoryTemplate} An instance of InventoryTemplate
			 */
			getInventoryTemplate()	{
				return this.inventoryTemplate;

			}

			/**
			 * The method to set the value to inventoryTemplate
			 * @param {InventoryTemplate} inventoryTemplate An instance of InventoryTemplate
			 */
			setInventoryTemplate(inventoryTemplate)	{
				if((inventoryTemplate != null) && (!(inventoryTemplate instanceof ZCRM.InventoryTemplate.Model.InventoryTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryTemplate EXPECTED TYPE: InventoryTemplate", null, null);
				}
				this.inventoryTemplate = inventoryTemplate;
				this.keyModified.set("inventory_template", 1);

			}

			/**
			 * The method to get the paperType
			 * @returns {String} A String representing the paperType
			 */
			getPaperType()	{
				return this.paperType;

			}

			/**
			 * The method to set the value to paperType
			 * @param {String} paperType A String
			 */
			setPaperType(paperType)	{
				if((paperType != null) && (!(Object.prototype.toString.call(paperType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paperType EXPECTED TYPE: String", null, null);
				}
				this.paperType = paperType;
				this.keyModified.set("paper_type", 1);

			}

			/**
			 * The method to get the viewType
			 * @returns {String} A String representing the viewType
			 */
			getViewType()	{
				return this.viewType;

			}

			/**
			 * The method to set the value to viewType
			 * @param {String} viewType A String
			 */
			setViewType(viewType)	{
				if((viewType != null) && (!(Object.prototype.toString.call(viewType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: String", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

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

		ActionWrapper : class{
			constructor(){

				this.data=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

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

		DataSubjectRequest : class{
			constructor(){

				this.id=null;
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
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get email addresses
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailAddresses(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/settings/emails/actions/from_addresses");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("SendMail.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to send mail
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async sendMail(recordId, moduleAPIName, request){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.SendMail.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/actions/send_mail");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("SendMail.Model.ActionHandler", "application/json");

		}
	},

}