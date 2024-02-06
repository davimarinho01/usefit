function trocarIcon (){
    var icon = document.getElementById("menu-icon");
    

    icon.addEventListener("click", function() {
        
        var icon2 = document.getElementById("menu-icon2")
        var menu = document.getElementById("menu")
        
        icon.style.display = "none"
        icon2.style.display = "block"
        menu.style.position = "relative"

        icon2.addEventListener("click", function(){
            icon.style.display = "block"
            icon2.style.display = "none"
            menu.style.position = "absolute"
        })

    });

}

trocarIcon()