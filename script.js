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

function joinAction(gameName) {
    const isEnglish = document.body.classList.contains('lang-en-mode');
    if (isEnglish) {
        alert("Success! Your registration request for '" + gameName + "' tournament has been submitted.");
    } else {
        alert("موفقیت‌آمیز! درخواست ثبت‌نام شما برای تورنمنت '" + gameName + "' ثبت شد.");
    }
}

function submitForm(event) {
    event.preventDefault();
    const isEnglish = document.body.classList.contains('lang-en-mode');
    if (isEnglish) {
        alert("Your message has been sent successfully! We will get in touch with you via Discord/Email.");
    } else {
        alert("پیام شما با موفقیت ارسال شد! به‌زودی از طریق دیسکورد یا ایمیل با شما در ارتباط خواهیم بود.");
    }
}
