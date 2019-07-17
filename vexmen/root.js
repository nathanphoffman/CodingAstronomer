requirejs(['components/navbar.js', 'components/general.js', 'components/order.js'], (navbar, general, order) => {


    window.loading = true;

    // render navbar:
    let navLocation = document.getElementById('navfill');
    m.render(navLocation, navbar);

    // setup router and render the body:
    let bodyLocation = document.getElementById('bodyfill');

    // set overloads:
    Array.prototype.unique = function () {
        return this.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    }

    m.route(bodyLocation, "/home", {
        "/general/:type": general,
        "/order": order
    });

});