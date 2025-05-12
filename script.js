// بيانات الفروع والموار د
const branches = {
  mh1: { 
    name: "المنهـــــل 1",
    favorites: [],
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
        title: "الخطوط",
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
        title: "سوشيل ميديا",
        icon: "facebook",
        files: [
          { name: "الملف الشخصي", url: "https://drive.google.com/file/d/1k10hJTBi3byr924KGquU6ylIC34bK6bg/view?usp=drivesdk" },
          { name: "الغلاف", url: "https://drive.google.com/file/d/19XVwD2SI4F622V5fgCAiKK_4XYCouVkI/view?usp=drivesdk" }
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
          { name: "للإستخدام الرقمي (JPJ)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
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
    favorites: [],
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
          { name: "(DOCX) رأسية امتحانات واختبارات", url: "https://docs.google.com/file/d/15H6XU52UJC5ertYrpkWT6-Cw6Ygva6bu/edit?usp=docslist_api&filetype=msword" },
          { name: "JPEG", url: "https://drive.google.com/file/d/1lDorlAfRFdLiXSagIfYWrtVwkZNe_Fb6/view?usp=drivesdk" }
        ]
      },
      {
        title: "سوشيل ميديا",
        icon: "facebook",
        files: [
          { name: "الملف الشخصي", url: "https://drive.google.com/file/d/1k10hJTBi3byr924KGquU6ylIC34bK6bg/view?usp=drivesdk" },
          { name: "الغلاف", url: "https://drive.google.com/file/d/19XVwD2SI4F622V5fgCAiKK_4XYCouVkI/view?usp=drivesdk" }
        ]
      },
      {
        title: "بطاقة العمل",
        icon: "contact_mail",
        files: [
          { name: "PDF", url: "https://drive.google.com/file/d/1TuKgeztR646Pl3vsaNTOGcCqWouWykeA/view?usp=drivesdk" }
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
          { name: "للإستخدام الرقمي (JPJ)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
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
    favorites: [],
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
        title: "سوشيل ميديا",
        icon: "facebook",
        files: [
          { name: "الملف الشخصي", url: "https://drive.google.com/file/d/1k10hJTBi3byr924KGquU6ylIC34bK6bg/view?usp=drivesdk" },
          { name: "الغلاف", url: "https://drive.google.com/file/d/19XVwD2SI4F622V5fgCAiKK_4XYCouVkI/view?usp=drivesdk" }
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
          { name: "PDF", url: "https://drive.google.com/file/d/13aA9KbqJyvHlbzWOZwNZhz1tiMn3-S7u/view?usp=drivesdk" }
        ]
      },
      {
        title: "شعار الرابطة",
        icon: "groups",
        files: [
          { name: "PNG", url: "https://drive.google.com/file/d/1HSnoY64Vd1-mYEqkAYs7LhEn0EjW8D66/view?usp=drivesdk" },
          { name: "للإستخدام الرقمي (JPJ)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
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
  prf: {
    name: "الأساتذة",
    favorites: [],
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
        title: "الرأسية",
        icon: "vertical_align_top",
        files: [
          { name: "DOCX رأسية امتحانات واختبارات", url: "https://docs.google.com/file/d/15H6XU52UJC5ertYrpkWT6-Cw6Ygva6bu/edit?usp=docslist_api&filetype=msword" }
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
      },
      {
        title: "الخطوط الرسمية",
        icon: "font_download",
        files: [
          { name: "Cairo Regular (Zip)", url: "https://drive.google.com/file/d/1nZWIWo3LV7RmW_TdAKAc1c6XHtiZRbfc/view?usp=drivesdk" }
        ]
      }
    ]
  }
};

// بيانات تسجيل الدخول
const validCredentials = {
  mh1: '0987',
  mh2: '6543',
  mh3: '2143',
  prf: '0911'
};

// إعداد الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // التعامل مع روابط بدون .html
  if (path.endsWith('/dashboard')) {
    console.warn('تم الكشف عن رابط بدون .html، إعادة توجيه إلى dashboard.html');
    window.location.replace(`${window.location.origin}/dashboard.html`);
    return;
  }

  // التعامل مع تسجيل الدخول
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim().toLowerCase();
      const password = document.getElementById('password').value.trim();
      const errorMsg = document.getElementById('errorMsg');

      if (validCredentials[username] && validCredentials[username] === password) {
        sessionStorage.setItem('currentBranch', username);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        console.log('تم تسجيل الدخول بنجاح:', { username });
        window.location.href = 'dashboard.html';
      } else {
        errorMsg.innerHTML = `<span class="material-icons">error</span> اسم المستخدم أو كلمة المرور غير صحيحة!`;
        errorMsg.style.display = 'block';
        console.error('فشل تسجيل الدخول:', { username });
      }
    });
  }

  // تحميل الداشبورد
  if (path.includes('dashboard.html')) {
    initializeDashboard();
  }

  // تحميل صفحة المفضلة
  if (path.includes('favorites.html')) {
    loadFavoritesPage();
  }

  // تحميل صفحة حسابي
  if (path.includes('account.html')) {
    loadAccountPage();
  }
});

