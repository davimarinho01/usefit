function passCards() {
    var right = document.getElementById("right_arrow")
    var left = document.getElementById("left_arrow")
    var card1 = document.getElementById("card1")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")
    var card4 = document.getElementById("card4")

    right.addEventListener("click" , function() {

        if(card3.style.display ==="flex"){
            card1.style.display = "flex"
            card2.style.display = "flex"
            
            card3.style.display = "none"
            card4.style.display = "none"
        }else {
            card1.style.display = "none"
            card2.style.display = "none"
            
            card3.style.display = "flex"
            card4.style.display = "flex"
        }

    })

    left.addEventListener("click", function() {
        if(card1.style.display === "flex") {
            card1.style.display = "none"
            card2.style.display = "none"
            
            card3.style.display = "flex"
            card4.style.display = "flex"
        }else{
            card1.style.display = "flex"
            card2.style.display = "flex"
            
            card3.style.display = "none"
            card4.style.display = "none"
        }

    })

    
}

passCards()