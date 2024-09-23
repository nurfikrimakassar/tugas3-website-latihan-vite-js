export function clickButton(button,textHeader) {
    let counter = 1;
    textHeader.innerHTML = "Hallo Guys!"
    button.addEventListener('click', () => {
        if (counter%2==0) {
            textHeader.innerHTML = "Hallo Guys!"
        } else{
            textHeader.innerHTML = "Saya Fikri, mahasiswa Teknik Informatika Unhas 2022"
        }
        counter++;
    })
}