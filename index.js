let panjangKataSandi = document.getElementById('panjangKataSandi');
let kataSandi = document.getElementById('kataSandi');
let inputAlphabet = document.getElementById('inputAlphabet');
let inputNumeric = document.getElementById('inputNumeric');
let saveButton = document.getElementById('saveButton')

function buatPassword(panjang){

	const data = inputAlphabet.value + inputNumeric.value;

	let pembuat = '';
	for ( let i = 0 ; i < panjang ; i++){
		pembuat += data[Math.floor(Math.random() * data.length)];
	}
	return pembuat
}

function getPassword(){
	const newPass = buatPassword(panjangKataSandi.value)
	kataSandi.value = newPass
}

function savePassword(){
	document.title = kataSandi.value
	saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya : ${document.title}`))
	saveButton.setAttribute('download', 'SaranPassword.txt')

}