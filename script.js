// دالة لتحويل الأرقام العربية إلى إنجليزية
function convertToEnglishNumbers(str) {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return str.replace(/[٠-٩]/g, (char) => {
    return englishNumbers[arabicNumbers.indexOf(char)];
  });
}

// بيانات الفروع والموارد
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
          { name: "ملون (JPG)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
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
          { name: "DOCX رأسية امتحانات واختبارات", url: "https://docs.google.com/file/d/15H6XU52UJC5ertYrpkWT6-Cw6Ygva6bu/edit?usp=docslist_api&filetype=msword" },
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
          { name: "للإستخدام الرقمي (JPG)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
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
          { name: "ملون (JPG)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
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
          { name: "للإستخدام الرقمي (JPG)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
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
          { name: "ملون (JPG)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
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
          { name: "رأسية نتيجة (JPG)", url: "https://drive.google.com/file/d/1SeUSI2vlxr7NfbAKKqGNDqUX4Q65Jz7D/view?usp=drivesdk" }
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
          { name: "للإستخدام الرقمي (JPG)", url: "https://drive.google.com/file/d/1UZe6B3kd_ThfSCsymV_Vv7JWwYXqp9m0/view?usp=drivesdk" }
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
          { name: "ملون (JPG)", url: "https://drive.google.com/file/d/1iIMFUJeJZ7-L_ZG1nTwH4q7DQI8jHWbs/view?usp=drivesdk" },
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
  prf: '0911',
  admin: '4536'
};

// إعداد الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // التعامل مع روابط بدون .html
  if (path.endsWith('/dashboard')) {
    window.location.replace(`${window.location.origin}/dashboard.html`);
    return;
  }
  if (path.endsWith('/admin')) {
    window.location.replace(`${window.location.origin}/admin.html`);
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
        localStorage.setItem('currentBranch', username);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // حفظ بيانات تسجيل الدخول
        const loginTime = new Date().toLocaleString('ar-EG', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        const formattedLoginTime = convertToEnglishNumbers(loginTime);
        let loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
        loginHistory.push({ username, time: formattedLoginTime });
        if (loginHistory.length > 10) {
          loginHistory = loginHistory.slice(-10);
        }
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));

        if (username === 'admin') {
          window.location.href = 'admin.html';
        } else {
          window.location.href = 'dashboard.html';
        }
      } else {
        errorMsg.innerHTML = `<span class="material-icons">error</span> اسم المستخدم أو كلمة المرور غير صحيحة!`;
        errorMsg.style.display = 'block';
      }
    });
  }

  // تحميل الصفحات المناسبة
  if (path.includes('dashboard.html')) {
    initializeDashboard();
  }
  if (path.includes('favorites.html')) {
    loadFavoritesPage();
  }
  if (path.includes('account.html')) {
    loadAccountPage();
  }
  if (path.includes('admin.html')) {
    initializeAdmin();
  }
});

// التعامل مع زر العودة
window.addEventListener('pageshow', (event) => {
  if (event.persisted || window.performance?.navigation?.type === 2) {
    if (window.location.pathname.includes('dashboard.html')) {
      initializeDashboard();
    }
    if (window.location.pathname.includes('admin.html')) {
      initializeAdmin();
    }
  }
});

// التعامل مع تغيرات السجل
window.addEventListener('popstate', () => {
  if (window.location.pathname.includes('dashboard.html')) {
    initializeDashboard();
  }
  if (window.location.pathname.includes('admin.html')) {
    initializeAdmin();
  }
});

// تهيئة الداشبورد
function initializeDashboard() {
  const currentBranch = localStorage.getItem('currentBranch');
  const dashboard = document.getElementById('dashboard');
  const branchNameElement = document.getElementById('branchName');

  if (!dashboard || !branchNameElement) {
    console.error('خطأ: عناصر الداشبورد غير موجودة');
    window.location.href = 'index.html';
    return;
  }

  if (!currentBranch || !branches[currentBranch]) {
    window.location.href = 'index.html';
    return;
  }

  branchNameElement.textContent = branches[currentBranch].name;
  initializePopup();
  loadBranchData(currentBranch);
}

// تهيئة النافذة المنبثقة
function initializePopup() {
  const popup = document.getElementById('popup');
  const okBtn = document.getElementById('popup-ok');
  const closeBtn = document.querySelector('.popup-close');

  if (popup && okBtn) {
    const popupKey = 'popup_seen_v2';
    if (localStorage.getItem('popup_enabled') !== 'false' && !localStorage.getItem(popupKey)) {
      setTimeout(() => {
        popup.style.display = 'flex';
      }, 1000);
    }

    const hidePopup = () => {
      popup.style.display = 'none';
      localStorage.setItem(popupKey, 'true');
    };

    okBtn.addEventListener('click', hidePopup);
    if (closeBtn) closeBtn.addEventListener('click', hidePopup);
    popup.addEventListener('click', (e) => {
      if (e.target === popup) hidePopup();
    });
  }
}

