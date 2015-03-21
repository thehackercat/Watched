﻿(function () {
    "use strict";

    var nav = WinJS.Navigation;
    var session = WinJS.Application.sessionState;
    var util = WinJS.Utilities;

    // Get the groups used by the data-bound sections of the Hub.
   

    function alert(message) {
        var msgBox = new Windows.UI.Popups.MessageDialog(message);
        msgBox.showAsync();
    }

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        _items: null,

        init: function (element, options) {
            // options.item = [item.group.key, item.id]

            var movieItem = Data.resolveItemReference(options.item);

            // 其实我不需要这个group的对吧 
            // var group = Data.resolveGroupReference(options.item[0]);
            
            //  this._items = Data.getItemsFromGroup(group);
            this._pageTitle = movieItem.title;

            

            alert("电影详情页面还没有做好哦");
        },
       
        

        processed: function (element) {
            return WinJS.Resources.processAll(element);
        },

        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var hub = element.querySelector(".hub").winControl;
            hub.onheaderinvoked = function (args) {
                args.detail.section.onheaderinvoked(args);
            };
            hub.onloadingstatechanged = function (args) {
                if (args.srcElement === hub.element && args.detail.loadingState === "complete") {
                    hub.onloadingstatechanged = null;
                }
            }

            // TODO: Initialize the page here.
        },
        
        itemDataSource: item.dataSource,

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },
    });
})();