define([], () => {

    let baseurl = 'data';

    function get (url) {
        return fetch(`${baseurl}/${url}`).then((response)=>response.json());
    }

    return {

        loadParts: ()=> get('parts.json'),
        loadTemplateList: ()=> get('templates.json'),
        loadTemplate: (template)=> get('template.json')

    };

});