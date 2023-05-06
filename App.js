// start
var lActive = document.getElementById("l-active-btn");
var sActive = document.getElementById("s-active-btn");
var l_active_el = document.querySelector(".l-active");
var s_active_el = document.querySelector(".s-active");

sActive.onclick = function () {
    s_active_el.style.opacity = "0";
    s_active_el.classList = "animate__animated animate__slideOutLeft active-box s-active"
    l_active_el.classList = "animate__animated animate__fadeInRight active-box l-active"
    l_active_el.style.zIndex = "1";
    l_active_el.style.opacity = "1";
}

lActive.onclick = function () {
    l_active_el.style.opacity = "0";
    l_active_el.classList = "animate__animated animate__slideOutRight active-box s-active"
    s_active_el.classList = "animate__animated animate__fadeInLeft active-box l-active"
    s_active_el.style.zIndex = "1";
    s_active_el.style.opacity = "1";
}

// end


// start sign UP
var signup_btn = document.querySelector(".signup-btn");
var f_name = document.querySelector("#f_name");
var l_name = document.querySelector("#l_name");
var s_username = document.querySelector("#s_username");
var formfill = document.getElementById("formfill");
var s_notice = document.getElementById("s_notice");


signup_btn.onclick = function (e) {
    e.preventDefault();
    if (f_name.value != "" & l_name.value != "" & s_username.value != "" & s_password.value != "") {
        if (localStorage.getItem(s_username.value) == null)
        {
            var data = {
                f_name: f_name.value,
                l_name: l_name.value,
                s_username:s_username.value,
                s_password: s_password.value
            }
            var s_sting = JSON.stringify(data);
            localStorage.setItem(s_username.value, s_sting);
        } else {
            s_notice.innerHTML = "This email Already Exist!"
            s_notice.style.color = "red";
            s_notice.classList = "animate__animated animate__heartBeat"
            setTimeout(function () {
                s_notice.innerHTML = " "
            }, 3000)
           
        }
       
    } else {
        s_notice.innerHTML = "Plese fill 🪪 Empty form"
        s_notice.style.color = "red";
        s_notice.classList = "animate__animated animate__heartBeat"
        setTimeout(function () {
            s_notice.innerHTML = " "
        },3000)
    } 

    f_name.value = "";
    l_name.value = "";
    s_username.value = "";
    s_password.value = "";
    // s_notice.style.color = "green";
    // s_notice.innerHTML = "Successfuly Sign Up"
    // s_notice.classList = "animate__animated animate__heartBeat"
    
} 

// end

// start login

var login_btn = document.querySelector("#login-btn");
var username_rl = document.querySelector("#username");
var password_el = document.querySelector("#password");
var l_notice = document.querySelector("#l-notice");

login_btn.onclick = function (e) {
    e.preventDefault();
    alert();

}

// end 