// التعامل مع العودة باستخدام زر العودة
window.addEventListener('pageshow', (event) => {
  if (event.persisted || window.performance?.navigation?.type === 2) {
    if (window.location.pathname.includes('dashboard.html')) {
      console.log('تم العودة إلى الداشبورد باستخدام زر العودة');
      initializeDashboard();
    }
  }
});

// التعامل مع تغيرات السجل
window.addEventListener('popstate', () => {
  if (window.location.pathname.includes('dashboard.html')) {
    console.log('تم التنقل إلى الداشبورد عبر السجل');
    initializeDashboard();
  }
});

// تهيئة الداشبورد
function initializeDashboard() {
  const currentBranch = sessionStorage.getItem('currentBranch');
  const dashboard = document.getElementById('dashboard');
  const cardsContainer = document.getElementById('cardsContainer');
  const branchNameElement = document.getElementById('branchName');

  // التحقق من وجود العناصر
  if (!dashboard || !cardsContainer || !branchNameElement) {
    console.error('خطأ: عناصر الداشبورد غير موجودة', {
      dashboard: !!dashboard,
      cardsContainer: !!cardsContainer,
      branchNameElement: !!branchNameElement,
    });
    return;
  }

  // التحقق من وجود الفرع
  if (!currentBranch || !branches[currentBranch]) {
    console.warn('تحذير: currentBranch غير موجود أو غير صالح', { currentBranch });
    window.location.href = 'index.html';
    return;
  }

  console.log('تهيئة الداشبورد للفرع:', currentBranch);

  // تحميل اسم الفرع
  branchNameElement.textContent = branches[currentBranch].name;

  // تحميل النافذة المنبثقة
  initializePopup();

  // تحميل بيانات الفرع
  loadBranchData(currentBranch);
}

// تهيئة النافذة المنبثقة
function initializePopup() {
  const popup = document.getElementById('popup');
  const okBtn = document.getElementById('popup-ok');
  const closeBtn = document.querySelector('.popup-close');

  if (!popup || !okBtn) {
    console.error('خطأ: عناصر النافذة المنبثقة غير موجودة', {
      popup: !!popup,
      okBtn: !!okBtn,
    });
    return;
  }

  const popupKey = 'popup_seen_v2';
  const popupEnabled = localStorage.getItem('popup_enabled') !== 'false';

  console.log('حالة النافذة المنبثقة:', {
    popupEnabled,
    popupSeen: localStorage.getItem(popupKey),
  });

  if (popupEnabled && !localStorage.getItem(popupKey)) {
    setTimeout(() => {
      popup.style.display = 'flex';
      console.log('إظهار النافذة المنبثقة بعد تأخير');
    }, 1000);
  } else {
    console.warn('النافذة لم تظهر:', {
      reason: !popupEnabled ? 'popup_enabled=false' : 'popup_seen_v2=true',
    });
  }

  function hidePopup() {
    popup.style.display = 'none';
    localStorage.setItem(popupKey, 'true');
    console.log('تم إغلاق النافذة وحفظ الحالة:', popupKey);
  }

  okBtn.addEventListener('click', hidePopup);
  if (closeBtn) {
    closeBtn.addEventListener('click', hidePopup);
  }
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      hidePopup();
    }
  });
}

