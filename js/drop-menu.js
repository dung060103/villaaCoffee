window.addEventListener("load",function()
{
    loadResizeBegin();
    window.addEventListener("resize",loadResize);
    // addEventListHeaderDropMenu();

    var itemSearchHeader = document.querySelector(".itemSearchHeader i");
    itemSearchHeader.addEventListener("click",mainShowInputSearchHeader)
    var toggerMenu = document.querySelector(".toggerMenu");
    toggerMenu.addEventListener("click",mainOpenHeaderTextList ) 
    var toggerClose = document.querySelector(".toggerClose")
    toggerClose.addEventListener("click",mainCloseHeaderTextList)

    document.addEventListener("click", function(event)
    {
        var inputSearchHeader= document.querySelector(".inputSearchHeader")
        var itemSearchHeader = document.querySelector(".itemSearchHeader i");
        if(event.target!=inputSearchHeader && event.target!= itemSearchHeader) 
        {
            
            inputSearchHeader.classList.remove("isSelected");
        }
        
    })
    var containerDropdownMenu = document.querySelector(".container_dropdown-menu");
    // containerDropdownMenu.addEventListener("mouseleave",removeDropMenu);
    if(containerDropdownMenu)
    containerDropdownMenu.addEventListener("mouseenter",iconDetailEffect);

})
function addEventListHeaderDropMenu()
{
    removeEventListHeaderDropMenuMobile()
    const listHeaderDropMenu= this.document.querySelectorAll(".header_itemMenuText")
    listHeaderDropMenu.forEach(element=>
        {
            if(element.classList.contains("has-list"))
            element.addEventListener("mouseenter",mainDropMenu);
            else 
            {
                element.addEventListener("mouseenter",removeDropMenu);
            }
        })
        var containerDropdownMenu = document.querySelector(".container_dropdown-menu");
if(containerDropdownMenu)
{
    containerDropdownMenu.addEventListener("mouseleave",removeDropMenu);
    containerDropdownMenu.addEventListener("mouseenter",iconDetailEffect);
}
}
function removeEventListHeaderDropMenu()
{
    const listHeaderDropMenu= this.document.querySelectorAll(".header_itemMenuText")
    listHeaderDropMenu.forEach(element=>
        {
            if(element.classList.contains("has-list"))
            element.removeEventListener("mouseenter",mainDropMenu);
            else 
            {
                element.removeEventListener("mouseenter",removeDropMenu);
            }
        })
}

