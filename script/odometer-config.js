
var current = 750.12;
var el = document.querySelector('.some-element');
od = new Odometer({
    el: el, 
    value: current,
    format: '(,ddd).dd',
    theme: 'car'
    });

od.update(current);

