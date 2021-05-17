let contractAddress = "0xf9fB393861b010549A697EBd123F915b68B20013"

let teacherId = "0x5FC96C97146DF165B25c967A381bFac6528DbD28"

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