function togglemenu()
{
   alert("Toggle menu call");
    let menuElement=document.getElementById("menu");
    let navbarElement=document.getElementById("bars");
    if( menuElement.checkVisibility.className == "center-menu") 
    {
        menuElement.classlist.remove( "center-menu");
        menuElement.classlist.add("center-menu-toggle");
            navbarElement.classlist.remove("fa-bars");
            navbarElement.classlist.add("fa-xmark");

    }
    else
    {
        menuElement.classlist.add("center-menu-toggle");
        menuElement.classlist.remove( "center-menu");
        navbarElement.classlist.add("fa-xmark");   
        navbarElement.classlist.remove("fa-bars");
    }
}