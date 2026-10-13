function switchLanguage() {
    const body = document.body;
    const htmlRoot = document.getElementById('html-root');

    if (body.classList.contains('lang-fa-mode')) {
        body.classList.remove('lang-fa-mode');
        body.classList.add('lang-en-mode');
        htmlRoot.setAttribute('dir', 'ltr');
        htmlRoot.setAttribute('lang', 'en');
    } else {
        body.classList.remove('lang-en-mode');
        body.classList.add('lang-fa-mode');
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.setAttribute('lang', 'fa');
    }
}

function showInfo(carName) {
    const isEnglish = document.body.classList.contains('lang-en-mode');
    if (isEnglish) {
        alert("Thank you! Your inquiry request for '" + carName + "' has been successfully registered.");
    } else {
        alert("با تشکر! درخواست استعلام قیمت خودروی '" + carName + "' با موفقیت ثبت شد.");
    }
}
