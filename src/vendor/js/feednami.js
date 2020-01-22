//v1.0.1
// to make this compat with modern builds this was composed using the cdn: 
// https://storage.googleapis.com/feednami-static/js/feednami-client-v1.0.1.js

export default {
    load: function (options, callback) {
        var apiRoot = 'https://api.feednami.com/api/v1'
        var feedUrl = options
        if (typeof options === 'object') {
            feedUrl = options.url
        }
        var qs = 'url=' + feedUrl
        if (options.format) {
            qs += '&include_xml_document&format=' + options.format
        }
        if (options.includeXml) {
            qs += '&include_xml_document'
        }
        var url = apiRoot + '/feeds/load?' + qs
        if (window.XDomainRequest) {
            var script = document.createElement('script')
            var callbackName = 'jsonp_callback_'
                + new Date().getTime() + '_'
                + Math.round(1000000 * Math.random());
            url += '&jsonp_callback=' + callbackName
            window[callbackName] = function (data) {
                callback(data);
                document.body.removeChild(script);
                window[callbackName] = null
                try {
                    delete window[callbackName];
                }
                catch (e) {

                }
            };
            script.src = url
            document.body.appendChild(script)
        }
        else {
            var req = new XMLHttpRequest()
            req.onreadystatechange = function () {
                if (req.readyState === 4) {
                    callback(JSON.parse(req.responseText))
                }
            }
            req.open('GET', url)
            req.send()
        }
    },
    loadGoogleFormat: function (feedUrl, callback) {
        return this.load({
            url: feedUrl,
            format: 'google',
            includeXml: true
        }, callback)
    }
};