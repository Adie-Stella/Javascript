
    function gUser() {
        let uName = prompt("Enter your name");
     
            if (uName != null) {
                document.getElementById("submit").innerHTML =
                "Hello " + uName + "! welcome to Javascript";
            }
    }

    function greetUser(name){
             console.log(`Hello, ${name} welcome to Javascript`)  
    }

        greetUser("Stella!")
        greetUser("Paul!")









