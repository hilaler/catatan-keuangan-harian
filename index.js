//VARIABLE
let saldoAwal

//CODE
const saldo = document.getElementById('saldo')
const submit = document.getElementById('submit-saldo')

//CODE SALDO AWAL
submit.addEventListener('click', function(){
    const saldo = document.getElementById('saldo').value
    cekSaldo(saldo)
    saldoAwal = saldo
    updateSaldoAwal(saldoAwal)
})

saldo.addEventListener('keyup', function({key}){
    if(key == 'Enter'){
        const saldo = document.getElementById('saldo').value
        cekSaldo(saldo)
        saldoAwal = saldo
        updateSaldoAwal(saldoAwal)
    }
})

const currentSaldo = saldoAwal

//CODE SALDO PEMASUKAN

const saldoMasuk = document.getElementById('saldo-masuk')
const keteranganMasuk = document.getElementById('keterangan-masuk')
const submitMasuk = document.getElementById('submit-masuk')

submitMasuk.addEventListener('click', function(){
    const saldoMasuk = document.getElementById('saldo-masuk').value
    const keteranganMasuk = document.getElementById('keterangan-masuk').value
    createTableHistoryMasuk(currentSaldo, saldoMasuk, keteranganMasuk)
    updateCurrentSaldo(currentSaldo)
})





//FUNCTION
function cekSaldo(saldo){
    if(saldo > 0){
        alert('saldo berhasil disimpan')
    }else{
        alert('isi kotak dengan benar')
    }
}

function updateSaldoAwal(saldoAwal){
    const saldoMuncul = document.querySelector('div#contain h3')
    saldoMuncul.innerHTML = 'Rp. ' + (saldoAwal)
}

function createTableHistoryMasuk(currentSaldo, saldoMasuk, keteranganMasuk, updateCurrentSaldo){
    var table = document.getElementById("tableHistory")
    var row = table.insertRow(1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    cell1.innerHTML = 'Rp. ' + (currentSaldo)
    cell2.innerHTML = '+ Rp. ' + (saldoMasuk)
    currentSaldo = parseInt(currentSaldo) + parseInt(saldoMasuk)
    cell3.innerHTML = 'Rp. ' + (currentSaldo)
    cell4.innerHTML = (keteranganMasuk)
}

function updateCurrentSaldo(currentSaldo){
    const currentSaldoMuncul = document.querySelector('div#contain h3')
    currentSaldoMuncul.innerHTML = 'Rp. ' + (currentSaldo)
}
