// set horizontal tabs
accordion('.tab-menu-horizontal', '.tab-content-horizontal');
// set vertical tabs
accordion('.tab-menu-vertical', '.tab-content-vertical');
// tabs function
function accordion(menu, content) {
    /* accordion */

    // get all the element under accordion-tab
    const tabMenu = document.querySelectorAll(menu + " a");
    // get all element from accordion-content-tab
    const contentTab = document.querySelectorAll(content + " div");

    let tabCurrent = 0;

    for (let i = 0; i < tabMenu.length; i++) {
        tabMenu[i].addEventListener('click', function (event) {
            console.log('click' + i);
            // make sure that it is not on current tab
            if (i != tabCurrent) {
                // remove and add class 
                // remove state of old tab
                contentTab[tabCurrent].classList.remove('active-content');
                contentTab[tabCurrent].classList.add('hidden-content');
                // add current state of new tab click
                contentTab[i].classList.remove('hidden-content');
                contentTab[i].classList.add('active-content');

                // make sure the the tab menu is highlighted 
                tabMenu[tabCurrent].classList.remove('active');
                tabMenu[i].classList.add('active');

                // change the current tab
                tabCurrent = i;
            }
            //if(contentTab[i].classList.contains("active-content")){  
        });
    }
}
/* Multiple item open first */
let targetId = '.accordion-first-multiple #collapsed-item';
let first = 0;

accordionMultiOpen(targetId, first);


let targetBId = '.accordion-first-single #collapsed-item';
firstB = 0;

accordionMultiOpen(targetBId, firstB);

// multi open
function accordionMultiOpen(selectorId, firstItem) {
    // get all selector from selectorId
    const collapseItem = document.querySelectorAll(selectorId);
    let first = firstItem;
    let checker = [];
    // add a minus class on first item and add plus on other items
    for (let j = 0; j < collapseItem.length; j++) {
        if (j == first) {
            collapseItem[j].classList.add('accordion-symbol-minus');

        } else {
            collapseItem[j].classList.add('accordion-symbol-plus');
        }
        checker[j] = false;
    }
    // add click event on the section
    for (let i = 0; i < collapseItem.length; i++) {
        collapseItem[i].addEventListener('click', function (e) {

            if (collapseItem[i].classList.contains('accordion-symbol-plus')) {
                collapseItem[i].classList.remove('accordion-symbol-plus');
                collapseItem[i].classList.add('accordion-symbol-minus');
            } else {
                collapseItem[i].classList.remove('accordion-symbol-minus');
                collapseItem[i].classList.add('accordion-symbol-plus');
            }

        });
    }
}