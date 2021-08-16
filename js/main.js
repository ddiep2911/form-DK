function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(key, mess) {
    return document.getElementById(key + '_error').innerHTML = mess
}

document.getElementById("btn").addEventListener('click', (e) => {
    e.preventDefault()
    alert("Đăng ký thành công")

    resetFrom()
})

function checkError() {
    const hoTen = getValue("hoTen")
    const email = getValue("email");
    const passWord = getValue("matKhau");
    const rePassWOrd = getValue("xacNhanMatKhau");

    const btn = document.getElementById("btn")

    // check regex 
    const regexName = /^(.?[a-zA-Z0-9\s])+$/
    const regexEmail = /^\w+@[a-zA-Z0-9]+\.+com+$/;
    const regexPassWord = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/

    // name 
    if (hoTen == "") {
        showError("username", "Bắt buộc*")
    } else if (!regexName.test(hoTen)) {
        showError("username", "Họ tên chưa đúng định dạng!")
    } else {
        showError("username", "")
    }

    // email 
    if (email == "") {
        showError("email", "Bắt buộc*")
    } else if (!regexEmail.test(email)) {
        showError("email", "Emai chưa đúng định dạng!")
    } else {
        showError("email", "")
    }

    // error passWord 
    if (passWord == "") {
        showError("password", "Bắt buộc*")
    } else if (!regexPassWord.test(passWord)) {
        showError("password", "Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường")
    } else {
        showError("password", "")
    }

    if (rePassWOrd == "") {
        showError("repassword", "Bắt buộc*")
    } else if (rePassWOrd != passWord) {
        showError("repassword", "Mật khẩu nhập lại chưa khớp!")
    } else {
        showError("repassword", "")
    }

    if (hoTen && email && passWord && rePassWOrd == passWord) {
        btn.disabled = false
    }
}

function resetFrom() {
    document.getElementById("hoTen").value = ""
    document.getElementById("email").value = ""
    document.getElementById("matKhau").value = ""
    document.getElementById("xacNhanMatKhau").value = ""

    document.getElementById("btn").setAttribute("disabled", true)
}

