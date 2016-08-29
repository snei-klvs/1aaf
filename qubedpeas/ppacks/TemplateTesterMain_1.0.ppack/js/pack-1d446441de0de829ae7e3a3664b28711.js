TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.AppFunctions={runAllTestsForModuleWithName:function(e){var t=TRUN.Common.AppFunc.getModuleFromModuleName(e);QPU.isNoE(t)||QPU.isNoE(t.testCases)||Object.keys(t.testCases).forEach(function(e){var n=t.testCases[e];"undefined"!=typeof n&&QPU.isFunction(n)&&(n=new n,TRUN.Common.AppFunc.isValidTestCase(n)&&TRUN.Common.AppFunc.runTestCase(n))})},runTestWithNameForModuleWithName:function(e,t){var n=TRUN.Common.AppFunc.getModuleFromModuleName(t);if(!QPU.isNoE(n)&&!QPU.isNoE(n.testCases))for(var o=Object.keys(n.testCases),s=0;s<o.length;s++){var r=o[s],a=n.testCases[r];QPU.isFunction(a)&&(a=new a,a.name===e&&TRUN.Common.AppFunc.runTestCase(a))}},isValidTestCase:function(e){return!QPU.isNoE(e)&&!QPU.isNoE(e.req)&&!QPU.isNoE(e.req.run)},runTestCase:function(e){TRUN.Common.AppFunc.isValidTestCase(e)&&(QPU.isNoE(e.description)||QPT.results.addResults(e.module.name,e.name,null,e.description),e.req.run())},getModuleFromModuleName:function(e){if(QPU.isNoE(QPTestModules))return null;for(var t=Object.keys(QPTestModules),n=0;n<t.length;n++){var o=t[n],s=QPTestModules[o];if(!QPU.isNoE(s.name)&&(s.name===e||s.displayName===e))return s}return null},isLocalMode:function(){var e=location.protocol;location.host;return!!QPU.contains(e,"file:",!0)||(!(!QPU.contains(location.href,".ppatch/",!0)&&!QPU.contains(location.href,".ppod/",!0))||!!QPU.getBooleanValue(QPU.getURLParamValue("localMode")))}},TRUN.Common.AppFunc=TRUN.Common.AppFunctions,TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.LocalDataConnector=function(){var e=this,t=!1,n=function(){t=r.isLocalStorageSupported()},o={debug:!1,enableLocalStorage:!0},s={save:function(e,t){QPU.isNoE(t)||QPU.isString(t)||!QPU.isObject(t)||(t=JSON.stringify(t)),r.saveLocalOrCookie(e,t)},get:function(e){var t=r.getLocalOrCookie(e);return r.getObjectOrString(t)}},r={saveLocalOrCookie:function(e,n){t?r.saveWithLocalStorage(e,n):r.saveWithCookieStorage(e,n)},getLocalOrCookie:function(e){return t?r.getWithLocalStorage(e):r.getWithCookieStorage(e)},saveWithLocalStorage:function(e,t){QPU.isNoE(e)||(QPU.isNoE(t)?localStorage.removeItem(e):localStorage.setItem(e,t))},getWithLocalStorage:function(e){return QPU.isNoE(e)?null:localStorage.getItem(e)},saveWithCookieStorage:function(e,t){QPU.isNoE(e)||(QPU.isNoE(t)?QPU.deleteCookie(e):QPU.setCookie(e,t,30))},getWithCookieStorage:function(e){return QPU.isNoE(e)?null:QPU.getCookie(e)},isLocalStorageSupported:function(){if(!e.options.enableLocalStorage)return!1;try{var t="_test_";return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return!1}},getObjectOrString:function(e){try{var t=JSON.parse(e);if(!QPU.isNoE(t)&&QPU.isObject(t))return t}catch(e){}return e}};return e.req=s||null,e.options=o||null,n(),e},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.StringsController=function(){var e=this,t={};e.keys={ACTION_ALL:"all",ACTION_RUN:"run",ACTION_CLEAR:"clear",ALL_MODULES_TITLE:"Test Modules"};var n=function(){r.hangOutSpecialPublicValues()},o={debug:!1,debugCurrentLocale:!0,defaultToKey:!0,debugFileLoading:!0,debugMissingKeys:!1},s={get:function(e){if(!QPU.isNoE(t)){var n=t[e];return QPU.isNoE(n)&&o.debugMissingKeys&&logError("Strings file missing KEY:",e),QPU.isNoE(n)?e:n}return e},getTranslationsObject:function(){return t},getTranslationKeysContaining:function(e){var n=Object.keys(t),o={};return n.forEach(function(n){QPU.contains(n,e,!1)&&(o[n]=t[n])}),o},getTranslationsContaining:function(e){var n=Object.keys(t),o={};return n.forEach(function(n){var s=t[n];QPU.contains(s,e,!1)&&(o[n]=t[n])}),o}},r={hangOutSpecialPublicValues:function(){e.get=e.req.get;var t=Object.keys(e.keys);t.forEach(function(t){e[t]=function(){return r.getValueForKey(e.keys[t])}})},getValueForKey:function(t){return e.req.get(t)}},a={};return e.req=s||null,e.options=o||null,e.callbackHandlers=a||null,n(),e},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.URLController=function(){var e=this,t=null,n=function(){TRUN.Common.AppFunctions.isLocalMode()&&(t=new TRUN.Common.URLTestController)};e.options={debug:!1,isForcingLocalTesting:!1};var o={SERVICE_URL:"someUrlHere"},s={getServiceURL:function(){var e=o.SERVICE_URL;return r.getFinalURL(e,"getServiceURL")}},r={logURL:function(t,n){e.options.debug&&(log("+ - - - - - - - - - - +"),QPU.isNoE(n)||log("URL:",n),log(t),log("+ - - - - - - - - - - +"))},getFinalURL:function(e,t){var n=r.getAnyDefinedTestURL(t),o=n||e;return r.logURL(o,t),o},getAnyDefinedTestURL:function(e){if(QPU.isNoE(e))return null;if(!QPU.isNoE(t)&&!QPU.isNoE(t.req[e])){var n=t.req[e]();if(!QPU.isNoE(n))return n}return null}};return e.req=s||null,n(),e},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.URLTestController=function(){var e=this,t=function(){},n={getServiceURL:function(){return o.getTestResourceURL("/Service1/success.json")}},o={getTestResourceURL:function(e){var t=o.getRelativePathToTestData();QPU.startsWith(e,"/")||(e="/"+e);var n=t+e+"?";return QPU.replaceFor(n,"//","/")},getRelativePathToTestData:function(){var e=location.pathname,t=QPU.fLeftBack(e,"/")+"/";return QPU.contains(e,"/Shed/testRunner/")?(t=QPU.fLeftBack(t,"/Shed/testRunner/"),t+="/test/testData"):QPU.contains(e,"/Shed/classView/")?(t=QPU.fLeftBack(t,"/Shed/testRunner/"),t+="/test/testData"):QPU.contains(e,"/_deploy/")?(t=QPU.fLeftBack(t,"/_deploy/"),t+="/_deploy/test/testData"):QPU.contains(e,"/source/")?(t=QPU.fLeftBack(t,"/source/"),t+="/source/test/testData"):QPU.contains(e,"/templates/")?(t=QPU.fLeftBack(t,"/templates/"),t+="/test/testData"):t="test/testData",t}};return e.req=n||null,t(),e},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.ModuleItem=function(e){var t=this;t.moduleName=!1,t.isAllPassed=!1,t.isAnyFailed=!1,t.testCaseList=[],t.birthday=new Date;var n=new QPObserverController,o={moduleItemUpdated:function(e){QPU.breath(function(){n.tellAllObservers("moduleItemUpdated",e)})}},s=function(){n.addObserver(e)},r={isValid:function(){return!0},getShortNameForDisplay:function(){return t.moduleName}},a={};return t.req=r||null,t.observerCallbacks=o||null,t.callbackHandlers=a||null,s(),t},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.TestCaseItem=function(e){var t=this;t.moduleName=!1,t.testCaseName=!1,t.isPassed=!1,t.isFailed=!1,t.testResultList=[],t.birthday=new Date;var n=new QPObserverController,o={testCaseItemUpdated:function(e){QPU.breath(function(){n.tellAllObservers("testCaseItemUpdated",e)})}},s=function(){n.addObserver(e)},r={addResultItem:function(e){QPU.isNoE(e)||(e.isFailed?(t.isPassed=!1,t.isFailed=!0):e.isPassed&&!t.isFailed&&(t.isPassed=!0),t.testResultList.push(e),o.testCaseItemUpdated(t))}},a={};return t.req=r||null,t.observerCallbacks=o||null,t.callbackHandlers=a||null,s(),t},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.TestResultItem=function(){var e=this;return e.moduleName=!1,e.testCaseName=!1,e.isPassed=!1,e.isFailed=!1,e.message=null,e.birthday=new Date,e},QPTestModules="undefined"==typeof QPTestModules?{}:QPTestModules,QPTestModules.TestModuleQPT=function(e,t){var n=this;return n.moduleName=e||null,n.testName=t||null,n.assert=function(e,t){return QPT.assert(e,t,n.testName,n.moduleName)},n.notNull=function(e,t){return QPT.notNull(e,t,n.testName,n.moduleName)},n.isNull=function(e,t){return QPT.isNull(e,t,n.testName,n.moduleName)},n.notEquals=function(e,t,o){return QPT.notEquals(e,t,o,n.testName,n.moduleName)},n.isEquals=function(e,t,o){return QPT.isEquals(e,t,o,n.testName,n.moduleName)},n.output=function(e){return QPT.output(e,n.testName,n.moduleName)},n},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.ActiveModulesController=TRUN.Common.ActiveModulesController||function(e){var t=this,n=new QPObserverController,o=null,s=[],r={activeModulesControllerModuleAdded:function(e){n.tellAllObservers("activeModulesControllerModuleAdded",e)},activeModulesControllerModuleRemoved:function(e){n.tellAllObservers("activeModulesControllerModuleRemoved",e)},activeModulesControllerCleared:function(){n.tellAllObservers("activeModulesControllerCleared")}},a=function(){n.addObserver(e),o=new TRUN.Common.LocalDataConnector,QPU.breath(500,u.hydrate)},i={debug:!1};t.CONST={FAV_LIST_KEY:"com.qubedpeas.favoritesList",CURRENT_COLLECTION_KEY:"com.qubedpeas.currentList"};var l={getActiveModules:function(){return s},getActiveModuleNameList:function(){return u.getActiveModuleNameList()},isActive:function(e){return s.contains(e)},addModule:function(e){QPU.isNoE(e.name)||(s.pushUnique(e),u.saveCurrentListToDisk(),r.activeModulesControllerModuleAdded(e))},removeModule:function(e){s.popElement(e),u.saveCurrentListToDisk(),r.activeModulesControllerModuleRemoved(e)},clear:function(){s=[],u.saveCurrentListToDisk(),r.activeModulesControllerCleared()},addObserver:function(e){n.addObserver(e)},removeObserver:function(e){n.removeObserver(e)},removeAllObservers:function(){n.removeAllObservers()},destroy:function(){l.removeAllObservers(),u.detachUserActionHandlers()}},u={hydrate:function(){var e=new TRUN.Common.LocalDataConnector,n=e.req.get(t.CONST.CURRENT_COLLECTION_KEY),o=QPU.arrayFromString(n,",");if(!QPU.isNoE(o)){if(s=[],"undefined"==typeof QPTestModules||QPU.isNoE(QPTestModules))return;o.forEach(function(e){var t=TRUN.Common.AppFunc.getModuleFromModuleName(e);if(!QPU.isNoE(t)){var n=QPT.results.getTestModuleWithName(t.name);QPU.isNoE(n)||s.push(n)}}),u.saveCurrentListToDisk()}},saveCurrentListToDisk:function(){o.req.save(t.CONST.CURRENT_COLLECTION_KEY,u.getActiveModuleNameListAsString())},getActiveModuleNameList:function(){if(QPU.isNoE(s))return null;var e=[];return s.forEach(function(t){QPU.isNoE(t.name)||e.push(t.name)}),e},getActiveModuleNameListAsString:function(){if(QPU.isNoE(s))return null;var e=u.getActiveModuleNameList();return QPU.isNoE(e)?null:e.toString()},getAvailableQPTRSystemModuleList:function(){return QPU.isNoE(QPTestModules)?null:QPTestModules},getQPTRSystemModuleFromName:function(e){for(var t=l.getAvailableQPTRSystemModuleList(),n=Object.keys(t),o=0;o<n.length;o++){var s=n[o],r=t[s];if(r.name===e||s===e)return r}return null}},c={};return t.req=l||null,t.options=i||null,t.callbackHandlers=c||null,t.observerCallbacks=r||null,a(),t},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.AllPartsLoaderController=TRUN.Common.AllPartsLoaderController||function(e){var t=this,n=new QPObserverController,o={allPartsLoaderControllerLoadCompleted:function(){n.tellAllObservers("allPartsLoaderControllerLoadCompleted")}},s=function(){n.addObserver(e)},r={debug:!1},a={loadWithURLPathToAllPodsConfig:function(e){i.loadAllPartsConfigByHandWithURL(e)},initializeAllModules:function(){Object.keys(QPTestModules).forEach(function(e){var t=QPTestModules[e];QPU.isNoE(t.testCases)||QPU.isNoE(t.name)||Object.keys(t.testCases).forEach(function(e){var n=t.testCases[e];if(QPU.isFunction(n)&&(n=new n,TRUN.Common.AppFunc.isValidTestCase(n))){QPT.results.addResults(t.name,n.name,null,null);var o=QPT.results.getTestModuleWithName(t.name);o.displayName=i.getDisplayNameFromModuleName(t.name),o.req.clearResults()}})})},addObserver:function(e){n.addObserver(e)},removeObserver:function(e){n.removeObserver(e)},removeAllObservers:function(){n.removeAllObservers()},destroy:function(){a.removeAllObservers(),i.detachUserActionHandlers()}},i={loadAllPartsConfigByHandWithURL:function(e){var n=new QPURLConnector(t.callbackHandlers,e);n.req.start()},getDisplayNameFromModuleName:function(e){return QPU.unCamelCaseString(e)},removeCommentsFromConfigFile:function(e){return e=e.replace(/\/\/[^\n]*\n/g,""),e=e.replace(/\/\*([\s\S]*?)\*\//g,"")},getStringsFromResourceArray:function(e){if(QPU.isNoE(e))return null;var t=[];return e.forEach(function(e){QPU.isString(e)?t.push(e):QPU.isArray(e)?t.extend(i.getStringsFromResourceArray(e)):QPU.isObject(e)&&!QPU.isNoE(e.resourceArray)&&t.extend(i.getStringsFromResourceArray(e.resourceArray))}),QPU.isNoE(t)?null:t},fileInstallationCompleted:function(){a.initializeAllModules(),o.allPartsLoaderControllerLoadCompleted()}},l={urlConnectorPullSucceeded:function(e){var n=null;try{var o=i.removeCommentsFromConfigFile(e.responseText);n=JSON.parse(o)}catch(n){return logError("COULD NOT PARSE CONFIG",n),void t.callbackHandlers.urlConnectorPullFailed(e)}r.debug&&log(n,e);var s=[],a=[];a.extend(i.getStringsFromResourceArray(n.resourceArray)),s.push(e.url);for(var l=0;l<a.length;l++){var u=a[l],c=u;QPU.endsWith(c,".ppod")||(c=QPU.fLeftBack(u,"/"));var d=QPU.fLeft(e.url,"Common.ppod/config/")+"Common.ppod/config/",m=d+c;QPU.endsWith(m,".ppod")||(m+="/.."),m+="/test/testModules/",m+="/config/testModule.config.json",m=QPU.replaceFor(m,"//","/"),r.debug&&(log("---------------"),log("partConfigURL",u),log("partConfigPath",c),log("relativePath",d),log("pathToTests",m)),s.push(m)}r.debug&&log("configList",s),QPInstall(s,i.fileInstallationCompleted)},urlConnectorPullFailed:function(e){log("All PPods config did not load",e)}};return t.req=a||null,t.options=r||null,t.callbackHandlers=l||null,t.observerCallbacks=o||null,s(),t},TRUN="undefined"==typeof TRUN?{}:TRUN,TRUN.Common="undefined"==typeof TRUN.Common?{}:TRUN.Common,TRUN.Common.Def="undefined"==typeof TRUN.Common.Def?{}:TRUN.Common.Def,TRUN.Common.Def.Model=function(){var e=this;e.TRANS=null,e.URLS=null,e.activeModuleController=null,e.localDataConnector=null;var t=function(){e.TRANS=new TRUN.Common.StringsController,e.URLS=new TRUN.Common.URLController,e.localDataConnector=new TRUN.Common.LocalDataConnector,e.activeModuleController=new TRUN.Common.ActiveModulesController},n={installActiveModules:function(){e.activeModuleController=new TRUN.Common.ActiveModulesController}},o={};e.req=n||null,e.callbackHandlers=o||null;var s="TRUN-Model-Singleton-Object";return window.Singletons||(window.Singletons={}),window.Singletons[s]?window.Singletons[s]:(window.Singletons[s]=this,t(),e)},"undefined"!=typeof TRUN.Common.Model&&null!==TRUN.Common.Model||(TRUN.Common.Model=new TRUN.Common.Def.Model),function(e){e.fn.makeDraggable=function(t){var n="mmDraggable",o="mmActiveHandle",s={handle:"",cursor:"move",onmouseup:null,onmousedown:null};t=e.extend(s,t);var r=""===t.handle?this:this.find(t.handle);return r.css("cursor",t.cursor).on("mousedown",function(s){var r=""===t.handle?e(this).addClass(n):e(this).addClass(o).parent().addClass(n),a=r.css("z-index"),i=r.outerHeight(),l=r.outerWidth(),u=r.offset().top+i-s.pageY,c=r.offset().left+l-s.pageX;if(r.css("z-index",1e5).parents().on("mousemove",function(t){e("."+n).offset({top:t.pageY+u-i,left:t.pageX+c-l}).css("bottom","auto").css("right","auto").on("mouseup",function(){e(this).removeClass(n).css("z-index",a)})}),null!==t.onmousedown&&"function"==typeof t.onmousedown)try{t.onmousedown()}catch(e){}s.preventDefault()}).on("mouseup",function(){if(""===t.handle?e(this).removeClass(n):e(this).removeClass(o).parent().removeClass(n),null!==t.onmouseup&&"function"==typeof t.onmouseup)try{t.onmouseup()}catch(e){}})}}(jQuery),TRUN=QPU.definePod("TRUN"),TRUN.TemplateTesterMain=QPU.definePod("TRUN.TemplateTesterMain"),TRUN.TemplateTesterMain.MainUITVC=TRUN.TemplateTesterMain.MainUITVC||function(e,t){var n=this;n.viewObject=t;var o,s,r,a,i,l,u,c,d=new QPObserverController,m=TRUN.Common.Model||{},f=(TRUN.Common.PatchFunctions||{},TRUN.TemplateTesterMain.PodFunctions||{},[]),T=null,U=null,N={},C={},v={},R=function(){d.addObserver(e),b.initializeMainViewObject(),b.setUpObjects(),b.setUpAllTestSuiteItemsFound(),b.initializeSettings(),b.setSelectedTestDefinition(),b.attachUserActionHandlers(),c.append(n.viewObject),S.redraw()},P={debug:!1},g={SETTINGS_KEY:"TemplateTestRunnerSettings"},p={VIEW_TITLE:"tr_title",VIEW_TITLE_AREA:"tr_header_bar",EXPAND_COLLAPSE_ITEM:"tr_expand_collapse_item",SUITE_ACTION_BAR_AREA:"tr_action_bar_area",CONTENT_AREA:"tr_content_area",TOC_AREA:"tr_toc_area",TEST_AREA:"tr_test_list_area",TEST_SUITE_ACTION_BAR:"tr_action_bar",ARROW_UP:"arrow_up",ARROW_DOWN:"arrow_down",TOC_ITEM:"tr_toc_item",TEST_ITEM:"tr_test",SELECTED:"selected",COLLAPSED:"collapsed"},E={BASE_TEMPLATE:"TRUN.TemplateTesterMain.MainUITVC.Template"},A={getViewTitle:function(){return n.viewObject.find("."+p.VIEW_TITLE)},getHeaderBar:function(){return n.viewObject.find("."+p.VIEW_TITLE_AREA)},getExpandCollapseItem:function(){return n.viewObject.find("."+p.EXPAND_COLLAPSE_ITEM)},getSuiteActionBar:function(){return n.viewObject.find("."+p.SUITE_ACTION_BAR_AREA)},getContentArea:function(){return n.viewObject.find("."+p.CONTENT_AREA)},getTOCArea:function(){return n.viewObject.find("."+p.TOC_AREA)},getTestArea:function(){return n.viewObject.find("."+p.TEST_AREA)},getNewViewFromTemplate:function(){return $(QPTemplates.getTemplateValue(E.BASE_TEMPLATE))}},Q={addObserver:function(e){d.addObserver(e)},removeObserver:function(e){d.removeObserver(e)},removeAllObservers:function(){d.removeAllObservers()},destroy:function(){Q.removeAllObservers(),b.detachUserActionHandlers()}},O={tocItemPressed:function(e){U=e,N.selectedTOCName=U.testName,b.saveCurrentSettings(),S.redraw()},expandCollapseItemPressed:function(e){N.isCollapsed=!N.isCollapsed,b.saveCurrentSettings(),S.redraw(),e.preventDefault()},dragUIStart:function(e){},dragUIEnd:function(e){}},S={redraw:function(){return QPU.isNoE(T)?void n.viewObject.hide():(S.redrawTitle(),S.redrawExpandCollapseState(),S.redrawSuiteActionBar(),S.redrawTOC(),void S.redrawTest())},redrawExpandCollapseState:function(){r.removeClass(p.ARROW_UP),r.removeClass(p.ARROW_DOWN),N.isCollapsed?(r.addClass(p.ARROW_UP),n.viewObject.addClass(p.COLLAPSED),S.clearAnyPositioning()):(r.addClass(p.ARROW_DOWN),n.viewObject.removeClass(p.COLLAPSED))},redrawTitle:function(){N.isCollapsed?o.html(""):o.html(T.suiteName)},redrawSuiteActionBar:function(){a.empty(),QPU.isNoE(T.suiteActionBarObject)?a.hide():(a.show(),a.append(T.suiteActionBarObject))},redrawTOC:function(){l.empty();for(var e,t=null,n=0;n<T.testList.length;n++)e=T.testList[n],t=$("<div class='"+p.TOC_ITEM+"'>"+e.testName+"</div>"),l.append(t),e===U&&t.addClass(p.SELECTED),b.attachUserActionHandlersToTOCItem(t,e)},redrawTest:function(){u.empty();var e=U.testObject;u.append(e)},clearAnyPositioning:function(){n.viewObject.removeAttr("style")}},b={initializeMainViewObject:function(){QPU.isNoE(n.viewObject)&&(n.viewObject=A.getNewViewFromTemplate()),QPU.isNoE(n.viewObject)&&logError("View controller created without a valid view object"),QPU.isNoE(c)&&(c=$("body"))},setUpObjects:function(){o=A.getViewTitle(),s=A.getHeaderBar(),r=A.getExpandCollapseItem(),a=A.getSuiteActionBar(),i=A.getContentArea(),l=A.getTOCArea(),u=A.getTestArea()},setUpAllTestSuiteItemsFound:function(){var e=c.find("div[suitename]");T=null,QPU.isNoE(e)?logError("To use Test Runner Test Case UI you need a div with the attribute of 'suitename' somewhere with the controled page or object."):(e.each(function(e,t){var n=$(t),o=n.find("."+p.TEST_SUITE_ACTION_BAR);if(o.length>0&&(o=$(o[0])),QPU.isNoE(QPU.trim(o.html()))&&(o=null),!QPU.isNoE(n)){var s=n.attr("suitename"),r=c.find("div[testname]");if(!QPU.isNoE(r)){var a={suiteName:s,testList:[],suiteActionBarObject:o};f.push(a),n.hide(),r.each(function(e,t){var n={testObject:$(t),testName:$(t).attr("testname")};a.testList.push(n)})}}}),T=f[0])},setSelectedTestDefinition:function(){if(U=null,!QPU.isNoE(T)&&!QPU.isNoE(T.testList)){if(!QPU.isNoE(N.selectedTOCName))for(var e=0;e<T.testList.length;e++){var t=T.testList[e];if(t.testName===N.selectedTOCName){U=t;break}}QPU.isNoE(U)&&(U=T.testList[0])}},attachUserActionHandlersToTOCItem:function(e,t){e.bind("click",function(e){e.preventDefault(),O.tocItemPressed(t)})},attachUserActionHandlers:function(){r.bind("click",O.expandCollapseItemPressed);var e={handle:s,onmousedown:O.dragUIStart,onmouseup:O.dragUIEnd};n.viewObject.makeDraggable(e)},detachUserActionHandlers:function(){},saveCurrentSettings:function(){m.localDataConnector.req.save(g.SETTINGS_KEY,C)},initializeSettings:function(){if(!QPU.isNoE(T)){C={templates:{}};var e=b.getSuiteSettingsKey();C.templates[e]={isCollapsed:!1,selectedTOCName:null};var t=m.localDataConnector.req.get(g.SETTINGS_KEY);return C=QPU.merge(C,t),logIf(P.debug,"loaded settings",C),N=b.getSuiteSettings(),C}},getSuiteSettings:function(){return QPU.isNoE(C)?{}:C.templates[b.getSuiteSettingsKey()]||{}},getSuiteSettingsKey:function(){var e=QPU.fRightBack(QPU.fLeftBack(location.pathname,".ppod"),"/")||"n/a",t=QPU.fLeft(QPU.fRightBack(location.pathname,"/")+".",".")||"n/a";return e+":"+t}},h={};return n.req=Q||null,n.options=P||null,n.callbackHandlers=h||null,n.observerCallbacks=v||null,R(),n},TestRunner="undefined"==typeof TestRunner?{}:TestRunner,TestRunner.launchTRTestCaseUI=function(){return new TRUN.TemplateTesterMain.MainUITVC},TestRunner.assert=function(e,t,n){var o=function(t,n){var o=null;try{o=$("."+n)}catch(e){}if(QPU.isNoE(o)&&QPU.isA(t)){try{o=$("."+t)}catch(e){}QPU.isA(o)&&(t=n)}var s=this,r=!1;if(QPU.isA(o)){s.classes={PASS:"pass",FAIL:"fail",IN_PROGRESS:"in_progress",RESULTS_AREA:"tr_result",ICON_OBJ:"tr_icon",RESULT_ITEM:"tr_result_item"};var a=o.find("."+s.classes.RESULTS_AREA),i=o.find("."+s.classes.ICON_OBJ);if(QPU.isA(a)){var l=t;QPU.isObject(l)&&(l=JSON.stringify(l));var u=$("<div>"+l+"</div>");QPUI.addClass(u,s.classes.RESULT_ITEM),QPU.isNoE(e)?QPUI.addClass(u,s.classes.IN_PROGRESS):e?(QPUI.addClass(u,s.classes.PASS),r=!0):QPUI.addClass(u,s.classes.FAIL),a.append(u)}QPU.isA(i)&&(QPUI.removeClass(i,s.classes.PASS),QPUI.removeClass(i,s.classes.FAIL),QPUI.removeClass(i,s.classes.IN_PROGRESS),QPU.isNoE(e)?QPUI.addClass(i,s.classes.IN_PROGRESS):QPUI.assertClass(e,i,s.classes.PASS,s.classes.FAIL))}QPU.isNoE(e)?log("[message] ",t):e?log("[pass] ",t):logWarn("[fail] ",t)};return QPU.isA(n)&&o(n,t),{onPass:function(n,s){return e&&o(n,s||t),this},onFail:function(n,s){return e||o(n,s||t),this},on:function(n,s,r){switch(n===!0?n="pass":n===!1&&(n="fail"),n.toLowerCase()){case"pass":e&&o(s,r||t);break;case"fail":e||o(s,r||t)}return this}}},TestRunner.message=function(e,t){QPU.isNoE(t)&&QPU.isA(e)?TestRunner.assert(null,null,e):QPU.isA(t)&&QPU.isNoE(e)?TestRunner.assert(null,null,t):QPU.isA(t)&&QPU.isA(e)&&TestRunner.assert(null,t,e)},TRUN=QPU.definePod("TRUN"),TRUN.TemplateTesterMain=QPU.definePod("TRUN.TemplateTesterMain"),TRUN.TemplateTesterMain.PodFunctions=TRUN.TemplateTesterMain.PodFunctions||{podName:function(){return"TemplateTesterMain"}};