// External JS file for Al Shajar Stationery Website
// Credit: (hank!nd3 p4d4y41!

const lightLogo = "https://raw.githubusercontent.com/chankintepadayali/AL-SHAJAR-STATIONERY/ac3587723b488cc77d720d4fe1b1347035380a24/logo/alshajar%20logo%20bg.png";
const darkLogo  = "https://raw.githubusercontent.com/chankintepadayali/AL-SHAJAR-STATIONERY/6afd446b101d3380127b3f822b7ca0d5fd23daa3/logo/black%20logo%20bg.png";

function changeLanguage() {
  var lang = document.getElementById("lang").value;

  if (lang === "ml") {
    // Nav
    document.getElementById("navHome").innerText = "ഹോം";
    document.getElementById("navStationery").innerText = "സ്റ്റേഷൻ";
    document.getElementById("navServices").innerText = "സേവനങ്ങൾ";
    document.getElementById("navAbout").innerText = "ഞങ്ങളെക്കുറിച്ച്";
    document.getElementById("navContact").innerText = "ബന്ധപ്പെടുക";
    
    // Banner
    document.getElementById("bannerTitle").innerText = "ബാക്ക് ടു സ്കൂൾ";
    document.getElementById("bannerDesc").innerText = "എല്ലാ സ്റ്റേഷനറി സാധനങ്ങളും സ്വന്തമാക്കൂ!";

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
    
    document.getElementById("price1").innerText = "ദിർഹം 15";
    document.getElementById("price2").innerText = "ദിർഹം 25";
    document.getElementById("price3").innerText = "ദിർഹം 10";

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

    // Banner
    document.getElementById("bannerTitle").innerText = "العودة إلى المدرسة";
    document.getElementById("bannerDesc").innerText = "احصل على جميع مستلزمات القرطاسية!";

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

    document.getElementById("price1").innerText = "15 درهم";
    document.getElementById("price2").innerText = "25 درهم";
    document.getElementById("price3").innerText = "10 درهم";

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

    document.getElementById("bannerTitle").innerText = "BACK TO SCHOOL";
    document.getElementById("bannerDesc").innerText = "GET ALL STATIONERY ITEMS!";

    document.getElementById("searchInput").placeholder = "Search products...";
    document.getElementById("catAll").innerText = "All Categories";
    document.getElementById("catNotebooks").innerText = "Notebooks";
    document.getElementById("catPens").innerText = "Pens & Writing";
    document.getElementById("catArt").innerText = "Art Supplies";

    document.getElementById("secTitle").innerText = "Our Categories";
    document.getElementById("prod1").innerText = "Premium Notebook";
    document.getElementById("prod2").innerText = "Office Pens Set";
    document.getElementById("prod3").innerText = "Art Supplies";

    document.getElementById("price1").innerText = "AED 15";
    document.getElementById("price2").innerText = "AED 25";
    document.getElementById("price3").innerText = "AED 10";

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
    logoImg.src = darkLogo;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    logoImg.src = lightLogo;
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