// تهيئة صفحة الأدمن
function initializeAdmin() {
  const currentBranch = localStorage.getItem('currentBranch');
  if (currentBranch !== 'admin') {
    window.location.href = 'index.html';
    return;
  }

  const adminContainer = document.querySelector('.admin-container');
  if (!adminContainer) {
    window.location.href = 'index.html';
    return;
  }

  Object.keys(branches).forEach(branchKey => {
    loadAdminBranchData(branchKey);
  });

  loadPasswords();

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  adminContainer.addEventListener('click', (e) => {
    const header = e.target.closest('.card-header');
    if (header && !e.target.classList.contains('favorite-icon')) {
      toggleCard(header.parentElement);
    }
  });
}

// تحميل بيانات فرع في صفحة الأدمن
function loadAdminBranchData(branchKey) {
  const branch = branches[branchKey];
  const tabPane = document.getElementById(branchKey);

  if (!branch || !tabPane) return;

  tabPane.innerHTML = `
    <h2>${branch.name}</h2>
    <div class="search-bar">
      <div class="search-container">
        <span class="material-icons">search</span>
        <input type="text" id="searchInput-${branchKey}" placeholder="ابحث هنا عن عنصر ...">
      </div>
    </div>
    <div class="share-branch">
      <button onclick="shareBranch('${branchKey}')" class="share-btn">
        <span class="material-icons">share</span> مشاركة تفاصيل الفرع
      </button>
    </div>
    <h3>الموارد</h3>
    <div class="cards-container" id="cardsContainer-${branchKey}"></div>
    <h3>المفضلة</h3>
    <div class="favorites-container" id="favoritesContainer-${branchKey}"></div>
  `;

  const cardsContainer = document.getElementById(`cardsContainer-${branchKey}`);
  const favoritesContainer = document.getElementById(`favoritesContainer-${branchKey}`);

  if (!cardsContainer || !favoritesContainer) return;

  branch.assets.forEach((asset, index) => {
    const card = document.createElement('div');
    card.className = 'asset-card';
    card.innerHTML = `
      <div class="card-header">
        <span class="material-icons">${asset.icon}</span>
        <h3>${asset.title}</h3>
        <span class="material-icons favorite-icon" onclick="toggleFavorite('${branchKey}', ${index}, event)">${branch.favorites.includes(index) ? 'favorite' : 'favorite_border'}</span>
        <span class="material-icons arrow">expand_more</span>
      </div>
      <div class="card-content" style="max-height: 0;">
        ${asset.files ? `<div class="file-grid">${asset.files.map(file => `<a href="${file.url}" class="file-item" download><span class="material-icons">download</span> ${file.name}</a>`).join('')}</div>` : ''}
        ${asset.colors ? `<div class="color-grid">${asset.colors.map(color => `<div class="color-box" style="background-color: ${color.type === 'HEX' ? color.code : `rgb(${color.code})`}"><div class="color-code">${color.code}</div><div class="color-type">${color.type}</div></div>`).join('')}</div>` : ''}
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  loadFavorites(branchKey);
  favoritesContainer.innerHTML = branch.favorites.length === 0 ? 
    '<div class="no-favorites">لا توجد عناصر في المفضلة</div>' : 
    branch.favorites.map(index => `<div class="asset-card">${createCardContent(branch.assets[index])}</div>`).join('');

  const searchInput = document.getElementById(`searchInput-${branchKey}`);
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const searchText = e.target.value.trim().toLowerCase();
      Array.from(cardsContainer.getElementsByClassName('asset-card')).forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('.card-content').textContent.toLowerCase();
        card.style.display = (title.includes(searchText) || content.includes(searchText)) ? 'block' : 'none';
      });
    });
  }
}

// تحميل كلمات المرور
function loadPasswords() {
  const passwordsContainer = document.getElementById('passwordsContainer');
  if (!passwordsContainer) return;

  passwordsContainer.innerHTML = Object.keys(validCredentials).map(branchKey => `
    <div class="password-item">
      <div class="password-details">
        <label>اسم الفرع:</label>
        <span>${branches[branchKey]?.name || branchKey}</span>
      </div>
      <div class="password-details">
        <label>اسم المستخدم:</label>
        <span>${branchKey}</span>
      </div>
      <div class="password-details">
        <label>كلمة المرور:</label>
        <div class="password-container">
          <input type="password" value="${validCredentials[branchKey]}" readonly id="password-${branchKey}">
          <span class="material-icons toggle-password" onclick="togglePasswordVisibility('password-${branchKey}')">visibility</span>
          <button class="copy-btn" onclick="copyPassword('${validCredentials[branchKey]}')">
            <span class="material-icons">content_copy</span>
          </button>
          <button class="share-btn" onclick="sharePassword('${branchKey}', '${validCredentials[branchKey]}')">
            <span class="material-icons">share</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// إظهار/إخفاء كلمة المرور
function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleIcon = passwordInput?.nextElementSibling;

  if (passwordInput && toggleIcon) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = 'visibility_off';
    } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = 'visibility';
    }
  }
}

