// بيانات الفروع والموارد الكاملة
const branches = {
    mh1: { 
        name: "المنهــــــل 1",
        assets: [
            {
                title: "دليل الهوية البصرية",
                icon: "library_books",
                files: [
                    { name: "PDF", url: "assets/mh1/documents/guide.pdf" },
                    { name: "PPT", url: "assets/mh1/documents/guide.pptx" }
                ]
            },
            {
                title: "الشعار الرسمي",
                icon: "format_shapes",
                files: [
                    { name: "ملون (PNG)", url: "assets/mh1/logos/logo.png" },
                    { name: "أبيض/أسود (JPG)", url: "assets/mh1/logos/bw.jpg" },
                    { name: "لون أحادي (SVG)", url: "assets/mh1/logos/mono.svg" },
                    { name: "PDF", url: "assets/mh1/logos/logo.pdf" }
                ]
            },
            {
                title: "الخطوط الرسمية",
                icon: "font_download",
                files: [
                    { name: "Cairo Regular (OTF)", url: "assets/mh1/fonts/cairo-regular.otf" }
                ]
            },
            {
                title: "ورق المراسلات",
                icon: "description",
                files: [
                    { name: "DOCX", url: "assets/mh1/documents/letter.docx" },
                    { name: "JPEG", url: "assets/mh1/documents/letter.jpg" },
                    { name: "PDF", url: "assets/mh1/documents/letter.pdf" }
                ]
            },
            {
                title: "الشهادات",
                icon: "verified",
                files: [
                    { name: "DOCX", url: "assets/mh1/documents/certificate.docx" },
                    { name: "PNG", url: "assets/mh1/documents/certificate.png" },
                    { name: "PDF", url: "assets/mh1/documents/certificate.pdf" }
                ]
            },
            {
                title: "الرأسية",
                icon: "vertical_align_top",
                files: [
                    { name: "DOCX", url: "assets/mh1/documents/header.docx" },
                    { name: "JPEG", url: "assets/mh1/documents/header.jpg" },
                    { name: "PDF", url: "assets/mh1/documents/header.pdf" }
                ]
            },
            {
                title: "بطاقة العمل",
                icon: "contact_mail",
                files: [
                    { name: "PDF", url: "assets/mh1/documents/card.pdf" },
                    { name: "JPEG", url: "assets/mh1/documents/card.jpg" },
                    { name: "PNG", url: "assets/mh1/documents/card.png" }
                ]
            },
            {
                title: "الأختام",
                icon: "stamp",
                files: [
                    { name: "PDF (ختم الإدارة)", url: "assets/mh1/documents/seal-direction.pdf" },
                    { name: "PDF (ختم المحاسبة)", url: "assets/mh1/documents/seal-accounting.pdf" }
                ]
            },
            {
                title: "وصل الدفع",
                icon: "receipt",
                files: [
                    { name: "PDF", url: "assets/mh1/documents/payment.pdf" },
                    { name: "PNG", url: "assets/mh1/documents/payment.png" }
                ]
            },
            {
                title: "شعار الرابطة",
                icon: "groups",
                files: [
                    { name: "PNG", url: "assets/mh1/logos/association.png" },
                    { name: "JPG", url: "assets/mh1/logos/association.jpg" },
                    { name: "SVG", url: "assets/mh1/logos/association.svg" },
                    { name: "PDF", url: "assets/mh1/logos/association.pdf" }
                ]
            },
            {
                title: "ألوان الهوية",
                icon: "palette",
                colors: [
                    { name: "الخلفية", code: "#EEECE9", type: "HEX" },
                    { name: "CMYK", code: "C70 M40 Y60 K20", type: "CMYK" },
                    { name: "RGB", code: "28,100,89", type: "RGB" },
                    { name: "الأساسي", code: "#1C6459", type: "HEX" },
                    { name: "الثانوي", code: "#123740", type: "HEX" },
                    { name: "التأكيدي", code: "#DBA437", type: "HEX" }
                ]
            }
        ]
    },
    mh2: {
        name: "المنهل 2",
        assets: [
            {
                title: "دليل الهوية البصرية",
                icon: "library_books",
                files: [
                    { name: "PDF", url: "assets/mh2/documents/guide.pdf" },
                    { name: "PPT", url: "assets/mh2/documents/guide.pptx" }
                ]
            },
            {
                title: "الشعار الرسمي",
                icon: "format_shapes",
                files: [
                    { name: "ملون (PNG)", url: "assets/mh2/logos/color.png" },
                    { name: "أبيض/أسود (JPG)", url: "assets/mh2/logos/bw.jpg" },
                    { name: "لون أحادي (SVG)", url: "assets/mh2/logos/mono.svg" },
                    { name: "PDF", url: "assets/mh2/logos/logo.pdf" }
                ]
            },
            {
                title: "الخطوط الرسمية",
                icon: "font_download",
                files: [
                    { name: "Cairo Regular (OTF)", url: "assets/mh2/fonts/regular.otf" },
                    { name: "Cairo Bold (TTF)", url: "assets/mh2/fonts/bold.ttf" }
                ]
            },
            {
                title: "ورق المراسلات",
                icon: "description",
                files: [
                    { name: "DOCX", url: "assets/mh2/documents/letter.docx" },
                    { name: "JPEG", url: "assets/mh2/documents/letter.jpg" },
                    { name: "PDF", url: "assets/mh2/documents/letter.pdf" }
                ]
            },
            {
                title: "الشهادات",
                icon: "verified",
                files: [
                    { name: "DOCX", url: "assets/mh2/documents/certificate.docx" },
                    { name: "PNG", url: "assets/mh2/documents/certificate.png" },
                    { name: "PDF", url: "assets/mh2/documents/certificate.pdf" }
                ]
            },
            {
                title: "الرأسية",
                icon: "vertical_align_top",
                files: [
                    { name: "DOCX", url: "assets/mh2/documents/header.docx" },
                    { name: "JPEG", url: "assets/mh2/documents/header.jpg" },
                    { name: "PDF", url: "assets/mh2/documents/header.pdf" }
                ]
            },
            {
                title: "بطاقة العمل",
                icon: "contact_mail",
                files: [
                    { name: "PDF", url: "assets/mh2/documents/card.pdf" },
                    { name: "JPEG", url: "assets/mh2/documents/card.jpg" },
                    { name: "PNG", url: "assets/mh2/documents/card.png" }
                ]
            },
            {
                title: "الأختام",
                icon: "stamp",
                files: [
                    { name: "PDF", url: "assets/mh2/documents/seal.pdf" },
                    { name: "PNG", url: "assets/mh2/documents/seal.png" },
                    { name: "SVG", url: "assets/mh2/documents/seal.svg" }
                ]
            },
            {
                title: "وصل الدفع",
                icon: "receipt",
                files: [
                    { name: "PDF", url: "assets/mh2/documents/payment.pdf" },
                    { name: "PNG", url: "assets/mh2/documents/payment.png" }
                ]
            },
            {
                title: "شعار الرابطة",
                icon: "groups",
                files: [
                    { name: "PNG", url: "assets/mh2/logos/association.png" },
                    { name: "JPG", url: "assets/mh2/logos/association.jpg" },
                    { name: "SVG", url: "assets/mh2/logos/association.svg" },
                    { name: "PDF", url: "assets/mh2/logos/association.pdf" }
                ]
            },
            {
                title: "ألوان الهوية",
                icon: "palette",
                colors: [
                    { name: "الخلفية", code: "#EEECE9", type: "HEX" },
                    { name: "CMYK", code: "C70 M40 Y60 K20", type: "CMYK" },
                    { name: "RGB", code: "28,100,89", type: "RGB" },
                    { name: "الأساسي", code: "#1C6459", type: "HEX" },
                    { name: "الثانوي", code: "#123740", type: "HEX" },
                    { name: "التأكيدي", code: "#DBA437", type: "HEX" }
                ]
            }
        ]
    },
    mh3: {
        name: "المنهل 3",
        assets: [
            {
                title: "دليل الهوية البصرية",
                icon: "library_books",
                files: [
                    { name: "PDF", url: "assets/mh3/documents/guide.pdf" },
                    { name: "PPT", url: "assets/mh3/documents/guide.pptx" }
                ]
            },
            {
                title: "الشعار الرسمي",
                icon: "format_shapes",
                files: [
                    { name: "ملون (PNG)", url: "assets/mh3/logos/color.png" },
                    { name: "أبيض/أسود (JPG)", url: "assets/mh3/logos/bw.jpg" },
                    { name: "لون أحادي (SVG)", url: "assets/mh3/logos/mono.svg" },
                    { name: "PDF", url: "assets/mh3/logos/logo.pdf" }
                ]
            },
            {
                title: "الخطوط الرسمية",
                icon: "font_download",
                files: [
                    { name: "Cairo Regular (OTF)", url: "assets/mh3/fonts/regular.otf" },
                    { name: "Cairo Bold (TTF)", url: "assets/mh3/fonts/bold.ttf" }
                ]
            },
            {
                title: "ورق المراسلات",
                icon: "description",
                files: [
                    { name: "DOCX", url: "assets/mh3/documents/letter.docx" },
                    { name: "JPEG", url: "assets/mh3/documents/letter.jpg" },
                    { name: "PDF", url: "assets/mh3/documents/letter.pdf" }
                ]
            },
            {
                title: "الشهادات",
                icon: "verified",
                files: [
                    { name: "DOCX", url: "assets/mh3/documents/certificate.docx" },
                    { name: "PNG", url: "assets/mh3/documents/certificate.png" },
                    { name: "PDF", url: "assets/mh3/documents/certificate.pdf" }
                ]
            },
            {
                title: "الرأسية",
                icon: "vertical_align_top",
                files: [
                    { name: "DOCX", url: "assets/mh3/documents/header.docx" },
                    { name: "JPEG", url: "assets/mh3/documents/header.jpg" },
                    { name: "PDF", url: "assets/mh3/documents/header.pdf" }
                ]
            },
            {
                title: "بطاقة العمل",
                icon: "contact_mail",
                files: [
                    { name: "PDF", url: "assets/mh3/documents/card.pdf" },
                    { name: "JPEG", url: "assets/mh3/documents/card.jpg" },
                    { name: "PNG", url: "assets/mh3/documents/card.png" }
                ]
            },
            {
                title: "الأختام",
                icon: "stamp",
                files: [
                    { name: "PDF", url: "assets/mh3/documents/seal.pdf" },
                    { name: "PNG", url: "assets/mh3/documents/seal.png" },
                    { name: "SVG", url: "assets/mh3/documents/seal.svg" }
                ]
            },
            {
                title: "وصل الدفع",
                icon: "receipt",
                files: [
                    { name: "PDF", url: "assets/mh3/documents/payment.pdf" },
                    { name: "PNG", url: "assets/mh3/documents/payment.png" }
                ]
            },
            {
                title: "شعار الرابطة",
                icon: "groups",
                files: [
                    { name: "PNG", url: "assets/mh3/logos/association.png" },
                    { name: "JPG", url: "assets/mh3/logos/association.jpg" },
                    { name: "SVG", url: "assets/mh3/logos/association.svg" },
                    { name: "PDF", url: "assets/mh3/logos/association.pdf" }
                ]
            },
            {
                title: "ألوان الهوية",
                icon: "palette",
                colors: [
                    { name: "الخلفية", code: "#EEECE9", type: "HEX" },
                    { name: "CMYK", code: "C70 M40 Y60 K20", type: "CMYK" },
                    { name: "RGB", code: "28,100,89", type: "RGB" },
                    { name: "الأساسي", code: "#1C6459", type: "HEX" },
                    { name: "الثانوي", code: "#123740", type: "HEX" },
                    { name: "التأكيدي", code: "#DBA437", type: "HEX" }
                ]
            }
        ]
    }
};

