(function () {
    window.BMap_loadScriptTime = (new Date).getTime();
    var getContextPath = function (jsUrl) {
        if (!jsUrl) {
            throw 'param JSURL must not null';
        }
        var script = document.getElementsByTagName('script');
        jsUrl = jsUrl.indexOf('/') === 0 ? jsUrl.substring(1) : jsUrl;
        for (var q = 0; q < script.length; q++) {
            var h = !!document.querySelector ? script[q].src : script[q].getAttribute("src", 4),
                i;
            if (h && (i = h.indexOf(jsUrl)) >= 0) {
                var j = h.indexOf('://');
                return j < 0 ? h.substring(0, i - 1) : h.substring(h.indexOf('/', j + 3), i - 1);
            }
        }
        return '/';
    };
    document.write('<script type="text/javascript" src="', getContextPath('api.js'),'/getscript.js"></script>');
})();