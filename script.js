// تابع تغییر زبان سایت بین فارسی و انگلیسی
function switchLanguage() {
    const body = document.body;
    const htmlRoot = document.getElementById('html-root');

    if (body.classList.contains('lang-fa-mode')) {
        // تغییر به انگلیسی
        body.classList.remove('lang-fa-mode');
        body.classList.add('lang-en-mode');
        htmlRoot.setAttribute('dir', 'ltr');
        htmlRoot.setAttribute('lang', 'en');
    } else {
        // تغییر به فارسی
        body.classList.remove('lang-en-mode');
        body.classList.add('lang-fa-mode');
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.setAttribute('lang', 'fa');
    }
}

// تابع پیام استعلام قیمت
function showInfo(carName) {
    const isEnglish = document.body.classList.contains('lang-en-mode');
    if (isEnglish) {
        alert("Dear user, your inquiry request for '" + carName + "' has been submitted. Our experts will contact you soon.");
    } else {
        alert("کاربر گرامی، درخواست شما برای استعلام قیمت خودروی '" + carName + "' ثبت شد. به زودی کارشناسان ما با شما تماس خواهند گرفت.");
    }
}