// بيانات الدخول
const validCredentials = {
    mh1: '0987',
    mh2: '6543',
    mh3: '2143'
};

// تسجيل الدخول
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim().toLowerCase();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');

            if (validCredentials[username] && validCredentials[username] === password) {
                sessionStorage.setItem('currentBranch', username);
                errorMsg.style.display = 'none';
                window.location.href = 'dashboard.html';
            } else {
                errorMsg.innerHTML = `
                    <span class="material-icons">error_outline</span>
                    اسم المستخدم أو كلمة المرور غير صحيحة!
                `;
                errorMsg.style.display = 'block';
            }
        });
    }
});

// تحميل بيانات الفرع
function loadBranchData(branchKey) {
    const branch = branches[branchKey];
    if (!branch) {
        window.location.href = 'index.html';
        return;
    }

    // شريط البحث
    const dashboard = document.getElementById('dashboard');
    dashboard.insertAdjacentHTML('afterbegin', `
        <div class="search-bar">
            <div class="search-container">
                <span class="material-icons">search</span>
                <input type="text" id="searchInput" placeholder="ابحث في الموارد...">
            </div>
        </div>
    `);

    document.getElementById('branchName').textContent = branch.name;
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    // تصفية النتائج
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchText = e.target.value.trim().toLowerCase();
        const cards = container.getElementsByClassName('asset-card');
        
        Array.from(cards).forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('.card-content').textContent.toLowerCase();
            card.style.display = (title.includes(searchText) || content.includes(searchText) ? 'block' : 'none';
        });
    });

    // إنشاء البطاقات
    branch.assets.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'asset-card';

        // رأس البطاقة
        const header = document.createElement('div');
        header.className = 'card-header';
        header.innerHTML = `
            <span class="material-icons">${asset.icon}</span>
            <h3>${asset.title}</h3>
            <span class="material-icons arrow">expand_more</span>
        `;
        header.addEventListener('click', () => toggleCard(card));
        card.appendChild(header);

        // محتوى البطاقة
        const content = document.createElement('div');
        content.className = 'card-content';
        content.style.maxHeight = '0';

        if (asset.files) {
            const fileGrid = document.createElement('div');
            fileGrid.className = 'file-grid';
            asset.files.forEach(file => {
                const a = document.createElement('a');
                a.href = file.url;
                a.className = 'file-item';
                a.setAttribute('download', '');
                a.innerHTML = `<span class="material-icons">download</span> ${file.name}`;
                fileGrid.appendChild(a);
            });
            content.appendChild(fileGrid);
        }

        if (asset.colors) {
            const colorGrid = document.createElement('div');
            colorGrid.className = 'color-grid';
            asset.colors.forEach(color => {
                const box = document.createElement('div');
                box.className = 'color-box';
                
                // معالجة أنواع الألوان
                let bgColor = 'transparent';
                if (color.type === 'HEX') {
                    bgColor = color.code;
                } else if (color.type === 'RGB') {
                    bgColor = `rgb(${color.code})`;
                } else if (color.type === 'CMYK') {
                    bgColor = '#EEECE9'; // لون افتراضي لعدم دعم CMYK في CSS
                }
                
                box.style.backgroundColor = bgColor;
                box.innerHTML = `
                    <div class="color-code">${color.code}</div>
                    ${color.type !== 'CMYK' ? `<div class="color-type">${color.type}</div>` : ''}
                `;
                colorGrid.appendChild(box);
            });
            content.appendChild(colorGrid);
        }

        card.appendChild(content);
        container.appendChild(card);
    });
}

// تبديل حالة البطاقة
function toggleCard(card) {
    const content = card.querySelector('.card-content');
    const arrow = card.querySelector('.arrow');
    const isActive = card.classList.toggle('active');
    content.style.maxHeight = isActive ? `${content.scrollHeight}px` : '0';
    arrow.textContent = isActive ? 'expand_less' : 'expand_more';
}

// تسجيل الخروج
function logout() {
    sessionStorage.removeItem('currentBranch');
    window.location.href = 'index.html';
}

// PWA Installation
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.className = 'install-btn';
    installBtn.innerHTML = `
        <span class="material-icons">download</span>
        تثبيت التطبيق
    `;
    installBtn.onclick = installApp;
    document.querySelector('.login-box').appendChild(installBtn);
}

function installApp() {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
        document.querySelector('.install-btn').remove();
    });
}

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed:', err));
    });
}

// حماية الصفحة
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('dashboard.html')) {
        const currentBranch = sessionStorage.getItem('currentBranch');
        if (!currentBranch) {
            window.location.href = 'index.html';
        } else {
            loadBranchData(currentBranch);
        }
    }
});