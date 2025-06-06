let HTML = '';

// const foto of fotos

for (let i = 1; i <= 32; i++) {
    HTML += `
        <li>
            <a href="./img/img (${i}).jpg" target="_blank">
                <img src="./img/img (${i}).jpg" alt="img">
            </a>
        </li>
    `;
}

HTML += '<li></li>';

document.getElementById('galerija').innerHTML = HTML;