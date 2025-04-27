// script.js

// بيانات الفروع والموارد
const branches = {
    mh1: {
        name: "المنهل 1",
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

// بيانات الدخول الصحيحة
const validCredentials = {
    mh1: '9874',
    mh2: '5678',
    mh3: '9012'
};

// التعامل مع نموذج تسجيل الدخول
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (validCredentials[username] && validCredentials[username] === password) {
        localStorage.setItem('currentBranch', username);
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

// تحميل بيانات الفرع وعرض البطاقات
function loadBranchData(branchKey) {
    const branch = branches[branchKey];
    if (!branch) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('branchName').textContent = branch.name;
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    branch.assets.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'asset-card';

        const header = document.createElement('div');
        header.className = 'card-header';
        header.innerHTML = `
            <span class="material-icons">${asset.icon}</span>
            <h3>${asset.title}</h3>
            <span class="material-icons arrow">expand_more</span>
        `;
        header.addEventListener('click', () => toggleCard(card));
        card.appendChild(header);

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
                const bg = color.type === 'HEX' ? color.code : 'transparent';
                box.style.background = bg;
                box.innerHTML = `
                    <div class="color-code">${color.code}</div>
                    <div class="color-type">${color.type}</div>
                `;
                colorGrid.appendChild(box);
            });
            content.appendChild(colorGrid);
        }

        card.appendChild(content);
        container.appendChild(card);
    });
}

// دالة لتبديل حالة البطاقة (فتح/إغلاق)
function toggleCard(card) {
    const content = card.querySelector('.card-content');
    const arrow = card.querySelector('.arrow');
    const isActive = card.classList.toggle('active');
    content.style.maxHeight = isActive ? `${content.scrollHeight}px` : '0';
    arrow.textContent = isActive ? 'expand_less' : 'expand_more';
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('currentBranch');
    window.location.href = 'index.html';
}

// حماية صفحة dashboard وتحميل البيانات
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('dashboard.html')) {
        const currentBranch = localStorage.getItem('currentBranch');
        if (!currentBranch) {
            window.location.href = 'index.html';
        } else {
            loadBranchData(currentBranch);
        }
    }
});