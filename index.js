//GLOBAL VARIABLE
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
    if(saldoMasuk > 0 && keteranganMasuk == '' || keteranganMasuk == 'duit halal?'){
        alert('isi keterangan pemasukan anda')
    }else if(saldoMasuk <= 0){
        alert('isi saldo pemasukan anda')
    }else{
        const currentSaldo = getCurrentSaldo()
        createTableHistoryMasuk(currentSaldo, saldoMasuk, keteranganMasuk)
        updateCurrentSaldo(parseInt(currentSaldo) + parseInt(saldoMasuk))
        alert('berhasil disimpan')
    }
})

keteranganMasuk.addEventListener('keyup', function({key}){
    if(key == 'Enter'){
        const saldoMasuk = document.getElementById('saldo-masuk').value
        const keteranganMasuk = document.getElementById('keterangan-masuk').value
        if(saldoMasuk <= 0){
            alert('isi saldo pemasukan anda!')
        }else{
            const currentSaldo = getCurrentSaldo()
            createTableHistoryMasuk(currentSaldo, saldoMasuk, keteranganMasuk)
            updateCurrentSaldo(parseInt(currentSaldo) + parseInt(saldoMasuk))
            alert('berhasil disimpan')
        }
    }
})

saldoMasuk.addEventListener('keyup', function({key}){
    if(key == 'Enter'){
        const saldoMasuk = document.getElementById('saldo-masuk').value
        const keteranganMasuk = document.getElementById('keterangan-masuk').value
        if(keteranganMasuk == '' || keteranganMasuk == 'duit halal?'){
            alert('isi keterangan pemasukan anda!')
        }else{
            const currentSaldo = getCurrentSaldo()
            createTableHistoryMasuk(currentSaldo, saldoMasuk, keteranganMasuk)
            updateCurrentSaldo(parseInt(currentSaldo) + parseInt(saldoMasuk))
            alert('berhasil disimpan')
        }
    }
})

//CODE SALDO PENGELUARAN

const saldoKeluar = document.getElementById('saldo-keluar')
const keteranganKeluar = document.getElementById('keterangan-keluar')
const submitKeluar = document.getElementById('submit-keluar')

submitKeluar.addEventListener('click', function(){
    const saldoKeluar = document.getElementById('saldo-keluar').value
    const keteranganKeluar = document.getElementById('keterangan-keluar').value
    if(saldoKeluar > 0 && keteranganKeluar == '' || keteranganKeluar == 'dipake buat apa?'){
        alert('isi keterangan pengeluaran anda')
    }else if(saldoKeluar <= 0){
        alert('isi saldo pengeluaran anda')
    }else{
        const currentSaldo = getCurrentSaldo()
        createTableHistoryKeluar(currentSaldo, saldoKeluar, keteranganKeluar)
        updateCurrentSaldo(parseInt(currentSaldo) - parseInt(saldoKeluar))
        alert('berhasil disimpan')
    }
})

keteranganKeluar.addEventListener('keyup', function({key}){
    if(key == 'Enter'){
        const saldoKeluar = document.getElementById('saldo-keluar').value
        const keteranganKeluar = document.getElementById('keterangan-keluar').value
        if(saldoKeluar <= 0){
            alert('isi saldo pengeluaran anda!')
        }else{
            const currentSaldo = getCurrentSaldo()
            createTableHistoryKeluar(currentSaldo, saldoKeluar, keteranganKeluar)
            updateCurrentSaldo(parseInt(currentSaldo) - parseInt(saldoKeluar))
            alert('berhasil disimpan')
        }
    }
})

saldoKeluar.addEventListener('keyup', function({key}){
    if(key == 'Enter'){
        const saldoKeluar = document.getElementById('saldo-keluar').value
        const keteranganKeluar = document.getElementById('keterangan-keluar').value
        if(keteranganKeluar == '' || keteranganKeluar == 'dipake buat apa?'){
            alert('isi keterangan pengeluaran anda!')
        }else{
            const currentSaldo = getCurrentSaldo()
            createTableHistoryKeluar(currentSaldo, saldoKeluar, keteranganKeluar)
            updateCurrentSaldo(parseInt(currentSaldo) - parseInt(saldoKeluar))
            alert('berhasil disimpan')
        }
    }
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

function createTableHistoryMasuk(currentSaldo, saldoMasuk, keteranganMasuk){
    var table = document.getElementById("tableHistory")
    var row = table.insertRow(1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    cell2.style.color = 'green'
    cell1.innerHTML = 'Rp. ' + (currentSaldo)
    cell2.innerHTML = '+ Rp. ' + (saldoMasuk)
    currentSaldo = parseInt(currentSaldo) + parseInt(saldoMasuk)
    cell3.innerHTML = 'Rp. ' + (currentSaldo)
    cell4.innerHTML = (keteranganMasuk)
}

function createTableHistoryKeluar(currentSaldo, saldoKeluar, keteranganKeluar){
    var table = document.getElementById("tableHistory")
    var row = table.insertRow(1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    cell2.style.color = 'red'
    cell1.innerHTML = 'Rp. ' + (currentSaldo)
    cell2.innerHTML = '- Rp. ' + (saldoKeluar)
    currentSaldo = parseInt(currentSaldo) - parseInt(saldoKeluar)
    cell3.innerHTML = 'Rp. ' + (currentSaldo)
    cell4.innerHTML = (keteranganKeluar)
}

function updateCurrentSaldo(currentSaldo){
    const currentSaldoMuncul = document.querySelector('div#contain h3')
    currentSaldoMuncul.innerHTML = 'Rp. ' + (currentSaldo)
}

function getCurrentSaldo(){
    return document.getElementById('currentSaldo').innerText.split('Rp. ')[1];
}