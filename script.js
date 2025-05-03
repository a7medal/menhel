// بيانات الفروع والموارد الكامل
const branches = {
    mh1: { 
        name: "المنهـــــل 1",
        assets: [
            {
                title: "دليل الهوية البصرية",
                icon: "library_books",
                files: [
                    { name: "PDF", url: "https://drive.google.com/file/d/1i98urqNPc7vRi5eDdgn1b_CjfXT8N2Jd/view?usp=drivesdk" },
                    { name: "PPT (عرض تقديمي)", url: "https://docs.google.com/presentation/d/1-yO4j2MEiGhSVIcmTNCq_-s1btBz_Aen/edit?usp=drivesdk&ouid=110359949235494531611&rtpof=true&sd=true" }
                ]
            },
            {
                title: "الشعار الرسمي",
                icon: "format_shapes",
                files: [
                    { name: "ملون (JPJ)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
                    { name: "أبيض/أسود (JPG)", url: "https://drive.google.com/file/d/11D1gh2Bp7GYUTER0LC3RU5ZPGSrMbNqB/view?usp=drivesdk" },
                    { name: "لون أحادي (PNG)", url: "https://drive.google.com/file/d/1Kdxq3tMl0dKp3pnkYnsGkNp5KVrmg_lY/view?usp=drivesdk" },
                    { name: "PDF", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
                    { name: "ملون شفاف (PNG)", url: "https://drive.google.com/file/d/1jWrJZeCUVvtIQyw5iVsvMVuDf2bfmpLX/view?usp=drivesdk" }
                ]
            },
            {
                title: "الخطوط  ",
                icon: "font_download",
                files: [
                    { name: "Cairo Regular (Zip)", url: "https://drive.google.com/file/d/1nZWIWo3LV7RmW_TdAKAc1c6XHtiZRbfc/view?usp=drivesdk" }
                ]
            },
            {
                title: "ورق المراسلات",
                icon: "description",
                files: [
                    { name: "DOCX", url: "https://docs.google.com/file/d/1yTIP1Yy665Fb9NyOsOjfbKo712PD1vTm/edit?usp=docslist_api&filetype=msword" },
                    { name: "JPEG", url: "https://drive.google.com/file/d/1s4GxOKLlfeAJs2msM0P4qm1WhjRmu9UZ/view?usp=drivesdk" }
                             ]
            },
            {
                title: "الشهادات",
                icon: "verified",
                files: [
                    { name: "DOCX", url: "https://docs.google.com/file/d/1xx9UnO4or6WwgU8nzlNjtR1XtbaBhoLV/edit?usp=docslist_api&filetype=msword" },
                    { name: "PNG", url: "https://drive.google.com/file/d/1mMcYENlnZXYZMVBbF8eP_eZT2Q9ucqj2/view?usp=drivesdk" },
                    { name: "PDF", url: "https://drive.google.com/file/d/1JgrGztlwoLk7PMYOtUBjpMxJUKB1Gd_s/view?usp=drivesdk" }
                ]
            },
            {
                title: "الرأسية",
                icon: "vertical_align_top",
                files: [
                    { name: "DOCX رأسية امتحانات واختبارات ", url: "https://docs.google.com/file/d/15H6XU52UJC5ertYrpkWT6-Cw6Ygva6bu/edit?usp=docslist_api&filetype=msword" },
                    { name: "JPEG رأسية نتيجة", url: "https://drive.google.com/file/d/1lDorlAfRFdLiXSagIfYWrtVwkZNe_Fb6/view?usp=drivesdk" }
                      ]
            },
            {
                title: "بطاقة العمل",
                icon: "contact_mail",
                files: [
                    { name: "PDF", url: "https://drive.google.com/file/d/12Ui9Kq5XmqFtQdFQJbl3JpygnKKUwfkm/view?usp=drivesdk" }
                    
                ]
            },
            {
                title: "الأختام",
                icon: "stamp",
                files: [
                    { name: "PDF (ختم الإدارة)", url: "https://drive.google.com/file/d/1GmSt4ggCkf6Vsf4-E9SuthiorGmyszla/view?usp=drivesdk" },
                    { name: "PDF (ختم المحاسبة)", url: "https://drive.google.com/file/d/15_3BMFK2BSreJbrCTZTBti8zPwvwu2Uc/view?usp=drivesdk" }
                ]
            },
            {
                title: "وصل الدفع",
                icon: "receipt",
                files: [
                    { name: "PDF", url: "https://drive.google.com/file/d/1lK1vCA7uPRyTGlksOOuUgOW3szR8n0aH/view?usp=drivesdk" }
                ]
            },
            {
                title: "شعار الرابطة",
                icon: "groups",
                files: [
                    { name: "PNG", url: "https://drive.google.com/file/d/1HSnoY64Vd1-mYEqkAYs7LhEn0EjW8D66/view?usp=drivesdk" },
                    { name: "للإسنخدام الرقمي (JPJ)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
                    
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
                    { name: "PDF", url: "https://drive.google.com/file/d/1i98urqNPc7vRi5eDdgn1b_CjfXT8N2Jd/view?usp=drivesdk" },
                    { name: "PPT", url: "https://docs.google.com/presentation/d/1-yO4j2MEiGhSVIcmTNCq_-s1btBz_Aen/edit?usp=drivesdk&ouid=110359949235494531611&rtpof=true&sd=true" }
                ]
            },
            {
                title: "الشعار الرسمي",
                icon: "format_shapes",
                files: [
                    { name: "ملون (JPJ)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
                    { name: "أبيض/أسود (JPG)", url: "https://drive.google.com/file/d/11D1gh2Bp7GYUTER0LC3RU5ZPGSrMbNqB/view?usp=drivesdk" },
                    { name: "لون أحادي (PNG)", url: "https://drive.google.com/file/d/1Kdxq3tMl0dKp3pnkYnsGkNp5KVrmg_lY/view?usp=drivesdk" },
                    { name: "PDF", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },

{ name: "ملون شفاف (PNG)", url: "https://drive.google.com/file/d/1jWrJZeCUVvtIQyw5iVsvMVuDf2bfmpLX/view?usp=drivesdk" }
                ]
            },
            {
                title: "الخطوط الرسمية",
                icon: "font_download",
                files: [
                    { name: "Cairo Regular (Zip)", url: "https://drive.google.com/file/d/1nZWIWo3LV7RmW_TdAKAc1c6XHtiZRbfc/view?usp=drivesdk" }
                ]
            },
            {
                title: "ورق المراسلات",
                icon: "description",
                files: [
                    { name: "DOCX", url: "https://docs.google.com/document/d/1MOf7dGqn5bwwNdHbb_BJU_u8OIKdjBtK/edit?usp=drivesdk&ouid=110359949235494531611&rtpof=true&sd=true" },
                    { name: "JPEG", url: "https://drive.google.com/file/d/1ZOZOTz-Ltu7gYx0KrjoCQJFjgY40XvtP/view?usp=drivesdk" }
                ]
            },
            {
                title: "الشهادات",
                icon: "verified",
                files: [
                    { name: "DOCX", url: "https://docs.google.com/file/d/1xx9UnO4or6WwgU8nzlNjtR1XtbaBhoLV/edit?usp=docslist_api&filetype=msword" },
                    { name: "PNG", url: "https://drive.google.com/file/d/1mMcYENlnZXYZMVBbF8eP_eZT2Q9ucqj2/view?usp=drivesdk" },
                    { name: "PDF", url: "https://drive.google.com/file/d/1JgrGztlwoLk7PMYOtUBjpMxJUKB1Gd_s/view?usp=drivesdk" }
                ]
            },
            {
                title: "الرأسية",
                icon: "vertical_align_top",
                files: [
                    { name: "(DOCX) رأسية امتحاناتواختبارات", url: "https://docs.google.com/file/d/15H6XU52UJC5ertYrpkWT6-Cw6Ygva6bu/edit?usp=docslist_api&filetype=msword" },
                    { name: "JPEG", url: "https://drive.google.com/file/d/1lDorlAfRFdLiXSagIfYWrtVwkZNe_Fb6/view?usp=drivesdk" }
                ]
            },
            {
                title: "بطاقة العمل",
                icon: "contact_mail",
                files: [
                    { name: "PDF", url: "https://drive.google.com/file/d/1TuKgeztR646Pl3vsaNTOGcCqWouWykeA/view?usp=drivesdk"}
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
                    { name: "PDF", url: "https://drive.google.com/file/d/1-lkAtaYAJFiNpd4FPOC_j96aJfG4rqVk/view?usp=drivesdk" }
                          ]
            },
            {
                title: "شعار الرابطة",
                icon: "groups",
                files: [
                    { name: "PNG", url: "https://drive.google.com/file/d/1HSnoY64Vd1-mYEqkAYs7LhEn0EjW8D66/view?usp=drivesdk" },
                    { name: "للإسنخدام الرقمي (JPJ)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
                    
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
                    { name: "PDF", url: "assets/mh3/documents/guide.pdfhttps://drive.google.com/file/d/1i98urqNPc7vRi5eDdgn1b_CjfXT8N2Jd/view?usp=drivesdk" },
                    { name: "PPT", url: "https://docs.google.com/presentation/d/1-yO4j2MEiGhSVIcmTNCq_-s1btBz_Aen/edit?usp=drivesdk&ouid=110359949235494531611&rtpof=true&sd=true" }
                ]
            },
            {
                title: "الشعار الرسمي",
                icon: "format_shapes",
                files: [
                    { name: "ملون (JPJ)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
                    { name: "أبيض/أسود (JPG)", url: "https://drive.google.com/file/d/11D1gh2Bp7GYUTER0LC3RU5ZPGSrMbNqB/view?usp=drivesdk" },
                    { name: "لون أحادي (PNG)", url: "https://drive.google.com/file/d/1Kdxq3tMl0dKp3pnkYnsGkNp5KVrmg_lY/view?usp=drivesdk" },
                    { name: "PDF", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },

{ name: "ملون شفاف (PNG)", url: "https://drive.google.com/file/d/1jWrJZeCUVvtIQyw5iVsvMVuDf2bfmpLX/view?usp=drivesdk" }
                ]
            },
            {
                title: "الخطوط الرسمية",
                icon: "font_download",
                files: [
                    { name: "Cairo Regular (Zip)", url: "https://drive.google.com/file/d/1nZWIWo3LV7RmW_TdAKAc1c6XHtiZRbfc/view?usp=drivesdk" }
                ]
            },
            {
                title: "ورق المراسلات",
                icon: "description",
                files: [
                    { name: "DOCX", url: "https://docs.google.com/document/d/1fjpmwxUbr2yloQthegZv8oSfWBzFhaTQ/edit?usp=drivesdk&ouid=110359949235494531611&rtpof=true&sd=true" },
                    { name: "JPEG", url: "https://drive.google.com/file/d/1h6ip8lTzRljPKNxyoEVjk4hz1Q9V6Ybf/view?usp=drivesdk" }
                ]
            },
            {
                title: "الشهادات",
                icon: "verified",
                files: [
                    { name: "DOCX", url: "https://docs.google.com/file/d/1xx9UnO4or6WwgU8nzlNjtR1XtbaBhoLV/edit?usp=docslist_api&filetype=msword" },
                    { name: "PNG", url: "https://drive.google.com/file/d/1mMcYENlnZXYZMVBbF8eP_eZT2Q9ucqj2/view?usp=drivesdk" },
                    { name: "PDF", url: "https://drive.google.com/file/d/1JgrGztlwoLk7PMYOtUBjpMxJUKB1Gd_s/view?usp=drivesdk" }
                ]
            },
            {
                title: "الرأسية",
                icon: "vertical_align_top",
                files: [
                    { name: "(DOCX) رأسية امتحانات واختبارات", url: "https://docs.google.com/file/d/15H6XU52UJC5ertYrpkWT6-Cw6Ygva6bu/edit?usp=docslist_api&filetype=msword" },
                    { name: "رأسية نتيجة (JPJ)", url: "https://drive.google.com/file/d/1SeUSI2vlxr7NfbAKKqGNDqUX4Q65Jz7D/view?usp=drivesdk" }
                ]
            },
            {
                title: "بطاقة العمل",
                icon: "contact_mail",
                files: [
                    { name: "PDF", url: "https://drive.google.com/file/d/1dUI-gCWcGqjkvwJeUJKT_QbucWrMRihJ/view?usp=drivesdk" }            
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
                    { name: "PDF", url: "https://drive.google.com/file/d/13aA9KbqJyvHlbzWOZwNZhz1tiMn3-S7u/view?usp=drivesdk" },
                       ]
            },
            {
                title: "شعار الرابطة",
                icon: "groups",
                files: [
                    { name: "PNG", url: "https://drive.google.com/file/d/1HSnoY64Vd1-mYEqkAYs7LhEn0EjW8D66/view?usp=drivesdk" },
                    { name: "للإسنخدام الرقمي (JPJ)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
                    
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

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim().toLowerCase();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');

            if (validCredentials[username] && validCredentials[username] === password) {
                sessionStorage.setItem('currentBranch', username);
                window.location.href = 'dashboard.html';
            } else {
                errorMsg.innerHTML = `<span class="material-icons">error_outline</span> اسم المستخدم أو كلمة المرور غير صحيحة!`;
                errorMsg.style.display = 'block';
            }
        });
    }

    // حماية الصفحة
    if (window.location.pathname.includes('dashboard.html')) {
        const currentBranch = sessionStorage.getItem('currentBranch');
        if (!currentBranch) window.location.href = 'index.html';
        else loadBranchData(currentBranch);
    }
});

// تحميل بيانات الفرع
function loadBranchData(branchKey) {
    const branch = branches[branchKey];
    if (!branch) {
        window.location.href = 'index.html';
        return;
    }

    // إضافة شريط البحث
    const dashboard = document.getElementById('dashboard');
    dashboard.insertAdjacentHTML('afterbegin', `
        <div class="search-bar">
            <div class="search-container">
                <span class="material-icons">search</span>
                <input type="text" id="searchInput" placeholder="ابحث هنا عن عنصر ...">
            </div>
        </div>
    `);

    document.getElementById('branchName').textContent = branch.name;
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    // تصفية النتائج
    document.getElementById('searchInput').addEventListener('input', function (e) {
        const searchText = e.target.value.trim().toLowerCase();
        const cards = container.getElementsByClassName('asset-card');

        Array.from(cards).forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('.card-content').textContent.toLowerCase();
            card.style.display = (title.includes(searchText) || content.includes(searchText)) ? 'block' : 'none';
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
                let bgColor = 'transparent';
                if (color.type === 'HEX') bgColor = color.code;
                if (color.type === 'RGB') bgColor = `rgb(${color.code})`;
                box.style.backgroundColor = bgColor;
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

// PWA تثبيت التطبيق
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.className = 'install-btn';
    installBtn.innerHTML = `<span class="material-icons">download</span> تثبيت التطبيق`;
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

// تسجيل Service Worker ومراقبة التحديثات
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js?v=1.1')
            .then(registration => {
                console.log('Service Worker مسجل بنجاح!', registration);

                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                showUpdateBanner();
                            }
                        }
                    };
                };
            })
            .catch(err => console.error('فشل تسجيل Service Worker:', err));
    });
}
window.addEventListener('load', function () {
  function checkOnlineStatus() {
    if (!navigator.onLine) {
      window.location.href = 'offline.html';
    }
  }

  // تحقق عند تحميل الصفحة
  checkOnlineStatus();

  // استمع لأي تغيّر في حالة الاتصال
  window.addEventListener('offline', function () {
    window.location.href = 'offline.html';
  });
});