document.getElementById("calc").onclick = function () {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var third = document.getElementById("third").value;
    var four = document.getElementById("four").value;
    var five = document.getElementById("five").value;
    var oper = document.getElementById("amal").value;

    var result = 0;
    first = parseFloat(first);
    second = parseFloat(second);
    third = parseFloat(third);
    four = parseFloat(four);
    five = parseFloat(five);

    if (!isNaN(first) && !isNaN(first) && !isNaN(first) && !isNaN(first) && !isNaN(first)) {
        if (!(0 <= first && first <= 30) || (!(0 <= second && second <= 30))
            || (!(0 <= third && third <= 10)) || (!(0 <= four && four <= 10)) || (!(0 <= five && five <= 10))) {
            alert(" Asosiy fanlar 0 dan 30 gacha kiriting!!!\n" +
                "Majburiy fanlar 0dan 10gacha kiriting!!!"
            )
        }

        switch (oper) {
            case "1":
                result = (first * 3.1) + (second * 3.1) + (third * 2.1) + (four * 2.1) + (five * 2.1)
                break;
            case "2":
                result = (first * 3.1) + (second * 2.1)
                break;
            case "3":
                result = (third * 1.1) + (four * 1.1) + (five * 1.1)
                break;

            default:
                result = 0

        }
        document.getElementById("display").innerText = result.toFixed(1);


    } else {
        alert(" Sonlarni to'liq kiriting!!!");
    }
}

document.getElementById("toch").onclick = function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("display").innerHTML = ""
}