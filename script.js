let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText0 = document.getElementById("qrText");

function generateQR() {
    if (qrText0.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText0.value);
        imgBox.classList.add("show-img");
    } else {
        qrText0.classList.add("error");
        setTimeout(() => {
            qrText0.classList.remove('error');
        }, 1000);
    }
}
