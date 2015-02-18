(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">MBTA Status</a></div><ul class="nav navbar-nav"><li><a href="/">home</a></li><li><a href="/routes">routes</a></li><li><a href="/info">more info</a></li></ul></div></nav><div class="container"><main data-hook="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes/route.jade compiled template
    templatizer["includes"]["route"] = function tmpl_includes_route() {
        return '<li class="route list-group-item"><img data-hook="avatar" width="40" height="40"/><span>&nbsp</span><a data-hook="name"></a><span class="btn-group pull-right"><a data-hook="action-edit" class="btn btn-default">trips</a></span></li>';
    };

    // includes/trip.jade compiled template
    templatizer["includes"]["trip"] = function tmpl_includes_trip() {
        return '<li class="route list-group-item"><img data-hook="avatar" width="40" height="40"/><a data-hook="name"></a><em>&nbsp<span data-hook="summary"><p>&nbsp</p></span></em><span data-hook="locationDetailed"></span><span class="btn-group pull-right"><a target="_blank" data-hook="action-nav" class="btn btn-default">Map</a></span></li>';
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="page home"><h2>Welcome to a skeleton for MBTA Status</h2><p>If you "view source" you\'ll see it\'s 100% client rendered.</p><p>Click around the site using the nav bar at the top. </p><p>Things to note:<ul><li>The url changes, no requests are made to the server.</li><li>Refreshing the page will always get you back to the same page</li><li>Page changes are nearly instantaneous</li><li>In development mode, you don\'t need to restart the server to see changes, just edit and refresh.</li><li>In production mode, it will serve minfied, uniquely named files with super agressive cache headers. To test:<ul> <li>in dev_config.json set <code>isDev</code> to <code>false</code>.</li><li>restart the server.</li><li>view source and you\'ll see minified css and js files with unique names.</li><li>open the "network" tab in chrome dev tools (or something similar). You\'ll also want to make sure you haven\'t disabled your cache.</li><li>without hitting "refresh" load the app again (selecting current URL in url bar and hitting "enter" works great).</li><li>you should now see that the JS and CSS files were both served from cache without making any request to the server at all.</li></ul></li></ul></p></section>';
    };

    // pages/info.jade compiled template
    templatizer["pages"]["info"] = function tmpl_pages_info() {
        return '<section class="page pageTwo"><h2>Simple Page Example</h2><p>This page was rendered by a simple page view file at client/pages/info.js.</p></section>';
    };

    // pages/routeView.jade compiled template
    templatizer["pages"]["routeView"] = function tmpl_pages_routeView() {
        return '<section class="page view-route"><div margin-top="10px"></div><img data-hook="avatar" width="80" height="80"/><div style="display:inline-table; margin:1em;"><h2 data-hook="name"></h2><h4 data-hook="id"></h4></div><span class="btn-group"><a target="_blank" data-hook="action-nav" class="btn btn-default">Trips</a></span><ul><li data-hook="details"></li><li data-hook="alerts"></li></ul></section>';
    };

    // pages/routesView.jade compiled template
    templatizer["pages"]["routesView"] = function tmpl_pages_routesView() {
        return '<section class="page pageOne"><h2>Current Routes</h2><h5>Real-Time Data</h5><ul data-hook="routes-list" class="list-group"></ul><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">.fetch()</button></div></section>';
    };

    // pages/tripsView.jade compiled template
    templatizer["pages"]["tripsView"] = function tmpl_pages_tripsView() {
        return '<section class="page view-trips"><h2>Current Trips</h2><h5>Real-Time Data<ul data-hook="trips-list" class="list-group"></ul><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">.fetch()</button></div></h5></section>';
    };

    return templatizer;
}));