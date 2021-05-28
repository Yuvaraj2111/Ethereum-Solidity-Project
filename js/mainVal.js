let contractAddress = "0xA5c6085Eca5c2982365b29B81e570FCD5BBa23ca"

let teacherId = "0x9Ed3cFbAcA5222DB82525C2846ff932c7Ad227F2"

const web3 = new Web3("http://127.0.0.1:7545")
const contract = new web3.eth.Contract(abi, contractAddress)


// Teacher login
const teacherLogin = async () => {
    let id = document.getElementById('teacherid').value
    let pwd = document.getElementById('password').value
    let res;
    await contract.methods.teacherLogin(pwd).call({ from: id, gas: 3000000 }).then(e => res = e)
    if (res)
        window.location = '/admin.html'
    else
        alert("Incorrect id and password")
}

// Enroll Student
const enrollStudent = async () => {
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let rollno = document.getElementById('rollno').value
    let course = document.getElementById('course').value
    if (id == "" && name == "" && rollno == "" && course == "")
        alert("You must fill all the fields")
    else {
        await contract.methods.enrollStudent(id, rollno, name, course).send({ from: teacherId, gas: 3000000 })
            .then(e => alert("Rollno " + rollno + " Added successfully"))
            .catch(e => alert("Student already enrolled"))
    }
}

// student login
const studentLogin = async () => {
    let rollno = document.getElementById('rollno').value
    let eCode = document.getElementById('Ecode').value
    var url = new URL("http://127.0.0.1:5500/");
    url.searchParams.append('rollno', rollno);
    await contract.methods.studentLogin(rollno, eCode).call().then((e) => {
        console.log(e);
        if (e[0]) {
            window.location = url
        } else {
            alert(e[1])
        }
    })
}

// Go back
const adminPage = () => {
    window.location = "/login.html"
}