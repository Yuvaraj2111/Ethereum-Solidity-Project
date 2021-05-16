let contractAddress = "0x7348eAbB9af19836D3eaF97b29539b2783626fca"

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