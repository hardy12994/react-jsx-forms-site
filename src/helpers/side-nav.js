export default function fixSideNavOnScroll() {

    let barHeight = document.getElementById('appBar').offsetHeight;
    let sideNavBar = document.getElementById('sideNavBar');
    let scrolledHeight = document.all ? window.iebody.scrollTop : window.pageYOffset;
    // console.log(document.getElementsByClassName('content-div')[0]);

    if (scrolledHeight >= barHeight) {
        //add class
        if (sideNavBar.className.includes('fixNavBar')) return;
        sideNavBar.className = sideNavBar.className + ' fixNavBar'
        sideNavBar.className = sideNavBar.className.trim();
    } else {
        // remove class
        if (sideNavBar.className.includes('fixNavBar')) {
            sideNavBar.className = sideNavBar.className.replace('fixNavBar', '');
        }
    }
}