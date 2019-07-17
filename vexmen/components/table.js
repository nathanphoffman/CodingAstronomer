define([], () => {

    let al = { class: 'align-middle' };

    function getBody(microView, parts, filters, quantity) {

        return parts.map((r) =>
            (!microView || r.quantity > 0)
            && (r.type === filters.typeFilter || microView)
            && (!filters.titleFilter || !r.title || microView ||
                r.title.toUpperCase().includes(filters.titleFilter.toUpperCase())) &&
            m('tr', { class: `part ${r.quantity > 0 && !microView && 'checkedoff'}` }, [
                m('td', al, m('div', { class: 'form-row align-items-center' }, [

                    m('i', { class: 'fas fa-plus-square fa-lg plusminus', onclick: quantity(r.id, r.type, 1) }),
                    m('i', { class: 'fas fa-minus-square fa-lg plusminus', onclick: quantity(r.id, r.type, -1) }),
    
                    m('input', {
                        type: 'text', class: 'form-control mx-1',
                        style: 'width:50px', value: r.quantity,
                        oninput: quantity(r.id, r.type, 0, true)
                    }),
    
                    m('i', { class: 'fas fa-times-circle fa-lg plusminus', onclick: quantity(r.id, r.type, 0, 0) })
                ])),
                !microView && m('td', al, m('img', { class:'', style: 'width:60px;border:1px solid #bbb', src: `data/partimages/${r.type}${r.imageid || r.id}.jpg` })),
                m('td', al, r.price),
                m('td', { ...al }, [
                    m('span', { style: 'font-weight:800' }, r.title + ' '),
                    //r.sublink && m('a', { href: r.sublink, target: '_blank' }, '( Details )')
                ])
            ]));
    }

    function getHeaders(microView) {
        return (microView ? ['Quantity', 'Price', 'Name'] : ['Cart', 'Part', 'Price', 'Name']).map((h) => m('th', { scope: 'col' }, h));
    }

    return {

        getTable: function (microView, parts, filters) {

            function quantity(id, type, inc, newQ) {
                return (e) => {
                    update(id, type, (part) => {
                        let newQuantity;
                        if (newQ) newQuantity = e.target.value;
                        else if (newQ === 0) newQuantity = 0;
                        else newQuantity = Number(part.quantity) + inc;
                        if (newQuantity > 0) return { quantity: newQuantity }
                        else return { quantity: 0 };
                    });
                };
            }

            function update(id, type, objCreator) {
                parts.forEach((part) => {
                    if (part.id === id && part.type === type) part = Object.assign(part, objCreator(part));
                });
            }

            let body = getBody(microView, parts, filters, quantity);
            let headers = getHeaders(microView);

            return m('table', { class: 'table' }, [
                m('thead', m('tr', { class: 'header' }, headers)),
                m('tbody', body)
            ]);
        }
    }
});