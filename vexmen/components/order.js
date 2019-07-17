define(['components/orderPage.js', 'data/fetcher.js'], (orderPage, fetcher) => {

    var orderValidated = false;
    let parts, email, error;

    function formatPartJson(json){

        let newParts = []
        //console.log(json);

        json.forEach((part)=>{
            if(part.children && part.children.length > 0) {
                part.children.forEach((child,i)=>{
                    let obj = {...child, type: part.type, imageid: part.id, id: String(part.id) + String('-' + i), child:true };
                    //console.log(obj);
                    newParts.push(obj);
                });
            }
            else newParts.push(part);
        });

        return newParts;

    }

    function process() {
        error = null;
        email = document.getElementById('emailAddress').value;
        window.loading = true;
        fetcher.loadParts().then((json) => {
            if(email.toUpperCase() === 'test@test.com'.toUpperCase())
            {
                orderValidated = true;
                parts = formatPartJson(json);
                window.loading = false;
                m.redraw();
            }
            else {
                error = "Email address is not valid";
                window.loading = false;
                console.log(error);
                m.redraw();
            }
        })
    }

    function enterKey(e) {
        if (e.key === "Enter") process();
    }

    let orderValidation = ()=>m('div',
        [
            m('h2', 'Place an Order'),
            m('p', 'Please enter your email address to begin.  Only authorized users will be able to place an order.'),
            m('div', { class: 'form-row align-items-center' }, [
                m('input', { onkeydown: enterKey, type: 'email', class: 'form-control', placeholder: 'Enter Email Address', style: 'width:400px', id:'emailAddress' }),
                m('button', {
                    onclick: process,
                    type: 'button',
                    class: 'btn btn-primary mx-2'
                }, 'Begin Order')
            ]),
            m('span',{style: 'color:#ff0000'},error)
        ]);
    
    return {
        view: () => window.loading ? m('h1', "Loading...")
            : [
                m('div', { class: 'alert alert-dark', role: 'alert' },
                    'This shop is for Vexmen ordering only. It is not a real shop and is for club internal use only.'),
                m('div', orderValidated ? m(orderPage, { parts: parts, email: email }) : orderValidation())
            ],
        oninit: () => setTimeout(() => { window.loading = false; m.redraw() }, 500)
/*
        oncreate: (vnode)=>{
            
            console.log(document.getElementById('emailAddress'));
            
            document.getElementById('emailAddress').addEventListener("keyup", function(event) {
                if (event.key === "Enter") {
                    process();
                }
            });
            
        }
        */
    };
});