define(['components/table.js'], (table) => {
    return {
        view: (vnode) => {

            let parts = vnode.attrs.parts;
            console.log(parts);
            let subtotal = parts.map(p => {
                console.log(p);
                return p.quantity * Number(p.price.replace(/\$/g, ''));
            
            }).reduce((p, n) => p + n).toFixed(2);

            return m('div',[
                m('h3',[m('i', { class: 'fas fa-shopping-cart fa-lg' }),m('span',' Shopping Cart')]),
                table.getTable(true, parts, {typeFilter:'',titleFilter:''}),
                m('h4',`Total: $${subtotal}`),
                m('button', { onclick: ()=>{ checkout = true }, class: 'mx-3', type: 'button', class: 'btn btn-primary' }, 'Place Order')
            ])
        }
    }
});