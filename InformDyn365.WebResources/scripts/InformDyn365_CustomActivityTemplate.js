var FORM_TYPE_CREATE = 1;
var FORM_TYPE_UPDATE = 2;
var FORM_TYPE_READ_ONLY = 3;
var FORM_TYPE_DISABLED = 4;
var FORM_TYPE_QUICK_CREATE = 5;
var FORM_TYPE_BULK_EDIT = 6;

function formOnLoad() {

    var formType = Xrm.Page.ui.getFormType();

    if (formType == FORM_TYPE_CREATE) {
        Xrm.Page.getControl('WebResource_ShowEntityFields').setVisible(false);
        Xrm.Page.getAttribute('informdyn365_customentityname').setRequiredLevel('none');
    }
    if (formType == FORM_TYPE_UPDATE) {
        Xrm.Page.getControl('WebResource_ShowEntityFields').setVisible(true);
        Xrm.Page.getAttribute('informdyn365_customentityname').setRequiredLevel('required');
        
    }

};