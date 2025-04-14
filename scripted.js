let emailStored = "";
let timer;

// Function to show sections smoothly
function showSection(sectionId) {
    document.querySelectorAll(".form-container").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

// Function to send OTP
function sendOTP() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (!email) {
        message.innerText = "Please enter an email address.";
        message.style.color = "red";
        return;
    }

    fetch("http://127.0.0.1:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        message.innerText = data.message;
        message.style.color = data.status === "success" ? "green" : "red";

        if (data.status === "success") {
            emailStored = email;
            showSection("otpSection");
            startOTPTimer();
        }
    })
    .catch(error => {
        console.error("Error:", error);
        message.innerText = "Failed to send OTP. Please try again.";
        message.style.color = "red";
    });
}

// Function to verify OTP
function verifyOTP() {
    const otp = document.getElementById("otp").value;
    const otpMessage = document.getElementById("otpMessage");

    if (!otp) {
        otpMessage.innerText = "Please enter the OTP.";
        otpMessage.style.color = "red";
        return;
    }

    fetch("http://127.0.0.1:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailStored, otp: otp })
    })
    .then(response => response.json())
    .then(data => {
        otpMessage.innerText = data.message;
        otpMessage.style.color = data.status === "success" ? "green" : "red";

        if (data.status === "success") {
            setTimeout(() => {
                alert("Verification successful! Redirecting to final page... ☕");
                window.location.href = "final.html";
            }, 2000);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        otpMessage.innerText = "Failed to verify OTP. Please try again.";
        otpMessage.style.color = "red";
    });
}

// Function to start OTP timer
function startOTPTimer() {
    let timeLeft = 30;
    const timerMessage = document.getElementById("timerMessage");
    const resendButton = document.getElementById("resendOTP");

    resendButton.disabled = true;
    resendButton.classList.add("disabled");

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerMessage.innerText = "";
            resendButton.disabled = false;
            resendButton.classList.remove("disabled");
        } else {
            timerMessage.innerText = `Resend OTP in ${timeLeft}s`;
        }
        timeLeft--;
    }, 1000);
}

// Expose functions globally
window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
