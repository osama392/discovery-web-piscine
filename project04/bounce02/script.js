/**
 * ==============================================================================
 * BOUNCE 02 — LANGUAGE SWITCHER & INTERNATIONALIZATION
 * ==============================================================================
 *
 * Requirements:
 * 1. JavaScript Translation Dictionary Object.
 * 2. DOM textContent manipulation without page reload.
 * 3. Dynamic document direction: dir="rtl" & lang="ar" for Arabic, dir="ltr" & lang="en" for English.
 * ==============================================================================
 */

const translations = {
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_certs: "Certificates",
        nav_volunteering: "Volunteering",
        nav_hobbies: "Hobbies",
        nav_contact: "Contact",
        lang_btn: "العربية",

        hero_badge: "Cybersecurity Graduate • SOC Analyst • Solutions Developer",
        hero_title: "Hi, I'm Osama Al-Sa'odi",
        hero_intro: "Fresh Cybersecurity graduate from Tafila Technical University with hands-on experience in SOC operations, machine learning anomaly detection, and custom security tooling.",
        hero_btn_projects: "View My Projects",
        hero_btn_contact: "Contact Me",
        hero_location: "📍 Amman, Jordan",
        scroll_cue: "Explore Portfolio",

        about_title: "About Me",
        about_photo_name: "Osama Al-Sa'odi",
        about_photo_loc: "Amman, Jordan",
        summary_title: "Professional Summary",
        summary_p1: "Results-driven Cybersecurity Solutions Developer and Security Operations Center (SOC) Analyst. I engineer defensive architectures, conduct SIEM log monitoring, and build machine learning-driven anomaly detection systems.",
        summary_p2: "Equipped with practical experience in network defense, enterprise threat triage, and secure tooling development to protect critical digital infrastructure.",
        edu_heading: "Education & Scholarships",
        edu1_school: "Tafila Technical University (TTU), Jordan",
        edu1_degree: "Bachelor of Science in Cybersecurity — GPA: 81.87%",
        edu1_note: "Recipient of the Ministry of Higher Education Full Annual Merit Scholarship for 4 consecutive years.",
        edu2_school: "VSB – Technical University of Ostrava, Czech Republic",
        edu2_degree: "Exchange Semester (Study Abroad)",
        edu2_note: "Awarded the Erasmus+ International Credit Mobility Scholarship.",

        exp_title: "Experience & Research",
        exp1_title: "Higher Education Reform Expert (HERE Expert) Student",
        exp1_org: "National Erasmus+ Office — Jordan (Contract)",
        exp1_desc: "Appointed by the National Erasmus+ Office in Jordan as a Higher Education Reform Expert (HERE Expert) Student for 2025–2026. This role involves actively contributing to the reform and development of the Jordanian higher education sector, providing student perspectives, and participating in HERE team activities, in collaboration with the EU Delegation and the Ministry of Higher Education.",
        exp2_title: "Undergraduate Research Assistant (Deep Learning)",
        exp2_org: "Tafila Technical University",
        exp2_b1: "Developed and evaluated autoencoder architectures on large-scale phishing datasets using advanced feature engineering to achieve high detection accuracy.",
        exp2_b2: "Benchmarked detection models (Precision, Recall, F1-score) for a Scopus-indexed Springer journal submission (Under Review).",
        exp3_title: "Undergraduate Research Assistant (Cloud Security)",
        exp3_org: "Tafila Technical University",
        exp3_b1: "Engineered a virtualized cloud security lab using pfSense for enterprise-grade network segmentation and firewall management.",
        exp3_b2: "Configured Snort IDS rule sets for real-time traffic inspection and generated performance benchmarks. Research presented at IMLC 2026.",
        exp4_title: "Cybersecurity Intern",
        exp4_org: "Green Circle for Cybersecurity — Amman, Jordan (On-site)",
        exp4_b1: "Participated in an on-the-job training program gaining hands-on experience in cybersecurity under expert guidance.",
        exp4_b2: "Worked on real projects applying practical security measures in environments similar to small and medium-sized businesses.",
        exp4_b3: "Enhanced skills in penetration testing, network security, and bridging the gap between theory and practice.",
        exp5_title: "Cybersecurity Intern",
        exp5_org: "National Cyber Security Center (NCSC) — Jordan (Remote)",
        exp5_b1: "Completed the Masar national cybersecurity internship program (180 hours) organized by the NCSC in Jordan.",
        exp5_b2: "Received hands-on training in penetration testing, malware analysis, incident response, and network & infrastructure security.",
        exp5_b3: "Bridged the gap between academic knowledge and real-world applications in cybersecurity operations.",

        skills_title: "Technical Skills",
        sk1_title: "🛡️ Security Operations & Defense",
        sk2_title: "💻 Security Development & Tools",
        sk3_title: "⚡ Programming & Scripting",
        sk4_title: "🤖 AI & Machine Learning",

        proj_title: "Projects Showcase",
        proj1_tag: "Senior Capstone • Lead Architect",
        proj1_name: "VisionVoice Security — AI Threat Intelligence",
        proj1_text: "A complete cybersecurity solution integrating a Chrome Extension, Node.js API Gateway, and an isolated Dockerized Python AI Engine.",
        proj1_b1: "Composite threat scoring using PhishTank, Google Safe Browsing, and URLhaus.",
        proj1_b2: "LLM-based page scanning, RDAP verification, and Vision AI OCR to detect credential phishing.",
        proj1_b3: "Zero-click email inspection with SPF, DKIM, and DMARC verification.",
        proj2_name: "Cloud Security & Network Defense Lab",
        proj2_text: "Engineered a virtualized enterprise network segmented with pfSense firewalls. Configured Snort IDS custom rule sets for real-time packet inspection and threat alerts.",
        proj3_name: "Autoencoder Anomaly Detection for Phishing",
        proj3_text: "Developed and evaluated deep learning autoencoders on large-scale phishing datasets, engineering features to achieve high detection accuracy, Precision, and Recall.",
        proj4_tag: "Web Development • Frontend Engineering",
        proj4_name: "Interactive Web Applications & Interfaces",
        proj4_text: "Developed responsive web interfaces and dynamic web applications utilizing semantic HTML5, modern CSS3 styling, and JavaScript (ES6+). Focused on clean architecture, interactive DOM manipulation, accessibility, and efficient version control workflows.",

        certs_title: "Certifications & Training",
        c1_title: "Youth Grow Activity (YGA)",
        c1_org: "U.S. Embassy Amman & Q2 Impact (2025–2026)",
        c1_desc: "6-month employability and technical leadership program.",
        c2_title: "Junior Cybersecurity Analyst",
        c2_desc: "Endpoint Security, Network Defense, and Threat Management.",
        c3_title: "CompTIA Security+ Training",
        c3_org: "Pioneers Academy",
        c3_desc: "Core security fundamentals, cryptography, and defense architecture.",
        c4_title: "Cyber Associate",
        c4_org: "Green Circle for Cybersecurity",
        c4_desc: "SOC workflows, log inspection, and threat triage.",
        c5_title: "Python Programming",
        c5_org: "Pioneers Academy",
        c5_desc: "Advanced algorithms, data structures, and automation scripting.",
        c6_title: "Risk Management Quantification",
        c6_org: "Octopian",
        c6_desc: "Cyber risk evaluation models and impact calculation.",
        c7_title: "Artificial Intelligence",
        c7_org: "TAG-KS (Talal Abu-Ghazaleh)",
        c7_desc: "Neural networks, AI models, and real-world implementations.",

        vol_title: "Leadership & Volunteering",
        v1_title: "Founder & Team Leader",
        v1_desc: "Founded and led student volunteers in community service, technical workshops, and social initiatives at university.",
        v2_title: "PR Officer & Trigger",
        v2_desc: "Organized tech events, managed branch public relations, and coordinated hackathons for engineering students.",
        v3_title: "Campus Ambassador",
        v3_desc: "Promoted competitive programming participation and mobilized student teams for international coding competitions and innovation challenges.",
        v4_title: "Active Volunteer",
        v4_desc: "Engaged in community service, environmental initiatives, and youth development workshops across Jordan.",

        hob_title: "Hobbies & Personal Interests",
        h1_title: "Traveling",
        h1_desc: "Explored 17 countries across Europe, the Middle East, and the Caucasus, discovering new cultures and horizons.",
        h2_title: "Photography",
        h2_desc: "Capturing outdoor landscapes, architecture, and memorable moments.",
        h3_title: "Tech Reading",
        h3_desc: "Reading research papers, vulnerability reports, and cybersecurity news.",
        h4_title: "Gaming",
        h4_desc: "Playing strategic and puzzle games to stimulate critical thinking and tactical focus.",

        contact_title: "Get In Touch",
        contact_subtitle: "Feel free to reach out for collaboration, security questions, or opportunities.",
        contact_direct: "Direct Info",
        c_name_lbl: "Name:",
        c_loc_lbl: "Location:",
        c_loc_val: "Amman, Jordan",
        c_email_lbl: "Email:",
        c_phone_lbl: "Phone:",
        lbl_name: "Your Name",
        lbl_email: "Your Email",
        lbl_subject: "Subject",
        lbl_msg: "Message",
        btn_send: "Send Message",
        ph_name: "John Doe",
        ph_email: "john@example.com",
        ph_subject: "Project / Inquiry",
        ph_msg: "Write your message here...",
        footer_copy: "© 2026 Osama Al-Sa'odi"
    },
    ar: {
        nav_about: "عنّي",
        nav_experience: "الخبرات",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_certs: "الشهادات",
        nav_volunteering: "التطوع",
        nav_hobbies: "الهوايات",
        nav_contact: "تواصل معي",
        lang_btn: "English",

        hero_badge: "خريج أمن سيبراني • محلل مركز عمليات أمنية (SOC) • مطور حلول",
        hero_title: "مرحباً، أنا أسامة السعودي",
        hero_intro: "خريج أمن سيبراني حديث من جامعة الطفيلة التقنية، ممتلك لخبرة عملية في عمليات الـ SOC، وكشف الشذوذ والتهديدات بالذكاء الاصطناعي، وتطوير الأدوات الأمنية.",
        hero_btn_projects: "استعرض مشاريعي",
        hero_btn_contact: "تواصل معي",
        hero_location: "📍 عمّان، الأردن",
        scroll_cue: "استكشف البورتفوليو",

        about_title: "نبذة عنّي",
        about_photo_name: "أسامة السعودي",
        about_photo_loc: "عمّان، الأردن",
        summary_title: "الملخص المهني",
        summary_p1: "مطوّر حلول أمن سيبراني ومحلل مركز عمليات الأمن (SOC) يركز على النتائج. أقوم بهندسة حلول دفاعية، ومراقبة وتحليل سجلات الـ SIEM، وبناء أنظمة كشف شذوذ مبنية على تعلّم الآلة.",
        summary_p2: "مجهز بخبرة عملية في الدفاع عن الشبكات، وتحليل الحوادث الأمنية في بيئات الأعمال، وتطوير أدوات برمجية آمنة لحماية البنى التحتية الرقمية الحساسة.",
        edu_heading: "التعليم والمنح الدراسية",
        edu1_school: "جامعة الطفيلة التقنية (TTU)، الأردن",
        edu1_degree: "بكالوريوس في الأمن السيبراني — المعدل: 81.87%",
        edu1_note: "حاصل على منحة التفوق السنوية الكاملة من وزارة التعليم العالي والبحث العلمي لمدة 4 سنوات متتالية.",
        edu2_school: "جامعة VSB التقنية في أوسترافا، جمهورية التشيك",
        edu2_degree: "فصل دراسي في الخارج (تبادل طلابي دولي)",
        edu2_note: "حاصل على منحة إيراسموس بلس (Erasmus+ International Credit Mobility).",

        exp_title: "الخبرات والبحوث",
        exp1_title: "خبير إصلاح التعليم العالي (HERE Expert) ممثل الطلاب",
        exp1_org: "مكتب إيراسموس بلس الوطني — الأردن (عقد)",
        exp1_desc: "تم تعييني من قبل مكتب إيراسموس بلس الوطني في الأردن كخبير طالب لإصلاح التعليم العالي (HERE Expert) للأعوام 2025–2026. يشمل هذا الدور المساهمة الفاعلة في تطوير قطاع التعليم العالي الأردني، وتقديم رؤى الطلاب، والمشاركة في أنشطة فريق خبراء HERE بالتعاون مع بعثة الاتحاد الأوروبي ووزارة التعليم العالي.",
        exp2_title: "مساعد باحث جامعي (التعلم العميق وكشف الشذوذ)",
        exp2_org: "جامعة الطفيلة التقنية",
        exp2_b1: "تطوير وتقييم نماذج Autoencoder على مجموعات بيانات ضخمة لهجمات التصيد الاحتيالي باستخدام هندسة الميزات المتقدمة لتحقيق دقة كشف عالية.",
        exp2_b2: "قياس واختبار أداء النماذج (Precision, Recall, F1-score) لورقة بحثية مقدمة لمجلة سبرينغر مفهرسة ضمن Scopus (قيد المراجعة).",
        exp3_title: "مساعد باحث جامعي (الأمان السحابي ودفاع الشبكات)",
        exp3_org: "جامعة الطفيلة التقنية",
        exp3_b1: "بناء مختبر أمان سحابي افتراضي باستخدام pfSense لتقسيم الشبكات وإدارة جدران الحماية للشركات.",
        exp3_b2: "إعداد واختبار حزم قواعد Snort IDS للفحص الفوري لحركة مرور الشبكة ومقارنة الأداء. تم تقديم البحث في مؤتمر IMLC 2026.",
        exp4_title: "متدرب أمن سيبراني",
        exp4_org: "الدائرة الخضراء للأمن السيبراني (Green Circle) — عمّان، الأردن (حضوري)",
        exp4_b1: "المشاركة في برنامج تدريب عملي فريد على رأس العمل لاكتساب خبرة تطبيقية في الأمن السيبراني تحت إشراف خبراء.",
        exp4_b2: "العمل على مشاريع حقيقية وتطبيق تدابير أمنية عملية في بيئات مشابهة للشركات الصغيرة والمتوسطة.",
        exp4_b3: "تطوير المهارات في اختبار الاختراق وأمان الشبكات وسد الفجوة بين المعرفة النظرية والتطبيق العملي.",
        exp5_title: "متدرب أمن سيبراني",
        exp5_org: "المركز الوطني للأمن السيبراني (NCSC) — الأردن (عن بُعد)",
        exp5_b1: "إتمام برنامج 'مسار' الوطني للتدريب في الأمن السيبراني (180 ساعة تدريبية) المنظم من المركز الوطني للأمن السيبراني في الأردن.",
        exp5_b2: "تدريب عملي مكثف في اختبار الاختراق، وتحليل البرمجيات الخبيثة، والاستجابة للحوادث، وأمن الشبكات والبنية التحتية.",
        exp5_b3: "سد الفجوة بين المعرفة الأكاديمية والتطبيقات الواقعية في قطاع العمليات السيبرانية.",

        skills_title: "المهارات التقنية",
        sk1_title: "🛡️ عمليات الأمن السيبراني والدفاع (SOC)",
        sk2_title: "💻 تطوير الحلول والأدوات الأمنية",
        sk3_title: "⚡ البرمجة والسكربتات",
        sk4_title: "🤖 الذكاء الاصطناعي وتعلّم الآلة",

        proj_title: "معرض المشاريع",
        proj1_tag: "مشروع التخرج • مهندس أمن رئيسي ومطور",
        proj1_name: "VisionVoice Security — منصة استخبارات التهديدات بالذكاء الاصطناعي",
        proj1_text: "حل أمني متكامل يربط بين إضافة متصفح Chrome، وبوابة Node.js API، ومحرك ذكاء اصطناعي بايثون معزول داخل Docker.",
        proj1_b1: "نظام تقييم مخاطر مركب بالاعتماد على واجهات PhishTank و Google Safe Browsing و URLhaus.",
        proj1_b2: "فحص محتوى المواقع بنماذج الذكاء الاصطناعي التوليدي، والتحقق من النطاقات عبر RDAP، وتقنية Vision AI OCR لكشف انتحال الهوية.",
        proj1_b3: "فحص تلقائي فوري لرسائل البريد الإلكتروني مع تدقيق سجلات SPF و DKIM و DMARC.",
        proj2_name: "مختبر الدفاع عن الشبكات والأمان السحابي",
        proj2_text: "تصميم شبكة افتراضية مقسمة ومحمية بجدران نارية pfSense مع إعداد قواعد Snort IDS للفحص اللحظي وكشف التهديدات.",
        proj3_name: "كشف الشذوذ في التصيد الاحتيالي عبر Autoencoder",
        proj3_text: "بناء وتدريب نماذج التعلم العميق على بيانات تصيد واسعة مع هندسة ميزات متقدمة لتحقيق أعلى مقاييس الدقة والاستدعاء.",
        proj4_tag: "تطوير الويب • هندسة واجهات المستخدم",
        proj4_name: "تطبيقات وواجهات ويب تفاعلية حديثة",
        proj4_text: "تطوير واجهات وتطبيقات ويب متجاوبة وديناميكية باستخدام HTML5 الدلالي، وتنسيقات CSS3 الحديثة، وجافاسكريبت (ES6+). التركيز على المعمارية النظيفة، والتفاعل السلس مع الـ DOM، وسهولة الوصول، وإدارة الإصدارات عبر Git.",

        certs_title: "الشهادات المهنية والتدريب",
        c1_title: "برنامج نشاط نمو الشباب (YGA)",
        c1_org: "السفارة الأمريكية في عمان وشركة Q2 Impact (2025–2026)",
        c1_desc: "برنامج مدته 6 أشهر للتدريب التقني والجاهزية الوظيفية والقيادة.",
        c2_title: "مسار محلل أمن سيبراني مبتدئ",
        c2_desc: "أمان نقاط النهاية، والدفاع عن الشبكات، وإدارة التهديدات السيبرانية.",
        c3_title: "دورة Security+ المتقدمة",
        c3_org: "أكاديمية الرواد للتدريب",
        c3_desc: "مفاهيم الأمان المؤسسي، والتشفير، ومعمارية الدفاع السيبراني.",
        c4_title: "Cyber Associate",
        c4_org: "الدائرة الخضراء للأمن السيبراني",
        c4_desc: "مهام غرف الـ SOC، وفحص السجلات، وفرز التهديدات السيبرانية.",
        c5_title: "برمجة بايثون المتقدمة",
        c5_org: "أكاديمية الرواد للتدريب",
        c5_desc: "الخوارزميات المتقدمة، وبنى البيانات، وأتمتة المهام الأمنية.",
        c6_title: "قياس وإدارة المخاطر السيبرانية",
        c6_org: "Octopian",
        c6_desc: "نماذج تقييم التعرض للمخاطر وحساب أثر التهديدات.",
        c7_title: "الذكاء الاصطناعي وتطبيقاته",
        c7_org: "مجتمع طلال أبوغزاله للمعرفة (TAG-KS)",
        c7_desc: "الشبكات العصبية وتطبيقات نماذج الذكاء الاصطناعي العملية.",

        vol_title: "القيادة والعمل التطوعي",
        v1_title: "مؤسس وقائد الفريق التطوعي",
        v1_desc: "تأسيس وقيادة فريق طلابي متطوع لخدمة المجتمع، وتنظيم ورش عمل تقنية ومبادرات اجتماعية في الجامعة.",
        v2_title: "مسؤول العلاقات العامة ومحفز الفعاليات",
        v2_desc: "تنظيم الفعاليات التقنية وإدارة العلاقات العامة لفرع المهندسين الطلاب وتنسيق الهاكاثونات البرمجية.",
        v3_title: "سفير الحرم الجامعي",
        v3_desc: "تشجيع المشاركة في مسابقات البرمجة التنافسية وبناء الفرق الطلابية لتحديات الابتكار الدولية.",
        v4_title: "متطوع نشط",
        v4_desc: "المشاركة الفعالة في الأنشطة المجتمعية والمبادرات البيئية وورش عمل تمكين الشباب عبر منصة نحن والمنصات المجتمعية.",

        hob_title: "الهوايات والاهتمامات الشخصية",
        h1_title: "السفر والاستكشاف",
        h1_desc: "استكشاف 17 دولة في أوروبا والشرق الأوسط والقوقاز، والتعرف على ثقافات متنوعة وآفاق جديدة.",
        h2_title: "التصوير الفوتوغرافي",
        h2_desc: "التقاط صور الطبيعة والمناظر المعمارية وتوثيق اللحظات المميزة أثناء السفر.",
        h3_title: "القراءة والاطلاع التقني",
        h3_desc: "متابعة الأوراق البحثية وتقارير الثغرات الأمنية وأحدث اتجاهات الأمن السيبراني.",
        h4_title: "الألعاب الإلكترونية",
        h4_desc: "ممارسة الألعاب الاستراتيجية وألعاب الألغاز لتحفيز التفكير التحليلي والتركيز التكتيكي.",

        contact_title: "تواصل معي",
        contact_subtitle: "يسعدني دائماً تواصلكم للتعاون البرمجي أو الاستفسارات الأمنية أو الفرص المهنية.",
        contact_direct: "معلومات التواصل المباشر",
        c_name_lbl: "الاسم:",
        c_loc_lbl: "الموقع:",
        c_loc_val: "عمّان، الأردن",
        c_email_lbl: "البريد الإلكتروني:",
        c_phone_lbl: "رقم الهاتف:",
        lbl_name: "الاسم الكامل",
        lbl_email: "البريد الإلكتروني",
        lbl_subject: "موضوع الرسالة",
        lbl_msg: "الرسالة",
        btn_send: "إرسال الرسالة",
        ph_name: "أدخل اسمك الكريم",
        ph_email: "name@example.com",
        ph_subject: "المشروع / الاستفسار",
        ph_msg: "اكتب رسالتك هنا...",
        footer_copy: "© 2026 أسامة السعودي"
    }
};

