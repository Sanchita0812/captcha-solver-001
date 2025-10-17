document.addEventListener('DOMContentLoaded', () => {
    const captchaElement = document.getElementById('captcha');
    const captchaInputElement = document.getElementById('captcha-input');
    const captchaButton = document.getElementById('captcha-button');
    const captchaResult = document.getElementById('captcha-result');

    let captchaText = generateCaptcha();
    renderCaptcha(captchaText);

    captchaButton.addEventListener('click', () => {
        const enteredText = captchaInputElement.value;
        if (enteredText === captchaText) {
            captchaResult.textContent = 'Captcha Matched!';
            captchaResult.style.color = 'green';
            captchaText = generateCaptcha();
            renderCaptcha(captchaText);
            captchaInputElement.value = '';
        } else {
            captchaResult.textContent = 'Captcha Not Matched!';
            captchaResult.style.color = 'red';
        }
    });

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function renderCaptcha(text) {
        captchaElement.innerHTML = createSvgCaptcha(text);
    }

    function createSvgCaptcha(text) {
        const width = 200;
        const height = 50;
        let svg = `<svg width="${width}" height="${height}">`;
        svg += `<rect width="${width}" height="${height}" fill="#eee" />`;

        for (let i = 0; i < text.length; i++) {
            const x = (width / text.length) * i + 10;
            const y = height / 2 + (Math.random() * 10 - 5);
            const fontSize = 20 + (Math.random() * 5 - 2.5);
            const rotate = Math.random() * 20 - 10;
            svg += `<text x="${x}" y="${y}" font-size="${fontSize}" transform="rotate(${rotate}, ${x}, ${y})">${text[i]}</text>`;
        }

        svg += '</svg>';
        return svg;
    }
});