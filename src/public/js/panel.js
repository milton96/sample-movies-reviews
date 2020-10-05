window.onload = function () {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        "edge": 'left'
    };
    var instances = M.Sidenav.init(elems, options);
    var collapsibleElem = document.querySelector('.collapsible');
    var collapsibleInstance = M.Collapsible.init(collapsibleElem);
}