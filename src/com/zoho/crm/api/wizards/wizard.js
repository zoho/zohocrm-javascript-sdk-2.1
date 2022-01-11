ZCRM.Wizard = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		Button : class{
			constructor(){

				this.id=null;
				this.sequenceNumber=null;
				this.displayLabel=null;
				this.criteria=null;
				this.targetScreen=null;
				this.type=null;
				this.color=null;
				this.shape=null;
				this.backgroundColor=null;
				this.visibility=null;
				this.transition=null;
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
			 * The method to get the targetScreen
			 * @returns {Screen} An instance of Screen
			 */
			getTargetScreen()	{
				return this.targetScreen;

			}

			/**
			 * The method to set the value to targetScreen
			 * @param {Screen} targetScreen An instance of Screen
			 */
			setTargetScreen(targetScreen)	{
				if((targetScreen != null) && (!(targetScreen instanceof ZCRM.Wizard.Model.Screen))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: targetScreen EXPECTED TYPE: Screen", null, null);
				}
				this.targetScreen = targetScreen;
				this.keyModified.set("target_screen", 1);

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
			 * The method to get the color
			 * @returns {String} A String representing the color
			 */
			getColor()	{
				return this.color;

			}

			/**
			 * The method to set the value to color
			 * @param {String} color A String
			 */
			setColor(color)	{
				if((color != null) && (!(Object.prototype.toString.call(color) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: color EXPECTED TYPE: String", null, null);
				}
				this.color = color;
				this.keyModified.set("color", 1);

			}

			/**
			 * The method to get the shape
			 * @returns {String} A String representing the shape
			 */
			getShape()	{
				return this.shape;

			}

			/**
			 * The method to set the value to shape
			 * @param {String} shape A String
			 */
			setShape(shape)	{
				if((shape != null) && (!(Object.prototype.toString.call(shape) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shape EXPECTED TYPE: String", null, null);
				}
				this.shape = shape;
				this.keyModified.set("shape", 1);

			}

			/**
			 * The method to get the backgroundColor
			 * @returns {String} A String representing the backgroundColor
			 */
			getBackgroundColor()	{
				return this.backgroundColor;

			}

			/**
			 * The method to set the value to backgroundColor
			 * @param {String} backgroundColor A String
			 */
			setBackgroundColor(backgroundColor)	{
				if((backgroundColor != null) && (!(Object.prototype.toString.call(backgroundColor) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: backgroundColor EXPECTED TYPE: String", null, null);
				}
				this.backgroundColor = backgroundColor;
				this.keyModified.set("background_color", 1);

			}

			/**
			 * The method to get the visibility
			 * @returns {String} A String representing the visibility
			 */
			getVisibility()	{
				return this.visibility;

			}

			/**
			 * The method to set the value to visibility
			 * @param {String} visibility A String
			 */
			setVisibility(visibility)	{
				if((visibility != null) && (!(Object.prototype.toString.call(visibility) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visibility EXPECTED TYPE: String", null, null);
				}
				this.visibility = visibility;
				this.keyModified.set("visibility", 1);

			}

			/**
			 * The method to get the transition
			 * @returns {Transition} An instance of Transition
			 */
			getTransition()	{
				return this.transition;

			}

			/**
			 * The method to set the value to transition
			 * @param {Transition} transition An instance of Transition
			 */
			setTransition(transition)	{
				if((transition != null) && (!(transition instanceof ZCRM.Wizard.Model.Transition))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transition EXPECTED TYPE: Transition", null, null);
				}
				this.transition = transition;
				this.keyModified.set("transition", 1);

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

		ChartData : class{
			constructor(){

				this.nodes=null;
				this.connections=null;
				this.canvasWidth=null;
				this.canvasHeight=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the nodes
			 * @returns {List} An Array representing the nodes
			 */
			getNodes()	{
				return this.nodes;

			}

			/**
			 * The method to set the value to nodes
			 * @param {List} nodes An Array
			 */
			setNodes(nodes)	{
				if((nodes != null) && (!(Object.prototype.toString.call(nodes) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nodes EXPECTED TYPE: Array", null, null);
				}
				this.nodes = nodes;
				this.keyModified.set("nodes", 1);

			}

			/**
			 * The method to get the connections
			 * @returns {List} An Array representing the connections
			 */
			getConnections()	{
				return this.connections;

			}

			/**
			 * The method to set the value to connections
			 * @param {List} connections An Array
			 */
			setConnections(connections)	{
				if((connections != null) && (!(Object.prototype.toString.call(connections) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connections EXPECTED TYPE: Array", null, null);
				}
				this.connections = connections;
				this.keyModified.set("connections", 1);

			}

			/**
			 * The method to get the canvasWidth
			 * @returns {Integer} An Integer representing the canvasWidth
			 */
			getCanvasWidth()	{
				return this.canvasWidth;

			}

			/**
			 * The method to set the value to canvasWidth
			 * @param {Integer} canvasWidth An Integer
			 */
			setCanvasWidth(canvasWidth)	{
				if((canvasWidth != null) && (!(Object.prototype.toString.call(canvasWidth) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: canvasWidth EXPECTED TYPE: Integer", null, null);
				}
				this.canvasWidth = canvasWidth;
				this.keyModified.set("canvas_width", 1);

			}

			/**
			 * The method to get the canvasHeight
			 * @returns {Integer} An Integer representing the canvasHeight
			 */
			getCanvasHeight()	{
				return this.canvasHeight;

			}

			/**
			 * The method to set the value to canvasHeight
			 * @param {Integer} canvasHeight An Integer
			 */
			setCanvasHeight(canvasHeight)	{
				if((canvasHeight != null) && (!(Object.prototype.toString.call(canvasHeight) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: canvasHeight EXPECTED TYPE: Integer", null, null);
				}
				this.canvasHeight = canvasHeight;
				this.keyModified.set("canvas_height", 1);

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

		Wizard : class{
			constructor(){

				this.createdTime=null;
				this.modifiedTime=null;
				this.module=null;
				this.name=null;
				this.modifiedBy=null;
				this.profiles=null;
				this.active=null;
				this.containers=null;
				this.createdBy=null;
				this.parentWizard=null;
				this.draft=null;
				this.id=null;
				this.keyModified=new Map();
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
			 * The method to get the active
			 * @returns {Boolean} A Boolean representing the active
			 */
			getActive()	{
				return this.active;

			}

			/**
			 * The method to set the value to active
			 * @param {Boolean} active A Boolean
			 */
			setActive(active)	{
				if((active != null) && (!(Object.prototype.toString.call(active) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: active EXPECTED TYPE: Boolean", null, null);
				}
				this.active = active;
				this.keyModified.set("active", 1);

			}

			/**
			 * The method to get the containers
			 * @returns {List} An Array representing the containers
			 */
			getContainers()	{
				return this.containers;

			}

			/**
			 * The method to set the value to containers
			 * @param {List} containers An Array
			 */
			setContainers(containers)	{
				if((containers != null) && (!(Object.prototype.toString.call(containers) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: containers EXPECTED TYPE: Array", null, null);
				}
				this.containers = containers;
				this.keyModified.set("containers", 1);

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
			 * The method to get the parentWizard
			 * @returns {Wizard} An instance of Wizard
			 */
			getParentWizard()	{
				return this.parentWizard;

			}

			/**
			 * The method to set the value to parentWizard
			 * @param {Wizard} parentWizard An instance of Wizard
			 */
			setParentWizard(parentWizard)	{
				if((parentWizard != null) && (!(parentWizard instanceof ZCRM.Wizard.Model.Wizard))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentWizard EXPECTED TYPE: Wizard", null, null);
				}
				this.parentWizard = parentWizard;
				this.keyModified.set("parent_wizard", 1);

			}

			/**
			 * The method to get the draft
			 * @returns {Boolean} A Boolean representing the draft
			 */
			getDraft()	{
				return this.draft;

			}

			/**
			 * The method to set the value to draft
			 * @param {Boolean} draft A Boolean
			 */
			setDraft(draft)	{
				if((draft != null) && (!(Object.prototype.toString.call(draft) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: draft EXPECTED TYPE: Boolean", null, null);
				}
				this.draft = draft;
				this.keyModified.set("draft", 1);

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

		Connection : class{
			constructor(){

				this.sourceButton=null;
				this.targetScreen=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the sourceButton
			 * @returns {Button} An instance of Button
			 */
			getSourceButton()	{
				return this.sourceButton;

			}

			/**
			 * The method to set the value to sourceButton
			 * @param {Button} sourceButton An instance of Button
			 */
			setSourceButton(sourceButton)	{
				if((sourceButton != null) && (!(sourceButton instanceof ZCRM.Wizard.Model.Button))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sourceButton EXPECTED TYPE: Button", null, null);
				}
				this.sourceButton = sourceButton;
				this.keyModified.set("source_button", 1);

			}

			/**
			 * The method to get the targetScreen
			 * @returns {Screen} An instance of Screen
			 */
			getTargetScreen()	{
				return this.targetScreen;

			}

			/**
			 * The method to set the value to targetScreen
			 * @param {Screen} targetScreen An instance of Screen
			 */
			setTargetScreen(targetScreen)	{
				if((targetScreen != null) && (!(targetScreen instanceof ZCRM.Wizard.Model.Screen))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: targetScreen EXPECTED TYPE: Screen", null, null);
				}
				this.targetScreen = targetScreen;
				this.keyModified.set("target_screen", 1);

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

		Screen : class{
			constructor(){

				this.id=null;
				this.displayLabel=null;
				this.segments=null;
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
			 * The method to get the segments
			 * @returns {List} An Array representing the segments
			 */
			getSegments()	{
				return this.segments;

			}

			/**
			 * The method to set the value to segments
			 * @param {List} segments An Array
			 */
			setSegments(segments)	{
				if((segments != null) && (!(Object.prototype.toString.call(segments) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: segments EXPECTED TYPE: Array", null, null);
				}
				this.segments = segments;
				this.keyModified.set("segments", 1);

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

		Node : class{
			constructor(){

				this.posY=null;
				this.posX=null;
				this.startNode=null;
				this.screen=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the posY
			 * @returns {Integer} An Integer representing the posY
			 */
			getPosY()	{
				return this.posY;

			}

			/**
			 * The method to set the value to posY
			 * @param {Integer} posY An Integer
			 */
			setPosY(posY)	{
				if((posY != null) && (!(Object.prototype.toString.call(posY) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: posY EXPECTED TYPE: Integer", null, null);
				}
				this.posY = posY;
				this.keyModified.set("pos_y", 1);

			}

			/**
			 * The method to get the posX
			 * @returns {Integer} An Integer representing the posX
			 */
			getPosX()	{
				return this.posX;

			}

			/**
			 * The method to set the value to posX
			 * @param {Integer} posX An Integer
			 */
			setPosX(posX)	{
				if((posX != null) && (!(Object.prototype.toString.call(posX) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: posX EXPECTED TYPE: Integer", null, null);
				}
				this.posX = posX;
				this.keyModified.set("pos_x", 1);

			}

			/**
			 * The method to get the startNode
			 * @returns {Boolean} A Boolean representing the startNode
			 */
			getStartNode()	{
				return this.startNode;

			}

			/**
			 * The method to set the value to startNode
			 * @param {Boolean} startNode A Boolean
			 */
			setStartNode(startNode)	{
				if((startNode != null) && (!(Object.prototype.toString.call(startNode) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startNode EXPECTED TYPE: Boolean", null, null);
				}
				this.startNode = startNode;
				this.keyModified.set("start_node", 1);

			}

			/**
			 * The method to get the screen
			 * @returns {Screen} An instance of Screen
			 */
			getScreen()	{
				return this.screen;

			}

			/**
			 * The method to set the value to screen
			 * @param {Screen} screen An instance of Screen
			 */
			setScreen(screen)	{
				if((screen != null) && (!(screen instanceof ZCRM.Wizard.Model.Screen))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: screen EXPECTED TYPE: Screen", null, null);
				}
				this.screen = screen;
				this.keyModified.set("screen", 1);

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

		Segment : class{
			constructor(){

				this.id=null;
				this.sequenceNumber=null;
				this.displayLabel=null;
				this.type=null;
				this.columnCount=null;
				this.fields=null;
				this.buttons=null;
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
			 * The method to get the columnCount
			 * @returns {Integer} An Integer representing the columnCount
			 */
			getColumnCount()	{
				return this.columnCount;

			}

			/**
			 * The method to set the value to columnCount
			 * @param {Integer} columnCount An Integer
			 */
			setColumnCount(columnCount)	{
				if((columnCount != null) && (!(Object.prototype.toString.call(columnCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnCount EXPECTED TYPE: Integer", null, null);
				}
				this.columnCount = columnCount;
				this.keyModified.set("column_count", 1);

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
			 * The method to get the buttons
			 * @returns {List} An Array representing the buttons
			 */
			getButtons()	{
				return this.buttons;

			}

			/**
			 * The method to set the value to buttons
			 * @param {List} buttons An Array
			 */
			setButtons(buttons)	{
				if((buttons != null) && (!(Object.prototype.toString.call(buttons) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: buttons EXPECTED TYPE: Array", null, null);
				}
				this.buttons = buttons;
				this.keyModified.set("buttons", 1);

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

		Transition : class{
			constructor(){

				this.id=null;
				this.name=null;
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

				this.wizards=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the wizards
			 * @returns {List} An Array representing the wizards
			 */
			getWizards()	{
				return this.wizards;

			}

			/**
			 * The method to set the value to wizards
			 * @param {List} wizards An Array
			 */
			setWizards(wizards)	{
				if((wizards != null) && (!(Object.prototype.toString.call(wizards) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wizards EXPECTED TYPE: Array", null, null);
				}
				this.wizards = wizards;
				this.keyModified.set("wizards", 1);

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

		Container : class{
			constructor(){

				this.id=null;
				this.layout=null;
				this.chartData=null;
				this.screens=null;
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
			 * The method to get the layout
			 * @returns {Layout} An instance of Layout
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layout} layout An instance of Layout
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Layout.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

			}

			/**
			 * The method to get the chartData
			 * @returns {ChartData} An instance of ChartData
			 */
			getChartData()	{
				return this.chartData;

			}

			/**
			 * The method to set the value to chartData
			 * @param {ChartData} chartData An instance of ChartData
			 */
			setChartData(chartData)	{
				if((chartData != null) && (!(chartData instanceof ZCRM.Wizard.Model.ChartData))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chartData EXPECTED TYPE: ChartData", null, null);
				}
				this.chartData = chartData;
				this.keyModified.set("chart_data", 1);

			}

			/**
			 * The method to get the screens
			 * @returns {List} An Array representing the screens
			 */
			getScreens()	{
				return this.screens;

			}

			/**
			 * The method to set the value to screens
			 * @param {List} screens An Array
			 */
			setScreens(screens)	{
				if((screens != null) && (!(Object.prototype.toString.call(screens) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: screens EXPECTED TYPE: Array", null, null);
				}
				this.screens = screens;
				this.keyModified.set("screens", 1);

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

		GetWizardbyIDParam : {
			LAYOUT_ID : 	new Param("layout_id", "Wizard.Model.GetWizardbyIDParam"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get wizards
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWizards(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/settings/wizards");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Wizard.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get wizard by id
		 * @param {Long} wizardId A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWizardById(wizardId, paramInstance=null){
			if((!(Object.prototype.toString.call(wizardId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wizardId EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2.1/settings/wizards/");
			apiPath = apiPath.concat(wizardId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Wizard.Model.ResponseHandler", "application/json");

		}
	},

}