// مشاركة تفاصيل الفرع
function shareBranch(branchKey) {
  const branch = branches[branchKey];
  if (!branch) return;

  const shareData = {
    title: `تفاصيل فرع ${branch.name}`,
    text: `اسم الفرع: ${branch.name}\nعدد الموارد: ${branch.assets.length}\nعدد العناصر المفضلة: ${branch.favorites.length}`,
    url: window.location.origin
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => navigator.clipboard.writeText(shareData.text).then(() => alert('تم نسخ تفاصيل الفرع')));
  } else {
    navigator.clipboard.writeText(shareData.text).then(() => alert('تم نسخ تفاصيل الفرع'));
  }
}

// نسخ كلمة المرور
function copyPassword(password) {
  navigator.clipboard.writeText(password).then(() => alert('تم نسخ كلمة المرور'));
}

// مشاركة كلمة المرور
function sharePassword(branchKey, password) {
  const shareData = {
    title: `كلمة مرور فرع ${branches[branchKey]?.name || branchKey}`,
    text: `اسم الفرع: ${branches[branchKey]?.name || branchKey}\nاسم المستخدم: ${branchKey}\nكلمة المرور: ${password}`,
    url: window.location.origin
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => navigator.clipboard.writeText(shareData.text).then(() => alert('تم نسخ كلمة المرور')));
  } else {
    navigator.clipboard.writeText(shareData.text).then(() => alert('تم نسخ كلمة المرور'));
  }
}

