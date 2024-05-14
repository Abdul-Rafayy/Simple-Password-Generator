function generatePassword() {
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    var password = ""
    var length = document.getElementById("length").value
    for (let i = 0; i < length; i++) {
        var randomNum = Math.floor(Math.random()*char.length)
        password+=char[randomNum]     
    }
    document.getElementById("password").value = password
}