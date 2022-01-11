class Test {
    static async call() {
        await SDKInitializer.initializeSDK();

        await ModuleFieldsHandler.refreshAllModules();

        this.assignmentRules();

        this.attachment();

        this.bluePrint();

        this.bulkRead();

        this.bulkWrite();

        this.contactRole();

        this.currency();

        this.customView();

        this.emailTemplate();

        this.fieldAttachment();

        this.field();

        this.file();

        this.functions();

        this.inventoryTemplate();

        this.layout();

        this.module();

        this.note();

        this.notification();

        this.org();

        this.pipeLine();

        this.profile();

        this.query();

        this.record();

        this.relatedList();

        this.relatedRecord();

        this.role();

        this.sendMail();

        this.shareRecord();

        this.tag();

        this.tax();

        this.territory();

        this.user();

        this.variableGroup();

        this.variable();

        this.wizard();

        // await this.testUpload();
    }

    static async assignmentRules() {
        let ruleId = 34770614353013n;

        await AssignmentRules.getAssignmentRules();

        await AssignmentRules.getAssignmentRule(ruleId);
    }

    static async attachment() {
        let moduleAPIName = "Notes";

        let recordId = 347706113368017n;

        let attachmentId = 347706113372001n;

        console.log("-----Calling getAttachments()-----");
        await Attachment.getAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadAttachments()-----");
        await Attachment.uploadAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadLinkAttachment()-----");
        await Attachment.uploadLinkAttachment(moduleAPIName, recordId, "https://www.zohocorp.com");

        console.log("-----Calling deleteAttachments()-----");
        await Attachment.deleteAttachments(moduleAPIName, recordId, [347706110792011n, 34770619069n])

        console.log("-----Calling deleteAttachment()-----");
        await Attachment.deleteAttachment(moduleAPIName, recordId, attachmentId);

        console.log("-----Calling downloadAttachment()-----");
        await Attachment.downloadAttachment(moduleAPIName, recordId, attachmentId)
    }

    static async bluePrint() {
        let moduleAPIName = "Leads";

        let recordId = 34770614381002n;

        let transitionId = 34770610173093n;

        console.log("-----Calling getBlueprint()-----")
        await BluePrint.getBlueprint(moduleAPIName, recordId);

        console.log("-----Calling updateBlueprint()-----")
        await BluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);
    }

    static async bulkRead() {
        let moduleAPIName = "Leads";

        let jobId = 347706113374001n;

        console.log("-----Calling createBulkReadJob()-----")
        await BulkRead.createBulkReadJob(moduleAPIName);

        console.log("-----Calling getBulkReadJobDetails()-----")
        await BulkRead.getBulkReadJobDetails(jobId);

        console.log("-----Calling downloadResult()-----")
        await BulkRead.downloadResult(jobId);
    }

    static async bulkWrite() {
        let orgId = "xxxxx";

        let downloadUrl = "https://download-accl.zoho.com/v2/crm/xxxxxx/bulk-write/34770619060064/34770619060064.zip";

        await BulkWrite.uploadFile(orgId);

        await BulkWrite.createBulkWriteJob("Leads", "347706113377001");

        await BulkWrite.getBulkWriteJobDetails(347706113379001n);

        await BulkWrite.downloadBulkWriteResult(downloadUrl);
    }

    static async contactRole() {
        let contactRoleId = 34770619185003n;

        let contactRoleIds = ["347706112796005", "347706112796003", "347706112796001"];

        let contactId = 34770610358009n;

        let dealId = 347706113236027n;

        console.log("-----Calling getContactRoles()-----")
        await ContactRole.getContactRoles();

        console.log("-----Calling getContactRole()-----")
        await ContactRole.getContactRole(contactRoleId);

        console.log("-----Calling createContactRoles()-----")
        await ContactRole.createContactRoles();

        console.log("-----Calling updateContactRoles()-----")
        await ContactRole.updateContactRoles();

        console.log("-----Calling updateContactRole()-----")
        await ContactRole.updateContactRole(contactRoleId);

        console.log("-----Calling deleteContactRole()-----")
        await ContactRole.deleteContactRole(contactRoleId);

        console.log("-----Calling deleteContactRoles()-----")
        await ContactRole.deleteContactRoles(contactRoleIds);

        await ContactRole.getAllContactRolesOfDeal(dealId);

        await ContactRole.getContactRoleOfDeal(contactId, dealId);

        await ContactRole.addContactRoleToDeal(contactId, dealId);

        await ContactRole.removeContactRoleFromDeal(contactId, dealId);
    }

    static async currency() {
        let currencyId = 34770617368016n;

        console.log("-----Calling enableMultipleCurrencies()-----")
        await Currency.enableMultipleCurrencies();

        console.log("-----Calling getCurrencies()-----")
        await Currency.getCurrencies();

        console.log("-----Calling getCurrency()-----")
        await Currency.getCurrency(currencyId);

        console.log("-----Calling addCurrencies()-----")
        await Currency.addCurrencies();

        console.log("-----Calling updateCurrencies()-----")
        await Currency.updateCurrencies();

        console.log("-----Calling updateCurrency()-----")
        await Currency.updateCurrency(currencyId);

        console.log("-----Calling updateBaseCurrency()-----")
        await Currency.updateBaseCurrency();
    }

    static async customView() {
        let moduleAPIName = "Leads"

        let customViewId = 34770610087501n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

        for (let name of names) {
            await CustomView.getCustomViews(name);
        }

        await CustomView.getCustomViews(moduleAPIName);

        await CustomView.getCustomView(moduleAPIName, customViewId);
    }

    static async emailTemplate() {
        let id = 347706179n;

        await EmailTemplate.getEmailTemplates("Deals");

        await EmailTemplate.getEmailTemplateById(id);
    }

    static async fieldAttachment() {
        await FieldAttachment.getFieldAttachments("Leads", 347706111613002n, 347706111613032n);
    }

    static async field() {
        let moduleAPIName = "Leads"

        let fieldId = 34770610052001n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

        for (let name of names) {
            await Field.getFields(name);
        }

        console.log("-----Calling getFields()-----")
        await Field.getFields(moduleAPIName);

        console.log("-----Calling getField()-----")
        await Field.getField(moduleAPIName, fieldId);
    }

    static async file() {
        let fileId = "ae9c7cefa41dbc8";

        console.log("-----Calling uploadFiles()-----");
        await File.uploadFiles();

        console.log("-----Calling getFile()-----");
        await File.getFile(fileId);
    }

    static async functions() {
        console.log("-----Calling executeFunctionUsingParameters()-----")
        await Functions.executeFunctionUsingParameters();

        console.log("-----Calling executeFunctionUsingRequestBody()-----")
        await Functions.executeFunctionUsingRequestBody();

        console.log("-----Calling executeFunctionUsingFile()-----")
        await Functions.executeFunctionUsingFile();
    }

    static async inventoryTemplate() {
        let id = 34770610174003n;

        await InventoryTemplate.getInventoryTemplates();

        await InventoryTemplate.getInventoryTemplateById(id);
    }

    static async layout() {
        let moduleAPIName = "Deals";

        let layoutId = 34770610091023n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        for (let name of names) {
            await Layout.getLayouts(name);
        }

        console.log("-----Calling getLayouts()-----")
        await Layout.getLayouts(moduleAPIName);

        console.log("-----Calling getLayout()-----")
        await Layout.getLayout(moduleAPIName, layoutId);
    }

    static async module() {
        let moduleAPIName = "Test1";

        let moduleId = 34770613905003n;

        console.log("-----Calling getModules()-----")
        await Module.getModules();

        console.log("-----Calling getModule()-----")
        await Module.getModule(moduleAPIName);

        console.log("-----Calling updateModuleByAPIName()-----")
        await Module.updateModuleByAPIName(moduleAPIName);

        console.log("-----Calling updateModuleById()-----")
        await Module.updateModuleById(moduleId);
    }

    static async note() {
        let noteId = 347706113368017n;

        let noteIds = [347706111668004n, 347706111668003n];

        console.log("-----Calling getNotes()-----")
        await Note.getNotes();

        console.log("-----Calling getNote()-----")
        await Note.getNote(noteId);

        console.log("-----Calling createNotes()-----")
        await Note.createNotes();

        console.log("-----Calling updateNotes()-----")
        await Note.updateNotes();

        console.log("-----Calling updateNote()-----")
        await Note.updateNote(noteId);

        console.log("-----Calling deleteNotes()-----")
        await Note.deleteNotes(noteIds);

        console.log("-----Calling deleteNote()-----")
        await Note.deleteNote(noteId);
    }

    static async notification() {
        let channelIds = [1006800211n, 1006800211n];

        console.log("-----Calling enableNotifications()-----")
        await Notification.enableNotifications();

        console.log("-----Calling getNotificationDetails()-----")
        await Notification.getNotificationDetails();

        console.log("-----Calling updateNotifications()-----")
        await Notification.updateNotifications();

        console.log("-----Calling updateNotification()-----")
        await Notification.updateNotification();

        console.log("-----Calling disableNotifications()-----")
        await Notification.disableNotifications(channelIds);

        console.log("-----Calling getNotificationDetails()-----")
        await Notification.disableNotification();
    }

    static async org() {
        console.log("-----Calling getOrganization()-----")
        await Organization.getOrganization();

        console.log("-----Calling uploadOrganizationPhoto()-----")
        await Organization.uploadOrganizationPhoto();
    }

    static async pipeLine() {
        let layoutId = 34770610091023n;

        let pipelineID = 347706113407031n;

        await PipeLine.createPipelines(layoutId);

        await PipeLine.updatePipelines(layoutId);

        await PipeLine.getPipelines(layoutId);

        await PipeLine.getPipeline(layoutId, pipelineID);

        await PipeLine.updatePipeline(layoutId, pipelineID);

        await PipeLine.transferAndDelete(layoutId);
    }

    static async profile() {
        let profileId = 34770610026014n;

        console.log("-----Calling getProfiles()-----");
        await Profile.getProfiles();

        console.log("-----Calling getProfile()-----");
        await Profile.getProfile(profileId);
    }

    static async query() {
        await Query.getRecords();
    }

    static async record() {
        let moduleAPIName = "leads";//Notes attachment testing needed

        let recordId = 347706112964023n; //347706112968011n; //1234678908654321n

        let externalFieldValue = "Last_Name1";

        let recordIds = ["Last_Name112", "347706111158001", "34096430729009"];

        let jobId = "347706112417009";

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        for (let name of names) {
            await Records.getRecords(name);
        }

        console.log("-----Calling getRecord()-----")
        await Records.getRecord(moduleAPIName, recordId);

        await Records.updateRecord(moduleAPIName, recordId);

        await Records.deleteRecord(moduleAPIName, recordId);

        await Records.getRecordUsingExternalId(moduleAPIName, externalFieldValue);

        await Records.updateRecordUsingExternalId(moduleAPIName, externalFieldValue);//ae9c7cefa418aec1d6a5cc2d9ab35c32407e714c2a1e23df4d328ec7cdd71aa0

        await Records.deleteRecordUsingExternalId(moduleAPIName, externalFieldValue);

        console.log("-----Calling getRecords()-----")
        await Records.getRecords(moduleAPIName);

        console.log("-----Calling createRecords()-----");
        await Records.createRecords(moduleAPIName);

        await Records.updateRecords(moduleAPIName);

        await Records.deleteRecords(moduleAPIName, recordIds);

        await Records.upsertRecords(moduleAPIName);

        await Records.getDeletedRecords(moduleAPIName);

        await Records.searchRecords(moduleAPIName);

        await Records.convertLead(347706111075024n);

        console.log("-----Calling uploadPhoto()-----");
        await Records.uploadPhoto(moduleAPIName, recordId);

        console.log("-----Calling getPhoto()-----");
        await Records.getPhoto(moduleAPIName, recordId);

        await Records.deletePhoto(moduleAPIName, recordId);

        await Records.massUpdateRecords(moduleAPIName);

        await Records.getMassUpdateStatus(moduleAPIName, jobId);

        await Records.getRecordCount();

        await Records.assignTerritoriesToMultipleRecords(moduleAPIName);

        await Records.assignTerritoryToRecord(moduleAPIName, recordId);

        await Records.removeTerritoriesFromMultipleRecords(moduleAPIName);

        await Records.removeTerritoriesFromRecord(moduleAPIName, recordId);
    }

    static async relatedList() {
        let moduleAPIName = "Contacts";

        let relatedListId = 34770610236007n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

        for (let name of names) {
            await RelatedList.getRelatedLists(name);
        }

        console.log("-----Calling getRelatedLists()-----")
        await RelatedList.getRelatedLists(moduleAPIName);

        console.log("-----Calling getRelatedList()-----")
        await RelatedList.getRelatedList(moduleAPIName, relatedListId);
    }

    static async relatedRecord() {
        let moduleAPIName = "leads";

        let recordId = 347706113420016n;

        let relatedModuleAPIName = "products";

        let relatedId = 347706113412057n;

        let relatedIds = ["AutomatedSDKExternal", "TestExternalLead121"];

        let externalValue = "LeadsExternal1";

        let externalFieldValue = "AutomatedSDKExternal";

        console.log("-----Calling getRelatedRecords()-----")
        await RelatedRecord.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling updateRelatedRecords()-----")
        await RelatedRecord.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling deLinkRecords()-----")
        await RelatedRecord.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);

        await RelatedRecord.getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);

        await RelatedRecord.updateRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);

        await RelatedRecord.deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, relatedIds);

        console.log("-----Calling getRelatedRecord()-----")
        await RelatedRecord.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId)

        console.log("-----Calling updateRelatedRecord()-----")
        await RelatedRecord.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling deLinkRecord()-----")
        await RelatedRecord.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        await RelatedRecord.getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);

        await RelatedRecord.updateRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);

        await RelatedRecord.deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
    }

    static async role() {
        let roleId = 34770610026005n;

        console.log("-----Calling getRoles()-----")
        await Role.getRoles();

        console.log("-----Calling getRole()-----")
        await Role.getRole(roleId);
    }

    static async sendMail() {
        await SendMail.getEmailAddresses();

        await SendMail.sendMail(347706112558011n, "Leads");
    }

    static async shareRecord() {
        let moduleAPIName = "Leads";

        let recordId = 347706112557026n;

        console.log("-----Calling shareRecord()-----")
        await ShareRecord.shareRecord(moduleAPIName, recordId);

        console.log("-----Calling updateSharePermissions()-----")
        await ShareRecord.updateSharePermissions(moduleAPIName, recordId);

        console.log("-----Calling getSharedRecordDetails()-----")
        await ShareRecord.getSharedRecordDetails(moduleAPIName, recordId);

        console.log("-----Calling revokeSharedRecord()-----")
        await ShareRecord.revokeSharedRecord(moduleAPIName, recordId);
    }

    static async tag() {
        let moduleAPIName = "Leads";

        let tagId = 347706113459005n;

        let recordId = 347706111065025n;

        let tagNames = ["addtag1,addtag12"];

        let recordIds = [347706112557026n, 347706113459004n, 347706113459005n];

        let conflictId = "347706113459004";

        console.log("-----Calling getTags()-----")
        await Tag.getTags(moduleAPIName);

        console.log("-----Calling createTags()-----")
        await Tag.createTags(moduleAPIName);

        console.log("-----Calling updateTags()-----")
        await Tag.updateTags(moduleAPIName);

        console.log("-----Calling updateTag()-----")
        await Tag.updateTag(moduleAPIName, tagId);

        console.log("-----Calling mergeTags()-----")
        await Tag.mergeTags(tagId, conflictId);

        console.log("-----Calling addTagsToRecord()-----")
        await Tag.addTagsToRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling removeTagsFromRecord()-----")
        await Tag.removeTagsFromRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling addTagsToMultipleRecords()-----")
        await Tag.addTagsToMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling removeTagsFromMultipleRecords()-----")
        await Tag.removeTagsFromMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling getRecordCountForTag()-----")
        await Tag.getRecordCountForTag(moduleAPIName, tagId);

        console.log("-----Calling deleteTag()-----")
        await Tag.deleteTag(tagId);
    }

    static async tax() {
        let taxId = 347706113318013n;

        console.log("-----Calling getTaxes()-----")
        await Tax.getTaxes();

        console.log("-----Calling getTax()-----")
        await Tax.getTax(taxId);

        console.log("-----Calling createTaxes()-----")
        await Tax.createTaxes();

        console.log("-----Calling updateTaxes()-----")
        await Tax.updateTaxes();

        console.log("-----Calling deleteTaxes()-----")
        await Tax.deleteTaxes([347706113467002n, 347706113467003n])

        console.log("-----Calling deleteTax()-----")
        await Tax.deleteTax(taxId)
    }

    static async territory() {
        let territoryId = 34770613051357n;

        console.log("-----Calling getTerritories()-----")
        await Territory.getTerritories();

        console.log("-----Calling getTerritory()-----")
        await Territory.getTerritory(territoryId);
    }

    static async user() {
        let userId = 347706113454008n;

        console.log("-----Calling getUsers()-----")
        await User.getUsers();

        console.log("-----Calling getUser()-----")
        await User.getUser(userId);

        console.log("-----Calling updateUsers()-----")
        await User.updateUsers();

        console.log("-----Calling updateUser()-----")
        await User.updateUser(userId);

        console.log("-----Calling deleteUser()-----")
        await User.deleteUser(userId);

        console.log("-----Calling createUser()-----")
        await User.createUser(userId);
    }

    static async variableGroup() {
        let variableGroupId = 34770613089001n;

        let variableGroupAPIName = "General";

        console.log("-----Calling getVariableGroups()-----")
        await VariableGroup.getVariableGroups();

        console.log("-----Calling getVariableGroupById()-----")
        await VariableGroup.getVariableGroupById(variableGroupId);

        console.log("-----Calling getVariableGroupByAPIName()-----")
        await VariableGroup.getVariableGroupByAPIName(variableGroupAPIName);
    }

    static async variable() {
        let variableIds = [347706113471n, 347706113471n];

        console.log("-----Calling createVariables()-----")
        await Variable.createVariables();

        console.log("-----Calling getVariables()-----")
        await Variable.getVariables();

        console.log("-----Calling getVariableById()-----")
        await Variable.getVariableById(347706113471n);

        console.log("-----Calling getVariableForAPIName()-----")
        await Variable.getVariableForAPIName("Variable6621");

        console.log("-----Calling updateVariableByAPIName()-----")
        await Variable.updateVariableByAPIName("Variable6621");

        console.log("-----Calling updateVariableById()-----")
        await Variable.updateVariableById(34770618204003n);

        console.log("-----Calling updateVariables()-----")
        await Variable.updateVariables();

        console.log("-----Calling deleteVariables()-----")
        await Variable.deleteVariables(variableIds);

        console.log("-----Calling deleteVariable()-----")
        await Variable.deleteVariable(347706110670035n)
    }

    static async wizard() {
        let wizardId = 34770619497009n;

        await Wizard.getWizards();

        await Wizard.getWizardById(wizardId, "34770610091055");
    }

    static async testUpload() {
        var url = "https://www.zohoapis.com/v2.1/crm/xxx/bulk-write/xxx/xxx.zip";

        var headers = new Map();

        headers.set("Authorization", "Zoho-oauthtoken 1000.xxxx.xxxx");

        var requestMethod = "GET";

        var apiHeaders = {};

        if (headers) {
            headers.forEach(function (value, key) {
                apiHeaders[key] = value;
            });
        }

        var requestDetails = {
            uri: url,

            method: requestMethod,

            headers: apiHeaders,

            body: null,

            encoding: "utf8"
        };

        var body, xhr, i;

        xhr = new XMLHttpRequest();

        xhr.open(requestDetails.method, requestDetails.uri, true);

        xhr.responseType = "arraybuffer";

        // xhr.headers.Origin = null;

        // xhr.setRequestHeader("Access-Control-Allow-Headers","Origin");
        // xhr.setRequestHeader("Access-Control-Request-Origin", "https://cliq.zoho.com");

        // xhr.setRequestHeader("Origin", null);

        for (i in requestDetails.headers) {
            xhr.setRequestHeader(i, requestDetails.headers[i]);
        }

        body = requestDetails.body || null;

        xhr.send(body);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr);
            }
        }
    }
}