let currentLang = 'en';

function applyLanguage(lang) {
    currentLang = lang;
    const isAr = lang === 'ar';
    const dict = translations[lang];

    // 1. Update document direction and lang attributes
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');

    // 2. Update page title
    document.title = isAr ? 'أسامة السعودي | بورتفوليو الأمن السيبراني' : "Osama Al-Sa'odi | Portfolio";

    // 3. Mutate all DOM textContent via data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // 4. Update input placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-ph]');
    placeholderElements.forEach(function (el) {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // 5. Update language button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = dict.lang_btn;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const langToggleBtn = document.getElementById('langToggle');

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', function () {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(nextLang);
        });
    }

    // Mobile Hamburger Menu
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }

    // Contact Form handling with Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const nameVal = nameInput ? nameInput.value.trim() : '';
            const emailVal = emailInput ? emailInput.value.trim() : '';
            const subjectVal = subjectInput ? subjectInput.value.trim() : '';
            const messageVal = messageInput ? messageInput.value.trim() : '';

            if (!nameVal || !emailVal || !subjectVal || !messageVal) {
                alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill out all required fields.');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : (currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = currentLang === 'ar' ? 'جاري الإرسال... &#9203;' : 'Sending... &#9203;';
            }

            const payload = {
                name: nameVal,
                email: emailVal,
                _subject: subjectVal,
                message: messageVal
            };

            fetch('https://formspree.io/f/mgaozqnz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(function (response) {
                if (response.ok) {
                    const successMsg = currentLang === 'ar'
                        ? 'شكراً لك يا ' + nameVal + '! تم إرسال رسالتك مباشرة إلى بريد أسامة.'
                        : 'Thank you, ' + nameVal + '! Your message has been sent directly to Osama.';
                    alert(successMsg);
                    contactForm.reset();
                } else {
                    const errorMsg = currentLang === 'ar'
                        ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو مراسلتي عبر issam.saodi@gmail.com.'
                        : 'Oops! There was a problem submitting your message. Please try again or email directly at issam.saodi@gmail.com.';
                    alert(errorMsg);
                }
            })
            .catch(function () {
                const networkMsg = currentLang === 'ar'
                    ? 'تعذر الاتصال بالشبكة. يرجى التحقق من اتصالك أو المراسلة عبر issam.saodi@gmail.com.'
                    : 'Network error. Please check your internet connection or email directly at issam.saodi@gmail.com.';
                alert(networkMsg);
            })
            .finally(function () {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
            });
        });
    }
});
