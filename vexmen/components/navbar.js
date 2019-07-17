define([], () => {

    let links = [
        ['Home','#!/home'],
        ['About','#'],
        ['Blog','#'],
        ['Teams','#'],
        ['Events','#'],
        ['Sponsors','#'],
        ['Order Parts','#!/order'],
        ['Gear','#'],
        ['Contacts','#']
    ];

    let items = links.map((a)=>m('li',{class:'nav-item'},
        m('a',{class:'nav-link', href:a[1]},a[0])
    ));

    return m('ul',{class:'nav'},items);
});