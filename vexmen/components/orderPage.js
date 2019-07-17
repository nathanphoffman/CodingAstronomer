define(['components/cart.js', 'components/table.js'], (cart, tables) => {

    var typeFilter = 'Structure';
    var titleFilter = '';
    let checkout = false;

    return {

        view: (vnode) => {
            var parts = vnode.attrs.parts;

            console.log(parts);

            preFormat();

            function preFormat() {
                var newParts = [];
                parts.forEach((part) => {
                    if (!part.quantity || part.quantity < 0) part.quantity = 0;
                    newParts.push(part);
                });
                parts = newParts;
            }

            let buttonTypes = parts.map((part) => part.type).unique();
            let buttons = buttonTypes.map((txt) => m('label',
                { class: `btn btn-secondary ${txt === typeFilter && 'active'}` },
                [m('input', {
                    onclick: () => {
                        titleFilter = ''; typeFilter = txt;
                        document.getElementById('filter').value = '';
                    },
                    type: 'radio',
                    name: 'options',
                    checked: txt === typeFilter
                }), m('span', txt)]));

            let subtotal = parts.map(p => p.quantity * Number(p.price.replace(/\$/g, ''))).reduce((p, n) => p + n).toFixed(2);

            return m('div', [
                !checkout && m('div', { class: 'row' }, [
                    m('div', { class: 'col-md-7' }, [
                        m('button', { onclick: () => { checkout = true }, disabled: !(subtotal > 0), type: 'button', class: 'btn btn-primary d-none d-sm-block d-md-none d-block d-sm-none' }, 'Checkout'),
                        m('div', { class: 'form-row align-items-center my-2' }, [
                            m('input', {
                                id: 'filter',
                                class: 'form-control',
                                placeholder: 'Type a filter', style: 'width:200px',
                                oninput: (e) => { titleFilter = e.target.value }
                            }),
                            m('div', {
                                class: 'btn-group btn-group-toggle mx-2',
                                "data-toggle": "buttons"
                            }, buttons)
                        ]),
                        m('div', [tables.getTable(false, parts,
                            { typeFilter: typeFilter, titleFilter: titleFilter })])
                    ]),
                    m('div', { class: 'col-md-5 d-none d-md-block' }, m('div', {}, [m('h4', [
                        m('i', { class: 'fas fa-shopping-cart fa-lg' }), 'Cart']),
                    tables.getTable(true, parts, 
                        { typeFilter: typeFilter, titleFilter: titleFilter }),
                    m('div', { class: 'form-row align-items-center' }, [
                        m('div', { class: 'mx-3', style: 'font-weight:800' }, `Subtotal: ${subtotal}`),
                        m('button', { onclick: () => { checkout = true }, disabled: !(subtotal > 0), type: 'button', class: 'btn btn-primary' }, 'Checkout')])
                    ]))
                ]),
                checkout && m('button', {
                    onclick: () => { checkout = false }, type: 'button',
                    class: 'btn btn-dark my-2'
                }, m('i', { class: 'fas fa-arrow-left fa-lg' })),
                checkout && m(cart, { parts: parts })
            ]);
        }
    }
});