// تحميل بيانات الفرع
function loadBranchData(branchKey) {
  const branch = branches[branchKey];
  const dashboard = document.getElementById('dashboard');
  const cardsContainer = document.getElementById('cardsContainer');

  if (!branch || !dashboard || !cardsContainer) {
    console.error('خطأ: بيانات الفرع أو عناصر DOM غير موجودة', {
      branch: !!branch,
      dashboard: !!dashboard,
      cardsContainer: !!cardsContainer,
    });
    return;
  }

  // إضافة شريط البحث وأزرار التنقل
  dashboard.innerHTML = `
    <div class="search-bar">
      <div class="search-container">
        <span class="material-icons">search</span>
        <input type="text" id="searchInput" placeholder="ابحث هنا عن عنصر ...">
      </div>
    </div>
    <div class="dashboard-buttons">
      <a href="favorites.html" class="favorites-btn">
        <span class="material-icons">favorite</span> المفضلة
      </a>
      <a href="account.html" class="account-btn">
        <span class="material-icons">account_circle</span> حسابي
      </a>
    </div>
    <div class="cards-container" id="cardsContainer"></div>
  `;

  // إعادة الحصول على cardsContainer بعد تحديث DOM
  const newCardsContainer = document.getElementById('cardsContainer');
  if (!newCardsContainer) {
    console.error('خطأ: cardsContainer غير موجود بعد التحديث');
    return;
  }

  newCardsContainer.innerHTML = '';

  try {
    branch.assets.forEach((asset, index) => {
      const card = document.createElement('div');
      card.className = 'asset-card';

      const header = document.createElement('div');
      header.className = 'card-header';
      header.innerHTML = `
        <span class="material-icons">${asset.icon}</span>
        <h3>${asset.title}</h3>
        <span class="material-icons favorite-icon" onclick="toggleFavorite(${index})">${branch.favorites.includes(index) ? 'favorite' : 'favorite_border'}</span>
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
          let bgColor = color.type === 'HEX' ? color.code : `rgb(${color.code})`;
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
      newCardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('خطأ أثناء تحميل بطاقات الموارد:', error);
  }

  // تصفية البطاقات بناءً على البحث
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const searchText = e.target.value.trim().toLowerCase();
      const cards = newCardsContainer.getElementsByClassName('asset-card');

      Array.from(cards).forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('.card-content').textContent.toLowerCase();
        card.style.display = (title.includes(searchText) || content.includes(searchText)) ? 'block' : 'none';
      });
    });
  } else {
    console.warn('تحذير: searchInput غير موجود');
  }

  // تحميل المفضلة
  loadFavorites();
}

// تحميل بيانات صفحة حسابي
function loadAccountPage() {
  const currentBranch = sessionStorage.getItem('currentBranch') || 'غير متوفر';
  const username = sessionStorage.getItem('username') || currentBranch;
  const password = sessionStorage.getItem('password') || (validCredentials[currentBranch] || 'غير متوفر');
  let branchName = 'فرع غير معروف';

  if (branches[currentBranch]) {
    branchName = branches[currentBranch].name;
  } else {
    console.warn('تحذير: الفرع غير موجود في branches', { currentBranch });
  }

  const branchNameElement = document.getElementById('branchName');
  const branchNameDisplay = document.getElementById('branchNameDisplay');
  if (branchNameElement && branchNameDisplay) {
    branchNameElement.textContent = branchName + " - حسابي";
    branchNameDisplay.textContent = branchName;
  } else {
    console.error('خطأ: عناصر branchName أو branchNameDisplay غير موجودة');
  }

  const usernameDisplay = document.getElementById('usernameDisplay');
  const passwordDisplay = document.getElementById('passwordDisplay');
  if (usernameDisplay && passwordDisplay) {
    usernameDisplay.textContent = username;
    passwordDisplay.value = password;
  } else {
    console.error('خطأ: عناصر usernameDisplay أو passwordDisplay غير موجودة');
  }
}

// إظهار/إخفاء كلمة المرور
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('passwordDisplay');
  const toggleIcon = document.querySelector('.toggle-password');
  if (passwordInput && toggleIcon) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = 'visibility_off';
    } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = 'visibility';
    }
  } else {
    console.error('خطأ: حقل كلمة المرور أو أيقونة التبديل غير موجودة', {
      passwordInput,
      toggleIcon
    });
  }
}

// تبديل حالة البطاقة (فتح/إغلاق)
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
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('password');
  window.location.href = 'index.html';
}

// حفظ المفضلة
function saveFavorites() {
  const currentBranch = sessionStorage.getItem('currentBranch');
  if (currentBranch && branches[currentBranch]) {
    localStorage.setItem(`favorites_${currentBranch}`, JSON.stringify(branches[currentBranch].favorites));
  }
}

// تحميل المفضلة
function loadFavorites() {
  const currentBranch = sessionStorage.getItem('currentBranch');
  if (currentBranch && branches[currentBranch]) {
    const saved = localStorage.getItem(`favorites_${currentBranch}`);
    if (saved) {
      branches[currentBranch].favorites = JSON.parse(saved);
    }
  }
}

// إضافة/إزالة عنصر من المفضلة
function toggleFavorite(index) {
  const currentBranch = sessionStorage.getItem('currentBranch');
  if (!currentBranch || !branches[currentBranch]) {
    console.error('خطأ: الفرع غير موجود عند تبديل المفضلة', { currentBranch });
    return;
  }

  const favorites = branches[currentBranch].favorites;
  const cards = document.querySelectorAll('.asset-card');
  if (cards[index]) {
    const icon = cards[index].querySelector('.favorite-icon');
    if (favorites.includes(index)) {
      favorites.splice(favorites.indexOf(index), 1);
      icon.textContent = 'favorite_border';
    } else {
      favorites.push(index);
      icon.textContent = 'favorite';
    }
    saveFavorites();
  } else {
    console.error('خطأ: البطاقة غير موجودة عند التبديل', { index });
  }
}

// تحميل صفحة المفضلة
function loadFavoritesPage() {
  const currentBranch = sessionStorage.getItem('currentBranch');
  if (!currentBranch || !branches[currentBranch]) {
    console.warn('تحذير: الفرع غير موجود عند تحميل صفحة المفضلة', { currentBranch });
    window.location.href = 'index.html';
    return;
  }

  const branchName = document.getElementById('branchName');
  if (branchName) {
    branchName.textContent = branches[currentBranch].name + " - المفضلة";
  } else {
    console.error('خطأ: branchName غير موجود');
  }

  const container = document.getElementById('favoritesContainer');
  if (!container) {
    console.error('خطأ: favoritesContainer غير موجود');
    return;
  }
  loadFavorites();
  container.innerHTML = branches[currentBranch].favorites.length === 0 ? 
    '<div class="no-favorites">لا توجد عناصر في المفضلة</div>' : 
    branches[currentBranch].favorites.map(index => `
      <div class="asset-card">
        ${createCardContent(branches[currentBranch].assets[index])}
      </div>
    `).join('');

  document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement;
      toggleCard(card);
    });
  });
}

// دالة مساعدة لإنشاء محتوى البطاقة
function createCardContent(asset) {
  let content = `
    <div class="card-header">
      <span class="material-icons">${asset.icon}</span>
      <h3>${asset.title}</h3>
      <span class="material-icons arrow">expand_more</span>
    </div>
    <div class="card-content">
  `;
  if (asset.files) {
    content += `<div class="file-grid">`;
    asset.files.forEach(file => {
      content += `
        <a href="${file.url}" class="file-item" download>
          <span class="material-icons">download</span> ${file.name}
        </a>`;
    });
    content += `</div>`;
  }
  if (asset.colors) {
    content += `<div class="color-grid">`;
    asset.colors.forEach(color => {
      let bgColor = color.type === 'HEX' ? color.code : `rgb(${color.code})`;
      content += `
        <div class="color-box" style="background-color: ${bgColor};">
          <div class="color-code">${color.code}</div>
          <div class="color-type">${color.type}</div>
        </div>`;
    });
    content += `</div>`;
  }
  content += `</div>`;
  return content;
}

// دعم تثبيت التطبيق كـ PWA
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
  const loginBox = document.querySelector('.login-box');
  if (loginBox) loginBox.appendChild(installBtn);
}

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      const installBtn = document.querySelector('.install-btn');
      if (installBtn) installBtn.remove();
    });
  }
}

// تعطيل Service Worker مؤقتًا للاختبار
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js?v=1.2')
      .then(registration => {
        console.log('Service Worker مسجل بنجاح!', registration);
      })
      .catch(err => console.error('فشل تسجيل Service Worker:', err));
  });
}
*/

// فحص حالة الاتصال
window.addEventListener('load', function () {
  function checkOnlineStatus() {
    if (!navigator.onLine) {
      window.location.href = 'offline.html';
    }
  }

  checkOnlineStatus();
  window.addEventListener('offline', () => {
    window.location.href = 'offline.html';
  });
});