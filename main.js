document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('captcha-canvas');
    const input = document.getElementById('captcha-input');
    const submit = document.getElementById('captcha-submit');
    const result = document.getElementById('captcha-result');
    let captchaText = '';

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        captchaText = '';
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        drawCaptcha(captchaText);
    }

    function drawCaptcha(text) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '24px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(text, 10, 30);
    }

    generateCaptcha();

    submit.addEventListener('click', function() {
        if (input.value === captchaText) {
            result.textContent = 'Captcha correct!';
        } else {
            result.textContent = 'Captcha incorrect. Try again.';
            generateCaptcha();
            input.value = '';
        }
    });
});