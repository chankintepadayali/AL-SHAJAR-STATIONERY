// External JS file for Al Shajar Stationery Website
// Credit: (hank!nd3 p4d4y41!

const lightLogo = "https://raw.githubusercontent.com/chankintepadayali/AL-SHAJAR-STATIONERY/ac3587723b488cc77d720d4fe1b1347035380a24/logo/alshajar%20logo%20bg.png";
const darkLogo  = "https://raw.githubusercontent.com/chankintepadayali/AL-SHAJAR-STATIONERY/6afd446b101d3380127b3f822b7ca0d5fd23daa3/logo/black%20logo%20bg.png";

// UAE Dirham SVG Symbol Code
const dirhamSvg = `<svg class="dirham-symbol" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><path d="M1126.87 236.42c-29.28 0-56.12 11.23-77.58 31.02l-192.52 178.68h270.1c110.19 0 199.5 89.31 199.5 199.5s-89.31 199.5-199.5 199.5H856.77l-15.63 14.5h285.73c110.19 0 199.5 89.31 199.5 199.5s-89.31 199.5-199.5 199.5H628.26l-181.7 168.61c-15.03 13.95-23.56 33.65-23.56 54.26 0 40.59 32.91 73.5 73.5 73.5h330.37l298.6 277.11c14.28 13.25 32.74 20.39 52.09 20.39 42.06 0 76.16-34.1 76.16-76.16 0-19.86-7.75-38.64-21.82-51.7l-262.14-243.14h156.61c191.09 0 346.5-155.41 346.5-346.5 0-112.59-53.86-212.6-137.38-275.91 83.52-63.31 137.38-163.32 137.38-275.91 0-191.09-155.41-346.5-346.5-346.5zm-592.83 409.2h308.23l147.18-136.59c14.28-13.25 22.81-32.04 22.81-51.9 0-40.59-32.91-73.5-73.5-73.5h-330.37L309.79 106.52c-14.28-13.25-32.74-20.39-52.09-20.39-42.06 0-76.16 34.1-76.16 76.16 0 19.86 7.75 38.64 21.82 51.7l262.14 243.14H308.89c-110.19 0-199.5 89.31-199.5 199.5s89.31 199.5 199.5 199.5h225.15l15.63-14.5H241.44c-110.19 0-199.5 89.31-199.5 199.5s89.31 199.5 199.5 199.5h292.6l-180.22 167.24c-14.28 13.25-22.81 32.04-22.81 51.9 0 40.59 32.91 73.5 73.5 73.5h129.53z"/></svg>`;

let currentSlideIndex = 0;

