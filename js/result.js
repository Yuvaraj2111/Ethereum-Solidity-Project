const rollno = document.querySelector(".rollno");
const score = document.querySelector(".score");
const name = document.querySelector(".name");
const result = document.querySelector(".result");

// show result r show student details
for (let i = 1; i < 100; i++) {
    contract.methods.student(i).call().then((e) => {
        if (e.rollno != 0 && e.rollno != "") {
            rollno.innerHTML += "<p>" + e.rollno + "</p>"
            name.innerHTML += "<p>" + e.name + "</p>"
            let percent = parseInt(e.mark) * 100 / 5;
            score.innerHTML += "<p>" + percent + "</p>"
            if (percent < 50)
                result.innerHTML += "<p class='text-danger'>FAIL </p>"
            else
                result.innerHTML += "<p class='text-success'>PASS</p>"
        }
    })
}


