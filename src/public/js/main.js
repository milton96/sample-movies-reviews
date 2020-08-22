window.onload = function () {
    console.log('Load document');
    sideNav();

    function sideNav() {
        let element = document.querySelector('.sidenav');
        let sidenav = M.Sidenav.init(element);
    }
}