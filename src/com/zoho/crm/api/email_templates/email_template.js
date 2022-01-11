ZCRM.EmailTemplate = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		APIException : class{
			constructor(){

				this.code=null;
				this.status=null;
				this.message=null;
				this.details=null;
				this.keyModified=new Map();
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

		Attachment : class{
			constructor(){

				this.size=null;
				this.fileName=null;
				this.fileId=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the size
			 * @returns {Long} A BigInt representing the size
			 */
			getSize()	{
				return this.size;

			}

			/**
			 * The method to set the value to size
			 * @param {Long} size A BigInt
			 */
			setSize(size)	{
				if((size != null) && (!(Object.prototype.toString.call(size) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: BigInt", null, null);
				}
				this.size = size;
				this.keyModified.set("size", 1);

			}

			/**
			 * The method to get the fileName
			 * @returns {String} A String representing the fileName
			 */
			getFileName()	{
				return this.fileName;

			}

			/**
			 * The method to set the value to fileName
			 * @param {String} fileName A String
			 */
			setFileName(fileName)	{
				if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
				}
				this.fileName = fileName;
				this.keyModified.set("file_name", 1);

			}

			/**
			 * The method to get the fileId
			 * @returns {String} A String representing the fileId
			 */
			getFileId()	{
				return this.fileId;

			}

			/**
			 * The method to set the value to fileId
			 * @param {String} fileId A String
			 */
			setFileId(fileId)	{
				if((fileId != null) && (!(Object.prototype.toString.call(fileId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileId EXPECTED TYPE: String", null, null);
				}
				this.fileId = fileId;
				this.keyModified.set("file_id", 1);

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

		EmailTemplate : class{
			constructor(){

				this.content=null;
				this.createdTime=null;
				this.subject=null;
				this.module=null;
				this.type=null;
				this.createdBy=null;
				this.modifiedTime=null;
				this.lastUsageTime=null;
				this.associated=null;
				this.name=null;
				this.modifiedBy=null;
				this.description=null;
				this.id=null;
				this.editorMode=null;
				this.favorite=null;
				this.attachments=null;
				this.folder=null;
				this.consentLinked=null;
				this.keyModified=new Map();
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
			 * The method to get the createdTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTime()	{
				return this.createdTime;

			}

			/**
			 * The method to set the value to createdTime
			 * @param {OffsetDateTime} createdTime An instance of OffsetDateTime
			 */
			setCreatedTime(createdTime)	{
				if((createdTime != null) && (!(createdTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
				}
				this.createdTime = createdTime;
				this.keyModified.set("created_time", 1);

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
			 * The method to get the module
			 * @returns {Module} An instance of Module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {Module} module An instance of Module
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Module.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
			 * The method to get the createdBy
			 * @returns {User} An instance of User
			 */
			getCreatedBy()	{
				return this.createdBy;

			}

			/**
			 * The method to set the value to createdBy
			 * @param {User} createdBy An instance of User
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

			}

			/**
			 * The method to get the modifiedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTime()	{
				return this.modifiedTime;

			}

			/**
			 * The method to set the value to modifiedTime
			 * @param {OffsetDateTime} modifiedTime An instance of OffsetDateTime
			 */
			setModifiedTime(modifiedTime)	{
				if((modifiedTime != null) && (!(modifiedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
				}
				this.modifiedTime = modifiedTime;
				this.keyModified.set("modified_time", 1);

			}

			/**
			 * The method to get the lastUsageTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getLastUsageTime()	{
				return this.lastUsageTime;

			}

			/**
			 * The method to set the value to lastUsageTime
			 * @param {OffsetDateTime} lastUsageTime An instance of OffsetDateTime
			 */
			setLastUsageTime(lastUsageTime)	{
				if((lastUsageTime != null) && (!(lastUsageTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastUsageTime EXPECTED TYPE: Date", null, null);
				}
				this.lastUsageTime = lastUsageTime;
				this.keyModified.set("last_usage_time", 1);

			}

			/**
			 * The method to get the associated
			 * @returns {Boolean} A Boolean representing the associated
			 */
			getAssociated()	{
				return this.associated;

			}

			/**
			 * The method to set the value to associated
			 * @param {Boolean} associated A Boolean
			 */
			setAssociated(associated)	{
				if((associated != null) && (!(Object.prototype.toString.call(associated) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associated EXPECTED TYPE: Boolean", null, null);
				}
				this.associated = associated;
				this.keyModified.set("associated", 1);

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
			 * The method to get the modifiedBy
			 * @returns {User} An instance of User
			 */
			getModifiedBy()	{
				return this.modifiedBy;

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {User} modifiedBy An instance of User
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
				}
				this.modifiedBy = modifiedBy;
				this.keyModified.set("modified_by", 1);

			}

			/**
			 * The method to get the description
			 * @returns {String} A String representing the description
			 */
			getDescription()	{
				return this.description;

			}

			/**
			 * The method to set the value to description
			 * @param {String} description A String
			 */
			setDescription(description)	{
				if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
				}
				this.description = description;
				this.keyModified.set("description", 1);

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
			 * The method to get the editorMode
			 * @returns {String} A String representing the editorMode
			 */
			getEditorMode()	{
				return this.editorMode;

			}

			/**
			 * The method to set the value to editorMode
			 * @param {String} editorMode A String
			 */
			setEditorMode(editorMode)	{
				if((editorMode != null) && (!(Object.prototype.toString.call(editorMode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editorMode EXPECTED TYPE: String", null, null);
				}
				this.editorMode = editorMode;
				this.keyModified.set("editor_mode", 1);

			}

			/**
			 * The method to get the favorite
			 * @returns {Boolean} A Boolean representing the favorite
			 */
			getFavorite()	{
				return this.favorite;

			}

			/**
			 * The method to set the value to favorite
			 * @param {Boolean} favorite A Boolean
			 */
			setFavorite(favorite)	{
				if((favorite != null) && (!(Object.prototype.toString.call(favorite) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: favorite EXPECTED TYPE: Boolean", null, null);
				}
				this.favorite = favorite;
				this.keyModified.set("favorite", 1);

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
			 * The method to get the folder
			 * @returns {EmailTemplate} An instance of EmailTemplate
			 */
			getFolder()	{
				return this.folder;

			}

			/**
			 * The method to set the value to folder
			 * @param {EmailTemplate} folder An instance of EmailTemplate
			 */
			setFolder(folder)	{
				if((folder != null) && (!(folder instanceof ZCRM.EmailTemplate.Model.EmailTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: folder EXPECTED TYPE: EmailTemplate", null, null);
				}
				this.folder = folder;
				this.keyModified.set("folder", 1);

			}

			/**
			 * The method to get the consentLinked
			 * @returns {Boolean} A Boolean representing the consentLinked
			 */
			getConsentLinked()	{
				return this.consentLinked;

			}

			/**
			 * The method to set the value to consentLinked
			 * @param {Boolean} consentLinked A Boolean
			 */
			setConsentLinked(consentLinked)	{
				if((consentLinked != null) && (!(Object.prototype.toString.call(consentLinked) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentLinked EXPECTED TYPE: Boolean", null, null);
				}
				this.consentLinked = consentLinked;
				this.keyModified.set("consent_linked", 1);

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

				this.emailTemplates=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emailTemplates
			 * @returns {List} An Array representing the emailTemplates
			 */
			getEmailTemplates()	{
				return this.emailTemplates;

			}

			/**
			 * The method to set the value to emailTemplates
			 * @param {List} emailTemplates An Array
			 */
			setEmailTemplates(emailTemplates)	{
				if((emailTemplates != null) && (!(Object.prototype.toString.call(emailTemplates) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailTemplates EXPECTED TYPE: Array", null, null);
				}
				this.emailTemplates = emailTemplates;
				this.keyModified.set("email_templates", 1);

			}

			/**
			 * The method to get the info
			 * @returns {Info} An instance of Info
			 */
			getInfo()	{
				return this.info;

			}

			/**
			 * The method to set the value to info
			 * @param {Info} info An instance of Info
			 */
			setInfo(info)	{
				if((info != null) && (!(info instanceof ZCRM.Record.Model.Info))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Info", null, null);
				}
				this.info = info;
				this.keyModified.set("info", 1);

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

		GetEmailTemplatesParam : {
			MODULE : 	new Param("module", "EmailTemplate.Model.GetEmailTemplatesParam"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get email templates
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailTemplates(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/settings/email_templates");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("EmailTemplate.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get email template by id
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailTemplateById(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/settings/email_templates/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("EmailTemplate.Model.ResponseHandler", "application/json");

		}
	},

}