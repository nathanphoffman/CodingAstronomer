define([], () => {

    // simple: home, blog, sponsors, gear
    // complex: 
    return {

        menu: (menu)=>{
            return m('h1',{},'test title');
        },

        view: function (vnode){

            let body = m('h1','test body');

            if(vnode.attrs.menu) return m('div',{class:'row'},[
                m('div',{class:'col-sm-9'},body),
                m('div',{class:'col-sm-3'}, this.menu(vnode.attrs.menu))
            ]);
            else return body;
            
        }
    };

});