// تحميل بيانات الفرع
function loadBranchData(branchKey) {
  const branch = branches[branchKey];
  const cardsContainer = document.getElementById('cardsContainer');

  if (!branch || !cardsContainer) return;

  cardsContainer.innerHTML = '';

  branch.assets.forEach((asset, index) => {
    const card = document.createElement('div');
    card.className = 'asset-card';
    card.innerHTML = `
      <div class="card-header">
        <span class="material-icons">${asset.icon}</span>
        <h3>${asset.title}</h3>
        <span class="material-icons favorite-icon" onclick="toggleFavorite('${branchKey}', ${index}, event)">${branch.favorites.includes(index) ? 'favorite' : 'favorite_border'}</span>
        <span class="material-icons arrow">expand_more</span>
      </div>
      <div class="card-content" style="max-height: 0;">
        ${asset.files ? `<div class="file-grid">${asset.files.map(file => `<a href="${file.url}" class="file-item" download><span class="material-icons">download</span> ${file.name}</a>`).join('')}</div>` : ''}
        ${asset.colors ? `<div class="color-grid">${asset.colors.map(color => `<div class="color-box" style="background-color: ${color.type === 'HEX' ? color.code : `rgb(${color.code})`}"><div class="color-code">${color.code}</div><div class="color-type">${color.type}</div></div>`).join('')}</div>` : ''}
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  cardsContainer.addEventListener('click', (e) => {
    const header = e.target.closest('.card-header');
    if (header && !e.target.classList.contains('favorite-icon')) {
      toggleCard(header.parentElement);
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const searchText = e.target.value.trim().toLowerCase();
      Array.from(cardsContainer.getElementsByClassName('asset-card')).forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('.card-content').textContent.toLowerCase();
        card.style.display = (title.includes(searchText) || content.includes(searchText)) ? 'block' : 'none';
      });
    });
  }

  loadFavorites(branchKey);
}

// تحميل بيانات صفحة حسابي
function loadAccountPage() {
  const currentBranch = localStorage.getItem('currentBranch') || 'غير متوفر';
  const username = localStorage.getItem('username') || currentBranch;
  const password = localStorage.getItem('password') || (validCredentials[currentBranch] || 'غير متوفر');
  let branchName = branches[currentBranch]?.name || 'فرع غير معروف';

  const branchNameElement = document.getElementById('branchName');
  const branchNameDisplay = document.getElementById('branchNameDisplay');
  const usernameDisplay = document.getElementById('usernameDisplay');
  const passwordDisplay = document.getElementById('passwordDisplay');
  const loginHistoryContainer = document.getElementById('loginHistoryContainer');

  if (branchNameElement && branchNameDisplay) {
    branchNameElement.textContent = branchName + " - حسابي";
    branchNameDisplay.textContent = branchName;
  }

  if (usernameDisplay && passwordDisplay) {
    usernameDisplay.textContent = username;
    passwordDisplay.value = password;
  }

  if (loginHistoryContainer) {
    const loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
    loginHistoryContainer.innerHTML = loginHistory.length === 0 ? 
      '<div class="no-logins">لا توجد سجلات تسجيل دخول</div>' : 
      loginHistory.reverse().map(login => `
        <div class="login-card">
          <div class="login-info">
            <span class="material-icons">login</span>
            <span class="username">${login.username}</span>
          </div>
          <span class="time">${login.time}</span>
        </div>
      `).join('');
  }
}

// تبديل حالة البطاقة
function toggleCard(card) {
  const content = card.querySelector('.card-content');
  const arrow = card.querySelector('.arrow');
  if (content && arrow) {
    const isActive = card.classList.toggle('active');
    content.style.maxHeight = isActive ? `${content.scrollHeight}px` : '0';
    arrow.textContent = isActive ? 'expand_less' : 'expand_more';
  }
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem('currentBranch');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.href = 'index.html';
}

// حفظ المفضلة
function saveFavorites(branchKey) {
  if (branchKey && branches[branchKey]) {
    localStorage.setItem(`favorites_${branchKey}`, JSON.stringify(branches[branchKey].favorites));
  }
}

// تحميل المفضلة
function loadFavorites(branchKey) {
  if (branchKey && branches[branchKey]) {
    const saved = localStorage.getItem(`favorites_${branchKey}`);
    if (saved) {
      branches[branchKey].favorites = JSON.parse(saved);
    }
  }
}

// إضافة/إزالة عنصر من المفضلة
function toggleFavorite(branchKey, index, event) {
  event.stopPropagation();
  if (!branchKey || !branches[branchKey]) return;

  const favorites = branches[branchKey].favorites;
  const cardsContainer = document.getElementById(`cardsContainer-${branchKey}`) || document.getElementById('cardsContainer');
  const card = cardsContainer?.getElementsByClassName('asset-card')[index];

  if (card) {
    const icon = card.querySelector('.favorite-icon');
    if (favorites.includes(index)) {
      favorites.splice(favorites.indexOf(index), 1);
      icon.textContent = 'favorite_border';
    } else {
      favorites.push(index);
      icon.textContent = 'favorite';
    }
    saveFavorites(branchKey);

    if (window.location.pathname.includes('admin.html')) {
      const favoritesContainer = document.getElementById(`favoritesContainer-${branchKey}`);
      if (favoritesContainer) {
        favoritesContainer.innerHTML = branches[branchKey].favorites.length === 0 ? 
          '<div class="no-favorites">لا توجد عناصر في المفضلة</div>' : 
          branches[branchKey].favorites.map(idx => `<div class="asset-card">${createCardContent(branches[branchKey].assets[idx])}</div>`).join('');
      }
    }
  }
}

// تحميل صفحة المفضلة
function loadFavoritesPage() {
  const currentBranch = localStorage.getItem('currentBranch');
  if (!currentBranch || !branches[currentBranch]) {
    window.location.href = 'index.html';
    return;
  }

  const branchName = document.getElementById('branchName');
  const container = document.getElementById('favoritesContainer');

  if (branchName) {
    branchName.textContent = branches[currentBranch].name + " - المفضلة";
  }

  if (container) {
    loadFavorites(currentBranch);
    container.innerHTML = branches[currentBranch].favorites.length === 0 ? 
      '<div class="no-favorites">لا توجد عناصر في المفضلة</div>' : 
      branches[currentBranch].favorites.map(index => `<div class="asset-card">${createCardContent(branches[currentBranch].assets[index])}</div>`).join('');

    container.addEventListener('click', (e) => {
      const header = e.target.closest('.card-header');
      if (header) {
        toggleCard(header.parentElement);
      }
    });
  }
}

// دالة مساعدة لإنشاء محتوى البطاقة
function createCardContent(asset) {
  return `
    <div class="card-header">
      <span class="material-icons">${asset.icon}</span>
      <h3>${asset.title}</h3>
      <span class="material-icons arrow">expand_more</span>
    </div>
    <div class="card-content" style="max-height: 0;">
      ${asset.files ? `<div class="file-grid">${asset.files.map(file => `<a href="${file.url}" class="file-item" download><span class="material-icons">download</span> ${file.name}</a>`).join('')}</div>` : ''}
      ${asset.colors ? `<div class="color-grid">${asset.colors.map(color => `<div class="color-box" style="background-color: ${color.type === 'HEX' ? color.code : `rgb(${color.code})`}"><div class="color-code">${color.code}</div><div class="color-type">${color.type}</div></div>`).join('')}</div>` : ''}
    </div>
  `;
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

// فحص حالة الاتصال
window.addEventListener('load', () => {
  if (!navigator.onLine) {
    window.location.href = 'offline.html';
  }
  window.addEventListener('offline', () => {
    window.location.href = 'offline.html';
  });
});