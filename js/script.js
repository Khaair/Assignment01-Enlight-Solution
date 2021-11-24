var element = document.getElementById("incrementtext");
        var value = element.innerHTML;
        ++value;
        console.log(value);
        document.getElementById("incrementtext").innerHTML = value;