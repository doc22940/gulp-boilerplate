/**
 * Gulp Boilerplate main scripting file *
 * @author Tony Phipps
 * @version 1.0.0
 * Copyright 2016. MIT licensed.
 */

 /**
  * Why do we need config?
  * All URLs needed by the JavaScript
  * Any strings that are displayed to the user
  * Any HTML that needs to be created from JavaScript
  * Settings (i.e., items per page)
  * Repeated unique values
  * Any value that may change in the future
  */

(function (GulpBoilerplate, $, undefined) {

	GulpBoilerplate.config = {
		language: 'english',
    debug: true,
		appId: '111111111111111',
		urls : {
			"404" : "404.html",
			"500" : "500.html",
			homepage : 'index.html'
		},
		services : {
			FBLogin : '/projectname/mvc/services/1.0/validateFBUser',
			FBLogout : '/projectname/mvc/services/1.0/logoutFBUser',
			checkFacebookUser : "/projectname/mvc/services/1.0/checkFacebookUser"
		},
		theme: {
			skin: 'a',
			toolbars: {
				index: 'ui-navigation-toolbar',
				pages: 'ui-custom-toolbar'
			},
			messages: {
				loading : "Loading...",
				ajaxRequestFail : "Server not responding. Please try again or try after sometime.",
				serviceErrorHTML: "<p class='errorText'>Something went wrong</p>"
			},
			defaults : {
				noRecordsTrendingStories : 6,
				noRecordsOtherVideos : 10,
				noRecordsMoreSupporter : 3
			}
		}
	};

/**
 * Check to evaluate whether 'GulpBoilerplate' exists in the global namespace.
 * If not, assign window.GulpBoilerplate an object literal.
 */
}(window.GulpBoilerplate = window.GulpBoilerplate || {}, jQuery));
