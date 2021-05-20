let contractAddress = "0x6Db684B6e2B90D68B36490b70dcC54ef97d9AEfa"

let teacherId = "0x9Ed3cFbAcA5222DB82525C2846ff932c7Ad227F2"

const web3 = new Web3("http://127.0.0.1:7545")
const contract = new web3.eth.Contract(abi, contractAddress)

// Teacher login
const teacherLogin = async () => {
    let pwd = document.getElementById('password').value
    let res;
    await contract.methods.teacherLogin(pwd).call().then(e => res = e)
    if (res)
        window.location = '/'
    else
        alert("Password incorrect")
}

// student login
const studentLogin = () => {
    let rollno = document.getElementById('rollno').value
    let eCode = document.getElementById('Ecode').value
    contract.methods.studentLogin(rollno, eCode).call().then((e) => {
        console.log(e);
        if (e[0]) {
            window.location = "/"
        } else {
            alert(e[1])
        }
    })
}