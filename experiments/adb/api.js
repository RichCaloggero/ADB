"use strict";

/* global Components, ExtensionAPI */
var Cc = Components.classes;
var Ci = Components.interfaces;
var Cu = Components.utils;
Cu.import("resource://gre/modules/jsdebugger.jsm");
Cu.import("resource://gre/modules/Console.jsm");
var DEBUG_CONTRACTID = "@mozilla.org/xpcom/debug;1";

// This simply defines 'Debugger' in this Scratchpad;
// it doesn't actually start debugging anything.
//addDebuggerToGlobal(this);
//var debugger = new Debugger;

var adb = class extends ExtensionAPI {
  getAPI() {
    return {
      experiments: {
        adb: {
          async attachDebugger () {
            return {name: "Rich", stuff:"cool"};
/*var debug = Cc[DEBUG_CONTRACTID].getService(Ci.nsIDebug2);
            return {debug: debug, debugger: debugger};
            //debug.abort(0, 0);
          */
          },
        },
      },
    };
  }
};
