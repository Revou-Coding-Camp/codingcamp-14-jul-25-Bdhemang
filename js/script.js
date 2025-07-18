console.log('JavaScript is working.');

//Fungsi pemanggilan awal website diakses
//showWelcomePopup();

//Fungsi untuk menampilkan permintaan pengisian nama
function showWelcomePopup(){
    let userName = prompt("Silahkan isi nama Anda :");
    if (userName !='')

    {
        document.getElementById('welcome-user').innerText = userName;
    }    
}



//Fungsi pengecekan isi text field jika kosong
function validateForm()
{
const nameInput=document.getElementById('name-input');
console.log(nameInput.value);

if (nameInput.value === ''){
alert('Please insert name !');
} else {
    document.getElementById('message-output').innerText = `Thank You, ${nameInput.value}, for your message!`;
    nameInput.value = '';
}
}

