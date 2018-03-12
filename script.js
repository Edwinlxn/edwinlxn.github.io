

var myVariable = 20
var myWord = "Snow"
var number2 = 20

//this is my function
function saySomething(){

        var result = myVariable + number2

        console.log("This is Edwin typing" + result)

        
}

function toggledoge(){
    
    var img = document.getElementById("dogpic")

    if(showdog == false){
        //hidden
        img.style.visibility = "hidden"
        showdog = true

    }else if(showdog == true){
        //revealed
        img.style.visibility = "visible"
        showdog = false

    }
}