function changeLanguage() {
  var lang = document.getElementById("lang").value;

  if (lang === "ml") {
    // Nav
    document.getElementById("navHome").innerText = "ഹോം";
    document.getElementById("navStationery").innerText = "സ്റ്റേഷൻ";
    document.getElementById("navServices").innerText = "സേവനങ്ങൾ";
    document.getElementById("navAbout").innerText = "ഞങ്ങളെക്കുറിച്ച്";
    document.getElementById("navContact").innerText = "ബന്ധപ്പെടുക";

    // Search & Categories
    document.getElementById("searchInput").placeholder = "ഉൽപ്പന്നങ്ങൾ തിരയുക...";
    document.getElementById("catAll").innerText = "എല്ലാ കാറ്റഗറിയും";
    document.getElementById("catNotebooks").innerText = "നോട്ട്ബുക്കുകൾ";
    document.getElementById("catPens").innerText = "പേനകൾ";
    document.getElementById("catArt").innerText = "ആർട്ട് സാമഗ്രികൾ";

    // Products
    document.getElementById("secTitle").innerText = "ഞങ്ങളുടെ ശേഖരം";
    document.getElementById("prod1").innerText = "പ്രീമിയം നോട്ട്ബുക്ക്";
    document.getElementById("prod2").innerText = "ഓഫീസ് പേനകൾ";
    document.getElementById("prod3").innerText = "ആർട്ട് സപ്ലൈസ്";
    
    // Prices with Dirham SVG Symbol
    document.getElementById("price1").innerHTML = `${dirhamSvg} 15`;
    document.getElementById("price2").innerHTML = `${dirhamSvg} 25`;
    document.getElementById("price3").innerHTML = `${dirhamSvg} 10`;

    document.querySelectorAll(".btnBuy").forEach(btn => btn.innerText = "വാങ്ങുക");
    
    // Footer & Controls
    document.getElementById("lblLang").innerText = "ഭാഷ: ";
    document.getElementById("lblTheme").innerText = "തീം: ";
    document.getElementById("footerTxt").innerHTML = "&copy; 2026 അൽ ഷജാർ സ്റ്റേഷനറി, ഷാർജ. സർവ്വ അവകാശങ്ങളും സംരക്ഷിതം.";

  } else if (lang === "ar") {
    // Nav
    document.getElementById("navHome").innerText = "الرئيسية";
    document.getElementById("navStationery").innerText = "قرطاسية";
    document.getElementById("navServices").innerText = "الخدمات";
    document.getElementById("navAbout").innerText = "عن المحل";
    document.getElementById("navContact").innerText = "اتصل بنا";

    // Search & Categories
    document.getElementById("searchInput").placeholder = "البحث عن المنتجات...";
    document.getElementById("catAll").innerText = "جميع الفئات";
    document.getElementById("catNotebooks").innerText = "دفاتر";
    document.getElementById("catPens").innerText = "أقلام للكتابة";
    document.getElementById("catArt").innerText = "مستلزمات فنية";

    // Products
    document.getElementById("secTitle").innerText = "منتجاتنا";
    document.getElementById("prod1").innerText = "دفتر ملاحظات فاخر";
    document.getElementById("prod2").innerText = "مجموعة أقلام مكتبية";
    document.getElementById("prod3").innerText = "مستلزمات فنية";

    // Prices with Dirham SVG Symbol
    document.getElementById("price1").innerHTML = `${dirhamSvg} 15`;
    document.getElementById("price2").innerHTML = `${dirhamSvg} 25`;
    document.getElementById("price3").innerHTML = `${dirhamSvg} 10`;

    document.querySelectorAll(".btnBuy").forEach(btn => btn.innerText = "اشتر الآن");

    // Footer & Controls
    document.getElementById("lblLang").innerText = "اللغة: ";
    document.getElementById("lblTheme").innerText = "المظهر: ";
    document.getElementById("footerTxt").innerHTML = "&copy; 2026 الشجر للقرطاسية، الشارقة. جميع الحقوق محفوظة.";

  } else {
    // English (Default)
    document.getElementById("navHome").innerText = "Home";
    document.getElementById("navStationery").innerText = "Stationery";
    document.getElementById("navServices").innerText = "Services";
    document.getElementById("navAbout").innerText = "About";
    document.getElementById("navContact").innerText = "Contact";

    document.getElementById("searchInput").placeholder = "Search products...";
    document.getElementById("catAll").innerText = "All Categories";
    document.getElementById("catNotebooks").innerText = "Notebooks";
    document.getElementById("catPens").innerText = "Pens & Writing";
    document.getElementById("catArt").innerText = "Art Supplies";

    document.getElementById("secTitle").innerText = "Our Categories";
    document.getElementById("prod1").innerText = "Premium Notebook";
    document.getElementById("prod2").innerText = "Office Pens Set";
    document.getElementById("prod3").innerText = "Art Supplies";

    // Prices with Dirham SVG Symbol
    document.getElementById("price1").innerHTML = `${dirhamSvg} 15`;
    document.getElementById("price2").innerHTML = `${dirhamSvg} 25`;
    document.getElementById("price3").innerHTML = `${dirhamSvg} 10`;

    document.querySelectorAll(".btnBuy").forEach(btn => btn.innerText = "Buy Now");

    document.getElementById("lblLang").innerText = "Language: ";
    document.getElementById("lblTheme").innerText = "Theme: ";
    document.getElementById("footerTxt").innerHTML = "&copy; 2026 Al Shajar Stationery, Sharjah. All rights reserved.";
  }
}

function updateLogoAndTheme(isDark) {
  var logoImg = document.getElementById("siteLogo");
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if(logoImg) logoImg.src = darkLogo;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if(logoImg) logoImg.src = lightLogo;
  }
}

function changeTheme() {
  var theme = document.getElementById("theme").value;
  if (theme === "system") {
    var isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateLogoAndTheme(isSystemDark);
  } else if (theme === "dark") {
    updateLogoAndTheme(true);
  } else {
    updateLogoAndTheme(false);
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (document.getElementById("theme").value === "system") {
    updateLogoAndTheme(e.matches);
  }
});

// Load Banners from config.json
async function loadConfigBanners() {
  try {
    const res = await fetch('config.json');
    const config = await res.json();
    
    if (config.images && config.images.banners) {
      const container = document.getElementById('carouselContainer');
      if (container) {
        container.innerHTML = '';
        config.images.banners.forEach(url => {
          const slide = document.createElement('div');
          slide.className = 'carousel-slide';
          slide.innerHTML = `<img src="${url}" alt="Banner">`;
          container.appendChild(slide);
        });
      }
    }
  } catch (e) {
    console.log("Config load error:", e);
  }
}

function updateSlidePosition() {
  const container = document.getElementById('carouselContainer');
  if (container) {
    container.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }
}

function nextSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  if(slides.length === 0) return;
  currentSlideIndex = (currentSlideIndex >= slides.length - 1) ? 0 : currentSlideIndex + 1;
  updateSlidePosition();
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  if(slides.length === 0) return;
  currentSlideIndex = (currentSlideIndex <= 0) ? slides.length - 1 : currentSlideIndex - 1;
  updateSlidePosition();
}

setInterval(nextSlide, 4000);
document.addEventListener('DOMContentLoaded', loadConfigBanners);
