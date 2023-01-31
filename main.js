function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
}

const copyHiddenValue = () => {
    const temp = document.createElement('input');
    document.body.appendChild(temp);
    const { value } = document.querySelector('#hiddenValue');
    temp.value = value;
    temp.select();
    document.execCommand('copy');
    temp.remove();
};

const downloadButton = document.querySelector('#downloadAPK');

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './public/assets/files/listaDeCompras.apk';
    link.download = 'listaDeCompras.apk';
    link.click();
});
