let min = 1;
let max = 100;
let rahasia = Math.floor(Math.random() * 100);

document.getElementById("cek").onclick = function() {
    let tebakan = Number(document.getElementById("input").value);
    if (tebakan === rahasia) {
        document.getElementById("keterangan").innerHTML = "Benar!";
    } else if (tebakan > rahasia) {
        document.getElementById("keterangan").innerHTML = "Terlalu Besar";
    } else {
        document.getElementById("keterangan").innerHTML = "Terlalu Kecil";
    }
}