function addEventListHeaderDropMenuMobile()
{
    removeEventListHeaderDropMenu();
    // removeEventListHeaderDropMenuMobile();
    var listHeaderDropMenu= document.querySelectorAll(".container_header_listMenu.container_header_listMenuText.mobile-active .header_itemMenu.header_itemMenuText.has-list.mode-mobile .icon_detail")

    listHeaderDropMenu.forEach(element=>
        {
            console.log(element)
            // if(element.classList.contains("has-list"))
            element.addEventListener("click",EventListHeaderDropMenuMobile);
            // else 
            // {
            //     element.addEventListener("click",removeDropMenu);
            // }
        })
        console.log(listHeaderDropMenu)
}
function removeEventListHeaderDropMenuMobile()
{

    const listHeaderDropMenu= document.querySelectorAll(".container_header_listMenu.container_header_listMenuText.mobile-active .icon_detail")
    console.log(listHeaderDropMenu)
    listHeaderDropMenu.forEach(element=>
        {
            // if(element.classList.contains("has-list"))
            element.removeEventListener("click",EventListHeaderDropMenuMobile);
        
})}
function EventListHeaderDropMenuMobile(event)
{
    console.log("òdfdf")
    if(event.currentTarget.classList.contains("is-active"))
    {
        removeDropMenu();
        event.currentTarget.classList.remove("is-active")
        
    }
    else{

        addDropMenuClick();
        event.currentTarget.classList.add("is-active")
        removeEventListHeaderDropMenu();
        var containerDropdownMenu = document.querySelector(".container_dropdown-menu");
        // containerDropdownMenu.removeEventListener("mouseleave",removeDropMenu);
        containerDropdownMenu.addEventListener("mouseenter",iconDetailEffect);
    }
};
function mainDropMenu(event)
{
if(!event.currentTarget.classList.contains("mode-mobile"))
{
    var valueBoundingClientRect =event.currentTarget.getBoundingClientRect();
    event.currentTarget.classList.add("is-active");
    addDropMenu(valueBoundingClientRect.left, (valueBoundingClientRect.top),valueBoundingClientRect.height,valueBoundingClientRect.width);
}
}
function addDropMenu(x,y,height,width)
{
    var dropdownMenu_list = document.createElement("ul")
    dropdownMenu_list.classList.add("dropdown-menu_list");
    
    removeDropMenu();
    dropdownMenu_list.innerHTML=
    `
    <li class="dropdown-menu_item"><a href="thietbi.html">Thiết bị</a> </li>
    <li class="dropdown-menu_item"><a href="coffee.html">Cà phê</a></li>
    `
    var containerDropdownMenu = document.querySelector(".container_dropdown-menu")
if(containerDropdownMenu)
{
    containerDropdownMenu.style.left= `${x}px`
    containerDropdownMenu.style.top= `${y}px`
    containerDropdownMenu.style.marginTop=`0`;
    containerDropdownMenu.style.paddingTop= `${height}px`
    containerDropdownMenu.style.minWidth=`${width}px`
    containerDropdownMenu.appendChild(dropdownMenu_list)
    containerDropdownMenu.classList.add("active")
}
    // console.log(x)
}
function addDropMenuClick()
{
    var dropdownMenu_list = document.createElement("ul")
    dropdownMenu_list.classList.add("dropdown-menu_list");
    
    removeDropMenu();
    dropdownMenu_list.innerHTML=
    `
    <li class="dropdown-menu_item"><a href="thietbị.html">Thiết bị</a> </li>
    <li class="dropdown-menu_item"><a href="coffee.html">Cà phê</a></li>
    `
    var containerDropdownMenu = document.querySelector(".container_dropdown-menu")
    containerDropdownMenu.style.left= `0`
    containerDropdownMenu.style.top= `0`    
    containerDropdownMenu.style.paddingTop= `0px`
    containerDropdownMenu.style.marginTop= `50px   `
    containerDropdownMenu.style.minWidth=`100vw`
    containerDropdownMenu.appendChild(dropdownMenu_list)
    containerDropdownMenu.classList.add("active")

    // console.log(x)
}
function removeDropMenu()
{
    var dropdownMenu_list =     document.querySelector(".dropdown-menu_list");
    if(dropdownMenu_list!=null)
        dropdownMenu_list.remove()
    var containerDropdownMenu = document.querySelector(".container_dropdown-menu")
    // containerDropdownMenu.style.left= `${x}px`
    // containerDropdownMenu.appendChild(dropdownMenu_list)
    if(containerDropdownMenu)
    containerDropdownMenu.classList.remove("active")
    if(document.querySelector(".header_itemMenuText.is-active .icon_detail")!=null)
    document.querySelector(".header_itemMenuText.is-active .icon_detail").classList.remove("effect")
    if(document.querySelector(".header_itemMenuText.is-active")!=null)
    document.querySelector(".header_itemMenuText.is-active").classList.remove("is-active")
    // console.log(x)
}
function iconDetailEffect()
{
    if(document.querySelector(".header_itemMenuText.is-active .icon_detail")!=null)
    document.querySelector(".header_itemMenuText.is-active .icon_detail").classList.add("effect")
}
function mainOpenHeaderTextList(event)
{
    document.querySelector(".container_header_listMenu.container_header_listMenuText").classList.add("mobile-active");
    addEventListHeaderDropMenuMobile();
}
function mainCloseHeaderTextList(event)
{
    document.querySelector(".container_header_listMenu.container_header_listMenuText").classList.remove("mobile-active");
    removeEventListHeaderDropMenuMobile();
    // removeEventListHeaderDropMenuMobile();
    removeDropMenu();
}
function mainShowInputSearchHeader(event)
{
    var inputSearchHeader= document.querySelector(".inputSearchHeader")
    if(!inputSearchHeader.classList.contains("isSelected"))
    inputSearchHeader.classList.add("isSelected");
    else 
    {
        if(inputSearchHeader.value.trim().length==0)
        {
            inputSearchHeader.classList.remove("isSelected");
        }
        else
        {

        }
    }
}
function loadResize(event)
{
    console.log(window.innerWidth)
    var listHeaderDropMenu= document.querySelectorAll(".header_itemMenuText.has-list")

        if(window.innerWidth<980)
        {   
            listHeaderDropMenu.forEach(element=>
                {
                    element.classList.add("mode-mobile")
                   })
// mainOpenHeaderTextList();
removeEventListHeaderDropMenu();
                //    addEventListHeaderDropMenuMobile();
            
        }
        else 
        {
            removeEventListHeaderDropMenuMobile()
            addEventListHeaderDropMenu();
            listHeaderDropMenu.forEach(element=>
                {
                    element.classList.remove("mode-mobile")
                   })
        }
        // addEventListHeaderDropMenu();
        removeDropMenu();
}
function loadResizeBegin()
{
    console.log(window.innerWidth)
    var listHeaderDropMenu= document.querySelectorAll(".header_itemMenuText.has-list")

        if(window.innerWidth<980)
        {
            mainCloseHeaderTextList();
            listHeaderDropMenu.forEach(element=>
                {
                    element.classList.add("mode-mobile")
                   })
removeEventListHeaderDropMenu();
                //    addEventListHeaderDropMenuMobile();
            
        }
        else 
        {
            removeEventListHeaderDropMenuMobile()
            addEventListHeaderDropMenu();
            listHeaderDropMenu.forEach(element=>
                {
                    element.classList.remove("mode-mobile")
                   })
        }
        removeDropMenu();
}