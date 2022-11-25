let randomno = Math.floor(Math.random() * 100 + 1);


let guesses = 0;

document.getElementById("btnsub").onclick =
    function () {
        let userguess = document.getElementById("userinput").value;
        userguess = Number(userguess);
        if (randomno == userguess) {
            document.getElementById("result").innerHTML = `Your Guess Is Right. You guess it in ${guesses} guesses`;
        }

        else if (userguess < randomno) {
            document.getElementById("result").innerHTML = "It is smaller try little bit greater";
            guesses += 1;
        }
        else if (userguess > randomno) {
            document.getElementById("result").innerHTML = "It is greater try little bit smaller";
            guesses += 1;
        }
    }







