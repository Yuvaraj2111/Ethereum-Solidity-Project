const rollno = document.querySelector(".rollno");
const name = document.querySelector(".name");
const course = document.querySelector(".course");
const courseCode = document.querySelector(".courseCode");

// show result r show student details
for (let i = 1; i < 100; i++) {
    contract.methods.student(i).call().then((e) => {
        if (e.rollno != 0 && e.rollno != "") {
            courseCode.innerHTML += "<p>CA5301</p>"
            course.innerHTML += "<p>BLOCKCHAIN TECHNOLOGY</p>"
            rollno.innerHTML += "<p>" + e.rollno + "</p>"
            name.innerHTML += "<p>" + e.name + "</p>"
        }
    })
}


//Total Students  
const totalStudent = async () => {
    let studentCount = document.querySelector(".count");
    let count = 0;
    try {
        await contract.methods._count().call().then(e => studentCount.innerHTML = e)
    } catch (error) {
        studentCount.innerHTML += count
    }
}