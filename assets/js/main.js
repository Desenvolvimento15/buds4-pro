(globalThis.webpackChunk_mi_mi_com_product =
  globalThis.webpackChunk_mi_mi_com_product || []).push([
  [179],
  {
    2122: (e, t, i) => {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      i.d(t, { Z: () => r });
    },
    3552: (e, t, i) => {
      "use strict";
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function n(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }
      i.d(t, { Z: () => n });
    },
    9756: (e, t, i) => {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (i = o[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
        return n;
      }
      i.d(t, { Z: () => r });
    },
    1567: function (e, t, i) {
      "use strict";
      var r =
        (this && this.__read) ||
        function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmAlternateConfig =
          t.scmBuildSiteConfig =
          t.scmBuildGlobalConfig =
            void 0);
      var n = i(152);
      t.scmBuildGlobalConfig = function () {
        return {
          themeColor: "#fff",
          backgroundColor: "#fff",
          colorScheme: "light",
          icoFileUrl: "//s03.appmifile.com/favicon.ico",
          icoImageUrl:
            "//i01.appmifile.com/webfile/globalimg/mobile/logo/mi.png",
          polyfillUrl:
            "//cdn.polyfill.io/v3/polyfill.min.js?features=es2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2CIntersectionObserverEntry%2CIntersectionObserver",
          sentryUrl:
            "//i01.appmifile.com/webfile/globalweb/stat/js/sentry.min.js?v=5.19.0",
        };
      };
      var o = {
        bd: {
          alternateLinkPC: "//www.mi.com/bd",
          htmlTitle: "Mi Bangladesh",
          htmlDescription:
            "Welcome to Xiaomi Bangladesh official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/bd.",
        },
        br: {
          alternateLinkPC: "//www.mi.com/br",
          htmlTitle: "Mi Brasil",
          noScriptTitle: "O JavaScript não está disponível.",
          noScriptContent:
            "Detectamos que o JavaScript está desabilitado neste navegador. Mude para um navegador compatível para continuar usando o mi.com/br.",
        },
        cl: {
          alternateLinkPC: "//www.mi.com/cl",
          htmlTitle: "Mi Chile",
          noScriptTitle: "JavaScript no está disponible.",
          noScriptContent:
            "Detectamos que JavaScript está desactivado en este navegador. Activa JavaScript o cambia a un navegador compatible para seguir usando mi.com/cl.",
        },
        cn: {
          alternateLinkPC: "//www.mi.com",
          alternateLinkM: "//mobile.mi.com",
          htmlTitle: "小米商城",
          htmlImage:
            "https://i01.appmifile.com/webfile/globalimg/share/default.jpg",
          htmlKeywords: "xiaomi, redmi, 小米, 红米, 小米商城",
          htmlDescription:
            "小米官网直营小米公司旗下所有产品，包括 Xiaomi 手机系列、Redmi 红米系列、小米电视、笔记本、米家智能家居等，同时提供小米客户服务及售后支持。",
          noScriptTitle: "JavaScript 不可用",
          noScriptContent:
            "我们检测到浏览器禁用了 JavaScript。请启用 JavaScript 或改用支持的浏览器后继续访问 mi.com。",
        },
        cz: {
          alternateLinkPC: "//www.mi.com/cz",
          htmlTitle: "Mi Czech",
          noScriptTitle: "JavaScript není k dispozici.",
          noScriptContent:
            "Zjistili jsme, že JavaScript je v tomto prohlížeči zakázaný. Povolte ho prosím nebo přejděte na podporovaný prohlížeč, abyste mohli používat mi.com/cz i nadále.",
        },
        de: {
          fbAppId: "2393673747518462",
          alternateLinkPC: "//www.mi.com/de",
          alternateLinkM: "//mobile.mi.com/de",
          htmlTitle: "Xiaomi Deutschland",
          htmlDescription:
            "Willkommen auf der offiziellen Website von Xiaomi Deutschland, um Ihre Lieblingsprodukte zu kaufen. Hier können Sie die neuesten Xiaomi-Smartphones, Redmi-Smartphones, Mi Bands, Powerbanks und andere beliebte Produkte sowie verschiedene unregelmäßige Rabatte auf mi.com/de kaufen.",
          noScriptTitle: "JavaScript ist nicht verfügbar.",
          noScriptContent:
            "Wir haben festgestellt, dass JavaScript in diesem Browser deaktiviert ist. Aktiviere JavaScript bitte oder wechsle zu einem unterstützten Browser, um mi.com/de weiter zu nutzen.",
        },
        eg: {
          alternateLinkPC: "//www.mi.com/eg",
          htmlTitle: "Mi مصر",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/eg.",
        },
        es: {
          fbAppId: "218290528709991",
          alternateLinkPC: "//www.mi.com/es",
          alternateLinkM: "//mobile.mi.com/es",
          htmlTitle: "Xiaomi España",
          htmlDescription:
            "Bienvenido al sitio web oficial de Xiaomi España para comprar tus productos favoritos. Aquí puede comprar los últimos teléfonos inteligentes Xiaomi, teléfonos inteligentes Redmi, Mi Bands, Power Banks y otros productos populares, así como varios descuentos irregulares, todo en mi.com/es.",
          noScriptTitle: "JavaScript no está disponible.",
          noScriptContent:
            "Detectamos que JavaScript está desactivado en este navegador. Activa JavaScript o cambia a un navegador compatible para seguir usando mi.com/es.",
        },
        fr: {
          fbAppId: "396947937445883",
          alternateLinkPC: "//www.mi.com/fr",
          alternateLinkM: "//mobile.mi.com/fr",
          htmlTitle: "Xiaomi France",
          htmlDescription:
            "Bienvenue sur le site officiel de Xiaomi France pour acheter vos produits préférés. Ici, vous pouvez acheter les derniers smartphones Xiaomi, smartphones Redmi, Mi Bands, banques d'alimentation et autres produits populaires, ainsi que diverses remises irrégulières, le tout sur mi.com/fr.",
          noScriptTitle: "JavaScript n'est pas disponible.",
          noScriptContent:
            "Nous avons détecté que JavaScript est désactivé dans ce navigateur. Veuillez activer JavaScript ou utiliser un navigateur pris en charge pour continuer à vous servir de mi.com/fr.",
        },
        gcc: {
          alternateLinkPC: "//www.mi.com/gcc",
          htmlTitle: "Mi Gulf Cooperation Council",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/gcc.",
        },
        global: {
          alternateLinkPC: "//www.mi.com/global",
          htmlTitle: "Mi Global Home",
          htmlDescription:
            "Welcome to Xiaomi global official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/global.",
        },
        gr: {
          alternateLinkPC: "//www.mi.com/gr",
          htmlTitle: "Mi Greece",
          noScriptTitle: "Η JavaScript δεν είναι διαθέσιμη.",
          noScriptContent:
            "Εντοπίσαμε ότι η JavaScript είναι απενεργοποιημένη σε αυτό το πρόγραμμα περιήγησης. Ενεργοποιήστε τη JavaScript ή χρησιμοποιήστε ένα υποστηριζόμενο πρόγραμμα περιήγησης για να συνεχίσετε να χρησιμοποιείτε το mi.com/gr.",
        },
        hk: {
          fbDomainVerification: "4986wwjrddk3etwwmq78d6lnknpwqy",
          fbAppId: "376169942522368",
          alternateLinkPC: "//www.mi.com/hk",
          alternateLinkM: "//mobile.mi.com/hk",
          htmlTitle: "小米香港官網",
          htmlKeywords:
            "小米, 小米官網, 小米香港官網, 小米網, mi.com, mi, xiaomi, xiaomi.com, 小米手機, 紅米手機, 小米手環, 小米盒子, 小米行動電源, 小米之家, 紅米, 小米香港, 小米 香港, mi, hk, xiaomi hk, 小米商城, 小米wifi, mi小米手機官網香港, 小米手機官網, 小米之家香港, 香港小米之家, 香港小米",
          htmlDescription:
            "歡迎來到小米香港官方網站，我們為您提供小米手機、紅米手機、小米手環、行動電源、智能硬件、耳機音箱及各種配件，更有各項不定期的專屬優惠，全部都在 mi.com/hk 。",
          noScriptTitle: "JavaScript 無法使用",
          noScriptContent:
            "我們發現此瀏覽器中的 JavaScript 已停用。請啟用 JavaScript 或切換至受支援的瀏覽器，以繼續使用 mi.com/hk 。",
        },
        id: {
          fbAppId: "486432391491495",
          alternateLinkPC: "//www.mi.co.id/id",
          alternateLinkM: "//mobile.mi.co.id/id",
          htmlTitle: "Xiaomi Indonesia",
          htmlDescription:
            "Selamat datang di situs resmi Xiaomi Indonesia untuk membeli produk favorit Anda. Di sini Anda dapat membeli smartphone Xiaomi terbaru, smartphone Redmi, Mi Band, Power bank, dan produk populer lainnya, serta berbagai diskon tidak teratur, semuanya di mi.co.id/id.",
          noScriptTitle: "JavaScript tidak tersedia.",
          noScriptContent:
            "Kami mendeteksi bahwa JavaScript dinonaktifkan di browser ini. Silakan aktifkan JavaScript atau beralih ke browser yang didukung untuk terus menggunakan mi.co.id/id.",
        },
        in: {
          fbAppId: "1580688815485696",
          alternateLinkPC: "//www.mi.com/in",
          alternateLinkM: "//mobile.mi.com/in",
          htmlTitle: "Xiaomi India",
          htmlDescription:
            "Xiaomi India official store helps you to discover Mi and Redmi mobiles, accessories, ecosystem products and many more.",
        },
        it: {
          fbAppId: "156184545228345",
          alternateLinkPC: "//www.mi.com/it",
          alternateLinkM: "//mobile.mi.com/it",
          htmlTitle: "Xiaomi Italia",
          htmlKeywords:
            "xiaomi, mi, xiaomi italia, redmi, mi store, smartphone xiaomi, mi italia, mi.com",
          htmlDescription:
            "Benvenuto nel sito Web ufficiale di Xiaomi Italia per acquistare i tuoi prodotti preferiti. Qui puoi acquistare gli ultimi smartphone Xiaomi, smartphone Redmi, Mi Band, Power bank e altri prodotti popolari, oltre a vari sconti irregolari, tutti su mi.com/it.",
          noScriptTitle: "JavaScript non è disponibile.",
          noScriptContent:
            "JavaScript è disabilitato nel browser. Per continuare a utilizzare mi.com/it, abilita JavaScript o passa a un browser supportato.",
        },
        jp: {
          fbAppId: "695217920983189",
          alternateLinkPC: "//www.mi.com/jp",
          alternateLinkM: "//mobile.mi.com/jp",
          htmlTitle: "Xiaomi Japan",
          htmlDescription:
            "Xiaomi Japan (日本) 公式 ウェブサイトへようこそ。お気に入りの製品を購入できます。ここでは、最新のXiaomiスマートフォン、Redmiスマートフォン、Mi Bands、パワーバンク、その他の人気商品、およびさまざまな不定期割引をすべて mi.com/jp で購入できます。",
          noScriptTitle: "JavaScript を使用できません",
          noScriptContent:
            "このブラウザでは JavaScript が無効になっています。引き続き mi.com/jp を利用するため、JavaScript を有効にするか、サポートされているブラウザに切り替えてください。",
        },
        kr: {
          alternateLinkPC: "//www.mi.com/kr",
          htmlTitle: "Mi 코리아",
          noScriptTitle: "자바스크립트를 사용할 수 없습니다.",
          noScriptContent:
            "이 브라우저에서 자바스크립트를 사용할 수 없는 것으로 감지되었습니다. mi.com/kr을 계속 사용하려면 자바스크립트를 사용 설정하거나 지원되는 브라우저로 전환하세요.",
        },
        lk: { alternateLinkPC: "//www.mi.com/lk", htmlTitle: "Mi Sri Lanka" },
        ma: {
          alternateLinkPC: "//www.mi.com/ma",
          htmlTitle: "Mi The Kingdom of Morocco",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/ma.",
        },
        mx: {
          alternateLinkPC: "//www.mi.com/mx",
          htmlTitle: "Mi México",
          noScriptTitle: "JavaScript no está disponible.",
          noScriptContent:
            "Detectamos que JavaScript está desactivado en este navegador. Activa JavaScript o cambia a un navegador compatible para seguir usando mi.com/mx.",
        },
        my: {
          alternateLinkPC: "//www.mi.com/my",
          htmlTitle: "Mi Malaysia",
          htmlDescription:
            "Welcome to Xiaomi Malaysia website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/my.",
        },
        ng: { alternateLinkPC: "//www.mi.com/ng", htmlTitle: "Mi Nigeria" },
        nl: {
          fbAppId: "225240578340235",
          alternateLinkPC: "//www.mi.com/nl",
          alternateLinkM: "//mobile.mi.com/nl",
          htmlTitle: "Xiaomi Nederland",
          htmlDescription:
            "Welkom op de officiële website van Xiaomi Nederland om uw favoriete producten te kopen. Hier kunt u de nieuwste Xiaomi-smartphones, Redmi-smartphones, Mi Bands, Powerbanks en andere populaire producten kopen, evenals verschillende onregelmatige kortingen, allemaal op mi.com/nl.",
          noScriptTitle: "JavaScript is niet beschikbaar",
          noScriptContent:
            "We hebben gedetecteerd dat JavaScript in deze browser is uitgeschakeld. Schakel JavaScript in of stap over op een ondersteunde browser om mi.com/nl te blijven gebruiken.",
        },
        np: { alternateLinkPC: "//www.mi.com/np", htmlTitle: "Mi Nepal" },
        ph: {
          alternateLinkPC: "//www.mi.com/ph",
          alternateLinkM: "//mobile.mi.com/ph",
          htmlTitle: "Mi Philippines",
          htmlDescription:
            "Welcome to Xiaomi Philippines official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/ph.",
        },
        pk: { alternateLinkPC: "//www.mi.com/pk", htmlTitle: "Mi Pakistan" },
        pl: {
          fbAppId: "430298868931399",
          alternateLinkPC: "//www.mi.com/pl",
          alternateLinkM: "//mobile.mi.com/pl",
          htmlTitle: "Xiaomi Polska",
          htmlDescription:
            "Xiaomi to globana firma produkująca jakościowe produkty w rynkowych cenach.",
          noScriptTitle: "Obsługa JavaScript jest niedostępna.",
          noScriptContent:
            "Obsługa JavaScript jest wyłączona w tej przeglądarce. Aby dalej korzystać ze strony mi.com/pl, włącz obsługę JavaScript lub zainstaluj jedną z obsługiwanych przeglądarek.",
        },
        ru: {
          fbAppId: "218290528709991",
          alternateLinkPC: "//www.mi.com/ru",
          alternateLinkM: "//mobile.mi.com/ru",
          htmlTitle: "Xiaomi Россия",
          htmlDescription:
            "Добро пожаловать на официальный сайт Xiaomi Россия, чтобы купить ваши любимые продукты. Здесь вы можете купить новейшие смартфоны Xiaomi, смартфоны Redmi, браслеты Mi Band, внешние аккумуляторы и другие популярные товары, а также различные нерегулярные скидки на mi.com/ru.",
          noScriptTitle: "Функции JavaScript недоступны.",
          noScriptContent:
            "В вашем браузере отключены функции JavaScript. Включите их или начните использовать поддерживаемый браузер, чтобы продолжить пользоваться сайтом mi.com/ru.",
        },
        sa: {
          alternateLinkPC: "//www.mi.com/sa",
          htmlTitle: "Mi Saudi Arabia",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/sa.",
        },
        se: {
          alternateLinkPC: "//www.mi.com/se",
          htmlTitle: "Mi Sverige",
          noScriptTitle: "JavaScript är inte tillgängligt.",
          noScriptContent:
            "Vi har upptäckt att JavaScript är inaktiverat i denna webbläsare. Använd en webbläsare som stöds om du vill fortsätta använda mi.com/se.",
        },
        sg: {
          alternateLinkPC: "//www.mi.com/sg",
          htmlTitle: "Mi Singapore",
          htmlDescription:
            "Welcome to Xiaomi Singapore official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/sg.",
        },
        th: {
          alternateLinkPC: "//www.mi.com/th",
          htmlTitle: "Mi Thailand",
          noScriptTitle: "JavaScript ไม่พร้อมใช้งาน",
          noScriptContent:
            "เราตรวจพบว่าไม่มีการเปิดใช้งาน JavaScript ในเบราว์เซอร์นี้ โปรดเปิดใช้งาน JavaScript หรือเปลี่ยนไปใช้เบราว์เซอร์ที่รองรับเพื่อใช้งาน mi.com/th",
        },
        tr: {
          fbAppId: "380432752368993",
          alternateLinkPC: "//www.mi.com/tr",
          alternateLinkM: "//mobile.mi.com/tr",
          htmlTitle: "Xiaomi Türkiye",
          htmlDescription:
            "Favori ürünlerinizi satın almak için Xiaomi Türkiye resmi web sitesine hoş geldiniz. Burada en yeni Xiaomi akıllı telefonları, Redmi akıllı telefonları, Mi Bantları, Güç bankaları ve diğer popüler ürünlerin yanı sıra çeşitli düzensiz indirimleri mi.com/tr adresinden satın alabilirsiniz.",
          noScriptTitle: "JavaScript kullanılamıyor.",
          noScriptContent:
            "Bu tarayıcıda JavaScript'in engellenmiş olduğunu tespit ettik. JavaScript'e izin vererek veya desteklenen bir tarayıcıya geçiş yaparak mi.com/tr'u kullanmaya devam edebilirsin.",
        },
        tw: {
          fbDomainVerification: "qv0t21ahk3kxrk038hfzdgxkso0n9q",
          fbAppId: "1551832078380045",
          alternateLinkPC: "//www.mi.com/tw",
          alternateLinkM: "//mobile.mi.com/tw",
          htmlTitle: "小米台灣官網",
          htmlKeywords:
            "小米, 小米官網, 小米台灣官網, 小米網, mi.com, mi, xiaomi, xiaomi.com, 小米手機, 紅米手機, 小米手環, 小米盒子, 小米行動電源, 小米之家, www.mi.com/tw, 紅米, 小米台灣, 小米 台灣, xiaomi taiwan, 小米商城, 小米wifi",
          htmlDescription:
            "快上小米台灣官網選購您喜歡的商品，打造智慧有型的新生活。您可以在這裡買到最新的手機、小米手環、小米盒子、行動電源等熱門產品，更有各項不定期的好康優惠，全部都在 mi.com/tw 。",
          noScriptTitle: "JavaScript 無法使用",
          noScriptContent:
            "我們發現此瀏覽器中的 JavaScript 已停用。請啟用 JavaScript 或切換至受支援的瀏覽器，以繼續使用 mi.com/tw 。",
        },
        ua: {
          alternateLinkPC: "//www.mi.com/ua",
          htmlTitle: "Mi Ukraine",
          noScriptTitle: "JavaScript недоступно.",
          noScriptContent:
            "Ми виявили, що в цьому браузері вимкнуто JavaScript. Щоб продовжити користуватися mi.com/ua, увімкніть JavaScript або перейдіть у браузер, який підтримується.",
        },
        uk: {
          fbAppId: "677239446009650",
          alternateLinkPC: "//www.mi.com/uk",
          alternateLinkM: "//mobile.mi.com/uk",
          htmlTitle: "Xiaomi UK",
          htmlDescription:
            "Welcome to Xiaomi UK official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/uk.",
        },
        us: {
          alternateLinkPC: "//www.mi.com/us",
          htmlTitle: "Mi United States",
        },
        vn: {
          alternateLinkPC: "//www.mi.com/vn",
          htmlTitle: "Mi Việt Nam",
          noScriptTitle: "JavaScript không có sẵn.",
          noScriptContent:
            "Chúng tôi phát hiện JavaScript đã bị tắt ở trình duyệt này. Vui lòng chuyển sang trình duyệt được hỗ trợ để tiếp tục sử dụng mi.com/vn.",
        },
        za: {
          alternateLinkPC: "//www.mi.com/za",
          htmlTitle: "Mi South Africa",
        },
      };
      function a(e) {
        var t = {
          nld: "i05.appmifile.com",
          rus: "i04.appmifile.com",
          ind: "i03.appmifile.com",
          sgp: "i02.appmifile.com",
          chn: "i01.appmifile.com",
        };
        return t[(0, n.scmSiteDeployArea)(e)] || t.sgp;
      }
      (t.scmBuildSiteConfig = function (e) {
        var t = {
          fbDomainVerification: "",
          fbAppId: "",
          alternateLinkPC: "",
          alternateLinkM: "",
          htmlTitle: "Xiaomi",
          htmlImage: "https://" + a(e) + "/i18n/share/default.jpg",
          htmlKeywords: "xiaomi, mi, redmi",
          htmlDescription:
            "Xiaomi, a global company producing quality products at honest pricing.",
          noScriptTitle: "JavaScript is not available.",
          noScriptContent:
            "We’ve detected that JavaScript is disabled in this browser. Please enable JavaScript or switch to a supported browser to continue using mi.com/" +
            e +
            ".",
        };
        return Object.assign(t, o[e] || {});
      }),
        (t.scmAlternateConfig = function (e) {
          return Object.keys(o)
            .map(function (t) {
              return "mobile" === e
                ? [t, o[t].alternateLinkM || ""]
                : [t, o[t].alternateLinkPC || ""];
            })
            .filter(function (e) {
              var t = r(e, 2);
              t[0];
              return !!t[1];
            })
            .map(function (e) {
              var t = r(e, 2),
                i = t[0],
                o = t[1];
              return ["" + (0, n.scmSiteConfig)(i).lang, "" + o];
            });
        });
    },
    2205: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmCurrencyConfig = void 0);
      var i = {
        ae: {
          currencyCode: "AED",
          currencySymbol: "درهم",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        au: {
          currencyCode: "AUD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        bd: {
          currencyCode: "BDT",
          currencySymbol: "৳ ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        be: {
          currencyCode: "EUR",
          currencySymbol: "€",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        br: {
          currencyCode: "BRL",
          currencySymbol: "R$ ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        ca: {
          currencyCode: "CAD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        cl: {
          currencyCode: "CLP",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        cn: {
          currencyCode: "CNY",
          currencySymbol: "￥",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        co: {
          currencyCode: "COP",
          currencySymbol: "$ ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        cz: {
          currencyCode: "CZK",
          currencySymbol: " Kč",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        de: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        dk: {
          currencyCode: "DKK",
          currencySymbol: " kr.",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        eg: {
          currencyCode: "EGP",
          currencySymbol: "جنيه",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        es: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        fr: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        gcc: {
          currencyCode: "AED",
          currencySymbol: "AED",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        global: {
          currencyCode: "USD",
          currencySymbol: "US$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        gr: {
          currencyCode: "GRD",
          currencySymbol: "₯",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        hk: {
          currencyCode: "HKD",
          currencySymbol: "HK$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        hu: {
          currencyCode: "HUF",
          currencySymbol: " Ft",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        id: {
          currencyCode: "IDR",
          currencySymbol: "Rp ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        ie: {
          currencyCode: "EUR",
          currencySymbol: "€",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        il: {
          currencyCode: "ILS",
          currencySymbol: " ₪",
          currencyPosition: "post",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        ir: {
          currencyCode: "IRR",
          currencySymbol: " ریال",
          currencyPosition: "post",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        in: {
          currencyCode: "INR",
          currencySymbol: "₹",
          currencyPosition: "pre",
          currencyFunction: "spaceHundredsCommaThousCommaDec",
          currencyExpect: "integer",
        },
        it: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        jp: {
          currencyCode: "JPY",
          currencySymbol: "円",
          currencySuffix: "(税込)",
          currencyPosition: "post",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        kr: {
          currencyCode: "KRW",
          currencySymbol: "₩",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        la: {
          currencyCode: "LAK",
          currencySymbol: "₭",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        lk: {
          currencyCode: "LKR",
          currencySymbol: "රු ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        lu: {
          currencyCode: "EUR",
          currencySymbol: "€",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        lv: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        ma: {
          currencyCode: "MAD",
          currencySymbol: "DH",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        mm: {
          currencyCode: "MMK",
          currencySymbol: "K",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        mo: {
          currencyCode: "MOP",
          currencySymbol: "MOP$",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        mx: {
          currencyCode: "MXN",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        my: {
          currencyCode: "MYR",
          currencySymbol: "RM ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        ng: {
          currencyCode: "NGN",
          currencySymbol: "₦",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        nl: {
          currencyCode: "EUR",
          currencySymbol: "€ ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        np: {
          currencyCode: "NPR",
          currencySymbol: "रू ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        nz: {
          currencyCode: "NZD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        ph: {
          currencyCode: "PHP",
          currencySymbol: "₱",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        pk: {
          currencyCode: "PKR",
          currencySymbol: "Rs ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        pl: {
          currencyCode: "PLN",
          currencySymbol: " zł",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        pt: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        ro: {
          currencyCode: "RON",
          currencySymbol: " L",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        ru: {
          currencyCode: "RUB",
          currencySymbol: " ₽",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "integer",
          originalFollowFrom: !0,
        },
        sa: {
          currencyCode: "SAR",
          currencySymbol: "ريال",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        se: {
          currencyCode: "SEK",
          currencySymbol: " kr",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        sg: {
          currencyCode: "SGD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        th: {
          currencyCode: "THB",
          currencySymbol: "฿",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        tr: {
          currencyCode: "TRY",
          currencySymbol: " TL",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        tw: {
          currencyCode: "TWD",
          currencySymbol: "NT$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        ua: {
          currencyCode: "UAH",
          currencySymbol: " грн.",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        uk: {
          currencyCode: "GBP",
          currencySymbol: "£",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        us: {
          currencyCode: "USD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        vn: {
          currencyCode: "VND",
          currencySymbol: " ₫",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        za: {
          currencyCode: "ZAR",
          currencySymbol: "R",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
      };
      t.scmCurrencyConfig = function (e) {
        return Object.assign(
          {
            currencyCode: "USD",
            currencySymbol: "US$",
            currencyPosition: "pre",
            currencyPrefix: "",
            currencySuffix: "",
            currencyFunction: "commaThousDotDec",
            currencyExpect: "decimal",
            currencyPrecision: 2,
            currencyBlindPrice: "???",
            originalFollowFrom: !1,
            originalRrpLabel: !1,
          },
          i[e] || {}
        );
      };
    },
    2345: (e, t, i) => {
      "use strict";
      i.d(t, { S: () => n });
      var r = {
        ae: {
          currencyCode: "AED",
          currencySymbol: "درهم",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        au: {
          currencyCode: "AUD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        bd: {
          currencyCode: "BDT",
          currencySymbol: "৳ ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        be: {
          currencyCode: "EUR",
          currencySymbol: "€",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        br: {
          currencyCode: "BRL",
          currencySymbol: "R$ ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        ca: {
          currencyCode: "CAD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        cl: {
          currencyCode: "CLP",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        cn: {
          currencyCode: "CNY",
          currencySymbol: "￥",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        co: {
          currencyCode: "COP",
          currencySymbol: "$ ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        cz: {
          currencyCode: "CZK",
          currencySymbol: " Kč",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        de: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        dk: {
          currencyCode: "DKK",
          currencySymbol: " kr.",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        eg: {
          currencyCode: "EGP",
          currencySymbol: "جنيه",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        es: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        fr: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        gcc: {
          currencyCode: "AED",
          currencySymbol: "AED",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        global: {
          currencyCode: "USD",
          currencySymbol: "US$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        gr: {
          currencyCode: "GRD",
          currencySymbol: "₯",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        hk: {
          currencyCode: "HKD",
          currencySymbol: "HK$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        hu: {
          currencyCode: "HUF",
          currencySymbol: " Ft",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        id: {
          currencyCode: "IDR",
          currencySymbol: "Rp ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        ie: {
          currencyCode: "EUR",
          currencySymbol: "€",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        il: {
          currencyCode: "ILS",
          currencySymbol: " ₪",
          currencyPosition: "post",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        ir: {
          currencyCode: "IRR",
          currencySymbol: " ریال",
          currencyPosition: "post",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        in: {
          currencyCode: "INR",
          currencySymbol: "₹",
          currencyPosition: "pre",
          currencyFunction: "spaceHundredsCommaThousCommaDec",
          currencyExpect: "integer",
        },
        it: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        jp: {
          currencyCode: "JPY",
          currencySymbol: "円",
          currencySuffix: "(税込)",
          currencyPosition: "post",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        kr: {
          currencyCode: "KRW",
          currencySymbol: "₩",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        la: {
          currencyCode: "LAK",
          currencySymbol: "₭",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        lk: {
          currencyCode: "LKR",
          currencySymbol: "රු ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        lu: {
          currencyCode: "EUR",
          currencySymbol: "€",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        lv: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        ma: {
          currencyCode: "MAD",
          currencySymbol: "DH",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        mm: {
          currencyCode: "MMK",
          currencySymbol: "K",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        mo: {
          currencyCode: "MOP",
          currencySymbol: "MOP$",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        mx: {
          currencyCode: "MXN",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        my: {
          currencyCode: "MYR",
          currencySymbol: "RM ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        ng: {
          currencyCode: "NGN",
          currencySymbol: "₦",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        nl: {
          currencyCode: "EUR",
          currencySymbol: "€ ",
          currencyPosition: "pre",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        np: {
          currencyCode: "NPR",
          currencySymbol: "रू ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        nz: {
          currencyCode: "NZD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        ph: {
          currencyCode: "PHP",
          currencySymbol: "₱",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        pk: {
          currencyCode: "PKR",
          currencySymbol: "Rs ",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        pl: {
          currencyCode: "PLN",
          currencySymbol: " zł",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        pt: {
          currencyCode: "EUR",
          currencySymbol: " €",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
          originalRrpLabel: !0,
        },
        ro: {
          currencyCode: "RON",
          currencySymbol: " L",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "decimal",
        },
        ru: {
          currencyCode: "RUB",
          currencySymbol: " ₽",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "integer",
          originalFollowFrom: !0,
        },
        sa: {
          currencyCode: "SAR",
          currencySymbol: "ريال",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        se: {
          currencyCode: "SEK",
          currencySymbol: " kr",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        sg: {
          currencyCode: "SGD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        th: {
          currencyCode: "THB",
          currencySymbol: "฿",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        tr: {
          currencyCode: "TRY",
          currencySymbol: " TL",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
        },
        tw: {
          currencyCode: "TWD",
          currencySymbol: "NT$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "integer",
        },
        ua: {
          currencyCode: "UAH",
          currencySymbol: " грн.",
          currencyPosition: "post",
          currencyFunction: "spaceThousCommaDec",
          currencyExpect: "decimal",
        },
        uk: {
          currencyCode: "GBP",
          currencySymbol: "£",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        us: {
          currencyCode: "USD",
          currencySymbol: "$",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
        vn: {
          currencyCode: "VND",
          currencySymbol: " ₫",
          currencyPosition: "post",
          currencyFunction: "dotThousCommaDec",
          currencyExpect: "integer",
          currencyPrecision: 0,
        },
        za: {
          currencyCode: "ZAR",
          currencySymbol: "R",
          currencyPosition: "pre",
          currencyFunction: "commaThousDotDec",
          currencyExpect: "decimal",
        },
      };
      function n(e) {
        return Object.assign(
          {
            currencyCode: "USD",
            currencySymbol: "US$",
            currencyPosition: "pre",
            currencyPrefix: "",
            currencySuffix: "",
            currencyFunction: "commaThousDotDec",
            currencyExpect: "decimal",
            currencyPrecision: 2,
            currencyBlindPrice: "???",
            originalFollowFrom: !1,
            originalRrpLabel: !1,
          },
          r[e] || {}
        );
      }
    },
    6772: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          scmAlternateConfig: () => U,
          scmBuildGlobalConfig: () => I,
          scmBuildSiteConfig: () => B,
          scmBusinessSiteList: () => r.zM,
          scmConfig: () => n,
          scmCurrencyConfig: () => s.S,
          scmCustomerSiteList: () => r.dG,
          scmGoogleConfig: () => b,
          scmLanguageConfig: () => A,
          scmLanguageIsRtl: () => O,
          scmLanguageList: () => Y,
          scmLiveChatConfig: () => a,
          scmSiteConfig: () => r.Nj,
          scmSiteDeployArea: () => r.af,
          scmSiteLangList: () => r.Yc,
          scmSiteLanguageList: () => P,
          scmSiteList: () => r.Rz,
          scmStatConfig: () => F,
          scmUsefulLocale: () => L,
        });
      var r = i(1455);
      function n(e) {
        var t = {
          wwwSiteV3: {
            idn: { pc: "//www.mi.co.id/" + e, m: "//mobile.mi.co.id/" + e },
            sgp: { pc: "//www.mi.com/" + e, m: "//mobile.mi.com/" + e },
          },
          wwwSite: {
            idn: { pc: "//v12.mi.co.id/" + e, m: "//v12.mi.co.id/" + e },
            sgp: { pc: "//www.mi.com/" + e, m: "//www.mi.com/" + e },
          },
          buySite: {
            ind: { pc: "//store.mi.com/" + e, m: "//m.store.mi.com/" + e },
            idn: { pc: "//buy.mi.co.id/" + e, m: "//m.buy.mi.co.id/" + e },
            rus: { pc: "//ru.buy.mi.com/" + e, m: "//ru.mbuy.mi.com/" + e },
            nld: { pc: "//ams.buy.mi.com/" + e, m: "//ams-m.buy.mi.com/" + e },
            sgp: { pc: "//buy.mi.com/" + e, m: "//m.buy.mi.com/" + e },
          },
          apiSite: {
            ind: "//in-api.buy.mi.com/" + e,
            rus: "//ru-api.buy.mi.com/" + e,
            idn: "//api.buy.mi.co.id/" + e,
            nld: "//ams-api.buy.mi.com/" + e,
            sgp: "//sgp-api.buy.mi.com/" + e,
          },
          opxApiSite: {
            ind: "//in-api.buy.mi.com/i18n_op/opx/" + e,
            rus: "//ru-api.buy.mi.com/i18n_op/opx/" + e,
            nld: "//ams-api.buy.mi.com/i18n_op/opx/" + e,
            sgp: "//sgp-api.buy.mi.com/i18n_op/opx/" + e,
          },
          apiIntraSite: {
            ind: "//in.api.b2c.srv",
            rus: "//ru.api.b2c.srv",
            nld: "//ams.api.b2c.srv",
            sgp: "//sgp.api.b2c.srv",
          },
          goSite: {
            ind: "//in-go.buy.mi.com/" + e,
            rus: "//ru-go.buy.mi.com/" + e,
            idn: "//go.buy.mi.co.id/" + e,
            nld: "//ams-go.buy.mi.com/" + e,
            sgp: "//go.buy.mi.com/" + e,
          },
          goD2sSite: {
            ind: "//in-d2s.buy.mi.com/" + e,
            rus: "//ru-d2s.buy.mi.com/" + e,
            nld: "//ams-d2s.buy.mi.com/" + e,
            sgp: "//d2s.buy.mi.com/" + e,
          },
          bigTapSite: {
            ind: "//in-tp.mi.com",
            idn: "//tp.mi.co.id",
            nld: "//ams-tp.mi.com",
            sgp: "//sgp01.tp.hd.mi.com",
          },
          hdSite: {
            ind: "//in-hd.c.mi.com/" + e,
            rus: "//ru-hd.c.mi.com/" + e,
            idn: "//hd.mi.co.id/" + e,
            nld: "//ams-hd.c.mi.com/" + e,
            sgp: "//hd.c.mi.com/" + e,
          },
          salesMiddleSite: { ind: "", sgp: "//sg-api.salesmiddle.b2c.srv" },
          uploadSite: {
            ind: "//in-upload.store.mi.com",
            rus: "//ru-upload.global.mi.com",
            idn: "//upload-global.mi.co.id",
            nld: "//ams-upload.global.mi.com",
            sgp: "//upload.global.mi.com",
          },
          kachiShopSite: { sgp: "//m.kachishop.com/" + e },
          eventBaseUrl: {
            ind: "//in.event.mi.com/in",
            rus: "//ru.event.mi.com/ru",
            idn: "//event.mi.co.id/id",
            sgp: "//event.mi.com/" + e,
          },
          seckillBaseUrl: {
            ind: "//in-fs.buy.mi.com/in",
            rus: "//ru-fs.buy.mi.com/ru",
            idn: "//fs.buy.mi.co.id/id",
            sgp: "//fs.buy.mi.com/" + e,
          },
        };
        return {
          wwwSiteV3: o(t.wwwSiteV3, e),
          wwwSite: o(t.wwwSite, e),
          buySite: o(t.buySite, e),
          apiSite: o(t.apiSite, e),
          opxApiSite: o(t.opxApiSite, e),
          apiIntraSite: o(t.apiIntraSite, e),
          goSite: o(t.goSite, e),
          goD2sSite: o(t.goD2sSite, e),
          bigTapSite: o(t.bigTapSite, e),
          hdSite: o(t.hdSite, e),
          salesMiddleSite: o(t.salesMiddleSite, e),
          uploadSite: o(t.uploadSite, e),
          kachiShopSite: o(t.kachiShopSite, e),
          eventBaseUrl: o(t.eventBaseUrl, e),
          seckillBaseUrl: o(t.seckillBaseUrl, e),
        };
      }
      function o(e, t) {
        var i;
        return null !== (i = e[(0, r.af)(t)]) && void 0 !== i ? i : e.sgp;
      }
      function a(e) {
        var t = {
            de: "cc2a190d-824c-4a3e-9688-057769101233",
            eg: "cc2a190d-824c-4a3e-9688-057769101233",
            es: "cc2a190d-824c-4a3e-9688-057769101233",
            fr: "cc2a190d-824c-4a3e-9688-057769101233",
            it: "cc2a190d-824c-4a3e-9688-057769101233",
            nl: "cc2a190d-824c-4a3e-9688-057769101233",
            pl: "cc2a190d-824c-4a3e-9688-057769101233",
            uk: "cc2a190d-824c-4a3e-9688-057769101233",
            tr: "cc2a190d-824c-4a3e-9688-057769101233",
            default: "d76ce7ee-a2ca-4e94-b0c8-b9af8529d793",
          },
          i = {
            de: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            eg: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            es: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            fr: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            it: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            nl: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            pl: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            uk: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            tr: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
            default:
              "https://unqd76ce7eea2ca4e94b0c8b9af8529d-crm5.omnichannelengagementhub.com",
          },
          r = {
            de: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            eg: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            es: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fr: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            it: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            nl: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            pl: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            uk: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            tr: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            default:
              "https://oc-cdn-public-apj.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
          };
        return {
          appId: c(
            {
              cl: "da1e10bd-3aa7-497a-9e75-74bc9f88d6c3",
              de: "33673207-ee4b-4d30-87c4-1af056f85f53",
              eg: "17d2184d-3402-4bc9-8a6e-a188f8f122c6",
              es: "08f0cad1-718d-4c34-b952-4fcfd08efac0",
              fr: "002d8974-4afd-40fe-b7a9-ab73c2ed353d",
              hk: "257800a1-aeca-462b-af4e-6c9bcd477626",
              id: "70804e77-13e1-420b-a642-c0a409689031",
              it: "c5fd6503-ad86-41ee-a462-6ea54315d87b",
              jp: "c0aae042-172c-4708-b350-5dc5f1a90cf9",
              mx: "c714a7ec-9bb7-43cb-a624-1fac3e734d20",
              my: "1c63f5ee-68d5-422d-a72a-2650d0ca88c1",
              nl: "14fb68c6-b41f-4339-a033-ad2c99d17cf5",
              pl: "e1c93004-229c-4ca6-a15b-432d17949668",
              ph: "c95fc61b-0426-4be1-a934-d6d363e9dbea",
              uk: "9c9dc144-01bc-4bb8-985e-bb2717880659",
              us: "7bac91e5-6a2d-43a5-a062-f3f267463b75",
              sg: "497ee690-6be0-4fa0-ae14-5be0ec7090be",
              tw: "ea01d257-74fe-43d3-aac4-8cd8b4e07258",
              th: "01a2f568-ab79-40bf-b3bb-820a5bd3f7aa",
              tr: "a86fe57a-5f9d-4ddf-a30c-d89356b9dd76",
              vn: "115db083-9fa6-48b3-9a15-c6ac4956eda8",
              default: "",
            },
            e
          ),
          orgId: c(t, e),
          orgUrl: c(i, e),
          scriptSrc: c(r, e),
        };
      }
      function c(e, t) {
        var i;
        return null !== (i = e[t]) && void 0 !== i ? i : e.default;
      }
      var s = i(2345),
        l = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        u = {
          in: ["UA-51415204-3", "UA-51415204-15", "UA-51415204-15"],
          id: ["UA-51415204-10", "", ""],
          ru: ["UA-51415204-29", "UA-109515030-6", "UA-109515030-6"],
          hk: ["UA-51415204-5", "UA-51415204-45", "UA-51415204-45"],
          tw: ["UA-51415204-4", "UA-51415204-19", "UA-51415204-19"],
          default: ["", "", ""],
        };
      function d(e) {
        var t = l(u[e] || u.default, 3);
        return { web: t[0], app: t[1], ios: t[2] };
      }
      var m = {
        hk: "GTM-NL4G49C",
        tw: "GTM-P23SD68",
        in: "GTM-PHF5K9",
        default: "GTM-N7BDPG6",
      };
      function p(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : m.default;
      }
      var f = { default: "6Le2lq4ZAAAAAICguqzsVnvy9ZTCNYzl3fZyJJ9Q" };
      function h(e) {
        return f[e] || f.default;
      }
      var y = {
        de: "G-JZS80SHDYY",
        es: "G-W09SQPPCRY",
        fr: "G-C8K2YQ2YSQ",
        id: "G-188XHR66L9",
        it: "G-LZ447Q99RL",
        jp: "G-3R908EE3W5",
        nl: "G-DLYDLES0MS",
        pl: "G-D7F26WKJKY",
        ru: "G-PX4M1TDQTY",
        tr: "G-DD38QMRSRB",
        uk: "G-21NFY24QP4",
        default: "",
      };
      function g(e) {
        return y[e] || y.default;
      }
      function b(e) {
        return { ga: d(e), gtm: p(e), captcha: h(e), ga4: g(e) };
      }
      var v = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        w = {
          in: [108, 124, 124],
          id: [109, 128, 128],
          de: [710, 592, 592],
          nl: [579, 591, 591],
          es: [138, 605, 605],
          fr: [571, 573, 573],
          it: [524, 589, 589],
          uk: [577, 590, 590],
          ru: [132, 587, 587],
          hk: [103, 604, 604],
          tw: [104, 127, 127],
          default: [0, 0, 0],
        },
        D = { default: { APP_ID: "2882303761517399893", PRO_ID: "16" } },
        M = {
          es: "high",
          fr: "high",
          it: "high",
          uk: "high",
          de: "high",
          pl: "high",
          se: "high",
          global: "high",
          tr: "high",
          nl: "high",
          gr: "high",
          default: "low",
        };
      function S(e) {
        var t = v(w[e] || w.default, 3);
        return { web: t[0], app: t[1], ios: t[2] };
      }
      function x(e) {
        return D[e] || D.default;
      }
      function _(e) {
        return M[e] || M.default;
      }
      function T(e) {
        return "high" !== M[e] ? "0,1,2,3:" : "0:";
      }
      function N(e) {
        return "id" === e ? ".mi.co.id" : ".mi.com";
      }
      function F(e) {
        return {
          domainId: S(e),
          oneTrack: x(e),
          cookieDomain: N(e),
          cookieDefaultOnCat: T(e),
          cookiePolicyLevel: _(e),
        };
      }
      var k = function () {
          return (k =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        C = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        E = {
          "af-ZA": {
            name: "Afrikaans (South Africa)",
            title: "Afrikaans",
            isRtl: !1,
          },
          "am-ET": { name: "Amharic", title: "አማርኛ", isRtl: !1 },
          "ar-001": {
            name: "Arabic (World)",
            title: "(العالم) العربية",
            isRtl: !0,
          },
          "ar-EG": {
            name: "Arabic (Egypt)",
            title: "العربية (مصر)",
            isRtl: !0,
          },
          "ar-MA": {
            name: "Arabic (Morocco)",
            title: "العربية (المغرب)",
            isRtl: !0,
          },
          "ar-SA": {
            name: "Arabic (Saudi Arabia)",
            title: "العربية (المملكة العربية السعودية)",
            isRtl: !0,
          },
          "be-BY": { name: "Belarusian", title: "Беларуская", isRtl: !1 },
          "bg-BG": { name: "Bulgarian", title: "Български", isRtl: !1 },
          "bn-BD": { name: "Bangla (Bangladesh)", title: "বাংলা", isRtl: !1 },
          "ca-ES": { name: "Catalan (Spain)", title: "Català", isRtl: !1 },
          "cs-CZ": { name: "Czech", title: "Čeština", isRtl: !1 },
          "da-DK": { name: "Danish (Denmark)", title: "Dansk", isRtl: !1 },
          "de-DE": { name: "German (Germany)", title: "Deutsch", isRtl: !1 },
          "dz-BT": { name: "Dzongkha", title: "རྫོང་ཁ་", isRtl: !1 },
          "el-GR": { name: "Greek (Greece)", title: "Ελληνικά", isRtl: !1 },
          "en-001": {
            name: "English (World)",
            title: "English (World)",
            isRtl: !1,
          },
          "en-BD": {
            name: "English (Bangladesh)",
            title: "English (Bangladesh)",
            isRtl: !1,
          },
          "en-GB": {
            name: "English (United Kingdom)",
            title: "English (United Kingdom)",
            isRtl: !1,
          },
          "en-IN": {
            name: "English (India)",
            title: "English (India)",
            isRtl: !1,
          },
          "en-LK": {
            name: "English (Sri Lanka)",
            title: "English (Sri Lanka)",
            isRtl: !1,
          },
          "en-MY": {
            name: "English (Malaysia)",
            title: "English (Malaysia)",
            isRtl: !1,
          },
          "en-NG": {
            name: "English (Nigeria)",
            title: "English (Nigeria)",
            isRtl: !1,
          },
          "en-NP": {
            name: "English (Nepal)",
            title: "English (Nepal)",
            isRtl: !1,
          },
          "en-PH": {
            name: "English (Philippines)",
            title: "English (Philippines)",
            isRtl: !1,
          },
          "en-PK": {
            name: "English (Pakistan)",
            title: "English (Pakistan)",
            isRtl: !1,
          },
          "en-SG": {
            name: "English (Singapore)",
            title: "English (Singapore)",
            isRtl: !1,
          },
          "en-US": {
            name: "English (United States)",
            title: "English (United States)",
            isRtl: !1,
          },
          "en-ZA": {
            name: "English (South Africa)",
            title: "English (South Africa)",
            isRtl: !1,
          },
          "es-419": {
            name: "Spanish (Latin America)",
            title: "Español (Latinoamérica)",
            isRtl: !1,
          },
          "es-CL": {
            name: "Spanish (Chile)",
            title: "Español (Chile)",
            isRtl: !1,
          },
          "es-ES": {
            name: "Spanish (Spain)",
            title: "Español (España)",
            isRtl: !1,
          },
          "es-MX": {
            name: "Spanish (Mexico)",
            title: "Español (México)",
            isRtl: !1,
          },
          "et-EE": { name: "Estonian", title: "Eesti", isRtl: !1 },
          "fa-IR": { name: "Persian (Iran)", title: "فارسی", isRtl: !0 },
          "fr-FR": {
            name: "French (France)",
            title: "Français (France)",
            isRtl: !1,
          },
          "fr-CA": {
            name: "French (Canada)",
            title: "Français (Canada)",
            isRtl: !1,
          },
          "fi-FI": { name: "Finnish", title: "Suomi", isRtl: !1 },
          "fil-PH": { name: "Filipino", title: "Filipino", isRtl: !1 },
          "ga-IE": { name: "Irish", title: "Gaeilge", isRtl: !1 },
          "ha-NG": { name: "Hausa (Nigeria)", title: "Hausa", isRtl: !0 },
          "he-IL": { name: "Hebrew", title: "עברית", isRtl: !0 },
          "hi-IN": { name: "Hindi", title: "हिन्दी", isRtl: !1 },
          "hu-HU": { name: "Hungarian", title: "Magyar", isRtl: !1 },
          "hy-AM": { name: "Armenian", title: "Հայերեն", isRtl: !1 },
          "id-ID": { name: "Indonesian", title: "Bahasa Indonesia", isRtl: !1 },
          "is-IS": { name: "Icelandic", title: "Íslenska", isRtl: !1 },
          "it-IT": { name: "Italian (Italy)", title: "Italiano", isRtl: !1 },
          "ja-JP": { name: "Japanese", title: "日本語", isRtl: !1 },
          "ka-GE": { name: "Georgian", title: "ქართული", isRtl: !1 },
          "km-KH": { name: "Khmer", title: "ភាសាខ្មែរ", isRtl: !1 },
          "kn-IN": { name: "Kannada", title: "ಕನ್ನಡ", isRtl: !1 },
          "ko-KR": { name: "Korean (South Korea)", title: "한국어", isRtl: !1 },
          "ky-KG": { name: "Kyrgyz", title: "кыргызча", isRtl: !1 },
          "lb-LU": {
            name: "Luxembourgish",
            title: "Lëtzebuergesch",
            isRtl: !1,
          },
          "lo-LA": { name: "Lao", title: "ພາສາລາວ", isRtl: !1 },
          "lt-LT": { name: "Lithuanian", title: "Lietuvių", isRtl: !1 },
          "lv-LV": { name: "Latvian", title: "Latviešu", isRtl: !1 },
          "ml-IN": { name: "Malayalam", title: "മലയാളം", isRtl: !1 },
          "mn-MN": { name: "Mongolian", title: "Монгол", isRtl: !1 },
          "ms-MY": {
            name: "Malay (Malaysia)",
            title: "Bahasa Melayu",
            isRtl: !1,
          },
          "mt-MT": { name: "Maltese", title: "Malti", isRtl: !1 },
          "my-MM": { name: "Burmese", title: "မြန်မာဘာသာ", isRtl: !1 },
          "nb-NO": {
            name: "Norwegian Bokmål (Norway)",
            title: "Norsk (bokmål)",
            isRtl: !1,
          },
          "ne-NP": { name: "Nepali (Nepal)", title: "नेपाली", isRtl: !1 },
          "nl-BE": {
            name: "Dutch (Belgium)",
            title: "Nederlands (België)",
            isRtl: !1,
          },
          "nl-NL": {
            name: "Dutch (Netherlands)",
            title: "Nederlands (Nederland)",
            isRtl: !1,
          },
          "nn-NO": {
            name: "Norwegian Nynorsk",
            title: "Norsk (nynorsk)",
            isRtl: !1,
          },
          "pl-PL": { name: "Polish", title: "Polski", isRtl: !1 },
          "pt-BR": {
            name: "Portuguese (Brazil)",
            title: "Português (Brasil)",
            isRtl: !1,
          },
          "pt-PT": {
            name: "Portuguese (Portugal)",
            title: "Português (Portugal)",
            isRtl: !1,
          },
          "ro-RO": { name: "Romanian (Romania)", title: "Română", isRtl: !1 },
          "ru-RU": { name: "Russian (Russia)", title: "Русский", isRtl: !1 },
          "rw-RW": { name: "Kinyarwanda", title: "Ikinyarwanda", isRtl: !1 },
          "si-LK": { name: "Sinhala", title: "සිංහල", isRtl: !1 },
          "sk-SK": { name: "Slovak", title: "Slovenčina", isRtl: !1 },
          "sl-SI": { name: "Slovenian", title: "Slovenščina", isRtl: !1 },
          "sq-AL": { name: "Albanian (Albania)", title: "Shqip", isRtl: !1 },
          "sr-RS": {
            name: "Serbian (Cyrillic, Serbia)",
            title: "Српски",
            isRtl: !1,
          },
          "sr-BA": {
            name: "Serbian (Latin, Bosnia & Herzegovina)",
            title: "Srpski (latinica)",
            isRtl: !1,
          },
          "sv-SE": { name: "Swedish (Sweden)", title: "Svenska", isRtl: !1 },
          "ta-IN": { name: "Tamil (India)", title: "தமிழ்", isRtl: !1 },
          "th-TH": { name: "Thai", title: "ภาษาไทย", isRtl: !1 },
          "ti-ER": { name: "Tigrinya (Eritrea)", title: "ትግርኛ", isRtl: !1 },
          "tr-TR": { name: "Turkish (Turkey)", title: "Türkçe", isRtl: !1 },
          "uk-UA": { name: "Ukrainian", title: "Українська", isRtl: !1 },
          "ur-PK": { name: "Urdu (Pakistan)", title: "اردو", isRtl: !0 },
          "vi-VN": { name: "Vietnamese", title: "Tiếng Việt", isRtl: !1 },
          "zh-CN": {
            name: "Chinese (Simplified, Mainland China)",
            title: "简体中文",
            isRtl: !1,
          },
          "zh-HK": {
            name: "Chinese (Traditional, Hong Kong)",
            title: "繁體中文（香港）",
            isRtl: !1,
          },
          "zh-TW": {
            name: "Chinese (Traditional, Taiwan)",
            title: "繁體中文（台灣）",
            isRtl: !1,
          },
          "zu-ZA": { name: "Zulu", title: "isiZulu", isRtl: !1 },
        };
      function Y() {
        return Object.keys(E).map(function (e) {
          return k({ code: e }, E[e]);
        });
      }
      function O(e) {
        return !!A((0, r.Nj)(e).lang).isRtl;
      }
      function A(e) {
        var t = L(e) || "en-US";
        return E[t];
      }
      function L(e) {
        if (!e) return "";
        var t = P();
        return t.includes(e)
          ? e
          : e.includes("-")
          ? L(C(e.split("-"), 1)[0])
          : t.filter(function (t) {
              return t.includes(e);
            })[0] || "";
      }
      function P() {
        return Object.keys(E);
      }
      var j = function (e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r,
          n,
          o = i.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            r && !r.done && (i = o.return) && i.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return a;
      };
      function I() {
        return {
          themeColor: "#fff",
          backgroundColor: "#fff",
          colorScheme: "light",
          icoFileUrl: "//s03.appmifile.com/favicon.ico",
          icoImageUrl:
            "//i01.appmifile.com/webfile/globalimg/mobile/logo/mi.png",
          polyfillUrl:
            "//cdn.polyfill.io/v3/polyfill.min.js?features=es2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2CIntersectionObserverEntry%2CIntersectionObserver",
          sentryUrl:
            "//i01.appmifile.com/webfile/globalweb/stat/js/sentry.min.js?v=5.19.0",
        };
      }
      var R = {
        bd: {
          alternateLinkPC: "//www.mi.com/bd",
          htmlTitle: "Mi Bangladesh",
          htmlDescription:
            "Welcome to Xiaomi Bangladesh official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/bd.",
        },
        br: {
          alternateLinkPC: "//www.mi.com/br",
          htmlTitle: "Mi Brasil",
          noScriptTitle: "O JavaScript não está disponível.",
          noScriptContent:
            "Detectamos que o JavaScript está desabilitado neste navegador. Mude para um navegador compatível para continuar usando o mi.com/br.",
        },
        cl: {
          alternateLinkPC: "//www.mi.com/cl",
          htmlTitle: "Mi Chile",
          noScriptTitle: "JavaScript no está disponible.",
          noScriptContent:
            "Detectamos que JavaScript está desactivado en este navegador. Activa JavaScript o cambia a un navegador compatible para seguir usando mi.com/cl.",
        },
        cn: {
          alternateLinkPC: "//www.mi.com",
          alternateLinkM: "//mobile.mi.com",
          htmlTitle: "小米商城",
          htmlImage:
            "https://i01.appmifile.com/webfile/globalimg/share/default.jpg",
          htmlKeywords: "xiaomi, redmi, 小米, 红米, 小米商城",
          htmlDescription:
            "小米官网直营小米公司旗下所有产品，包括 Xiaomi 手机系列、Redmi 红米系列、小米电视、笔记本、米家智能家居等，同时提供小米客户服务及售后支持。",
          noScriptTitle: "JavaScript 不可用",
          noScriptContent:
            "我们检测到浏览器禁用了 JavaScript。请启用 JavaScript 或改用支持的浏览器后继续访问 mi.com。",
        },
        cz: {
          alternateLinkPC: "//www.mi.com/cz",
          htmlTitle: "Mi Czech",
          noScriptTitle: "JavaScript není k dispozici.",
          noScriptContent:
            "Zjistili jsme, že JavaScript je v tomto prohlížeči zakázaný. Povolte ho prosím nebo přejděte na podporovaný prohlížeč, abyste mohli používat mi.com/cz i nadále.",
        },
        de: {
          fbAppId: "2393673747518462",
          alternateLinkPC: "//www.mi.com/de",
          alternateLinkM: "//mobile.mi.com/de",
          htmlTitle: "Xiaomi Deutschland",
          htmlDescription:
            "Willkommen auf der offiziellen Website von Xiaomi Deutschland, um Ihre Lieblingsprodukte zu kaufen. Hier können Sie die neuesten Xiaomi-Smartphones, Redmi-Smartphones, Mi Bands, Powerbanks und andere beliebte Produkte sowie verschiedene unregelmäßige Rabatte auf mi.com/de kaufen.",
          noScriptTitle: "JavaScript ist nicht verfügbar.",
          noScriptContent:
            "Wir haben festgestellt, dass JavaScript in diesem Browser deaktiviert ist. Aktiviere JavaScript bitte oder wechsle zu einem unterstützten Browser, um mi.com/de weiter zu nutzen.",
        },
        eg: {
          alternateLinkPC: "//www.mi.com/eg",
          htmlTitle: "Mi مصر",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/eg.",
        },
        es: {
          fbAppId: "218290528709991",
          alternateLinkPC: "//www.mi.com/es",
          alternateLinkM: "//mobile.mi.com/es",
          htmlTitle: "Xiaomi España",
          htmlDescription:
            "Bienvenido al sitio web oficial de Xiaomi España para comprar tus productos favoritos. Aquí puede comprar los últimos teléfonos inteligentes Xiaomi, teléfonos inteligentes Redmi, Mi Bands, Power Banks y otros productos populares, así como varios descuentos irregulares, todo en mi.com/es.",
          noScriptTitle: "JavaScript no está disponible.",
          noScriptContent:
            "Detectamos que JavaScript está desactivado en este navegador. Activa JavaScript o cambia a un navegador compatible para seguir usando mi.com/es.",
        },
        fr: {
          fbAppId: "396947937445883",
          alternateLinkPC: "//www.mi.com/fr",
          alternateLinkM: "//mobile.mi.com/fr",
          htmlTitle: "Xiaomi France",
          htmlDescription:
            "Bienvenue sur le site officiel de Xiaomi France pour acheter vos produits préférés. Ici, vous pouvez acheter les derniers smartphones Xiaomi, smartphones Redmi, Mi Bands, banques d'alimentation et autres produits populaires, ainsi que diverses remises irrégulières, le tout sur mi.com/fr.",
          noScriptTitle: "JavaScript n'est pas disponible.",
          noScriptContent:
            "Nous avons détecté que JavaScript est désactivé dans ce navigateur. Veuillez activer JavaScript ou utiliser un navigateur pris en charge pour continuer à vous servir de mi.com/fr.",
        },
        gcc: {
          alternateLinkPC: "//www.mi.com/gcc",
          htmlTitle: "Mi Gulf Cooperation Council",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/gcc.",
        },
        global: {
          alternateLinkPC: "//www.mi.com/global",
          htmlTitle: "Mi Global Home",
          htmlDescription:
            "Welcome to Xiaomi global official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/global.",
        },
        gr: {
          alternateLinkPC: "//www.mi.com/gr",
          htmlTitle: "Mi Greece",
          noScriptTitle: "Η JavaScript δεν είναι διαθέσιμη.",
          noScriptContent:
            "Εντοπίσαμε ότι η JavaScript είναι απενεργοποιημένη σε αυτό το πρόγραμμα περιήγησης. Ενεργοποιήστε τη JavaScript ή χρησιμοποιήστε ένα υποστηριζόμενο πρόγραμμα περιήγησης για να συνεχίσετε να χρησιμοποιείτε το mi.com/gr.",
        },
        hk: {
          fbDomainVerification: "4986wwjrddk3etwwmq78d6lnknpwqy",
          fbAppId: "376169942522368",
          alternateLinkPC: "//www.mi.com/hk",
          alternateLinkM: "//mobile.mi.com/hk",
          htmlTitle: "小米香港官網",
          htmlKeywords:
            "小米, 小米官網, 小米香港官網, 小米網, mi.com, mi, xiaomi, xiaomi.com, 小米手機, 紅米手機, 小米手環, 小米盒子, 小米行動電源, 小米之家, 紅米, 小米香港, 小米 香港, mi, hk, xiaomi hk, 小米商城, 小米wifi, mi小米手機官網香港, 小米手機官網, 小米之家香港, 香港小米之家, 香港小米",
          htmlDescription:
            "歡迎來到小米香港官方網站，我們為您提供小米手機、紅米手機、小米手環、行動電源、智能硬件、耳機音箱及各種配件，更有各項不定期的專屬優惠，全部都在 mi.com/hk 。",
          noScriptTitle: "JavaScript 無法使用",
          noScriptContent:
            "我們發現此瀏覽器中的 JavaScript 已停用。請啟用 JavaScript 或切換至受支援的瀏覽器，以繼續使用 mi.com/hk 。",
        },
        id: {
          fbAppId: "486432391491495",
          alternateLinkPC: "//www.mi.co.id/id",
          alternateLinkM: "//mobile.mi.co.id/id",
          htmlTitle: "Xiaomi Indonesia",
          htmlDescription:
            "Selamat datang di situs resmi Xiaomi Indonesia untuk membeli produk favorit Anda. Di sini Anda dapat membeli smartphone Xiaomi terbaru, smartphone Redmi, Mi Band, Power bank, dan produk populer lainnya, serta berbagai diskon tidak teratur, semuanya di mi.co.id/id.",
          noScriptTitle: "JavaScript tidak tersedia.",
          noScriptContent:
            "Kami mendeteksi bahwa JavaScript dinonaktifkan di browser ini. Silakan aktifkan JavaScript atau beralih ke browser yang didukung untuk terus menggunakan mi.co.id/id.",
        },
        in: {
          fbAppId: "1580688815485696",
          alternateLinkPC: "//www.mi.com/in",
          alternateLinkM: "//mobile.mi.com/in",
          htmlTitle: "Xiaomi India",
          htmlDescription:
            "Xiaomi India official store helps you to discover Mi and Redmi mobiles, accessories, ecosystem products and many more.",
        },
        it: {
          fbAppId: "156184545228345",
          alternateLinkPC: "//www.mi.com/it",
          alternateLinkM: "//mobile.mi.com/it",
          htmlTitle: "Xiaomi Italia",
          htmlKeywords:
            "xiaomi, mi, xiaomi italia, redmi, mi store, smartphone xiaomi, mi italia, mi.com",
          htmlDescription:
            "Benvenuto nel sito Web ufficiale di Xiaomi Italia per acquistare i tuoi prodotti preferiti. Qui puoi acquistare gli ultimi smartphone Xiaomi, smartphone Redmi, Mi Band, Power bank e altri prodotti popolari, oltre a vari sconti irregolari, tutti su mi.com/it.",
          noScriptTitle: "JavaScript non è disponibile.",
          noScriptContent:
            "JavaScript è disabilitato nel browser. Per continuare a utilizzare mi.com/it, abilita JavaScript o passa a un browser supportato.",
        },
        jp: {
          fbAppId: "695217920983189",
          alternateLinkPC: "//www.mi.com/jp",
          alternateLinkM: "//mobile.mi.com/jp",
          htmlTitle: "Xiaomi Japan",
          htmlDescription:
            "Xiaomi Japan (日本) 公式 ウェブサイトへようこそ。お気に入りの製品を購入できます。ここでは、最新のXiaomiスマートフォン、Redmiスマートフォン、Mi Bands、パワーバンク、その他の人気商品、およびさまざまな不定期割引をすべて mi.com/jp で購入できます。",
          noScriptTitle: "JavaScript を使用できません",
          noScriptContent:
            "このブラウザでは JavaScript が無効になっています。引き続き mi.com/jp を利用するため、JavaScript を有効にするか、サポートされているブラウザに切り替えてください。",
        },
        kr: {
          alternateLinkPC: "//www.mi.com/kr",
          htmlTitle: "Mi 코리아",
          noScriptTitle: "자바스크립트를 사용할 수 없습니다.",
          noScriptContent:
            "이 브라우저에서 자바스크립트를 사용할 수 없는 것으로 감지되었습니다. mi.com/kr을 계속 사용하려면 자바스크립트를 사용 설정하거나 지원되는 브라우저로 전환하세요.",
        },
        lk: { alternateLinkPC: "//www.mi.com/lk", htmlTitle: "Mi Sri Lanka" },
        ma: {
          alternateLinkPC: "//www.mi.com/ma",
          htmlTitle: "Mi The Kingdom of Morocco",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/ma.",
        },
        mx: {
          alternateLinkPC: "//www.mi.com/mx",
          htmlTitle: "Mi México",
          noScriptTitle: "JavaScript no está disponible.",
          noScriptContent:
            "Detectamos que JavaScript está desactivado en este navegador. Activa JavaScript o cambia a un navegador compatible para seguir usando mi.com/mx.",
        },
        my: {
          alternateLinkPC: "//www.mi.com/my",
          htmlTitle: "Mi Malaysia",
          htmlDescription:
            "Welcome to Xiaomi Malaysia website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/my.",
        },
        ng: { alternateLinkPC: "//www.mi.com/ng", htmlTitle: "Mi Nigeria" },
        nl: {
          fbAppId: "225240578340235",
          alternateLinkPC: "//www.mi.com/nl",
          alternateLinkM: "//mobile.mi.com/nl",
          htmlTitle: "Xiaomi Nederland",
          htmlDescription:
            "Welkom op de officiële website van Xiaomi Nederland om uw favoriete producten te kopen. Hier kunt u de nieuwste Xiaomi-smartphones, Redmi-smartphones, Mi Bands, Powerbanks en andere populaire producten kopen, evenals verschillende onregelmatige kortingen, allemaal op mi.com/nl.",
          noScriptTitle: "JavaScript is niet beschikbaar",
          noScriptContent:
            "We hebben gedetecteerd dat JavaScript in deze browser is uitgeschakeld. Schakel JavaScript in of stap over op een ondersteunde browser om mi.com/nl te blijven gebruiken.",
        },
        np: { alternateLinkPC: "//www.mi.com/np", htmlTitle: "Mi Nepal" },
        ph: {
          alternateLinkPC: "//www.mi.com/ph",
          alternateLinkM: "//mobile.mi.com/ph",
          htmlTitle: "Mi Philippines",
          htmlDescription:
            "Welcome to Xiaomi Philippines official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/ph.",
        },
        pk: { alternateLinkPC: "//www.mi.com/pk", htmlTitle: "Mi Pakistan" },
        pl: {
          fbAppId: "430298868931399",
          alternateLinkPC: "//www.mi.com/pl",
          alternateLinkM: "//mobile.mi.com/pl",
          htmlTitle: "Xiaomi Polska",
          htmlDescription:
            "Xiaomi to globana firma produkująca jakościowe produkty w rynkowych cenach.",
          noScriptTitle: "Obsługa JavaScript jest niedostępna.",
          noScriptContent:
            "Obsługa JavaScript jest wyłączona w tej przeglądarce. Aby dalej korzystać ze strony mi.com/pl, włącz obsługę JavaScript lub zainstaluj jedną z obsługiwanych przeglądarek.",
        },
        ru: {
          fbAppId: "218290528709991",
          alternateLinkPC: "//www.mi.com/ru",
          alternateLinkM: "//mobile.mi.com/ru",
          htmlTitle: "Xiaomi Россия",
          htmlDescription:
            "Добро пожаловать на официальный сайт Xiaomi Россия, чтобы купить ваши любимые продукты. Здесь вы можете купить новейшие смартфоны Xiaomi, смартфоны Redmi, браслеты Mi Band, внешние аккумуляторы и другие популярные товары, а также различные нерегулярные скидки на mi.com/ru.",
          noScriptTitle: "Функции JavaScript недоступны.",
          noScriptContent:
            "В вашем браузере отключены функции JavaScript. Включите их или начните использовать поддерживаемый браузер, чтобы продолжить пользоваться сайтом mi.com/ru.",
        },
        sa: {
          alternateLinkPC: "//www.mi.com/sa",
          htmlTitle: "Mi Saudi Arabia",
          noScriptTitle: "JavaScript غير متوفر.",
          noScriptContent:
            "لقد اكتشفنا أن JavaScript معطل في هذا المتصفح. الرجاء تمكين JavaScript أو التبديل إلى مستعرض معتمد للاستمرار في استخدام mi.com/sa.",
        },
        se: {
          alternateLinkPC: "//www.mi.com/se",
          htmlTitle: "Mi Sverige",
          noScriptTitle: "JavaScript är inte tillgängligt.",
          noScriptContent:
            "Vi har upptäckt att JavaScript är inaktiverat i denna webbläsare. Använd en webbläsare som stöds om du vill fortsätta använda mi.com/se.",
        },
        sg: {
          alternateLinkPC: "//www.mi.com/sg",
          htmlTitle: "Mi Singapore",
          htmlDescription:
            "Welcome to Xiaomi Singapore official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/sg.",
        },
        th: {
          alternateLinkPC: "//www.mi.com/th",
          htmlTitle: "Mi Thailand",
          noScriptTitle: "JavaScript ไม่พร้อมใช้งาน",
          noScriptContent:
            "เราตรวจพบว่าไม่มีการเปิดใช้งาน JavaScript ในเบราว์เซอร์นี้ โปรดเปิดใช้งาน JavaScript หรือเปลี่ยนไปใช้เบราว์เซอร์ที่รองรับเพื่อใช้งาน mi.com/th",
        },
        tr: {
          fbAppId: "380432752368993",
          alternateLinkPC: "//www.mi.com/tr",
          alternateLinkM: "//mobile.mi.com/tr",
          htmlTitle: "Xiaomi Türkiye",
          htmlDescription:
            "Favori ürünlerinizi satın almak için Xiaomi Türkiye resmi web sitesine hoş geldiniz. Burada en yeni Xiaomi akıllı telefonları, Redmi akıllı telefonları, Mi Bantları, Güç bankaları ve diğer popüler ürünlerin yanı sıra çeşitli düzensiz indirimleri mi.com/tr adresinden satın alabilirsiniz.",
          noScriptTitle: "JavaScript kullanılamıyor.",
          noScriptContent:
            "Bu tarayıcıda JavaScript'in engellenmiş olduğunu tespit ettik. JavaScript'e izin vererek veya desteklenen bir tarayıcıya geçiş yaparak mi.com/tr'u kullanmaya devam edebilirsin.",
        },
        tw: {
          fbDomainVerification: "qv0t21ahk3kxrk038hfzdgxkso0n9q",
          fbAppId: "1551832078380045",
          alternateLinkPC: "//www.mi.com/tw",
          alternateLinkM: "//mobile.mi.com/tw",
          htmlTitle: "小米台灣官網",
          htmlKeywords:
            "小米, 小米官網, 小米台灣官網, 小米網, mi.com, mi, xiaomi, xiaomi.com, 小米手機, 紅米手機, 小米手環, 小米盒子, 小米行動電源, 小米之家, www.mi.com/tw, 紅米, 小米台灣, 小米 台灣, xiaomi taiwan, 小米商城, 小米wifi",
          htmlDescription:
            "快上小米台灣官網選購您喜歡的商品，打造智慧有型的新生活。您可以在這裡買到最新的手機、小米手環、小米盒子、行動電源等熱門產品，更有各項不定期的好康優惠，全部都在 mi.com/tw 。",
          noScriptTitle: "JavaScript 無法使用",
          noScriptContent:
            "我們發現此瀏覽器中的 JavaScript 已停用。請啟用 JavaScript 或切換至受支援的瀏覽器，以繼續使用 mi.com/tw 。",
        },
        ua: {
          alternateLinkPC: "//www.mi.com/ua",
          htmlTitle: "Mi Ukraine",
          noScriptTitle: "JavaScript недоступно.",
          noScriptContent:
            "Ми виявили, що в цьому браузері вимкнуто JavaScript. Щоб продовжити користуватися mi.com/ua, увімкніть JavaScript або перейдіть у браузер, який підтримується.",
        },
        uk: {
          fbAppId: "677239446009650",
          alternateLinkPC: "//www.mi.com/uk",
          alternateLinkM: "//mobile.mi.com/uk",
          htmlTitle: "Xiaomi UK",
          htmlDescription:
            "Welcome to Xiaomi UK official website to buy your favorite products. Here you can buy the latest Xiaomi smartphones, Redmi smartphones, Mi Bands, Power banks and other popular products, as well as various irregular discounts, all on mi.com/uk.",
        },
        us: {
          alternateLinkPC: "//www.mi.com/us",
          htmlTitle: "Mi United States",
        },
        vn: {
          alternateLinkPC: "//www.mi.com/vn",
          htmlTitle: "Mi Việt Nam",
          noScriptTitle: "JavaScript không có sẵn.",
          noScriptContent:
            "Chúng tôi phát hiện JavaScript đã bị tắt ở trình duyệt này. Vui lòng chuyển sang trình duyệt được hỗ trợ để tiếp tục sử dụng mi.com/vn.",
        },
        za: {
          alternateLinkPC: "//www.mi.com/za",
          htmlTitle: "Mi South Africa",
        },
      };
      function B(e) {
        var t = {
          fbDomainVerification: "",
          fbAppId: "",
          alternateLinkPC: "",
          alternateLinkM: "",
          htmlTitle: "Xiaomi",
          htmlImage: "https://" + z(e) + "/i18n/share/default.jpg",
          htmlKeywords: "xiaomi, mi, redmi",
          htmlDescription:
            "Xiaomi, a global company producing quality products at honest pricing.",
          noScriptTitle: "JavaScript is not available.",
          noScriptContent:
            "We’ve detected that JavaScript is disabled in this browser. Please enable JavaScript or switch to a supported browser to continue using mi.com/" +
            e +
            ".",
        };
        return Object.assign(t, R[e] || {});
      }
      function U(e) {
        return Object.keys(R)
          .map(function (t) {
            return "mobile" === e
              ? [t, R[t].alternateLinkM || ""]
              : [t, R[t].alternateLinkPC || ""];
          })
          .filter(function (e) {
            var t = j(e, 2);
            t[0];
            return !!t[1];
          })
          .map(function (e) {
            var t = j(e, 2),
              i = t[0],
              n = t[1];
            return ["" + (0, r.Nj)(i).lang, "" + n];
          });
      }
      function z(e) {
        var t = {
          nld: "i05.appmifile.com",
          rus: "i04.appmifile.com",
          ind: "i03.appmifile.com",
          sgp: "i02.appmifile.com",
          chn: "i01.appmifile.com",
        };
        return t[(0, r.af)(e)] || t.sgp;
      }
    },
    1455: (e, t, i) => {
      "use strict";
      i.d(t, {
        Nj: () => n,
        Yc: () => o,
        Rz: () => a,
        dG: () => c,
        zM: () => s,
        af: () => l,
      });
      var r = {
        bd: {
          lang: "en-BD",
          phoneCode: "+880",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fbd%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseabd&_locale=en_US",
          capitalLongitude: 90.3492859,
          capitalLatitude: 23.7807777,
        },
        br: {
          lang: "pt-BR",
          dayjsLocal: "pt-br",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D [de] MMMM",
          dateTimeFormatAbbrMDay: "D [de] MMM",
          phoneCode: "+55",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fbr%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fbr%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_br_pc_pro&_locale=br_BR",
          capitalLongitude: -48.0073977,
          capitalLatitude: -15.7215857,
        },
        cl: {
          lang: "es-CL",
          dayjsLocal: "es",
          dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD-MM-YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD-MM-YYYY",
          dateTimeFormatDayWeek: "DD-MM-YYYY dddd",
          dateTimeFormatNumMDay: "DD-MM",
          dateTimeFormatLongMDay: "D [de] MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+56",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fcl%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fcl%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_i18n_cl&_locale=es_CL",
          capitalLongitude: -70.7699135,
          capitalLatitude: -33.4724228,
        },
        cn: {
          lang: "zh-CN",
          isToC: !0,
          dayjsLocal: "zh-cn",
          deployArea: "nld",
          dateTimeFormat: "YYYY/M/D HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY/M/D HH:mm",
          dateTimeFormatOnlyDate: "YYYY/M/D",
          dateTimeFormatDayWeek: "YYYY/M/D dddd",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: ["weibo", "clipboard"],
          phoneCode: "+86",
          capitalLongitude: 116.11728,
          capitalLatitude: 39.9390731,
        },
        cz: {
          lang: "cs-CZ",
          dayjsLocal: "cs",
          dateTimeFormat: "D. M. YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D. M. YYYY HH:mm",
          dateTimeFormatOnlyDate: "D. M. YYYY",
          dateTimeFormatDayWeek: "D. M. YYYY dddd",
          dateTimeFormatNumMDay: "D. M.",
          dateTimeFormatLongMDay: "D. MMMM",
          dateTimeFormatAbbrMDay: "D. M.",
          phoneCode: "+420",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=xvrg5s%2BPI9UR88HGRGRw7X4oTls%3D&sid=i18n_cz_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fbuy.mi.com%25252Fcz%25252Flogin%25252Fcallback%25253Fsign%25253DtfH4fB%2525252FbmcpQMEwbfWIN8FmkY58%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_cz_pc_pro%252526sid%25253Di18n_cz_pc_pro%2526sid%253Di18n_cz_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dxvrg5s%25252BPI9UR88HGRGRw7X4oTls%25253D&callback=https%3A%2F%2Fbuy.mi.com%2Fcz%2Flogin%2Fcallback%3Fsign%3DtfH4fB%252FbmcpQMEwbfWIN8FmkY58%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_cz_pc_pro%26sid%3Di18n_cz_pc_pro&_sign=jVlgYwGTpsWmTwRPMbLBtZShdlI%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=CZ",
          capitalLongitude: 14.4373941,
          capitalLatitude: 50.0945764,
        },
        de: {
          lang: "de-DE",
          isToC: !0,
          dayjsLocal: "de",
          deployArea: "nld",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM.",
          dateTimeFormatLongMDay: "DD. MMMM",
          dateTimeFormatAbbrMDay: "DD. MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+49",
          siteId: 308197,
          xmsLanguage: "DE_DE",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fde%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fde%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=i18n_ams_de_pc_pro&_locale=de_DE",
          capitalLongitude: 13.2846504,
          capitalLatitude: 52.5069704,
        },
        eg: {
          lang: "ar-EG",
          dayjsLocal: "ar",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+20",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Feg%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: 31.2234103,
          capitalLatitude: 30.0595534,
        },
        es: {
          lang: "es-ES",
          isToC: !0,
          dayjsLocal: "es",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "DD [de] MMMM",
          dateTimeFormatAbbrMDay: "DD MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+34",
          siteId: 308192,
          xmsLanguage: "ES_ES",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fes%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fes%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_es_pc_pro&_locale=es_ES",
          capitalLongitude: -3.8196192,
          capitalLatitude: 40.4381311,
        },
        fr: {
          lang: "fr-FR",
          langList: ["fr-FR", "en-GB"],
          isToC: !0,
          dayjsLocal: "fr",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+33",
          siteId: 308193,
          xmsLanguage: "FR_FR",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Ffr%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Ffr%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_fr_pc_pro&_locale=fr_FR",
          capitalLongitude: 2.2769956,
          capitalLatitude: 48.8589466,
        },
        gcc: {
          lang: "ar-001",
          dayjsLocal: "ar",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+971",
          siteCode: "ae",
          signUpUrl:
            "//account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fbuy.mi.com%2Fgcc%2Flogin%2Fcallback%3Fsign%3DQ%252FkV3UQGb2Fg8y2UU648M2VYTvM%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_gcc_pc_pro%26sid%3Di18n_gcc_pc_pro&sid=i18n_gcc_pc_pro&lsrp_checkPwd=true&_ssign=BgpZdNl6ww6j8ohCT5k2xp4rHts%3D",
          capitalLongitude: 46.5423452,
          capitalLatitude: 24.7255553,
        },
        global: {
          lang: "en-001",
          siteCode: "",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fglobal%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fglobal%252Fstore%252F%26sign%3DM2ZmMjQ1YjFiNzk0YjEzYThkM2RhMGFkOTRmMmI5Mzc2NWQyODdlNg%2C%2C&sid=mi_overseaen&_locale=en",
        },
        gr: {
          lang: "el-GR",
          dayjsLocal: "el",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+30",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=x4ZoQWmQ2fe8eM%2BxyUK1eQdzDhQ%3D&sid=i18n_gr_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fm.buy.mi.com%25252Fgr%25252Flogin%25252Fcallback%25253Fsign%25253DKBeaEG%2525252FND%2525252B8mWu0P1esfmDbGtsk%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_gr_pc_pro%252526sid%25253Di18n_gr_pc_pro%2526sid%253Di18n_gr_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dx4ZoQWmQ2fe8eM%25252BxyUK1eQdzDhQ%25253D&callback=https%3A%2F%2Fm.buy.mi.com%2Fgr%2Flogin%2Fcallback%3Fsign%3DKBeaEG%252FND%252B8mWu0P1esfmDbGtsk%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_gr_pc_pro%26sid%3Di18n_gr_pc_pro&_sign=hGCiB8bhLDjyQUkmXn7HmJ54Y80%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=GR",
          capitalLongitude: 23.70332,
          capitalLatitude: 37.9908997,
        },
        hk: {
          lang: "zh-HK",
          isToC: !0,
          dayjsLocal: "zh-hk",
          dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY-MM-DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY-MM-DD",
          dateTimeFormatDayWeek: "YYYY-MM-DD dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: [
            "facebook",
            "twitter",
            "line",
            "telegram",
            "weibo",
            "clipboard",
          ],
          phoneCode: "+852",
          siteId: 300004,
          regionId: 3385,
          xmsLanguage: "ZH_HK",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fhk%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fhk%252F%26sign%3DODRmNmYxMTIyMTc4OWE1YzFjNTVhNmFiOTA0ODJhOWNhZDk0NDk3NA%2C%2C&sid=mi_xiaomihk&_locale=zh_HK",
          capitalLongitude: 113.9876162,
          capitalLatitude: 22.3529913,
        },
        id: {
          lang: "id-ID",
          isToC: !0,
          dayjsLocal: "id",
          deployArea: "idn",
          dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD-MM-YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD-MM-YYYY",
          dateTimeFormatDayWeek: "DD-MM-YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "DD MMMM",
          dateTimeFormatAbbrMDay: "DD MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+62",
          siteId: 300512,
          regionId: 254391,
          xmsLanguage: "IN_ID",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fid%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fid%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_overseaid&_locale=in_ID",
          capitalLongitude: 106.7594781,
          capitalLatitude: -6.2295712,
        },
        in: {
          lang: "en-IN",
          isToC: !0,
          dayjsLocal: "en-in",
          deployArea: "ind",
          dateTimeFormat: "DD/MM/YYYY hh:mm:ss a",
          dateTimeFormatNoSecond: "DD/MM/YYYY hh:mm a",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+91",
          xmsLanguage: "EN_IN",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN",
          capitalLongitude: 77.1389453,
          capitalLatitude: 28.5274851,
        },
        it: {
          lang: "it-IT",
          isToC: !0,
          dayjsLocal: "it",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+39",
          siteId: 308194,
          xmsLanguage: "IT_IT",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fit%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_it_pc_pro&_locale=it_IT",
          capitalLongitude: 12.3959155,
          capitalLatitude: 41.9102415,
        },
        jp: {
          lang: "ja-JP",
          isToC: !0,
          dayjsLocal: "ja",
          dateTimeFormat: "YYYY/M/D (ddd) HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY/M/D HH:mm",
          dateTimeFormatOnlyDate: "YYYY/M/D",
          dateTimeFormatDayWeek: "YYYY/M/D (ddd)",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: ["facebook", "twitter", "line", "clipboard"],
          phoneCode: "+81",
          xmsLanguage: "JP_JP",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fjp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fjp%252F%26sign%3DMDk4MGM4MjY4Njg5MTcwOGNkNjBkMDEzNzQ4OWZlYjFiZTM1MGExNA%2C%2C&sid=i18n_jp_pc_pro&_locale=ja_JP",
          capitalLongitude: 139.6007847,
          capitalLatitude: 35.6684415,
        },
        kr: {
          lang: "ko-KR",
          dayjsLocal: "ko",
          dateTimeFormat: "YYYY.MM.DD. dddd A h:mm",
          dateTimeFormatNoSecond: "YYYY.MM.DD. A h:mm",
          dateTimeFormatOnlyDate: "YYYY.MM.DD.",
          dateTimeFormatDayWeek: "YYYY.MM.DD. dddd",
          dateTimeFormatNumMDay: "M. D.",
          dateTimeFormatLongMDay: "M월 D일",
          dateTimeFormatAbbrMDay: "M월 D일",
          phoneCode: "+82",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fit%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseait&_locale=kr_KR",
          capitalLongitude: 121.7269017,
          capitalLatitude: 37.955773,
        },
        lk: {
          lang: "en-LK",
          phoneCode: "+94",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Flk%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Flk%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_oversealk&_locale=lk_LK",
          capitalLongitude: 79.8211861,
          capitalLatitude: 6.9219226,
        },
        ma: {
          lang: "ar-MA",
          dayjsLocal: "ar-ma",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+212",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=x4ZoQWmQ2fe8eM%2BxyUK1eQdzDhQ%3D&sid=i18n_ma_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fm.buy.mi.com%25252Fgr%25252Flogin%25252Fcallback%25253Fsign%25253DKBeaEG%2525252FND%2525252B8mWu0P1esfmDbGtsk%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_gr_pc_pro%252526sid%25253Di18n_ma_pc_pro%2526sid%253Di18n_gr_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dx4ZoQWmQ2fe8eM%25252BxyUK1eQdzDhQ%25253D&callback=https%3A%2F%2Fm.buy.mi.com%2Fgr%2Flogin%2Fcallback%3Fsign%3DKBeaEG%252FND%252B8mWu0P1esfmDbGtsk%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_ma_pc_pro%26sid%3Di18n_ma_pc_pro&_sign=hGCiB8bhLDjyQUkmXn7HmJ54Y80%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=MA",
          capitalLongitude: -6.8922822,
          capitalLatitude: 33.9692851,
        },
        mx: {
          lang: "es-MX",
          dayjsLocal: "es-mx",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D [de] MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+52",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fmx%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: -99.2836966,
          capitalLatitude: 19.3910038,
        },
        my: {
          lang: "en-MY",
          dayjsLocal: "en-gb",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+60",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fmy%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fmy%252F%26sign%3DZjc2NTAzMjRjYTkxYzVmNjk5OTIzNjc4NWQ0OGRlYTY4ZTc5NGQzZA%2C%2C&sid=mi_overseamy&_locale=en_MY",
          capitalLongitude: 101.6169495,
          capitalLatitude: 3.138675,
        },
        ng: {
          lang: "en-NG",
          dayjsLocal: "en-gb",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+234",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fng%2Flogin%2Fcallback%3Fsign%3DJMDxUD1yDV71ZVCg3Mjp1OMh6Ro%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_ng_pc_pro%26sid%3Di18n_ng_pc_pro&sid=i18n_ng_pc_pro&lsrp_checkPwd=true&_ssign=0TXvmbSpoc%2BFaM0xjNBensLiUWo%3D",
          capitalLongitude: 6.090156,
          capitalLatitude: 8.9592153,
        },
        nl: {
          lang: "nl-NL",
          isToC: !0,
          dayjsLocal: "nl",
          deployArea: "nld",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "D-M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+316",
          siteId: 308198,
          xmsLanguage: "NL_NL",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fnl%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnl%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_nl_pc_pro&_locale=nl_NL",
          capitalLongitude: 4.8339211,
          capitalLatitude: 52.3547498,
        },
        np: {
          lang: "en-NP",
          phoneCode: "+977",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fnp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnp%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseanp&_locale=np_NP",
          capitalLongitude: 85.2911134,
          capitalLatitude: 27.7090319,
        },
        ph: {
          lang: "en-PH",
          phoneCode: "+63",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fph%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fph%252Fsign%3DNjQxYzgwYmJhYjQwMjkyOWI1M2NmYjg1ZDY3ZTk4NDA5MzA1Njc2Mw%2C%2C&sid=mi_overseaph&_locale=en_PH",
          capitalLongitude: 120.9445404,
          capitalLatitude: 14.5965788,
        },
        pk: {
          lang: "en-PK",
          dayjsLocal: "en-gb",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+92",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpk%2Flogin%2Fcallback%3Fsign%3DYlfWc79ekc%252B%252FGft3ZLKsxFhJRlI%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_pk_pc_pro%26sid%3Di18n_pk_pc_pro&amp;sid=i18n_pk_pc_pro&amp;lsrp_checkPwd=true&amp;_ssign=v5QFRsb2k8OFna9Qa873Ej3H52o%3D",
          capitalLongitude: 72.9460249,
          capitalLatitude: 33.6163232,
        },
        pl: {
          lang: "pl-PL",
          isToC: !0,
          dayjsLocal: "pl",
          deployArea: "nld",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+48",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpl%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fpl%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_oversearpl&_locale=pl_PL",
          capitalLongitude: 20.9211128,
          capitalLatitude: 52.2330653,
        },
        ru: {
          lang: "ru-RU",
          isToC: !0,
          dayjsLocal: "ru",
          deployArea: "rus",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "vk",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+7",
          xmsLanguage: "RU_RU",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fru%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fru%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_oversearu&_locale=ru_RU",
          capitalLongitude: 36.8251435,
          capitalLatitude: 55.5815245,
        },
        sa: {
          lang: "ar-SA",
          dayjsLocal: "ar-sa",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+966",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fsa%2Flogin%2Fcallback%3Fsign%3DZysf5eQ0hyneKbB69nIJ564x9%252FQ%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_sa_pc_pro%26sid%3Di18n_sa_pc_pro&sid=i18n_sa_pc_pro&lsrp_checkPwd=true&_ssign=1fABrIKyugzi39wOCjYWd4VM7VQ%3D",
          capitalLongitude: 46.5423452,
          capitalLatitude: 24.7255553,
        },
        se: {
          lang: "sv-SE",
          dayjsLocal: "sv",
          dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY-MM-DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY-MM-DD",
          dateTimeFormatDayWeek: "YYYY-MM-DD dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+46",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https://buy.mi.com/se/login/callback?followup=https%3A%2F%2Fwww.mi.com%2Fse%2F&sign=MDk4MGM4MjY4Njg5MTcwOGNkNjBkMDEzNzQ4OWZlYjFiZTM1MGExNA,,&sid=i18n_se_pc_pro&_locale=se_SE",
          capitalLongitude: 17.841972,
          capitalLatitude: 59.326242,
        },
        sg: {
          lang: "en-SG",
          dayjsLocal: "en-sg",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+65",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fsg%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fsg%252F%26sign%3DMDk4MGM4MjY4Njg5MTcwOGNkNjBkMDEzNzQ4OWZlYjFiZTM1MGExNA%2C%2C&sid=mi_overseasg&_locale=en_SG",
          capitalLongitude: 103.7540049,
          capitalLatitude: 1.3439166,
        },
        th: {
          lang: "th-TH",
          dayjsLocal: "th",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+66",
          siteId: 300022,
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fth%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: 100.4930267,
          capitalLatitude: 13.7248936,
        },
        tr: {
          lang: "tr-TR",
          isToC: !0,
          dayjsLocal: "tr",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: ["facebook", "twitter", "clipboard"],
          phoneCode: "+90",
          xmsLanguage: "",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Ftr%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fcl%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_i18n_tr&_locale=tr_TR",
          capitalLongitude: 32.6226822,
          capitalLatitude: 39.9035557,
        },
        tw: {
          lang: "zh-TW",
          isToC: !0,
          dayjsLocal: "zh-tw",
          dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY-MM-DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY-MM-DD",
          dateTimeFormatDayWeek: "YYYY-MM-DD dddd",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: [
            "facebook",
            "twitter",
            "line",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+886",
          siteId: 300008,
          xmsLanguage: "ZH_TW",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Ftw%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Ftw%252F%26sign%3DM2NhMTUwMTU5MGM2YzZiM2Q4YjMyNzZmOWMyZTFjMWNiYzYyMGEwOQ%2C%2C&sid=mi_xiaomitw&_locale=zh_TW",
          capitalLongitude: 121.3662943,
          capitalLatitude: 25.0174719,
        },
        ua: {
          lang: "uk-UA",
          dayjsLocal: "uk",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+380",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fua%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: 30.392609,
          capitalLatitude: 50.4021702,
        },
        uk: {
          lang: "en-GB",
          isToC: !0,
          dayjsLocal: "en-gb",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+44",
          siteCode: "gb",
          xmsLanguage: "EN_US",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fuk%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fuk%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_uk_pc_pro&_locale=en_GB",
          capitalLongitude: -0.2416801,
          capitalLatitude: 51.5287718,
        },
        us: {
          lang: "en-US",
          phoneCode: "+1",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fus%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fus%26sign%3DZmQ0MWM5ZWQ4N2IyNjc5MjA3NWViN2U4NTY0ODNmYTI2NDZiNWI0Mg%2C%2C&sid=mi_oversea_us&_locale=en_US",
          capitalLongitude: -77.0846156,
          capitalLatitude: 38.8938672,
        },
        vn: {
          lang: "vi-VN",
          dayjsLocal: "vi",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+84",
          siteId: 300027,
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fvn%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fvn%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_overseavn&_locale=vi_VN",
          capitalLongitude: 105.8194541,
          capitalLatitude: 21.0227788,
        },
        za: {
          lang: "en-ZA",
          dayjsLocal: "en-gb",
          dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY/MM/DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY/MM/DD",
          dateTimeFormatDayWeek: "YYYY/MM/DD dddd",
          dateTimeFormatNumMDay: "MM/DD",
          dateTimeFormatLongMDay: "DD MMMM",
          dateTimeFormatAbbrMDay: "DD MMM",
          phoneCode: "+27",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=x4ZoQWmQ2fe8eM%2BxyUK1eQdzDhQ%3D&sid=i18n_za_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fm.buy.mi.com%25252Fgr%25252Flogin%25252Fcallback%25253Fsign%25253DKBeaEG%2525252FND%2525252B8mWu0P1esfmDbGtsk%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_za_pc_pro%252526sid%25253Di18n_za_pc_pro%2526sid%253Di18n_za_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dx4ZoQWmQ2fe8eM%25252BxyUK1eQdzDhQ%25253D&callback=https%3A%2F%2Fm.buy.mi.com%2Fgr%2Flogin%2Fcallback%3Fsign%3DKBeaEG%252FND%252B8mWu0P1esfmDbGtsk%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_za_pc_pro%26sid%3Di18n_za_pc_pro&_sign=hGCiB8bhLDjyQUkmXn7HmJ54Y80%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=ZA",
          capitalLongitude: 28.0578676,
          capitalLatitude: -25.7582737,
        },
      };
      function n(e) {
        var t = {
          lang: "en-US",
          langList: [],
          isToC: !1,
          dayjsLocal: "en",
          deployArea: "sgp",
          dateTimeFormat: "MM/DD/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "MM/DD/YYYY HH:mm",
          dateTimeFormatOnlyDate: "MM/DD/YYYY",
          dateTimeFormatDayWeek: "MM/DD/YYYY dddd",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "MMMM D",
          dateTimeFormatAbbrMDay: "MMM D",
          shareSocialList: ["facebook", "twitter", "clipboard"],
          phoneCode: "+1",
          siteCode: e,
          siteId: 0,
          regionId: 0,
          xmsLanguage: "",
          signUpUrl: "",
          capitalLongitude: 103.7540049,
          capitalLatitude: 1.3439166,
        };
        return Object.assign(t, r[e] || {});
      }
      function o() {
        var e = Object.keys(r)
          .map(function (e) {
            return r[e].lang || "";
          })
          .filter(function (e) {
            return !!e;
          })
          .sort();
        return Array.from(new Set(e));
      }
      function a() {
        return Object.keys(r).sort();
      }
      function c() {
        var e = Object.keys(r)
          .filter(function (e) {
            return !!r[e].isToC;
          })
          .sort();
        return Array.from(new Set(e));
      }
      function s() {
        var e = Object.keys(r)
          .filter(function (e) {
            return !r[e].isToC;
          })
          .sort();
        return Array.from(new Set(e));
      }
      function l(e) {
        return n(e).deployArea || "sgp";
      }
    },
    1292: function (e, t) {
      "use strict";
      var i =
        (this && this.__read) ||
        function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmGoogleConfig = void 0);
      var r = {
        in: ["UA-51415204-3", "UA-51415204-15", "UA-51415204-15"],
        id: ["UA-51415204-10", "", ""],
        ru: ["UA-51415204-29", "UA-109515030-6", "UA-109515030-6"],
        hk: ["UA-51415204-5", "UA-51415204-45", "UA-51415204-45"],
        tw: ["UA-51415204-4", "UA-51415204-19", "UA-51415204-19"],
        default: ["", "", ""],
      };
      function n(e) {
        var t = i(r[e] || r.default, 3);
        return { web: t[0], app: t[1], ios: t[2] };
      }
      var o = {
        hk: "GTM-NL4G49C",
        tw: "GTM-P23SD68",
        in: "GTM-PHF5K9",
        default: "GTM-N7BDPG6",
      };
      function a(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t ? t : o.default;
      }
      var c = { default: "6Le2lq4ZAAAAAICguqzsVnvy9ZTCNYzl3fZyJJ9Q" };
      function s(e) {
        return c[e] || c.default;
      }
      var l = {
        de: "G-JZS80SHDYY",
        es: "G-W09SQPPCRY",
        fr: "G-C8K2YQ2YSQ",
        id: "G-188XHR66L9",
        it: "G-LZ447Q99RL",
        jp: "G-3R908EE3W5",
        nl: "G-DLYDLES0MS",
        pl: "G-D7F26WKJKY",
        ru: "G-PX4M1TDQTY",
        tr: "G-DD38QMRSRB",
        uk: "G-21NFY24QP4",
        default: "",
      };
      function u(e) {
        return l[e] || l.default;
      }
      t.scmGoogleConfig = function (e) {
        return { ga: n(e), gtm: a(e), captcha: s(e), ga4: u(e) };
      };
    },
    152: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmAlternateConfig =
          t.scmBuildSiteConfig =
          t.scmBuildGlobalConfig =
          t.scmSiteDeployArea =
          t.scmBusinessSiteList =
          t.scmCustomerSiteList =
          t.scmSiteList =
          t.scmSiteLangList =
          t.scmSiteConfig =
          t.scmSiteLanguageList =
          t.scmUsefulLocale =
          t.scmLanguageConfig =
          t.scmLanguageIsRtl =
          t.scmLanguageList =
          t.scmStatConfig =
          t.scmGoogleConfig =
          t.scmCurrencyConfig =
          t.scmLiveChatConfig =
          t.scmConfig =
            void 0);
      var r = i(6556);
      Object.defineProperty(t, "scmConfig", {
        enumerable: !0,
        get: function () {
          return r.scmConfig;
        },
      }),
        Object.defineProperty(t, "scmLiveChatConfig", {
          enumerable: !0,
          get: function () {
            return r.scmLiveChatConfig;
          },
        });
      var n = i(2205);
      Object.defineProperty(t, "scmCurrencyConfig", {
        enumerable: !0,
        get: function () {
          return n.scmCurrencyConfig;
        },
      });
      var o = i(1292);
      Object.defineProperty(t, "scmGoogleConfig", {
        enumerable: !0,
        get: function () {
          return o.scmGoogleConfig;
        },
      });
      var a = i(1254);
      Object.defineProperty(t, "scmStatConfig", {
        enumerable: !0,
        get: function () {
          return a.scmStatConfig;
        },
      });
      var c = i(3364);
      Object.defineProperty(t, "scmLanguageList", {
        enumerable: !0,
        get: function () {
          return c.scmLanguageList;
        },
      }),
        Object.defineProperty(t, "scmLanguageIsRtl", {
          enumerable: !0,
          get: function () {
            return c.scmLanguageIsRtl;
          },
        }),
        Object.defineProperty(t, "scmLanguageConfig", {
          enumerable: !0,
          get: function () {
            return c.scmLanguageConfig;
          },
        }),
        Object.defineProperty(t, "scmUsefulLocale", {
          enumerable: !0,
          get: function () {
            return c.scmUsefulLocale;
          },
        }),
        Object.defineProperty(t, "scmSiteLanguageList", {
          enumerable: !0,
          get: function () {
            return c.scmSiteLanguageList;
          },
        });
      var s = i(6514);
      Object.defineProperty(t, "scmSiteConfig", {
        enumerable: !0,
        get: function () {
          return s.scmSiteConfig;
        },
      }),
        Object.defineProperty(t, "scmSiteLangList", {
          enumerable: !0,
          get: function () {
            return s.scmSiteLangList;
          },
        }),
        Object.defineProperty(t, "scmSiteList", {
          enumerable: !0,
          get: function () {
            return s.scmSiteList;
          },
        }),
        Object.defineProperty(t, "scmCustomerSiteList", {
          enumerable: !0,
          get: function () {
            return s.scmCustomerSiteList;
          },
        }),
        Object.defineProperty(t, "scmBusinessSiteList", {
          enumerable: !0,
          get: function () {
            return s.scmBusinessSiteList;
          },
        }),
        Object.defineProperty(t, "scmSiteDeployArea", {
          enumerable: !0,
          get: function () {
            return s.scmSiteDeployArea;
          },
        });
      var l = i(1567);
      Object.defineProperty(t, "scmBuildGlobalConfig", {
        enumerable: !0,
        get: function () {
          return l.scmBuildGlobalConfig;
        },
      }),
        Object.defineProperty(t, "scmBuildSiteConfig", {
          enumerable: !0,
          get: function () {
            return l.scmBuildSiteConfig;
          },
        }),
        Object.defineProperty(t, "scmAlternateConfig", {
          enumerable: !0,
          get: function () {
            return l.scmAlternateConfig;
          },
        });
    },
    3364: function (e, t, i) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, i = 1, r = arguments.length; i < r; i++)
                  for (var n in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }).apply(this, arguments);
          },
        n =
          (this && this.__read) ||
          function (e, t) {
            var i = "function" == typeof Symbol && e[Symbol.iterator];
            if (!i) return e;
            var r,
              n,
              o = i.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                a.push(r.value);
            } catch (c) {
              n = { error: c };
            } finally {
              try {
                r && !r.done && (i = o.return) && i.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return a;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmSiteLanguageList =
          t.scmUsefulLocale =
          t.scmLanguageConfig =
          t.scmLanguageIsRtl =
          t.scmLanguageList =
            void 0);
      var o = i(6514),
        a = {
          "af-ZA": {
            name: "Afrikaans (South Africa)",
            title: "Afrikaans",
            isRtl: !1,
          },
          "am-ET": { name: "Amharic", title: "አማርኛ", isRtl: !1 },
          "ar-001": {
            name: "Arabic (World)",
            title: "(العالم) العربية",
            isRtl: !0,
          },
          "ar-EG": {
            name: "Arabic (Egypt)",
            title: "العربية (مصر)",
            isRtl: !0,
          },
          "ar-MA": {
            name: "Arabic (Morocco)",
            title: "العربية (المغرب)",
            isRtl: !0,
          },
          "ar-SA": {
            name: "Arabic (Saudi Arabia)",
            title: "العربية (المملكة العربية السعودية)",
            isRtl: !0,
          },
          "be-BY": { name: "Belarusian", title: "Беларуская", isRtl: !1 },
          "bg-BG": { name: "Bulgarian", title: "Български", isRtl: !1 },
          "bn-BD": { name: "Bangla (Bangladesh)", title: "বাংলা", isRtl: !1 },
          "ca-ES": { name: "Catalan (Spain)", title: "Català", isRtl: !1 },
          "cs-CZ": { name: "Czech", title: "Čeština", isRtl: !1 },
          "da-DK": { name: "Danish (Denmark)", title: "Dansk", isRtl: !1 },
          "de-DE": { name: "German (Germany)", title: "Deutsch", isRtl: !1 },
          "dz-BT": { name: "Dzongkha", title: "རྫོང་ཁ་", isRtl: !1 },
          "el-GR": { name: "Greek (Greece)", title: "Ελληνικά", isRtl: !1 },
          "en-001": {
            name: "English (World)",
            title: "English (World)",
            isRtl: !1,
          },
          "en-BD": {
            name: "English (Bangladesh)",
            title: "English (Bangladesh)",
            isRtl: !1,
          },
          "en-GB": {
            name: "English (United Kingdom)",
            title: "English (United Kingdom)",
            isRtl: !1,
          },
          "en-IN": {
            name: "English (India)",
            title: "English (India)",
            isRtl: !1,
          },
          "en-LK": {
            name: "English (Sri Lanka)",
            title: "English (Sri Lanka)",
            isRtl: !1,
          },
          "en-MY": {
            name: "English (Malaysia)",
            title: "English (Malaysia)",
            isRtl: !1,
          },
          "en-NG": {
            name: "English (Nigeria)",
            title: "English (Nigeria)",
            isRtl: !1,
          },
          "en-NP": {
            name: "English (Nepal)",
            title: "English (Nepal)",
            isRtl: !1,
          },
          "en-PH": {
            name: "English (Philippines)",
            title: "English (Philippines)",
            isRtl: !1,
          },
          "en-PK": {
            name: "English (Pakistan)",
            title: "English (Pakistan)",
            isRtl: !1,
          },
          "en-SG": {
            name: "English (Singapore)",
            title: "English (Singapore)",
            isRtl: !1,
          },
          "en-US": {
            name: "English (United States)",
            title: "English (United States)",
            isRtl: !1,
          },
          "en-ZA": {
            name: "English (South Africa)",
            title: "English (South Africa)",
            isRtl: !1,
          },
          "es-419": {
            name: "Spanish (Latin America)",
            title: "Español (Latinoamérica)",
            isRtl: !1,
          },
          "es-CL": {
            name: "Spanish (Chile)",
            title: "Español (Chile)",
            isRtl: !1,
          },
          "es-ES": {
            name: "Spanish (Spain)",
            title: "Español (España)",
            isRtl: !1,
          },
          "es-MX": {
            name: "Spanish (Mexico)",
            title: "Español (México)",
            isRtl: !1,
          },
          "et-EE": { name: "Estonian", title: "Eesti", isRtl: !1 },
          "fa-IR": { name: "Persian (Iran)", title: "فارسی", isRtl: !0 },
          "fr-FR": {
            name: "French (France)",
            title: "Français (France)",
            isRtl: !1,
          },
          "fr-CA": {
            name: "French (Canada)",
            title: "Français (Canada)",
            isRtl: !1,
          },
          "fi-FI": { name: "Finnish", title: "Suomi", isRtl: !1 },
          "fil-PH": { name: "Filipino", title: "Filipino", isRtl: !1 },
          "ga-IE": { name: "Irish", title: "Gaeilge", isRtl: !1 },
          "ha-NG": { name: "Hausa (Nigeria)", title: "Hausa", isRtl: !0 },
          "he-IL": { name: "Hebrew", title: "עברית", isRtl: !0 },
          "hi-IN": { name: "Hindi", title: "हिन्दी", isRtl: !1 },
          "hu-HU": { name: "Hungarian", title: "Magyar", isRtl: !1 },
          "hy-AM": { name: "Armenian", title: "Հայերեն", isRtl: !1 },
          "id-ID": { name: "Indonesian", title: "Bahasa Indonesia", isRtl: !1 },
          "is-IS": { name: "Icelandic", title: "Íslenska", isRtl: !1 },
          "it-IT": { name: "Italian (Italy)", title: "Italiano", isRtl: !1 },
          "ja-JP": { name: "Japanese", title: "日本語", isRtl: !1 },
          "ka-GE": { name: "Georgian", title: "ქართული", isRtl: !1 },
          "km-KH": { name: "Khmer", title: "ភាសាខ្មែរ", isRtl: !1 },
          "kn-IN": { name: "Kannada", title: "ಕನ್ನಡ", isRtl: !1 },
          "ko-KR": { name: "Korean (South Korea)", title: "한국어", isRtl: !1 },
          "ky-KG": { name: "Kyrgyz", title: "кыргызча", isRtl: !1 },
          "lb-LU": {
            name: "Luxembourgish",
            title: "Lëtzebuergesch",
            isRtl: !1,
          },
          "lo-LA": { name: "Lao", title: "ພາສາລາວ", isRtl: !1 },
          "lt-LT": { name: "Lithuanian", title: "Lietuvių", isRtl: !1 },
          "lv-LV": { name: "Latvian", title: "Latviešu", isRtl: !1 },
          "ml-IN": { name: "Malayalam", title: "മലയാളം", isRtl: !1 },
          "mn-MN": { name: "Mongolian", title: "Монгол", isRtl: !1 },
          "ms-MY": {
            name: "Malay (Malaysia)",
            title: "Bahasa Melayu",
            isRtl: !1,
          },
          "mt-MT": { name: "Maltese", title: "Malti", isRtl: !1 },
          "my-MM": { name: "Burmese", title: "မြန်မာဘာသာ", isRtl: !1 },
          "nb-NO": {
            name: "Norwegian Bokmål (Norway)",
            title: "Norsk (bokmål)",
            isRtl: !1,
          },
          "ne-NP": { name: "Nepali (Nepal)", title: "नेपाली", isRtl: !1 },
          "nl-BE": {
            name: "Dutch (Belgium)",
            title: "Nederlands (België)",
            isRtl: !1,
          },
          "nl-NL": {
            name: "Dutch (Netherlands)",
            title: "Nederlands (Nederland)",
            isRtl: !1,
          },
          "nn-NO": {
            name: "Norwegian Nynorsk",
            title: "Norsk (nynorsk)",
            isRtl: !1,
          },
          "pl-PL": { name: "Polish", title: "Polski", isRtl: !1 },
          "pt-BR": {
            name: "Portuguese (Brazil)",
            title: "Português (Brasil)",
            isRtl: !1,
          },
          "pt-PT": {
            name: "Portuguese (Portugal)",
            title: "Português (Portugal)",
            isRtl: !1,
          },
          "ro-RO": { name: "Romanian (Romania)", title: "Română", isRtl: !1 },
          "ru-RU": { name: "Russian (Russia)", title: "Русский", isRtl: !1 },
          "rw-RW": { name: "Kinyarwanda", title: "Ikinyarwanda", isRtl: !1 },
          "si-LK": { name: "Sinhala", title: "සිංහල", isRtl: !1 },
          "sk-SK": { name: "Slovak", title: "Slovenčina", isRtl: !1 },
          "sl-SI": { name: "Slovenian", title: "Slovenščina", isRtl: !1 },
          "sq-AL": { name: "Albanian (Albania)", title: "Shqip", isRtl: !1 },
          "sr-RS": {
            name: "Serbian (Cyrillic, Serbia)",
            title: "Српски",
            isRtl: !1,
          },
          "sr-BA": {
            name: "Serbian (Latin, Bosnia & Herzegovina)",
            title: "Srpski (latinica)",
            isRtl: !1,
          },
          "sv-SE": { name: "Swedish (Sweden)", title: "Svenska", isRtl: !1 },
          "ta-IN": { name: "Tamil (India)", title: "தமிழ்", isRtl: !1 },
          "th-TH": { name: "Thai", title: "ภาษาไทย", isRtl: !1 },
          "ti-ER": { name: "Tigrinya (Eritrea)", title: "ትግርኛ", isRtl: !1 },
          "tr-TR": { name: "Turkish (Turkey)", title: "Türkçe", isRtl: !1 },
          "uk-UA": { name: "Ukrainian", title: "Українська", isRtl: !1 },
          "ur-PK": { name: "Urdu (Pakistan)", title: "اردو", isRtl: !0 },
          "vi-VN": { name: "Vietnamese", title: "Tiếng Việt", isRtl: !1 },
          "zh-CN": {
            name: "Chinese (Simplified, Mainland China)",
            title: "简体中文",
            isRtl: !1,
          },
          "zh-HK": {
            name: "Chinese (Traditional, Hong Kong)",
            title: "繁體中文（香港）",
            isRtl: !1,
          },
          "zh-TW": {
            name: "Chinese (Traditional, Taiwan)",
            title: "繁體中文（台灣）",
            isRtl: !1,
          },
          "zu-ZA": { name: "Zulu", title: "isiZulu", isRtl: !1 },
        };
      function c(e) {
        var t = s(e) || "en-US";
        return a[t];
      }
      function s(e) {
        if (!e) return "";
        var t = l();
        return t.includes(e)
          ? e
          : e.includes("-")
          ? s(n(e.split("-"), 1)[0])
          : t.filter(function (t) {
              return t.includes(e);
            })[0] || "";
      }
      function l() {
        return Object.keys(a);
      }
      (t.scmLanguageList = function () {
        return Object.keys(a).map(function (e) {
          return r({ code: e }, a[e]);
        });
      }),
        (t.scmLanguageIsRtl = function (e) {
          return !!c((0, o.scmSiteConfig)(e).lang).isRtl;
        }),
        (t.scmLanguageConfig = c),
        (t.scmUsefulLocale = s),
        (t.scmSiteLanguageList = l);
    },
    6556: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmLiveChatConfig = t.scmConfig = void 0);
      var r = i(152);
      function n(e, t) {
        var i;
        return null !== (i = e[(0, r.scmSiteDeployArea)(t)]) && void 0 !== i
          ? i
          : e.sgp;
      }
      function o(e, t) {
        var i;
        return null !== (i = e[t]) && void 0 !== i ? i : e.default;
      }
      (t.scmConfig = function (e) {
        var t = {
          wwwSiteV3: {
            idn: { pc: "//www.mi.co.id/" + e, m: "//mobile.mi.co.id/" + e },
            sgp: { pc: "//www.mi.com/" + e, m: "//mobile.mi.com/" + e },
          },
          wwwSite: {
            idn: { pc: "//v12.mi.co.id/" + e, m: "//v12.mi.co.id/" + e },
            sgp: { pc: "//www.mi.com/" + e, m: "//www.mi.com/" + e },
          },
          buySite: {
            ind: { pc: "//store.mi.com/" + e, m: "//m.store.mi.com/" + e },
            idn: { pc: "//buy.mi.co.id/" + e, m: "//m.buy.mi.co.id/" + e },
            rus: { pc: "//ru.buy.mi.com/" + e, m: "//ru.mbuy.mi.com/" + e },
            nld: { pc: "//ams.buy.mi.com/" + e, m: "//ams-m.buy.mi.com/" + e },
            sgp: { pc: "//buy.mi.com/" + e, m: "//m.buy.mi.com/" + e },
          },
          apiSite: {
            ind: "//in-api.buy.mi.com/" + e,
            rus: "//ru-api.buy.mi.com/" + e,
            idn: "//api.buy.mi.co.id/" + e,
            nld: "//ams-api.buy.mi.com/" + e,
            sgp: "//sgp-api.buy.mi.com/" + e,
          },
          opxApiSite: {
            ind: "//in-api.buy.mi.com/i18n_op/opx/" + e,
            rus: "//ru-api.buy.mi.com/i18n_op/opx/" + e,
            nld: "//ams-api.buy.mi.com/i18n_op/opx/" + e,
            sgp: "//sgp-api.buy.mi.com/i18n_op/opx/" + e,
          },
          apiIntraSite: {
            ind: "//in.api.b2c.srv",
            rus: "//ru.api.b2c.srv",
            nld: "//ams.api.b2c.srv",
            sgp: "//sgp.api.b2c.srv",
          },
          goSite: {
            ind: "//in-go.buy.mi.com/" + e,
            rus: "//ru-go.buy.mi.com/" + e,
            idn: "//go.buy.mi.co.id/" + e,
            nld: "//ams-go.buy.mi.com/" + e,
            sgp: "//go.buy.mi.com/" + e,
          },
          goD2sSite: {
            ind: "//in-d2s.buy.mi.com/" + e,
            rus: "//ru-d2s.buy.mi.com/" + e,
            nld: "//ams-d2s.buy.mi.com/" + e,
            sgp: "//d2s.buy.mi.com/" + e,
          },
          bigTapSite: {
            ind: "//in-tp.mi.com",
            idn: "//tp.mi.co.id",
            nld: "//ams-tp.mi.com",
            sgp: "//sgp01.tp.hd.mi.com",
          },
          hdSite: {
            ind: "//in-hd.c.mi.com/" + e,
            rus: "//ru-hd.c.mi.com/" + e,
            idn: "//hd.mi.co.id/" + e,
            nld: "//ams-hd.c.mi.com/" + e,
            sgp: "//hd.c.mi.com/" + e,
          },
          salesMiddleSite: { ind: "", sgp: "//sg-api.salesmiddle.b2c.srv" },
          uploadSite: {
            ind: "//in-upload.store.mi.com",
            rus: "//ru-upload.global.mi.com",
            idn: "//upload-global.mi.co.id",
            nld: "//ams-upload.global.mi.com",
            sgp: "//upload.global.mi.com",
          },
          kachiShopSite: { sgp: "//m.kachishop.com/" + e },
          eventBaseUrl: {
            ind: "//in.event.mi.com/in",
            rus: "//ru.event.mi.com/ru",
            idn: "//event.mi.co.id/id",
            sgp: "//event.mi.com/" + e,
          },
          seckillBaseUrl: {
            ind: "//in-fs.buy.mi.com/in",
            rus: "//ru-fs.buy.mi.com/ru",
            idn: "//fs.buy.mi.co.id/id",
            sgp: "//fs.buy.mi.com/" + e,
          },
        };
        return {
          wwwSiteV3: n(t.wwwSiteV3, e),
          wwwSite: n(t.wwwSite, e),
          buySite: n(t.buySite, e),
          apiSite: n(t.apiSite, e),
          opxApiSite: n(t.opxApiSite, e),
          apiIntraSite: n(t.apiIntraSite, e),
          goSite: n(t.goSite, e),
          goD2sSite: n(t.goD2sSite, e),
          bigTapSite: n(t.bigTapSite, e),
          hdSite: n(t.hdSite, e),
          salesMiddleSite: n(t.salesMiddleSite, e),
          uploadSite: n(t.uploadSite, e),
          kachiShopSite: n(t.kachiShopSite, e),
          eventBaseUrl: n(t.eventBaseUrl, e),
          seckillBaseUrl: n(t.seckillBaseUrl, e),
        };
      }),
        (t.scmLiveChatConfig = function (e) {
          var t = {
              de: "cc2a190d-824c-4a3e-9688-057769101233",
              eg: "cc2a190d-824c-4a3e-9688-057769101233",
              es: "cc2a190d-824c-4a3e-9688-057769101233",
              fr: "cc2a190d-824c-4a3e-9688-057769101233",
              it: "cc2a190d-824c-4a3e-9688-057769101233",
              nl: "cc2a190d-824c-4a3e-9688-057769101233",
              pl: "cc2a190d-824c-4a3e-9688-057769101233",
              uk: "cc2a190d-824c-4a3e-9688-057769101233",
              tr: "cc2a190d-824c-4a3e-9688-057769101233",
              default: "d76ce7ee-a2ca-4e94-b0c8-b9af8529d793",
            },
            i = {
              de: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              eg: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              es: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              fr: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              it: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              nl: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              pl: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              uk: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              tr: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              default:
                "https://unqd76ce7eea2ca4e94b0c8b9af8529d-crm5.omnichannelengagementhub.com",
            },
            r = {
              de: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              eg: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              es: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              fr: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              it: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              nl: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              pl: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              uk: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              tr: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              default:
                "https://oc-cdn-public-apj.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            };
          return {
            appId: o(
              {
                cl: "da1e10bd-3aa7-497a-9e75-74bc9f88d6c3",
                de: "33673207-ee4b-4d30-87c4-1af056f85f53",
                eg: "17d2184d-3402-4bc9-8a6e-a188f8f122c6",
                es: "08f0cad1-718d-4c34-b952-4fcfd08efac0",
                fr: "002d8974-4afd-40fe-b7a9-ab73c2ed353d",
                hk: "257800a1-aeca-462b-af4e-6c9bcd477626",
                id: "70804e77-13e1-420b-a642-c0a409689031",
                it: "c5fd6503-ad86-41ee-a462-6ea54315d87b",
                jp: "c0aae042-172c-4708-b350-5dc5f1a90cf9",
                mx: "c714a7ec-9bb7-43cb-a624-1fac3e734d20",
                my: "1c63f5ee-68d5-422d-a72a-2650d0ca88c1",
                nl: "14fb68c6-b41f-4339-a033-ad2c99d17cf5",
                pl: "e1c93004-229c-4ca6-a15b-432d17949668",
                ph: "c95fc61b-0426-4be1-a934-d6d363e9dbea",
                uk: "9c9dc144-01bc-4bb8-985e-bb2717880659",
                us: "7bac91e5-6a2d-43a5-a062-f3f267463b75",
                sg: "497ee690-6be0-4fa0-ae14-5be0ec7090be",
                tw: "ea01d257-74fe-43d3-aac4-8cd8b4e07258",
                th: "01a2f568-ab79-40bf-b3bb-820a5bd3f7aa",
                tr: "a86fe57a-5f9d-4ddf-a30c-d89356b9dd76",
                vn: "115db083-9fa6-48b3-9a15-c6ac4956eda8",
                default: "",
              },
              e
            ),
            orgId: o(t, e),
            orgUrl: o(i, e),
            scriptSrc: o(r, e),
          };
        });
    },
    2307: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmLiveChatConfig = t.scmConfig = void 0);
      var r = i(152);
      function n(e, t) {
        var i;
        return null !== (i = e[(0, r.scmSiteDeployArea)(t)]) && void 0 !== i
          ? i
          : e.sgp;
      }
      function o(e, t) {
        var i;
        return null !== (i = e[t]) && void 0 !== i ? i : e.default;
      }
      (t.scmConfig = function (e) {
        var t = {
          wwwSiteV3: {
            idn: { pc: "//www.mi.co.id/" + e, m: "//mobile.mi.co.id/" + e },
            sgp: { pc: "//www.mi.com/" + e, m: "//mobile.mi.com/" + e },
          },
          wwwSite: {
            idn: { pc: "//v12.mi.co.id/" + e, m: "//v12.mi.co.id/" + e },
            sgp: { pc: "//www.mi.com/" + e, m: "//www.mi.com/" + e },
          },
          buySite: {
            ind: { pc: "//store.mi.com/" + e, m: "//m.store.mi.com/" + e },
            idn: { pc: "//buy.mi.co.id/" + e, m: "//m.buy.mi.co.id/" + e },
            rus: { pc: "//ru.buy.mi.com/" + e, m: "//ru.mbuy.mi.com/" + e },
            nld: { pc: "//ams.buy.mi.com/" + e, m: "//ams-m.buy.mi.com/" + e },
            sgp: { pc: "//buy.mi.com/" + e, m: "//m.buy.mi.com/" + e },
          },
          apiSite: {
            ind: "//in-api.buy.mi.com/" + e,
            rus: "//ru-api.buy.mi.com/" + e,
            idn: "//api.buy.mi.co.id/" + e,
            nld: "//ams-api.buy.mi.com/" + e,
            sgp: "//sgp-api.buy.mi.com/" + e,
          },
          opxApiSite: {
            ind: "//in-api.buy.mi.com/i18n_op/opx/" + e,
            rus: "//ru-api.buy.mi.com/i18n_op/opx/" + e,
            nld: "//ams-api.buy.mi.com/i18n_op/opx/" + e,
            sgp: "//sgp-api.buy.mi.com/i18n_op/opx/" + e,
          },
          apiIntraSite: {
            ind: "//in.api.b2c.srv",
            rus: "//ru.api.b2c.srv",
            nld: "//ams.api.b2c.srv",
            sgp: "//sgp.api.b2c.srv",
          },
          goSite: {
            ind: "//in-go.buy.mi.com/" + e,
            rus: "//ru-go.buy.mi.com/" + e,
            idn: "//go.buy.mi.co.id/" + e,
            nld: "//ams-go.buy.mi.com/" + e,
            sgp: "//go.buy.mi.com/" + e,
          },
          goD2sSite: {
            ind: "//in-d2s.buy.mi.com/" + e,
            rus: "//ru-d2s.buy.mi.com/" + e,
            nld: "//ams-d2s.buy.mi.com/" + e,
            sgp: "//d2s.buy.mi.com/" + e,
          },
          bigTapSite: {
            ind: "//in-tp.mi.com",
            idn: "//tp.mi.co.id",
            nld: "//ams-tp.mi.com",
            sgp: "//sgp01.tp.hd.mi.com",
          },
          hdSite: {
            ind: "//in-hd.c.mi.com/" + e,
            rus: "//ru-hd.c.mi.com/" + e,
            idn: "//hd.mi.co.id/" + e,
            nld: "//ams-hd.c.mi.com/" + e,
            sgp: "//hd.c.mi.com/" + e,
          },
          salesMiddleSite: { ind: "", sgp: "//sg-api.salesmiddle.b2c.srv" },
          uploadSite: {
            ind: "//in-upload.store.mi.com",
            rus: "//ru-upload.global.mi.com",
            idn: "//upload-global.mi.co.id",
            nld: "//ams-upload.global.mi.com",
            sgp: "//upload.global.mi.com",
          },
          kachiShopSite: { sgp: "//m.kachishop.com/" + e },
          eventBaseUrl: {
            ind: "//in.event.mi.com/in",
            rus: "//ru.event.mi.com/ru",
            idn: "//event.mi.co.id/id",
            sgp: "//event.mi.com/" + e,
          },
          seckillBaseUrl: {
            ind: "//in-fs.buy.mi.com/in",
            rus: "//ru-fs.buy.mi.com/ru",
            idn: "//fs.buy.mi.co.id/id",
            sgp: "//fs.buy.mi.com/" + e,
          },
        };
        return {
          wwwSiteV3: n(t.wwwSiteV3, e),
          wwwSite: n(t.wwwSite, e),
          buySite: n(t.buySite, e),
          apiSite: n(t.apiSite, e),
          opxApiSite: n(t.opxApiSite, e),
          apiIntraSite: n(t.apiIntraSite, e),
          goSite: n(t.goSite, e),
          goD2sSite: n(t.goD2sSite, e),
          bigTapSite: n(t.bigTapSite, e),
          hdSite: n(t.hdSite, e),
          salesMiddleSite: n(t.salesMiddleSite, e),
          uploadSite: n(t.uploadSite, e),
          kachiShopSite: n(t.kachiShopSite, e),
          eventBaseUrl: n(t.eventBaseUrl, e),
          seckillBaseUrl: n(t.seckillBaseUrl, e),
        };
      }),
        (t.scmLiveChatConfig = function (e) {
          var t = {
              de: "cc2a190d-824c-4a3e-9688-057769101233",
              eg: "cc2a190d-824c-4a3e-9688-057769101233",
              es: "cc2a190d-824c-4a3e-9688-057769101233",
              fr: "cc2a190d-824c-4a3e-9688-057769101233",
              it: "cc2a190d-824c-4a3e-9688-057769101233",
              nl: "cc2a190d-824c-4a3e-9688-057769101233",
              pl: "cc2a190d-824c-4a3e-9688-057769101233",
              uk: "cc2a190d-824c-4a3e-9688-057769101233",
              tr: "cc2a190d-824c-4a3e-9688-057769101233",
              default: "d76ce7ee-a2ca-4e94-b0c8-b9af8529d793",
            },
            i = {
              de: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              eg: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              es: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              fr: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              it: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              nl: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              pl: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              uk: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              tr: "https://unqcc2a190d824c4a3e9688057769101-crm4.omnichannelengagementhub.com",
              default:
                "https://unqd76ce7eea2ca4e94b0c8b9af8529d-crm5.omnichannelengagementhub.com",
            },
            r = {
              de: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              eg: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              es: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              fr: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              it: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              nl: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              pl: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              uk: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              tr: "https://oc-cdn-public-gbr.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
              default:
                "https://oc-cdn-public-apj.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            };
          return {
            appId: o(
              {
                cl: "da1e10bd-3aa7-497a-9e75-74bc9f88d6c3",
                de: "33673207-ee4b-4d30-87c4-1af056f85f53",
                eg: "17d2184d-3402-4bc9-8a6e-a188f8f122c6",
                es: "08f0cad1-718d-4c34-b952-4fcfd08efac0",
                fr: "002d8974-4afd-40fe-b7a9-ab73c2ed353d",
                hk: "257800a1-aeca-462b-af4e-6c9bcd477626",
                id: "70804e77-13e1-420b-a642-c0a409689031",
                it: "c5fd6503-ad86-41ee-a462-6ea54315d87b",
                jp: "c0aae042-172c-4708-b350-5dc5f1a90cf9",
                mx: "c714a7ec-9bb7-43cb-a624-1fac3e734d20",
                my: "1c63f5ee-68d5-422d-a72a-2650d0ca88c1",
                nl: "14fb68c6-b41f-4339-a033-ad2c99d17cf5",
                pl: "e1c93004-229c-4ca6-a15b-432d17949668",
                ph: "c95fc61b-0426-4be1-a934-d6d363e9dbea",
                uk: "9c9dc144-01bc-4bb8-985e-bb2717880659",
                us: "7bac91e5-6a2d-43a5-a062-f3f267463b75",
                sg: "497ee690-6be0-4fa0-ae14-5be0ec7090be",
                tw: "ea01d257-74fe-43d3-aac4-8cd8b4e07258",
                th: "01a2f568-ab79-40bf-b3bb-820a5bd3f7aa",
                tr: "a86fe57a-5f9d-4ddf-a30c-d89356b9dd76",
                vn: "115db083-9fa6-48b3-9a15-c6ac4956eda8",
                default: "",
              },
              e
            ),
            orgId: o(t, e),
            orgUrl: o(i, e),
            scriptSrc: o(r, e),
          };
        });
    },
    6514: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmSiteDeployArea =
          t.scmBusinessSiteList =
          t.scmCustomerSiteList =
          t.scmSiteList =
          t.scmSiteLangList =
          t.scmSiteConfig =
            void 0);
      var i = {
        bd: {
          lang: "en-BD",
          phoneCode: "+880",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fbd%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseabd&_locale=en_US",
          capitalLongitude: 90.3492859,
          capitalLatitude: 23.7807777,
        },
        br: {
          lang: "pt-BR",
          dayjsLocal: "pt-br",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D [de] MMMM",
          dateTimeFormatAbbrMDay: "D [de] MMM",
          phoneCode: "+55",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fbr%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fbr%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_br_pc_pro&_locale=br_BR",
          capitalLongitude: -48.0073977,
          capitalLatitude: -15.7215857,
        },
        cl: {
          lang: "es-CL",
          dayjsLocal: "es",
          dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD-MM-YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD-MM-YYYY",
          dateTimeFormatDayWeek: "DD-MM-YYYY dddd",
          dateTimeFormatNumMDay: "DD-MM",
          dateTimeFormatLongMDay: "D [de] MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+56",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fcl%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fcl%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_i18n_cl&_locale=es_CL",
          capitalLongitude: -70.7699135,
          capitalLatitude: -33.4724228,
        },
        cn: {
          lang: "zh-CN",
          isToC: !0,
          dayjsLocal: "zh-cn",
          deployArea: "nld",
          dateTimeFormat: "YYYY/M/D HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY/M/D HH:mm",
          dateTimeFormatOnlyDate: "YYYY/M/D",
          dateTimeFormatDayWeek: "YYYY/M/D dddd",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: ["weibo", "clipboard"],
          phoneCode: "+86",
          capitalLongitude: 116.11728,
          capitalLatitude: 39.9390731,
        },
        cz: {
          lang: "cs-CZ",
          dayjsLocal: "cs",
          dateTimeFormat: "D. M. YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D. M. YYYY HH:mm",
          dateTimeFormatOnlyDate: "D. M. YYYY",
          dateTimeFormatDayWeek: "D. M. YYYY dddd",
          dateTimeFormatNumMDay: "D. M.",
          dateTimeFormatLongMDay: "D. MMMM",
          dateTimeFormatAbbrMDay: "D. M.",
          phoneCode: "+420",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=xvrg5s%2BPI9UR88HGRGRw7X4oTls%3D&sid=i18n_cz_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fbuy.mi.com%25252Fcz%25252Flogin%25252Fcallback%25253Fsign%25253DtfH4fB%2525252FbmcpQMEwbfWIN8FmkY58%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_cz_pc_pro%252526sid%25253Di18n_cz_pc_pro%2526sid%253Di18n_cz_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dxvrg5s%25252BPI9UR88HGRGRw7X4oTls%25253D&callback=https%3A%2F%2Fbuy.mi.com%2Fcz%2Flogin%2Fcallback%3Fsign%3DtfH4fB%252FbmcpQMEwbfWIN8FmkY58%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_cz_pc_pro%26sid%3Di18n_cz_pc_pro&_sign=jVlgYwGTpsWmTwRPMbLBtZShdlI%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=CZ",
          capitalLongitude: 14.4373941,
          capitalLatitude: 50.0945764,
        },
        de: {
          lang: "de-DE",
          isToC: !0,
          dayjsLocal: "de",
          deployArea: "nld",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM.",
          dateTimeFormatLongMDay: "DD. MMMM",
          dateTimeFormatAbbrMDay: "DD. MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+49",
          siteId: 308197,
          xmsLanguage: "DE_DE",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fde%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fde%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=i18n_ams_de_pc_pro&_locale=de_DE",
          capitalLongitude: 13.2846504,
          capitalLatitude: 52.5069704,
        },
        eg: {
          lang: "ar-EG",
          dayjsLocal: "ar",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+20",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Feg%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: 31.2234103,
          capitalLatitude: 30.0595534,
        },
        es: {
          lang: "es-ES",
          isToC: !0,
          dayjsLocal: "es",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "DD [de] MMMM",
          dateTimeFormatAbbrMDay: "DD MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+34",
          siteId: 308192,
          xmsLanguage: "ES_ES",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fes%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fes%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_es_pc_pro&_locale=es_ES",
          capitalLongitude: -3.8196192,
          capitalLatitude: 40.4381311,
        },
        fr: {
          lang: "fr-FR",
          langList: ["fr-FR", "en-GB"],
          isToC: !0,
          dayjsLocal: "fr",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+33",
          siteId: 308193,
          xmsLanguage: "FR_FR",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Ffr%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Ffr%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_fr_pc_pro&_locale=fr_FR",
          capitalLongitude: 2.2769956,
          capitalLatitude: 48.8589466,
        },
        gcc: {
          lang: "ar-001",
          dayjsLocal: "ar",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+971",
          siteCode: "ae",
          signUpUrl:
            "//account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fbuy.mi.com%2Fgcc%2Flogin%2Fcallback%3Fsign%3DQ%252FkV3UQGb2Fg8y2UU648M2VYTvM%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_gcc_pc_pro%26sid%3Di18n_gcc_pc_pro&sid=i18n_gcc_pc_pro&lsrp_checkPwd=true&_ssign=BgpZdNl6ww6j8ohCT5k2xp4rHts%3D",
          capitalLongitude: 46.5423452,
          capitalLatitude: 24.7255553,
        },
        global: {
          lang: "en-001",
          siteCode: "",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fglobal%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fglobal%252Fstore%252F%26sign%3DM2ZmMjQ1YjFiNzk0YjEzYThkM2RhMGFkOTRmMmI5Mzc2NWQyODdlNg%2C%2C&sid=mi_overseaen&_locale=en",
        },
        gr: {
          lang: "el-GR",
          dayjsLocal: "el",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+30",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=x4ZoQWmQ2fe8eM%2BxyUK1eQdzDhQ%3D&sid=i18n_gr_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fm.buy.mi.com%25252Fgr%25252Flogin%25252Fcallback%25253Fsign%25253DKBeaEG%2525252FND%2525252B8mWu0P1esfmDbGtsk%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_gr_pc_pro%252526sid%25253Di18n_gr_pc_pro%2526sid%253Di18n_gr_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dx4ZoQWmQ2fe8eM%25252BxyUK1eQdzDhQ%25253D&callback=https%3A%2F%2Fm.buy.mi.com%2Fgr%2Flogin%2Fcallback%3Fsign%3DKBeaEG%252FND%252B8mWu0P1esfmDbGtsk%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_gr_pc_pro%26sid%3Di18n_gr_pc_pro&_sign=hGCiB8bhLDjyQUkmXn7HmJ54Y80%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=GR",
          capitalLongitude: 23.70332,
          capitalLatitude: 37.9908997,
        },
        hk: {
          lang: "zh-HK",
          isToC: !0,
          dayjsLocal: "zh-hk",
          dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY-MM-DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY-MM-DD",
          dateTimeFormatDayWeek: "YYYY-MM-DD dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: [
            "facebook",
            "twitter",
            "line",
            "telegram",
            "weibo",
            "clipboard",
          ],
          phoneCode: "+852",
          siteId: 300004,
          regionId: 3385,
          xmsLanguage: "ZH_HK",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fhk%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fhk%252F%26sign%3DODRmNmYxMTIyMTc4OWE1YzFjNTVhNmFiOTA0ODJhOWNhZDk0NDk3NA%2C%2C&sid=mi_xiaomihk&_locale=zh_HK",
          capitalLongitude: 113.9876162,
          capitalLatitude: 22.3529913,
        },
        id: {
          lang: "id-ID",
          isToC: !0,
          dayjsLocal: "id",
          deployArea: "idn",
          dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD-MM-YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD-MM-YYYY",
          dateTimeFormatDayWeek: "DD-MM-YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "DD MMMM",
          dateTimeFormatAbbrMDay: "DD MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+62",
          siteId: 300512,
          regionId: 254391,
          xmsLanguage: "IN_ID",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fid%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fid%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_overseaid&_locale=in_ID",
          capitalLongitude: 106.7594781,
          capitalLatitude: -6.2295712,
        },
        in: {
          lang: "en-IN",
          isToC: !0,
          dayjsLocal: "en-in",
          deployArea: "ind",
          dateTimeFormat: "DD/MM/YYYY hh:mm:ss a",
          dateTimeFormatNoSecond: "DD/MM/YYYY hh:mm a",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+91",
          xmsLanguage: "EN_IN",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN",
          capitalLongitude: 77.1389453,
          capitalLatitude: 28.5274851,
        },
        it: {
          lang: "it-IT",
          isToC: !0,
          dayjsLocal: "it",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+39",
          siteId: 308194,
          xmsLanguage: "IT_IT",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fit%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_it_pc_pro&_locale=it_IT",
          capitalLongitude: 12.3959155,
          capitalLatitude: 41.9102415,
        },
        jp: {
          lang: "ja-JP",
          isToC: !0,
          dayjsLocal: "ja",
          dateTimeFormat: "YYYY/M/D (ddd) HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY/M/D HH:mm",
          dateTimeFormatOnlyDate: "YYYY/M/D",
          dateTimeFormatDayWeek: "YYYY/M/D (ddd)",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: ["facebook", "twitter", "line", "clipboard"],
          phoneCode: "+81",
          xmsLanguage: "JP_JP",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fjp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fjp%252F%26sign%3DMDk4MGM4MjY4Njg5MTcwOGNkNjBkMDEzNzQ4OWZlYjFiZTM1MGExNA%2C%2C&sid=i18n_jp_pc_pro&_locale=ja_JP",
          capitalLongitude: 139.6007847,
          capitalLatitude: 35.6684415,
        },
        kr: {
          lang: "ko-KR",
          dayjsLocal: "ko",
          dateTimeFormat: "YYYY.MM.DD. dddd A h:mm",
          dateTimeFormatNoSecond: "YYYY.MM.DD. A h:mm",
          dateTimeFormatOnlyDate: "YYYY.MM.DD.",
          dateTimeFormatDayWeek: "YYYY.MM.DD. dddd",
          dateTimeFormatNumMDay: "M. D.",
          dateTimeFormatLongMDay: "M월 D일",
          dateTimeFormatAbbrMDay: "M월 D일",
          phoneCode: "+82",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fit%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseait&_locale=kr_KR",
          capitalLongitude: 121.7269017,
          capitalLatitude: 37.955773,
        },
        lk: {
          lang: "en-LK",
          phoneCode: "+94",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Flk%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Flk%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_oversealk&_locale=lk_LK",
          capitalLongitude: 79.8211861,
          capitalLatitude: 6.9219226,
        },
        ma: {
          lang: "ar-MA",
          dayjsLocal: "ar-ma",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+212",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=x4ZoQWmQ2fe8eM%2BxyUK1eQdzDhQ%3D&sid=i18n_ma_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fm.buy.mi.com%25252Fgr%25252Flogin%25252Fcallback%25253Fsign%25253DKBeaEG%2525252FND%2525252B8mWu0P1esfmDbGtsk%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_gr_pc_pro%252526sid%25253Di18n_ma_pc_pro%2526sid%253Di18n_gr_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dx4ZoQWmQ2fe8eM%25252BxyUK1eQdzDhQ%25253D&callback=https%3A%2F%2Fm.buy.mi.com%2Fgr%2Flogin%2Fcallback%3Fsign%3DKBeaEG%252FND%252B8mWu0P1esfmDbGtsk%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_ma_pc_pro%26sid%3Di18n_ma_pc_pro&_sign=hGCiB8bhLDjyQUkmXn7HmJ54Y80%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=MA",
          capitalLongitude: -6.8922822,
          capitalLatitude: 33.9692851,
        },
        mx: {
          lang: "es-MX",
          dayjsLocal: "es-mx",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D [de] MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+52",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fmx%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: -99.2836966,
          capitalLatitude: 19.3910038,
        },
        my: {
          lang: "en-MY",
          dayjsLocal: "en-gb",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+60",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fmy%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fmy%252F%26sign%3DZjc2NTAzMjRjYTkxYzVmNjk5OTIzNjc4NWQ0OGRlYTY4ZTc5NGQzZA%2C%2C&sid=mi_overseamy&_locale=en_MY",
          capitalLongitude: 101.6169495,
          capitalLatitude: 3.138675,
        },
        ng: {
          lang: "en-NG",
          dayjsLocal: "en-gb",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+234",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fng%2Flogin%2Fcallback%3Fsign%3DJMDxUD1yDV71ZVCg3Mjp1OMh6Ro%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_ng_pc_pro%26sid%3Di18n_ng_pc_pro&sid=i18n_ng_pc_pro&lsrp_checkPwd=true&_ssign=0TXvmbSpoc%2BFaM0xjNBensLiUWo%3D",
          capitalLongitude: 6.090156,
          capitalLatitude: 8.9592153,
        },
        nl: {
          lang: "nl-NL",
          isToC: !0,
          dayjsLocal: "nl",
          deployArea: "nld",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "D-M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+316",
          siteId: 308198,
          xmsLanguage: "NL_NL",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fnl%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnl%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_nl_pc_pro&_locale=nl_NL",
          capitalLongitude: 4.8339211,
          capitalLatitude: 52.3547498,
        },
        np: {
          lang: "en-NP",
          phoneCode: "+977",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fnp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnp%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseanp&_locale=np_NP",
          capitalLongitude: 85.2911134,
          capitalLatitude: 27.7090319,
        },
        ph: {
          lang: "en-PH",
          phoneCode: "+63",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fph%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fph%252Fsign%3DNjQxYzgwYmJhYjQwMjkyOWI1M2NmYjg1ZDY3ZTk4NDA5MzA1Njc2Mw%2C%2C&sid=mi_overseaph&_locale=en_PH",
          capitalLongitude: 120.9445404,
          capitalLatitude: 14.5965788,
        },
        pk: {
          lang: "en-PK",
          dayjsLocal: "en-gb",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+92",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpk%2Flogin%2Fcallback%3Fsign%3DYlfWc79ekc%252B%252FGft3ZLKsxFhJRlI%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_pk_pc_pro%26sid%3Di18n_pk_pc_pro&amp;sid=i18n_pk_pc_pro&amp;lsrp_checkPwd=true&amp;_ssign=v5QFRsb2k8OFna9Qa873Ej3H52o%3D",
          capitalLongitude: 72.9460249,
          capitalLatitude: 33.6163232,
        },
        pl: {
          lang: "pl-PL",
          isToC: !0,
          dayjsLocal: "pl",
          deployArea: "nld",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+48",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpl%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fpl%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_oversearpl&_locale=pl_PL",
          capitalLongitude: 20.9211128,
          capitalLatitude: 52.2330653,
        },
        ru: {
          lang: "ru-RU",
          isToC: !0,
          dayjsLocal: "ru",
          deployArea: "rus",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "vk",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+7",
          xmsLanguage: "RU_RU",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fru%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fru%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_oversearu&_locale=ru_RU",
          capitalLongitude: 36.8251435,
          capitalLatitude: 55.5815245,
        },
        sa: {
          lang: "ar-SA",
          dayjsLocal: "ar-sa",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+966",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fsa%2Flogin%2Fcallback%3Fsign%3DZysf5eQ0hyneKbB69nIJ564x9%252FQ%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_sa_pc_pro%26sid%3Di18n_sa_pc_pro&sid=i18n_sa_pc_pro&lsrp_checkPwd=true&_ssign=1fABrIKyugzi39wOCjYWd4VM7VQ%3D",
          capitalLongitude: 46.5423452,
          capitalLatitude: 24.7255553,
        },
        se: {
          lang: "sv-SE",
          dayjsLocal: "sv",
          dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY-MM-DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY-MM-DD",
          dateTimeFormatDayWeek: "YYYY-MM-DD dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+46",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https://buy.mi.com/se/login/callback?followup=https%3A%2F%2Fwww.mi.com%2Fse%2F&sign=MDk4MGM4MjY4Njg5MTcwOGNkNjBkMDEzNzQ4OWZlYjFiZTM1MGExNA,,&sid=i18n_se_pc_pro&_locale=se_SE",
          capitalLongitude: 17.841972,
          capitalLatitude: 59.326242,
        },
        sg: {
          lang: "en-SG",
          dayjsLocal: "en-sg",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+65",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fsg%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fsg%252F%26sign%3DMDk4MGM4MjY4Njg5MTcwOGNkNjBkMDEzNzQ4OWZlYjFiZTM1MGExNA%2C%2C&sid=mi_overseasg&_locale=en_SG",
          capitalLongitude: 103.7540049,
          capitalLatitude: 1.3439166,
        },
        th: {
          lang: "th-TH",
          dayjsLocal: "th",
          dateTimeFormat: "D/M/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "D/M/YYYY HH:mm",
          dateTimeFormatOnlyDate: "D/M/YYYY",
          dateTimeFormatDayWeek: "D/M/YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+66",
          siteId: 300022,
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fth%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: 100.4930267,
          capitalLatitude: 13.7248936,
        },
        tr: {
          lang: "tr-TR",
          isToC: !0,
          dayjsLocal: "tr",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "D/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: ["facebook", "twitter", "clipboard"],
          phoneCode: "+90",
          xmsLanguage: "",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Ftr%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fcl%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_i18n_tr&_locale=tr_TR",
          capitalLongitude: 32.6226822,
          capitalLatitude: 39.9035557,
        },
        tw: {
          lang: "zh-TW",
          isToC: !0,
          dayjsLocal: "zh-tw",
          dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY-MM-DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY-MM-DD",
          dateTimeFormatDayWeek: "YYYY-MM-DD dddd",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "M月D日",
          dateTimeFormatAbbrMDay: "M月D日",
          shareSocialList: [
            "facebook",
            "twitter",
            "line",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+886",
          siteId: 300008,
          xmsLanguage: "ZH_TW",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Ftw%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Ftw%252F%26sign%3DM2NhMTUwMTU5MGM2YzZiM2Q4YjMyNzZmOWMyZTFjMWNiYzYyMGEwOQ%2C%2C&sid=mi_xiaomitw&_locale=zh_TW",
          capitalLongitude: 121.3662943,
          capitalLatitude: 25.0174719,
        },
        ua: {
          lang: "uk-UA",
          dayjsLocal: "uk",
          dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD.MM.YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD.MM.YYYY",
          dateTimeFormatDayWeek: "DD.MM.YYYY dddd",
          dateTimeFormatNumMDay: "DD.MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+380",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fhd.c.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fua%26sign%3DNTM4NWY3ZDgyNzVlOGZlYjdlNTZkZTdhNjM0YzM0MTEzMTEwMjIzNQ%2C%2C&sid=mi_event_prod&_locale=en_US",
          capitalLongitude: 30.392609,
          capitalLatitude: 50.4021702,
        },
        uk: {
          lang: "en-GB",
          isToC: !0,
          dayjsLocal: "en-gb",
          deployArea: "nld",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/MM",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          shareSocialList: [
            "facebook",
            "twitter",
            "whatsapp",
            "telegram",
            "clipboard",
          ],
          phoneCode: "+44",
          siteCode: "gb",
          xmsLanguage: "EN_US",
          signUpUrl:
            "//global.account.xiaomi.com/pass/register?callback=https%3A%2F%2Fams.buy.mi.com%2Fuk%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fuk%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=i18n_ams_uk_pc_pro&_locale=en_GB",
          capitalLongitude: -0.2416801,
          capitalLatitude: 51.5287718,
        },
        us: {
          lang: "en-US",
          phoneCode: "+1",
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fus%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fus%26sign%3DZmQ0MWM5ZWQ4N2IyNjc5MjA3NWViN2U4NTY0ODNmYTI2NDZiNWI0Mg%2C%2C&sid=mi_oversea_us&_locale=en_US",
          capitalLongitude: -77.0846156,
          capitalLatitude: 38.8938672,
        },
        vn: {
          lang: "vi-VN",
          dayjsLocal: "vi",
          dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "DD/MM/YYYY HH:mm",
          dateTimeFormatOnlyDate: "DD/MM/YYYY",
          dateTimeFormatDayWeek: "DD/MM/YYYY dddd",
          dateTimeFormatNumMDay: "DD/M",
          dateTimeFormatLongMDay: "D MMMM",
          dateTimeFormatAbbrMDay: "D MMM",
          phoneCode: "+84",
          siteId: 300027,
          signUpUrl:
            "//account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fvn%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fvn%26sign%3DNDAxZTZkNzkxZDA0OWIwYWY2MDBmMTRkZTE4MDU3NzU4YzkxYjM2Zg%2C%2C&sid=mi_overseavn&_locale=vi_VN",
          capitalLongitude: 105.8194541,
          capitalLatitude: 21.0227788,
        },
        za: {
          lang: "en-ZA",
          dayjsLocal: "en-gb",
          dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
          dateTimeFormatNoSecond: "YYYY/MM/DD HH:mm",
          dateTimeFormatOnlyDate: "YYYY/MM/DD",
          dateTimeFormatDayWeek: "YYYY/MM/DD dddd",
          dateTimeFormatNumMDay: "MM/DD",
          dateTimeFormatLongMDay: "DD MMMM",
          dateTimeFormatAbbrMDay: "DD MMM",
          phoneCode: "+27",
          signUpUrl:
            "//global.account.xiaomi.com/fe/service/register?lsrp_checkPwd=true&_ssign=x4ZoQWmQ2fe8eM%2BxyUK1eQdzDhQ%3D&sid=i18n_za_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fm.buy.mi.com%25252Fgr%25252Flogin%25252Fcallback%25253Fsign%25253DKBeaEG%2525252FND%2525252B8mWu0P1esfmDbGtsk%2525253D%252526followup%25253Dhttps%2525253A%2525252F%2525252Fpassport.keytool.pt.xiaomi.com%2525252FssoLoginTest%2525253Fsid%2525253Di18n_za_pc_pro%252526sid%25253Di18n_za_pc_pro%2526sid%253Di18n_za_pc_pro%2526lsrp_checkPwd%253Dtrue%2526_ssign%253Dx4ZoQWmQ2fe8eM%25252BxyUK1eQdzDhQ%25253D&callback=https%3A%2F%2Fm.buy.mi.com%2Fgr%2Flogin%2Fcallback%3Fsign%3DKBeaEG%252FND%252B8mWu0P1esfmDbGtsk%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_za_pc_pro%26sid%3Di18n_za_pc_pro&_sign=hGCiB8bhLDjyQUkmXn7HmJ54Y80%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=ZA",
          capitalLongitude: 28.0578676,
          capitalLatitude: -25.7582737,
        },
      };
      function r(e) {
        var t = {
          lang: "en-US",
          langList: [],
          isToC: !1,
          dayjsLocal: "en",
          deployArea: "sgp",
          dateTimeFormat: "MM/DD/YYYY HH:mm:ss",
          dateTimeFormatNoSecond: "MM/DD/YYYY HH:mm",
          dateTimeFormatOnlyDate: "MM/DD/YYYY",
          dateTimeFormatDayWeek: "MM/DD/YYYY dddd",
          dateTimeFormatNumMDay: "M/D",
          dateTimeFormatLongMDay: "MMMM D",
          dateTimeFormatAbbrMDay: "MMM D",
          shareSocialList: ["facebook", "twitter", "clipboard"],
          phoneCode: "+1",
          siteCode: e,
          siteId: 0,
          regionId: 0,
          xmsLanguage: "",
          signUpUrl: "",
          capitalLongitude: 103.7540049,
          capitalLatitude: 1.3439166,
        };
        return Object.assign(t, i[e] || {});
      }
      (t.scmSiteConfig = r),
        (t.scmSiteLangList = function () {
          var e = Object.keys(i)
            .map(function (e) {
              return i[e].lang || "";
            })
            .filter(function (e) {
              return !!e;
            })
            .sort();
          return Array.from(new Set(e));
        }),
        (t.scmSiteList = function () {
          return Object.keys(i).sort();
        }),
        (t.scmCustomerSiteList = function () {
          var e = Object.keys(i)
            .filter(function (e) {
              return !!i[e].isToC;
            })
            .sort();
          return Array.from(new Set(e));
        }),
        (t.scmBusinessSiteList = function () {
          var e = Object.keys(i)
            .filter(function (e) {
              return !i[e].isToC;
            })
            .sort();
          return Array.from(new Set(e));
        }),
        (t.scmSiteDeployArea = function (e) {
          return r(e).deployArea || "sgp";
        });
    },
    1254: function (e, t) {
      "use strict";
      var i =
        (this && this.__read) ||
        function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scmStatConfig = void 0);
      var r = {
          in: [108, 124, 124],
          id: [109, 128, 128],
          de: [710, 592, 592],
          nl: [579, 591, 591],
          es: [138, 605, 605],
          fr: [571, 573, 573],
          it: [524, 589, 589],
          uk: [577, 590, 590],
          ru: [132, 587, 587],
          hk: [103, 604, 604],
          tw: [104, 127, 127],
          default: [0, 0, 0],
        },
        n = { default: { APP_ID: "2882303761517399893", PRO_ID: "16" } },
        o = {
          es: "high",
          fr: "high",
          it: "high",
          uk: "high",
          de: "high",
          pl: "high",
          se: "high",
          global: "high",
          tr: "high",
          nl: "high",
          gr: "high",
          default: "low",
        };
      function a(e) {
        var t = i(r[e] || r.default, 3);
        return { web: t[0], app: t[1], ios: t[2] };
      }
      function c(e) {
        return n[e] || n.default;
      }
      function s(e) {
        return o[e] || o.default;
      }
      function l(e) {
        return "high" !== o[e] ? "0,1,2,3:" : "0:";
      }
      function u(e) {
        return "id" === e ? ".mi.co.id" : ".mi.com";
      }
      t.scmStatConfig = function (e) {
        return {
          domainId: a(e),
          oneTrack: c(e),
          cookieDomain: u(e),
          cookieDefaultOnCat: l(e),
          cookiePolicyLevel: s(e),
        };
      };
    },
    2276: function () {
      !(function (e) {
        "use strict";
        e.console || (e.console = {});
        for (
          var t,
            i,
            r = e.console,
            n = function () {},
            o = ["memory"],
            a =
              "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(
                ","
              );
          (t = o.pop());

        )
          r[t] || (r[t] = {});
        for (; (i = a.pop()); ) r[i] || (r[i] = n);
      })("undefined" == typeof window ? this : window);
    },
    6489: (e, t) => {
      "use strict";
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (t.parse = function (e, t) {
        if ("string" != typeof e)
          throw new TypeError("argument str must be a string");
        for (
          var r = {}, o = t || {}, c = e.split(n), s = o.decode || i, l = 0;
          l < c.length;
          l++
        ) {
          var u = c[l],
            d = u.indexOf("=");
          if (!(d < 0)) {
            var m = u.substr(0, d).trim(),
              p = u.substr(++d, u.length).trim();
            '"' == p[0] && (p = p.slice(1, -1)),
              null == r[m] && (r[m] = a(p, s));
          }
        }
        return r;
      }),
        (t.serialize = function (e, t, i) {
          var n = i || {},
            a = n.encode || r;
          if ("function" != typeof a)
            throw new TypeError("option encode is invalid");
          if (!o.test(e)) throw new TypeError("argument name is invalid");
          var c = a(t);
          if (c && !o.test(c)) throw new TypeError("argument val is invalid");
          var s = e + "=" + c;
          if (null != n.maxAge) {
            var l = n.maxAge - 0;
            if (isNaN(l)) throw new Error("maxAge should be a Number");
            s += "; Max-Age=" + Math.floor(l);
          }
          if (n.domain) {
            if (!o.test(n.domain))
              throw new TypeError("option domain is invalid");
            s += "; Domain=" + n.domain;
          }
          if (n.path) {
            if (!o.test(n.path)) throw new TypeError("option path is invalid");
            s += "; Path=" + n.path;
          }
          if (n.expires) {
            if ("function" != typeof n.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            s += "; Expires=" + n.expires.toUTCString();
          }
          n.httpOnly && (s += "; HttpOnly");
          n.secure && (s += "; Secure");
          if (n.sameSite) {
            switch (
              "string" == typeof n.sameSite
                ? n.sameSite.toLowerCase()
                : n.sameSite
            ) {
              case !0:
                s += "; SameSite=Strict";
                break;
              case "lax":
                s += "; SameSite=Lax";
                break;
              case "strict":
                s += "; SameSite=Strict";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return s;
        });
      var i = decodeURIComponent,
        r = encodeURIComponent,
        n = /; */,
        o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function a(e, t) {
        try {
          return t(e);
        } catch (i) {
          return e;
        }
      }
    },
    2988: (e, t, i) => {
      var r = i(1755),
        n = i(6665).each;
      function o(e, t) {
        (this.query = e),
          (this.isUnconditional = t),
          (this.handlers = []),
          (this.mql = window.matchMedia(e));
        var i = this;
        (this.listener = function (e) {
          (i.mql = e.currentTarget || e), i.assess();
        }),
          this.mql.addListener(this.listener);
      }
      (o.prototype = {
        constuctor: o,
        addHandler: function (e) {
          var t = new r(e);
          this.handlers.push(t), this.matches() && t.on();
        },
        removeHandler: function (e) {
          var t = this.handlers;
          n(t, function (i, r) {
            if (i.equals(e)) return i.destroy(), !t.splice(r, 1);
          });
        },
        matches: function () {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function () {
          n(this.handlers, function (e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function () {
          var e = this.matches() ? "on" : "off";
          n(this.handlers, function (t) {
            t[e]();
          });
        },
      }),
        (e.exports = o);
    },
    8177: (e, t, i) => {
      var r = i(2988),
        n = i(6665),
        o = n.each,
        a = n.isFunction,
        c = n.isArray;
      function s() {
        if (!window.matchMedia)
          throw new Error(
            "matchMedia not present, legacy browsers require a polyfill"
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia("only all").matches);
      }
      (s.prototype = {
        constructor: s,
        register: function (e, t, i) {
          var n = this.queries,
            s = i && this.browserIsIncapable;
          return (
            n[e] || (n[e] = new r(e, s)),
            a(t) && (t = { match: t }),
            c(t) || (t = [t]),
            o(t, function (t) {
              a(t) && (t = { match: t }), n[e].addHandler(t);
            }),
            this
          );
        },
        unregister: function (e, t) {
          var i = this.queries[e];
          return (
            i && (t ? i.removeHandler(t) : (i.clear(), delete this.queries[e])),
            this
          );
        },
      }),
        (e.exports = s);
    },
    1755: (e) => {
      function t(e) {
        (this.options = e), !e.deferSetup && this.setup();
      }
      (t.prototype = {
        constructor: t,
        setup: function () {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function () {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function () {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function () {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function (e) {
          return this.options === e || this.options.match === e;
        },
      }),
        (e.exports = t);
    },
    6665: (e) => {
      e.exports = {
        isFunction: function (e) {
          return "function" == typeof e;
        },
        isArray: function (e) {
          return "[object Array]" === Object.prototype.toString.apply(e);
        },
        each: function (e, t) {
          for (var i = 0, r = e.length; i < r && !1 !== t(e[i], i); i++);
        },
      };
    },
    4974: (e, t, i) => {
      var r = i(8177);
      e.exports = new r();
    },
    5573: (e) => {
      "use strict";
      /*!
       * escape-html
       * Copyright(c) 2012-2013 TJ Holowaychuk
       * Copyright(c) 2015 Andreas Lubbe
       * Copyright(c) 2015 Tiancheng "Timothy" Gu
       * MIT Licensed
       */ var t = /["'&<>]/;
      e.exports = function (e) {
        var i,
          r = "" + e,
          n = t.exec(r);
        if (!n) return r;
        var o = "",
          a = 0,
          c = 0;
        for (a = n.index; a < r.length; a++) {
          switch (r.charCodeAt(a)) {
            case 34:
              i = "&quot;";
              break;
            case 38:
              i = "&amp;";
              break;
            case 39:
              i = "&#39;";
              break;
            case 60:
              i = "&lt;";
              break;
            case 62:
              i = "&gt;";
              break;
            default:
              continue;
          }
          c !== a && (o += r.substring(c, a)), (c = a + 1), (o += i);
        }
        return c !== a ? o + r.substring(c, a) : o;
      };
    },
    8875: (e, t, i) => {
      var r;
      /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ !(function () {
        "use strict";
        var n = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          o = {
            canUseDOM: n,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners:
              n && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: n && !!window.screen,
          };
        void 0 ===
          (r = function () {
            return o;
          }.call(t, i, t, e)) || (e.exports = r);
      })();
    },
    6554: function (e, t) {
      var i, r, n;
      (r = [t, e]),
        void 0 ===
          (n =
            "function" ==
            typeof (i = function (e, t) {
              "use strict";
              var i = {
                timeout: 5e3,
                jsonpCallback: "callback",
                jsonpCallbackFunction: null,
              };
              function r() {
                return (
                  "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
                );
              }
              function n(e) {
                try {
                  delete window[e];
                } catch (t) {
                  window[e] = void 0;
                }
              }
              function o(e) {
                var t = document.getElementById(e);
                t && document.getElementsByTagName("head")[0].removeChild(t);
              }
              function a(e) {
                var t =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1],
                  a = e,
                  c = t.timeout || i.timeout,
                  s = t.jsonpCallback || i.jsonpCallback,
                  l = void 0;
                return new Promise(function (i, u) {
                  var d = t.jsonpCallbackFunction || r(),
                    m = s + "_" + d;
                  (window[d] = function (e) {
                    i({
                      ok: !0,
                      json: function () {
                        return Promise.resolve(e);
                      },
                    }),
                      l && clearTimeout(l),
                      o(m),
                      n(d);
                  }),
                    (a += -1 === a.indexOf("?") ? "?" : "&");
                  var p = document.createElement("script");
                  p.setAttribute("src", "" + a + s + "=" + d),
                    t.charset && p.setAttribute("charset", t.charset),
                    (p.id = m),
                    document.getElementsByTagName("head")[0].appendChild(p),
                    (l = setTimeout(function () {
                      u(new Error("JSONP request to " + e + " timed out")),
                        n(d),
                        o(m),
                        (window[d] = function () {
                          n(d);
                        });
                    }, c)),
                    (p.onerror = function () {
                      u(new Error("JSONP request to " + e + " failed")),
                        n(d),
                        o(m),
                        l && clearTimeout(l);
                    });
                });
              }
              t.exports = a;
            })
              ? i.apply(t, r)
              : i) || (e.exports = n);
    },
    7531: (e, t, i) => {
      "use strict";
      i.d(t, {
        lX: () => w,
        q_: () => T,
        ob: () => p,
        PP: () => F,
        Ep: () => m,
      });
      var r = i(2122);
      function n(e) {
        return "/" === e.charAt(0);
      }
      function o(e, t) {
        for (var i = t, r = i + 1, n = e.length; r < n; i += 1, r += 1)
          e[i] = e[r];
        e.pop();
      }
      const a = function (e, t) {
        void 0 === t && (t = "");
        var i,
          r = (e && e.split("/")) || [],
          a = (t && t.split("/")) || [],
          c = e && n(e),
          s = t && n(t),
          l = c || s;
        if (
          (e && n(e) ? (a = r) : r.length && (a.pop(), (a = a.concat(r))),
          !a.length)
        )
          return "/";
        if (a.length) {
          var u = a[a.length - 1];
          i = "." === u || ".." === u || "" === u;
        } else i = !1;
        for (var d = 0, m = a.length; m >= 0; m--) {
          var p = a[m];
          "." === p
            ? o(a, m)
            : ".." === p
            ? (o(a, m), d++)
            : d && (o(a, m), d--);
        }
        if (!l) for (; d--; d) a.unshift("..");
        !l || "" === a[0] || (a[0] && n(a[0])) || a.unshift("");
        var f = a.join("/");
        return i && "/" !== f.substr(-1) && (f += "/"), f;
      };
      var c = i(2177);
      function s(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function l(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function u(e, t) {
        return (function (e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== "/?#".indexOf(e.charAt(t.length))
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function d(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function m(e) {
        var t = e.pathname,
          i = e.search,
          r = e.hash,
          n = t || "/";
        return (
          i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i),
          r && "#" !== r && (n += "#" === r.charAt(0) ? r : "#" + r),
          n
        );
      }
      function p(e, t, i, n) {
        var o;
        "string" == typeof e
          ? ((o = (function (e) {
              var t = e || "/",
                i = "",
                r = "",
                n = t.indexOf("#");
              -1 !== n && ((r = t.substr(n)), (t = t.substr(0, n)));
              var o = t.indexOf("?");
              return (
                -1 !== o && ((i = t.substr(o)), (t = t.substr(0, o))),
                {
                  pathname: t,
                  search: "?" === i ? "" : i,
                  hash: "#" === r ? "" : r,
                }
              );
            })(e)).state = t)
          : (void 0 === (o = (0, r.Z)({}, e)).pathname && (o.pathname = ""),
            o.search
              ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
              : (o.search = ""),
            o.hash
              ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
              : (o.hash = ""),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (c) {
          throw c instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : c;
        }
        return (
          i && (o.key = i),
          n
            ? o.pathname
              ? "/" !== o.pathname.charAt(0) &&
                (o.pathname = a(o.pathname, n.pathname))
              : (o.pathname = n.pathname)
            : o.pathname || (o.pathname = "/"),
          o
        );
      }
      function f() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, i, r, n) {
            if (null != e) {
              var o = "function" == typeof e ? e(t, i) : e;
              "string" == typeof o
                ? "function" == typeof r
                  ? r(o, n)
                  : n(!0)
                : n(!1 !== o);
            } else n(!0);
          },
          appendListener: function (e) {
            var i = !0;
            function r() {
              i && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (i = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
              i[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, i);
            });
          },
        };
      }
      var h = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function y(e, t) {
        t(window.confirm(e));
      }
      var g = "popstate",
        b = "hashchange";
      function v() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function w(e) {
        void 0 === e && (e = {}), h || (0, c.Z)(!1);
        var t,
          i = window.history,
          n =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          a = e,
          l = a.forceRefresh,
          w = void 0 !== l && l,
          D = a.getUserConfirmation,
          M = void 0 === D ? y : D,
          S = a.keyLength,
          x = void 0 === S ? 6 : S,
          _ = e.basename ? d(s(e.basename)) : "";
        function T(e) {
          var t = e || {},
            i = t.key,
            r = t.state,
            n = window.location,
            o = n.pathname + n.search + n.hash;
          return _ && (o = u(o, _)), p(o, r, i);
        }
        function N() {
          return Math.random().toString(36).substr(2, x);
        }
        var F = f();
        function k(e) {
          (0, r.Z)(U, e),
            (U.length = i.length),
            F.notifyListeners(U.location, U.action);
        }
        function C(e) {
          (function (e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(e) || O(T(e.state));
        }
        function E() {
          O(T(v()));
        }
        var Y = !1;
        function O(e) {
          if (Y) (Y = !1), k();
          else {
            F.confirmTransitionTo(e, "POP", M, function (t) {
              t
                ? k({ action: "POP", location: e })
                : (function (e) {
                    var t = U.location,
                      i = L.indexOf(t.key);
                    -1 === i && (i = 0);
                    var r = L.indexOf(e.key);
                    -1 === r && (r = 0);
                    var n = i - r;
                    n && ((Y = !0), j(n));
                  })(e);
            });
          }
        }
        var A = T(v()),
          L = [A.key];
        function P(e) {
          return _ + m(e);
        }
        function j(e) {
          i.go(e);
        }
        var I = 0;
        function R(e) {
          1 === (I += e) && 1 === e
            ? (window.addEventListener(g, C),
              o && window.addEventListener(b, E))
            : 0 === I &&
              (window.removeEventListener(g, C),
              o && window.removeEventListener(b, E));
        }
        var B = !1;
        var U = {
          length: i.length,
          action: "POP",
          location: A,
          createHref: P,
          push: function (e, t) {
            var r = "PUSH",
              o = p(e, t, N(), U.location);
            F.confirmTransitionTo(o, r, M, function (e) {
              if (e) {
                var t = P(o),
                  a = o.key,
                  c = o.state;
                if (n)
                  if ((i.pushState({ key: a, state: c }, null, t), w))
                    window.location.href = t;
                  else {
                    var s = L.indexOf(U.location.key),
                      l = L.slice(0, s + 1);
                    l.push(o.key), (L = l), k({ action: r, location: o });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              o = p(e, t, N(), U.location);
            F.confirmTransitionTo(o, r, M, function (e) {
              if (e) {
                var t = P(o),
                  a = o.key,
                  c = o.state;
                if (n)
                  if ((i.replaceState({ key: a, state: c }, null, t), w))
                    window.location.replace(t);
                  else {
                    var s = L.indexOf(U.location.key);
                    -1 !== s && (L[s] = o.key), k({ action: r, location: o });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: j,
          goBack: function () {
            j(-1);
          },
          goForward: function () {
            j(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = F.setPrompt(e);
            return (
              B || (R(1), (B = !0)),
              function () {
                return B && ((B = !1), R(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = F.appendListener(e);
            return (
              R(1),
              function () {
                R(-1), t();
              }
            );
          },
        };
        return U;
      }
      var D = "hashchange",
        M = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + l(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: l, decodePath: s },
          slash: { encodePath: s, decodePath: s },
        };
      function S(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function x() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function _(e) {
        window.location.replace(S(window.location.href) + "#" + e);
      }
      function T(e) {
        void 0 === e && (e = {}), h || (0, c.Z)(!1);
        var t = window.history,
          i = (window.navigator.userAgent.indexOf("Firefox"), e),
          n = i.getUserConfirmation,
          o = void 0 === n ? y : n,
          a = i.hashType,
          l = void 0 === a ? "slash" : a,
          g = e.basename ? d(s(e.basename)) : "",
          b = M[l],
          v = b.encodePath,
          w = b.decodePath;
        function T() {
          var e = w(x());
          return g && (e = u(e, g)), p(e);
        }
        var N = f();
        function F(e) {
          (0, r.Z)(B, e),
            (B.length = t.length),
            N.notifyListeners(B.location, B.action);
        }
        var k = !1,
          C = null;
        function E() {
          var e,
            t,
            i = x(),
            r = v(i);
          if (i !== r) _(r);
          else {
            var n = T(),
              a = B.location;
            if (
              !k &&
              ((t = n),
              (e = a).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (C === m(n)) return;
            (C = null),
              (function (e) {
                if (k) (k = !1), F();
                else {
                  var t = "POP";
                  N.confirmTransitionTo(e, t, o, function (i) {
                    i
                      ? F({ action: t, location: e })
                      : (function (e) {
                          var t = B.location,
                            i = L.lastIndexOf(m(t));
                          -1 === i && (i = 0);
                          var r = L.lastIndexOf(m(e));
                          -1 === r && (r = 0);
                          var n = i - r;
                          n && ((k = !0), P(n));
                        })(e);
                  });
                }
              })(n);
          }
        }
        var Y = x(),
          O = v(Y);
        Y !== O && _(O);
        var A = T(),
          L = [m(A)];
        function P(e) {
          t.go(e);
        }
        var j = 0;
        function I(e) {
          1 === (j += e) && 1 === e
            ? window.addEventListener(D, E)
            : 0 === j && window.removeEventListener(D, E);
        }
        var R = !1;
        var B = {
          length: t.length,
          action: "POP",
          location: A,
          createHref: function (e) {
            var t = document.querySelector("base"),
              i = "";
            return (
              t && t.getAttribute("href") && (i = S(window.location.href)),
              i + "#" + v(g + m(e))
            );
          },
          push: function (e, t) {
            var i = "PUSH",
              r = p(e, void 0, void 0, B.location);
            N.confirmTransitionTo(r, i, o, function (e) {
              if (e) {
                var t = m(r),
                  n = v(g + t);
                if (x() !== n) {
                  (C = t),
                    (function (e) {
                      window.location.hash = e;
                    })(n);
                  var o = L.lastIndexOf(m(B.location)),
                    a = L.slice(0, o + 1);
                  a.push(t), (L = a), F({ action: i, location: r });
                } else F();
              }
            });
          },
          replace: function (e, t) {
            var i = "REPLACE",
              r = p(e, void 0, void 0, B.location);
            N.confirmTransitionTo(r, i, o, function (e) {
              if (e) {
                var t = m(r),
                  n = v(g + t);
                x() !== n && ((C = t), _(n));
                var o = L.indexOf(m(B.location));
                -1 !== o && (L[o] = t), F({ action: i, location: r });
              }
            });
          },
          go: P,
          goBack: function () {
            P(-1);
          },
          goForward: function () {
            P(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = N.setPrompt(e);
            return (
              R || (I(1), (R = !0)),
              function () {
                return R && ((R = !1), I(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = N.appendListener(e);
            return (
              I(1),
              function () {
                I(-1), t();
              }
            );
          },
        };
        return B;
      }
      function N(e, t, i) {
        return Math.min(Math.max(e, t), i);
      }
      function F(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.getUserConfirmation,
          n = t.initialEntries,
          o = void 0 === n ? ["/"] : n,
          a = t.initialIndex,
          c = void 0 === a ? 0 : a,
          s = t.keyLength,
          l = void 0 === s ? 6 : s,
          u = f();
        function d(e) {
          (0, r.Z)(w, e),
            (w.length = w.entries.length),
            u.notifyListeners(w.location, w.action);
        }
        function h() {
          return Math.random().toString(36).substr(2, l);
        }
        var y = N(c, 0, o.length - 1),
          g = o.map(function (e) {
            return p(e, void 0, "string" == typeof e ? h() : e.key || h());
          }),
          b = m;
        function v(e) {
          var t = N(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          u.confirmTransitionTo(r, "POP", i, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
          });
        }
        var w = {
          length: g.length,
          action: "POP",
          location: g[y],
          index: y,
          entries: g,
          createHref: b,
          push: function (e, t) {
            var r = "PUSH",
              n = p(e, t, h(), w.location);
            u.confirmTransitionTo(n, r, i, function (e) {
              if (e) {
                var t = w.index + 1,
                  i = w.entries.slice(0);
                i.length > t ? i.splice(t, i.length - t, n) : i.push(n),
                  d({ action: r, location: n, index: t, entries: i });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              n = p(e, t, h(), w.location);
            u.confirmTransitionTo(n, r, i, function (e) {
              e && ((w.entries[w.index] = n), d({ action: r, location: n }));
            });
          },
          go: v,
          goBack: function () {
            v(-1);
          },
          goForward: function () {
            v(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), u.setPrompt(e);
          },
          listen: function (e) {
            return u.appendListener(e);
          },
        };
        return w;
      }
    },
    8679: (e, t, i) => {
      "use strict";
      var r = i(9864),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {};
      function s(e) {
        return r.isMemo(e) ? a : c[e.$$typeof] || n;
      }
      (c[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[r.Memo] = a);
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        m = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(t, i, r) {
        if ("string" != typeof i) {
          if (f) {
            var n = p(i);
            n && n !== f && e(t, n, r);
          }
          var a = u(i);
          d && (a = a.concat(d(i)));
          for (var c = s(t), h = s(i), y = 0; y < a.length; ++y) {
            var g = a[y];
            if (!(o[g] || (r && r[g]) || (h && h[g]) || (c && c[g]))) {
              var b = m(i, g);
              try {
                l(t, g, b);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    6337: () => {
      !(function () {
        "use strict";
        if ("object" == typeof window)
          if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          )
            "isIntersecting" in window.IntersectionObserverEntry.prototype ||
              Object.defineProperty(
                window.IntersectionObserverEntry.prototype,
                "isIntersecting",
                {
                  get: function () {
                    return this.intersectionRatio > 0;
                  },
                }
              );
          else {
            var e = (function (e) {
                for (var t = window.document, i = n(t); i; )
                  i = n((t = i.ownerDocument));
                return t;
              })(),
              t = [],
              i = null,
              r = null;
            (a.prototype.THROTTLE_TIMEOUT = 100),
              (a.prototype.POLL_INTERVAL = null),
              (a.prototype.USE_MUTATION_OBSERVER = !0),
              (a._setupCrossOriginUpdater = function () {
                return (
                  i ||
                    (i = function (e, i) {
                      (r =
                        e && i
                          ? d(e, i)
                          : {
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              width: 0,
                              height: 0,
                            }),
                        t.forEach(function (e) {
                          e._checkForIntersections();
                        });
                    }),
                  i
                );
              }),
              (a._resetCrossOriginUpdater = function () {
                (i = null), (r = null);
              }),
              (a.prototype.observe = function (e) {
                if (
                  !this._observationTargets.some(function (t) {
                    return t.element == e;
                  })
                ) {
                  if (!e || 1 != e.nodeType)
                    throw new Error("target must be an Element");
                  this._registerInstance(),
                    this._observationTargets.push({ element: e, entry: null }),
                    this._monitorIntersections(e.ownerDocument),
                    this._checkForIntersections();
                }
              }),
              (a.prototype.unobserve = function (e) {
                (this._observationTargets = this._observationTargets.filter(
                  function (t) {
                    return t.element != e;
                  }
                )),
                  this._unmonitorIntersections(e.ownerDocument),
                  0 == this._observationTargets.length &&
                    this._unregisterInstance();
              }),
              (a.prototype.disconnect = function () {
                (this._observationTargets = []),
                  this._unmonitorAllIntersections(),
                  this._unregisterInstance();
              }),
              (a.prototype.takeRecords = function () {
                var e = this._queuedEntries.slice();
                return (this._queuedEntries = []), e;
              }),
              (a.prototype._initThresholds = function (e) {
                var t = e || [0];
                return (
                  Array.isArray(t) || (t = [t]),
                  t.sort().filter(function (e, t, i) {
                    if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                      throw new Error(
                        "threshold must be a number between 0 and 1 inclusively"
                      );
                    return e !== i[t - 1];
                  })
                );
              }),
              (a.prototype._parseRootMargin = function (e) {
                var t = (e || "0px").split(/\s+/).map(function (e) {
                  var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                  if (!t)
                    throw new Error(
                      "rootMargin must be specified in pixels or percent"
                    );
                  return { value: parseFloat(t[1]), unit: t[2] };
                });
                return (
                  (t[1] = t[1] || t[0]),
                  (t[2] = t[2] || t[0]),
                  (t[3] = t[3] || t[1]),
                  t
                );
              }),
              (a.prototype._monitorIntersections = function (t) {
                var i = t.defaultView;
                if (i && -1 == this._monitoringDocuments.indexOf(t)) {
                  var r = this._checkForIntersections,
                    o = null,
                    a = null;
                  this.POLL_INTERVAL
                    ? (o = i.setInterval(r, this.POLL_INTERVAL))
                    : (c(i, "resize", r, !0),
                      c(t, "scroll", r, !0),
                      this.USE_MUTATION_OBSERVER &&
                        "MutationObserver" in i &&
                        (a = new i.MutationObserver(r)).observe(t, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        })),
                    this._monitoringDocuments.push(t),
                    this._monitoringUnsubscribes.push(function () {
                      var e = t.defaultView;
                      e && (o && e.clearInterval(o), s(e, "resize", r, !0)),
                        s(t, "scroll", r, !0),
                        a && a.disconnect();
                    });
                  var l =
                    (this.root && (this.root.ownerDocument || this.root)) || e;
                  if (t != l) {
                    var u = n(t);
                    u && this._monitorIntersections(u.ownerDocument);
                  }
                }
              }),
              (a.prototype._unmonitorIntersections = function (t) {
                var i = this._monitoringDocuments.indexOf(t);
                if (-1 != i) {
                  var r =
                    (this.root && (this.root.ownerDocument || this.root)) || e;
                  if (
                    !this._observationTargets.some(function (e) {
                      var i = e.element.ownerDocument;
                      if (i == t) return !0;
                      for (; i && i != r; ) {
                        var o = n(i);
                        if ((i = o && o.ownerDocument) == t) return !0;
                      }
                      return !1;
                    })
                  ) {
                    var o = this._monitoringUnsubscribes[i];
                    if (
                      (this._monitoringDocuments.splice(i, 1),
                      this._monitoringUnsubscribes.splice(i, 1),
                      o(),
                      t != r)
                    ) {
                      var a = n(t);
                      a && this._unmonitorIntersections(a.ownerDocument);
                    }
                  }
                }
              }),
              (a.prototype._unmonitorAllIntersections = function () {
                var e = this._monitoringUnsubscribes.slice(0);
                (this._monitoringDocuments.length = 0),
                  (this._monitoringUnsubscribes.length = 0);
                for (var t = 0; t < e.length; t++) e[t]();
              }),
              (a.prototype._checkForIntersections = function () {
                if (this.root || !i || r) {
                  var e = this._rootIsInDom(),
                    t = e
                      ? this._getRootRect()
                      : {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        };
                  this._observationTargets.forEach(function (r) {
                    var n = r.element,
                      a = l(n),
                      c = this._rootContainsTarget(n),
                      s = r.entry,
                      u =
                        e &&
                        c &&
                        this._computeTargetAndRootIntersection(n, a, t),
                      d = null;
                    this._rootContainsTarget(n)
                      ? (i && !this.root) || (d = t)
                      : (d = {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        });
                    var m = (r.entry = new o({
                      time:
                        window.performance &&
                        performance.now &&
                        performance.now(),
                      target: n,
                      boundingClientRect: a,
                      rootBounds: d,
                      intersectionRect: u,
                    }));
                    s
                      ? e && c
                        ? this._hasCrossedThreshold(s, m) &&
                          this._queuedEntries.push(m)
                        : s && s.isIntersecting && this._queuedEntries.push(m)
                      : this._queuedEntries.push(m);
                  }, this),
                    this._queuedEntries.length &&
                      this._callback(this.takeRecords(), this);
                }
              }),
              (a.prototype._computeTargetAndRootIntersection = function (
                t,
                n,
                o
              ) {
                if ("none" != window.getComputedStyle(t).display) {
                  for (
                    var a, c, s, u, m, f, h, y, g = n, b = p(t), v = !1;
                    !v && b;

                  ) {
                    var w = null,
                      D = 1 == b.nodeType ? window.getComputedStyle(b) : {};
                    if ("none" == D.display) return null;
                    if (b == this.root || 9 == b.nodeType)
                      if (((v = !0), b == this.root || b == e))
                        i && !this.root
                          ? !r || (0 == r.width && 0 == r.height)
                            ? ((b = null), (w = null), (g = null))
                            : (w = r)
                          : (w = o);
                      else {
                        var M = p(b),
                          S = M && l(M),
                          x =
                            M &&
                            this._computeTargetAndRootIntersection(M, S, o);
                        S && x
                          ? ((b = M), (w = d(S, x)))
                          : ((b = null), (g = null));
                      }
                    else {
                      var _ = b.ownerDocument;
                      b != _.body &&
                        b != _.documentElement &&
                        "visible" != D.overflow &&
                        (w = l(b));
                    }
                    if (
                      (w &&
                        ((a = w),
                        (c = g),
                        (s = void 0),
                        (u = void 0),
                        (m = void 0),
                        (f = void 0),
                        (h = void 0),
                        (y = void 0),
                        (s = Math.max(a.top, c.top)),
                        (u = Math.min(a.bottom, c.bottom)),
                        (m = Math.max(a.left, c.left)),
                        (f = Math.min(a.right, c.right)),
                        (y = u - s),
                        (g =
                          ((h = f - m) >= 0 &&
                            y >= 0 && {
                              top: s,
                              bottom: u,
                              left: m,
                              right: f,
                              width: h,
                              height: y,
                            }) ||
                          null)),
                      !g)
                    )
                      break;
                    b = b && p(b);
                  }
                  return g;
                }
              }),
              (a.prototype._getRootRect = function () {
                var t;
                if (this.root && !f(this.root)) t = l(this.root);
                else {
                  var i = f(this.root) ? this.root : e,
                    r = i.documentElement,
                    n = i.body;
                  t = {
                    top: 0,
                    left: 0,
                    right: r.clientWidth || n.clientWidth,
                    width: r.clientWidth || n.clientWidth,
                    bottom: r.clientHeight || n.clientHeight,
                    height: r.clientHeight || n.clientHeight,
                  };
                }
                return this._expandRectByRootMargin(t);
              }),
              (a.prototype._expandRectByRootMargin = function (e) {
                var t = this._rootMarginValues.map(function (t, i) {
                    return "px" == t.unit
                      ? t.value
                      : (t.value * (i % 2 ? e.width : e.height)) / 100;
                  }),
                  i = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3],
                  };
                return (
                  (i.width = i.right - i.left), (i.height = i.bottom - i.top), i
                );
              }),
              (a.prototype._hasCrossedThreshold = function (e, t) {
                var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                  r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                if (i !== r)
                  for (var n = 0; n < this.thresholds.length; n++) {
                    var o = this.thresholds[n];
                    if (o == i || o == r || o < i != o < r) return !0;
                  }
              }),
              (a.prototype._rootIsInDom = function () {
                return !this.root || m(e, this.root);
              }),
              (a.prototype._rootContainsTarget = function (t) {
                var i =
                  (this.root && (this.root.ownerDocument || this.root)) || e;
                return m(i, t) && (!this.root || i == t.ownerDocument);
              }),
              (a.prototype._registerInstance = function () {
                t.indexOf(this) < 0 && t.push(this);
              }),
              (a.prototype._unregisterInstance = function () {
                var e = t.indexOf(this);
                -1 != e && t.splice(e, 1);
              }),
              (window.IntersectionObserver = a),
              (window.IntersectionObserverEntry = o);
          }
        function n(e) {
          try {
            return (e.defaultView && e.defaultView.frameElement) || null;
          } catch (t) {
            return null;
          }
        }
        function o(e) {
          (this.time = e.time),
            (this.target = e.target),
            (this.rootBounds = u(e.rootBounds)),
            (this.boundingClientRect = u(e.boundingClientRect)),
            (this.intersectionRect = u(
              e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0,
              }
            )),
            (this.isIntersecting = !!e.intersectionRect);
          var t = this.boundingClientRect,
            i = t.width * t.height,
            r = this.intersectionRect,
            n = r.width * r.height;
          this.intersectionRatio = i
            ? Number((n / i).toFixed(4))
            : this.isIntersecting
            ? 1
            : 0;
        }
        function a(e, t) {
          var i,
            r,
            n,
            o = t || {};
          if ("function" != typeof e)
            throw new Error("callback must be a function");
          if (o.root && 1 != o.root.nodeType && 9 != o.root.nodeType)
            throw new Error("root must be a Document or Element");
          (this._checkForIntersections =
            ((i = this._checkForIntersections.bind(this)),
            (r = this.THROTTLE_TIMEOUT),
            (n = null),
            function () {
              n ||
                (n = setTimeout(function () {
                  i(), (n = null);
                }, r));
            })),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(o.rootMargin)),
            (this.thresholds = this._initThresholds(o.threshold)),
            (this.root = o.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (e) {
                return e.value + e.unit;
              })
              .join(" ")),
            (this._monitoringDocuments = []),
            (this._monitoringUnsubscribes = []);
        }
        function c(e, t, i, r) {
          "function" == typeof e.addEventListener
            ? e.addEventListener(t, i, r || !1)
            : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i);
        }
        function s(e, t, i, r) {
          "function" == typeof e.removeEventListener
            ? e.removeEventListener(t, i, r || !1)
            : "function" == typeof e.detatchEvent &&
              e.detatchEvent("on" + t, i);
        }
        function l(e) {
          var t;
          try {
            t = e.getBoundingClientRect();
          } catch (i) {}
          return t
            ? ((t.width && t.height) ||
                (t = {
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                  left: t.left,
                  width: t.right - t.left,
                  height: t.bottom - t.top,
                }),
              t)
            : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function u(e) {
          return !e || "x" in e
            ? e
            : {
                top: e.top,
                y: e.top,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                right: e.right,
                width: e.width,
                height: e.height,
              };
        }
        function d(e, t) {
          var i = t.top - e.top,
            r = t.left - e.left;
          return {
            top: i,
            left: r,
            height: t.height,
            width: t.width,
            bottom: i + t.height,
            right: r + t.width,
          };
        }
        function m(e, t) {
          for (var i = t; i; ) {
            if (i == e) return !0;
            i = p(i);
          }
          return !1;
        }
        function p(t) {
          var i = t.parentNode;
          return 9 == t.nodeType && t != e
            ? n(t)
            : (i && i.assignedSlot && (i = i.assignedSlot.parentNode),
              i && 11 == i.nodeType && i.host ? i.host : i);
        }
        function f(e) {
          return e && 9 === e.nodeType;
        }
      })();
    },
    6938: (e, t, i) => {
      "use strict";
      var r;
      function n(e) {
        return e.type === r.literal;
      }
      function o(e) {
        return e.type === r.argument;
      }
      function a(e) {
        return e.type === r.number;
      }
      function c(e) {
        return e.type === r.date;
      }
      function s(e) {
        return e.type === r.time;
      }
      function l(e) {
        return e.type === r.select;
      }
      function u(e) {
        return e.type === r.plural;
      }
      function d(e) {
        return e.type === r.pound;
      }
      function m(e) {
        return !(!e || "object" != typeof e || 0 !== e.type);
      }
      function p(e) {
        return !(!e || "object" != typeof e || 1 !== e.type);
      }
      i.r(t),
        i.d(t, {
          IntlMessageFormat: () => V,
          createDefaultFormatters: () => Q,
          default: () => $,
          formatHTMLMessage: () => q,
          formatToParts: () => R,
          formatToString: () => B,
        }),
        (function (e) {
          (e[(e.literal = 0)] = "literal"),
            (e[(e.argument = 1)] = "argument"),
            (e[(e.number = 2)] = "number"),
            (e[(e.date = 3)] = "date"),
            (e[(e.time = 4)] = "time"),
            (e[(e.select = 5)] = "select"),
            (e[(e.plural = 6)] = "plural"),
            (e[(e.pound = 7)] = "pound");
        })(r || (r = {}));
      var f,
        h =
          ((f = function (e, t) {
            return (f =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            function i() {
              this.constructor = e;
            }
            f(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        y = function () {
          return (y =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        g = (function (e) {
          function t(i, r, n, o) {
            var a = e.call(this) || this;
            return (
              (a.message = i),
              (a.expected = r),
              (a.found = n),
              (a.location = o),
              (a.name = "SyntaxError"),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(a, t),
              a
            );
          }
          return (
            h(t, e),
            (t.buildMessage = function (e, t) {
              function i(e) {
                return e.charCodeAt(0).toString(16).toUpperCase();
              }
              function r(e) {
                return e
                  .replace(/\\/g, "\\\\")
                  .replace(/"/g, '\\"')
                  .replace(/\0/g, "\\0")
                  .replace(/\t/g, "\\t")
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/[\x00-\x0F]/g, function (e) {
                    return "\\x0" + i(e);
                  })
                  .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                    return "\\x" + i(e);
                  });
              }
              function n(e) {
                return e
                  .replace(/\\/g, "\\\\")
                  .replace(/\]/g, "\\]")
                  .replace(/\^/g, "\\^")
                  .replace(/-/g, "\\-")
                  .replace(/\0/g, "\\0")
                  .replace(/\t/g, "\\t")
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/[\x00-\x0F]/g, function (e) {
                    return "\\x0" + i(e);
                  })
                  .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                    return "\\x" + i(e);
                  });
              }
              function o(e) {
                switch (e.type) {
                  case "literal":
                    return '"' + r(e.text) + '"';
                  case "class":
                    var t = e.parts.map(function (e) {
                      return Array.isArray(e) ? n(e[0]) + "-" + n(e[1]) : n(e);
                    });
                    return "[" + (e.inverted ? "^" : "") + t + "]";
                  case "any":
                    return "any character";
                  case "end":
                    return "end of input";
                  case "other":
                    return e.description;
                }
              }
              return (
                "Expected " +
                (function (e) {
                  var t,
                    i,
                    r = e.map(o);
                  if ((r.sort(), r.length > 0)) {
                    for (t = 1, i = 1; t < r.length; t++)
                      r[t - 1] !== r[t] && ((r[i] = r[t]), i++);
                    r.length = i;
                  }
                  switch (r.length) {
                    case 1:
                      return r[0];
                    case 2:
                      return r[0] + " or " + r[1];
                    default:
                      return (
                        r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
                      );
                  }
                })(e) +
                " but " +
                (((a = t) ? '"' + r(a) + '"' : "end of input") + " found.")
              );
              var a;
            }),
            t
          );
        })(Error);
      var b = function (e, t) {
          t = void 0 !== t ? t : {};
          var i,
            n = {},
            o = { start: Le },
            a = Le,
            c = Fe("#", !1),
            s = Ce("argumentElement"),
            l = "{",
            u = Fe("{", !1),
            d = "}",
            m = Fe("}", !1),
            p = Ce("numberSkeletonId"),
            f = /^['\/{}]/,
            h = ke(["'", "/", "{", "}"], !1, !1),
            b = { type: "any" },
            v = Ce("numberSkeletonTokenOption"),
            w = Fe("/", !1),
            D = Ce("numberSkeletonToken"),
            M = "::",
            S = Fe("::", !1),
            x = function (e) {
              return it.pop(), e.replace(/\s*$/, "");
            },
            _ = ",",
            T = Fe(",", !1),
            N = "number",
            F = Fe("number", !1),
            k = function (e, t, i) {
              return y(
                {
                  type:
                    "number" === t ? r.number : "date" === t ? r.date : r.time,
                  style: i && i[2],
                  value: e,
                },
                nt()
              );
            },
            C = "'",
            E = Fe("'", !1),
            Y = /^[^']/,
            O = ke(["'"], !0, !1),
            A = /^[^a-zA-Z'{}]/,
            L = ke([["a", "z"], ["A", "Z"], "'", "{", "}"], !0, !1),
            P = /^[a-zA-Z]/,
            j = ke(
              [
                ["a", "z"],
                ["A", "Z"],
              ],
              !1,
              !1
            ),
            I = "date",
            R = Fe("date", !1),
            B = "time",
            U = Fe("time", !1),
            z = "plural",
            H = Fe("plural", !1),
            Z = "selectordinal",
            W = Fe("selectordinal", !1),
            K = "offset:",
            G = Fe("offset:", !1),
            q = "select",
            J = Fe("select", !1),
            X = Fe("=", !1),
            Q = Ce("whitespace"),
            V =
              /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
            $ = ke(
              [
                ["\t", "\r"],
                " ",
                "",
                " ",
                " ",
                [" ", " "],
                "\u2028",
                "\u2029",
                " ",
                " ",
                "　",
              ],
              !1,
              !1
            ),
            ee = Ce("syntax pattern"),
            te =
              /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
            ie = ke(
              [
                ["!", "/"],
                [":", "@"],
                ["[", "^"],
                "`",
                ["{", "~"],
                ["¡", "§"],
                "©",
                "«",
                "¬",
                "®",
                "°",
                "±",
                "¶",
                "»",
                "¿",
                "×",
                "÷",
                ["‐", "‧"],
                ["‰", "‾"],
                ["⁁", "⁓"],
                ["⁕", "⁞"],
                ["←", "⑟"],
                ["─", "❵"],
                ["➔", "⯿"],
                ["⸀", "⹿"],
                ["、", "〃"],
                ["〈", "〠"],
                "〰",
                "﴾",
                "﴿",
                "﹅",
                "﹆",
              ],
              !1,
              !1
            ),
            re = Ce("optional whitespace"),
            ne = Ce("number"),
            oe = Fe("-", !1),
            ae = (Ce("apostrophe"), Ce("double apostrophes")),
            ce = "''",
            se = Fe("''", !1),
            le = function (e) {
              return !(
                "{" === e ||
                (rt() && "#" === e) ||
                (it.length > 1 && "}" === e)
              );
            },
            ue = Fe("\n", !1),
            de = Ce("argNameOrNumber"),
            me = Ce("argNumber"),
            pe = Fe("0", !1),
            fe = /^[1-9]/,
            he = ke([["1", "9"]], !1, !1),
            ye = /^[0-9]/,
            ge = ke([["0", "9"]], !1, !1),
            be = Ce("argName"),
            ve = 0,
            we = 0,
            De = [{ line: 1, column: 1 }],
            Me = 0,
            Se = [],
            xe = 0;
          if (void 0 !== t.startRule) {
            if (!(t.startRule in o))
              throw new Error(
                "Can't start parsing from rule \"" + t.startRule + '".'
              );
            a = o[t.startRule];
          }
          function _e() {
            return e.substring(we, ve);
          }
          function Te() {
            return Ye(we, ve);
          }
          function Ne(e, t) {
            throw (function (e, t) {
              return new g(e, [], "", t);
            })(e, (t = void 0 !== t ? t : Ye(we, ve)));
          }
          function Fe(e, t) {
            return { type: "literal", text: e, ignoreCase: t };
          }
          function ke(e, t, i) {
            return { type: "class", parts: e, inverted: t, ignoreCase: i };
          }
          function Ce(e) {
            return { type: "other", description: e };
          }
          function Ee(t) {
            var i,
              r = De[t];
            if (r) return r;
            for (i = t - 1; !De[i]; ) i--;
            for (r = { line: (r = De[i]).line, column: r.column }; i < t; )
              10 === e.charCodeAt(i) ? (r.line++, (r.column = 1)) : r.column++,
                i++;
            return (De[t] = r), r;
          }
          function Ye(e, t) {
            var i = Ee(e),
              r = Ee(t);
            return {
              start: { offset: e, line: i.line, column: i.column },
              end: { offset: t, line: r.line, column: r.column },
            };
          }
          function Oe(e) {
            ve < Me || (ve > Me && ((Me = ve), (Se = [])), Se.push(e));
          }
          function Ae(e, t, i) {
            return new g(g.buildMessage(e, t), e, t, i);
          }
          function Le() {
            return Pe();
          }
          function Pe() {
            var e, t;
            for (e = [], t = je(); t !== n; ) e.push(t), (t = je());
            return e;
          }
          function je() {
            var t;
            return (
              (t = (function () {
                var e, t;
                (e = ve),
                  (t = Ie()) !== n &&
                    ((we = e),
                    (i = t),
                    (t = y({ type: r.literal, value: i }, nt())));
                var i;
                return (e = t);
              })()) === n &&
                (t = (function () {
                  var t, i, o, a;
                  xe++,
                    (t = ve),
                    123 === e.charCodeAt(ve)
                      ? ((i = l), ve++)
                      : ((i = n), 0 === xe && Oe(u));
                  i !== n && qe() !== n && (o = $e()) !== n && qe() !== n
                    ? (125 === e.charCodeAt(ve)
                        ? ((a = d), ve++)
                        : ((a = n), 0 === xe && Oe(m)),
                      a !== n
                        ? ((we = t),
                          (c = o),
                          (t = i = y({ type: r.argument, value: c }, nt())))
                        : ((ve = t), (t = n)))
                    : ((ve = t), (t = n));
                  var c;
                  xe--, t === n && ((i = n), 0 === xe && Oe(s));
                  return t;
                })()) === n &&
                (t = (function () {
                  var t;
                  (t = (function () {
                    var t, i, r, o, a, c, s, p, f;
                    (t = ve),
                      123 === e.charCodeAt(ve)
                        ? ((i = l), ve++)
                        : ((i = n), 0 === xe && Oe(u));
                    i !== n && qe() !== n && (r = $e()) !== n && qe() !== n
                      ? (44 === e.charCodeAt(ve)
                          ? ((o = _), ve++)
                          : ((o = n), 0 === xe && Oe(T)),
                        o !== n && qe() !== n
                          ? (e.substr(ve, 6) === N
                              ? ((a = N), (ve += 6))
                              : ((a = n), 0 === xe && Oe(F)),
                            a !== n && qe() !== n
                              ? ((c = ve),
                                44 === e.charCodeAt(ve)
                                  ? ((s = _), ve++)
                                  : ((s = n), 0 === xe && Oe(T)),
                                s !== n &&
                                (p = qe()) !== n &&
                                (f = (function () {
                                  var t, i, r;
                                  (t = ve),
                                    e.substr(ve, 2) === M
                                      ? ((i = M), (ve += 2))
                                      : ((i = n), 0 === xe && Oe(S));
                                  i !== n &&
                                  (r = (function () {
                                    var e, t, i;
                                    if (((e = ve), (t = []), (i = Ue()) !== n))
                                      for (; i !== n; ) t.push(i), (i = Ue());
                                    else t = n;
                                    t !== n &&
                                      ((we = e),
                                      (t = y({ type: 0, tokens: t }, nt())));
                                    return (e = t);
                                  })()) !== n
                                    ? ((we = t), (t = i = r))
                                    : ((ve = t), (t = n));
                                  t === n &&
                                    ((t = ve),
                                    (we = ve),
                                    it.push("numberArgStyle"),
                                    (i = (i = !0) ? void 0 : n) !== n &&
                                    (r = Ie()) !== n
                                      ? ((we = t), (t = i = x(r)))
                                      : ((ve = t), (t = n)));
                                  return t;
                                })()) !== n
                                  ? (c = s = [s, p, f])
                                  : ((ve = c), (c = n)),
                                c === n && (c = null),
                                c !== n && (s = qe()) !== n
                                  ? (125 === e.charCodeAt(ve)
                                      ? ((p = d), ve++)
                                      : ((p = n), 0 === xe && Oe(m)),
                                    p !== n
                                      ? ((we = t), (t = i = k(r, a, c)))
                                      : ((ve = t), (t = n)))
                                  : ((ve = t), (t = n)))
                              : ((ve = t), (t = n)))
                          : ((ve = t), (t = n)))
                      : ((ve = t), (t = n));
                    return t;
                  })()) === n &&
                    (t = (function () {
                      var t, i, r, o, a, c, s, p, f;
                      (t = ve),
                        123 === e.charCodeAt(ve)
                          ? ((i = l), ve++)
                          : ((i = n), 0 === xe && Oe(u));
                      i !== n && qe() !== n && (r = $e()) !== n && qe() !== n
                        ? (44 === e.charCodeAt(ve)
                            ? ((o = _), ve++)
                            : ((o = n), 0 === xe && Oe(T)),
                          o !== n && qe() !== n
                            ? (e.substr(ve, 4) === I
                                ? ((a = I), (ve += 4))
                                : ((a = n), 0 === xe && Oe(R)),
                              a === n &&
                                (e.substr(ve, 4) === B
                                  ? ((a = B), (ve += 4))
                                  : ((a = n), 0 === xe && Oe(U))),
                              a !== n && qe() !== n
                                ? ((c = ve),
                                  44 === e.charCodeAt(ve)
                                    ? ((s = _), ve++)
                                    : ((s = n), 0 === xe && Oe(T)),
                                  s !== n &&
                                  (p = qe()) !== n &&
                                  (f = (function () {
                                    var t, i, r;
                                    (t = ve),
                                      e.substr(ve, 2) === M
                                        ? ((i = M), (ve += 2))
                                        : ((i = n), 0 === xe && Oe(S));
                                    i !== n &&
                                    (r = (function () {
                                      var t, i, r, o;
                                      (t = ve),
                                        (i = ve),
                                        (r = []),
                                        (o = ze()) === n && (o = He());
                                      if (o !== n)
                                        for (; o !== n; )
                                          r.push(o),
                                            (o = ze()) === n && (o = He());
                                      else r = n;
                                      i = r !== n ? e.substring(i, ve) : r;
                                      i !== n &&
                                        ((we = t),
                                        (i = y({ type: 1, pattern: i }, nt())));
                                      return (t = i);
                                    })()) !== n
                                      ? ((we = t), (t = i = r))
                                      : ((ve = t), (t = n));
                                    t === n &&
                                      ((t = ve),
                                      (we = ve),
                                      it.push("dateOrTimeArgStyle"),
                                      (i = (i = !0) ? void 0 : n) !== n &&
                                      (r = Ie()) !== n
                                        ? ((we = t), (t = i = x(r)))
                                        : ((ve = t), (t = n)));
                                    return t;
                                  })()) !== n
                                    ? (c = s = [s, p, f])
                                    : ((ve = c), (c = n)),
                                  c === n && (c = null),
                                  c !== n && (s = qe()) !== n
                                    ? (125 === e.charCodeAt(ve)
                                        ? ((p = d), ve++)
                                        : ((p = n), 0 === xe && Oe(m)),
                                      p !== n
                                        ? ((we = t), (t = i = k(r, a, c)))
                                        : ((ve = t), (t = n)))
                                    : ((ve = t), (t = n)))
                                : ((ve = t), (t = n)))
                            : ((ve = t), (t = n)))
                        : ((ve = t), (t = n));
                      return t;
                    })());
                  return t;
                })()) === n &&
                (t = (function () {
                  var t, i, o, a, c, s, p, f, h, g, b;
                  (t = ve),
                    123 === e.charCodeAt(ve)
                      ? ((i = l), ve++)
                      : ((i = n), 0 === xe && Oe(u));
                  if (i !== n)
                    if (qe() !== n)
                      if ((o = $e()) !== n)
                        if (qe() !== n)
                          if (
                            (44 === e.charCodeAt(ve)
                              ? ((a = _), ve++)
                              : ((a = n), 0 === xe && Oe(T)),
                            a !== n)
                          )
                            if (qe() !== n)
                              if (
                                (e.substr(ve, 6) === z
                                  ? ((c = z), (ve += 6))
                                  : ((c = n), 0 === xe && Oe(H)),
                                c === n &&
                                  (e.substr(ve, 13) === Z
                                    ? ((c = Z), (ve += 13))
                                    : ((c = n), 0 === xe && Oe(W))),
                                c !== n)
                              )
                                if (qe() !== n)
                                  if (
                                    (44 === e.charCodeAt(ve)
                                      ? ((s = _), ve++)
                                      : ((s = n), 0 === xe && Oe(T)),
                                    s !== n)
                                  )
                                    if (qe() !== n)
                                      if (
                                        ((p = ve),
                                        e.substr(ve, 7) === K
                                          ? ((f = K), (ve += 7))
                                          : ((f = n), 0 === xe && Oe(G)),
                                        f !== n &&
                                        (h = qe()) !== n &&
                                        (g = Je()) !== n
                                          ? (p = f = [f, h, g])
                                          : ((ve = p), (p = n)),
                                        p === n && (p = null),
                                        p !== n)
                                      )
                                        if ((f = qe()) !== n) {
                                          if (((h = []), (g = We()) !== n))
                                            for (; g !== n; )
                                              h.push(g), (g = We());
                                          else h = n;
                                          h !== n && (g = qe()) !== n
                                            ? (125 === e.charCodeAt(ve)
                                                ? ((b = d), ve++)
                                                : ((b = n), 0 === xe && Oe(m)),
                                              b !== n
                                                ? ((we = t),
                                                  (t = i =
                                                    (function (e, t, i, n) {
                                                      return y(
                                                        {
                                                          type: r.plural,
                                                          pluralType:
                                                            "plural" === t
                                                              ? "cardinal"
                                                              : "ordinal",
                                                          value: e,
                                                          offset: i ? i[2] : 0,
                                                          options: n.reduce(
                                                            function (e, t) {
                                                              var i = t.id,
                                                                r = t.value,
                                                                n = t.location;
                                                              return (
                                                                i in e &&
                                                                  Ne(
                                                                    'Duplicate option "' +
                                                                      i +
                                                                      '" in plural element: "' +
                                                                      _e() +
                                                                      '"',
                                                                    Te()
                                                                  ),
                                                                (e[i] = {
                                                                  value: r,
                                                                  location: n,
                                                                }),
                                                                e
                                                              );
                                                            },
                                                            {}
                                                          ),
                                                        },
                                                        nt()
                                                      );
                                                    })(o, c, p, h)))
                                                : ((ve = t), (t = n)))
                                            : ((ve = t), (t = n));
                                        } else (ve = t), (t = n);
                                      else (ve = t), (t = n);
                                    else (ve = t), (t = n);
                                  else (ve = t), (t = n);
                                else (ve = t), (t = n);
                              else (ve = t), (t = n);
                            else (ve = t), (t = n);
                          else (ve = t), (t = n);
                        else (ve = t), (t = n);
                      else (ve = t), (t = n);
                    else (ve = t), (t = n);
                  else (ve = t), (t = n);
                  return t;
                })()) === n &&
                (t = (function () {
                  var t, i, o, a, c, s, p, f, h;
                  (t = ve),
                    123 === e.charCodeAt(ve)
                      ? ((i = l), ve++)
                      : ((i = n), 0 === xe && Oe(u));
                  if (i !== n)
                    if (qe() !== n)
                      if ((o = $e()) !== n)
                        if (qe() !== n)
                          if (
                            (44 === e.charCodeAt(ve)
                              ? ((a = _), ve++)
                              : ((a = n), 0 === xe && Oe(T)),
                            a !== n)
                          )
                            if (qe() !== n)
                              if (
                                (e.substr(ve, 6) === q
                                  ? ((c = q), (ve += 6))
                                  : ((c = n), 0 === xe && Oe(J)),
                                c !== n)
                              )
                                if (qe() !== n)
                                  if (
                                    (44 === e.charCodeAt(ve)
                                      ? ((s = _), ve++)
                                      : ((s = n), 0 === xe && Oe(T)),
                                    s !== n)
                                  )
                                    if (qe() !== n) {
                                      if (((p = []), (f = Ze()) !== n))
                                        for (; f !== n; ) p.push(f), (f = Ze());
                                      else p = n;
                                      p !== n && (f = qe()) !== n
                                        ? (125 === e.charCodeAt(ve)
                                            ? ((h = d), ve++)
                                            : ((h = n), 0 === xe && Oe(m)),
                                          h !== n
                                            ? ((we = t),
                                              (t = i =
                                                (function (e, t) {
                                                  return y(
                                                    {
                                                      type: r.select,
                                                      value: e,
                                                      options: t.reduce(
                                                        function (e, t) {
                                                          var i = t.id,
                                                            r = t.value,
                                                            n = t.location;
                                                          return (
                                                            i in e &&
                                                              Ne(
                                                                'Duplicate option "' +
                                                                  i +
                                                                  '" in select element: "' +
                                                                  _e() +
                                                                  '"',
                                                                Te()
                                                              ),
                                                            (e[i] = {
                                                              value: r,
                                                              location: n,
                                                            }),
                                                            e
                                                          );
                                                        },
                                                        {}
                                                      ),
                                                    },
                                                    nt()
                                                  );
                                                })(o, p)))
                                            : ((ve = t), (t = n)))
                                        : ((ve = t), (t = n));
                                    } else (ve = t), (t = n);
                                  else (ve = t), (t = n);
                                else (ve = t), (t = n);
                              else (ve = t), (t = n);
                            else (ve = t), (t = n);
                          else (ve = t), (t = n);
                        else (ve = t), (t = n);
                      else (ve = t), (t = n);
                    else (ve = t), (t = n);
                  else (ve = t), (t = n);
                  return t;
                })()) === n &&
                (t = (function () {
                  var t, i;
                  (t = ve),
                    35 === e.charCodeAt(ve)
                      ? ((i = "#"), ve++)
                      : ((i = n), 0 === xe && Oe(c));
                  i !== n && ((we = t), (i = y({ type: r.pound }, nt())));
                  return (t = i);
                })()),
              t
            );
          }
          function Ie() {
            var e, t, i;
            if (
              ((e = ve),
              (t = []),
              (i = Xe()) === n && (i = Qe()) === n && (i = Ve()),
              i !== n)
            )
              for (; i !== n; )
                t.push(i), (i = Xe()) === n && (i = Qe()) === n && (i = Ve());
            else t = n;
            return t !== n && ((we = e), (t = t.join(""))), (e = t);
          }
          function Re() {
            var t, i, r, o, a;
            if (
              (xe++,
              (t = ve),
              (i = []),
              (r = ve),
              (o = ve),
              xe++,
              (a = Ke()) === n &&
                (f.test(e.charAt(ve))
                  ? ((a = e.charAt(ve)), ve++)
                  : ((a = n), 0 === xe && Oe(h))),
              xe--,
              a === n ? (o = void 0) : ((ve = o), (o = n)),
              o !== n
                ? (e.length > ve
                    ? ((a = e.charAt(ve)), ve++)
                    : ((a = n), 0 === xe && Oe(b)),
                  a !== n ? (r = o = [o, a]) : ((ve = r), (r = n)))
                : ((ve = r), (r = n)),
              r !== n)
            )
              for (; r !== n; )
                i.push(r),
                  (r = ve),
                  (o = ve),
                  xe++,
                  (a = Ke()) === n &&
                    (f.test(e.charAt(ve))
                      ? ((a = e.charAt(ve)), ve++)
                      : ((a = n), 0 === xe && Oe(h))),
                  xe--,
                  a === n ? (o = void 0) : ((ve = o), (o = n)),
                  o !== n
                    ? (e.length > ve
                        ? ((a = e.charAt(ve)), ve++)
                        : ((a = n), 0 === xe && Oe(b)),
                      a !== n ? (r = o = [o, a]) : ((ve = r), (r = n)))
                    : ((ve = r), (r = n));
            else i = n;
            return (
              (t = i !== n ? e.substring(t, ve) : i),
              xe--,
              t === n && ((i = n), 0 === xe && Oe(p)),
              t
            );
          }
          function Be() {
            var t, i, r;
            return (
              xe++,
              (t = ve),
              47 === e.charCodeAt(ve)
                ? ((i = "/"), ve++)
                : ((i = n), 0 === xe && Oe(w)),
              i !== n && (r = Re()) !== n
                ? ((we = t), (t = i = r))
                : ((ve = t), (t = n)),
              xe--,
              t === n && ((i = n), 0 === xe && Oe(v)),
              t
            );
          }
          function Ue() {
            var e, t, i, r;
            if ((xe++, (e = ve), qe() !== n))
              if ((t = Re()) !== n) {
                for (i = [], r = Be(); r !== n; ) i.push(r), (r = Be());
                i !== n
                  ? ((we = e),
                    (e = (function (e, t) {
                      return { stem: e, options: t };
                    })(t, i)))
                  : ((ve = e), (e = n));
              } else (ve = e), (e = n);
            else (ve = e), (e = n);
            return xe--, e === n && (n, 0 === xe && Oe(D)), e;
          }
          function ze() {
            var t, i, r, o;
            if (
              ((t = ve),
              39 === e.charCodeAt(ve)
                ? ((i = C), ve++)
                : ((i = n), 0 === xe && Oe(E)),
              i !== n)
            ) {
              if (
                ((r = []),
                (o = Xe()) === n &&
                  (Y.test(e.charAt(ve))
                    ? ((o = e.charAt(ve)), ve++)
                    : ((o = n), 0 === xe && Oe(O))),
                o !== n)
              )
                for (; o !== n; )
                  r.push(o),
                    (o = Xe()) === n &&
                      (Y.test(e.charAt(ve))
                        ? ((o = e.charAt(ve)), ve++)
                        : ((o = n), 0 === xe && Oe(O)));
              else r = n;
              r !== n
                ? (39 === e.charCodeAt(ve)
                    ? ((o = C), ve++)
                    : ((o = n), 0 === xe && Oe(E)),
                  o !== n ? (t = i = [i, r, o]) : ((ve = t), (t = n)))
                : ((ve = t), (t = n));
            } else (ve = t), (t = n);
            if (t === n)
              if (
                ((t = []),
                (i = Xe()) === n &&
                  (A.test(e.charAt(ve))
                    ? ((i = e.charAt(ve)), ve++)
                    : ((i = n), 0 === xe && Oe(L))),
                i !== n)
              )
                for (; i !== n; )
                  t.push(i),
                    (i = Xe()) === n &&
                      (A.test(e.charAt(ve))
                        ? ((i = e.charAt(ve)), ve++)
                        : ((i = n), 0 === xe && Oe(L)));
              else t = n;
            return t;
          }
          function He() {
            var t, i;
            if (
              ((t = []),
              P.test(e.charAt(ve))
                ? ((i = e.charAt(ve)), ve++)
                : ((i = n), 0 === xe && Oe(j)),
              i !== n)
            )
              for (; i !== n; )
                t.push(i),
                  P.test(e.charAt(ve))
                    ? ((i = e.charAt(ve)), ve++)
                    : ((i = n), 0 === xe && Oe(j));
            else t = n;
            return t;
          }
          function Ze() {
            var t, i, r, o, a, c, s;
            return (
              (t = ve),
              qe() !== n && (i = tt()) !== n && qe() !== n
                ? (123 === e.charCodeAt(ve)
                    ? ((r = l), ve++)
                    : ((r = n), 0 === xe && Oe(u)),
                  r !== n
                    ? ((we = ve),
                      it.push("select"),
                      (!0 ? void 0 : n) !== n && (o = Pe()) !== n
                        ? (125 === e.charCodeAt(ve)
                            ? ((a = d), ve++)
                            : ((a = n), 0 === xe && Oe(m)),
                          a !== n
                            ? ((we = t),
                              (c = i),
                              (s = o),
                              it.pop(),
                              (t = y({ id: c, value: s }, nt())))
                            : ((ve = t), (t = n)))
                        : ((ve = t), (t = n)))
                    : ((ve = t), (t = n)))
                : ((ve = t), (t = n)),
              t
            );
          }
          function We() {
            var t, i, r, o, a, c, s;
            return (
              (t = ve),
              qe() !== n &&
              (i = (function () {
                var t, i, r, o;
                return (
                  (t = ve),
                  (i = ve),
                  61 === e.charCodeAt(ve)
                    ? ((r = "="), ve++)
                    : ((r = n), 0 === xe && Oe(X)),
                  r !== n && (o = Je()) !== n
                    ? (i = r = [r, o])
                    : ((ve = i), (i = n)),
                  (t = i !== n ? e.substring(t, ve) : i) === n && (t = tt()),
                  t
                );
              })()) !== n &&
              qe() !== n
                ? (123 === e.charCodeAt(ve)
                    ? ((r = l), ve++)
                    : ((r = n), 0 === xe && Oe(u)),
                  r !== n
                    ? ((we = ve),
                      it.push("plural"),
                      (!0 ? void 0 : n) !== n && (o = Pe()) !== n
                        ? (125 === e.charCodeAt(ve)
                            ? ((a = d), ve++)
                            : ((a = n), 0 === xe && Oe(m)),
                          a !== n
                            ? ((we = t),
                              (c = i),
                              (s = o),
                              it.pop(),
                              (t = y({ id: c, value: s }, nt())))
                            : ((ve = t), (t = n)))
                        : ((ve = t), (t = n)))
                    : ((ve = t), (t = n)))
                : ((ve = t), (t = n)),
              t
            );
          }
          function Ke() {
            var t;
            return (
              xe++,
              V.test(e.charAt(ve))
                ? ((t = e.charAt(ve)), ve++)
                : ((t = n), 0 === xe && Oe($)),
              xe--,
              t === n && (n, 0 === xe && Oe(Q)),
              t
            );
          }
          function Ge() {
            var t;
            return (
              xe++,
              te.test(e.charAt(ve))
                ? ((t = e.charAt(ve)), ve++)
                : ((t = n), 0 === xe && Oe(ie)),
              xe--,
              t === n && (n, 0 === xe && Oe(ee)),
              t
            );
          }
          function qe() {
            var t, i, r;
            for (xe++, t = ve, i = [], r = Ke(); r !== n; )
              i.push(r), (r = Ke());
            return (
              (t = i !== n ? e.substring(t, ve) : i),
              xe--,
              t === n && ((i = n), 0 === xe && Oe(re)),
              t
            );
          }
          function Je() {
            var t, i, r, o, a;
            return (
              xe++,
              (t = ve),
              45 === e.charCodeAt(ve)
                ? ((i = "-"), ve++)
                : ((i = n), 0 === xe && Oe(oe)),
              i === n && (i = null),
              i !== n && (r = et()) !== n
                ? ((we = t), (o = i), (t = i = (a = r) ? (o ? -a : a) : 0))
                : ((ve = t), (t = n)),
              xe--,
              t === n && ((i = n), 0 === xe && Oe(ne)),
              t
            );
          }
          function Xe() {
            var t, i;
            return (
              xe++,
              (t = ve),
              e.substr(ve, 2) === ce
                ? ((i = ce), (ve += 2))
                : ((i = n), 0 === xe && Oe(se)),
              i !== n && ((we = t), (i = "'")),
              xe--,
              (t = i) === n && ((i = n), 0 === xe && Oe(ae)),
              t
            );
          }
          function Qe() {
            var t, i, r, o, a, c;
            if (
              ((t = ve),
              39 === e.charCodeAt(ve)
                ? ((i = C), ve++)
                : ((i = n), 0 === xe && Oe(E)),
              i !== n)
            )
              if (
                (r = (function () {
                  var t, i, r, o;
                  (t = ve),
                    (i = ve),
                    e.length > ve
                      ? ((r = e.charAt(ve)), ve++)
                      : ((r = n), 0 === xe && Oe(b));
                  r !== n
                    ? ((we = ve),
                      (o = (o =
                        "{" === (a = r) || "}" === a || (rt() && "#" === a))
                        ? void 0
                        : n) !== n
                        ? (i = r = [r, o])
                        : ((ve = i), (i = n)))
                    : ((ve = i), (i = n));
                  var a;
                  t = i !== n ? e.substring(t, ve) : i;
                  return t;
                })()) !== n
              ) {
                for (
                  o = ve,
                    a = [],
                    e.substr(ve, 2) === ce
                      ? ((c = ce), (ve += 2))
                      : ((c = n), 0 === xe && Oe(se)),
                    c === n &&
                      (Y.test(e.charAt(ve))
                        ? ((c = e.charAt(ve)), ve++)
                        : ((c = n), 0 === xe && Oe(O)));
                  c !== n;

                )
                  a.push(c),
                    e.substr(ve, 2) === ce
                      ? ((c = ce), (ve += 2))
                      : ((c = n), 0 === xe && Oe(se)),
                    c === n &&
                      (Y.test(e.charAt(ve))
                        ? ((c = e.charAt(ve)), ve++)
                        : ((c = n), 0 === xe && Oe(O)));
                (o = a !== n ? e.substring(o, ve) : a) !== n
                  ? (39 === e.charCodeAt(ve)
                      ? ((a = C), ve++)
                      : ((a = n), 0 === xe && Oe(E)),
                    a === n && (a = null),
                    a !== n
                      ? ((we = t), (t = i = r + o.replace("''", "'")))
                      : ((ve = t), (t = n)))
                  : ((ve = t), (t = n));
              } else (ve = t), (t = n);
            else (ve = t), (t = n);
            return t;
          }
          function Ve() {
            var t, i, r, o;
            return (
              (t = ve),
              (i = ve),
              e.length > ve
                ? ((r = e.charAt(ve)), ve++)
                : ((r = n), 0 === xe && Oe(b)),
              r !== n
                ? ((we = ve),
                  (o = (o = le(r)) ? void 0 : n) !== n
                    ? (i = r = [r, o])
                    : ((ve = i), (i = n)))
                : ((ve = i), (i = n)),
              i === n &&
                (10 === e.charCodeAt(ve)
                  ? ((i = "\n"), ve++)
                  : ((i = n), 0 === xe && Oe(ue))),
              (t = i !== n ? e.substring(t, ve) : i)
            );
          }
          function $e() {
            var t, i;
            return (
              xe++,
              (t = ve),
              (i = et()) === n && (i = tt()),
              (t = i !== n ? e.substring(t, ve) : i),
              xe--,
              t === n && ((i = n), 0 === xe && Oe(de)),
              t
            );
          }
          function et() {
            var t, i, r, o, a;
            if (
              (xe++,
              (t = ve),
              48 === e.charCodeAt(ve)
                ? ((i = "0"), ve++)
                : ((i = n), 0 === xe && Oe(pe)),
              i !== n && ((we = t), (i = 0)),
              (t = i) === n)
            ) {
              if (
                ((t = ve),
                (i = ve),
                fe.test(e.charAt(ve))
                  ? ((r = e.charAt(ve)), ve++)
                  : ((r = n), 0 === xe && Oe(he)),
                r !== n)
              ) {
                for (
                  o = [],
                    ye.test(e.charAt(ve))
                      ? ((a = e.charAt(ve)), ve++)
                      : ((a = n), 0 === xe && Oe(ge));
                  a !== n;

                )
                  o.push(a),
                    ye.test(e.charAt(ve))
                      ? ((a = e.charAt(ve)), ve++)
                      : ((a = n), 0 === xe && Oe(ge));
                o !== n ? (i = r = [r, o]) : ((ve = i), (i = n));
              } else (ve = i), (i = n);
              i !== n && ((we = t), (i = parseInt(i.join(""), 10))), (t = i);
            }
            return xe--, t === n && ((i = n), 0 === xe && Oe(me)), t;
          }
          function tt() {
            var t, i, r, o, a;
            if (
              (xe++,
              (t = ve),
              (i = []),
              (r = ve),
              (o = ve),
              xe++,
              (a = Ke()) === n && (a = Ge()),
              xe--,
              a === n ? (o = void 0) : ((ve = o), (o = n)),
              o !== n
                ? (e.length > ve
                    ? ((a = e.charAt(ve)), ve++)
                    : ((a = n), 0 === xe && Oe(b)),
                  a !== n ? (r = o = [o, a]) : ((ve = r), (r = n)))
                : ((ve = r), (r = n)),
              r !== n)
            )
              for (; r !== n; )
                i.push(r),
                  (r = ve),
                  (o = ve),
                  xe++,
                  (a = Ke()) === n && (a = Ge()),
                  xe--,
                  a === n ? (o = void 0) : ((ve = o), (o = n)),
                  o !== n
                    ? (e.length > ve
                        ? ((a = e.charAt(ve)), ve++)
                        : ((a = n), 0 === xe && Oe(b)),
                      a !== n ? (r = o = [o, a]) : ((ve = r), (r = n)))
                    : ((ve = r), (r = n));
            else i = n;
            return (
              (t = i !== n ? e.substring(t, ve) : i),
              xe--,
              t === n && ((i = n), 0 === xe && Oe(be)),
              t
            );
          }
          var it = ["root"];
          function rt() {
            return "plural" === it[it.length - 1];
          }
          function nt() {
            return t && t.captureLocation ? { location: Te() } : {};
          }
          if ((i = a()) !== n && ve === e.length) return i;
          throw (
            (i !== n && ve < e.length && Oe({ type: "end" }),
            Ae(
              Se,
              Me < e.length ? e.charAt(Me) : null,
              Me < e.length ? Ye(Me, Me + 1) : Ye(Me, Me)
            ))
          );
        },
        v = function () {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++)
            e += arguments[t].length;
          var r = Array(e),
            n = 0;
          for (t = 0; t < i; t++)
            for (var o = arguments[t], a = 0, c = o.length; a < c; a++, n++)
              r[n] = o[a];
          return r;
        },
        w = /(^|[^\\])#/g;
      function D(e) {
        e.forEach(function (e) {
          (u(e) || l(e)) &&
            Object.keys(e.options).forEach(function (t) {
              for (
                var i, r = e.options[t], o = -1, a = void 0, c = 0;
                c < r.value.length;
                c++
              ) {
                var s = r.value[c];
                if (n(s) && w.test(s.value)) {
                  (o = c), (a = s);
                  break;
                }
              }
              if (a) {
                var l = a.value.replace(w, "$1{" + e.value + ", number}"),
                  u = b(l);
                (i = r.value).splice.apply(i, v([o, 1], u));
              }
              D(r.value);
            });
        });
      }
      function M(e, t) {
        var i = b(e, t);
        return (t && !1 === t.normalizeHashtagInPlural) || D(i), i;
      }
      var S = function () {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++)
          e += arguments[t].length;
        var r = Array(e),
          n = 0;
        for (t = 0; t < i; t++)
          for (var o = arguments[t], a = 0, c = o.length; a < c; a++, n++)
            r[n] = o[a];
        return r;
      };
      function x(e) {
        return JSON.stringify(
          e.map(function (e) {
            return e && "object" == typeof e
              ? ((t = e),
                Object.keys(t)
                  .sort()
                  .map(function (e) {
                    var i;
                    return ((i = {})[e] = t[e]), i;
                  }))
              : e;
            var t;
          })
        );
      }
      const _ = function (e, t) {
        return (
          void 0 === t && (t = {}),
          function () {
            for (var i, r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            var o = x(r),
              a = o && t[o];
            return (
              a ||
                ((a = new ((i = e).bind.apply(i, S([void 0], r)))()),
                o && (t[o] = a)),
              a
            );
          }
        );
      };
      var T = function () {
          return (T =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        N =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function F(e) {
        var t = {};
        return (
          e.replace(N, function (e) {
            var i = e.length;
            switch (e[0]) {
              case "G":
                t.era = 4 === i ? "long" : 5 === i ? "narrow" : "short";
                break;
              case "y":
                t.year = 2 === i ? "2-digit" : "numeric";
                break;
              case "Y":
              case "u":
              case "U":
              case "r":
                throw new RangeError(
                  "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                );
              case "q":
              case "Q":
                throw new RangeError(
                  "`q/Q` (quarter) patterns are not supported"
                );
              case "M":
              case "L":
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  i - 1
                ];
                break;
              case "w":
              case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
              case "d":
                t.day = ["numeric", "2-digit"][i - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw new RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead"
                );
              case "E":
                t.weekday = 4 === i ? "short" : 5 === i ? "narrow" : "short";
                break;
              case "e":
                if (i < 4)
                  throw new RangeError(
                    "`e..eee` (weekday) patterns are not supported"
                  );
                t.weekday = ["short", "long", "narrow", "short"][i - 4];
                break;
              case "c":
                if (i < 4)
                  throw new RangeError(
                    "`c..ccc` (weekday) patterns are not supported"
                  );
                t.weekday = ["short", "long", "narrow", "short"][i - 4];
                break;
              case "a":
                t.hour12 = !0;
                break;
              case "b":
              case "B":
                throw new RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead"
                );
              case "h":
                (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][i - 1]);
                break;
              case "H":
                (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][i - 1]);
                break;
              case "K":
                (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][i - 1]);
                break;
              case "k":
                (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][i - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw new RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                );
              case "m":
                t.minute = ["numeric", "2-digit"][i - 1];
                break;
              case "s":
                t.second = ["numeric", "2-digit"][i - 1];
                break;
              case "S":
              case "A":
                throw new RangeError(
                  "`S/A` (second) pattenrs are not supported, use `s` instead"
                );
              case "z":
                t.timeZoneName = i < 4 ? "short" : "long";
                break;
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw new RangeError(
                  "`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead"
                );
            }
            return "";
          }),
          t
        );
      }
      var k = /^\.(?:(0+)(\+|#+)?)?$/g,
        C = /^(@+)?(\+|#+)?$/g;
      function E(e) {
        var t = {};
        return (
          e.replace(C, function (e, i, r) {
            return (
              "string" != typeof r
                ? ((t.minimumSignificantDigits = i.length),
                  (t.maximumSignificantDigits = i.length))
                : "+" === r
                ? (t.minimumSignificantDigits = i.length)
                : "#" === i[0]
                ? (t.maximumSignificantDigits = i.length)
                : ((t.minimumSignificantDigits = i.length),
                  (t.maximumSignificantDigits =
                    i.length + ("string" == typeof r ? r.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function Y(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
            return { currencySign: "accounting" };
          case "sign-always":
            return { signDisplay: "always" };
          case "sign-accounting-always":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
            return { signDisplay: "never" };
        }
      }
      function O(e) {
        var t = Y(e);
        return t || {};
      }
      function A(e) {
        for (var t = {}, i = 0, r = e; i < r.length; i++) {
          var n = r[i];
          switch (n.stem) {
            case "percent":
              t.style = "percent";
              continue;
            case "currency":
              (t.style = "currency"), (t.currency = n.options[0]);
              continue;
            case "group-off":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
              (t.style = "unit"),
                (t.unit = n.options[0].replace(/^(.*?)-/, ""));
              continue;
            case "compact-short":
              (t.notation = "compact"), (t.compactDisplay = "short");
              continue;
            case "compact-long":
              (t.notation = "compact"), (t.compactDisplay = "long");
              continue;
            case "scientific":
              t = T(
                T(T({}, t), { notation: "scientific" }),
                n.options.reduce(function (e, t) {
                  return T(T({}, e), O(t));
                }, {})
              );
              continue;
            case "engineering":
              t = T(
                T(T({}, t), { notation: "engineering" }),
                n.options.reduce(function (e, t) {
                  return T(T({}, e), O(t));
                }, {})
              );
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (t.currencyDisplay = "code"), (t.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (t.currencyDisplay = "name"), (t.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
          }
          if (k.test(n.stem)) {
            if (n.options.length > 1)
              throw new RangeError(
                "Fraction-precision stems only accept a single optional option"
              );
            n.stem.replace(k, function (e, i, r) {
              return (
                "." === e
                  ? (t.maximumFractionDigits = 0)
                  : "+" === r
                  ? (t.minimumFractionDigits = r.length)
                  : "#" === i[0]
                  ? (t.maximumFractionDigits = i.length)
                  : ((t.minimumFractionDigits = i.length),
                    (t.maximumFractionDigits =
                      i.length + ("string" == typeof r ? r.length : 0))),
                ""
              );
            }),
              n.options.length && (t = T(T({}, t), E(n.options[0])));
          } else if (C.test(n.stem)) t = T(T({}, t), E(n.stem));
          else {
            var o = Y(n.stem);
            o && (t = T(T({}, t), o));
          }
        }
        return t;
      }
      var L,
        P = (function () {
          var e = function (t, i) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(t, i);
          };
          return function (t, i) {
            function r() {
              this.constructor = t;
            }
            e(t, i),
              (t.prototype =
                null === i
                  ? Object.create(i)
                  : ((r.prototype = i.prototype), new r()));
          };
        })(),
        j = function () {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++)
            e += arguments[t].length;
          var r = Array(e),
            n = 0;
          for (t = 0; t < i; t++)
            for (var o = arguments[t], a = 0, c = o.length; a < c; a++, n++)
              r[n] = o[a];
          return r;
        },
        I = (function (e) {
          function t(t, i) {
            var r = e.call(this, t) || this;
            return (r.variableId = i), r;
          }
          return P(t, e), t;
        })(Error);
      function R(e, t, i, r, f, h, y) {
        if (1 === e.length && n(e[0])) return [{ type: 0, value: e[0].value }];
        for (var g, b = [], v = 0, w = e; v < w.length; v++) {
          var D = w[v];
          if (n(D)) b.push({ type: 0, value: D.value });
          else if (d(D))
            "number" == typeof h &&
              b.push({ type: 0, value: i.getNumberFormat(t).format(h) });
          else {
            var M = D.value;
            if (!f || !(M in f))
              throw new I(
                'The intl string context variable "' +
                  M +
                  '" was not provided to the string "' +
                  y +
                  '"'
              );
            var S = f[M];
            if (o(D))
              (S && "string" != typeof S && "number" != typeof S) ||
                (S =
                  "string" == typeof S || "number" == typeof S
                    ? String(S)
                    : ""),
                b.push({ type: 1, value: S });
            else if (c(D)) {
              var x = "string" == typeof D.style ? r.date[D.style] : void 0;
              b.push({ type: 0, value: i.getDateTimeFormat(t, x).format(S) });
            } else if (s(D)) {
              x =
                "string" == typeof D.style
                  ? r.time[D.style]
                  : p(D.style)
                  ? F(D.style.pattern)
                  : void 0;
              b.push({ type: 0, value: i.getDateTimeFormat(t, x).format(S) });
            } else if (a(D)) {
              x =
                "string" == typeof D.style
                  ? r.number[D.style]
                  : m(D.style)
                  ? A(D.style.tokens)
                  : void 0;
              b.push({ type: 0, value: i.getNumberFormat(t, x).format(S) });
            } else if (l(D)) {
              if (!(_ = D.options[S] || D.options.other))
                throw new RangeError(
                  'Invalid values for "' +
                    D.value +
                    '": "' +
                    S +
                    '". Options are "' +
                    Object.keys(D.options).join('", "') +
                    '"'
                );
              b.push.apply(b, R(_.value, t, i, r, f));
            } else if (u(D)) {
              var _;
              if (!(_ = D.options["=" + S])) {
                if (!Intl.PluralRules)
                  throw new I(
                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n'
                  );
                var T = i
                  .getPluralRules(t, { type: D.pluralType })
                  .select(S - (D.offset || 0));
                _ = D.options[T] || D.options.other;
              }
              if (!_)
                throw new RangeError(
                  'Invalid values for "' +
                    D.value +
                    '": "' +
                    S +
                    '". Options are "' +
                    Object.keys(D.options).join('", "') +
                    '"'
                );
              b.push.apply(b, R(_.value, t, i, r, f, S - (D.offset || 0)));
            } else;
          }
        }
        return (g = b).length < 2
          ? g
          : g.reduce(function (e, t) {
              var i = e[e.length - 1];
              return (
                i && 0 === i.type && 0 === t.type
                  ? (i.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function B(e, t, i, r, n, o) {
        var a = R(e, t, i, r, n, void 0, o);
        return 1 === a.length
          ? a[0].value
          : a.reduce(function (e, t) {
              return e + t.value;
            }, "");
      }
      var U = /@@(\d+_\d+)@@/g,
        z = 0;
      function H(e, t) {
        return e
          .split(U)
          .filter(Boolean)
          .map(function (e) {
            return null != t[e] ? t[e] : e;
          })
          .reduce(function (e, t) {
            return (
              e.length &&
              "string" == typeof t &&
              "string" == typeof e[e.length - 1]
                ? (e[e.length - 1] += t)
                : e.push(t),
              e
            );
          }, []);
      }
      var Z =
          /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/,
        W = Date.now() + "@@",
        K = [
          "area",
          "base",
          "br",
          "col",
          "embed",
          "hr",
          "img",
          "input",
          "link",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
        ];
      function G(e, t, i) {
        var r = e.tagName,
          n = e.outerHTML,
          o = e.textContent,
          a = e.childNodes;
        if (!r) return H(o || "", t);
        r = r.toLowerCase();
        var c = ~K.indexOf(r),
          s = i[r];
        if (s && c)
          throw new I(
            r +
              " is a self-closing tag and can not be used, please use another tag name."
          );
        if (!a.length) return [n];
        var l = Array.prototype.slice.call(a).reduce(function (e, r) {
          return e.concat(G(r, t, i));
        }, []);
        return s
          ? "function" == typeof s
            ? [s.apply(void 0, l)]
            : [s]
          : j(["<" + r + ">"], l, ["</" + r + ">"]);
      }
      function q(e, t, i, r, n, o) {
        var a = R(e, t, i, r, n, void 0, o),
          c = {},
          s = a.reduce(function (e, t) {
            if (0 === t.type) return e + t.value;
            var i = Date.now() + "_" + ++z;
            return (c[i] = t.value), e + "@@" + i + "@@";
          }, "");
        if (!Z.test(s)) return H(s, c);
        if (!n) throw new I("Message has placeholders but no values was given");
        if ("undefined" == typeof DOMParser)
          throw new I("Cannot format XML message without DOMParser");
        L || (L = new DOMParser());
        var l = L.parseFromString(
          '<formatted-message id="' + W + '">' + s + "</formatted-message>",
          "text/html"
        ).getElementById(W);
        if (!l) throw new I("Malformed HTML message " + s);
        var u = Object.keys(n).filter(function (e) {
          return !!l.getElementsByTagName(e).length;
        });
        if (!u.length) return H(s, c);
        var d = u.filter(function (e) {
          return e !== e.toLowerCase();
        });
        if (d.length)
          throw new I(
            "HTML tag must be lowercased but the following tags are not: " +
              d.join(", ")
          );
        return Array.prototype.slice.call(l.childNodes).reduce(function (e, t) {
          return e.concat(G(t, c, n));
        }, []);
      }
      var J = function () {
        return (J =
          Object.assign ||
          function (e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
              for (var n in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
      function X(e, t) {
        return t
          ? Object.keys(e).reduce(function (i, r) {
              var n, o;
              return (
                (i[r] =
                  ((n = e[r]),
                  (o = t[r])
                    ? J(
                        J(J({}, n || {}), o || {}),
                        Object.keys(n).reduce(function (e, t) {
                          return (e[t] = J(J({}, n[t]), o[t] || {})), e;
                        }, {})
                      )
                    : n)),
                i
              );
            }, J({}, e))
          : e;
      }
      function Q(e) {
        return (
          void 0 === e && (e = { number: {}, dateTime: {}, pluralRules: {} }),
          {
            getNumberFormat: _(Intl.NumberFormat, e.number),
            getDateTimeFormat: _(Intl.DateTimeFormat, e.dateTime),
            getPluralRules: _(Intl.PluralRules, e.pluralRules),
          }
        );
      }
      var V = (function () {
        function e(t, i, r, n) {
          var o = this;
          if (
            (void 0 === i && (i = e.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (e) {
              return B(o.ast, o.locales, o.formatters, o.formats, e, o.message);
            }),
            (this.formatToParts = function (e) {
              return R(
                o.ast,
                o.locales,
                o.formatters,
                o.formats,
                e,
                void 0,
                o.message
              );
            }),
            (this.formatHTMLMessage = function (e) {
              return q(o.ast, o.locales, o.formatters, o.formats, e, o.message);
            }),
            (this.resolvedOptions = function () {
              return {
                locale: Intl.NumberFormat.supportedLocalesOf(o.locales)[0],
              };
            }),
            (this.getAst = function () {
              return o.ast;
            }),
            "string" == typeof t)
          ) {
            if (((this.message = t), !e.__parse))
              throw new TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`"
              );
            this.ast = e.__parse(t, { normalizeHashtagInPlural: !1 });
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw new TypeError(
              "A message must be provided as a String or AST."
            );
          (this.formats = X(e.formats, r)),
            (this.locales = i),
            (this.formatters = (n && n.formatters) || Q(this.formatterCache));
        }
        return (
          (e.defaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
          (e.__parse = M),
          (e.formats = {
            number: {
              currency: { style: "currency" },
              percent: { style: "percent" },
            },
            date: {
              short: { month: "numeric", day: "numeric", year: "2-digit" },
              medium: { month: "short", day: "numeric", year: "numeric" },
              long: { month: "long", day: "numeric", year: "numeric" },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            },
            time: {
              short: { hour: "numeric", minute: "numeric" },
              medium: { hour: "numeric", minute: "numeric", second: "numeric" },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
            },
          }),
          e
        );
      })();
      const $ = V;
    },
    1143: (e) => {
      "use strict";
      e.exports = function (e, t, i, r, n, o, a, c) {
        if (!e) {
          var s;
          if (void 0 === t)
            s = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var l = [i, r, n, o, a, c],
              u = 0;
            (s = new Error(
              t.replace(/%s/g, function () {
                return l[u++];
              })
            )).name = "Invariant Violation";
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    5826: (e) => {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    973: (e, t, i) => {
      var r = i(1169),
        n = function (e) {
          var t = "",
            i = Object.keys(e);
          return (
            i.forEach(function (n, o) {
              var a = e[n];
              (function (e) {
                return /[height|width]$/.test(e);
              })((n = r(n))) &&
                "number" == typeof a &&
                (a += "px"),
                (t +=
                  !0 === a
                    ? n
                    : !1 === a
                    ? "not " + n
                    : "(" + n + ": " + a + ")"),
                o < i.length - 1 && (t += " and ");
            }),
            t
          );
        };
      e.exports = function (e) {
        var t = "";
        return "string" == typeof e
          ? e
          : e instanceof Array
          ? (e.forEach(function (i, r) {
              (t += n(i)), r < e.length - 1 && (t += ", ");
            }),
            t)
          : n(e);
      };
    },
    1296: (e, t, i) => {
      var r = /^\s+|\s+$/g,
        n = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        c = parseInt,
        s = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
        l = "object" == typeof self && self && self.Object === Object && self,
        u = s || l || Function("return this")(),
        d = Object.prototype.toString,
        m = Math.max,
        p = Math.min,
        f = function () {
          return u.Date.now();
        };
      function h(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function y(e) {
        if ("number" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                "[object Symbol]" == d.call(e))
            );
          })(e)
        )
          return NaN;
        if (h(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = h(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var i = o.test(e);
        return i || a.test(e) ? c(e.slice(2), i ? 2 : 8) : n.test(e) ? NaN : +e;
      }
      e.exports = function (e, t, i) {
        var r,
          n,
          o,
          a,
          c,
          s,
          l = 0,
          u = !1,
          d = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function b(t) {
          var i = r,
            o = n;
          return (r = n = void 0), (l = t), (a = e.apply(o, i));
        }
        function v(e) {
          return (l = e), (c = setTimeout(D, t)), u ? b(e) : a;
        }
        function w(e) {
          var i = e - s;
          return void 0 === s || i >= t || i < 0 || (d && e - l >= o);
        }
        function D() {
          var e = f();
          if (w(e)) return M(e);
          c = setTimeout(
            D,
            (function (e) {
              var i = t - (e - s);
              return d ? p(i, o - (e - l)) : i;
            })(e)
          );
        }
        function M(e) {
          return (c = void 0), g && r ? b(e) : ((r = n = void 0), a);
        }
        function S() {
          var e = f(),
            i = w(e);
          if (((r = arguments), (n = this), (s = e), i)) {
            if (void 0 === c) return v(s);
            if (d) return (c = setTimeout(D, t)), b(s);
          }
          return void 0 === c && (c = setTimeout(D, t)), a;
        }
        return (
          (t = y(t) || 0),
          h(i) &&
            ((u = !!i.leading),
            (o = (d = "maxWait" in i) ? m(y(i.maxWait) || 0, t) : o),
            (g = "trailing" in i ? !!i.trailing : g)),
          (S.cancel = function () {
            void 0 !== c && clearTimeout(c), (l = 0), (r = s = n = c = void 0);
          }),
          (S.flush = function () {
            return void 0 === c ? a : M(f());
          }),
          S
        );
      };
    },
    2378: (e, t, i) => {
      e = i.nmd(e);
      var r = "__lodash_hash_undefined__",
        n = 9007199254740991,
        o = "[object Arguments]",
        a = "[object Function]",
        c = "[object Object]",
        s = /^\[object .+?Constructor\]$/,
        l = /^(?:0|[1-9]\d*)$/,
        u = {};
      (u["[object Float32Array]"] =
        u["[object Float64Array]"] =
        u["[object Int8Array]"] =
        u["[object Int16Array]"] =
        u["[object Int32Array]"] =
        u["[object Uint8Array]"] =
        u["[object Uint8ClampedArray]"] =
        u["[object Uint16Array]"] =
        u["[object Uint32Array]"] =
          !0),
        (u[o] =
          u["[object Array]"] =
          u["[object ArrayBuffer]"] =
          u["[object Boolean]"] =
          u["[object DataView]"] =
          u["[object Date]"] =
          u["[object Error]"] =
          u[a] =
          u["[object Map]"] =
          u["[object Number]"] =
          u[c] =
          u["[object RegExp]"] =
          u["[object Set]"] =
          u["[object String]"] =
          u["[object WeakMap]"] =
            !1);
      var d = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
        m = "object" == typeof self && self && self.Object === Object && self,
        p = d || m || Function("return this")(),
        f = t && !t.nodeType && t,
        h = f && e && !e.nodeType && e,
        y = h && h.exports === f,
        g = y && d.process,
        b = (function () {
          try {
            var e = h && h.require && h.require("util").types;
            return e || (g && g.binding && g.binding("util"));
          } catch (t) {}
        })(),
        v = b && b.isTypedArray;
      function w(e, t, i) {
        switch (i.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, i[0]);
          case 2:
            return e.call(t, i[0], i[1]);
          case 3:
            return e.call(t, i[0], i[1], i[2]);
        }
        return e.apply(t, i);
      }
      var D,
        M,
        S,
        x = Array.prototype,
        _ = Function.prototype,
        T = Object.prototype,
        N = p["__core-js_shared__"],
        F = _.toString,
        k = T.hasOwnProperty,
        C = (D = /[^.]+$/.exec((N && N.keys && N.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + D
          : "",
        E = T.toString,
        Y = F.call(Object),
        O = RegExp(
          "^" +
            F.call(k)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        A = y ? p.Buffer : void 0,
        L = p.Symbol,
        P = p.Uint8Array,
        j = A ? A.allocUnsafe : void 0,
        I =
          ((M = Object.getPrototypeOf),
          (S = Object),
          function (e) {
            return M(S(e));
          }),
        R = Object.create,
        B = T.propertyIsEnumerable,
        U = x.splice,
        z = L ? L.toStringTag : void 0,
        H = (function () {
          try {
            var e = fe(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (t) {}
        })(),
        Z = A ? A.isBuffer : void 0,
        W = Math.max,
        K = Date.now,
        G = fe(p, "Map"),
        q = fe(Object, "create"),
        J = (function () {
          function e() {}
          return function (t) {
            if (!Te(t)) return {};
            if (R) return R(t);
            e.prototype = t;
            var i = new e();
            return (e.prototype = void 0), i;
          };
        })();
      function X(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Q(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function V(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function $(e) {
        var t = (this.__data__ = new Q(e));
        this.size = t.size;
      }
      function ee(e, t) {
        var i = De(e),
          r = !i && we(e),
          n = !i && !r && Se(e),
          o = !i && !r && !n && Fe(e),
          a = i || r || n || o,
          c = a
            ? (function (e, t) {
                for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
                return r;
              })(e.length, String)
            : [],
          s = c.length;
        for (var l in e)
          (!t && !k.call(e, l)) ||
            (a &&
              ("length" == l ||
                (n && ("offset" == l || "parent" == l)) ||
                (o &&
                  ("buffer" == l || "byteLength" == l || "byteOffset" == l)) ||
                he(l, s))) ||
            c.push(l);
        return c;
      }
      function te(e, t, i) {
        ((void 0 !== i && !ve(e[t], i)) || (void 0 === i && !(t in e))) &&
          ne(e, t, i);
      }
      function ie(e, t, i) {
        var r = e[t];
        (k.call(e, t) && ve(r, i) && (void 0 !== i || t in e)) || ne(e, t, i);
      }
      function re(e, t) {
        for (var i = e.length; i--; ) if (ve(e[i][0], t)) return i;
        return -1;
      }
      function ne(e, t, i) {
        "__proto__" == t && H
          ? H(e, t, {
              configurable: !0,
              enumerable: !0,
              value: i,
              writable: !0,
            })
          : (e[t] = i);
      }
      (X.prototype.clear = function () {
        (this.__data__ = q ? q(null) : {}), (this.size = 0);
      }),
        (X.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (X.prototype.get = function (e) {
          var t = this.__data__;
          if (q) {
            var i = t[e];
            return i === r ? void 0 : i;
          }
          return k.call(t, e) ? t[e] : void 0;
        }),
        (X.prototype.has = function (e) {
          var t = this.__data__;
          return q ? void 0 !== t[e] : k.call(t, e);
        }),
        (X.prototype.set = function (e, t) {
          var i = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (i[e] = q && void 0 === t ? r : t),
            this
          );
        }),
        (Q.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (Q.prototype.delete = function (e) {
          var t = this.__data__,
            i = re(t, e);
          return (
            !(i < 0) &&
            (i == t.length - 1 ? t.pop() : U.call(t, i, 1), --this.size, !0)
          );
        }),
        (Q.prototype.get = function (e) {
          var t = this.__data__,
            i = re(t, e);
          return i < 0 ? void 0 : t[i][1];
        }),
        (Q.prototype.has = function (e) {
          return re(this.__data__, e) > -1;
        }),
        (Q.prototype.set = function (e, t) {
          var i = this.__data__,
            r = re(i, e);
          return r < 0 ? (++this.size, i.push([e, t])) : (i[r][1] = t), this;
        }),
        (V.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new X(),
              map: new (G || Q)(),
              string: new X(),
            });
        }),
        (V.prototype.delete = function (e) {
          var t = pe(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (V.prototype.get = function (e) {
          return pe(this, e).get(e);
        }),
        (V.prototype.has = function (e) {
          return pe(this, e).has(e);
        }),
        (V.prototype.set = function (e, t) {
          var i = pe(this, e),
            r = i.size;
          return i.set(e, t), (this.size += i.size == r ? 0 : 1), this;
        }),
        ($.prototype.clear = function () {
          (this.__data__ = new Q()), (this.size = 0);
        }),
        ($.prototype.delete = function (e) {
          var t = this.__data__,
            i = t.delete(e);
          return (this.size = t.size), i;
        }),
        ($.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        ($.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        ($.prototype.set = function (e, t) {
          var i = this.__data__;
          if (i instanceof Q) {
            var r = i.__data__;
            if (!G || r.length < 199)
              return r.push([e, t]), (this.size = ++i.size), this;
            i = this.__data__ = new V(r);
          }
          return i.set(e, t), (this.size = i.size), this;
        });
      var oe,
        ae = function (e, t, i) {
          for (var r = -1, n = Object(e), o = i(e), a = o.length; a--; ) {
            var c = o[oe ? a : ++r];
            if (!1 === t(n[c], c, n)) break;
          }
          return e;
        };
      function ce(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : z && z in Object(e)
          ? (function (e) {
              var t = k.call(e, z),
                i = e[z];
              try {
                e[z] = void 0;
                var r = !0;
              } catch (o) {}
              var n = E.call(e);
              r && (t ? (e[z] = i) : delete e[z]);
              return n;
            })(e)
          : (function (e) {
              return E.call(e);
            })(e);
      }
      function se(e) {
        return Ne(e) && ce(e) == o;
      }
      function le(e) {
        return (
          !(
            !Te(e) ||
            (function (e) {
              return !!C && C in e;
            })(e)
          ) &&
          (xe(e) ? O : s).test(
            (function (e) {
              if (null != e) {
                try {
                  return F.call(e);
                } catch (t) {}
                try {
                  return e + "";
                } catch (t) {}
              }
              return "";
            })(e)
          )
        );
      }
      function ue(e) {
        if (!Te(e))
          return (function (e) {
            var t = [];
            if (null != e) for (var i in Object(e)) t.push(i);
            return t;
          })(e);
        var t = ye(e),
          i = [];
        for (var r in e)
          ("constructor" != r || (!t && k.call(e, r))) && i.push(r);
        return i;
      }
      function de(e, t, i, r, n) {
        e !== t &&
          ae(
            t,
            function (o, a) {
              if ((n || (n = new $()), Te(o)))
                !(function (e, t, i, r, n, o, a) {
                  var s = ge(e, i),
                    l = ge(t, i),
                    u = a.get(l);
                  if (u) return void te(e, i, u);
                  var d = o ? o(s, l, i + "", e, t, a) : void 0,
                    m = void 0 === d;
                  if (m) {
                    var p = De(l),
                      f = !p && Se(l),
                      h = !p && !f && Fe(l);
                    (d = l),
                      p || f || h
                        ? De(s)
                          ? (d = s)
                          : Ne((w = s)) && Me(w)
                          ? (d = (function (e, t) {
                              var i = -1,
                                r = e.length;
                              t || (t = Array(r));
                              for (; ++i < r; ) t[i] = e[i];
                              return t;
                            })(s))
                          : f
                          ? ((m = !1),
                            (d = (function (e, t) {
                              if (t) return e.slice();
                              var i = e.length,
                                r = j ? j(i) : new e.constructor(i);
                              return e.copy(r), r;
                            })(l, !0)))
                          : h
                          ? ((m = !1),
                            (y = l),
                            (g = !0
                              ? ((b = y.buffer),
                                (v = new b.constructor(b.byteLength)),
                                new P(v).set(new P(b)),
                                v)
                              : y.buffer),
                            (d = new y.constructor(g, y.byteOffset, y.length)))
                          : (d = [])
                        : (function (e) {
                            if (!Ne(e) || ce(e) != c) return !1;
                            var t = I(e);
                            if (null === t) return !0;
                            var i = k.call(t, "constructor") && t.constructor;
                            return (
                              "function" == typeof i &&
                              i instanceof i &&
                              F.call(i) == Y
                            );
                          })(l) || we(l)
                        ? ((d = s),
                          we(s)
                            ? (d = (function (e) {
                                return (function (e, t, i, r) {
                                  var n = !i;
                                  i || (i = {});
                                  var o = -1,
                                    a = t.length;
                                  for (; ++o < a; ) {
                                    var c = t[o],
                                      s = r ? r(i[c], e[c], c, i, e) : void 0;
                                    void 0 === s && (s = e[c]),
                                      n ? ne(i, c, s) : ie(i, c, s);
                                  }
                                  return i;
                                })(e, ke(e));
                              })(s))
                            : (Te(s) && !xe(s)) ||
                              (d = (function (e) {
                                return "function" != typeof e.constructor ||
                                  ye(e)
                                  ? {}
                                  : J(I(e));
                              })(l)))
                        : (m = !1);
                  }
                  var y, g, b, v;
                  var w;
                  m && (a.set(l, d), n(d, l, r, o, a), a.delete(l));
                  te(e, i, d);
                })(e, t, a, i, de, r, n);
              else {
                var s = r ? r(ge(e, a), o, a + "", e, t, n) : void 0;
                void 0 === s && (s = o), te(e, a, s);
              }
            },
            ke
          );
      }
      function me(e, t) {
        return be(
          (function (e, t, i) {
            return (
              (t = W(void 0 === t ? e.length - 1 : t, 0)),
              function () {
                for (
                  var r = arguments,
                    n = -1,
                    o = W(r.length - t, 0),
                    a = Array(o);
                  ++n < o;

                )
                  a[n] = r[t + n];
                n = -1;
                for (var c = Array(t + 1); ++n < t; ) c[n] = r[n];
                return (c[t] = i(a)), w(e, this, c);
              }
            );
          })(e, t, Ye),
          e + ""
        );
      }
      function pe(e, t) {
        var i,
          r,
          n = e.__data__;
        return (
          "string" == (r = typeof (i = t)) ||
          "number" == r ||
          "symbol" == r ||
          "boolean" == r
            ? "__proto__" !== i
            : null === i
        )
          ? n["string" == typeof t ? "string" : "hash"]
          : n.map;
      }
      function fe(e, t) {
        var i = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return le(i) ? i : void 0;
      }
      function he(e, t) {
        var i = typeof e;
        return (
          !!(t = null == t ? n : t) &&
          ("number" == i || ("symbol" != i && l.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function ye(e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || T);
      }
      function ge(e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      }
      var be = (function (e) {
        var t = 0,
          i = 0;
        return function () {
          var r = K(),
            n = 16 - (r - i);
          if (((i = r), n > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      })(
        H
          ? function (e, t) {
              return H(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value:
                  ((i = t),
                  function () {
                    return i;
                  }),
                writable: !0,
              });
              var i;
            }
          : Ye
      );
      function ve(e, t) {
        return e === t || (e != e && t != t);
      }
      var we = se(
          (function () {
            return arguments;
          })()
        )
          ? se
          : function (e) {
              return Ne(e) && k.call(e, "callee") && !B.call(e, "callee");
            },
        De = Array.isArray;
      function Me(e) {
        return null != e && _e(e.length) && !xe(e);
      }
      var Se =
        Z ||
        function () {
          return !1;
        };
      function xe(e) {
        if (!Te(e)) return !1;
        var t = ce(e);
        return (
          t == a ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function _e(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
      }
      function Te(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function Ne(e) {
        return null != e && "object" == typeof e;
      }
      var Fe = v
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })(v)
        : function (e) {
            return Ne(e) && _e(e.length) && !!u[ce(e)];
          };
      function ke(e) {
        return Me(e) ? ee(e, !0) : ue(e);
      }
      var Ce,
        Ee =
          ((Ce = function (e, t, i) {
            de(e, t, i);
          }),
          me(function (e, t) {
            var i = -1,
              r = t.length,
              n = r > 1 ? t[r - 1] : void 0,
              o = r > 2 ? t[2] : void 0;
            for (
              n = Ce.length > 3 && "function" == typeof n ? (r--, n) : void 0,
                o &&
                  (function (e, t, i) {
                    if (!Te(i)) return !1;
                    var r = typeof t;
                    return (
                      !!("number" == r
                        ? Me(i) && he(t, i.length)
                        : "string" == r && (t in i)) && ve(i[t], e)
                    );
                  })(t[0], t[1], o) &&
                  ((n = r < 3 ? void 0 : n), (r = 1)),
                e = Object(e);
              ++i < r;

            ) {
              var a = t[i];
              a && Ce(e, a, i, n);
            }
            return e;
          }));
      function Ye(e) {
        return e;
      }
      e.exports = Ee;
    },
    7059: function (e) {
      /*! lozad.js - v1.16.0 - 2020-09-06
       * https://github.com/ApoorvSaxena/lozad.js
       * Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
      e.exports = (function () {
        "use strict";
        var e = "undefined" != typeof document && document.documentMode,
          t = {
            rootMargin: "0px",
            threshold: 0,
            load: function (t) {
              if ("picture" === t.nodeName.toLowerCase()) {
                var i = t.querySelector("img"),
                  r = !1;
                null === i && ((i = document.createElement("img")), (r = !0)),
                  e &&
                    t.getAttribute("data-iesrc") &&
                    (i.src = t.getAttribute("data-iesrc")),
                  t.getAttribute("data-alt") &&
                    (i.alt = t.getAttribute("data-alt")),
                  r && t.append(i);
              }
              if (
                "video" === t.nodeName.toLowerCase() &&
                !t.getAttribute("data-src") &&
                t.children
              ) {
                for (
                  var n = t.children, o = void 0, a = 0;
                  a <= n.length - 1;
                  a++
                )
                  (o = n[a].getAttribute("data-src")) && (n[a].src = o);
                t.load();
              }
              t.getAttribute("data-poster") &&
                (t.poster = t.getAttribute("data-poster")),
                t.getAttribute("data-src") &&
                  (t.src = t.getAttribute("data-src")),
                t.getAttribute("data-srcset") &&
                  t.setAttribute("srcset", t.getAttribute("data-srcset"));
              var c = ",";
              if (
                (t.getAttribute("data-background-delimiter") &&
                  (c = t.getAttribute("data-background-delimiter")),
                t.getAttribute("data-background-image"))
              )
                t.style.backgroundImage =
                  "url('" +
                  t
                    .getAttribute("data-background-image")
                    .split(c)
                    .join("'),url('") +
                  "')";
              else if (t.getAttribute("data-background-image-set")) {
                var s = t.getAttribute("data-background-image-set").split(c),
                  l = s[0].substr(0, s[0].indexOf(" ")) || s[0];
                (l = -1 === l.indexOf("url(") ? "url(" + l + ")" : l),
                  1 === s.length
                    ? (t.style.backgroundImage = l)
                    : t.setAttribute(
                        "style",
                        (t.getAttribute("style") || "") +
                          "background-image: " +
                          l +
                          "; background-image: -webkit-image-set(" +
                          s +
                          "); background-image: image-set(" +
                          s +
                          ")"
                      );
              }
              t.getAttribute("data-toggle-class") &&
                t.classList.toggle(t.getAttribute("data-toggle-class"));
            },
            loaded: function () {},
          };
        function i(e) {
          e.setAttribute("data-loaded", !0);
        }
        var r = function (e) {
            return "true" === e.getAttribute("data-loaded");
          },
          n = function (e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : document;
            return e instanceof Element
              ? [e]
              : e instanceof NodeList
              ? e
              : t.querySelectorAll(e);
          };
        return function () {
          var e,
            o,
            a =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : ".lozad",
            c =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            s = Object.assign({}, t, c),
            l = s.root,
            u = s.rootMargin,
            d = s.threshold,
            m = s.load,
            p = s.loaded,
            f = void 0;
          "undefined" != typeof window &&
            window.IntersectionObserver &&
            (f = new IntersectionObserver(
              ((e = m),
              (o = p),
              function (t, n) {
                t.forEach(function (t) {
                  (0 < t.intersectionRatio || t.isIntersecting) &&
                    (n.unobserve(t.target),
                    r(t.target) || (e(t.target), i(t.target), o(t.target)));
                });
              }),
              { root: l, rootMargin: u, threshold: d }
            ));
          for (var h, y = n(a, l), g = 0; g < y.length; g++)
            (h = y[g]).getAttribute("data-placeholder-background") &&
              (h.style.background = h.getAttribute(
                "data-placeholder-background"
              ));
          return {
            observe: function () {
              for (var e = n(a, l), t = 0; t < e.length; t++)
                r(e[t]) || (f ? f.observe(e[t]) : (m(e[t]), i(e[t]), p(e[t])));
            },
            triggerLoad: function (e) {
              r(e) || (m(e), i(e), p(e));
            },
            observer: f,
          };
        };
      })();
    },
    7418: (e) => {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var t = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function n(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, i = 0; i < 10; i++)
            t["_" + String.fromCharCode(i)] = i;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (n) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, o) {
            for (var a, c, s = n(e), l = 1; l < arguments.length; l++) {
              for (var u in (a = Object(arguments[l])))
                i.call(a, u) && (s[u] = a[u]);
              if (t) {
                c = t(a);
                for (var d = 0; d < c.length; d++)
                  r.call(a, c[d]) && (s[c[d]] = a[c[d]]);
              }
            }
            return s;
          };
    },
    4779: (e, t, i) => {
      var r = i(5826);
      (e.exports = p),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return c(o(e, t), t);
        }),
        (e.exports.tokensToFunction = c),
        (e.exports.tokensToRegExp = m);
      var n = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function o(e, t) {
        for (
          var i, r = [], o = 0, a = 0, c = "", u = (t && t.delimiter) || "/";
          null != (i = n.exec(e));

        ) {
          var d = i[0],
            m = i[1],
            p = i.index;
          if (((c += e.slice(a, p)), (a = p + d.length), m)) c += m[1];
          else {
            var f = e[a],
              h = i[2],
              y = i[3],
              g = i[4],
              b = i[5],
              v = i[6],
              w = i[7];
            c && (r.push(c), (c = ""));
            var D = null != h && null != f && f !== h,
              M = "+" === v || "*" === v,
              S = "?" === v || "*" === v,
              x = i[2] || u,
              _ = g || b;
            r.push({
              name: y || o++,
              prefix: h || "",
              delimiter: x,
              optional: S,
              repeat: M,
              partial: D,
              asterisk: !!w,
              pattern: _ ? l(_) : w ? ".*" : "[^" + s(x) + "]+?",
            });
          }
        }
        return a < e.length && (c += e.substr(a)), c && r.push(c), r;
      }
      function a(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function c(e, t) {
        for (var i = new Array(e.length), n = 0; n < e.length; n++)
          "object" == typeof e[n] &&
            (i[n] = new RegExp("^(?:" + e[n].pattern + ")$", d(t)));
        return function (t, n) {
          for (
            var o = "",
              c = t || {},
              s = (n || {}).pretty ? a : encodeURIComponent,
              l = 0;
            l < e.length;
            l++
          ) {
            var u = e[l];
            if ("string" != typeof u) {
              var d,
                m = c[u.name];
              if (null == m) {
                if (u.optional) {
                  u.partial && (o += u.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + u.name + '" to be defined');
              }
              if (r(m)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(m) +
                      "`"
                  );
                if (0 === m.length) {
                  if (u.optional) continue;
                  throw new TypeError(
                    'Expected "' + u.name + '" to not be empty'
                  );
                }
                for (var p = 0; p < m.length; p++) {
                  if (((d = s(m[p])), !i[l].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  o += (0 === p ? u.prefix : u.delimiter) + d;
                }
              } else {
                if (
                  ((d = u.asterisk
                    ? encodeURI(m).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : s(m)),
                  !i[l].test(d))
                )
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but received "' +
                      d +
                      '"'
                  );
                o += u.prefix + d;
              }
            } else o += u;
          }
          return o;
        };
      }
      function s(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function l(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function u(e, t) {
        return (e.keys = t), e;
      }
      function d(e) {
        return e && e.sensitive ? "" : "i";
      }
      function m(e, t, i) {
        r(t) || ((i = t || i), (t = []));
        for (
          var n = (i = i || {}).strict, o = !1 !== i.end, a = "", c = 0;
          c < e.length;
          c++
        ) {
          var l = e[c];
          if ("string" == typeof l) a += s(l);
          else {
            var m = s(l.prefix),
              p = "(?:" + l.pattern + ")";
            t.push(l),
              l.repeat && (p += "(?:" + m + p + ")*"),
              (a += p =
                l.optional
                  ? l.partial
                    ? m + "(" + p + ")?"
                    : "(?:" + m + "(" + p + "))?"
                  : m + "(" + p + ")");
          }
        }
        var f = s(i.delimiter || "/"),
          h = a.slice(-f.length) === f;
        return (
          n || (a = (h ? a.slice(0, -f.length) : a) + "(?:" + f + "(?=$))?"),
          (a += o ? "$" : n && h ? "" : "(?=" + f + "|$)"),
          u(new RegExp("^" + a, d(i)), t)
        );
      }
      function p(e, t, i) {
        return (
          r(t) || ((i = t || i), (t = [])),
          (i = i || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var i = e.source.match(/\((?!\?)/g);
                if (i)
                  for (var r = 0; r < i.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return u(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, i) {
                for (var r = [], n = 0; n < e.length; n++)
                  r.push(p(e[n], t, i).source);
                return u(new RegExp("(?:" + r.join("|") + ")", d(i)), t);
              })(e, t, i)
            : (function (e, t, i) {
                return m(o(e, i), t, i);
              })(e, t, i)
        );
      }
    },
    2703: (e, t, i) => {
      "use strict";
      var r = i(414);
      function n() {}
      function o() {}
      (o.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, i, n, o, a) {
            if (a !== r) {
              var c = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var i = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: n,
          };
          return (i.PropTypes = i), i;
        });
    },
    5697: (e, t, i) => {
      e.exports = i(2703)();
    },
    414: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    2587: (e) => {
      "use strict";
      function t(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e, i, r, n) {
        (i = i || "&"), (r = r || "=");
        var o = {};
        if ("string" != typeof e || 0 === e.length) return o;
        var a = /\+/g;
        e = e.split(i);
        var c = 1e3;
        n && "number" == typeof n.maxKeys && (c = n.maxKeys);
        var s = e.length;
        c > 0 && s > c && (s = c);
        for (var l = 0; l < s; ++l) {
          var u,
            d,
            m,
            p,
            f = e[l].replace(a, "%20"),
            h = f.indexOf(r);
          h >= 0
            ? ((u = f.substr(0, h)), (d = f.substr(h + 1)))
            : ((u = f), (d = "")),
            (m = decodeURIComponent(u)),
            (p = decodeURIComponent(d)),
            t(o, m)
              ? Array.isArray(o[m])
                ? o[m].push(p)
                : (o[m] = [o[m], p])
              : (o[m] = p);
        }
        return o;
      };
    },
    2361: (e) => {
      "use strict";
      var t = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function (e, i, r, n) {
        return (
          (i = i || "&"),
          (r = r || "="),
          null === e && (e = void 0),
          "object" == typeof e
            ? Object.keys(e)
                .map(function (n) {
                  var o = encodeURIComponent(t(n)) + r;
                  return Array.isArray(e[n])
                    ? e[n]
                        .map(function (e) {
                          return o + encodeURIComponent(t(e));
                        })
                        .join(i)
                    : o + encodeURIComponent(t(e[n]));
                })
                .filter(Boolean)
                .join(i)
            : n
            ? encodeURIComponent(t(n)) + r + encodeURIComponent(t(e))
            : ""
        );
      };
    },
    7673: (e, t, i) => {
      "use strict";
      (t.decode = t.parse = i(2587)), (t.encode = t.stringify = i(2361));
    },
    200: (e, t, i) => {
      "use strict";
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var r,
                n,
                o = [],
                a = !0,
                c = !1;
              try {
                for (
                  i = i.call(e);
                  !(a = (r = i.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (s) {
                (c = !0), (n = s);
              } finally {
                try {
                  a || null == i.return || i.return();
                } finally {
                  if (c) throw n;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return n(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i
                  ? Array.from(e)
                  : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? n(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      i.d(t, { Z: () => f });
      var a = i(9756);
      var c = i(7294),
        s = i(4184),
        l = i.n(s);
      function u(e, t) {
        var i = t || {},
          r = i.defaultValue,
          n = i.value,
          a = i.onChange,
          s = i.postState,
          l = (function (e) {
            var t = c.useRef(!1),
              i = o(c.useState(e), 2),
              r = i[0],
              n = i[1];
            return (
              c.useEffect(function () {
                return (
                  (t.current = !1),
                  function () {
                    t.current = !0;
                  }
                );
              }, []),
              [
                r,
                function (e, i) {
                  (i && t.current) || n(e);
                },
              ]
            );
          })(function () {
            return void 0 !== n
              ? n
              : void 0 !== r
              ? "function" == typeof r
                ? r()
                : r
              : "function" == typeof e
              ? e()
              : e;
          }),
          u = o(l, 2),
          d = u[0],
          m = u[1],
          p = void 0 !== n ? n : d;
        s && (p = s(p));
        var f = c.useRef(a);
        f.current = a;
        var h = c.useCallback(
            function (e, t) {
              m(e, t), p !== e && f.current && f.current(e, p);
            },
            [p, f]
          ),
          y = c.useRef(n);
        return (
          c.useEffect(
            function () {
              void 0 === n && n !== y.current && m(n), (y.current = n);
            },
            [n]
          ),
          [p, h]
        );
      }
      var d = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= d.F1 && t <= d.F12)
          )
            return !1;
          switch (t) {
            case d.ALT:
            case d.CAPS_LOCK:
            case d.CONTEXT_MENU:
            case d.CTRL:
            case d.DOWN:
            case d.END:
            case d.ESC:
            case d.HOME:
            case d.INSERT:
            case d.LEFT:
            case d.MAC_FF_META:
            case d.META:
            case d.NUMLOCK:
            case d.NUM_CENTER:
            case d.PAGE_DOWN:
            case d.PAGE_UP:
            case d.PAUSE:
            case d.PRINT_SCREEN:
            case d.RIGHT:
            case d.SHIFT:
            case d.UP:
            case d.WIN_KEY:
            case d.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= d.ZERO && e <= d.NINE) return !0;
          if (e >= d.NUM_ZERO && e <= d.NUM_MULTIPLY) return !0;
          if (e >= d.A && e <= d.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case d.SPACE:
            case d.QUESTION_MARK:
            case d.NUM_PLUS:
            case d.NUM_MINUS:
            case d.NUM_PERIOD:
            case d.NUM_DIVISION:
            case d.SEMICOLON:
            case d.DASH:
            case d.EQUALS:
            case d.COMMA:
            case d.PERIOD:
            case d.SLASH:
            case d.APOSTROPHE:
            case d.SINGLE_QUOTE:
            case d.OPEN_SQUARE_BRACKET:
            case d.BACKSLASH:
            case d.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      const m = d;
      var p = c.forwardRef(function (e, t) {
        var i,
          n = e.prefixCls,
          s = void 0 === n ? "rc-switch" : n,
          d = e.className,
          p = e.checked,
          f = e.defaultChecked,
          h = e.disabled,
          y = e.loadingIcon,
          g = e.checkedChildren,
          b = e.unCheckedChildren,
          v = e.onClick,
          w = e.onChange,
          D = e.onKeyDown,
          M = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = (0, a.Z)(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++)
                (i = o[r]),
                  t.indexOf(i) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, i) &&
                      (n[i] = e[i]));
            }
            return n;
          })(e, [
            "prefixCls",
            "className",
            "checked",
            "defaultChecked",
            "disabled",
            "loadingIcon",
            "checkedChildren",
            "unCheckedChildren",
            "onClick",
            "onChange",
            "onKeyDown",
          ]),
          S = o(u(!1, { value: p, defaultValue: f }), 2),
          x = S[0],
          _ = S[1];
        function T(e, t) {
          var i = x;
          return h || (_((i = e)), null == w || w(i, t)), i;
        }
        var N = l()(
          s,
          d,
          (r((i = {}), "".concat(s, "-checked"), x),
          r(i, "".concat(s, "-disabled"), h),
          i)
        );
        return c.createElement(
          "button",
          Object.assign({}, M, {
            type: "button",
            role: "switch",
            "aria-checked": x,
            disabled: h,
            className: N,
            ref: t,
            onKeyDown: function (e) {
              e.which === m.LEFT ? T(!1, e) : e.which === m.RIGHT && T(!0, e),
                null == D || D(e);
            },
            onClick: function (e) {
              var t = T(!x, e);
              null == v || v(t, e);
            },
          }),
          y,
          c.createElement(
            "span",
            { className: "".concat(s, "-inner") },
            x ? g : b
          )
        );
      });
      p.displayName = "Switch";
      const f = p;
    },
    9921: (e, t) => {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = "function" == typeof Symbol && Symbol.for,
        r = i ? Symbol.for("react.element") : 60103,
        n = i ? Symbol.for("react.portal") : 60106,
        o = i ? Symbol.for("react.fragment") : 60107,
        a = i ? Symbol.for("react.strict_mode") : 60108,
        c = i ? Symbol.for("react.profiler") : 60114,
        s = i ? Symbol.for("react.provider") : 60109,
        l = i ? Symbol.for("react.context") : 60110,
        u = i ? Symbol.for("react.async_mode") : 60111,
        d = i ? Symbol.for("react.concurrent_mode") : 60111,
        m = i ? Symbol.for("react.forward_ref") : 60112,
        p = i ? Symbol.for("react.suspense") : 60113,
        f = i ? Symbol.for("react.suspense_list") : 60120,
        h = i ? Symbol.for("react.memo") : 60115,
        y = i ? Symbol.for("react.lazy") : 60116,
        g = i ? Symbol.for("react.block") : 60121,
        b = i ? Symbol.for("react.fundamental") : 60117,
        v = i ? Symbol.for("react.responder") : 60118,
        w = i ? Symbol.for("react.scope") : 60119;
      function D(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case u:
                case d:
                case o:
                case c:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case m:
                    case y:
                    case h:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      function M(e) {
        return D(e) === d;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = l),
        (t.ContextProvider = s),
        (t.Element = r),
        (t.ForwardRef = m),
        (t.Fragment = o),
        (t.Lazy = y),
        (t.Memo = h),
        (t.Portal = n),
        (t.Profiler = c),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return M(e) || D(e) === u;
        }),
        (t.isConcurrentMode = M),
        (t.isContextConsumer = function (e) {
          return D(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return D(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return D(e) === m;
        }),
        (t.isFragment = function (e) {
          return D(e) === o;
        }),
        (t.isLazy = function (e) {
          return D(e) === y;
        }),
        (t.isMemo = function (e) {
          return D(e) === h;
        }),
        (t.isPortal = function (e) {
          return D(e) === n;
        }),
        (t.isProfiler = function (e) {
          return D(e) === c;
        }),
        (t.isStrictMode = function (e) {
          return D(e) === a;
        }),
        (t.isSuspense = function (e) {
          return D(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === d ||
            e === c ||
            e === a ||
            e === p ||
            e === f ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === y ||
                e.$$typeof === h ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = D);
    },
    9864: (e, t, i) => {
      "use strict";
      e.exports = i(9921);
    },
    6871: (e, t, i) => {
      "use strict";
      function r() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null != e && this.setState(e);
      }
      function n(e) {
        this.setState(
          function (t) {
            var i = this.constructor.getDerivedStateFromProps(e, t);
            return null != i ? i : null;
          }.bind(this)
        );
      }
      function o(e, t) {
        try {
          var i = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(i, r));
        } finally {
          (this.props = i), (this.state = r);
        }
      }
      function a(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" != typeof e.getDerivedStateFromProps &&
          "function" != typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var i = null,
          a = null,
          c = null;
        if (
          ("function" == typeof t.componentWillMount
            ? (i = "componentWillMount")
            : "function" == typeof t.UNSAFE_componentWillMount &&
              (i = "UNSAFE_componentWillMount"),
          "function" == typeof t.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof t.componentWillUpdate
            ? (c = "componentWillUpdate")
            : "function" == typeof t.UNSAFE_componentWillUpdate &&
              (c = "UNSAFE_componentWillUpdate"),
          null !== i || null !== a || null !== c)
        ) {
          var s = e.displayName || e.name,
            l =
              "function" == typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              s +
              " uses " +
              l +
              " but also contains the following legacy lifecycles:" +
              (null !== i ? "\n  " + i : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== c ? "\n  " + c : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" == typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = r), (t.componentWillReceiveProps = n)),
          "function" == typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = o;
          var u = t.componentDidUpdate;
          t.componentDidUpdate = function (e, t, i) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : i;
            u.call(this, e, t, r);
          };
        }
        return e;
      }
      i.r(t),
        i.d(t, { polyfill: () => a }),
        (r.__suppressDeprecationWarning = !0),
        (n.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0);
    },
    9983: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bodyOpenClassName = t.portalClassName = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, i, r) {
            return i && e(t.prototype, i), r && e(t, r), t;
          };
        })(),
        o = i(7294),
        a = f(o),
        c = f(i(3935)),
        s = f(i(5697)),
        l = f(i(8747)),
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return (t.default = e), t;
        })(i(7149)),
        d = i(1112),
        m = f(d),
        p = i(6871);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var g = (t.portalClassName = "ReactModalPortal"),
        b = (t.bodyOpenClassName = "ReactModal__Body--open"),
        v = d.canUseDOM && void 0 !== c.default.createPortal,
        w = function () {
          return v
            ? c.default.createPortal
            : c.default.unstable_renderSubtreeIntoContainer;
        };
      function D(e) {
        return e();
      }
      var M = (function (e) {
        function t() {
          var e, i, n;
          h(this, t);
          for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
            s[u] = arguments[u];
          return (
            (i = n =
              y(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(s)
                )
              )),
            (n.removePortal = function () {
              !v && c.default.unmountComponentAtNode(n.node);
              var e = D(n.props.parentSelector);
              e && e.contains(n.node)
                ? e.removeChild(n.node)
                : console.warn(
                    'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.'
                  );
            }),
            (n.portalRef = function (e) {
              n.portal = e;
            }),
            (n.renderPortal = function (e) {
              var i = w()(
                n,
                a.default.createElement(
                  l.default,
                  r({ defaultStyles: t.defaultStyles }, e)
                ),
                n.node
              );
              n.portalRef(i);
            }),
            y(n, i)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(
            t,
            [
              {
                key: "componentDidMount",
                value: function () {
                  d.canUseDOM &&
                    (v || (this.node = document.createElement("div")),
                    (this.node.className = this.props.portalClassName),
                    D(this.props.parentSelector).appendChild(this.node),
                    !v && this.renderPortal(this.props));
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  return {
                    prevParent: D(e.parentSelector),
                    nextParent: D(this.props.parentSelector),
                  };
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t, i) {
                  if (d.canUseDOM) {
                    var r = this.props,
                      n = r.isOpen,
                      o = r.portalClassName;
                    e.portalClassName !== o && (this.node.className = o);
                    var a = i.prevParent,
                      c = i.nextParent;
                    c !== a &&
                      (a.removeChild(this.node), c.appendChild(this.node)),
                      (e.isOpen || n) && !v && this.renderPortal(this.props);
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if (d.canUseDOM && this.node && this.portal) {
                    var e = this.portal.state,
                      t = Date.now(),
                      i =
                        e.isOpen &&
                        this.props.closeTimeoutMS &&
                        (e.closesAt || t + this.props.closeTimeoutMS);
                    i
                      ? (e.beforeClose || this.portal.closeWithTimeout(),
                        setTimeout(this.removePortal, i - t))
                      : this.removePortal();
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return d.canUseDOM && v
                    ? (!this.node &&
                        v &&
                        (this.node = document.createElement("div")),
                      w()(
                        a.default.createElement(
                          l.default,
                          r(
                            {
                              ref: this.portalRef,
                              defaultStyles: t.defaultStyles,
                            },
                            this.props
                          )
                        ),
                        this.node
                      ))
                    : null;
                },
              },
            ],
            [
              {
                key: "setAppElement",
                value: function (e) {
                  u.setElement(e);
                },
              },
            ]
          ),
          t
        );
      })(o.Component);
      (M.propTypes = {
        isOpen: s.default.bool.isRequired,
        style: s.default.shape({
          content: s.default.object,
          overlay: s.default.object,
        }),
        portalClassName: s.default.string,
        bodyOpenClassName: s.default.string,
        htmlOpenClassName: s.default.string,
        className: s.default.oneOfType([
          s.default.string,
          s.default.shape({
            base: s.default.string.isRequired,
            afterOpen: s.default.string.isRequired,
            beforeClose: s.default.string.isRequired,
          }),
        ]),
        overlayClassName: s.default.oneOfType([
          s.default.string,
          s.default.shape({
            base: s.default.string.isRequired,
            afterOpen: s.default.string.isRequired,
            beforeClose: s.default.string.isRequired,
          }),
        ]),
        appElement: s.default.instanceOf(m.default),
        onAfterOpen: s.default.func,
        onRequestClose: s.default.func,
        closeTimeoutMS: s.default.number,
        ariaHideApp: s.default.bool,
        shouldFocusAfterRender: s.default.bool,
        shouldCloseOnOverlayClick: s.default.bool,
        shouldReturnFocusAfterClose: s.default.bool,
        preventScroll: s.default.bool,
        parentSelector: s.default.func,
        aria: s.default.object,
        data: s.default.object,
        role: s.default.string,
        contentLabel: s.default.string,
        shouldCloseOnEsc: s.default.bool,
        overlayRef: s.default.func,
        contentRef: s.default.func,
        id: s.default.string,
        overlayElement: s.default.func,
        contentElement: s.default.func,
      }),
        (M.defaultProps = {
          isOpen: !1,
          portalClassName: g,
          bodyOpenClassName: b,
          role: "dialog",
          ariaHideApp: !0,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: !0,
          shouldCloseOnEsc: !0,
          shouldCloseOnOverlayClick: !0,
          shouldReturnFocusAfterClose: !0,
          preventScroll: !1,
          parentSelector: function () {
            return document.body;
          },
          overlayElement: function (e, t) {
            return a.default.createElement("div", e, t);
          },
          contentElement: function (e, t) {
            return a.default.createElement("div", e, t);
          },
        }),
        (M.defaultStyles = {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }),
        (0, p.polyfill)(M),
        (t.default = M);
    },
    8747: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          },
        n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, i, r) {
            return i && e(t.prototype, i), r && e(t, r), t;
          };
        })(),
        a = i(7294),
        c = h(i(5697)),
        s = f(i(9685)),
        l = h(i(8338)),
        u = f(i(7149)),
        d = f(i(2409)),
        m = h(i(1112)),
        p = h(i(9623));
      function f(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return (t.default = e), t;
      }
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(5063);
      var y = {
          overlay: "ReactModal__Overlay",
          content: "ReactModal__Content",
        },
        g = 0,
        b = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var i = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (i.setOverlayRef = function (e) {
                (i.overlay = e), i.props.overlayRef && i.props.overlayRef(e);
              }),
              (i.setContentRef = function (e) {
                (i.content = e), i.props.contentRef && i.props.contentRef(e);
              }),
              (i.afterClose = function () {
                var e = i.props,
                  t = e.appElement,
                  r = e.ariaHideApp,
                  n = e.htmlOpenClassName,
                  o = e.bodyOpenClassName;
                o && d.remove(document.body, o),
                  n && d.remove(document.getElementsByTagName("html")[0], n),
                  r && g > 0 && 0 === (g -= 1) && u.show(t),
                  i.props.shouldFocusAfterRender &&
                    (i.props.shouldReturnFocusAfterClose
                      ? (s.returnFocus(i.props.preventScroll),
                        s.teardownScopedFocus())
                      : s.popWithoutFocus()),
                  i.props.onAfterClose && i.props.onAfterClose(),
                  p.default.deregister(i);
              }),
              (i.open = function () {
                i.beforeOpen(),
                  i.state.afterOpen && i.state.beforeClose
                    ? (clearTimeout(i.closeTimer),
                      i.setState({ beforeClose: !1 }))
                    : (i.props.shouldFocusAfterRender &&
                        (s.setupScopedFocus(i.node), s.markForFocusLater()),
                      i.setState({ isOpen: !0 }, function () {
                        i.setState({ afterOpen: !0 }),
                          i.props.isOpen &&
                            i.props.onAfterOpen &&
                            i.props.onAfterOpen({
                              overlayEl: i.overlay,
                              contentEl: i.content,
                            });
                      }));
              }),
              (i.close = function () {
                i.props.closeTimeoutMS > 0
                  ? i.closeWithTimeout()
                  : i.closeWithoutTimeout();
              }),
              (i.focusContent = function () {
                return (
                  i.content &&
                  !i.contentHasFocus() &&
                  i.content.focus({ preventScroll: !0 })
                );
              }),
              (i.closeWithTimeout = function () {
                var e = Date.now() + i.props.closeTimeoutMS;
                i.setState({ beforeClose: !0, closesAt: e }, function () {
                  i.closeTimer = setTimeout(
                    i.closeWithoutTimeout,
                    i.state.closesAt - Date.now()
                  );
                });
              }),
              (i.closeWithoutTimeout = function () {
                i.setState(
                  {
                    beforeClose: !1,
                    isOpen: !1,
                    afterOpen: !1,
                    closesAt: null,
                  },
                  i.afterClose
                );
              }),
              (i.handleKeyDown = function (e) {
                9 === e.keyCode && (0, l.default)(i.content, e),
                  i.props.shouldCloseOnEsc &&
                    27 === e.keyCode &&
                    (e.stopPropagation(), i.requestClose(e));
              }),
              (i.handleOverlayOnClick = function (e) {
                null === i.shouldClose && (i.shouldClose = !0),
                  i.shouldClose &&
                    i.props.shouldCloseOnOverlayClick &&
                    (i.ownerHandlesClose()
                      ? i.requestClose(e)
                      : i.focusContent()),
                  (i.shouldClose = null);
              }),
              (i.handleContentOnMouseUp = function () {
                i.shouldClose = !1;
              }),
              (i.handleOverlayOnMouseDown = function (e) {
                i.props.shouldCloseOnOverlayClick ||
                  e.target != i.overlay ||
                  e.preventDefault();
              }),
              (i.handleContentOnClick = function () {
                i.shouldClose = !1;
              }),
              (i.handleContentOnMouseDown = function () {
                i.shouldClose = !1;
              }),
              (i.requestClose = function (e) {
                return i.ownerHandlesClose() && i.props.onRequestClose(e);
              }),
              (i.ownerHandlesClose = function () {
                return i.props.onRequestClose;
              }),
              (i.shouldBeClosed = function () {
                return !i.state.isOpen && !i.state.beforeClose;
              }),
              (i.contentHasFocus = function () {
                return (
                  document.activeElement === i.content ||
                  i.content.contains(document.activeElement)
                );
              }),
              (i.buildClassName = function (e, t) {
                var r =
                    "object" === (void 0 === t ? "undefined" : n(t))
                      ? t
                      : {
                          base: y[e],
                          afterOpen: y[e] + "--after-open",
                          beforeClose: y[e] + "--before-close",
                        },
                  o = r.base;
                return (
                  i.state.afterOpen && (o = o + " " + r.afterOpen),
                  i.state.beforeClose && (o = o + " " + r.beforeClose),
                  "string" == typeof t && t ? o + " " + t : o
                );
              }),
              (i.attributesFromObject = function (e, t) {
                return Object.keys(t).reduce(function (i, r) {
                  return (i[e + "-" + r] = t[r]), i;
                }, {});
              }),
              (i.state = { afterOpen: !1, beforeClose: !1 }),
              (i.shouldClose = null),
              (i.moveFromContentToOverlay = null),
              i
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isOpen && this.open();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  this.props.isOpen && !e.isOpen
                    ? this.open()
                    : !this.props.isOpen && e.isOpen && this.close(),
                    this.props.shouldFocusAfterRender &&
                      this.state.isOpen &&
                      !t.isOpen &&
                      this.focusContent();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.state.isOpen && this.afterClose(),
                    clearTimeout(this.closeTimer);
                },
              },
              {
                key: "beforeOpen",
                value: function () {
                  var e = this.props,
                    t = e.appElement,
                    i = e.ariaHideApp,
                    r = e.htmlOpenClassName,
                    n = e.bodyOpenClassName;
                  n && d.add(document.body, n),
                    r && d.add(document.getElementsByTagName("html")[0], r),
                    i && ((g += 1), u.hide(t)),
                    p.default.register(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.id,
                    i = e.className,
                    n = e.overlayClassName,
                    o = e.defaultStyles,
                    a = e.children,
                    c = i ? {} : o.content,
                    s = n ? {} : o.overlay;
                  if (this.shouldBeClosed()) return null;
                  var l = {
                      ref: this.setOverlayRef,
                      className: this.buildClassName("overlay", n),
                      style: r({}, s, this.props.style.overlay),
                      onClick: this.handleOverlayOnClick,
                      onMouseDown: this.handleOverlayOnMouseDown,
                    },
                    u = r(
                      {
                        id: t,
                        ref: this.setContentRef,
                        style: r({}, c, this.props.style.content),
                        className: this.buildClassName("content", i),
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContentOnMouseDown,
                        onMouseUp: this.handleContentOnMouseUp,
                        onClick: this.handleContentOnClick,
                        role: this.props.role,
                        "aria-label": this.props.contentLabel,
                      },
                      this.attributesFromObject(
                        "aria",
                        r({ modal: !0 }, this.props.aria)
                      ),
                      this.attributesFromObject("data", this.props.data || {}),
                      { "data-testid": this.props.testId }
                    ),
                    d = this.props.contentElement(u, a);
                  return this.props.overlayElement(l, d);
                },
              },
            ]),
            t
          );
        })(a.Component);
      (b.defaultProps = {
        style: { overlay: {}, content: {} },
        defaultStyles: {},
      }),
        (b.propTypes = {
          isOpen: c.default.bool.isRequired,
          defaultStyles: c.default.shape({
            content: c.default.object,
            overlay: c.default.object,
          }),
          style: c.default.shape({
            content: c.default.object,
            overlay: c.default.object,
          }),
          className: c.default.oneOfType([c.default.string, c.default.object]),
          overlayClassName: c.default.oneOfType([
            c.default.string,
            c.default.object,
          ]),
          bodyOpenClassName: c.default.string,
          htmlOpenClassName: c.default.string,
          ariaHideApp: c.default.bool,
          appElement: c.default.instanceOf(m.default),
          onAfterOpen: c.default.func,
          onAfterClose: c.default.func,
          onRequestClose: c.default.func,
          closeTimeoutMS: c.default.number,
          shouldFocusAfterRender: c.default.bool,
          shouldCloseOnOverlayClick: c.default.bool,
          shouldReturnFocusAfterClose: c.default.bool,
          preventScroll: c.default.bool,
          role: c.default.string,
          contentLabel: c.default.string,
          aria: c.default.object,
          data: c.default.object,
          children: c.default.node,
          shouldCloseOnEsc: c.default.bool,
          overlayRef: c.default.func,
          contentRef: c.default.func,
          id: c.default.string,
          overlayElement: c.default.func,
          contentElement: c.default.func,
          testId: c.default.string,
        }),
        (t.default = b),
        (e.exports = t.default);
    },
    7149: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertNodeList = s),
        (t.setElement = function (e) {
          var t = e;
          if ("string" == typeof t && a.canUseDOM) {
            var i = document.querySelectorAll(t);
            s(i, t), (t = "length" in i ? i[0] : i);
          }
          return (c = t || c);
        }),
        (t.validateElement = l),
        (t.hide = function (e) {
          l(e) && (e || c).setAttribute("aria-hidden", "true");
        }),
        (t.show = function (e) {
          l(e) && (e || c).removeAttribute("aria-hidden");
        }),
        (t.documentNotReadyOrSSRTesting = function () {
          c = null;
        }),
        (t.resetForTesting = function () {
          c = null;
        });
      var r,
        n = i(2473),
        o = (r = n) && r.__esModule ? r : { default: r },
        a = i(1112);
      var c = null;
      function s(e, t) {
        if (!e || !e.length)
          throw new Error(
            "react-modal: No elements were found for selector " + t + "."
          );
      }
      function l(e) {
        return (
          !(!e && !c) ||
          ((0, o.default)(
            !1,
            [
              "react-modal: App element is not defined.",
              "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
              "This is needed so screen readers don't see main content",
              "when modal is opened. It is not recommended, but you can opt-out",
              "by setting `ariaHideApp={false}`.",
            ].join(" ")
          ),
          !1)
        );
      }
    },
    5063: (e, t, i) => {
      "use strict";
      var r,
        n = i(9623),
        o = (r = n) && r.__esModule ? r : { default: r };
      var a = void 0,
        c = void 0,
        s = [];
      function l() {
        0 !== s.length && s[s.length - 1].focusContent();
      }
      o.default.subscribe(function (e, t) {
        (a && c) ||
          ((a = document.createElement("div")).setAttribute(
            "data-react-modal-body-trap",
            ""
          ),
          (a.style.position = "absolute"),
          (a.style.opacity = "0"),
          a.setAttribute("tabindex", "0"),
          a.addEventListener("focus", l),
          (c = a.cloneNode()).addEventListener("focus", l)),
          (s = t).length > 0
            ? (document.body.firstChild !== a &&
                document.body.insertBefore(a, document.body.firstChild),
              document.body.lastChild !== c && document.body.appendChild(c))
            : (a.parentElement && a.parentElement.removeChild(a),
              c.parentElement && c.parentElement.removeChild(c));
      });
    },
    2409: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dumpClassLists = function () {
          0;
        });
      var i = {},
        r = {};
      (t.add = function (e, t) {
        return (
          (n = e.classList),
          (o = "html" == e.nodeName.toLowerCase() ? i : r),
          void t.split(" ").forEach(function (e) {
            !(function (e, t) {
              e[t] || (e[t] = 0), (e[t] += 1);
            })(o, e),
              n.add(e);
          })
        );
        var n, o;
      }),
        (t.remove = function (e, t) {
          return (
            (n = e.classList),
            (o = "html" == e.nodeName.toLowerCase() ? i : r),
            void t.split(" ").forEach(function (e) {
              !(function (e, t) {
                e[t] && (e[t] -= 1);
              })(o, e),
                0 === o[e] && n.remove(e);
            })
          );
          var n, o;
        });
    },
    9685: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleBlur = l),
        (t.handleFocus = u),
        (t.markForFocusLater = function () {
          a.push(document.activeElement);
        }),
        (t.returnFocus = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = null;
          try {
            return void (
              0 !== a.length && (t = a.pop()).focus({ preventScroll: e })
            );
          } catch (i) {
            console.warn(
              [
                "You tried to return focus to",
                t,
                "but it is not in the DOM anymore",
              ].join(" ")
            );
          }
        }),
        (t.popWithoutFocus = function () {
          a.length > 0 && a.pop();
        }),
        (t.setupScopedFocus = function (e) {
          (c = e),
            window.addEventListener
              ? (window.addEventListener("blur", l, !1),
                document.addEventListener("focus", u, !0))
              : (window.attachEvent("onBlur", l),
                document.attachEvent("onFocus", u));
        }),
        (t.teardownScopedFocus = function () {
          (c = null),
            window.addEventListener
              ? (window.removeEventListener("blur", l),
                document.removeEventListener("focus", u))
              : (window.detachEvent("onBlur", l),
                document.detachEvent("onFocus", u));
        });
      var r,
        n = i(7845),
        o = (r = n) && r.__esModule ? r : { default: r };
      var a = [],
        c = null,
        s = !1;
      function l() {
        s = !0;
      }
      function u() {
        if (s) {
          if (((s = !1), !c)) return;
          setTimeout(function () {
            c.contains(document.activeElement) ||
              ((0, o.default)(c)[0] || c).focus();
          }, 0);
        }
      }
    },
    9623: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = new (function e() {
        var t = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.register = function (e) {
            -1 === t.openInstances.indexOf(e) &&
              (t.openInstances.push(e), t.emit("register"));
          }),
          (this.deregister = function (e) {
            var i = t.openInstances.indexOf(e);
            -1 !== i && (t.openInstances.splice(i, 1), t.emit("deregister"));
          }),
          (this.subscribe = function (e) {
            t.subscribers.push(e);
          }),
          (this.emit = function (e) {
            t.subscribers.forEach(function (i) {
              return i(e, t.openInstances.slice());
            });
          }),
          (this.openInstances = []),
          (this.subscribers = []);
      })();
      (t.default = i), (e.exports = t.default);
    },
    1112: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canUseDOM = void 0);
      var r,
        n = i(8875);
      var o = ((r = n) && r.__esModule ? r : { default: r }).default,
        a = o.canUseDOM ? window.HTMLElement : {};
      t.canUseDOM = o.canUseDOM;
      t.default = a;
    },
    8338: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var i = (0, o.default)(e);
          if (!i.length) return void t.preventDefault();
          var r = void 0,
            n = t.shiftKey,
            a = i[0],
            c = i[i.length - 1];
          if (e === document.activeElement) {
            if (!n) return;
            r = c;
          }
          c !== document.activeElement || n || (r = a);
          a === document.activeElement && n && (r = c);
          if (r) return t.preventDefault(), void r.focus();
          var s = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
          if (
            null == s ||
            "Chrome" == s[1] ||
            null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
          )
            return;
          var l = i.indexOf(document.activeElement);
          l > -1 && (l += n ? -1 : 1);
          if (void 0 === (r = i[l]))
            return t.preventDefault(), void (r = n ? c : a).focus();
          t.preventDefault(), r.focus();
        });
      var r,
        n = i(7845),
        o = (r = n) && r.__esModule ? r : { default: r };
      e.exports = t.default;
    },
    7845: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return [].slice.call(e.querySelectorAll("*"), 0).filter(o);
        });
      /*!
       * Adapted from jQuery UI core
       *
       * http://jqueryui.com
       *
       * Copyright 2014 jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       *
       * http://api.jqueryui.com/category/ui-core/
       */
      var i = /input|select|textarea|button|object/;
      function r(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var i = window.getComputedStyle(e);
        return t
          ? "visible" !== i.getPropertyValue("overflow") ||
              (e.scrollWidth <= 0 && e.scrollHeight <= 0)
          : "none" == i.getPropertyValue("display");
      }
      function n(e, t) {
        var n = e.nodeName.toLowerCase();
        return (
          ((i.test(n) && !e.disabled) || ("a" === n && e.href) || t) &&
          (function (e) {
            for (var t = e; t && t !== document.body; ) {
              if (r(t)) return !1;
              t = t.parentNode;
            }
            return !0;
          })(e)
        );
      }
      function o(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var i = isNaN(t);
        return (i || t >= 0) && n(e, !i);
      }
      e.exports = t.default;
    },
    3253: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        n = i(9983),
        o = (r = n) && r.__esModule ? r : { default: r };
      (t.default = o.default), (e.exports = t.default);
    },
    5977: (e, t, i) => {
      "use strict";
      i.d(t, {
        AW: () => M,
        F0: () => b,
        s6: () => g,
        LX: () => D,
        k6: () => k,
        TH: () => C,
      });
      var r = i(3552),
        n = i(7294),
        o = i(5697),
        a = i.n(o),
        c = i(7531),
        s = 1073741823,
        l =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== i.g
            ? i.g
            : {};
      function u(e) {
        var t = [];
        return {
          on: function (e) {
            t.push(e);
          },
          off: function (e) {
            t = t.filter(function (t) {
              return t !== e;
            });
          },
          get: function () {
            return e;
          },
          set: function (i, r) {
            (e = i),
              t.forEach(function (t) {
                return t(e, r);
              });
          },
        };
      }
      const d =
        n.createContext ||
        function (e, t) {
          var i,
            o,
            c =
              "__create-react-context-" +
              (function () {
                var e = "__global_unique_id__";
                return (l[e] = (l[e] || 0) + 1);
              })() +
              "__",
            d = (function (e) {
              function i() {
                var t;
                return (
                  ((t = e.apply(this, arguments) || this).emitter = u(
                    t.props.value
                  )),
                  t
                );
              }
              (0, r.Z)(i, e);
              var n = i.prototype;
              return (
                (n.getChildContext = function () {
                  var e;
                  return ((e = {})[c] = this.emitter), e;
                }),
                (n.componentWillReceiveProps = function (e) {
                  if (this.props.value !== e.value) {
                    var i,
                      r = this.props.value,
                      n = e.value;
                    (
                      (o = r) === (a = n)
                        ? 0 !== o || 1 / o == 1 / a
                        : o != o && a != a
                    )
                      ? (i = 0)
                      : ((i = "function" == typeof t ? t(r, n) : s),
                        0 !== (i |= 0) && this.emitter.set(e.value, i));
                  }
                  var o, a;
                }),
                (n.render = function () {
                  return this.props.children;
                }),
                i
              );
            })(n.Component);
          d.childContextTypes = (((i = {})[c] = a().object.isRequired), i);
          var m = (function (t) {
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).state = {
                  value: e.getValue(),
                }),
                (e.onUpdate = function (t, i) {
                  0 != ((0 | e.observedBits) & i) &&
                    e.setState({ value: e.getValue() });
                }),
                e
              );
            }
            (0, r.Z)(i, t);
            var n = i.prototype;
            return (
              (n.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? s : t;
              }),
              (n.componentDidMount = function () {
                this.context[c] && this.context[c].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? s : e;
              }),
              (n.componentWillUnmount = function () {
                this.context[c] && this.context[c].off(this.onUpdate);
              }),
              (n.getValue = function () {
                return this.context[c] ? this.context[c].get() : e;
              }),
              (n.render = function () {
                return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
                  this.state.value
                );
                var e;
              }),
              i
            );
          })(n.Component);
          return (
            (m.contextTypes = (((o = {})[c] = a().object), o)),
            { Provider: d, Consumer: m }
          );
        };
      var m = i(2177),
        p = i(2122),
        f = i(4779),
        h = i.n(f),
        y = (i(9864), i(9756)),
        g =
          (i(8679),
          (function (e) {
            var t = d();
            return (t.displayName = e), t;
          })("Router")),
        b = (function (e) {
          function t(t) {
            var i;
            return (
              ((i = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (i._isMounted = !1),
              (i._pendingLocation = null),
              t.staticContext ||
                (i.unlisten = t.history.listen(function (e) {
                  i._isMounted
                    ? i.setState({ location: e })
                    : (i._pendingLocation = e);
                })),
              i
            );
          }
          (0, r.Z)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var i = t.prototype;
          return (
            (i.componentDidMount = function () {
              (this._isMounted = !0),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (i.componentWillUnmount = function () {
              this.unlisten && this.unlisten();
            }),
            (i.render = function () {
              return n.createElement(g.Provider, {
                children: this.props.children || null,
                value: {
                  history: this.props.history,
                  location: this.state.location,
                  match: t.computeRootMatch(this.state.location.pathname),
                  staticContext: this.props.staticContext,
                },
              });
            }),
            t
          );
        })(n.Component);
      n.Component;
      n.Component;
      var v = {},
        w = 0;
      function D(e, t) {
        void 0 === t && (t = {}),
          ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
        var i = t,
          r = i.path,
          n = i.exact,
          o = void 0 !== n && n,
          a = i.strict,
          c = void 0 !== a && a,
          s = i.sensitive,
          l = void 0 !== s && s;
        return [].concat(r).reduce(function (t, i) {
          if (!i && "" !== i) return null;
          if (t) return t;
          var r = (function (e, t) {
              var i = "" + t.end + t.strict + t.sensitive,
                r = v[i] || (v[i] = {});
              if (r[e]) return r[e];
              var n = [],
                o = { regexp: h()(e, n, t), keys: n };
              return w < 1e4 && ((r[e] = o), w++), o;
            })(i, { end: o, strict: c, sensitive: l }),
            n = r.regexp,
            a = r.keys,
            s = n.exec(e);
          if (!s) return null;
          var u = s[0],
            d = s.slice(1),
            m = e === u;
          return o && !m
            ? null
            : {
                path: i,
                url: "/" === i && "" === u ? "/" : u,
                isExact: m,
                params: a.reduce(function (e, t, i) {
                  return (e[t.name] = d[i]), e;
                }, {}),
              };
        }, null);
      }
      var M = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return n.createElement(g.Consumer, null, function (t) {
              t || (0, m.Z)(!1);
              var i = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? D(i.pathname, e.props)
                  : t.match,
                o = (0, p.Z)({}, t, { location: i, match: r }),
                a = e.props,
                c = a.children,
                s = a.component,
                l = a.render;
              return (
                Array.isArray(c) && 0 === c.length && (c = null),
                n.createElement(
                  g.Provider,
                  { value: o },
                  o.match
                    ? c
                      ? "function" == typeof c
                        ? c(o)
                        : c
                      : s
                      ? n.createElement(s, o)
                      : l
                      ? l(o)
                      : null
                    : "function" == typeof c
                    ? c(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(n.Component);
      function S(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function x(e, t) {
        if (!e) return t;
        var i = S(e);
        return 0 !== t.pathname.indexOf(i)
          ? t
          : (0, p.Z)({}, t, { pathname: t.pathname.substr(i.length) });
      }
      function _(e) {
        return "string" == typeof e ? e : (0, c.Ep)(e);
      }
      function T(e) {
        return function () {
          (0, m.Z)(!1);
        };
      }
      function N() {}
      n.Component;
      n.Component;
      var F = n.useContext;
      function k() {
        return F(g).history;
      }
      function C() {
        return F(g).location;
      }
    },
    8205: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NextArrow = t.PrevArrow = void 0);
      var r = a(i(7294)),
        n = a(i(4184)),
        o = i(5518);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                d(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function d(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t, i) {
        return t && p(e.prototype, t), i && p(e, i), e;
      }
      function h(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && y(e, t);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = v(e);
          if (t) {
            var n = v(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return b(this, i);
        };
      }
      function b(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var w = (function (e) {
        h(i, e);
        var t = g(i);
        function i() {
          return m(this, i), t.apply(this, arguments);
        }
        return (
          f(i, [
            {
              key: "clickHandler",
              value: function (e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              },
            },
            {
              key: "render",
              value: function () {
                var e = { "slick-arrow": !0, "slick-prev": !0 },
                  t = this.clickHandler.bind(this, { message: "previous" });
                !this.props.infinite &&
                  (0 === this.props.currentSlide ||
                    this.props.slideCount <= this.props.slidesToShow) &&
                  ((e["slick-disabled"] = !0), (t = null));
                var i = {
                    key: "0",
                    "data-role": "none",
                    className: (0, n.default)(e),
                    style: { display: "block" },
                    onClick: t,
                  },
                  o = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount,
                  };
                return this.props.prevArrow
                  ? r.default.cloneElement(this.props.prevArrow, u(u({}, i), o))
                  : r.default.createElement(
                      "button",
                      s({ key: "0", type: "button" }, i),
                      " ",
                      "Previous"
                    );
              },
            },
          ]),
          i
        );
      })(r.default.PureComponent);
      t.PrevArrow = w;
      var D = (function (e) {
        h(i, e);
        var t = g(i);
        function i() {
          return m(this, i), t.apply(this, arguments);
        }
        return (
          f(i, [
            {
              key: "clickHandler",
              value: function (e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              },
            },
            {
              key: "render",
              value: function () {
                var e = { "slick-arrow": !0, "slick-next": !0 },
                  t = this.clickHandler.bind(this, { message: "next" });
                (0, o.canGoNext)(this.props) ||
                  ((e["slick-disabled"] = !0), (t = null));
                var i = {
                    key: "1",
                    "data-role": "none",
                    className: (0, n.default)(e),
                    style: { display: "block" },
                    onClick: t,
                  },
                  a = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount,
                  };
                return this.props.nextArrow
                  ? r.default.cloneElement(this.props.nextArrow, u(u({}, i), a))
                  : r.default.createElement(
                      "button",
                      s({ key: "1", type: "button" }, i),
                      " ",
                      "Next"
                    );
              },
            },
          ]),
          i
        );
      })(r.default.PureComponent);
      t.NextArrow = D;
    },
    3492: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        n = (r = i(7294)) && r.__esModule ? r : { default: r };
      var o = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function (e) {
          return n.default.createElement(
            "ul",
            { style: { display: "block" } },
            e
          );
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function (e) {
          return n.default.createElement("button", null, e + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0,
      };
      t.default = o;
    },
    6329: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Dots = void 0);
      var r = a(i(7294)),
        n = a(i(4184)),
        o = i(5518);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function l(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = h(e);
          if (t) {
            var n = h(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return f(this, i);
        };
      }
      function f(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var y = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && m(e, t);
        })(f, e);
        var t,
          i,
          a,
          c = p(f);
        function f() {
          return u(this, f), c.apply(this, arguments);
        }
        return (
          (t = f),
          (i = [
            {
              key: "clickHandler",
              value: function (e, t) {
                t.preventDefault(), this.props.clickHandler(e);
              },
            },
            {
              key: "render",
              value: function () {
                for (
                  var e,
                    t = this.props,
                    i = t.onMouseEnter,
                    a = t.onMouseOver,
                    c = t.onMouseLeave,
                    u = t.infinite,
                    d = t.slidesToScroll,
                    m = t.slidesToShow,
                    p = t.slideCount,
                    f = t.currentSlide,
                    h = (e = {
                      slideCount: p,
                      slidesToScroll: d,
                      slidesToShow: m,
                      infinite: u,
                    }).infinite
                      ? Math.ceil(e.slideCount / e.slidesToScroll)
                      : Math.ceil(
                          (e.slideCount - e.slidesToShow) / e.slidesToScroll
                        ) + 1,
                    y = { onMouseEnter: i, onMouseOver: a, onMouseLeave: c },
                    g = [],
                    b = 0;
                  b < h;
                  b++
                ) {
                  var v = (b + 1) * d - 1,
                    w = u ? v : (0, o.clamp)(v, 0, p - 1),
                    D = w - (d - 1),
                    M = u ? D : (0, o.clamp)(D, 0, p - 1),
                    S = (0, n.default)({
                      "slick-active": u ? f >= M && f <= w : f === M,
                    }),
                    x = {
                      message: "dots",
                      index: b,
                      slidesToScroll: d,
                      currentSlide: f,
                    },
                    _ = this.clickHandler.bind(this, x);
                  g = g.concat(
                    r.default.createElement(
                      "li",
                      { key: b, className: S },
                      r.default.cloneElement(this.props.customPaging(b), {
                        onClick: _,
                      })
                    )
                  );
                }
                return r.default.cloneElement(
                  this.props.appendDots(g),
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? s(Object(i), !0).forEach(function (t) {
                            l(e, t, i[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(i)
                          )
                        : s(Object(i)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(i, t)
                            );
                          });
                    }
                    return e;
                  })({ className: this.props.dotsClass }, y)
                );
              },
            },
          ]) && d(t.prototype, i),
          a && d(t, a),
          f
        );
      })(r.default.PureComponent);
      t.Dots = y;
    },
    6066: (e, t, i) => {
      "use strict";
      var r;
      t.Z = void 0;
      var n = ((r = i(5798)) && r.__esModule ? r : { default: r }).default;
      t.Z = n;
    },
    6948: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
        trackStyle: {},
        trackWidth: 0,
        targetSlide: 0,
      };
      t.default = i;
    },
    6801: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InnerSlider = void 0);
      var r = m(i(7294)),
        n = m(i(6948)),
        o = m(i(1296)),
        a = m(i(4184)),
        c = i(5518),
        s = i(4740),
        l = i(6329),
        u = i(8205),
        d = m(i(1033));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (i = o[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (i = o[r]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (n[i] = e[i]));
        }
        return n;
      }
      function y(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(i), !0).forEach(function (t) {
                x(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : y(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function b(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = S(e);
          if (t) {
            var n = S(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return D(this, i);
        };
      }
      function D(e, t) {
        return !t || ("object" !== p(t) && "function" != typeof t) ? M(e) : t;
      }
      function M(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var _ = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && v(e, t);
        })(D, e);
        var t,
          i,
          m,
          y = w(D);
        function D(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, D),
            x(M((t = y.call(this, e))), "listRefHandler", function (e) {
              return (t.list = e);
            }),
            x(M(t), "trackRefHandler", function (e) {
              return (t.track = e);
            }),
            x(M(t), "adaptHeight", function () {
              if (t.props.adaptiveHeight && t.list) {
                var e = t.list.querySelector(
                  '[data-index="'.concat(t.state.currentSlide, '"]')
                );
                t.list.style.height = (0, c.getHeight)(e) + "px";
              }
            }),
            x(M(t), "componentDidMount", function () {
              if ((t.props.onInit && t.props.onInit(), t.props.lazyLoad)) {
                var e = (0, c.getOnDemandLazySlides)(
                  g(g({}, t.props), t.state)
                );
                e.length > 0 &&
                  (t.setState(function (t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  t.props.onLazyLoad && t.props.onLazyLoad(e));
              }
              var i = g({ listRef: t.list, trackRef: t.track }, t.props);
              t.updateState(i, !0, function () {
                t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
              }),
                "progressive" === t.props.lazyLoad &&
                  (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)),
                (t.ro = new d.default(function () {
                  t.state.animating
                    ? (t.onWindowResized(!1),
                      t.callbackTimers.push(
                        setTimeout(function () {
                          return t.onWindowResized();
                        }, t.props.speed)
                      ))
                    : t.onWindowResized();
                })),
                t.ro.observe(t.list),
                document.querySelectorAll &&
                  Array.prototype.forEach.call(
                    document.querySelectorAll(".slick-slide"),
                    function (e) {
                      (e.onfocus = t.props.pauseOnFocus
                        ? t.onSlideFocus
                        : null),
                        (e.onblur = t.props.pauseOnFocus
                          ? t.onSlideBlur
                          : null);
                    }
                  ),
                window.addEventListener
                  ? window.addEventListener("resize", t.onWindowResized)
                  : window.attachEvent("onresize", t.onWindowResized);
            }),
            x(M(t), "componentWillUnmount", function () {
              t.animationEndCallback && clearTimeout(t.animationEndCallback),
                t.lazyLoadTimer && clearInterval(t.lazyLoadTimer),
                t.callbackTimers.length &&
                  (t.callbackTimers.forEach(function (e) {
                    return clearTimeout(e);
                  }),
                  (t.callbackTimers = [])),
                window.addEventListener
                  ? window.removeEventListener("resize", t.onWindowResized)
                  : window.detachEvent("onresize", t.onWindowResized),
                t.autoplayTimer && clearInterval(t.autoplayTimer),
                t.ro.disconnect();
            }),
            x(M(t), "componentDidUpdate", function (e) {
              if (
                (t.checkImagesLoad(),
                t.props.onReInit && t.props.onReInit(),
                t.props.lazyLoad)
              ) {
                var i = (0, c.getOnDemandLazySlides)(
                  g(g({}, t.props), t.state)
                );
                i.length > 0 &&
                  (t.setState(function (e) {
                    return { lazyLoadedList: e.lazyLoadedList.concat(i) };
                  }),
                  t.props.onLazyLoad && t.props.onLazyLoad(i));
              }
              t.adaptHeight();
              var n = g(
                  g({ listRef: t.list, trackRef: t.track }, t.props),
                  t.state
                ),
                o = t.didPropsChange(e);
              o &&
                t.updateState(n, o, function () {
                  t.state.currentSlide >=
                    r.default.Children.count(t.props.children) &&
                    t.changeSlide({
                      message: "index",
                      index:
                        r.default.Children.count(t.props.children) -
                        t.props.slidesToShow,
                      currentSlide: t.state.currentSlide,
                    }),
                    t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
                });
            }),
            x(M(t), "onWindowResized", function (e) {
              t.debouncedResize && t.debouncedResize.cancel(),
                (t.debouncedResize = (0, o.default)(function () {
                  return t.resizeWindow(e);
                }, 50)),
                t.debouncedResize();
            }),
            x(M(t), "resizeWindow", function () {
              var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                i = Boolean(t.track && t.track.node);
              if (i) {
                var r = g(
                  g({ listRef: t.list, trackRef: t.track }, t.props),
                  t.state
                );
                t.updateState(r, e, function () {
                  t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
                }),
                  t.setState({ animating: !1 }),
                  clearTimeout(t.animationEndCallback),
                  delete t.animationEndCallback;
              }
            }),
            x(M(t), "updateState", function (e, i, n) {
              var o = (0, c.initializedState)(e);
              e = g(g(g({}, e), o), {}, { slideIndex: o.currentSlide });
              var a = (0, c.getTrackLeft)(e);
              e = g(g({}, e), {}, { left: a });
              var s = (0, c.getTrackCSS)(e);
              (i ||
                r.default.Children.count(t.props.children) !==
                  r.default.Children.count(e.children)) &&
                (o.trackStyle = s),
                t.setState(o, n);
            }),
            x(M(t), "ssrInit", function () {
              if (t.props.variableWidth) {
                var e = 0,
                  i = 0,
                  n = [],
                  o = (0, c.getPreClones)(
                    g(
                      g(g({}, t.props), t.state),
                      {},
                      { slideCount: t.props.children.length }
                    )
                  ),
                  a = (0, c.getPostClones)(
                    g(
                      g(g({}, t.props), t.state),
                      {},
                      { slideCount: t.props.children.length }
                    )
                  );
                t.props.children.forEach(function (t) {
                  n.push(t.props.style.width), (e += t.props.style.width);
                });
                for (var s = 0; s < o; s++)
                  (i += n[n.length - 1 - s]), (e += n[n.length - 1 - s]);
                for (var l = 0; l < a; l++) e += n[l];
                for (var u = 0; u < t.state.currentSlide; u++) i += n[u];
                var d = { width: e + "px", left: -i + "px" };
                if (t.props.centerMode) {
                  var m = "".concat(n[t.state.currentSlide], "px");
                  d.left = "calc("
                    .concat(d.left, " + (100% - ")
                    .concat(m, ") / 2 ) ");
                }
                return { trackStyle: d };
              }
              var p = r.default.Children.count(t.props.children),
                f = g(g(g({}, t.props), t.state), {}, { slideCount: p }),
                h = (0, c.getPreClones)(f) + (0, c.getPostClones)(f) + p,
                y = (100 / t.props.slidesToShow) * h,
                b = 100 / h,
                v =
                  (-b * ((0, c.getPreClones)(f) + t.state.currentSlide) * y) /
                  100;
              return (
                t.props.centerMode && (v += (100 - (b * y) / 100) / 2),
                {
                  slideWidth: b + "%",
                  trackStyle: { width: y + "%", left: v + "%" },
                }
              );
            }),
            x(M(t), "checkImagesLoad", function () {
              var e =
                  (t.list.querySelectorAll &&
                    t.list.querySelectorAll(".slick-slide img")) ||
                  [],
                i = e.length,
                r = 0;
              Array.prototype.forEach.call(e, function (e) {
                var n = function () {
                  return ++r && r >= i && t.onWindowResized();
                };
                if (e.onclick) {
                  var o = e.onclick;
                  e.onclick = function () {
                    o(), e.parentNode.focus();
                  };
                } else
                  e.onclick = function () {
                    return e.parentNode.focus();
                  };
                e.onload ||
                  (t.props.lazyLoad
                    ? (e.onload = function () {
                        t.adaptHeight(),
                          t.callbackTimers.push(
                            setTimeout(t.onWindowResized, t.props.speed)
                          );
                      })
                    : ((e.onload = n),
                      (e.onerror = function () {
                        n(),
                          t.props.onLazyLoadError && t.props.onLazyLoadError();
                      })));
              });
            }),
            x(M(t), "progressiveLazyLoad", function () {
              for (
                var e = [],
                  i = g(g({}, t.props), t.state),
                  r = t.state.currentSlide;
                r < t.state.slideCount + (0, c.getPostClones)(i);
                r++
              )
                if (t.state.lazyLoadedList.indexOf(r) < 0) {
                  e.push(r);
                  break;
                }
              for (
                var n = t.state.currentSlide - 1;
                n >= -(0, c.getPreClones)(i);
                n--
              )
                if (t.state.lazyLoadedList.indexOf(n) < 0) {
                  e.push(n);
                  break;
                }
              e.length > 0
                ? (t.setState(function (t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  t.props.onLazyLoad && t.props.onLazyLoad(e))
                : t.lazyLoadTimer &&
                  (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
            }),
            x(M(t), "slideHandler", function (e) {
              var i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = t.props,
                n = r.asNavFor,
                o = r.beforeChange,
                a = r.onLazyLoad,
                s = r.speed,
                l = r.afterChange,
                u = t.state.currentSlide,
                d = (0, c.slideHandler)(
                  g(
                    g(g({ index: e }, t.props), t.state),
                    {},
                    { trackRef: t.track, useCSS: t.props.useCSS && !i }
                  )
                ),
                m = d.state,
                p = d.nextState;
              if (m) {
                o && o(u, m.currentSlide);
                var f = m.lazyLoadedList.filter(function (e) {
                  return t.state.lazyLoadedList.indexOf(e) < 0;
                });
                a && f.length > 0 && a(f),
                  !t.props.waitForAnimate &&
                    t.animationEndCallback &&
                    (clearTimeout(t.animationEndCallback),
                    l && l(u),
                    delete t.animationEndCallback),
                  t.setState(m, function () {
                    n &&
                      t.asNavForIndex !== e &&
                      ((t.asNavForIndex = e), n.innerSlider.slideHandler(e)),
                      p &&
                        (t.animationEndCallback = setTimeout(function () {
                          var e = p.animating,
                            i = h(p, ["animating"]);
                          t.setState(i, function () {
                            t.callbackTimers.push(
                              setTimeout(function () {
                                return t.setState({ animating: e });
                              }, 10)
                            ),
                              l && l(m.currentSlide),
                              delete t.animationEndCallback;
                          });
                        }, s));
                  });
              }
            }),
            x(M(t), "changeSlide", function (e) {
              var i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = g(g({}, t.props), t.state),
                n = (0, c.changeSlide)(r, e);
              if (
                (0 === n || n) &&
                (!0 === i ? t.slideHandler(n, i) : t.slideHandler(n),
                t.props.autoplay && t.autoPlay("update"),
                t.props.focusOnSelect)
              ) {
                var o = t.list.querySelectorAll(".slick-current");
                o[0] && o[0].focus();
              }
            }),
            x(M(t), "clickHandler", function (e) {
              !1 === t.clickable && (e.stopPropagation(), e.preventDefault()),
                (t.clickable = !0);
            }),
            x(M(t), "keyHandler", function (e) {
              var i = (0, c.keyHandler)(e, t.props.accessibility, t.props.rtl);
              "" !== i && t.changeSlide({ message: i });
            }),
            x(M(t), "selectHandler", function (e) {
              t.changeSlide(e);
            }),
            x(M(t), "disableBodyScroll", function () {
              window.ontouchmove = function (e) {
                (e = e || window.event).preventDefault && e.preventDefault(),
                  (e.returnValue = !1);
              };
            }),
            x(M(t), "enableBodyScroll", function () {
              window.ontouchmove = null;
            }),
            x(M(t), "swipeStart", function (e) {
              t.props.verticalSwiping && t.disableBodyScroll();
              var i = (0, c.swipeStart)(e, t.props.swipe, t.props.draggable);
              "" !== i && t.setState(i);
            }),
            x(M(t), "swipeMove", function (e) {
              var i = (0, c.swipeMove)(
                e,
                g(
                  g(g({}, t.props), t.state),
                  {},
                  {
                    trackRef: t.track,
                    listRef: t.list,
                    slideIndex: t.state.currentSlide,
                  }
                )
              );
              i && (i.swiping && (t.clickable = !1), t.setState(i));
            }),
            x(M(t), "swipeEnd", function (e) {
              var i = (0, c.swipeEnd)(
                e,
                g(
                  g(g({}, t.props), t.state),
                  {},
                  {
                    trackRef: t.track,
                    listRef: t.list,
                    slideIndex: t.state.currentSlide,
                  }
                )
              );
              if (i) {
                var r = i.triggerSlideHandler;
                delete i.triggerSlideHandler,
                  t.setState(i),
                  void 0 !== r &&
                    (t.slideHandler(r),
                    t.props.verticalSwiping && t.enableBodyScroll());
              }
            }),
            x(M(t), "touchEnd", function (e) {
              t.swipeEnd(e), (t.clickable = !0);
            }),
            x(M(t), "slickPrev", function () {
              t.callbackTimers.push(
                setTimeout(function () {
                  return t.changeSlide({ message: "previous" });
                }, 0)
              );
            }),
            x(M(t), "slickNext", function () {
              t.callbackTimers.push(
                setTimeout(function () {
                  return t.changeSlide({ message: "next" });
                }, 0)
              );
            }),
            x(M(t), "slickGoTo", function (e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (((e = Number(e)), isNaN(e))) return "";
              t.callbackTimers.push(
                setTimeout(function () {
                  return t.changeSlide(
                    {
                      message: "index",
                      index: e,
                      currentSlide: t.state.currentSlide,
                    },
                    i
                  );
                }, 0)
              );
            }),
            x(M(t), "play", function () {
              var e;
              if (t.props.rtl)
                e = t.state.currentSlide - t.props.slidesToScroll;
              else {
                if (!(0, c.canGoNext)(g(g({}, t.props), t.state))) return !1;
                e = t.state.currentSlide + t.props.slidesToScroll;
              }
              t.slideHandler(e);
            }),
            x(M(t), "autoPlay", function (e) {
              t.autoplayTimer && clearInterval(t.autoplayTimer);
              var i = t.state.autoplaying;
              if ("update" === e) {
                if ("hovered" === i || "focused" === i || "paused" === i)
                  return;
              } else if ("leave" === e) {
                if ("paused" === i || "focused" === i) return;
              } else if ("blur" === e && ("paused" === i || "hovered" === i))
                return;
              (t.autoplayTimer = setInterval(
                t.play,
                t.props.autoplaySpeed + 50
              )),
                t.setState({ autoplaying: "playing" });
            }),
            x(M(t), "pause", function (e) {
              t.autoplayTimer &&
                (clearInterval(t.autoplayTimer), (t.autoplayTimer = null));
              var i = t.state.autoplaying;
              "paused" === e
                ? t.setState({ autoplaying: "paused" })
                : "focused" === e
                ? ("hovered" !== i && "playing" !== i) ||
                  t.setState({ autoplaying: "focused" })
                : "playing" === i && t.setState({ autoplaying: "hovered" });
            }),
            x(M(t), "onDotsOver", function () {
              return t.props.autoplay && t.pause("hovered");
            }),
            x(M(t), "onDotsLeave", function () {
              return (
                t.props.autoplay &&
                "hovered" === t.state.autoplaying &&
                t.autoPlay("leave")
              );
            }),
            x(M(t), "onTrackOver", function () {
              return t.props.autoplay && t.pause("hovered");
            }),
            x(M(t), "onTrackLeave", function () {
              return (
                t.props.autoplay &&
                "hovered" === t.state.autoplaying &&
                t.autoPlay("leave")
              );
            }),
            x(M(t), "onSlideFocus", function () {
              return t.props.autoplay && t.pause("focused");
            }),
            x(M(t), "onSlideBlur", function () {
              return (
                t.props.autoplay &&
                "focused" === t.state.autoplaying &&
                t.autoPlay("blur")
              );
            }),
            x(M(t), "render", function () {
              var e,
                i,
                n,
                o = (0, a.default)("slick-slider", t.props.className, {
                  "slick-vertical": t.props.vertical,
                  "slick-initialized": !0,
                }),
                d = g(g({}, t.props), t.state),
                m = (0, c.extractObject)(d, [
                  "fade",
                  "cssEase",
                  "speed",
                  "infinite",
                  "centerMode",
                  "focusOnSelect",
                  "currentSlide",
                  "lazyLoad",
                  "lazyLoadedList",
                  "rtl",
                  "slideWidth",
                  "slideHeight",
                  "listHeight",
                  "vertical",
                  "slidesToShow",
                  "slidesToScroll",
                  "slideCount",
                  "trackStyle",
                  "variableWidth",
                  "unslick",
                  "centerPadding",
                  "targetSlide",
                  "useCSS",
                ]),
                p = t.props.pauseOnHover;
              if (
                ((m = g(
                  g({}, m),
                  {},
                  {
                    onMouseEnter: p ? t.onTrackOver : null,
                    onMouseLeave: p ? t.onTrackLeave : null,
                    onMouseOver: p ? t.onTrackOver : null,
                    focusOnSelect:
                      t.props.focusOnSelect && t.clickable
                        ? t.selectHandler
                        : null,
                  }
                )),
                !0 === t.props.dots &&
                  t.state.slideCount >= t.props.slidesToShow)
              ) {
                var h = (0, c.extractObject)(d, [
                    "dotsClass",
                    "slideCount",
                    "slidesToShow",
                    "currentSlide",
                    "slidesToScroll",
                    "clickHandler",
                    "children",
                    "customPaging",
                    "infinite",
                    "appendDots",
                  ]),
                  y = t.props.pauseOnDotsHover;
                (h = g(
                  g({}, h),
                  {},
                  {
                    clickHandler: t.changeSlide,
                    onMouseEnter: y ? t.onDotsLeave : null,
                    onMouseOver: y ? t.onDotsOver : null,
                    onMouseLeave: y ? t.onDotsLeave : null,
                  }
                )),
                  (e = r.default.createElement(l.Dots, h));
              }
              var b = (0, c.extractObject)(d, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow",
              ]);
              (b.clickHandler = t.changeSlide),
                t.props.arrows &&
                  ((i = r.default.createElement(u.PrevArrow, b)),
                  (n = r.default.createElement(u.NextArrow, b)));
              var v = null;
              t.props.vertical && (v = { height: t.state.listHeight });
              var w = null;
              !1 === t.props.vertical
                ? !0 === t.props.centerMode &&
                  (w = { padding: "0px " + t.props.centerPadding })
                : !0 === t.props.centerMode &&
                  (w = { padding: t.props.centerPadding + " 0px" });
              var D = g(g({}, v), w),
                M = t.props.touchMove,
                S = {
                  className: "slick-list",
                  style: D,
                  onClick: t.clickHandler,
                  onMouseDown: M ? t.swipeStart : null,
                  onMouseMove: t.state.dragging && M ? t.swipeMove : null,
                  onMouseUp: M ? t.swipeEnd : null,
                  onMouseLeave: t.state.dragging && M ? t.swipeEnd : null,
                  onTouchStart: M ? t.swipeStart : null,
                  onTouchMove: t.state.dragging && M ? t.swipeMove : null,
                  onTouchEnd: M ? t.touchEnd : null,
                  onTouchCancel: t.state.dragging && M ? t.swipeEnd : null,
                  onKeyDown: t.props.accessibility ? t.keyHandler : null,
                },
                x = { className: o, dir: "ltr", style: t.props.style };
              return (
                t.props.unslick &&
                  ((S = { className: "slick-list" }), (x = { className: o })),
                r.default.createElement(
                  "div",
                  x,
                  t.props.unslick ? "" : i,
                  r.default.createElement(
                    "div",
                    f({ ref: t.listRefHandler }, S),
                    r.default.createElement(
                      s.Track,
                      f({ ref: t.trackRefHandler }, m),
                      t.props.children
                    )
                  ),
                  t.props.unslick ? "" : n,
                  t.props.unslick ? "" : e
                )
              );
            }),
            (t.list = null),
            (t.track = null),
            (t.state = g(
              g({}, n.default),
              {},
              {
                currentSlide: t.props.initialSlide,
                slideCount: r.default.Children.count(t.props.children),
              }
            )),
            (t.callbackTimers = []),
            (t.clickable = !0),
            (t.debouncedResize = null);
          var i = t.ssrInit();
          return (t.state = g(g({}, t.state), i)), t;
        }
        return (
          (t = D),
          (i = [
            {
              key: "didPropsChange",
              value: function (e) {
                for (
                  var t = !1, i = 0, n = Object.keys(this.props);
                  i < n.length;
                  i++
                ) {
                  var o = n[i];
                  if (!e.hasOwnProperty(o)) {
                    t = !0;
                    break;
                  }
                  if (
                    "object" !== p(e[o]) &&
                    "function" != typeof e[o] &&
                    e[o] !== this.props[o]
                  ) {
                    t = !0;
                    break;
                  }
                }
                return (
                  t ||
                  r.default.Children.count(this.props.children) !==
                    r.default.Children.count(e.children)
                );
              },
            },
          ]) && b(t.prototype, i),
          m && b(t, m),
          D
        );
      })(r.default.Component);
      t.InnerSlider = _;
    },
    5798: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = s(i(7294)),
        n = i(6801),
        o = s(i(973)),
        a = s(i(3492)),
        c = i(5518);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                v(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = b(e);
          if (t) {
            var n = b(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return y(this, i);
        };
      }
      function y(e, t) {
        return !t || ("object" !== l(t) && "function" != typeof t) ? g(e) : t;
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var w = (0, c.canUseDOM)() && i(4974),
        D = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(d, e);
          var t,
            i,
            s,
            l = h(d);
          function d(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, d),
              v(
                g((t = l.call(this, e))),
                "innerSliderRefHandler",
                function (e) {
                  return (t.innerSlider = e);
                }
              ),
              v(g(t), "slickPrev", function () {
                return t.innerSlider.slickPrev();
              }),
              v(g(t), "slickNext", function () {
                return t.innerSlider.slickNext();
              }),
              v(g(t), "slickGoTo", function (e) {
                var i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return t.innerSlider.slickGoTo(e, i);
              }),
              v(g(t), "slickPause", function () {
                return t.innerSlider.pause("paused");
              }),
              v(g(t), "slickPlay", function () {
                return t.innerSlider.autoPlay("play");
              }),
              (t.state = { breakpoint: null }),
              (t._responsiveMediaHandlers = []),
              t
            );
          }
          return (
            (t = d),
            (i = [
              {
                key: "media",
                value: function (e, t) {
                  w.register(e, t),
                    this._responsiveMediaHandlers.push({
                      query: e,
                      handler: t,
                    });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (this.props.responsive) {
                    var t = this.props.responsive.map(function (e) {
                      return e.breakpoint;
                    });
                    t.sort(function (e, t) {
                      return e - t;
                    }),
                      t.forEach(function (i, r) {
                        var n;
                        (n =
                          0 === r
                            ? (0, o.default)({ minWidth: 0, maxWidth: i })
                            : (0, o.default)({
                                minWidth: t[r - 1] + 1,
                                maxWidth: i,
                              })),
                          (0, c.canUseDOM)() &&
                            e.media(n, function () {
                              e.setState({ breakpoint: i });
                            });
                      });
                    var i = (0, o.default)({ minWidth: t.slice(-1)[0] });
                    (0, c.canUseDOM)() &&
                      this.media(i, function () {
                        e.setState({ breakpoint: null });
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._responsiveMediaHandlers.forEach(function (e) {
                    w.unregister(e.query, e.handler);
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    i = this;
                  (e = this.state.breakpoint
                    ? "unslick" ===
                      (t = this.props.responsive.filter(function (e) {
                        return e.breakpoint === i.state.breakpoint;
                      }))[0].settings
                      ? "unslick"
                      : m(m(m({}, a.default), this.props), t[0].settings)
                    : m(m({}, a.default), this.props)).centerMode &&
                    (e.slidesToScroll, (e.slidesToScroll = 1)),
                    e.fade &&
                      (e.slidesToShow,
                      e.slidesToScroll,
                      (e.slidesToShow = 1),
                      (e.slidesToScroll = 1));
                  var o = r.default.Children.toArray(this.props.children);
                  (o = o.filter(function (e) {
                    return "string" == typeof e ? !!e.trim() : !!e;
                  })),
                    e.variableWidth &&
                      (e.rows > 1 || e.slidesPerRow > 1) &&
                      (console.warn(
                        "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                      ),
                      (e.variableWidth = !1));
                  for (
                    var c = [], s = null, l = 0;
                    l < o.length;
                    l += e.rows * e.slidesPerRow
                  ) {
                    for (
                      var d = [], p = l;
                      p < l + e.rows * e.slidesPerRow;
                      p += e.slidesPerRow
                    ) {
                      for (
                        var f = [], h = p;
                        h < p + e.slidesPerRow &&
                        (e.variableWidth &&
                          o[h].props.style &&
                          (s = o[h].props.style.width),
                        !(h >= o.length));
                        h += 1
                      )
                        f.push(
                          r.default.cloneElement(o[h], {
                            key: 100 * l + 10 * p + h,
                            tabIndex: -1,
                            style: {
                              width: "".concat(100 / e.slidesPerRow, "%"),
                              display: "inline-block",
                            },
                          })
                        );
                      d.push(
                        r.default.createElement("div", { key: 10 * l + p }, f)
                      );
                    }
                    e.variableWidth
                      ? c.push(
                          r.default.createElement(
                            "div",
                            { key: l, style: { width: s } },
                            d
                          )
                        )
                      : c.push(r.default.createElement("div", { key: l }, d));
                  }
                  if ("unslick" === e) {
                    var y = "regular slider " + (this.props.className || "");
                    return r.default.createElement("div", { className: y }, o);
                  }
                  return (
                    c.length <= e.slidesToShow && (e.unslick = !0),
                    r.default.createElement(
                      n.InnerSlider,
                      u(
                        {
                          style: this.props.style,
                          ref: this.innerSliderRefHandler,
                        },
                        e
                      ),
                      c
                    )
                  );
                },
              },
            ]) && p(t.prototype, i),
            s && p(t, s),
            d
          );
        })(r.default.Component);
      t.default = D;
    },
    4740: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Track = void 0);
      var r = a(i(7294)),
        n = a(i(4184)),
        o = i(5518);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = h(e);
          if (t) {
            var n = h(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return p(this, i);
        };
      }
      function p(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t) ? f(e) : t;
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(i), !0).forEach(function (t) {
                b(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : y(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function b(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var v = function (e) {
          var t, i, r, n, o;
          return (
            (r =
              (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 ||
              o >= e.slideCount),
            e.centerMode
              ? ((n = Math.floor(e.slidesToShow / 2)),
                (i = (o - e.currentSlide) % e.slideCount == 0),
                o > e.currentSlide - n - 1 &&
                  o <= e.currentSlide + n &&
                  (t = !0))
              : (t =
                  e.currentSlide <= o && o < e.currentSlide + e.slidesToShow),
            {
              "slick-slide": !0,
              "slick-active": t,
              "slick-center": i,
              "slick-cloned": r,
              "slick-current":
                o ===
                (e.targetSlide < 0
                  ? e.targetSlide + e.slideCount
                  : e.targetSlide >= e.slideCount
                  ? e.targetSlide - e.slideCount
                  : e.targetSlide),
            }
          );
        },
        w = function (e, t) {
          return e.key || t;
        },
        D = function (e) {
          var t,
            i = [],
            a = [],
            c = [],
            s = r.default.Children.count(e.children),
            l = (0, o.lazyStartIndex)(e),
            u = (0, o.lazyEndIndex)(e);
          return (
            r.default.Children.forEach(e.children, function (d, m) {
              var p,
                f = {
                  message: "children",
                  index: m,
                  slidesToScroll: e.slidesToScroll,
                  currentSlide: e.currentSlide,
                };
              p =
                !e.lazyLoad || (e.lazyLoad && e.lazyLoadedList.indexOf(m) >= 0)
                  ? d
                  : r.default.createElement("div", null);
              var h = (function (e) {
                  var t = {};
                  return (
                    (void 0 !== e.variableWidth && !1 !== e.variableWidth) ||
                      (t.width = e.slideWidth),
                    e.fade &&
                      ((t.position = "relative"),
                      e.vertical
                        ? (t.top = -e.index * parseInt(e.slideHeight))
                        : (t.left = -e.index * parseInt(e.slideWidth)),
                      (t.opacity = e.currentSlide === e.index ? 1 : 0),
                      e.useCSS &&
                        (t.transition =
                          "opacity " +
                          e.speed +
                          "ms " +
                          e.cssEase +
                          ", visibility " +
                          e.speed +
                          "ms " +
                          e.cssEase)),
                    t
                  );
                })(g(g({}, e), {}, { index: m })),
                y = p.props.className || "",
                b = v(g(g({}, e), {}, { index: m }));
              if (
                (i.push(
                  r.default.cloneElement(p, {
                    key: "original" + w(p, m),
                    "data-index": m,
                    className: (0, n.default)(b, y),
                    tabIndex: "-1",
                    "aria-hidden": !b["slick-active"],
                    style: g(g({ outline: "none" }, p.props.style || {}), h),
                    onClick: function (t) {
                      p.props && p.props.onClick && p.props.onClick(t),
                        e.focusOnSelect && e.focusOnSelect(f);
                    },
                  })
                ),
                e.infinite && !1 === e.fade)
              ) {
                var D = s - m;
                D <= (0, o.getPreClones)(e) &&
                  s !== e.slidesToShow &&
                  ((t = -D) >= l && (p = d),
                  (b = v(g(g({}, e), {}, { index: t }))),
                  a.push(
                    r.default.cloneElement(p, {
                      key: "precloned" + w(p, t),
                      "data-index": t,
                      tabIndex: "-1",
                      className: (0, n.default)(b, y),
                      "aria-hidden": !b["slick-active"],
                      style: g(g({}, p.props.style || {}), h),
                      onClick: function (t) {
                        p.props && p.props.onClick && p.props.onClick(t),
                          e.focusOnSelect && e.focusOnSelect(f);
                      },
                    })
                  )),
                  s !== e.slidesToShow &&
                    ((t = s + m) < u && (p = d),
                    (b = v(g(g({}, e), {}, { index: t }))),
                    c.push(
                      r.default.cloneElement(p, {
                        key: "postcloned" + w(p, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, n.default)(b, y),
                        "aria-hidden": !b["slick-active"],
                        style: g(g({}, p.props.style || {}), h),
                        onClick: function (t) {
                          p.props && p.props.onClick && p.props.onClick(t),
                            e.focusOnSelect && e.focusOnSelect(f);
                        },
                      })
                    ));
              }
            }),
            e.rtl ? a.concat(i, c).reverse() : a.concat(i, c)
          );
        },
        M = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && d(e, t);
          })(a, e);
          var t,
            i,
            n,
            o = m(a);
          function a() {
            var e;
            l(this, a);
            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
              i[r] = arguments[r];
            return (
              b(f((e = o.call.apply(o, [this].concat(i)))), "node", null),
              b(f(e), "handleRef", function (t) {
                e.node = t;
              }),
              e
            );
          }
          return (
            (t = a),
            (i = [
              {
                key: "render",
                value: function () {
                  var e = D(this.props),
                    t = this.props,
                    i = {
                      onMouseEnter: t.onMouseEnter,
                      onMouseOver: t.onMouseOver,
                      onMouseLeave: t.onMouseLeave,
                    };
                  return r.default.createElement(
                    "div",
                    s(
                      {
                        ref: this.handleRef,
                        className: "slick-track",
                        style: this.props.trackStyle,
                      },
                      i
                    ),
                    e
                  );
                },
              },
            ]) && u(t.prototype, i),
            n && u(t, n),
            a
          );
        })(r.default.PureComponent);
      t.Track = M;
    },
    5518: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.clamp = s),
        (t.canUseDOM =
          t.slidesOnLeft =
          t.slidesOnRight =
          t.siblingDirection =
          t.getTotalSlides =
          t.getPostClones =
          t.getPreClones =
          t.getTrackLeft =
          t.getTrackAnimateCSS =
          t.getTrackCSS =
          t.checkSpecKeys =
          t.getSlideCount =
          t.checkNavigable =
          t.getNavigableIndexes =
          t.swipeEnd =
          t.swipeMove =
          t.swipeStart =
          t.keyHandler =
          t.changeSlide =
          t.slideHandler =
          t.initializedState =
          t.extractObject =
          t.canGoNext =
          t.getSwipeDirection =
          t.getHeight =
          t.getWidth =
          t.lazySlidesOnRight =
          t.lazySlidesOnLeft =
          t.lazyEndIndex =
          t.lazyStartIndex =
          t.getRequiredLazySlides =
          t.getOnDemandLazySlides =
            void 0);
      var r,
        n = (r = i(7294)) && r.__esModule ? r : { default: r };
      function o(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(i), !0).forEach(function (t) {
                c(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : o(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function s(e, t, i) {
        return Math.max(t, Math.min(e, i));
      }
      var l = function (e) {
        for (var t = [], i = u(e), r = d(e), n = i; n < r; n++)
          e.lazyLoadedList.indexOf(n) < 0 && t.push(n);
        return t;
      };
      t.getOnDemandLazySlides = l;
      t.getRequiredLazySlides = function (e) {
        for (var t = [], i = u(e), r = d(e), n = i; n < r; n++) t.push(n);
        return t;
      };
      var u = function (e) {
        return e.currentSlide - m(e);
      };
      t.lazyStartIndex = u;
      var d = function (e) {
        return e.currentSlide + p(e);
      };
      t.lazyEndIndex = d;
      var m = function (e) {
        return e.centerMode
          ? Math.floor(e.slidesToShow / 2) +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : 0;
      };
      t.lazySlidesOnLeft = m;
      var p = function (e) {
        return e.centerMode
          ? Math.floor((e.slidesToShow - 1) / 2) +
              1 +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : e.slidesToShow;
      };
      t.lazySlidesOnRight = p;
      var f = function (e) {
        return (e && e.offsetWidth) || 0;
      };
      t.getWidth = f;
      var h = function (e) {
        return (e && e.offsetHeight) || 0;
      };
      t.getHeight = h;
      var y = function (e) {
        var t,
          i,
          r,
          n,
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = e.startX - e.curX),
          (i = e.startY - e.curY),
          (r = Math.atan2(i, t)),
          (n = Math.round((180 * r) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
            ? "left"
            : n >= 135 && n <= 225
            ? "right"
            : !0 === o
            ? n >= 35 && n <= 135
              ? "up"
              : "down"
            : "vertical"
        );
      };
      t.getSwipeDirection = y;
      var g = function (e) {
        var t = !0;
        return (
          e.infinite ||
            (((e.centerMode && e.currentSlide >= e.slideCount - 1) ||
              e.slideCount <= e.slidesToShow ||
              e.currentSlide >= e.slideCount - e.slidesToShow) &&
              (t = !1)),
          t
        );
      };
      t.canGoNext = g;
      t.extractObject = function (e, t) {
        var i = {};
        return (
          t.forEach(function (t) {
            return (i[t] = e[t]);
          }),
          i
        );
      };
      t.initializedState = function (e) {
        var t,
          i = n.default.Children.count(e.children),
          r = e.listRef,
          o = Math.ceil(f(r)),
          c = e.trackRef && e.trackRef.node,
          s = Math.ceil(f(c));
        if (e.vertical) t = o;
        else {
          var u = e.centerMode && 2 * parseInt(e.centerPadding);
          "string" == typeof e.centerPadding &&
            "%" === e.centerPadding.slice(-1) &&
            (u *= o / 100),
            (t = Math.ceil((o - u) / e.slidesToShow));
        }
        var d = r && h(r.querySelector('[data-index="0"]')),
          m = d * e.slidesToShow,
          p = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
        e.rtl && void 0 === e.currentSlide && (p = i - 1 - e.initialSlide);
        var y = e.lazyLoadedList || [],
          g = l(a(a({}, e), {}, { currentSlide: p, lazyLoadedList: y }));
        y.concat(g);
        var b = {
          slideCount: i,
          slideWidth: t,
          listWidth: o,
          trackWidth: s,
          currentSlide: p,
          slideHeight: d,
          listHeight: m,
          lazyLoadedList: y,
        };
        return (
          null === e.autoplaying && e.autoplay && (b.autoplaying = "playing"), b
        );
      };
      t.slideHandler = function (e) {
        var t = e.waitForAnimate,
          i = e.animating,
          r = e.fade,
          n = e.infinite,
          o = e.index,
          c = e.slideCount,
          u = e.lazyLoadedList,
          d = e.lazyLoad,
          m = e.currentSlide,
          p = e.centerMode,
          f = e.slidesToScroll,
          h = e.slidesToShow,
          y = e.useCSS;
        if (t && i) return {};
        var b,
          v,
          w,
          D = o,
          _ = {},
          T = {},
          N = n ? o : s(o, 0, c - 1);
        if (r) {
          if (!n && (o < 0 || o >= c)) return {};
          o < 0 ? (D = o + c) : o >= c && (D = o - c),
            d && u.indexOf(D) < 0 && u.push(D),
            (_ = {
              animating: !0,
              currentSlide: D,
              lazyLoadedList: u,
              targetSlide: D,
            }),
            (T = { animating: !1, targetSlide: D });
        } else
          (b = D),
            D < 0
              ? ((b = D + c), n ? c % f != 0 && (b = c - (c % f)) : (b = 0))
              : !g(e) && D > m
              ? (D = b = m)
              : p && D >= c
              ? ((D = n ? c : c - 1), (b = n ? 0 : c - 1))
              : D >= c &&
                ((b = D - c), n ? c % f != 0 && (b = 0) : (b = c - h)),
            !n && D + h >= c && (b = c - h),
            (v = x(a(a({}, e), {}, { slideIndex: D }))),
            (w = x(a(a({}, e), {}, { slideIndex: b }))),
            n || (v === w && (D = b), (v = w)),
            d && u.concat(l(a(a({}, e), {}, { currentSlide: D }))),
            y
              ? ((_ = {
                  animating: !0,
                  currentSlide: b,
                  trackStyle: S(a(a({}, e), {}, { left: v })),
                  lazyLoadedList: u,
                  targetSlide: N,
                }),
                (T = {
                  animating: !1,
                  currentSlide: b,
                  trackStyle: M(a(a({}, e), {}, { left: w })),
                  swipeLeft: null,
                  targetSlide: N,
                }))
              : (_ = {
                  currentSlide: b,
                  trackStyle: M(a(a({}, e), {}, { left: w })),
                  lazyLoadedList: u,
                  targetSlide: N,
                });
        return { state: _, nextState: T };
      };
      t.changeSlide = function (e, t) {
        var i,
          r,
          n,
          o,
          c = e.slidesToScroll,
          s = e.slidesToShow,
          l = e.slideCount,
          u = e.currentSlide,
          d = e.targetSlide,
          m = e.lazyLoad,
          p = e.infinite;
        if (((i = l % c != 0 ? 0 : (l - u) % c), "previous" === t.message))
          (o = u - (n = 0 === i ? c : s - i)),
            m && !p && (o = -1 === (r = u - n) ? l - 1 : r),
            p || (o = d - c);
        else if ("next" === t.message)
          (o = u + (n = 0 === i ? c : i)),
            m && !p && (o = ((u + c) % l) + i),
            p || (o = d + c);
        else if ("dots" === t.message) o = t.index * t.slidesToScroll;
        else if ("children" === t.message) {
          if (((o = t.index), p)) {
            var f = F(a(a({}, e), {}, { targetSlide: o }));
            o > t.currentSlide && "left" === f
              ? (o -= l)
              : o < t.currentSlide && "right" === f && (o += l);
          }
        } else "index" === t.message && (o = Number(t.index));
        return o;
      };
      t.keyHandler = function (e, t, i) {
        return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t
          ? ""
          : 37 === e.keyCode
          ? i
            ? "next"
            : "previous"
          : 39 === e.keyCode
          ? i
            ? "previous"
            : "next"
          : "";
      };
      t.swipeStart = function (e, t, i) {
        return (
          "IMG" === e.target.tagName && e.preventDefault(),
          !t || (!i && -1 !== e.type.indexOf("mouse"))
            ? ""
            : {
                dragging: !0,
                touchObject: {
                  startX: e.touches ? e.touches[0].pageX : e.clientX,
                  startY: e.touches ? e.touches[0].pageY : e.clientY,
                  curX: e.touches ? e.touches[0].pageX : e.clientX,
                  curY: e.touches ? e.touches[0].pageY : e.clientY,
                },
              }
        );
      };
      t.swipeMove = function (e, t) {
        var i = t.scrolling,
          r = t.animating,
          n = t.vertical,
          o = t.swipeToSlide,
          c = t.verticalSwiping,
          s = t.rtl,
          l = t.currentSlide,
          u = t.edgeFriction,
          d = t.edgeDragged,
          m = t.onEdge,
          p = t.swiped,
          f = t.swiping,
          h = t.slideCount,
          b = t.slidesToScroll,
          v = t.infinite,
          w = t.touchObject,
          D = t.swipeEvent,
          S = t.listHeight,
          _ = t.listWidth;
        if (!i) {
          if (r) return e.preventDefault();
          n && o && c && e.preventDefault();
          var T,
            N = {},
            F = x(t);
          (w.curX = e.touches ? e.touches[0].pageX : e.clientX),
            (w.curY = e.touches ? e.touches[0].pageY : e.clientY),
            (w.swipeLength = Math.round(
              Math.sqrt(Math.pow(w.curX - w.startX, 2))
            ));
          var k = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
          if (!c && !f && k > 10) return { scrolling: !0 };
          c && (w.swipeLength = k);
          var C = (s ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
          c && (C = w.curY > w.startY ? 1 : -1);
          var E = Math.ceil(h / b),
            Y = y(t.touchObject, c),
            O = w.swipeLength;
          return (
            v ||
              (((0 === l && "right" === Y) ||
                (l + 1 >= E && "left" === Y) ||
                (!g(t) && "left" === Y)) &&
                ((O = w.swipeLength * u),
                !1 === d && m && (m(Y), (N.edgeDragged = !0)))),
            !p && D && (D(Y), (N.swiped = !0)),
            (T = n ? F + O * (S / _) * C : s ? F - O * C : F + O * C),
            c && (T = F + O * C),
            (N = a(
              a({}, N),
              {},
              {
                touchObject: w,
                swipeLeft: T,
                trackStyle: M(a(a({}, t), {}, { left: T })),
              }
            )),
            Math.abs(w.curX - w.startX) < 0.8 * Math.abs(w.curY - w.startY)
              ? N
              : (w.swipeLength > 10 && ((N.swiping = !0), e.preventDefault()),
                N)
          );
        }
      };
      t.swipeEnd = function (e, t) {
        var i = t.dragging,
          r = t.swipe,
          n = t.touchObject,
          o = t.listWidth,
          c = t.touchThreshold,
          s = t.verticalSwiping,
          l = t.listHeight,
          u = t.swipeToSlide,
          d = t.scrolling,
          m = t.onSwipe,
          p = t.targetSlide,
          f = t.currentSlide,
          h = t.infinite;
        if (!i) return r && e.preventDefault(), {};
        var g = s ? l / c : o / c,
          b = y(n, s),
          D = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {},
          };
        if (d) return D;
        if (!n.swipeLength) return D;
        if (n.swipeLength > g) {
          var M, _;
          e.preventDefault(), m && m(b);
          var T = h ? f : p;
          switch (b) {
            case "left":
            case "up":
              (_ = T + w(t)), (M = u ? v(t, _) : _), (D.currentDirection = 0);
              break;
            case "right":
            case "down":
              (_ = T - w(t)), (M = u ? v(t, _) : _), (D.currentDirection = 1);
              break;
            default:
              M = T;
          }
          D.triggerSlideHandler = M;
        } else {
          var N = x(t);
          D.trackStyle = S(a(a({}, t), {}, { left: N }));
        }
        return D;
      };
      var b = function (e) {
        for (
          var t = e.infinite ? 2 * e.slideCount : e.slideCount,
            i = e.infinite ? -1 * e.slidesToShow : 0,
            r = e.infinite ? -1 * e.slidesToShow : 0,
            n = [];
          i < t;

        )
          n.push(i),
            (i = r + e.slidesToScroll),
            (r += Math.min(e.slidesToScroll, e.slidesToShow));
        return n;
      };
      t.getNavigableIndexes = b;
      var v = function (e, t) {
        var i = b(e),
          r = 0;
        if (t > i[i.length - 1]) t = i[i.length - 1];
        else
          for (var n in i) {
            if (t < i[n]) {
              t = r;
              break;
            }
            r = i[n];
          }
        return t;
      };
      t.checkNavigable = v;
      var w = function (e) {
        var t = e.centerMode
          ? e.slideWidth * Math.floor(e.slidesToShow / 2)
          : 0;
        if (e.swipeToSlide) {
          var i,
            r = e.listRef,
            n =
              (r.querySelectorAll && r.querySelectorAll(".slick-slide")) || [];
          if (
            (Array.from(n).every(function (r) {
              if (e.vertical) {
                if (r.offsetTop + h(r) / 2 > -1 * e.swipeLeft)
                  return (i = r), !1;
              } else if (r.offsetLeft - t + f(r) / 2 > -1 * e.swipeLeft) return (i = r), !1;
              return !0;
            }),
            !i)
          )
            return 0;
          var o = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
          return Math.abs(i.dataset.index - o) || 1;
        }
        return e.slidesToScroll;
      };
      t.getSlideCount = w;
      var D = function (e, t) {
        return t.reduce(function (t, i) {
          return t && e.hasOwnProperty(i);
        }, !0)
          ? null
          : console.error("Keys Missing:", e);
      };
      t.checkSpecKeys = D;
      var M = function (e) {
        var t, i;
        D(e, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth",
        ]);
        var r = e.slideCount + 2 * e.slidesToShow;
        e.vertical ? (i = r * e.slideHeight) : (t = N(e) * e.slideWidth);
        var n = { opacity: 1, transition: "", WebkitTransition: "" };
        if (e.useTransform) {
          var o = e.vertical
              ? "translate3d(0px, " + e.left + "px, 0px)"
              : "translate3d(" + e.left + "px, 0px, 0px)",
            c = e.vertical
              ? "translate3d(0px, " + e.left + "px, 0px)"
              : "translate3d(" + e.left + "px, 0px, 0px)",
            s = e.vertical
              ? "translateY(" + e.left + "px)"
              : "translateX(" + e.left + "px)";
          n = a(
            a({}, n),
            {},
            { WebkitTransform: o, transform: c, msTransform: s }
          );
        } else e.vertical ? (n.top = e.left) : (n.left = e.left);
        return (
          e.fade && (n = { opacity: 1 }),
          t && (n.width = t),
          i && (n.height = i),
          window &&
            !window.addEventListener &&
            window.attachEvent &&
            (e.vertical
              ? (n.marginTop = e.left + "px")
              : (n.marginLeft = e.left + "px")),
          n
        );
      };
      t.getTrackCSS = M;
      var S = function (e) {
        D(e, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth",
          "speed",
          "cssEase",
        ]);
        var t = M(e);
        return (
          e.useTransform
            ? ((t.WebkitTransition =
                "-webkit-transform " + e.speed + "ms " + e.cssEase),
              (t.transition = "transform " + e.speed + "ms " + e.cssEase))
            : e.vertical
            ? (t.transition = "top " + e.speed + "ms " + e.cssEase)
            : (t.transition = "left " + e.speed + "ms " + e.cssEase),
          t
        );
      };
      t.getTrackAnimateCSS = S;
      var x = function (e) {
        if (e.unslick) return 0;
        D(e, [
          "slideIndex",
          "trackRef",
          "infinite",
          "centerMode",
          "slideCount",
          "slidesToShow",
          "slidesToScroll",
          "slideWidth",
          "listWidth",
          "variableWidth",
          "slideHeight",
        ]);
        var t,
          i,
          r = e.slideIndex,
          n = e.trackRef,
          o = e.infinite,
          a = e.centerMode,
          c = e.slideCount,
          s = e.slidesToShow,
          l = e.slidesToScroll,
          u = e.slideWidth,
          d = e.listWidth,
          m = e.variableWidth,
          p = e.slideHeight,
          f = e.fade,
          h = e.vertical;
        if (f || 1 === e.slideCount) return 0;
        var y = 0;
        if (
          (o
            ? ((y = -_(e)),
              c % l != 0 && r + l > c && (y = -(r > c ? s - (r - c) : c % l)),
              a && (y += parseInt(s / 2)))
            : (c % l != 0 && r + l > c && (y = s - (c % l)),
              a && (y = parseInt(s / 2))),
          (t = h ? r * p * -1 + y * p : r * u * -1 + y * u),
          !0 === m)
        ) {
          var g,
            b = n && n.node;
          if (
            ((g = r + _(e)),
            (t = (i = b && b.childNodes[g]) ? -1 * i.offsetLeft : 0),
            !0 === a)
          ) {
            (g = o ? r + _(e) : r), (i = b && b.children[g]), (t = 0);
            for (var v = 0; v < g; v++)
              t -= b && b.children[v] && b.children[v].offsetWidth;
            (t -= parseInt(e.centerPadding)),
              (t += i && (d - i.offsetWidth) / 2);
          }
        }
        return t;
      };
      t.getTrackLeft = x;
      var _ = function (e) {
        return e.unslick || !e.infinite
          ? 0
          : e.variableWidth
          ? e.slideCount
          : e.slidesToShow + (e.centerMode ? 1 : 0);
      };
      t.getPreClones = _;
      var T = function (e) {
        return e.unslick || !e.infinite ? 0 : e.slideCount;
      };
      t.getPostClones = T;
      var N = function (e) {
        return 1 === e.slideCount ? 1 : _(e) + e.slideCount + T(e);
      };
      t.getTotalSlides = N;
      var F = function (e) {
        return e.targetSlide > e.currentSlide
          ? e.targetSlide > e.currentSlide + k(e)
            ? "left"
            : "right"
          : e.targetSlide < e.currentSlide - C(e)
          ? "right"
          : "left";
      };
      t.siblingDirection = F;
      var k = function (e) {
        var t = e.slidesToShow,
          i = e.centerMode,
          r = e.rtl,
          n = e.centerPadding;
        if (i) {
          var o = (t - 1) / 2 + 1;
          return parseInt(n) > 0 && (o += 1), r && t % 2 == 0 && (o += 1), o;
        }
        return r ? 0 : t - 1;
      };
      t.slidesOnRight = k;
      var C = function (e) {
        var t = e.slidesToShow,
          i = e.centerMode,
          r = e.rtl,
          n = e.centerPadding;
        if (i) {
          var o = (t - 1) / 2 + 1;
          return parseInt(n) > 0 && (o += 1), r || t % 2 != 0 || (o += 1), o;
        }
        return r ? t - 1 : 0;
      };
      t.slidesOnLeft = C;
      t.canUseDOM = function () {
        return !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      };
    },
    9670: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => M });
      var r = i(2122),
        n = i(9756),
        o = i(3552);
      i(5697);
      function a(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var c = i(7294),
        s = i(3935);
      const l = !1;
      var u = i(220),
        d = function (e) {
          return e.scrollTop;
        },
        m = "unmounted",
        p = "exited",
        f = "entering",
        h = "entered",
        y = "exiting",
        g = (function (e) {
          function t(t, i) {
            var r;
            r = e.call(this, t, i) || this;
            var n,
              o = i && !i.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((n = p), (r.appearStatus = f))
                  : (n = h)
                : (n = t.unmountOnExit || t.mountOnEnter ? m : p),
              (r.state = { status: n }),
              (r.nextCallback = null),
              r
            );
          }
          (0, o.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === m ? { status: p } : null;
            });
          var i = t.prototype;
          return (
            (i.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (i.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var i = this.state.status;
                this.props.in
                  ? i !== f && i !== h && (t = f)
                  : (i !== f && i !== h) || (t = y);
              }
              this.updateStatus(!1, t);
            }),
            (i.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (i.getTimeouts = function () {
              var e,
                t,
                i,
                r = this.props.timeout;
              return (
                (e = t = i = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (i = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: i }
              );
            }),
            (i.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === f)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var i = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : s.findDOMNode(this);
                    i && d(i);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === p &&
                  this.setState({ status: m });
            }),
            (i.performEnter = function (e) {
              var t = this,
                i = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                n = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                o = n[0],
                a = n[1],
                c = this.getTimeouts(),
                u = r ? c.appear : c.enter;
              (!e && !i) || l
                ? this.safeSetState({ status: h }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, a),
                  this.safeSetState({ status: f }, function () {
                    t.props.onEntering(o, a),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: h }, function () {
                          t.props.onEntered(o, a);
                        });
                      });
                  }));
            }),
            (i.performExit = function () {
              var e = this,
                t = this.props.exit,
                i = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
              t && !l
                ? (this.props.onExit(r),
                  this.safeSetState({ status: y }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(i.exit, function () {
                        e.safeSetState({ status: p }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: p }, function () {
                    e.props.onExited(r);
                  });
            }),
            (i.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (i.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (i.setNextCallback = function (e) {
              var t = this,
                i = !0;
              return (
                (this.nextCallback = function (r) {
                  i && ((i = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  i = !1;
                }),
                this.nextCallback
              );
            }),
            (i.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : s.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (i && !r) {
                if (this.props.addEndListener) {
                  var n = this.props.nodeRef
                      ? [this.nextCallback]
                      : [i, this.nextCallback],
                    o = n[0],
                    a = n[1];
                  this.props.addEndListener(o, a);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (i.render = function () {
              var e = this.state.status;
              if (e === m) return null;
              var t = this.props,
                i = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, n.Z)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return c.createElement(
                u.Z.Provider,
                { value: null },
                "function" == typeof i
                  ? i(e, r)
                  : c.cloneElement(c.Children.only(i), r)
              );
            }),
            t
          );
        })(c.Component);
      function b() {}
      (g.contextType = u.Z),
        (g.propTypes = {}),
        (g.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: b,
          onEntering: b,
          onEntered: b,
          onExit: b,
          onExiting: b,
          onExited: b,
        }),
        (g.UNMOUNTED = m),
        (g.EXITED = p),
        (g.ENTERING = f),
        (g.ENTERED = h),
        (g.EXITING = y);
      const v = g;
      var w = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((i = e).classList
                  ? i.classList.remove(r)
                  : "string" == typeof i.className
                  ? (i.className = a(i.className, r))
                  : i.setAttribute(
                      "class",
                      a((i.className && i.className.baseVal) || "", r)
                    ))
              );
              var i, r;
            })
          );
        },
        D = (function (e) {
          function t() {
            for (
              var t, i = arguments.length, r = new Array(i), n = 0;
              n < i;
              n++
            )
              r[n] = arguments[n];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, i) {
                var r = t.resolveArguments(e, i),
                  n = r[0],
                  o = r[1];
                t.removeClasses(n, "exit"),
                  t.addClass(n, o ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, i);
              }),
              (t.onEntering = function (e, i) {
                var r = t.resolveArguments(e, i),
                  n = r[0],
                  o = r[1] ? "appear" : "enter";
                t.addClass(n, o, "active"),
                  t.props.onEntering && t.props.onEntering(e, i);
              }),
              (t.onEntered = function (e, i) {
                var r = t.resolveArguments(e, i),
                  n = r[0],
                  o = r[1] ? "appear" : "enter";
                t.removeClasses(n, o),
                  t.addClass(n, o, "done"),
                  t.props.onEntered && t.props.onEntered(e, i);
              }),
              (t.onExit = function (e) {
                var i = t.resolveArguments(e)[0];
                t.removeClasses(i, "appear"),
                  t.removeClasses(i, "enter"),
                  t.addClass(i, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var i = t.resolveArguments(e)[0];
                t.addClass(i, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var i = t.resolveArguments(e)[0];
                t.removeClasses(i, "exit"),
                  t.addClass(i, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, i) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, i];
              }),
              (t.getClassNames = function (e) {
                var i = t.props.classNames,
                  r = "string" == typeof i,
                  n = r ? "" + (r && i ? i + "-" : "") + e : i[e];
                return {
                  baseClassName: n,
                  activeClassName: r ? n + "-active" : i[e + "Active"],
                  doneClassName: r ? n + "-done" : i[e + "Done"],
                };
              }),
              t
            );
          }
          (0, o.Z)(t, e);
          var i = t.prototype;
          return (
            (i.addClass = function (e, t, i) {
              var r = this.getClassNames(t)[i + "ClassName"],
                n = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === i && n && (r += " " + n),
                "active" === i && e && d(e),
                r &&
                  ((this.appliedClasses[t][i] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (r = t),
                          void ((i = e).classList
                            ? i.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(i, r) ||
                              ("string" == typeof i.className
                                ? (i.className = i.className + " " + r)
                                : i.setAttribute(
                                    "class",
                                    ((i.className && i.className.baseVal) ||
                                      "") +
                                      " " +
                                      r
                                  )))
                        );
                        var i, r;
                      });
                  })(e, r));
            }),
            (i.removeClasses = function (e, t) {
              var i = this.appliedClasses[t],
                r = i.base,
                n = i.active,
                o = i.done;
              (this.appliedClasses[t] = {}),
                r && w(e, r),
                n && w(e, n),
                o && w(e, o);
            }),
            (i.render = function () {
              var e = this.props,
                t = (e.classNames, (0, n.Z)(e, ["classNames"]));
              return c.createElement(
                v,
                (0, r.Z)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            t
          );
        })(c.Component);
      (D.defaultProps = { classNames: "" }), (D.propTypes = {});
      const M = D;
    },
    675: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => p });
      var r = i(9756),
        n = i(2122);
      var o = i(3552),
        a = (i(5697), i(7294)),
        c = i(220);
      function s(e, t) {
        var i = Object.create(null);
        return (
          e &&
            a.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              i[e.key] = (function (e) {
                return t && (0, a.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          i
        );
      }
      function l(e, t, i) {
        return null != i[t] ? i[t] : e.props[t];
      }
      function u(e, t, i) {
        var r = s(e.children),
          n = (function (e, t) {
            function i(i) {
              return i in t ? t[i] : e[i];
            }
            (e = e || {}), (t = t || {});
            var r,
              n = Object.create(null),
              o = [];
            for (var a in e)
              a in t ? o.length && ((n[a] = o), (o = [])) : o.push(a);
            var c = {};
            for (var s in t) {
              if (n[s])
                for (r = 0; r < n[s].length; r++) {
                  var l = n[s][r];
                  c[n[s][r]] = i(l);
                }
              c[s] = i(s);
            }
            for (r = 0; r < o.length; r++) c[o[r]] = i(o[r]);
            return c;
          })(t, r);
        return (
          Object.keys(n).forEach(function (o) {
            var c = n[o];
            if ((0, a.isValidElement)(c)) {
              var s = o in t,
                u = o in r,
                d = t[o],
                m = (0, a.isValidElement)(d) && !d.props.in;
              !u || (s && !m)
                ? u || !s || m
                  ? u &&
                    s &&
                    (0, a.isValidElement)(d) &&
                    (n[o] = (0, a.cloneElement)(c, {
                      onExited: i.bind(null, c),
                      in: d.props.in,
                      exit: l(c, "exit", e),
                      enter: l(c, "enter", e),
                    }))
                  : (n[o] = (0, a.cloneElement)(c, { in: !1 }))
                : (n[o] = (0, a.cloneElement)(c, {
                    onExited: i.bind(null, c),
                    in: !0,
                    exit: l(c, "exit", e),
                    enter: l(c, "enter", e),
                  }));
            }
          }),
          n
        );
      }
      var d =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        m = (function (e) {
          function t(t, i) {
            var r,
              n = (r = e.call(this, t, i) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: n,
                firstRender: !0,
              }),
              r
            );
          }
          (0, o.Z)(t, e);
          var i = t.prototype;
          return (
            (i.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (i.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var i,
                r,
                n = t.children,
                o = t.handleExited;
              return {
                children: t.firstRender
                  ? ((i = e),
                    (r = o),
                    s(i.children, function (e) {
                      return (0,
                      a.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: l(e, "appear", i), enter: l(e, "enter", i), exit: l(e, "exit", i) });
                    }))
                  : u(e, n, o),
                firstRender: !1,
              };
            }),
            (i.handleExited = function (e, t) {
              var i = s(this.props.children);
              e.key in i ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var i = (0, n.Z)({}, t.children);
                    return delete i[e.key], { children: i };
                  }));
            }),
            (i.render = function () {
              var e = this.props,
                t = e.component,
                i = e.childFactory,
                n = (0, r.Z)(e, ["component", "childFactory"]),
                o = this.state.contextValue,
                s = d(this.state.children).map(i);
              return (
                delete n.appear,
                delete n.enter,
                delete n.exit,
                null === t
                  ? a.createElement(c.Z.Provider, { value: o }, s)
                  : a.createElement(
                      c.Z.Provider,
                      { value: o },
                      a.createElement(t, n, s)
                    )
              );
            }),
            t
          );
        })(a.Component);
      (m.propTypes = {}),
        (m.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      const p = m;
    },
    220: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => r });
      const r = i(7294).createContext(null);
    },
    1033: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => x });
      var r = (function () {
          if ("undefined" != typeof Map) return Map;
          function e(e, t) {
            var i = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((i = r), !0);
              }),
              i
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var i = e(this.__entries__, t),
                  r = this.__entries__[i];
                return r && r[1];
              }),
              (t.prototype.set = function (t, i) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = i)
                  : this.__entries__.push([t, i]);
              }),
              (t.prototype.delete = function (t) {
                var i = this.__entries__,
                  r = e(i, t);
                ~r && i.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var i = 0, r = this.__entries__; i < r.length; i++) {
                  var n = r[i];
                  e.call(t, n[1], n[0]);
                }
              }),
              t
            );
          })();
        })(),
        n =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        o =
          void 0 !== i.g && i.g.Math === Math
            ? i.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        a =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(o)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
      var c = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        s = "undefined" != typeof MutationObserver,
        l = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var i = !1,
                  r = !1,
                  n = 0;
                function o() {
                  i && ((i = !1), e()), r && s();
                }
                function c() {
                  a(o);
                }
                function s() {
                  var e = Date.now();
                  if (i) {
                    if (e - n < 2) return;
                    r = !0;
                  } else (i = !0), (r = !1), setTimeout(c, t);
                  n = e;
                }
                return s;
              })(this.refresh.bind(this), 20));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                i = t.indexOf(e);
              ~i && t.splice(i, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              n &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                s
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              n &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                i = void 0 === t ? "" : t;
              c.some(function (e) {
                return !!~i.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        u = function (e, t) {
          for (var i = 0, r = Object.keys(t); i < r.length; i++) {
            var n = r[i];
            Object.defineProperty(e, n, {
              value: t[n],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        d = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || o;
        },
        m = b(0, 0, 0, 0);
      function p(e) {
        return parseFloat(e) || 0;
      }
      function f(e) {
        for (var t = [], i = 1; i < arguments.length; i++)
          t[i - 1] = arguments[i];
        return t.reduce(function (t, i) {
          return t + p(e["border-" + i + "-width"]);
        }, 0);
      }
      function h(e) {
        var t = e.clientWidth,
          i = e.clientHeight;
        if (!t && !i) return m;
        var r = d(e).getComputedStyle(e),
          n = (function (e) {
            for (
              var t = {}, i = 0, r = ["top", "right", "bottom", "left"];
              i < r.length;
              i++
            ) {
              var n = r[i],
                o = e["padding-" + n];
              t[n] = p(o);
            }
            return t;
          })(r),
          o = n.left + n.right,
          a = n.top + n.bottom,
          c = p(r.width),
          s = p(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(c + o) !== t && (c -= f(r, "left", "right") + o),
            Math.round(s + a) !== i && (s -= f(r, "top", "bottom") + a)),
          !(function (e) {
            return e === d(e).document.documentElement;
          })(e))
        ) {
          var l = Math.round(c + o) - t,
            u = Math.round(s + a) - i;
          1 !== Math.abs(l) && (c -= l), 1 !== Math.abs(u) && (s -= u);
        }
        return b(n.left, n.top, c, s);
      }
      var y =
        "undefined" != typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof d(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof d(e).SVGElement && "function" == typeof e.getBBox
              );
            };
      function g(e) {
        return n
          ? y(e)
            ? (function (e) {
                var t = e.getBBox();
                return b(0, 0, t.width, t.height);
              })(e)
            : h(e)
          : m;
      }
      function b(e, t, i, r) {
        return { x: e, y: t, width: i, height: r };
      }
      var v = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = b(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = g(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        w = function (e, t) {
          var i,
            r,
            n,
            o,
            a,
            c,
            s,
            l =
              ((r = (i = t).x),
              (n = i.y),
              (o = i.width),
              (a = i.height),
              (c =
                "undefined" != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (s = Object.create(c.prototype)),
              u(s, {
                x: r,
                y: n,
                width: o,
                height: a,
                top: n,
                right: r + o,
                bottom: a + n,
                left: r,
              }),
              s);
          u(this, { target: e, contentRect: l });
        },
        D = (function () {
          function e(e, t, i) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new r()),
              "function" != typeof e)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = i);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof d(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new v(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof d(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new w(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        M = "undefined" != typeof WeakMap ? new WeakMap() : new r(),
        S = function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var i = l.getInstance(),
            r = new D(t, i, this);
          M.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        S.prototype[e] = function () {
          var t;
          return (t = M.get(this))[e].apply(t, arguments);
        };
      });
      const x = void 0 !== o.ResizeObserver ? o.ResizeObserver : S;
    },
    7605: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => l });
      var r = i(655),
        n = i(5244),
        o = i(1016),
        a = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._value = t), i;
          }
          return (
            r.ZT(t, e),
            Object.defineProperty(t.prototype, "value", {
              get: function () {
                return this.getValue();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._subscribe = function (t) {
              var i = e.prototype._subscribe.call(this, t);
              return i && !i.closed && t.next(this._value), i;
            }),
            (t.prototype.getValue = function () {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new o.N();
              return this._value;
            }),
            (t.prototype.next = function (t) {
              e.prototype.next.call(this, (this._value = t));
            }),
            t
          );
        })(n.xQ),
        c = i(7294);
      const s = function (e) {
        var t = (0, c.useRef)();
        return t.current || (t.current = { v: e() }), t.current.v;
      };
      function l(e, t, i) {
        var n = (0, r.CR)((0, c.useState)(void 0 !== t ? t : null), 2),
          o = n[0],
          l = n[1],
          u = s(function () {
            return new a(t);
          }),
          d = s(function () {
            return new a(i);
          });
        return (
          (0, c.useEffect)(function () {
            d.next(i);
          }, i || []),
          (0, c.useEffect)(function () {
            var t = (i ? e(d, u) : e(u)).subscribe(function (e) {
              u.next(e), l(e);
            });
            return function () {
              t.unsubscribe(), d.complete(), u.complete();
            };
          }, []),
          o
        );
      }
    },
    1906: (e, t, i) => {
      "use strict";
      i.d(t, { y: () => u });
      var r = i(979);
      var n = i(3142),
        o = i(2174);
      var a = i(7249);
      function c(e) {
        return e;
      }
      function s(e) {
        return 0 === e.length
          ? c
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var l = i(150),
        u = (function () {
          function e(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var i = new e();
              return (i.source = this), (i.operator = t), i;
            }),
            (e.prototype.subscribe = function (e, t, i) {
              var a = this.operator,
                c = (function (e, t, i) {
                  if (e) {
                    if (e instanceof r.L) return e;
                    if (e[n.b]) return e[n.b]();
                  }
                  return e || t || i ? new r.L(e, t, i) : new r.L(o.c);
                })(e, t, i);
              if (
                (a
                  ? c.add(a.call(c, this.source))
                  : c.add(
                      this.source ||
                        (l.v.useDeprecatedSynchronousErrorHandling &&
                          !c.syncErrorThrowable)
                        ? this._subscribe(c)
                        : this._trySubscribe(c)
                    ),
                l.v.useDeprecatedSynchronousErrorHandling &&
                  c.syncErrorThrowable &&
                  ((c.syncErrorThrowable = !1), c.syncErrorThrown))
              )
                throw c.syncErrorValue;
              return c;
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                l.v.useDeprecatedSynchronousErrorHandling &&
                  ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                  !(function (e) {
                    for (; e; ) {
                      var t = e,
                        i = t.closed,
                        n = t.destination,
                        o = t.isStopped;
                      if (i || o) return !1;
                      e = n && n instanceof r.L ? n : null;
                    }
                    return !0;
                  })(e)
                    ? console.warn(t)
                    : e.error(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var i = this;
              return new (t = d(t))(function (t, r) {
                var n;
                n = i.subscribe(
                  function (t) {
                    try {
                      e(t);
                    } catch (i) {
                      r(i), n && n.unsubscribe();
                    }
                  },
                  r,
                  t
                );
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t = this.source;
              return t && t.subscribe(e);
            }),
            (e.prototype[a.L] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return 0 === e.length ? this : s(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = d(e))(function (e, i) {
                var r;
                t.subscribe(
                  function (e) {
                    return (r = e);
                  },
                  function (e) {
                    return i(e);
                  },
                  function () {
                    return e(r);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function d(e) {
        if ((e || (e = l.v.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
    },
    2174: (e, t, i) => {
      "use strict";
      i.d(t, { c: () => o });
      var r = i(150),
        n = i(1644),
        o = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (r.v.useDeprecatedSynchronousErrorHandling) throw e;
            (0, n.z)(e);
          },
          complete: function () {},
        };
    },
    5244: (e, t, i) => {
      "use strict";
      i.d(t, { xQ: () => d });
      var r = i(655),
        n = i(1906),
        o = i(979),
        a = i(3884),
        c = i(1016),
        s = (function (e) {
          function t(t, i) {
            var r = e.call(this) || this;
            return (r.subject = t), (r.subscriber = i), (r.closed = !1), r;
          }
          return (
            r.ZT(t, e),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var e = this.subject,
                  t = e.observers;
                if (
                  ((this.subject = null),
                  t && 0 !== t.length && !e.isStopped && !e.closed)
                ) {
                  var i = t.indexOf(this.subscriber);
                  -1 !== i && t.splice(i, 1);
                }
              }
            }),
            t
          );
        })(a.w),
        l = i(3142),
        u = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.destination = t), i;
          }
          return r.ZT(t, e), t;
        })(o.L),
        d = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.observers = []),
              (t.closed = !1),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            r.ZT(t, e),
            (t.prototype[l.b] = function () {
              return new u(this);
            }),
            (t.prototype.lift = function (e) {
              var t = new m(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype.next = function (e) {
              if (this.closed) throw new c.N();
              if (!this.isStopped)
                for (
                  var t = this.observers, i = t.length, r = t.slice(), n = 0;
                  n < i;
                  n++
                )
                  r[n].next(e);
            }),
            (t.prototype.error = function (e) {
              if (this.closed) throw new c.N();
              (this.hasError = !0),
                (this.thrownError = e),
                (this.isStopped = !0);
              for (
                var t = this.observers, i = t.length, r = t.slice(), n = 0;
                n < i;
                n++
              )
                r[n].error(e);
              this.observers.length = 0;
            }),
            (t.prototype.complete = function () {
              if (this.closed) throw new c.N();
              this.isStopped = !0;
              for (
                var e = this.observers, t = e.length, i = e.slice(), r = 0;
                r < t;
                r++
              )
                i[r].complete();
              this.observers.length = 0;
            }),
            (t.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (t.prototype._trySubscribe = function (t) {
              if (this.closed) throw new c.N();
              return e.prototype._trySubscribe.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              if (this.closed) throw new c.N();
              return this.hasError
                ? (e.error(this.thrownError), a.w.EMPTY)
                : this.isStopped
                ? (e.complete(), a.w.EMPTY)
                : (this.observers.push(e), new s(this, e));
            }),
            (t.prototype.asObservable = function () {
              var e = new n.y();
              return (e.source = this), e;
            }),
            (t.create = function (e, t) {
              return new m(e, t);
            }),
            t
          );
        })(n.y),
        m = (function (e) {
          function t(t, i) {
            var r = e.call(this) || this;
            return (r.destination = t), (r.source = i), r;
          }
          return (
            r.ZT(t, e),
            (t.prototype.next = function (e) {
              var t = this.destination;
              t && t.next && t.next(e);
            }),
            (t.prototype.error = function (e) {
              var t = this.destination;
              t && t.error && this.destination.error(e);
            }),
            (t.prototype.complete = function () {
              var e = this.destination;
              e && e.complete && this.destination.complete();
            }),
            (t.prototype._subscribe = function (e) {
              return this.source ? this.source.subscribe(e) : a.w.EMPTY;
            }),
            t
          );
        })(d);
    },
    979: (e, t, i) => {
      "use strict";
      i.d(t, { L: () => u });
      var r = i(655),
        n = i(4156),
        o = i(2174),
        a = i(3884),
        c = i(3142),
        s = i(150),
        l = i(1644),
        u = (function (e) {
          function t(i, r, n) {
            var a = e.call(this) || this;
            switch (
              ((a.syncErrorValue = null),
              (a.syncErrorThrown = !1),
              (a.syncErrorThrowable = !1),
              (a.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                a.destination = o.c;
                break;
              case 1:
                if (!i) {
                  a.destination = o.c;
                  break;
                }
                if ("object" == typeof i) {
                  i instanceof t
                    ? ((a.syncErrorThrowable = i.syncErrorThrowable),
                      (a.destination = i),
                      i.add(a))
                    : ((a.syncErrorThrowable = !0),
                      (a.destination = new d(a, i)));
                  break;
                }
              default:
                (a.syncErrorThrowable = !0),
                  (a.destination = new d(a, i, r, n));
            }
            return a;
          }
          return (
            r.ZT(t, e),
            (t.prototype[c.b] = function () {
              return this;
            }),
            (t.create = function (e, i, r) {
              var n = new t(e, i, r);
              return (n.syncErrorThrowable = !1), n;
            }),
            (t.prototype.next = function (e) {
              this.isStopped || this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function () {
              var e = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = e),
                this
              );
            }),
            t
          );
        })(a.w),
        d = (function (e) {
          function t(t, i, r, a) {
            var c,
              s = e.call(this) || this;
            s._parentSubscriber = t;
            var l = s;
            return (
              (0, n.m)(i)
                ? (c = i)
                : i &&
                  ((c = i.next),
                  (r = i.error),
                  (a = i.complete),
                  i !== o.c &&
                    ((l = Object.create(i)),
                    (0, n.m)(l.unsubscribe) && s.add(l.unsubscribe.bind(l)),
                    (l.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = l),
              (s._next = c),
              (s._error = r),
              (s._complete = a),
              s
            );
          }
          return (
            r.ZT(t, e),
            (t.prototype.next = function (e) {
              if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                s.v.useDeprecatedSynchronousErrorHandling &&
                t.syncErrorThrowable
                  ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e);
              }
            }),
            (t.prototype.error = function (e) {
              if (!this.isStopped) {
                var t = this._parentSubscriber,
                  i = s.v.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  i && t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, this._error, e),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (t.syncErrorThrowable)
                  i
                    ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                    : (0, l.z)(e),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), i)) throw e;
                  (0, l.z)(e);
                }
              }
            }),
            (t.prototype.complete = function () {
              var e = this;
              if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                  var i = function () {
                    return e._complete.call(e._context);
                  };
                  s.v.useDeprecatedSynchronousErrorHandling &&
                  t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, i), this.unsubscribe())
                    : (this.__tryOrUnsub(i), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (t.prototype.__tryOrUnsub = function (e, t) {
              try {
                e.call(this._context, t);
              } catch (i) {
                if (
                  (this.unsubscribe(),
                  s.v.useDeprecatedSynchronousErrorHandling)
                )
                  throw i;
                (0, l.z)(i);
              }
            }),
            (t.prototype.__tryOrSetError = function (e, t, i) {
              if (!s.v.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                t.call(this._context, i);
              } catch (r) {
                return s.v.useDeprecatedSynchronousErrorHandling
                  ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                  : ((0, l.z)(r), !0);
              }
              return !1;
            }),
            (t.prototype._unsubscribe = function () {
              var e = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                e.unsubscribe();
            }),
            t
          );
        })(u);
    },
    3884: (e, t, i) => {
      "use strict";
      i.d(t, { w: () => c });
      var r = i(9026),
        n = i(2009),
        o = i(4156),
        a = (function () {
          function e(e) {
            return (
              Error.call(this),
              (this.message = e
                ? e.length +
                  " errors occurred during unsubscription:\n" +
                  e
                    .map(function (e, t) {
                      return t + 1 + ") " + e.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = e),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        c = (function () {
          function e(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
          }
          var t;
          return (
            (e.prototype.unsubscribe = function () {
              var t;
              if (!this.closed) {
                var i = this,
                  c = i._parentOrParents,
                  l = i._ctorUnsubscribe,
                  u = i._unsubscribe,
                  d = i._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  c instanceof e)
                )
                  c.remove(this);
                else if (null !== c)
                  for (var m = 0; m < c.length; ++m) {
                    c[m].remove(this);
                  }
                if ((0, o.m)(u)) {
                  l && (this._unsubscribe = void 0);
                  try {
                    u.call(this);
                  } catch (h) {
                    t = h instanceof a ? s(h.errors) : [h];
                  }
                }
                if ((0, r.k)(d)) {
                  m = -1;
                  for (var p = d.length; ++m < p; ) {
                    var f = d[m];
                    if ((0, n.K)(f))
                      try {
                        f.unsubscribe();
                      } catch (h) {
                        (t = t || []),
                          h instanceof a
                            ? (t = t.concat(s(h.errors)))
                            : t.push(h);
                      }
                  }
                }
                if (t) throw new a(t);
              }
            }),
            (e.prototype.add = function (t) {
              var i = t;
              if (!t) return e.EMPTY;
              switch (typeof t) {
                case "function":
                  i = new e(t);
                case "object":
                  if (
                    i === this ||
                    i.closed ||
                    "function" != typeof i.unsubscribe
                  )
                    return i;
                  if (this.closed) return i.unsubscribe(), i;
                  if (!(i instanceof e)) {
                    var r = i;
                    (i = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + t + " added to Subscription."
                  );
              }
              var n = i._parentOrParents;
              if (null === n) i._parentOrParents = this;
              else if (n instanceof e) {
                if (n === this) return i;
                i._parentOrParents = [n, this];
              } else {
                if (-1 !== n.indexOf(this)) return i;
                n.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [i]) : o.push(i), i;
            }),
            (e.prototype.remove = function (e) {
              var t = this._subscriptions;
              if (t) {
                var i = t.indexOf(e);
                -1 !== i && t.splice(i, 1);
              }
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
        })();
      function s(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof a ? t.errors : t);
        }, []);
      }
    },
    150: (e, t, i) => {
      "use strict";
      i.d(t, { v: () => n });
      var r = !1,
        n = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            e && new Error().stack;
            r = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          },
        };
    },
    7604: (e, t, i) => {
      "use strict";
      i.d(t, { IY: () => c, Ds: () => s, ft: () => l });
      var r = i(655),
        n = i(979),
        o = i(1906),
        a = i(7843),
        c = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i.parent = t), i;
          }
          return (
            r.ZT(t, e),
            (t.prototype._next = function (e) {
              this.parent.notifyNext(e);
            }),
            (t.prototype._error = function (e) {
              this.parent.notifyError(e), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            t
          );
        })(n.L),
        s =
          (n.L,
          (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r.ZT(t, e),
              (t.prototype.notifyNext = function (e) {
                this.destination.next(e);
              }),
              (t.prototype.notifyError = function (e) {
                this.destination.error(e);
              }),
              (t.prototype.notifyComplete = function () {
                this.destination.complete();
              }),
              t
            );
          })(n.L));
      n.L;
      function l(e, t) {
        if (!t.closed) {
          if (e instanceof o.y) return e.subscribe(t);
          var i;
          try {
            i = (0, a.s)(e)(t);
          } catch (r) {
            t.error(r);
          }
          return i;
        }
      }
    },
    540: (e, t, i) => {
      "use strict";
      i.d(t, { h: () => S });
      var r = i(655),
        n = "undefined" != typeof window && window,
        o =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        a = void 0 !== i.g && i.g,
        c = n || a || o,
        s = i(1906),
        l = i(979);
      function u(e, t) {
        return (
          void 0 === t && (t = null),
          new g({ method: "GET", url: e, headers: t })
        );
      }
      function d(e, t, i) {
        return new g({ method: "POST", url: e, body: t, headers: i });
      }
      function m(e, t) {
        return new g({ method: "DELETE", url: e, headers: t });
      }
      function p(e, t, i) {
        return new g({ method: "PUT", url: e, body: t, headers: i });
      }
      function f(e, t, i) {
        return new g({ method: "PATCH", url: e, body: t, headers: i });
      }
      var h = (0, i(5709).U)(function (e, t) {
        return e.response;
      });
      function y(e, t) {
        return h(
          new g({ method: "GET", url: e, responseType: "json", headers: t })
        );
      }
      var g = (function (e) {
          function t(t) {
            var i = e.call(this) || this,
              r = {
                async: !0,
                createXHR: function () {
                  return this.crossDomain
                    ? (function () {
                        if (c.XMLHttpRequest) return new c.XMLHttpRequest();
                        if (c.XDomainRequest) return new c.XDomainRequest();
                        throw new Error(
                          "CORS is not supported by your browser"
                        );
                      })()
                    : (function () {
                        if (c.XMLHttpRequest) return new c.XMLHttpRequest();
                        var e = void 0;
                        try {
                          for (
                            var t = [
                                "Msxml2.XMLHTTP",
                                "Microsoft.XMLHTTP",
                                "Msxml2.XMLHTTP.4.0",
                              ],
                              i = 0;
                            i < 3;
                            i++
                          )
                            try {
                              if (((e = t[i]), new c.ActiveXObject(e))) break;
                            } catch (r) {}
                          return new c.ActiveXObject(e);
                        } catch (r) {
                          throw new Error(
                            "XMLHttpRequest is not supported by your browser"
                          );
                        }
                      })();
                },
                crossDomain: !0,
                withCredentials: !1,
                headers: {},
                method: "GET",
                responseType: "json",
                timeout: 0,
              };
            if ("string" == typeof t) r.url = t;
            else for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
            return (i.request = r), i;
          }
          var i;
          return (
            r.ZT(t, e),
            (t.prototype._subscribe = function (e) {
              return new b(e, this.request);
            }),
            (t.create =
              (((i = function (e) {
                return new t(e);
              }).get = u),
              (i.post = d),
              (i.delete = m),
              (i.put = p),
              (i.patch = f),
              (i.getJSON = y),
              i)),
            t
          );
        })(s.y),
        b = (function (e) {
          function t(t, i) {
            var r = e.call(this, t) || this;
            (r.request = i), (r.done = !1);
            var n = (i.headers = i.headers || {});
            return (
              i.crossDomain ||
                r.getHeader(n, "X-Requested-With") ||
                (n["X-Requested-With"] = "XMLHttpRequest"),
              r.getHeader(n, "Content-Type") ||
                (c.FormData && i.body instanceof c.FormData) ||
                void 0 === i.body ||
                (n["Content-Type"] =
                  "application/x-www-form-urlencoded; charset=UTF-8"),
              (i.body = r.serializeBody(
                i.body,
                r.getHeader(i.headers, "Content-Type")
              )),
              r.send(),
              r
            );
          }
          return (
            r.ZT(t, e),
            (t.prototype.next = function (e) {
              this.done = !0;
              var t,
                i = this,
                r = i.xhr,
                n = i.request,
                o = i.destination;
              try {
                t = new v(e, r, n);
              } catch (a) {
                return o.error(a);
              }
              o.next(t);
            }),
            (t.prototype.send = function () {
              var e = this.request,
                t = this.request,
                i = t.user,
                r = t.method,
                n = t.url,
                o = t.async,
                a = t.password,
                c = t.headers,
                s = t.body;
              try {
                var l = (this.xhr = e.createXHR());
                this.setupEvents(l, e),
                  i ? l.open(r, n, o, i, a) : l.open(r, n, o),
                  o &&
                    ((l.timeout = e.timeout),
                    (l.responseType = e.responseType)),
                  "withCredentials" in l &&
                    (l.withCredentials = !!e.withCredentials),
                  this.setHeaders(l, c),
                  s ? l.send(s) : l.send();
              } catch (u) {
                this.error(u);
              }
            }),
            (t.prototype.serializeBody = function (e, t) {
              if (!e || "string" == typeof e) return e;
              if (c.FormData && e instanceof c.FormData) return e;
              if (t) {
                var i = t.indexOf(";");
                -1 !== i && (t = t.substring(0, i));
              }
              switch (t) {
                case "application/x-www-form-urlencoded":
                  return Object.keys(e)
                    .map(function (t) {
                      return (
                        encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                      );
                    })
                    .join("&");
                case "application/json":
                  return JSON.stringify(e);
                default:
                  return e;
              }
            }),
            (t.prototype.setHeaders = function (e, t) {
              for (var i in t)
                t.hasOwnProperty(i) && e.setRequestHeader(i, t[i]);
            }),
            (t.prototype.getHeader = function (e, t) {
              for (var i in e)
                if (i.toLowerCase() === t.toLowerCase()) return e[i];
            }),
            (t.prototype.setupEvents = function (e, t) {
              var i = t.progressSubscriber;
              function r(e) {
                var t,
                  i = r,
                  n = i.subscriber,
                  o = i.progressSubscriber,
                  a = i.request;
                o && o.error(e);
                try {
                  t = new M(this, a);
                } catch (c) {
                  t = c;
                }
                n.error(t);
              }
              if (
                ((e.ontimeout = r),
                (r.request = t),
                (r.subscriber = this),
                (r.progressSubscriber = i),
                e.upload && "withCredentials" in e)
              ) {
                var n, o;
                if (i)
                  (n = function (e) {
                    n.progressSubscriber.next(e);
                  }),
                    c.XDomainRequest
                      ? (e.onprogress = n)
                      : (e.upload.onprogress = n),
                    (n.progressSubscriber = i);
                (o = function (e) {
                  var t,
                    i = o,
                    r = i.progressSubscriber,
                    n = i.subscriber,
                    a = i.request;
                  r && r.error(e);
                  try {
                    t = new w("ajax error", this, a);
                  } catch (c) {
                    t = c;
                  }
                  n.error(t);
                }),
                  (e.onerror = o),
                  (o.request = t),
                  (o.subscriber = this),
                  (o.progressSubscriber = i);
              }
              function a(e) {}
              function s(e) {
                var t = s,
                  i = t.subscriber,
                  r = t.progressSubscriber,
                  n = t.request;
                if (4 === this.readyState) {
                  var o = 1223 === this.status ? 204 : this.status,
                    a =
                      "text" === this.responseType
                        ? this.response || this.responseText
                        : this.response;
                  if ((0 === o && (o = a ? 200 : 0), o < 400))
                    r && r.complete(), i.next(e), i.complete();
                  else {
                    r && r.error(e);
                    var c = void 0;
                    try {
                      c = new w("ajax error " + o, this, n);
                    } catch (l) {
                      c = l;
                    }
                    i.error(c);
                  }
                }
              }
              (e.onreadystatechange = a),
                (a.subscriber = this),
                (a.progressSubscriber = i),
                (a.request = t),
                (e.onload = s),
                (s.subscriber = this),
                (s.progressSubscriber = i),
                (s.request = t);
            }),
            (t.prototype.unsubscribe = function () {
              var t = this.done,
                i = this.xhr;
              !t &&
                i &&
                4 !== i.readyState &&
                "function" == typeof i.abort &&
                i.abort(),
                e.prototype.unsubscribe.call(this);
            }),
            t
          );
        })(l.L),
        v = (function () {
          return function (e, t, i) {
            (this.originalEvent = e),
              (this.xhr = t),
              (this.request = i),
              (this.status = t.status),
              (this.responseType = t.responseType || i.responseType),
              (this.response = D(this.responseType, t));
          };
        })(),
        w = (function () {
          function e(e, t, i) {
            return (
              Error.call(this),
              (this.message = e),
              (this.name = "AjaxError"),
              (this.xhr = t),
              (this.request = i),
              (this.status = t.status),
              (this.responseType = t.responseType || i.responseType),
              (this.response = D(this.responseType, t)),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })();
      function D(e, t) {
        switch (e) {
          case "json":
            return (function (e) {
              return "response" in e
                ? e.responseType
                  ? e.response
                  : JSON.parse(e.response || e.responseText || "null")
                : JSON.parse(e.responseText || "null");
            })(t);
          case "xml":
            return t.responseXML;
          case "text":
          default:
            return "response" in t ? t.response : t.responseText;
        }
      }
      var M = function (e, t) {
          return (
            w.call(this, "ajax timeout", e, t),
            (this.name = "AjaxTimeoutError"),
            this
          );
        },
        S = (function () {
          return g.create;
        })();
    },
    4072: (e, t, i) => {
      "use strict";
      i.d(t, { D: () => m });
      var r = i(1906),
        n = i(7843),
        o = i(3884),
        a = i(7249);
      var c = i(3109),
        s = i(999);
      var l = i(336),
        u = i(9217);
      function d(e, t) {
        if (null != e) {
          if (
            (function (e) {
              return e && "function" == typeof e[a.L];
            })(e)
          )
            return (function (e, t) {
              return new r.y(function (i) {
                var r = new o.w();
                return (
                  r.add(
                    t.schedule(function () {
                      var n = e[a.L]();
                      r.add(
                        n.subscribe({
                          next: function (e) {
                            r.add(
                              t.schedule(function () {
                                return i.next(e);
                              })
                            );
                          },
                          error: function (e) {
                            r.add(
                              t.schedule(function () {
                                return i.error(e);
                              })
                            );
                          },
                          complete: function () {
                            r.add(
                              t.schedule(function () {
                                return i.complete();
                              })
                            );
                          },
                        })
                      );
                    })
                  ),
                  r
                );
              });
            })(e, t);
          if ((0, l.t)(e))
            return (function (e, t) {
              return new r.y(function (i) {
                var r = new o.w();
                return (
                  r.add(
                    t.schedule(function () {
                      return e.then(
                        function (e) {
                          r.add(
                            t.schedule(function () {
                              i.next(e),
                                r.add(
                                  t.schedule(function () {
                                    return i.complete();
                                  })
                                );
                            })
                          );
                        },
                        function (e) {
                          r.add(
                            t.schedule(function () {
                              return i.error(e);
                            })
                          );
                        }
                      );
                    })
                  ),
                  r
                );
              });
            })(e, t);
          if ((0, u.z)(e)) return (0, c.r)(e, t);
          if (
            (function (e) {
              return e && "function" == typeof e[s.hZ];
            })(e) ||
            "string" == typeof e
          )
            return (function (e, t) {
              if (!e) throw new Error("Iterable cannot be null");
              return new r.y(function (i) {
                var r,
                  n = new o.w();
                return (
                  n.add(function () {
                    r && "function" == typeof r.return && r.return();
                  }),
                  n.add(
                    t.schedule(function () {
                      (r = e[s.hZ]()),
                        n.add(
                          t.schedule(function () {
                            if (!i.closed) {
                              var e, t;
                              try {
                                var n = r.next();
                                (e = n.value), (t = n.done);
                              } catch (o) {
                                return void i.error(o);
                              }
                              t ? i.complete() : (i.next(e), this.schedule());
                            }
                          })
                        );
                    })
                  ),
                  n
                );
              });
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + " is not observable"
        );
      }
      function m(e, t) {
        return t ? d(e, t) : e instanceof r.y ? e : new r.y((0, n.s)(e));
      }
    },
    2886: (e, t, i) => {
      "use strict";
      i.d(t, { of: () => s });
      var r = i(7507),
        n = i(1906),
        o = i(6900),
        a = i(3109);
      function c(e, t) {
        return t ? (0, a.r)(e, t) : new n.y((0, o.V)(e));
      }
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = e[e.length - 1];
        return (0, r.K)(i) ? (e.pop(), (0, a.r)(e, i)) : c(e);
      }
    },
    9986: (e, t, i) => {
      "use strict";
      i.d(t, { H: () => s });
      var r = i(1906),
        n = i(5278),
        o = i(9026);
      function a(e) {
        return !(0, o.k)(e) && e - parseFloat(e) + 1 >= 0;
      }
      var c = i(7507);
      function s(e, t, i) {
        void 0 === e && (e = 0);
        var o = -1;
        return (
          a(t) ? (o = Number(t) < 1 ? 1 : Number(t)) : (0, c.K)(t) && (i = t),
          (0, c.K)(i) || (i = n.P),
          new r.y(function (t) {
            var r = a(e) ? e : +e - i.now();
            return i.schedule(l, r, { index: 0, period: o, subscriber: t });
          })
        );
      }
      function l(e) {
        var t = e.index,
          i = e.period,
          r = e.subscriber;
        if ((r.next(t), !r.closed)) {
          if (-1 === i) return r.complete();
          (e.index = t + 1), this.schedule(e, i);
        }
      }
    },
    486: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => o });
      var r = i(655),
        n = i(7604);
      function o(e) {
        return function (t) {
          var i = new a(e),
            r = t.lift(i);
          return (i.caught = r);
        };
      }
      var a = (function () {
          function e(e) {
            this.selector = e;
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new c(e, this.selector, this.caught));
            }),
            e
          );
        })(),
        c = (function (e) {
          function t(t, i, r) {
            var n = e.call(this, t) || this;
            return (n.selector = i), (n.caught = r), n;
          }
          return (
            r.ZT(t, e),
            (t.prototype.error = function (t) {
              if (!this.isStopped) {
                var i = void 0;
                try {
                  i = this.selector(t, this.caught);
                } catch (a) {
                  return void e.prototype.error.call(this, a);
                }
                this._unsubscribeAndRecycle();
                var r = new n.IY(this);
                this.add(r);
                var o = (0, n.ft)(i, r);
                o !== r && this.add(o);
              }
            }),
            t
          );
        })(n.Ds);
    },
    1931: (e, t, i) => {
      "use strict";
      i.d(t, { x: () => o });
      var r = i(655),
        n = i(979);
      function o(e, t) {
        return function (i) {
          return i.lift(new a(e, t));
        };
      }
      var a = (function () {
          function e(e, t) {
            (this.compare = e), (this.keySelector = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new c(e, this.compare, this.keySelector));
            }),
            e
          );
        })(),
        c = (function (e) {
          function t(t, i, r) {
            var n = e.call(this, t) || this;
            return (
              (n.keySelector = r),
              (n.hasKey = !1),
              "function" == typeof i && (n.compare = i),
              n
            );
          }
          return (
            r.ZT(t, e),
            (t.prototype.compare = function (e, t) {
              return e === t;
            }),
            (t.prototype._next = function (e) {
              var t;
              try {
                var i = this.keySelector;
                t = i ? i(e) : e;
              } catch (n) {
                return this.destination.error(n);
              }
              var r = !1;
              if (this.hasKey)
                try {
                  r = (0, this.compare)(this.key, t);
                } catch (n) {
                  return this.destination.error(n);
                }
              else this.hasKey = !0;
              r || ((this.key = t), this.destination.next(e));
            }),
            t
          );
        })(n.L);
    },
    9580: (e, t, i) => {
      "use strict";
      i.d(t, { x: () => a });
      var r = i(655),
        n = i(979),
        o = i(3884);
      function a(e) {
        return function (t) {
          return t.lift(new c(e));
        };
      }
      var c = (function () {
          function e(e) {
            this.callback = e;
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new s(e, this.callback));
            }),
            e
          );
        })(),
        s = (function (e) {
          function t(t, i) {
            var r = e.call(this, t) || this;
            return r.add(new o.w(i)), r;
          }
          return r.ZT(t, e), t;
        })(n.L);
    },
    5709: (e, t, i) => {
      "use strict";
      i.d(t, { U: () => o });
      var r = i(655),
        n = i(979);
      function o(e, t) {
        return function (i) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return i.lift(new a(e, t));
        };
      }
      var a = (function () {
          function e(e, t) {
            (this.project = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new c(e, this.project, this.thisArg));
            }),
            e
          );
        })(),
        c = (function (e) {
          function t(t, i, r) {
            var n = e.call(this, t) || this;
            return (n.project = i), (n.count = 0), (n.thisArg = r || n), n;
          }
          return (
            r.ZT(t, e),
            (t.prototype._next = function (e) {
              var t;
              try {
                t = this.project.call(this.thisArg, e, this.count++);
              } catch (i) {
                return void this.destination.error(i);
              }
              this.destination.next(t);
            }),
            t
          );
        })(n.L);
    },
    7746: (e, t, i) => {
      "use strict";
      i.d(t, { zg: () => c });
      var r = i(655),
        n = i(5709),
        o = i(4072),
        a = i(7604);
      function c(e, t, i) {
        return (
          void 0 === i && (i = Number.POSITIVE_INFINITY),
          "function" == typeof t
            ? function (r) {
                return r.pipe(
                  c(function (i, r) {
                    return (0, o.D)(e(i, r)).pipe(
                      (0, n.U)(function (e, n) {
                        return t(i, e, r, n);
                      })
                    );
                  }, i)
                );
              }
            : ("number" == typeof t && (i = t),
              function (t) {
                return t.lift(new s(e, i));
              })
        );
      }
      var s = (function () {
          function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY),
              (this.project = e),
              (this.concurrent = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new l(e, this.project, this.concurrent));
            }),
            e
          );
        })(),
        l = (function (e) {
          function t(t, i, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var n = e.call(this, t) || this;
            return (
              (n.project = i),
              (n.concurrent = r),
              (n.hasCompleted = !1),
              (n.buffer = []),
              (n.active = 0),
              (n.index = 0),
              n
            );
          }
          return (
            r.ZT(t, e),
            (t.prototype._next = function (e) {
              this.active < this.concurrent
                ? this._tryNext(e)
                : this.buffer.push(e);
            }),
            (t.prototype._tryNext = function (e) {
              var t,
                i = this.index++;
              try {
                t = this.project(e, i);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(t);
            }),
            (t.prototype._innerSub = function (e) {
              var t = new a.IY(this),
                i = this.destination;
              i.add(t);
              var r = (0, a.ft)(e, t);
              r !== t && i.add(r);
            }),
            (t.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (t.prototype.notifyNext = function (e) {
              this.destination.next(e);
            }),
            (t.prototype.notifyComplete = function () {
              var e = this.buffer;
              this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            t
          );
        })(a.Ds);
    },
    665: (e, t, i) => {
      "use strict";
      i.d(t, { a: () => a });
      var r = i(655),
        n = i(5244),
        o = i(7604);
      function a(e) {
        return function (t) {
          return t.lift(new c(e, t));
        };
      }
      var c = (function () {
          function e(e, t) {
            (this.notifier = e), (this.source = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new s(e, this.notifier, this.source));
            }),
            e
          );
        })(),
        s = (function (e) {
          function t(t, i, r) {
            var n = e.call(this, t) || this;
            return (n.notifier = i), (n.source = r), n;
          }
          return (
            r.ZT(t, e),
            (t.prototype.error = function (t) {
              if (!this.isStopped) {
                var i = this.errors,
                  r = this.retries,
                  a = this.retriesSubscription;
                if (r)
                  (this.errors = void 0), (this.retriesSubscription = void 0);
                else {
                  i = new n.xQ();
                  try {
                    r = (0, this.notifier)(i);
                  } catch (c) {
                    return e.prototype.error.call(this, c);
                  }
                  a = (0, o.ft)(r, new o.IY(this));
                }
                this._unsubscribeAndRecycle(),
                  (this.errors = i),
                  (this.retries = r),
                  (this.retriesSubscription = a),
                  i.next(t);
              }
            }),
            (t.prototype._unsubscribe = function () {
              var e = this.errors,
                t = this.retriesSubscription;
              e && (e.unsubscribe(), (this.errors = void 0)),
                t && (t.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (t.prototype.notifyNext = function () {
              var e = this._unsubscribe;
              (this._unsubscribe = null),
                this._unsubscribeAndRecycle(),
                (this._unsubscribe = e),
                this.source.subscribe(this);
            }),
            t
          );
        })(o.Ds);
    },
    6381: (e, t, i) => {
      "use strict";
      i.d(t, { w: () => c });
      var r = i(655),
        n = i(5709),
        o = i(4072),
        a = i(7604);
      function c(e, t) {
        return "function" == typeof t
          ? function (i) {
              return i.pipe(
                c(function (i, r) {
                  return (0, o.D)(e(i, r)).pipe(
                    (0, n.U)(function (e, n) {
                      return t(i, e, r, n);
                    })
                  );
                })
              );
            }
          : function (t) {
              return t.lift(new s(e));
            };
      }
      var s = (function () {
          function e(e) {
            this.project = e;
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new l(e, this.project));
            }),
            e
          );
        })(),
        l = (function (e) {
          function t(t, i) {
            var r = e.call(this, t) || this;
            return (r.project = i), (r.index = 0), r;
          }
          return (
            r.ZT(t, e),
            (t.prototype._next = function (e) {
              var t,
                i = this.index++;
              try {
                t = this.project(e, i);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(t);
            }),
            (t.prototype._innerSub = function (e) {
              var t = this.innerSubscription;
              t && t.unsubscribe();
              var i = new a.IY(this),
                r = this.destination;
              r.add(i),
                (this.innerSubscription = (0, a.ft)(e, i)),
                this.innerSubscription !== i && r.add(this.innerSubscription);
            }),
            (t.prototype._complete = function () {
              var t = this.innerSubscription;
              (t && !t.closed) || e.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (t.prototype._unsubscribe = function () {
              this.innerSubscription = void 0;
            }),
            (t.prototype.notifyComplete = function () {
              (this.innerSubscription = void 0),
                this.isStopped && e.prototype._complete.call(this);
            }),
            (t.prototype.notifyNext = function (e) {
              this.destination.next(e);
            }),
            t
          );
        })(a.Ds);
    },
    3438: (e, t, i) => {
      "use strict";
      i.d(t, { b: () => c });
      var r = i(655),
        n = i(979);
      function o() {}
      var a = i(4156);
      function c(e, t, i) {
        return function (r) {
          return r.lift(new s(e, t, i));
        };
      }
      var s = (function () {
          function e(e, t, i) {
            (this.nextOrObserver = e), (this.error = t), (this.complete = i);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(
                new l(e, this.nextOrObserver, this.error, this.complete)
              );
            }),
            e
          );
        })(),
        l = (function (e) {
          function t(t, i, r, n) {
            var c = e.call(this, t) || this;
            return (
              (c._tapNext = o),
              (c._tapError = o),
              (c._tapComplete = o),
              (c._tapError = r || o),
              (c._tapComplete = n || o),
              (0, a.m)(i)
                ? ((c._context = c), (c._tapNext = i))
                : i &&
                  ((c._context = i),
                  (c._tapNext = i.next || o),
                  (c._tapError = i.error || o),
                  (c._tapComplete = i.complete || o)),
              c
            );
          }
          return (
            r.ZT(t, e),
            (t.prototype._next = function (e) {
              try {
                this._tapNext.call(this._context, e);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this._tapError.call(this._context, e);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.error(e);
            }),
            (t.prototype._complete = function () {
              try {
                this._tapComplete.call(this._context);
              } catch (e) {
                return void this.destination.error(e);
              }
              return this.destination.complete();
            }),
            t
          );
        })(n.L);
    },
    6160: (e, t, i) => {
      "use strict";
      i.d(t, { V: () => m });
      var r = i(5278),
        n = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "Timeout has occurred"),
              (this.name = "TimeoutError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        o = i(655);
      var a = i(7604);
      function c(e, t, i) {
        return (
          void 0 === i && (i = r.P),
          function (r) {
            var n,
              o = (n = e) instanceof Date && !isNaN(+n),
              a = o ? +e - i.now() : Math.abs(e);
            return r.lift(new s(a, o, t, i));
          }
        );
      }
      var s = (function () {
          function e(e, t, i, r) {
            (this.waitFor = e),
              (this.absoluteTimeout = t),
              (this.withObservable = i),
              (this.scheduler = r);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(
                new l(
                  e,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.withObservable,
                  this.scheduler
                )
              );
            }),
            e
          );
        })(),
        l = (function (e) {
          function t(t, i, r, n, o) {
            var a = e.call(this, t) || this;
            return (
              (a.absoluteTimeout = i),
              (a.waitFor = r),
              (a.withObservable = n),
              (a.scheduler = o),
              a.scheduleTimeout(),
              a
            );
          }
          return (
            o.ZT(t, e),
            (t.dispatchTimeout = function (e) {
              var t = e.withObservable;
              e._unsubscribeAndRecycle(), e.add((0, a.ft)(t, new a.IY(e)));
            }),
            (t.prototype.scheduleTimeout = function () {
              var e = this.action;
              e
                ? (this.action = e.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      t.dispatchTimeout,
                      this.waitFor,
                      this
                    ))
                  );
            }),
            (t.prototype._next = function (t) {
              this.absoluteTimeout || this.scheduleTimeout(),
                e.prototype._next.call(this, t);
            }),
            (t.prototype._unsubscribe = function () {
              (this.action = void 0),
                (this.scheduler = null),
                (this.withObservable = null);
            }),
            t
          );
        })(a.Ds),
        u = i(1906);
      function d(e) {
        var t = e.error;
        e.subscriber.error(t);
      }
      function m(e, t) {
        return (
          void 0 === t && (t = r.P),
          c(
            e,
            (function (e, t) {
              return t
                ? new u.y(function (i) {
                    return t.schedule(d, 0, { error: e, subscriber: i });
                  })
                : new u.y(function (t) {
                    return t.error(e);
                  });
            })(new n()),
            t
          )
        );
      }
    },
    3109: (e, t, i) => {
      "use strict";
      i.d(t, { r: () => o });
      var r = i(1906),
        n = i(3884);
      function o(e, t) {
        return new r.y(function (i) {
          var r = new n.w(),
            o = 0;
          return (
            r.add(
              t.schedule(function () {
                o !== e.length
                  ? (i.next(e[o++]), i.closed || r.add(this.schedule()))
                  : i.complete();
              })
            ),
            r
          );
        });
      }
    },
    5278: (e, t, i) => {
      "use strict";
      i.d(t, { P: () => a });
      var r = i(655),
        n = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (r.scheduler = t), (r.work = i), (r.pending = !1), r;
          }
          return (
            r.ZT(t, e),
            (t.prototype.schedule = function (e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var i = this.id,
                r = this.scheduler;
              return (
                null != i && (this.id = this.recycleAsyncId(r, i, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, i) {
              return (
                void 0 === i && (i = 0), setInterval(e.flush.bind(e, this), i)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, i) {
              if (
                (void 0 === i && (i = 0),
                null !== i && this.delay === i && !1 === this.pending)
              )
                return t;
              clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var i = this._execute(e, t);
              if (i) return i;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var i = !1,
                r = void 0;
              try {
                this.work(e);
              } catch (n) {
                (i = !0), (r = (!!n && n) || new Error(n));
              }
              if (i) return this.unsubscribe(), r;
            }),
            (t.prototype._unsubscribe = function () {
              var e = this.id,
                t = this.scheduler,
                i = t.actions,
                r = i.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && i.splice(r, 1),
                null != e && (this.id = this.recycleAsyncId(t, e, null)),
                (this.delay = null);
            }),
            t
          );
        })(
          (function (e) {
            function t(t, i) {
              return e.call(this) || this;
            }
            return (
              r.ZT(t, e),
              (t.prototype.schedule = function (e, t) {
                return void 0 === t && (t = 0), this;
              }),
              t
            );
          })(i(3884).w)
        ),
        o = (function () {
          function e(t, i) {
            void 0 === i && (i = e.now),
              (this.SchedulerAction = t),
              (this.now = i);
          }
          return (
            (e.prototype.schedule = function (e, t, i) {
              return (
                void 0 === t && (t = 0),
                new this.SchedulerAction(this, e).schedule(i, t)
              );
            }),
            (e.now = function () {
              return Date.now();
            }),
            e
          );
        })(),
        a = new ((function (e) {
          function t(i, r) {
            void 0 === r && (r = o.now);
            var n =
              e.call(this, i, function () {
                return t.delegate && t.delegate !== n ? t.delegate.now() : r();
              }) || this;
            return (n.actions = []), (n.active = !1), (n.scheduled = void 0), n;
          }
          return (
            r.ZT(t, e),
            (t.prototype.schedule = function (i, r, n) {
              return (
                void 0 === r && (r = 0),
                t.delegate && t.delegate !== this
                  ? t.delegate.schedule(i, r, n)
                  : e.prototype.schedule.call(this, i, r, n)
              );
            }),
            (t.prototype.flush = function (e) {
              var t = this.actions;
              if (this.active) t.push(e);
              else {
                var i;
                this.active = !0;
                do {
                  if ((i = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this.active = !1), i)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw i;
                }
              }
            }),
            t
          );
        })(o))(n);
    },
    999: (e, t, i) => {
      "use strict";
      function r() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      i.d(t, { hZ: () => n });
      var n = r();
    },
    7249: (e, t, i) => {
      "use strict";
      i.d(t, { L: () => r });
      var r = (function () {
        return (
          ("function" == typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
    },
    3142: (e, t, i) => {
      "use strict";
      i.d(t, { b: () => r });
      var r = (function () {
        return "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })();
    },
    1016: (e, t, i) => {
      "use strict";
      i.d(t, { N: () => r });
      var r = (function () {
        function e() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
    },
    1644: (e, t, i) => {
      "use strict";
      function r(e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
      i.d(t, { z: () => r });
    },
    9026: (e, t, i) => {
      "use strict";
      i.d(t, { k: () => r });
      var r = (function () {
        return (
          Array.isArray ||
          function (e) {
            return e && "number" == typeof e.length;
          }
        );
      })();
    },
    9217: (e, t, i) => {
      "use strict";
      i.d(t, { z: () => r });
      var r = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
    },
    4156: (e, t, i) => {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      i.d(t, { m: () => r });
    },
    2009: (e, t, i) => {
      "use strict";
      function r(e) {
        return null !== e && "object" == typeof e;
      }
      i.d(t, { K: () => r });
    },
    336: (e, t, i) => {
      "use strict";
      function r(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      i.d(t, { t: () => r });
    },
    7507: (e, t, i) => {
      "use strict";
      function r(e) {
        return e && "function" == typeof e.schedule;
      }
      i.d(t, { K: () => r });
    },
    7843: (e, t, i) => {
      "use strict";
      i.d(t, { s: () => u });
      var r = i(6900),
        n = i(1644),
        o = i(999),
        a = i(7249),
        c = i(9217),
        s = i(336),
        l = i(2009),
        u = function (e) {
          if (e && "function" == typeof e[a.L])
            return (
              (u = e),
              function (e) {
                var t = u[a.L]();
                if ("function" != typeof t.subscribe)
                  throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                  );
                return t.subscribe(e);
              }
            );
          if ((0, c.z)(e)) return (0, r.V)(e);
          if ((0, s.t)(e))
            return (
              (i = e),
              function (e) {
                return (
                  i
                    .then(
                      function (t) {
                        e.closed || (e.next(t), e.complete());
                      },
                      function (t) {
                        return e.error(t);
                      }
                    )
                    .then(null, n.z),
                  e
                );
              }
            );
          if (e && "function" == typeof e[o.hZ])
            return (
              (t = e),
              function (e) {
                for (var i = t[o.hZ](); ; ) {
                  var r = void 0;
                  try {
                    r = i.next();
                  } catch (n) {
                    return e.error(n), e;
                  }
                  if (r.done) {
                    e.complete();
                    break;
                  }
                  if ((e.next(r.value), e.closed)) break;
                }
                return (
                  "function" == typeof i.return &&
                    e.add(function () {
                      i.return && i.return();
                    }),
                  e
                );
              }
            );
          var t,
            i,
            u,
            d = (0, l.K)(e) ? "an invalid object" : "'" + e + "'";
          throw new TypeError(
            "You provided " +
              d +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          );
        };
    },
    6900: (e, t, i) => {
      "use strict";
      i.d(t, { V: () => r });
      var r = function (e) {
        return function (t) {
          for (var i = 0, r = e.length; i < r && !t.closed; i++) t.next(e[i]);
          t.complete();
        };
      };
    },
    53: (e, t) => {
      "use strict";
      /** @license React v0.20.2
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i, r, n, o;
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var c = Date,
          s = c.now();
        t.unstable_now = function () {
          return c.now() - s;
        };
      }
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var l = null,
          u = null,
          d = function () {
            if (null !== l)
              try {
                var e = t.unstable_now();
                l(!0, e), (l = null);
              } catch (i) {
                throw (setTimeout(d, 0), i);
              }
          };
        (i = function (e) {
          null !== l ? setTimeout(i, 0, e) : ((l = e), setTimeout(d, 0));
        }),
          (r = function (e, t) {
            u = setTimeout(e, t);
          }),
          (n = function () {
            clearTimeout(u);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (o = t.unstable_forceFrameRate = function () {});
      } else {
        var m = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" != typeof console) {
          var f = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" != typeof f &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var h = !1,
          y = null,
          g = -1,
          b = 5,
          v = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= v;
        }),
          (o = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var w = new MessageChannel(),
          D = w.port2;
        (w.port1.onmessage = function () {
          if (null !== y) {
            var e = t.unstable_now();
            v = e + b;
            try {
              y(!0, e) ? D.postMessage(null) : ((h = !1), (y = null));
            } catch (i) {
              throw (D.postMessage(null), i);
            }
          } else h = !1;
        }),
          (i = function (e) {
            (y = e), h || ((h = !0), D.postMessage(null));
          }),
          (r = function (e, i) {
            g = m(function () {
              e(t.unstable_now());
            }, i);
          }),
          (n = function () {
            p(g), (g = -1);
          });
      }
      function M(e, t) {
        var i = e.length;
        e.push(t);
        e: for (;;) {
          var r = (i - 1) >>> 1,
            n = e[r];
          if (!(void 0 !== n && 0 < _(n, t))) break e;
          (e[r] = t), (e[i] = n), (i = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function x(e) {
        var t = e[0];
        if (void 0 !== t) {
          var i = e.pop();
          if (i !== t) {
            e[0] = i;
            e: for (var r = 0, n = e.length; r < n; ) {
              var o = 2 * (r + 1) - 1,
                a = e[o],
                c = o + 1,
                s = e[c];
              if (void 0 !== a && 0 > _(a, i))
                void 0 !== s && 0 > _(s, a)
                  ? ((e[r] = s), (e[c] = i), (r = c))
                  : ((e[r] = a), (e[o] = i), (r = o));
              else {
                if (!(void 0 !== s && 0 > _(s, i))) break e;
                (e[r] = s), (e[c] = i), (r = c);
              }
            }
          }
          return t;
        }
        return null;
      }
      function _(e, t) {
        var i = e.sortIndex - t.sortIndex;
        return 0 !== i ? i : e.id - t.id;
      }
      var T = [],
        N = [],
        F = 1,
        k = null,
        C = 3,
        E = !1,
        Y = !1,
        O = !1;
      function A(e) {
        for (var t = S(N); null !== t; ) {
          if (null === t.callback) x(N);
          else {
            if (!(t.startTime <= e)) break;
            x(N), (t.sortIndex = t.expirationTime), M(T, t);
          }
          t = S(N);
        }
      }
      function L(e) {
        if (((O = !1), A(e), !Y))
          if (null !== S(T)) (Y = !0), i(P);
          else {
            var t = S(N);
            null !== t && r(L, t.startTime - e);
          }
      }
      function P(e, i) {
        (Y = !1), O && ((O = !1), n()), (E = !0);
        var o = C;
        try {
          for (
            A(i), k = S(T);
            null !== k &&
            (!(k.expirationTime > i) || (e && !t.unstable_shouldYield()));

          ) {
            var a = k.callback;
            if ("function" == typeof a) {
              (k.callback = null), (C = k.priorityLevel);
              var c = a(k.expirationTime <= i);
              (i = t.unstable_now()),
                "function" == typeof c ? (k.callback = c) : k === S(T) && x(T),
                A(i);
            } else x(T);
            k = S(T);
          }
          if (null !== k) var s = !0;
          else {
            var l = S(N);
            null !== l && r(L, l.startTime - i), (s = !1);
          }
          return s;
        } finally {
          (k = null), (C = o), (E = !1);
        }
      }
      var j = o;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          Y || E || ((Y = !0), i(P));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return C;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(T);
        }),
        (t.unstable_next = function (e) {
          switch (C) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = C;
          }
          var i = C;
          C = t;
          try {
            return e();
          } finally {
            C = i;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = j),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var i = C;
          C = e;
          try {
            return t();
          } finally {
            C = i;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, a) {
          var c = t.unstable_now();
          switch (
            ("object" == typeof a && null !== a
              ? (a = "number" == typeof (a = a.delay) && 0 < a ? c + a : c)
              : (a = c),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: F++,
              callback: o,
              priorityLevel: e,
              startTime: a,
              expirationTime: (s = a + s),
              sortIndex: -1,
            }),
            a > c
              ? ((e.sortIndex = a),
                M(N, e),
                null === S(T) &&
                  e === S(N) &&
                  (O ? n() : (O = !0), r(L, a - c)))
              : ((e.sortIndex = s), M(T, e), Y || E || ((Y = !0), i(P))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = C;
          return function () {
            var i = C;
            C = t;
            try {
              return e.apply(this, arguments);
            } finally {
              C = i;
            }
          };
        });
    },
    3840: (e, t, i) => {
      "use strict";
      e.exports = i(53);
    },
    1169: (e) => {
      e.exports = function (e) {
        return e
          .replace(/[A-Z]/g, function (e) {
            return "-" + e.toLowerCase();
          })
          .toLowerCase();
      };
    },
    2177: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      var r = "Invariant failed";
      const n = function (e, t) {
        if (!e) throw new Error(r);
      };
    },
    3504: (e, t, i) => {
      var r = i(8348),
        n = r.inNations,
        o = r.zhNations;
      e.exports = [
        {
          id: 1,
          productName: "mi-smart-electric-toothbrush-t500",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 2,
          productName: "mi-vacuum-cleaner-g10",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 3,
          productName: "mi-high-capacity-lnk-pen",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 4,
          productName: "mi-computer-monitor-light-bar",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 5,
          productName: "mi-portable-bluetooth-speaker-mini",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 6,
          productName: "mi-aiot-router-ax1800",
          isBuild: !0,
          preloadChunk: !0,
        },
        { id: 7, productName: "mi-smart-clock", isBuild: !0, preloadChunk: !0 },
        { id: 8, productName: "redmi-note-9t", isBuild: !0 },
        { id: 9, productName: "mi-watch", isBuild: !0, preloadChunk: !0 },
        { id: 10, productName: "redmi-9t", isBuild: !0, preloadChunk: !0 },
        {
          id: 11,
          productName: "mi-360-home-security-camera-2k-pro",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 12,
          productName: "mi-11",
          isBuild: !0,
          preloadChunk: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 13,
          productName: "mi-usb-type-c-to-type-c-cable-150cm",
          isBuild: !0,
        },
        {
          id: 14,
          productName: "mi-65w-fast-charger-with-gan-tech",
          isBuild: !0,
        },
        { id: 15, productName: "10000mah-redmi-power-bank", isBuild: !0 },
        {
          id: 16,
          productName: "mi-tv-q1-75",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 17, productName: "mi-robot-vacuum-mop-essential", isBuild: !0 },
        { id: 18, productName: "redmi-9c-soft-case-clear", isBuild: !0 },
        { id: 19, productName: "redmi-9c-hard-case", isBuild: !0 },
        { id: 20, productName: "redmi-9a-soft-case-clear", isBuild: !0 },
        { id: 21, productName: "mi-360-home-security-camera-2k", isBuild: !0 },
        {
          id: 22,
          productName: "10000mah-mi-power-bank-3-ultra-compact",
          isBuild: !0,
        },
        { id: 23, productName: "mi-watch-lite-charging-dock", isBuild: !0 },
        { id: 24, productName: "mi-watch-lite-strap", isBuild: !0 },
        { id: 25, productName: "mi-watch-charging-dock", isBuild: !0 },
        { id: 26, productName: "mi-watch-strap", isBuild: !0 },
        {
          id: 27,
          productName:
            "mi-electric-scooter-pro-2-mercedes-amg-petronas-f1-team-edition",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 28, productName: "mi-smart-speaker", isBuild: !0 },
        { id: 29, productName: "mi-router-4a-gigabit-edition", isBuild: !0 },
        { id: 30, productName: "mi-box-s", isBuild: !0 },
        { id: 31, productName: "mi-vacuum-cleaner-light", isBuild: !0 },
        { id: 32, productName: "mi-aiot-router-ax3600", isBuild: !0 },
        { id: 33, productName: "mi-air-purifier-pro-h", isBuild: !0 },
        { id: 34, productName: "redmi-note-10-pro", isBuild: !0 },
        {
          id: 35,
          productName: "redmi-note-10",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 36,
          productName: "poco-f3",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 37, productName: "mi-smart-rice-cooker-mini", isBuild: !0 },
        { id: 38, productName: "mi-cordless-screwdriver", isBuild: !0 },
        { id: 39, productName: "mi-precision-screwdriver-kit", isBuild: !0 },
        { id: 40, productName: "mi-16-in-1-ratchet-screwdriver", isBuild: !0 },
        { id: 41, productName: "mi-11-lite", isBuild: !0 },
        { id: 42, productName: "mi-smart-standing-fan-1c", isBuild: !0 },
        { id: 43, productName: "projector-screen-100", isBuild: !0 },
        { id: 44, productName: "mi-motion-sensor", isBuild: !0 },
        { id: 45, productName: "mi-11-lite-5g", isBuild: !0 },
        { id: 46, productName: "mi-smart-band-4c", isBuild: !0 },
        { id: 47, productName: "mi-smart-projector-2-pro", isBuild: !0 },
        {
          id: 48,
          productName: "poco-x3-pro",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 49, productName: "mi-vacuum-cleaner-g9", isBuild: !0 },
        { id: 50, productName: "mi-11i", isBuild: !0 },
        { id: 51, productName: "mi-type-c-to-lightning-cable-1m", isBuild: !0 },
        { id: 52, productName: "mi-vacuum-cleaner-mini", isBuild: !0 },
        { id: 53, productName: "mi-router-4c", isBuild: !0 },
        { id: 54, productName: "mi-air-purifier-pro-h-filter", isBuild: !0 },
        { id: 55, productName: "mi-smart-band-6", isBuild: !0 },
        {
          id: 56,
          productName: "mi-true-wireless-earphone-2-basic",
          isBuild: !0,
        },
        { id: 57, productName: "mi-true-wireless-earbuds-2s", isBuild: !0 },
        { id: 58, productName: "mi-air-purifier-hepa-filter", isBuild: !0 },
        { id: 59, productName: "mi-air-purifier-pro", isBuild: !0 },
        {
          id: 60,
          productName: "mi-smart-antibacterial-humidifier",
          isBuild: !0,
        },
        { id: 61, productName: "mi-robot-vacuum-mop", isBuild: !0 },
        {
          id: 62,
          productName: "mi-electric-shaver-s500-replacement-head",
          isBuild: !0,
        },
        { id: 63, productName: "redmi-note-10-5g", isBuild: !0 },
        { id: 64, productName: "redmi-note-10t", isBuild: !0 },
        { id: 65, productName: "mi-tv-p1-55", isBuild: !0 },
        { id: 66, productName: "mi-tv-p1-50", isBuild: !0 },
        { id: 67, productName: "mi-tv-p1-43", isBuild: !0 },
        { id: 68, productName: "mi-tv-p1-32", isBuild: !0 },
        { id: 69, productName: "mi-portable-bluetooth-speaker", isBuild: !0 },
        { id: 70, productName: "mi-air-purifier-3c", isBuild: !0 },
        { id: 71, productName: "mi-robot-vacuum-mop-p", isBuild: !0 },
        { id: 72, productName: "redmi-note-10s", isBuild: !0 },
        { id: 73, productName: "mi-360-camera-1080p", isBuild: !0 },
        { id: 74, productName: "mi-11-ultra", isBuild: !0 },
        { id: 75, productName: "mi-smart-standing-fan-2", isBuild: !0 },
        {
          id: 76,
          productName: "mi-robot-vacuum-mop-essential-side-brush",
          isBuild: !0,
        },
        {
          id: 77,
          productName: "mi-robot-vacuum-mop-essential-main-brush",
          isBuild: !0,
        },
        {
          id: 78,
          productName: "mi-robot-vacuum-mop-essential-mainbrush-cover",
          isBuild: !0,
        },
        {
          id: 79,
          productName: "mi-robot-vacuum-mop-essential-mopping-cloth",
          isBuild: !0,
        },
        {
          id: 80,
          productName: "mi-robot-vacuum-mop-essential-disposal-mopping-cloth",
          isBuild: !0,
        },
        {
          id: 81,
          productName: "mi-robot-vacuum-mop-essential-filter",
          isBuild: !0,
        },
        { id: 82, productName: "mi-ionic-hair-dryer-h300", isBuild: !0 },
        { id: 83, productName: "mi-smart-standing-fan-2-us", isBuild: !0 },
        { id: 84, productName: "xiaomi-commuter-backpack", isBuild: !0 },
        {
          id: 85,
          productName: "mi-g10g9-wireless-vacuum-cleaner-battery-kit",
          isBuild: !0,
        },
        {
          id: 86,
          productName: "mi-g10g9-wireless-vacuum-cleaner-hepa-filter",
          isBuild: !0,
        },
        {
          id: 87,
          productName: "mi-g10g9-wireless-vacuum-cleaner-duster-kit",
          isBuild: !0,
        },
        {
          id: 88,
          productName: "mi-led-smart-bulb-essential-white-and-color",
          isBuild: !0,
        },
        {
          id: 89,
          productName: "mi-bluetooth-headset-basic-with-dock",
          isBuild: !0,
        },
        { id: 90, productName: "monitor55", isBuild: !0, local: o },
        { id: 91, productName: "monitor50", isBuild: !0, local: o },
        {
          id: 92,
          productName: "mi-motion-activated-night-light-2",
          isBuild: !0,
        },
        { id: 93, productName: "mi-desktop-monitor-27", isBuild: !0 },
        { id: 94, productName: "mi-20w-charger-type-c", isBuild: !0 },
        { id: 95, productName: "mi-smart-band-6-strap-3-pack", isBuild: !0 },
        {
          id: 96,
          productName: "mi-smart-band-5-6-charging-cable",
          isBuild: !0,
        },
        {
          id: 97,
          productName: "mi-temperature-and-humidity-monitor",
          isBuild: !0,
        },
        { id: 98, productName: "mi-window-and-door-sensor", isBuild: !0 },
        {
          id: 99,
          productName: "poco-m3-pro-5g",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 100,
          productName: "poco-m3-pro",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 101, productName: "mi-wifi-range-extender-ac1200", isBuild: !0 },
        { id: 102, productName: "mi-portable-photo-printer", isBuild: !0 },
        { id: 103, productName: "redmi-note-8-2021", isBuild: !0 },
        { id: 104, productName: "mi-led-desk-lamp-1s", isBuild: !0 },
        { id: 105, productName: "mi-20w-charger-type-c-us", isBuild: !0 },
        { id: 106, productName: "mi-smart-air-fryer-3.5l", isBuild: !0 },
        {
          id: 107,
          productName: "mi-portable-photo-printer-paper",
          isBuild: !0,
        },
        { id: 108, productName: "mi-80w-wireless-charging-stand", isBuild: !0 },
        { id: 109, productName: "mi-smart-led-desk-lamp-pro", isBuild: !0 },
        { id: 110, productName: "mi-smart-standing-fan-pro", isBuild: !0 },
        { id: 111, productName: "mi-2k-gaming-monitor-27", isBuild: !0 },
        { id: 112, productName: "mi-watch-revolve-active", isBuild: !0 },
        {
          id: 113,
          productName: "mi-true-wireless-earphones-2-pro",
          isBuild: !0,
        },
        {
          id: 114,
          productName: "mi-smart-led-ceiling-light-350mm",
          isBuild: !0,
        },
        {
          id: 115,
          productName: "mi-smart-led-ceiling-light-450mm",
          isBuild: !0,
        },
        { id: 116, productName: "mi-router-4a", isBuild: !0 },
        {
          id: 117,
          productName: "mi-33w-wall-charger-type-a-type-c-eu",
          isBuild: !0,
          buildPoco: !0,
        },
        {
          id: 118,
          productName: "mi-33w-wall-charger-type-a-type-c-us",
          isBuild: !0,
        },
        { id: 119, productName: "mi-notebook-pro", isBuild: !0 },
        { id: 120, productName: "mi-notebook-ultra", isBuild: !0 },
        { id: 121, productName: "mi-smart-kettle-pro", isBuild: !0 },
        { id: 122, productName: "mi-usb-type-c-cable-1m", isBuild: !0 },
        { id: 123, productName: "mi-lcd-writing-tablet", isBuild: !0 },
        { id: 124, productName: "mi-ionic-hair-dryer-2", isBuild: !0 },
        { id: 125, productName: "xiaomi-sports-fanny-pack", isBuild: !0 },
        { id: 126, productName: "mi-router-ax9000", isBuild: !0 },
        {
          id: 127,
          productName: "mi-temperature-and-humidity-monitor-2",
          isBuild: !0,
        },
        { id: 128, productName: "mi-smart-standing-fan-2-lite", isBuild: !0 },
        { id: 129, productName: "mi-wifi-range-extender-pro", isBuild: !0 },
        { id: 130, productName: "mi-body-composition-scale-2", isBuild: !0 },
        {
          id: 131,
          productName: "xiaomi-flipbuds-pro",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 132, productName: "redmi-note-10t-5g", isBuild: !0 },
        {
          id: 133,
          productName: "redmi-note-10-je",
          isBuild: !0,
          local: ["jp"],
        },
        { id: 134, productName: "redmi-buds-3-pro", isBuild: !0 },
        { id: 135, productName: "redmibook-15", isBuild: !0 },
        { id: 136, productName: "mi-electric-kettle", isBuild: !0 },
        { id: 137, productName: "poco-x3-gt", isBuild: !0, buildPoco: !0 },
        { id: 138, productName: "mi-5-blade-electric-shaver", isBuild: !0 },
        {
          id: 139,
          productName: "mi-wireless-outdoor-security-camera-1080p",
          isBuild: !0,
        },
        { id: 140, productName: "mi-tv-stick", isBuild: !0 },
        { id: 141, productName: "mi-electric-scooter-3", isBuild: !0 },
        { id: 142, productName: "mi-electric-shaver-s500", isBuild: !0 },
        { id: 143, productName: "mi-electric-toothbrush-head", isBuild: !0 },
        { id: 144, productName: "mi-casual-daypack", isBuild: !0 },
        { id: 145, productName: "mi-smart-scale-2", isBuild: !0 },
        { id: 146, productName: "mi-bedside-lamp-2", isBuild: !0 },
        {
          id: 147,
          productName: "redmi-book-e-learning-edition",
          isBuild: !0,
          local: n,
        },
        { id: 148, productName: "redmi-book-pro", isBuild: !0, local: n },
        { id: 149, productName: "mi-23-8-desktop-monitor-1c", isBuild: !0 },
        { id: 150, productName: "mi-50w-power-bank-20000", isBuild: !0 },
        { id: 151, productName: "mi-smart-compact-projector", isBuild: !0 },
        {
          id: 152,
          productName: "mi-vacuum-cleaner-light-hepa-filter-2-pack",
          isBuild: !0,
        },
        {
          id: 153,
          productName: "mi-true-wireless-earbuds-basic-2",
          isBuild: !0,
        },
        { id: 154, productName: "mi-door-and-window-sensor-2", isBuild: !0 },
        { id: 155, productName: "mi-true-wireless-earphones-2s", isBuild: !0 },
        { id: 156, productName: "mi-air-purifier-3h", isBuild: !0 },
        { id: 157, productName: "mi-smart-band-5", isBuild: !0 },
        { id: 158, productName: "redmi-10", isBuild: !0 },
        { id: 159, productName: "mi-20w-wireless-charging-stand", isBuild: !0 },
        {
          id: 160,
          productName: "mi-5-blade-electric-shaver-replacement-head",
          isBuild: !0,
        },
        { id: 161, productName: "mi-20w-wireless-car-charger", isBuild: !0 },
        {
          id: 162,
          productName: "mi-tv-5x-series",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 163,
          productName: "xiaomi-portable-electric-air-compressor-1s",
          isBuild: !0,
        },
        { id: 164, productName: "mi-smart-led-bulb-warm-white", isBuild: !0 },
        { id: 165, productName: "redmi-10-prime", isBuild: !0 },
        {
          id: 166,
          productName: "xiaomi-11-lite-5g-ne",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 167, productName: "xiaomi-mesh-system-ax3000", isBuild: !0 },
        {
          id: 168,
          productName: "xiaomi-11t-pro",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
          preloadChunk: !0,
        },
        { id: 169, productName: "mi-smart-projector-2", isBuild: !0 },
        { id: 170, productName: "xiaomi-smart-pen", isBuild: !0 },
        {
          id: 171,
          productName: "xiaomi-11t",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
          preloadChunk: !0,
        },
        {
          id: 172,
          productName: "xiaomi-pad-5",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 173, productName: "mi-robot-vacuum-mop-2", isBuild: !0 },
        { id: 174, productName: "mi-smart-band-6-nfc", isBuild: !0 },
        { id: 175, productName: "xiaomi-luggage-classic-20", isBuild: !0 },
        {
          id: 176,
          productName: "xiaomi-11t-pro-120w-xiaomi-hypercharge",
          isBuild: !0,
        },
        { id: 177, productName: "redmi-buds-3", isBuild: !0 },
        { id: 178, productName: "redmi-smart-tv-32", isBuild: !0 },
        { id: 179, productName: "redmi-smart-tv-43", isBuild: !0 },
        {
          id: 180,
          productName: "mi-motion-activated-night-light-2-bluetooth",
          isBuild: !0,
        },
        { id: 181, productName: "xiaomi-tv-q1e-55", isBuild: !0 },
        { id: 182, productName: "mi-robot-vacuum-mop-2-pro", isBuild: !0 },
        {
          id: 183,
          productName: "xiaomi-smart-air-purifier-4-pro",
          isBuild: !0,
        },
        { id: 184, productName: "mi-braided-usb-type-c-cable", isBuild: !0 },
        { id: 185, productName: "xiaomi-11-lite-ne-5g", isBuild: !0 },
        { id: 186, productName: "xiaomi-router-ax3200", isBuild: !0 },
        { id: 187, productName: "mi-37w-dual-port-car-charger", isBuild: !0 },
        { id: 188, productName: "xiaomi-pad-keyboard", isBuild: !0 },
        { id: 189, productName: "mi-vacuum-cleaner-mini-eu", isBuild: !0 },
        {
          id: 190,
          productName: "20000mah-redmi-fast-charge-power-bank",
          isBuild: !0,
        },
        {
          id: 191,
          productName: "10000mah-mi-18w-fast-charge-power-bank-3",
          isBuild: !0,
        },
        {
          id: 192,
          productName: "10000mah-mi-wireless-power-bank-essential",
          isBuild: !0,
        },
        { id: 193, productName: "mi-camera-2k-magnetic-mount", isBuild: !0 },
        {
          id: 194,
          productName: "xiaomi-electric-precision-screwdriver",
          isBuild: !0,
        },
        {
          id: 195,
          productName: "mi-portable-electric-air-compressor",
          isBuild: !0,
        },
        {
          id: 196,
          productName: "xiaomi-12v-max-brushless-cordless-drill",
          isBuild: !0,
        },
        {
          id: 197,
          productName: "xiaomi-smart-air-purifier-4-pro-filter",
          isBuild: !0,
        },
        {
          id: 198,
          productName: "redmi-smart-band-pro",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 199, productName: "mi-smart-speaker-ru", isBuild: !0 },
        {
          id: 200,
          productName: "redmi-watch-2-lite",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 201, productName: "xiaomi-pad-5-cover", isBuild: !0 },
        {
          id: 202,
          productName: "mi-true-wireless-earbuds-basic-2s",
          isBuild: !0,
        },
        { id: 203, productName: "xiaomi-smart-air-purifier-4", isBuild: !0 },
        {
          id: 204,
          productName: "poco-m4-pro-5g",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        {
          id: 205,
          productName: "xiaomi-smart-circulating-air-purifier",
          isBuild: !0,
        },
        { id: 206, productName: "xiaomi-soundbar-31ch", isBuild: !0 },
        {
          id: 207,
          productName: "xiaomi-smart-air-purifier-4-filter",
          isBuild: !0,
        },
        { id: 208, productName: "xiaomi-tv-p1e-43", isBuild: !0 },
        { id: 209, productName: "xiaomi-65w-gan-charger", isBuild: !0 },
        {
          id: 210,
          productName: "xiaomi-smart-air-purifier-4-lite",
          isBuild: !0,
        },
        { id: 211, productName: "xiaomi-tv-p1e-55", isBuild: !0 },
        { id: 212, productName: "redmi-watch-2-lite-strap", isBuild: !0 },
        { id: 213, productName: "redmi-note-11t-5g", isBuild: !0 },
        {
          id: 214,
          productName: "xiaomi-smart-air-purifier-4-lite-filter",
          isBuild: !0,
        },
        {
          id: 215,
          productName: "charging-cable-for-redmi-watch-2-series",
          isBuild: !0,
        },
        {
          id: 216,
          productName: "xiaomi-smart-circulating-air-purifier-filter",
          isBuild: !0,
        },
        { id: 217, productName: "xiaomi-tv-stick-4k", isBuild: !0 },
        {
          id: 218,
          productName: "xiaomi-beard-trimmer-2",
          isBuild: !0,
          local: n,
        },
        { id: 219, productName: "redmi-buds-3-lite", isBuild: !0 },
        {
          id: 220,
          productName: "mi-robot-vacuum-mop-2-ultra-set",
          isBuild: !0,
        },
        { id: 221, productName: "mi-ai-purifier-3", isBuild: !0 },
        { id: 222, productName: "mi-bluetooth-voice-remote", isBuild: !0 },
        { id: 223, productName: "mitv-webcam", isBuild: !0 },
        { id: 224, productName: "redmi-earbuds-3-pro", isBuild: !0 },
        {
          id: 225,
          productName: "mi-powerbank-boost-pro-30000mah",
          isBuild: !0,
        },
        { id: 226, productName: "xiaomi-running-shoes", isBuild: !0 },
        { id: 227, productName: "xiaomi-robot-vacuum-mop-2c", isBuild: !0 },
        { id: 228, productName: "xiaomi-vacuum-cleaner-g11", isBuild: !0 },
        {
          id: 229,
          productName: "xiaomi-10w-wireless-power-bank-10000",
          isBuild: !0,
        },
        {
          id: 230,
          productName: "xiaomi-11i-series-5g",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 231,
          productName: "xiaomi-11i-5g",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 232,
          productName: "xiaomi-11i-hypercharge-5g",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 233,
          productName: "mi-robot-vacuum-mop-2-ultra-auto-empty-station",
          isBuild: !0,
        },
        { id: 234, productName: "mi-air-purifier-3", isBuild: !0 },
        { id: 235, productName: "mi-robot-vacuum-mop-2-ultra", isBuild: !0 },
        { id: 236, productName: "mi-robot-vacuum-mop-2-lite", isBuild: !0 },
        {
          id: 237,
          productName: "xiaomi-11t-pro-5g",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 238, productName: "redmi-note-11s", isBuild: !0 },
        { id: 239, productName: "redmi-note-11", isBuild: !0 },
        {
          id: 240,
          productName: "redmi-note-11-pro-5g",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 241,
          productName: "redmi-note-11-pro",
          isBuild: !0,
          preloadChunk: !0,
        },
        {
          id: 242,
          productName: "xiaomi-smart-speaker-ir-control",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 243,
          productName: "xiaomi-water-ionic-hair-dryer-h500",
          isBuild: !0,
        },
        { id: 244, productName: "xiaomi-massage-gun", isBuild: !0 },
        { id: 245, productName: "redmi-10-2022", isBuild: !0 },
        {
          id: 246,
          productName: "xiaomi-electric-toothbrush-t700",
          isBuild: !0,
        },
        {
          id: 247,
          productName: "xiaomi-electric-toothbrush-t700-replacement-heads",
          isBuild: !0,
        },
        { id: 248, productName: "xiaomi-router-ac1200", isBuild: !0 },
        { id: 249, productName: "mi-dual-mode-wireless-mouse", isBuild: !0 },
        { id: 250, productName: "xiaomi-electric-shaver-s700", isBuild: !0 },
        {
          id: 251,
          productName: "xiaomi-electric-shaver-s700-replacement-head",
          isBuild: !0,
        },
        { id: 252, productName: "mi-robot-vacuum-mop-2s", isBuild: !0 },
        {
          id: 253,
          productName: "xiaomi-temperature-and-humidity-monitor-clock",
          isBuild: !0,
        },
        {
          id: 254,
          productName: "poco-m4-pro",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 255,
          productName: "poco-x4-pro-5g",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 257, productName: "air-compressor-1s", isBuild: !0 },
        {
          id: 258,
          productName: "mi-robot-vacuum-mop-2pro-and-2lite-accessories",
          isBuild: !0,
        },
        {
          id: 259,
          productName: "mi-hypersonic-powerbank-50w-20000mah",
          isBuild: !0,
        },
        {
          id: 260,
          productName: "redmi-note-11-pro-plus-5g",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
        },
        { id: 261, productName: "xiaomi-buds-3t-pro", isBuild: !0 },
        { id: 262, productName: "xiaomi-watch-s1", isBuild: !0 },
        { id: 263, productName: "xiaomi-watch-s1-active-strap", isBuild: !0 },
        {
          id: 264,
          productName: "xiaomi-watch-s1-active-charging-cable",
          isBuild: !0,
        },
        { id: 265, productName: "xiaomi-buds-3", isBuild: !0 },
        {
          id: 267,
          productName: "xiaomi-12",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        {
          id: 268,
          productName: "xiaomi-12-pro",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 269, productName: "xiaomi-12x", isBuild: !0 },
        { id: 270, productName: "xiaomi-watch-s1-active", isBuild: !0 },
        { id: 271, productName: "redmi-10c", isBuild: !0 },
        {
          id: 272,
          productName: "xiaomi-automatic-smart-door-lock",
          isBuild: !0,
        },
        {
          id: 273,
          productName: "mi-67w-sonic-charge-3",
          isBuild: !0,
          local: n,
        },
        { id: 274, productName: "mi-selfie-stick-tripod", isBuild: !0 },
        {
          id: 275,
          productName: "xiaomi-smart-standing-fan-2-pro",
          isBuild: !0,
        },
        {
          id: 276,
          productName: "xiaomi-sonic-charge-cable",
          isBuild: !0,
          local: n,
        },
        {
          id: 277,
          productName: "xiaomi-smart-door-lock-nfc-card",
          isBuild: !0,
        },
        {
          id: 278,
          productName: "redmi-note-11s-5g",
          ScrollTrigger: { pc: !0 },
          isBuild: !0,
        },
        { id: 279, productName: "xiaomi-watch-s1-strap-leather", isBuild: !0 },
        { id: 280, productName: "xiaomi-watch-s1-charging-dock", isBuild: !0 },
        { id: 281, productName: "redmi-10-5g", isBuild: !0 },
        { id: 282, productName: "redmi-10-prime-2022", isBuild: !0, local: n },
        {
          id: 283,
          productName: "mi-business-casual-backpack",
          isBuild: !0,
          local: n,
        },
        {
          id: 284,
          productName: "redmi-10000mah-powerbank",
          isBuild: !0,
          local: n,
        },
        {
          id: 285,
          productName: "10000mah-mi-pocket-powerbank",
          isBuild: !0,
          local: n,
        },
        {
          id: 286,
          productName: "redmi-20000mah-powerbank",
          isBuild: !0,
          local: n,
        },
        {
          id: 287,
          productName: "mi-33w-sonic-charger-adapter",
          isBuild: !0,
          local: n,
        },
        {
          id: 288,
          productName: "mi-standard-carger-qualcomm",
          isBuild: !0,
          local: n,
        },
        {
          id: 289,
          productName: "xiaomi-fastcharger-typec-combo",
          isBuild: !0,
          local: n,
        },
        { id: 290, productName: "xiaomi-sonic-charge2", isBuild: !0, local: n },
        { id: 291, productName: "xiaomi-tv-p1e-65", isBuild: !0 },
        {
          id: 292,
          productName: "xiaomi-vacuum-cleaner-g11-filter",
          isBuild: !0,
        },
        {
          id: 293,
          productName: "xiaomi-vacuum-cleaner-g11-battery-pack",
          isBuild: !0,
        },
        {
          id: 294,
          productName: "xiaomi-smart-power-strip-20w-fast-charge",
          isBuild: !0,
        },
        { id: 295, productName: "redmi-10-power", isBuild: !0, local: n },
        { id: 296, productName: "redmi-10a", isBuild: !0 },
        { id: 297, productName: "xiaomi-smart-dehumidifier", isBuild: !0 },
        { id: 298, productName: "xiaomi-smart-laser-measure", isBuild: !0 },
        {
          id: 299,
          productName: "xiaomi-watch-s1-active-braided-nylon-strap",
          isBuild: !0,
        },
        {
          id: 300,
          productName: "xiaomi-smart-tv-5a-series",
          ScrollTrigger: { pc: !0, mobile: !0 },
          isBuild: !0,
        },
        { id: 301, productName: "poco-watch", isBuild: !0, buildPoco: !0 },
        {
          id: 302,
          productName: "poco-f4-gt",
          ScrollTrigger: { pc: !0, mobile: !0 },
          buildPoco: !0,
          isBuild: !0,
        },
        {
          id: 303,
          productName: "poco-buds-pro-genshin-impact-edition",
          isBuild: !0,
          buildPoco: !0,
        },
        {
          id: 304,
          productName: "xiaomi-12-pro-5g",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
          local: n,
        },
        {
          id: 305,
          productName: "xiaomi-oled-vision-tv",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 305, productName: "xiaomi-smart-purifying-fan", isBuild: !0 },
        { id: 306, productName: "xiaomi-conference-tapcast", isBuild: !0 },
        { id: 307, productName: "xiaomi-smart-doorbell-3", isBuild: !0 },
        { id: 308, productName: "mi-4k-laser-projector-150", isBuild: !0 },
        { id: 309, productName: "xiaomi-hair-clipper", isBuild: !0 },
        { id: 310, productName: "xiaomi-smart-tower-fan", isBuild: !0 },
        {
          id: 311,
          productName: "xiaomi-ultra-light-vacuum-cleaner",
          isBuild: !0,
        },
        {
          id: 312,
          productName: "xiaomi-33w-charging-combo-type-a",
          isBuild: !0,
          buildPoco: !0,
        },
        { id: 313, productName: "xiaomi-electric-scooter-3-lite", isBuild: !0 },
        {
          id: 314,
          productName: "xiaomi-67w-charging-combo-type-a",
          isBuild: !0,
        },
        {
          id: 315,
          productName: "xiaomi-120w-charging-combo-type-a",
          isBuild: !0,
        },
        { id: 316, productName: "xiaomi-tv-f2-43-fire-tv", isBuild: !0 },
        { id: 317, productName: "xiaomi-tv-f2-50-fire-tv", isBuild: !0 },
        { id: 318, productName: "xiaomi-tv-f2-55-fire-tv", isBuild: !0 },
        { id: 319, productName: "xiaomi-smart-blender", isBuild: !0 },
        { id: 320, productName: "xiaomi-smart-band-7", isBuild: !0 },
        { id: 321, productName: "xiaomi-tv-p1e-32", isBuild: !0 },
        { id: 322, productName: "xiaomi-4k-monitor-27", isBuild: !0 },
        { id: 323, productName: "xiaomi-book-s-cover", isBuild: !0 },
        { id: 324, productName: "xiaomi-tv-a2-50", isBuild: !0 },
        { id: 325, productName: "xiaomi-tv-a2-43", isBuild: !0 },
        { id: 326, productName: "xiaomi-tv-a2-32", isBuild: !0 },
        { id: 327, productName: "xiaomi-tv-a2-55", isBuild: !0 },
        { id: 328, productName: "poco-c40", isBuild: !0, buildPoco: !0 },
        { id: 329, productName: "xiaomi-robot-vacuum-s10t", isBuild: !0 },
        { id: 330, productName: "xiaomi-tv-a2-58", isBuild: !0 },
        { id: 331, productName: "xiaomi-tv-a2-fhd-43", isBuild: !0 },
        { id: 332, productName: "xiaomi-book-s-keyboard", isBuild: !0 },
        { id: 333, productName: "xiaomi-book-s-12-4", isBuild: !0 },
        { id: 334, productName: "poco-f4", isBuild: !0, buildPoco: !0 },
        {
          id: 335,
          productName: "poco-x4-gt",
          isBuild: !0,
          buildPoco: !0,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 336,
          productName: "poco-watch-strap",
          isBuild: !0,
          buildPoco: !0,
        },
        { id: 337, productName: "xiaomi-electric-scooter-4-pro", isBuild: !0 },
        {
          id: 338,
          productName: "xiaomi-smart-band-7-charging-cable",
          isBuild: !0,
        },
        { id: 339, productName: "xiaomi-smart-band-7-strap", isBuild: !0 },
        { id: 340, productName: "xiaomi-12-lite", isBuild: !0 },
        { id: 341, productName: "xiaomi-smart-pet-fountain", isBuild: !0 },
        {
          id: 342,
          productName: "xiaomi-truclean-w10ultra-wet-dry-vacuum",
          isBuild: !0,
        },
        { id: 343, productName: "xiaomi-tv-max-86", isBuild: !0 },
        {
          id: 344,
          productName: "xiaomi-smart-pet-fountain-filter",
          isBuild: !0,
        },
        {
          id: 345,
          productName: "xiaomi-robot-vacuum-x10-plus",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        {
          id: 346,
          productName: "xiaomi-360-home-security-camera-1080p-2i",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 347, productName: "xiaomi-camera-viewer-app", isBuild: !0 },
        {
          id: 348,
          productName: "xiaomi-50w-wireless-charging-stand",
          isBuild: !0,
        },
        {
          id: 349,
          productName: "mi-vacuum-cleaner-mini-filter-2-pack",
          isBuild: !0,
        },
        { id: 350, productName: "xiaomi-smart-band-7-neon-strap", isBuild: !0 },
        {
          id: 351,
          productName: "xiaomi-smart-band-7-khaki-strap",
          isBuild: !0,
        },
        {
          id: 352,
          productName: "xiaomi-6a-type-a-to-type-c-cable",
          isBuild: !0,
        },
        { id: 353, productName: "xiaomi-monitor-a2-55", local: o, isBuild: !0 },
        { id: 354, productName: "xiaomi-monitor-a2-43", local: o, isBuild: !0 },
        {
          id: 355,
          productName: "xiaomi-smart-standing-fan-2",
          local: n,
          isBuild: !0,
        },
        {
          id: 356,
          productName: "xiaomi-ultra-light-vacuum-cleaner-filter",
          isBuild: !0,
        },
        { id: 357, productName: "xiaomi-electric-kettle-2", isBuild: !0 },
        {
          id: 358,
          productName: "xiaomi-smart-pet-food-feeder-desiccant-cartridge",
          isBuild: !0,
        },
        {
          id: 359,
          productName: "xiaomi-truclean-w10ultra-accessory-set",
          isBuild: !0,
        },
        {
          id: 360,
          productName: "xiaomi-smart-tv-5a-pro",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        {
          id: 361,
          productName: "redmi-k50i",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0 },
        },
        {
          id: 362,
          productName: "xiaomi-wireless-keyboard-and-mouse-combo",
          isBuild: !0,
        },
        { id: 363, productName: "redmi-note-11-se", isBuild: !0, local: n },
        {
          id: 364,
          productName: "xiaomi-robot-vaccum-mop-2-pro",
          isBuild: !0,
          local: n,
        },
        { id: 364, productName: "xiaomi-12s-ultra", isBuild: !0 },
        {
          id: 365,
          productName: "xiaomi-smart-air-purifier-4-compact",
          isBuild: !0,
        },
        { id: 366, productName: "redmi-10a-sport", isBuild: !0, local: n },
        {
          id: 367,
          productName: "xiaomi-truclean-w10-pro-wet-dry-vacuum",
          isBuild: !0,
        },
        { id: 368, productName: "xiaomi-smart-lightstrip", isBuild: !0 },
        { id: 369, productName: "xiaomi-wireless-mouse-lite", isBuild: !0 },
        {
          id: 370,
          productName: "xiaomi-smart-air-purifier-4-compact-filter",
          isBuild: !0,
        },
        { id: 372, productName: "mi-2-in-1-usb-cable", isBuild: !0, local: n },
        {
          id: 373,
          productName: "mi-electric-toothbrush-t100",
          isBuild: !0,
          local: n,
        },
        {
          id: 374,
          productName: "xiaomi-22w-fast-charger-combo",
          isBuild: !0,
          local: n,
        },
        { id: 375, productName: "xiaomi-smart-humidifier-2", isBuild: !0 },
        { id: 376, productName: "xiaomi-robot-vacuum-x10", isBuild: !0 },
        { id: 377, productName: "poco-m4-5g", isBuild: !0, buildPoco: !0 },
        {
          id: 378,
          productName: "xiaomi-smart-air-fryer",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 379, productName: "xiaomi-rechargeable-mini-fan", isBuild: !0 },
        { id: 380, productName: "redmi-buds-4", isBuild: !0 },
        {
          id: 381,
          productName: "xiaomi-smart-purifying-fan-filter",
          isBuild: !0,
          local: o,
        },
        {
          id: 382,
          productName: "xiaomi-65w-gan-charger-type-a-type-c-uk",
          isBuild: !0,
        },
        {
          id: 383,
          productName: "xiaomi-65w-gan-charger-type-a-type-c-eu",
          isBuild: !0,
        },
        {
          id: 384,
          productName: "xiaomi-curved-gaming-monitor-30",
          isBuild: !0,
        },
        { id: 385, productName: "redmi-buds-4-pro", isBuild: !0 },
        {
          id: 386,
          productName: "xiaomi-smart-tv-x-series",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
          local: n,
        },
        {
          id: 387,
          productName: "xiaomi-notebook-pro",
          ScrollTrigger: { pc: !0 },
          local: n,
          isBuild: !0,
        },
        {
          id: 388,
          productName: "xiaomi-notebook-pro-120",
          ScrollTrigger: { pc: !0 },
          local: n,
          isBuild: !0,
        },
        { id: 389, productName: "redmi-buds-essential", isBuild: !0 },
        { id: 390, productName: "poco-m5", isBuild: !0, buildPoco: !0 },
        {
          id: 391,
          productName: "poco-m5s",
          isBuild: !0,
          ScrollTrigger: { pc: !0 },
          buildPoco: !0,
        },
        { id: 392, productName: "redmi-11-prime-4g", isBuild: !0, local: n },
        { id: 393, productName: "redmi-11-prime-5g", local: n, isBuild: !0 },
        {
          id: 394,
          productName: "xiaomi-grooming-kit-pro",
          isBuild: !0,
          local: n,
          ScrollTrigger: { pc: !0 },
        },
        { id: 395, productName: "redmi-a1", isBuild: !0 },
        { id: 396, productName: "xiaomi-smart-lightstrip-pro", isBuild: !0 },
        { id: 397, productName: "xiaomi-humidifier-2-lite", isBuild: !0 },
        { id: 398, productName: "xiaomi-smart-camera-c300", isBuild: !0 },
        {
          id: 399,
          productName: "xiaomi-electric-scooter-storage-bag",
          isBuild: !0,
        },
        { id: 400, productName: "xiaomi-massage-gun-mini", isBuild: !0 },
        { id: 401, productName: "xiaomi-robot-vacuum-s10", isBuild: !0 },
        { id: 402, productName: "xiaomi-monitor-max-86", isBuild: !0 },
        {
          id: 403,
          productName: "xiaomi-electric-scooter-riding-gloves",
          isBuild: !0,
        },
        {
          id: 404,
          productName: "xiaomi-electric-scooter-cable-lock",
          isBuild: !0,
        },
        { id: 405, productName: "xiaomi-smart-tower-heater-lite", isBuild: !0 },
        {
          id: 406,
          productName: "xiaomi-smart-band-7-pro",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        {
          id: 407,
          productName: "xiaomi-12t-pro",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        {
          id: 408,
          productName: "xiaomi-12t",
          ScrollTrigger: { pc: !0 },
          isBuild: !0,
        },
        { id: 409, productName: "redmi-a1-plus", isBuild: !0 },
        { id: 410, productName: "xiaomi-robot-vacuum-s10-plus", isBuild: !0 },
        { id: 411, productName: "xiaomi-outdoor-camera-aw200", isBuild: !0 },
        { id: 412, productName: "xiaomi-smart-cooking-robot", isBuild: !0 },
        {
          id: 413,
          productName: "redmi-pad",
          isBuild: !1,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 414, productName: "xiaomi-tv-q2-50", isBuild: !0 },
        { id: 415, productName: "xiaomi-tv-q2-55", isBuild: !0 },
        { id: 416, productName: "xiaomi-tv-q2-65", isBuild: !0 },
        {
          id: 417,
          productName: "xiaomi-12t-series-master-ai-photography",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 418, productName: "xiaomi-monitor-q2-65", isBuild: !0 },
        { id: 419, productName: "screen-protector-for-redmi-pad", isBuild: !0 },
        { id: 420, productName: "redmi-writing-pad", isBuild: !0 },
        { id: 421, productName: "flip-case-for-redmi-pad", isBuild: !0 },
        {
          id: 422,
          productName:
            "xiaomi-smart-band-7-pro-leather-textured-silicone-strap",
          isBuild: !0,
        },
        {
          id: 423,
          productName: "xiaomi-33w-power-bank-10000mah-pocket-edition-pro",
          isBuild: !0,
        },
        {
          id: 424,
          productName: "xiaomi-magnetic-charging-cable-for-wearables",
          isBuild: !0,
        },
        { id: 425, productName: "xiaomi-commuter-helmet", isBuild: !0 },
        {
          id: 426,
          productName: "xiaomi-electric-scooter-direction-indicator",
          isBuild: !0,
        },
        {
          id: 427,
          productName: "xiaomi-electric-scooter-pneumatic-tire-85-inch",
          isBuild: !0,
        },
        {
          id: 428,
          productName: "xiaomi-truclean-w10-pro-wet-dry-vacuum-filter-2-pack",
          isBuild: !0,
        },
        {
          id: 429,
          productName: "xiaomi-truclean-w10-pro-wet-dry-vacuum-roller-brush",
          isBuild: !0,
        },
        {
          id: 430,
          productName: "xiaomi-cyberone",
          isBuild: !0,
          ScrollTrigger: { pc: !0, mobile: !0 },
        },
        { id: 431, productName: "xiaomi-22-5w-power-bank-10000", isBuild: !0 },
      ];
    },
    6312: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => r });
      const r = { "zh-CN": i(840), "en-US": i(7680) };
    },
    8348: (e) => {
      e.exports = {
        inNations: ["in", "np", "bd", "lk"],
        zhNations: ["hk", "tw"],
      };
    },
    5461: (e) => {
      e.exports = {
        defaultRoutes: [
          {
            path: ["/", "/overview", "/content"],
            pageName: "overview",
            page: "overview",
          },
          { path: ["/specs"], pageName: "specs", page: "specs" },
        ],
        reviewRouter: { path: ["/review"], pageName: "review", page: "review" },
      };
    },
    6261: (e, t, i) => {
      "use strict";
      i.d(t, { F: () => l });
      var r = i(7294),
        n = {
          nodeType: { JS: "script", CSS: "link" },
          rel: { sheet: "stylesheet" },
          type: { js: "text/javascript", css: "text/css" },
          pos: { head: "head", body: "body" },
          machine: { in: "in", ru: "ru", default: "sgp" },
          ignoreAttrs: ["nodeType", "domPos"],
        };
      var o = function (e) {
          e.forEach(function (e) {
            if (e) {
              var t = document.createElement(e.nodeType);
              Object.keys(e).forEach(function (i) {
                n.ignoreAttrs.includes(i) || (t[i] = e[i]);
              }),
                !(function (e) {
                  return e.type === n.type.css
                    ? !!document.querySelector('[href="' + e.href + '"]')
                    : e.type === n.type.js &&
                        !!document.querySelector('[src="' + e.src + '"]');
                })(t) && document[e.domPos || n.pos.body].appendChild(t);
            }
          });
        },
        a = i(4296),
        c = i(1848),
        s = i(7393);
      function l(e) {
        var t = e.local,
          i = e.platform,
          l = e.curVersion,
          u = e.chunkName,
          d = e.staticSite,
          m = void 0 === d ? "" : d,
          p = e.chunkPlatform,
          f = void 0 === p ? "" : p,
          h = (function (e, t, i) {
            var r,
              n,
              o,
              l = "pc" === t,
              u = (0, a.i)("product_v4"),
              d = u.isV4,
              m = u.isPoco
                ? null === (r = (0, s.j)(e)) || void 0 === r
                  ? void 0
                  : r.wwwSite
                : d
                ? null === (n = (0, c.scmConfig)("")) || void 0 === n
                  ? void 0
                  : n.wwwV4Site
                : null === (o = (0, c.scmConfig)(e)) || void 0 === o
                ? void 0
                : o.wwwSite,
              p =
                l || d ? (null == m ? void 0 : m.pc) : null == m ? void 0 : m.m,
              f = p.includes("/" + e) ? p : p + e;
            return p.includes("test")
              ? f
              : (i ||
                  (d
                    ? "//s05.appmifile.com"
                    : l
                    ? "//s01.appmifile.com"
                    : "//s03.appmifile.com")) +
                  "/" +
                  e;
          })(t, i, m),
          y = n.nodeType,
          g = n.type,
          b = n.rel,
          v = n.pos,
          w = n.machine,
          D = (0, a.i)("product_v4").isPoco;
        t && (window.XIAOMI = { GLOBAL_CONFIG: { appLocal: { name: t } } }),
          (0, r.useEffect)(
            function () {
              if (l) {
                var e =
                  ((r = l),
                  (n = w[t] || w.default),
                  (a =
                    h.replace("/" + t, "/" + n) +
                    (D ? "/spps_files/poco-static/" : "/spps_files/static/") +
                    r +
                    "/" +
                    (f || "chunk_" + i)),
                  [
                    {
                      nodeType: y.CSS,
                      rel: b.sheet,
                      type: g.css,
                      href: a + "/css/" + t + "/index.chunk.css",
                      domPos: v.head,
                    },
                    {
                      nodeType: y.CSS,
                      rel: b.sheet,
                      type: g.css,
                      href: a + "/css/" + u + ".chunk.css",
                      domPos: v.head,
                    },
                    {
                      nodeType: y.JS,
                      type: g.js,
                      src: a + "/js/" + u + ".chunk.js",
                      domPos: v.head,
                    },
                    {
                      nodeType: y.JS,
                      type: g.js,
                      defer: !0,
                      src: a + "/js/react.chunk.js",
                    },
                    {
                      nodeType: y.JS,
                      type: g.js,
                      defer: !0,
                      src: a + "/js/vendor.chunk.js",
                    },
                    {
                      nodeType: y.JS,
                      type: g.js,
                      defer: !0,
                      src: a + "/js/" + t + "/runtime.js",
                    },
                    {
                      nodeType: y.JS,
                      type: g.js,
                      defer: !0,
                      src: a + "/js/" + t + "/index.chunk.js",
                    },
                  ]);
                o(e);
              }
              var r, n, a;
            },
            [l]
          );
      }
    },
    4428: (e, t, i) => {
      "use strict";
      i.d(t, { T: () => p });
      var r = i(7294),
        n = i(6808),
        o = i(6261),
        a = i(4296),
        c = i(8386),
        s = i(843),
        l = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        u = "BuyProductV4",
        d = "BuyProductChannel",
        m = "BUY_PRODUCT_VERSION4";
      function p(e, t) {
        var i = n.get(m) || "",
          p = (0, r.useContext)(t ? c.z : s.g),
          f = l((0, r.useState)(i), 2),
          h = f[0],
          y = f[1],
          g = p.data,
          b = p.ajaxStatus,
          v = (0, a.i)("product_v4").isPoco;
        (0, o.F)({
          local: e,
          curVersion: h,
          platform: "pc",
          chunkPlatform: "chunk_pc_v4",
          chunkName: t ? u : d,
        }),
          (0, r.useEffect)(function () {
            p.getService();
          }, []),
          (0, r.useEffect)(
            function () {
              "success" === b &&
                (!i && y(g),
                n.set(m, g, {
                  expires: 90,
                  domain: v ? "po.co" : ".mi.com",
                  path: "/" + e,
                }));
            },
            [b]
          );
      }
    },
    2569: (e, t, i) => {
      "use strict";
      i.d(t, { f: () => a });
      var r = i(7294),
        n = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        o = function (e, t) {
          for (var i = 0, r = t.length, n = e.length; i < r; i++, n++)
            e[n] = t[i];
          return e;
        };
      function a(e, t, i) {
        void 0 === i && (i = []);
        var a = (0, r.useRef)({ fn: e, timer: null }).current;
        return (
          (0, r.useEffect)(
            function () {
              a.fn = e;
            },
            [e]
          ),
          (0, r.useCallback)(function () {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            a.timer ||
              ((a.timer = setTimeout(function () {
                a.timer = null;
              }, t)),
              a.fn.apply(a, o([], n(e))));
          }, i)
        );
      }
    },
    4296: (e, t, i) => {
      "use strict";
      i.d(t, { i: () => g, W: () => b });
      var r = i(9313),
        n = i(4583),
        o = i(4809),
        a = i(2159),
        c = i(7223),
        s = i(2943),
        l = i(6873),
        u = i(4676),
        d = i(1455),
        m = i(1037),
        p = i(5002),
        f = i(7393),
        h = i(8357),
        y = i(4178),
        g = function (e) {
          var t = "poco" === e,
            i = "fds" === e,
            g = "product" === e,
            b = "product_v4" === e,
            v = t ? s.h : b ? a.h : r.h,
            w = t ? l.$ : b ? c.$ : n.$,
            D = t ? u.Q : o.Q,
            M = t ? p.dG : d.dG,
            S = t ? y.wr : h.wr;
          return {
            isV4: b,
            isFds: i,
            isPoco: t,
            isProduct: g,
            Header: v,
            Footer: w,
            scmConfig: t ? f.j : m.j,
            ErrorContent: D,
            scmCustomerSiteList: M,
            GlobalVariableContext: S,
          };
        },
        b = function (e) {
          if (
            !/^(((ht|f)tps?):\/\/)[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\\(\\)]*[\w@?^=%&/~+#-\\(\\)])?$/.test(
              e
            )
          )
            return !1;
          var t = new URL(e).hostname;
          return !/^(([\w-]+\.)+)?mi\.com?(\.id)?$/.test(t);
        };
    },
    8040: (e, t, i) => {
      "use strict";
      function r(e) {
        var t = e.split("/");
        return { urls: t, len: t.length };
      }
      function n(e) {
        var t = r(e);
        return t.urls[t.len - 1] || "overview";
      }
      i.d(t, { j0: () => n });
    },
    3588: (e, t, i) => {
      "use strict";
      i.d(t, { fZ: () => r, oi: () => n, Gi: () => a });
      i(3504);
      var r = function (e) {
          return /^(http|https):/.test(e) ? e : "https:" + e.trim();
        },
        n = function (e) {
          return e
            .split("-")
            .map(function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            })
            .join(" ");
        },
        o = [".jpg", ".jpeg", ".png", ".bmp", ".gif"],
        a = function (e, t) {
          return t >= 100
            ? e
            : o.includes(e.substring(e.lastIndexOf("."))) &&
              !e.includes("i01.appmifile.com")
            ? e + "?f=webp" + (t ? "&q=" + t : "")
            : e;
        };
    },
    5445: (e, t, i) => {
      "use strict";
      i.d(t, { $5: () => N });
      var r = i(7294),
        n = i(4184),
        o = i.n(n),
        a = i(1893),
        c = i(6808),
        s = i(9655),
        l = i(1715),
        u = i(4336),
        d = i(7703),
        m = i(6607),
        p = i(1848),
        f = i(3143),
        h = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        y = (0, m.o)(v),
        g = (0, r.createContext)(y);
      function b(e) {
        var t = e.nationConfig,
          i = e.isServiceAutoFetch,
          n = e.children,
          o = e.tag,
          a = h((0, r.useState)(y), 2),
          c = a[0],
          s = a[1];
        function l(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: v(t || {}), errMsg: i || "", errNo: r || 0 };
        }
        var u = {
          url: (0, p.scmConfig)(t.local).goSite + "/arrivalnotice/watch",
          method: "GET",
          params: { tag: o },
          withCredentials: !0,
          async: !1,
        };
        return r.createElement(
          f.h,
          {
            context: g,
            setState: s,
            defaultValue: y,
            adapterError: function (e) {
              return l(e);
            },
            adapter: l,
            value: c,
            nationConfig: t,
            isAutoFetch: !1 !== i,
            ajaxConfig: u,
          },
          n
        );
      }
      function v(e) {
        return void 0 === e && (e = {}), e || null;
      }
      var w = g,
        D = i(1218),
        M = function () {
          return (M =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        S = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        x = { pc: l.u, m: u.u };
      function _(e) {
        var t = e.show,
          i = e.mode,
          n = x[i],
          c = S((0, r.useState)(!!t), 2),
          s = c[0],
          l = c[1];
        return r.createElement(
          n,
          {
            isModalShow: s,
            isShowCloseIcon: !0,
            isBorderBottom: !0,
            closeModal: function () {
              return l(!1);
            },
            title: a.get("ARRIVAL NOTICE"),
            extraClassName: o()("notify_modal", "notify-" + [i] + "-modal"),
          },
          r.createElement(
            "div",
            { className: "notify-" + [i] + "-modal__content" },
            r.createElement(
              "div",
              { className: "notify-modal__icon" },
              r.createElement("i", { className: "xiaomi icon-check" })
            ),
            r.createElement(
              "h4",
              { className: "notify-modal__subtitle" },
              a.get("You’re all set!")
            ),
            r.createElement(
              "p",
              { className: "notify-modal__detail" },
              a.get(
                "You will be notified when the product is available for sale."
              )
            )
          ),
          r.createElement(
            "div",
            { className: "notify-" + [i] + "-modal__actions" },
            r.createElement(
              "button",
              {
                className: "notify-modal__button",
                onClick: function () {
                  return l(!1);
                },
              },
              a.get("CLOSE")
            )
          )
        );
      }
      function T(e) {
        var t = e.show,
          i = void 0 !== t && t,
          n = e.mode,
          c = e.local,
          l = x[n],
          u = S((0, r.useState)(i), 2),
          d = u[0],
          m = u[1];
        return r.createElement(
          l,
          {
            isModalShow: d,
            isShowCloseIcon: !0,
            isBorderBottom: !0,
            closeModal: function () {
              return m(!1);
            },
            title: a.get("Notify Me"),
            extraClassName: o()("notify_modal", "notify-" + [n] + "-modal"),
          },
          r.createElement(
            "div",
            { className: "notify-" + [n] + "-modal__content" },
            r.createElement(
              "p",
              { className: "notify-modal__detail" },
              a.get("Looking to purchase this product?"),
              r.createElement("br", null),
              a.get("Please "),
              r.createElement(
                "a",
                {
                  className: "user-info--animation",
                  href: "javascript:void(0)",
                  onClick: function () {
                    (0, s.x4)({ local: c, platform: n });
                  },
                },
                a.get("SIGN IN / SIGN UP")
              ),
              " ,  ",
              a.get(
                "If stocks arrive within 30 days, we will use your contact details to keep you updated."
              )
            )
          ),
          r.createElement(
            "div",
            { className: "notify-" + [n] + "-modal__actions" },
            r.createElement(
              "button",
              {
                className: "notify-modal__button",
                onClick: function () {
                  return m(!1);
                },
              },
              a.get("CLOSE")
            )
          )
        );
      }
      function N(e) {
        var t,
          i,
          n,
          o,
          a =
            null ===
              (i =
                null ===
                  (t =
                    null === window || void 0 === window
                      ? void 0
                      : window.location) || void 0 === t
                  ? void 0
                  : t.pathname) || void 0 === i
              ? void 0
              : i.split("/").pop(),
          l =
            (null ===
              (o =
                null ===
                  (n =
                    null === window || void 0 === window
                      ? void 0
                      : window.location) || void 0 === n
                  ? void 0
                  : n.href) || void 0 === o
              ? void 0
              : o.match(/notify=([a-z0-9-]*)?/)) || [],
          u = S((0, r.useState)(!1), 2),
          m = u[0],
          p = u[1],
          f = S((0, r.useState)(!!l[1] && !c.get("AUTO_NOTIFY_TAG_" + a)), 2),
          h = f[0],
          y = f[1],
          g = S((0, r.useState)(!1), 2),
          v = g[0],
          x = g[1],
          N = S((0, r.useState)(""), 2),
          F = N[0],
          k = N[1],
          C = r.useContext(w);
        return (
          (0, r.useEffect)(
            function () {
              !v &&
                l[1] &&
                !c.get("AUTO_NOTIFY_TAG_" + a) &&
                (0, s.bg)() &&
                C.getService({ params: { tag: a } }, function (t) {
                  0 === t.errNo
                    ? (p(!0),
                      c.set("AUTO_NOTIFY_TAG_" + a, "true", {
                        expires: 1,
                        path: "/" + e.local,
                        domain: (0, D.YN)(e.local),
                      }),
                      y(!1))
                    : (x(!0), k(t.errMsg));
                });
            },
            [l, a]
          ),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              b,
              {
                nationConfig: { local: e.local, platform: e.mode },
                isServiceAutoFetch: !1,
              },
              !(0, s.bg)() && r.createElement(T, M({}, e, { show: h })),
              (0, s.bg)() && m && r.createElement(_, M({}, e, { show: m })),
              r.createElement(d.F, {
                msg: F,
                isShow: !!F,
                callback: function () {
                  k("");
                },
              })
            )
          )
        );
      }
    },
    7857: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => l });
      var r = i(7294),
        n = i(4184),
        o = i.n(n),
        a = i(1715),
        c = i(4336),
        s = { pc: a.u, mobile: c.u, responsive: c.u };
      function l(e) {
        var t = e.show,
          i = void 0 !== t && t,
          n = e.src,
          a = e.mode,
          c = e.close,
          l = e.isYtLink,
          u = e.isAutoplay,
          d = void 0 === u || u,
          m = e.isLoop,
          p = void 0 !== m && m,
          f = e.poster,
          h = void 0 === f ? "" : f,
          y = s[a];
        return r.createElement(
          y,
          {
            isModalShow: i,
            closeModal: c,
            extraClassName: o()("video_modal", "product-" + [a]),
            isShowCloseIcon: !0,
          },
          l
            ? r.createElement("iframe", {
                src: "https://www.youtube.com/embed/" + n,
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                className: "modal-video",
                frameBorder: 0,
              })
            : r.createElement("video", {
                src: n,
                className: "modal-video",
                autoPlay: d,
                loop: p,
                poster: h,
                controls: !0,
              })
        );
      }
    },
    1379: (e, t, i) => {
      "use strict";
      i.d(t, { I: () => l });
      var r = i(7294),
        n = i(6808),
        o = i(6261),
        a = i(9076),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = {
          CHUNK_NAME: "BuyProduct",
          BUY_PRODUCT_VERSION: "BUY_PRODUCT_VERSION",
        };
      function l(e) {
        var t = n.get(s.BUY_PRODUCT_VERSION) || "",
          i = (0, r.useContext)(a.D),
          l = i.data,
          u = i.ajaxStatus,
          d = e.local,
          m = e.productName,
          p = c((0, r.useState)(t), 2),
          f = p[0],
          h = p[1];
        return (
          (0, o.F)({
            local: d,
            curVersion: f,
            platform: "mobile",
            chunkName: s.CHUNK_NAME,
          }),
          (0, r.useEffect)(function () {}, []),
          m && (window._page_data = { productType: m }),
          (0, r.useEffect)(
            function () {
              "success" === u &&
                (!t && h(l),
                n.set(s.BUY_PRODUCT_VERSION, l, {
                  expires: 90,
                  domain: ".mi.com",
                  path: "/" + d,
                }));
            },
            [u]
          ),
          r.createElement(r.Fragment, null)
        );
      }
    },
    1941: (e, t, i) => {
      "use strict";
      i.d(t, { I: () => p });
      var r = i(7294),
        n = i(6808),
        o = i(6261),
        a = i(4296),
        c = i(8386),
        s = i(843),
        l = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        u = "BuyProductV4",
        d = "BuyProductChannel",
        m = "BUY_PRODUCT_VERSION4";
      function p(e) {
        var t = n.get(m) || "",
          i = e.local,
          p = e.productName,
          f = e.isToC,
          h = (0, r.useContext)(f ? c.z : s.g),
          y = h.data,
          g = h.ajaxStatus,
          b = l((0, r.useState)(t), 2),
          v = b[0],
          w = b[1],
          D = (0, a.i)("product_v4").isPoco;
        return (
          (0, o.F)({
            local: i,
            curVersion: v,
            platform: "mobile",
            chunkPlatform: "chunk_mobile_v4",
            chunkName: f ? u : d,
          }),
          (0, r.useEffect)(function () {
            if ((h.getService(), D)) {
              var e = document.querySelector("#root-chunk");
              e && e.setAttribute("class", "poco");
            }
          }, []),
          p && (window._page_data = { productType: p }),
          (0, r.useEffect)(
            function () {
              "success" === g &&
                (!t && w(y),
                n.set(m, y, {
                  expires: 90,
                  domain: D ? "po.co" : ".mi.com",
                  path: "/" + i,
                }));
            },
            [g]
          ),
          r.createElement(r.Fragment, null)
        );
      }
    },
    2999: (e, t, i) => {
      "use strict";
      i.d(t, { I: () => d, f: () => u });
      var r = i(7294),
        n = i(4184),
        o = i.n(n),
        a = i(4428),
        c = i(3543),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        };
      function u(e) {
        var t = e.local,
          i = e.productName,
          n = e.isToC;
        return (
          (0, a.T)(t, n),
          i && (window._page_data = { productType: i }),
          r.createElement("div", { id: "buy-root" })
        );
      }
      function d(e) {
        var t = e.isShow,
          i = e.isOverBuy,
          n = l((0, r.useState)(0), 2),
          a = n[0],
          d = n[1],
          m = l((0, r.useState)(0), 2),
          p = m[0],
          f = m[1],
          h = l((0, r.useState)(!1), 2),
          y = h[0],
          g = h[1],
          b = (0, c.Z)().setProductData,
          v = o()("buy-container", { hide: !t && y });
        return (
          (0, r.useEffect)(
            function () {
              var e,
                r,
                n = window.innerHeight,
                o = window.scrollX,
                a = window.scrollY,
                c = document.querySelector(".xm-page-area") || {},
                s = document.querySelector(".site-footer-v4") || {},
                l =
                  null === (e = document.querySelector(".xm-navbar")) ||
                  void 0 === e
                    ? void 0
                    : e.nextElementSibling,
                u = 3;
              if (t || i) {
                var m = document.querySelector(".xm-navbar") || {},
                  h = n - (m.offsetTop + m.offsetHeight) + a,
                  y =
                    (null === (r = document.querySelector("#buy-root")) ||
                    void 0 === r
                      ? void 0
                      : r.clientHeight) || h;
                g(!1),
                  f(a),
                  d(y),
                  a &&
                    setTimeout(function () {
                      f(0),
                        window.scrollTo({
                          left: o,
                          top: 0,
                          behavior: "smooth",
                        });
                    }, 0);
                var b = setInterval(function () {
                  var e,
                    t,
                    i,
                    r =
                      (null === (e = document.querySelector("#buy-root")) ||
                      void 0 === e
                        ? void 0
                        : e.clientHeight) || 0,
                    n =
                      null ===
                        (t = document.querySelector(
                          ".information-section__product-title span"
                        )) || void 0 === t
                        ? void 0
                        : t.innerHTML,
                    o =
                      (null ===
                        (i = document.querySelector(".buy-container")) ||
                      void 0 === i
                        ? void 0
                        : i.clientHeight) || 0;
                  n && r && y < r && d(r),
                    n && o >= r && --u < 0 && clearInterval(b);
                }, 1e3);
              } else
                !(function () {
                  var e, t;
                  c && (c.style.height = "initial"),
                    null === (e = null == l ? void 0 : l.classList) ||
                      void 0 === e ||
                      e.remove("hide"),
                    null === (t = null == s ? void 0 : s.classList) ||
                      void 0 === t ||
                      t.remove("hide"),
                    d(0),
                    setTimeout(function () {
                      g(!0);
                    }, 500);
                })(),
                  p &&
                    setTimeout(function () {
                      window.scrollTo({ left: o, top: p, behavior: "smooth" });
                    }, 0);
            },
            [t, i]
          ),
          (0, r.useEffect)(
            function () {
              b({ type: "TOGGLE_HEIGHT", payload: { buyHeight: a } });
            },
            [a]
          ),
          r.createElement(
            "div",
            { className: v, style: { height: a } },
            r.createElement(u, s({}, e))
          )
        );
      }
    },
    2330: (e, t, i) => {
      "use strict";
      i.d(t, { M: () => o });
      var r = i(7294),
        n = { currentId: "" },
        o = r.createContext({ state: n, dispatch: function () {} });
    },
    560: (e, t, i) => {
      "use strict";
      i.d(t, { mZ: () => d, q$: () => p });
      var r = i(7294),
        n = i(9493);
      var o = i(361),
        a = i.n(o),
        c = function () {
          return (c =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        s = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        l = (0, n.Z)().pageData,
        u = {
          id: Number(null == l ? void 0 : l.id),
          text_map: {},
          data: l,
          originTextMap: {},
          changedText: [],
          originData: l,
          needTrans: !1,
          buyHeight: 0,
        },
        d = (0, r.createContext)({ state: u, dispatch: function () {} }),
        m = function (e, t) {
          var i = t.type,
            r = c({}, e);
          switch (i) {
            case "TOGGLE_HEIGHT":
              if (void 0 !== t.payload.buyHeight) {
                var n = t.payload.buyHeight;
                return c(c({}, r), { buyHeight: n });
              }
              return e;
            case "MODIFY_TEXT":
            case "MODIFY_BUTTON":
              if (
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t)
              ) {
                var o = t.payload,
                  s = o.id,
                  l = o.itemObj,
                  u = o.key,
                  d = r.text_map,
                  m = void 0 === d ? {} : d,
                  p = r.changedText,
                  f = void 0 === p ? [] : p,
                  h = r.data,
                  y = void 0 === h ? {} : h;
                if (u && m[u] && void 0 !== l.trans) {
                  m[u].local_text = l.trans || "";
                  var g = f.findIndex(function (e) {
                    return e.key === u;
                  });
                  g > -1 ? (f[g] = m[u]) : f.push(m[u]);
                }
                return s && ((y[s] = l), (r.needTrans = !0)), r;
              }
              return e;
            case "MODIFY_PRICE":
            case "MODIFY_SCROLL":
            case "MODIFY_NAV":
            case "MODIFY_RELATED":
            case "MODIFY_BGIMAGE":
            case "MODIFY_IMAGE":
            case "MODIFY_VIDEO":
              if (
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t) ||
                (function (e) {
                  return void 0 !== e.payload.itemObj;
                })(t)
              ) {
                var b = t.payload,
                  v = ((s = b.id), (l = b.itemObj), r.data);
                y = void 0 === v ? {} : v;
                return s && (y[s] = l), r;
              }
              return e;
            case "INIT":
              if (
                (function (e) {
                  return void 0 !== e.payload.data;
                })(t)
              ) {
                var w = (y = t.payload.data).text_map,
                  D = y.data;
                return c(c({}, y), {
                  changedText: [],
                  originTextMap: a()(w),
                  originData: a()(D),
                  needTrans: !1,
                });
              }
              return e;
            default:
              return e;
          }
        },
        p = function (e) {
          var t = s((0, r.useReducer)(m, u), 2),
            i = t[0],
            n = t[1],
            o = (e.productName, e.pageName, {}),
            a = o.status,
            c = void 0 === a ? "" : a,
            l = o.data,
            p = void 0 === l ? {} : l;
          return (
            (0, r.useEffect)(
              function () {
                "success" === c && n({ type: "INIT", payload: { data: p } });
              },
              [c]
            ),
            r.createElement(
              d.Provider,
              { value: { state: i, dispatch: n } },
              null == e ? void 0 : e.children
            )
          );
        };
    },
    3143: (e, t, i) => {
      "use strict";
      i.d(t, { h: () => D });
      var r = i(7294),
        n = i(6554),
        o = i(540),
        a = i(3884),
        c = i(4072),
        s = i(2886),
        l = i(9986),
        u = i(1906),
        d = i(5709),
        m = i(3438),
        p = i(6160),
        f = i(665),
        h = i(486),
        y = i(7746),
        g = i(1848);
      i(6808);
      function b(e) {
        var t;
        (e.callbackUrl = e.callbackUrl || window.location.href),
          (e.local = e.local || "global"),
          (e.platform = e.platform || "m");
        var i =
          null === (t = (0, g.scmConfig)(e.local)) || void 0 === t
            ? void 0
            : t.buySite[e.platform];
        window.location.assign(i + "/site/login?redirectUrl=" + e.callbackUrl);
      }
      var v,
        w =
          ((v = function (e, t) {
            return (v =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function i() {
              this.constructor = e;
            }
            v(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        D = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (
              (i.baseAjaxConfig = { withCredentials: !0 }),
              (i.LOGIN_ERROR_CODE = [20001, 20006]),
              (i.URL_PARAMS_JOIN = ["GET", "get", "JSONP", "jsonp"]),
              (i.subscription = new a.w()),
              (i.getService = i.getService.bind(i)),
              (i.getObservable = i.getObservable.bind(i)),
              (i.adapterData = i.adapterData.bind(i)),
              (i.setAjaxStatus = i.setAjaxStatus.bind(i)),
              (i.resetService = i.resetService.bind(i)),
              i
            );
          }
          return (
            w(t, e),
            (t.prototype.checkIsError = function (e) {
              return (
                void 0 === e && (e = {}),
                !!e.errno ||
                  !!e.errorno ||
                  !!e.error ||
                  (!!e.code && 200 !== e.code)
              );
            }),
            (t.prototype.getErrorCode = function (e) {
              return (
                void 0 === e && (e = {}),
                e.code && 200 !== e.code
                  ? e.code
                  : e.errno || !!e.errorno || !!e.error || 0
              );
            }),
            (t.prototype.adapterData = function (e, t) {
              if (this.checkIsError(e || {})) {
                var i = this.props.adapterError(e);
                return i
                  ? (this.props.setState(
                      Object.assign({}, this.props.value, i, {
                        getServiceSuccess: !0,
                        ajaxStatus: "error",
                      })
                    ),
                    t && "function" == typeof t ? t(i) : i)
                  : {};
              }
              var r = this.props.adapter(e);
              return r
                ? (this.props.setState(
                    Object.assign({}, this.props.value, r, {
                      getServiceSuccess: !0,
                      ajaxStatus: "success",
                    })
                  ),
                  t && "function" == typeof t ? t(r) : r)
                : {};
            }),
            (t.prototype.setAjaxStatus = function (e) {
              this.props.setState(
                Object.assign({}, this.props.value, { ajaxStatus: e })
              );
            }),
            (t.prototype.resetService = function () {
              this.props.setState(Object.assign({}, this.props.defaultValue));
            }),
            (t.prototype.getObservable = function (e) {
              return this.getApiData(e);
            }),
            (t.prototype.getService = function (e, t) {
              var i = this.getApiData(e, t).subscribe();
              this.subscription.add(i);
            }),
            (t.prototype.getApiData = function (e, t) {
              var i = this;
              this.setAjaxStatus("loading");
              var r =
                  FormData && e && e.params instanceof FormData
                    ? this.insertBasicParamsToFormData(
                        e.params,
                        this.props.ajaxConfig.basicParams || {}
                      )
                    : Object.assign(
                        {},
                        this.props.ajaxConfig.basicParams || {},
                        e ? e.params : this.props.ajaxConfig.params
                      ),
                n = Object.assign(
                  this.baseAjaxConfig,
                  this.props.ajaxConfig,
                  e,
                  { params: r }
                );
              return (
                this.props.beforeSend &&
                  this.props.beforeSend instanceof Function &&
                  this.props.beforeSend(n || {}),
                this.fetchData(n).pipe(
                  (0, d.U)(function (e) {
                    return i.adapterData(e, t);
                  })
                )
              );
            }),
            (t.prototype.insertBasicParamsToFormData = function (e, t) {
              return (
                Object.keys(t).forEach(function (i) {
                  return e.append(i, t[i]);
                }),
                e
              );
            }),
            (t.prototype.fetchData = function (e) {
              var t = this,
                i = {
                  url: e.url || "",
                  method: e.method || "GET",
                  jsonpParamKey: e.jsonpParamKey || "jsonpCallback",
                  jsonpParamValue: e.jsonpParamValue || "jsonpCallback",
                  headers: e.headers || {},
                  params: e.params || {},
                  user: e.user || "",
                  password: e.password || "",
                  timeout: e.timeout || 6e4,
                  responseType: e.responseType || "json",
                  async: !1 !== e.async,
                  hasContent: !1 === e.hasContent,
                  crossDomain: !1 !== e.crossDomain,
                  withCredentials: !1 !== e.withCredentials,
                  retryOptions: Object.assign(
                    {
                      maxRetryAttempts: 0,
                      scalingDuration: 0,
                      excludedStatusCodes: [],
                      excludedErrorCodes: [],
                    },
                    e.retryOptions
                  ),
                },
                r = this.URL_PARAMS_JOIN.includes(i.method)
                  ? Object.keys(i.params || {})
                      .map(function (e) {
                        return e + "=" + i.params[e];
                      })
                      .join("&")
                  : "",
                a = r ? i.url + "?" + r : i.url,
                l = this.URL_PARAMS_JOIN.includes(i.method)
                  ? {}
                  : i.params || {},
                u = Object.assign({}, i, { url: a || "", body: l || {} });
              return (
                ["JSONP", "jsonp"].includes(u.method)
                  ? (0, c.D)(
                      n(u.url, {
                        jsonpCallback: u.jsonpParamKey,
                        jsonpCallbackFunction: u.jsonpParamValue,
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          return { response: e };
                        })
                        .catch(function (e) {
                          throw e;
                        })
                    ).pipe(
                      (0, m.b)(function (e) {
                        if (t.checkIsError(e.response || {})) {
                          if (
                            t.LOGIN_ERROR_CODE.includes(
                              t.getErrorCode(e.response)
                            )
                          )
                            return b({
                              local: t.props.nationConfig.local,
                              platform:
                                "pc" === t.props.nationConfig.platform
                                  ? "pc"
                                  : "m",
                              callbackUrl: window.location.href,
                            });
                          throw e;
                        }
                      }),
                      (0, d.U)(function (e) {
                        return Object.assign({}, e.response, {
                          __requestParams__: u.params || {},
                          __requestUrl__: u.url || "",
                        });
                      })
                    )
                  : (0, o.h)(u).pipe(
                      (0, p.V)(u.timeout),
                      (0, m.b)(function (e) {
                        if (!(e.status >= 200 && e.status < 300)) throw e;
                        if (!e.response)
                          throw Object.assign({}, e, { status: 503 });
                        if (t.checkIsError(e.response || {})) {
                          if (
                            t.LOGIN_ERROR_CODE.includes(
                              t.getErrorCode(e.response)
                            )
                          )
                            return b({
                              local: t.props.nationConfig.local,
                              platform:
                                "pc" === t.props.nationConfig.platform
                                  ? "pc"
                                  : "m",
                              callbackUrl: window.location.href,
                            });
                          throw e;
                        }
                      }),
                      (0, d.U)(function (e) {
                        return Object.assign({}, e.response, {
                          __requestParams__: u.params || {},
                          __requestUrl__: u.url || "",
                        });
                      })
                    )
              ).pipe(
                (0, f.a)(this.genericRetryStrategy(u.retryOptions)),
                (0, h.K)(function (e) {
                  var t = e.response || {
                    errno: -1,
                    errmsg: "Network error",
                    data: null,
                  };
                  return (0,
                  s.of)(Object.assign({}, t, { __requestParams__: u.params || {}, __requestUrl__: u.url || "" }));
                })
              );
            }),
            (t.prototype.genericRetryStrategy = function (e) {
              var t = void 0 === e ? {} : e,
                i = t.maxRetryAttempts,
                r = void 0 === i ? 0 : i,
                n = t.scalingDuration,
                o = void 0 === n ? 0 : n,
                a = t.excludedStatusCodes,
                c = void 0 === a ? [] : a,
                s = t.excludedErrorCodes,
                u = void 0 === s ? [] : s;
              return function (e) {
                return e.pipe(
                  (0, y.zg)(function (e, t) {
                    if (
                      t + 1 > r ||
                      c.includes(e.status) ||
                      u.includes(
                        (e.response &&
                          (e.response.errno ||
                            e.response.code ||
                            e.response.errorno ||
                            e.response.error)) ||
                          0
                      )
                    )
                      throw e;
                    return (0, l.H)(o);
                  })
                );
              };
            }),
            (t.prototype.componentDidMount = function () {
              this.props.isAutoFetch && this.getService();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.subscription.unsubscribe();
            }),
            (t.prototype.render = function () {
              var e = this.props.context.Provider,
                t = this.props.value;
              return (
                (t.getService = this.getService),
                (t.getObservable = this.getObservable),
                (t.resetService = this.resetService),
                r.createElement(e, { value: t }, this.props.children)
              );
            }),
            (t.defaultProps = {
              context: r.createContext({}),
              value: {},
              defaultValue: {},
              nationConfig: {},
              ajaxConfig: {},
              isAutoFetch: !0,
              adapter: function () {},
              adapterError: function () {},
              setState: function () {},
              getService: function () {},
              getObservable: function () {
                return new u.y();
              },
              resetService: function () {},
            }),
            t
          );
        })(r.Component);
    },
    6607: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => n });
      var r = i(1906);
      function n(e, t) {
        var i = (t && t.data) || {},
          n = (t && t.ajaxStatus) || "unsent",
          o = (t && t.getServiceSuccess) || !1;
        return {
          data: e(i),
          errMsg: "",
          errNo: 0,
          ajaxStatus: n,
          getServiceSuccess: o,
          getService: function (e, t) {},
          getObservable: function (e) {
            return new r.y();
          },
          resetService: function () {},
        };
      }
    },
    259: (e, t, i) => {
      "use strict";
      var r = i(7294),
        n = i(3935),
        o = i(6808),
        a = (i(6337), i(3727)),
        c = i(5977),
        s = i(9493);
      var l = i(1893);
      const u = {
        de_poco: i(548),
        uk_poco: i(4637),
        es_poco: i(2729),
        fr_poco: i(298),
        id_poco: i(6866),
        it_poco: i(9502),
        ru_poco: i(3338),
        hk_poco: i(534),
        tw_poco: i(8108),
        nl_poco: i(2598),
        global_poco: i(9906),
        de: i(1902),
        en: i(3148),
        es: i(3046),
        in: i(3059),
        fr: i(5157),
        id: i(9512),
        it: i(5762),
        ru: i(9287),
        hk: i(7375),
        tw: i(1200),
        bd: i(1851),
        br: i(7273),
        cl: i(4430),
        cz: i(9064),
        eg: i(5620),
        kr: i(3587),
        ma: i(835),
        mx: i(581),
        my: i(5710),
        lk: i(202),
        nl: i(4600),
        ng: i(3400),
        np: i(4282),
        ph: i(6383),
        pk: i(7997),
        pl: i(3168),
        sa: i(9228),
        se: i(2819),
        sg: i(6093),
        th: i(6613),
        tr: i(1670),
        ua: i(6347),
        vn: i(2067),
        jp: i(6936),
        us: i(5793),
        uk: i(3148),
        za: i(1613),
        global: i(516),
        gcc: i(868),
        gr: i(605),
      };
      var d = i(4296),
        m = i(3588);
      function p() {
        return (
          (0, r.useEffect)(function () {
            var e = document.querySelector("#review-root");
            e && e.removeAttribute("class");
            var t = document.querySelector("#root-product");
            t && t.setAttribute("style", "min-height: auto;");
            var i =
              null == t ? void 0 : t.querySelector(".xm-page-area_mobile");
            i && i.setAttribute("style", "padding-bottom: 0;"),
              i && i.classList.add("review-tab");
            var r = null == t ? void 0 : t.querySelector(".drag-tip");
            return (
              r && r.setAttribute("style", "display: none"),
              function () {
                var e = document.querySelector("#review-root");
                e && e.setAttribute("class", "hide");
                var t = document.querySelector("#root-product");
                t && t.removeAttribute("style");
                var i =
                  null == t ? void 0 : t.querySelector(".xm-page-area_mobile");
                i && i.removeAttribute("style"),
                  i && i.classList.remove("review-tab");
                var r = null == t ? void 0 : t.querySelector(".drag-tip");
                r && r.setAttribute("style", "height: 0;");
              }
            );
          }, []),
          r.createElement(r.Fragment, null)
        );
      }
      var f = i(4428);
      function h(e) {
        var t = e.local,
          i = e.productName;
        return (
          (0, f.T)(t, !0),
          i && (window._page_data = { productType: i }),
          r.createElement(
            "div",
            { className: "review-container" },
            r.createElement("div", { id: "review-root" })
          )
        );
      }
      var y = function (e) {
          var t = e.local,
            i = void 0 === t ? "" : t,
            n = e.platform,
            o = e.productName;
          return r.createElement(
            r.Fragment,
            null,
            "pc" === n
              ? r.createElement(h, { productName: o, local: i })
              : r.createElement(p, null),
            e.children
          );
        },
        g = (0, i(4708).dG)(),
        b = function (e) {
          return g.includes(e);
        },
        v = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        w = function (e, t) {
          for (var i = 0, r = t.length, n = e.length; i < r; i++, n++)
            e[n] = t[i];
          return e;
        },
        D = i(5461).reviewRouter,
        M = (i(783), i(6690)),
        S = function (e) {
          var t,
            i,
            n = e.productConfig,
            p = e.pageMap;
          (t = JSON.parse(
            window.atob(
              "W1siIl0sWyIgICBNTU1NTU1NTU1NTU1NTU1NTW0gICAgIElJSUkiXSxbIiAgIE1NTU1NTU1NTU1NTU1NTU1NTU1tICAgSUlJSSJdLFsiICAgTU1NTSAgICAgICAgICAgbU1NTU0gICBJSUlJIl0sWyIgICBNTU1NICAgIE1NTU0gICAgTU1NTSAgIElJSUkiXSxbIiAgIE1NTU0gICAgTU1NTSAgICBNTU1NICAgSUlJSSJdLFsiICAgTU1NTSAgICBNTU1NICAgIE1NTU0gICBJSUlJIl0sWyIgICBNTU1NICAgIE1NTU0gICAgTU1NTSAgIElJSUkiXSxbIiAgIE1NTU0gICAgTU1NTSAgICBNTU1NICAgSUlJSSJdLFsiICAgTU1NTSAgICBNTU1NICAgIE1NTU0gICBJSUlJIl0sWyIgIl1d"
            ) || "[]"
          )),
            (i = JSON.parse(
              window.atob("W1siICAgdjIuOC41QDE2NjcyMTc1OTA1OTEiXSxbIiAiXV0=") ||
                "[]"
            )),
            console.log(
              "%c%s",
              ["color:#ff6700"].join(";"),
              t.concat(i).join("\n")
            );
          var f = (function (e) {
              var t = (0, s.Z)(),
                i = t.tag,
                r = t.local,
                n = 1 === t.platform ? "pc" : "mobile",
                o = "/" + r + "/product/" + i,
                a = new RegExp(
                  "(/i18n_op/opx/" +
                    r +
                    "/product-station/preview/" +
                    r +
                    "/" +
                    i +
                    "|/" +
                    r +
                    "/(ios|live|app)/product/" +
                    i +
                    "|/" +
                    r +
                    "/" +
                    i +
                    "|/" +
                    r +
                    "/(ios|live|app)/" +
                    i +
                    ").*"
                ),
                c = window.location.pathname.match(a),
                l = o;
              return (
                c && (l = c[1]),
                { productName: i, platform: n, local: r, basename: l }
              );
            })(),
            h = f.productName,
            g = f.platform,
            S = f.basename,
            x = f.local,
            _ = f.lang,
            T = void 0 === _ ? "" : _,
            N = (function (e, t, i) {
              if (!b(i)) return e;
              var r = { review: y };
              return Object.assign({}, e, r);
            })(p, 0, x);
          !(function (e, t) {
            void 0 === t && (t = ""), l.init({ currentLocale: e, locales: u });
          })(x, T);
          var F = (function (e, t) {
              return b(t) ? w(w([], v(e)), [D]) : e;
            })(n.routes, x).map(function (e) {
              return r.createElement(c.AW, {
                key: "Route" + e.page,
                path: e.path,
                exact: !0,
                render: function () {
                  var t = N[e.page] || N[Object.keys(N)[0]];
                  return r.createElement(t, {
                    productName: h,
                    platform: g,
                    local: x,
                  });
                },
              });
            }),
            k = N.layout,
            C = window.location.pathname,
            E = (void 0 === C ? "" : C).split("/").includes("content"),
            Y = (0, d.i)("product_v4").scmConfig,
            O = "1" === o.get("ISAPP") || "1" === o.get("ISIOS");
          return (
            (0, r.useEffect)(function () {
              (0, M.otInit)({ local: x, platform: "m" });
            }, []),
            (0, r.useEffect)(
              function () {
                var e;
                if (!E && !O && ["in"].includes(x) && h) {
                  var t =
                      "globalshop://mobile.mi.com?nativeOpenUrl=" +
                      (0, m.fZ)(
                        null === (e = Y(x)) || void 0 === e
                          ? void 0
                          : e.wwwSite.m
                      ) +
                      "/" +
                      h,
                    i = !!navigator.userAgent.match(
                      /\(i[^;]+;( U;)? CPU.+Mac OS X/
                    );
                  if (!!~navigator.userAgent.indexOf("Chrome") || i)
                    window.location.href = t;
                  else {
                    var r = document.createElement("iframe");
                    (r.style.cssText = "display:none; width=0; height=0"),
                      document.body.appendChild(r),
                      (r.src = t);
                  }
                }
              },
              [x]
            ),
            r.createElement(
              "div",
              { className: x },
              E
                ? r.createElement(
                    a.UT,
                    { basename: E ? "" : S },
                    r.createElement(k, { productName: h, platform: g }, F)
                  )
                : r.createElement(
                    a.VK,
                    { basename: S },
                    r.createElement(k, { productName: h, platform: g }, F)
                  )
            )
          );
        };
      var x = i(9306),
        _ = i.n(x),
        T = i(6070),
        N = i(5466),
        F = i(9383),
        k = i(4397),
        C = i(7923),
        E = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        Y = "https://i02.appmifile.com/mi-com-product/fly-birds/";
      var O = i(6637),
        A = i(7421),
        L = {
          Button: {
            fontSize: 16,
            minWidth: 100,
            minHeight: 32,
            textAlign: "center",
            display: "block",
          },
          Section: {
            width: "100%",
            backgroundColor: "#fff",
            boxSizing: "border-box",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "relative",
          },
          Container: {
            width: "auto",
            height: "auto",
            boxSizing: "border-box",
            display: "block",
            position: "static",
            fontSize: 0,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          },
          Text: {
            color: "#000",
            fontSize: 16,
            display: "inline-block",
            textAlign: "left",
            width: "100%",
          },
          Image: {
            display: "block",
            height: 300,
            width: 300,
            backgroundColor: "transparent",
          },
          Price: { fontSize: 16, color: "#333" },
        },
        P = {
          toStr: function (e) {
            return (
              e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px"
            );
          },
          toObj: function (e) {
            var t = {},
              i = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
            return (
              e
                .split(" ")
                .map(function (e) {
                  return "auto" === e ? "auto" : parseFloat(e);
                })
                .forEach(function (e, r) {
                  t[i[r]] = e;
                }),
              t
            );
          },
        };
      var j = function () {
          return (j =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        I = "daf12df2ds",
        R = ["margin", "padding", "borderRadius"],
        B = [
          "height",
          "width",
          "minWidth",
          "minHeight",
          "maxWidth",
          "maxHeight",
          "top",
          "left",
          "bottom",
          "right",
          "fontSize",
        ];
      function U(e, t, i) {
        return (e * t) / i + "rem";
      }
      function z(e, t, i, r) {
        var n, o;
        if (t)
          return Object.values(((n = t), (o = "toObj"), P[o](n)))
            .reduce(function (e, t) {
              return (
                (t || 0 === t) &&
                  ("number" == typeof t
                    ? e.push((t * i) / r + "rem")
                    : e.push(t)),
                e
              );
            }, [])
            .join(" ");
      }
      var H = function () {
          return (H =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        Z = {
          Container: T.Z,
          Section: T.Z,
          Image: N.Z,
          Text: F.Z,
          Button: O.Z,
          Price: A.M,
          Scroll: C.Z,
        };
      function W(e) {
        var t = e.componentProps,
          i = e.componentName,
          n = e.uuid,
          o = e.platform,
          a = e.pageName,
          c = e.children,
          s = void 0 === c ? [] : c,
          l = e.sectionConfig,
          u = Z[i],
          d = (function (e, t, i, r) {
            var n = {},
              o = e.style,
              a = e.value,
              c = e.src,
              s = e.key,
              l = e.hidden,
              u = e.customStyle,
              d = void 0 === u ? {} : u,
              m = e.extraProps,
              p = void 0 === m ? {} : m,
              f = (function (e, t) {
                return "m" === e ? 3 : "specs" === t ? 1 : 2;
              })(i, r),
              h = "pc" === i ? 256 : 48,
              y = !(function (e, t) {
                return "pc" === e && "specs" === t;
              })(i, r);
            for (var g in ((o = j(j({}, o), d)),
            c && (n.src = c),
            a && (n.value = a),
            s && (n.key = s),
            (n.xmDiyId = "ROOT_ID" === t ? I : t.slice(-10)),
            o)) {
              var b = o[g];
              "backgroundImage" === g && (n.src = o[g].split("'")[1]),
                "borderRadius" === g &&
                  b &&
                  "number" == typeof b &&
                  y &&
                  (o[g] = U(b, f, h)),
                B.includes(g) &&
                  b &&
                  y &&
                  /[0-9.]+(px)?$/.test(o[g]) &&
                  (o[g] = U(parseFloat(b), f, h)),
                R.includes(g) &&
                  b &&
                  "string" == typeof b &&
                  !b.includes("rem") &&
                  y &&
                  (o[g] = z(0, b, f, h));
            }
            return (n.style = o || {}), (n.hidden = l), (n.extraProps = p), n;
          })(t, n, o, a),
          m = d.src ? { src: d.src } : {},
          p = d.xmDiyId,
          f = d.hidden,
          h = void 0 !== f && f,
          y = t.transkey,
          g = t.fClass,
          b = void 0 === g ? "" : g,
          v = t.customClass,
          w = void 0 === v ? "" : v,
          D = d.extraProps ? d.extraProps : {};
        return (
          "ROOT_ID" === n &&
            (d.style = H(H({}, d.style), {
              width: "100%",
              height: "auto",
              padding: "unset",
              margin: "unset",
            })),
          i
            ? r.createElement(
                u,
                H(
                  {
                    key: n,
                    style: H(H({}, L[i]), d.style),
                    hidden: h,
                    xmDiyId: p,
                    transKey: y,
                    className: b + " " + w,
                  },
                  m,
                  D
                ),
                (function (e) {
                  var t = e.map(function (e) {
                    var t = e.componentName,
                      i = e.componentProps,
                      r = void 0 === i ? {} : i,
                      n = e.uuid,
                      c = void 0 === n ? "" : n,
                      s = e.children;
                    return W({
                      componentName: t,
                      componentProps: r,
                      uuid: c,
                      children: void 0 === s ? [] : s,
                      platform: o,
                      pageName: a,
                    });
                  });
                  return (
                    (null == l ? void 0 : l.length) &&
                      p === I &&
                      l.forEach(function (e) {
                        var i = e || {},
                          r = i.order,
                          n = i.component;
                        t.splice(r, 0, n);
                      }),
                    t
                  );
                })(s),
                d.value && d.value
              )
            : r.createElement(r.Fragment, { key: Math.random() + Date.now() })
        );
      }
      var K = [
        {
          componentName: "Container",
          uuid: "ROOT_ID",
          componentProps: {
            style: {
              flexDirection: "column",
              display: "flex",
              width: "calc(100% - 30px)",
              height: "calc(100vh - 30px)",
              background: "#fff",
              padding: 10,
            },
          },
          children: [
            {
              componentName: "Section",
              componentProps: {
                style: {
                  minHeight: 100,
                  display: "flex",
                  justifyContent: "center",
                },
              },
              children: [
                {
                  componentName: "Container",
                  componentProps: {
                    style: {
                      minWidth: 20,
                      padding:
                        "53.333333333333336px 0px 53.333333333333336px 0px",
                      width: 360,
                      display: "flex",
                      flexDirection: "column",
                      borderBottom: "",
                    },
                    marginStyle: "number",
                  },
                  children: [
                    {
                      componentName: "Image",
                      componentProps: {
                        style: {
                          height: 287,
                          width: 300,
                          display: "block",
                          margin: "0px 0px 0px 23.333333333333332px",
                        },
                        src: "//i02.appmifile.com/54_operator_sg/05/08/2022/3d078df54ec2115379eb7b6f6dc705b6.png",
                      },
                      children: [],
                      uuid: "add159a3-3020-4b52-badf-760ae7369b12",
                    },
                  ],
                  uuid: "bd8882e3-90a7-4450-a642-d4cf1e6ab89a",
                },
              ],
              uuid: "26259704-0c3e-4767-a194-1da8da37d1c6",
            },
            {
              componentName: "Section",
              componentProps: {
                style: {
                  minHeight: 100,
                  display: "flex",
                  justifyContent: "center",
                },
              },
              children: [
                {
                  componentName: "Container",
                  componentProps: {
                    style: {
                      minWidth: 20,
                      padding:
                        "0px 0px 53.333333333333336px 33.333333333333336px",
                      width: 360,
                      display: "flex",
                      flexDirection: "column",
                      borderBottom: "",
                    },
                  },
                  children: [
                    {
                      componentName: "Text",
                      componentProps: {
                        style: { fontSize: 20, color: "#000000" },
                        value: "",
                        fClass: "f-bold",
                        transkey: "",
                      },
                      children: [],
                      uuid: "36785e6b-b7ee-40b3-9db0-2b0cb0cd5198",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Product model no.",
                            transkey: "spec_1",
                          },
                          children: [],
                          uuid: "f1f91470-6d27-42e3-b245-d0604fefa509",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "M2132E1",
                            transkey: "spec_2",
                            fClass: "f-light",
                          },
                          children: [],
                          uuid: "e62aa4c8-2abb-4c84-9e34-62cb4c6e80ba",
                        },
                      ],
                      uuid: "e3715804-8b54-404d-820e-de918ab1af79",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Earbud input parameters",
                            transkey: "spec_3",
                          },
                          children: [],
                          uuid: "fd9ed14d-7244-42a4-8d8b-acf5cdab5b0a",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "5.25V ⎓ 160mA MAX（single earbud）",
                            transkey: "spec_4",
                            fClass: "f-light",
                          },
                          children: [],
                          uuid: "aa73df72-14f1-4670-9ecc-936d8560505f",
                        },
                      ],
                      uuid: "b00a192e-f113-4287-8fec-0b32c34905c6",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 133,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Charging case input parameters",
                            transkey: "spec_5",
                          },
                          children: [],
                          uuid: "a6351a68-f27d-4b8b-8044-0d8614747a5c",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "5V ⎓ 0.5A MAX",
                            transkey: "spec_6",
                            fClass: "f-light",
                          },
                          children: [],
                          uuid: "1803115e-9a02-4b53-8b58-78a9cca0cb26",
                        },
                      ],
                      uuid: "292135b9-ecd4-42a8-b2c5-f0762f82496c",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Charging port",
                            transkey: "spec_7",
                          },
                          children: [],
                          uuid: "8b6aa90d-9229-41a4-957e-60abc612ca02",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "Type-C",
                            transkey: "spec_8",
                            fClass: "f-light",
                          },
                          children: [],
                          uuid: "381b6581-0f29-4b37-80d5-a74ea189fc2b",
                        },
                      ],
                      uuid: "100ec561-989e-44a9-9d2a-349a3d586745",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Wireless connection",
                            transkey: "spec_9",
                          },
                          children: [],
                          uuid: "ddb4f15e-6403-4c3c-af98-a5815e1ec785",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "Bluetooth® 5.3",
                            transkey: "spec_10",
                            fClass: "f-light",
                          },
                          children: [],
                          uuid: "9b59d2d1-626d-414c-86de-457f40dfd519",
                        },
                      ],
                      uuid: "49138e4b-21f6-4ce3-82e4-c36c762473b7",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Bluetooth protocols",
                            transkey: "spec_11",
                          },
                          children: [],
                          uuid: "61d52f36-e9a0-4024-bca8-700a814096e9",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "Bluetooth®Low Energy / HFP / A2DP / AVRCP",
                            transkey: "spec_12",
                            fClass: "f-light",
                          },
                          children: [],
                          uuid: "b809c64a-174a-4ed4-8a9b-e2718c0c0a21",
                        },
                      ],
                      uuid: "a7c6b79e-1840-42db-a8a6-3313657bcefa",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Operating distance",
                            transkey: "spec_13",
                          },
                          children: [],
                          uuid: "590f69a8-5e08-4256-946b-ba61e633c727",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "10m (open space free of obstacles)",
                            transkey: "spec_14",
                            fClass: "f-regular",
                          },
                          children: [],
                          uuid: "30d5651f-766d-4976-91e9-5e96c378c420",
                        },
                      ],
                      uuid: "9cda6584-fe79-4900-a061-bde8c532dc4a",
                    },
                    {
                      componentName: "Container",
                      componentProps: {
                        style: {
                          minWidth: 20,
                          margin: "26.666666666666668px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        marginStyle: "number",
                      },
                      children: [
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 143,
                              color: "#000000",
                            },
                            fClass: "f-regular",
                            value: "Speaker impedance",
                            transkey: "spec_15",
                          },
                          children: [],
                          uuid: "09f1d69d-2962-4df4-b38a-90014dbd25a7",
                        },
                        {
                          componentName: "Text",
                          componentProps: {
                            style: {
                              fontSize: 12,
                              width: 170,
                              color: "#000000cc",
                            },
                            value: "24Ω",
                            transkey: "spec_16",
                            fClass: "f-regular",
                          },
                          children: [],
                          uuid: "149af77e-c0e2-4e61-b852-de9842316437",
                        },
                      ],
                      uuid: "3187aaf5-4dee-4920-b633-aa660d24200a",
                    },
                  ],
                  uuid: "0f605d65-2fc5-436f-8e07-20ba5de7c4e9",
                },
              ],
              uuid: "8a80fbb4-4fce-4f50-bbea-150a6aa8a64b",
            },
            {
              componentName: "Section",
              componentProps: {
                style: {
                  minHeight: 100,
                  display: "flex",
                  justifyContent: "center",
                },
              },
              children: [],
              uuid: "b71a0212-7bb0-428d-a0f1-4229fadafcc7",
            },
          ],
        },
      ];
      var G = i(8255),
        q = i(7384);
      var J = {
        overview: function () {
          var e = E(r.useState(!0), 2),
            t = e[0],
            i = e[1],
            n = E(r.useState(0), 2),
            o = n[0],
            a = n[1];
          return r.createElement(
            "main",
            { className: "fly-birds-page div1" },
            r.createElement(
              T.Z,
              { xmDiyId: "gdb0viqrad", className: "section div2" },
              r.createElement(
                "div",
                { className: "div3" },
                r.createElement(N.Z, {
                  xmDiyId: "o65aevj6ba",
                  className: "image4",
                  src:
                    Y +
                    "m/redmi-buds-4-pro/f23f62fcc3e7651b9c8c930f2a693a6e.jpg",
                }),
                r.createElement(N.Z, {
                  xmDiyId: "9fje2jf7wd",
                  className: "image5",
                  src: "https://i02.appmifile.com/965_operatorx_operatorx_xm/22/09/2022/7d7e34f1f172d985e2d1c04e707d3822.png",
                }),
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "0sj37gjs8f",
                    className: "PCKV_text",
                    transKey: "slogan_1",
                  },
                  "The Sound You Want"
                )
              ),
              r.createElement(
                "div",
                { className: "div6" },
                r.createElement(
                  "div",
                  { className: "div7" },
                  r.createElement(
                    "div",
                    { className: "div8" },
                    r.createElement(N.Z, {
                      xmDiyId: "2h5xblx5bi",
                      className: "image9",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/e518e59b0af45eb07832690b20b8afd4.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div10" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "2yzw4zp25p",
                          className: "split_text1903",
                          transKey: "ksp_1",
                        },
                        "Hi-Res Audio Wireless Supported"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div11" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "wp4brlgyfx",
                          className: "split_text1904",
                          transKey: "ksp_2",
                        },
                        "Supports advanced LDAC audio codec*"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div12" },
                    r.createElement(N.Z, {
                      xmDiyId: "cftxeuzitj",
                      className: "image13",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/372f43cd07cb7f17ed416d8f90836ca3.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div14" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "w5o2d5gwi1",
                          className: "split_text1905",
                          transKey: "ksp_3",
                        },
                        "Hi-Fi sound quality"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div15" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "ye9gqjmhwb",
                          className: "split_text1906",
                          transKey: "ksp_4",
                        },
                        "Dual dynamic drivers"
                      )
                    )
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div16" },
                  r.createElement(
                    "div",
                    { className: "div17" },
                    r.createElement(N.Z, {
                      xmDiyId: "3dox8gpi6n",
                      className: "image18",
                      src: "https://i02.appmifile.com/520_operatorx_operatorx_xm/26/08/2022/6edd0c1da21f16e43e18b8f398d21c27.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div19" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "dntbkdpf5e",
                          className: "split_text1907",
                          transKey: "ksp_5",
                        },
                        "Immersive sound*"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div20" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "6usf72r57g",
                          className: "split_text1908",
                          transKey: "ksp_6",
                        },
                        "The ultimate immersive experience"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div21" },
                    r.createElement(N.Z, {
                      xmDiyId: "gfrrwsxra0",
                      className: "image22",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/34394a2b42f84febaf4a7e5e6c2b1ab9.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div23" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "8oa7anlpml",
                          className: "split_text1909",
                          transKey: "ksp_7",
                        },
                        "Up to 43dB active noise cancellation*"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div24" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "s1d7vgur7p",
                          className: "split_text1910",
                          transKey: "ksp_8",
                        },
                        "30-3000Hz wide frequency ANC*"
                      )
                    )
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div25" },
                  r.createElement(
                    "div",
                    { className: "div26" },
                    r.createElement(N.Z, {
                      xmDiyId: "kom0z13i4z",
                      className: "image27",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/a8db40a5af2773c78ba72a9ced7b65d6.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div28" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "b2y1o3j09y",
                          className: "split_text1911",
                          transKey: "ksp_9",
                        },
                        "Enhanced technology for reducing wind noise"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div29" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "gymmrom1hs",
                          className: "split_text1912",
                          transKey: "ksp_10",
                        },
                        "More immersive for outdoor sports"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div30" },
                    r.createElement(N.Z, {
                      xmDiyId: "0rvb8krgw8",
                      className: "image31",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/8c847996efe35f251630ea4fcb727b08.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div32" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "51pq6iy77o",
                          className: "split_text1913",
                          transKey: "ksp_11",
                        },
                        "Up to 36 hours",
                        r.createElement("br", null),
                        "ultra-long battery life*"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div33" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "kuu8qfdrk7",
                          className: "split_text1914",
                          transKey: "ksp_12",
                        },
                        "Up to 9 hours of listening on a single charge*"
                      )
                    )
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div34" },
                  r.createElement(
                    "div",
                    { className: "div35" },
                    r.createElement(N.Z, {
                      xmDiyId: "yffccaxniz",
                      className: "image36",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/669a5b8560a579a1fad0c35c02d360ea.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div37" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "5u58yauagj",
                          className: "split_text1915",
                          transKey: "ksp_13",
                        },
                        "Listen to up to 2 hours of music with a 5-minute charge*"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div38" },
                    r.createElement(N.Z, {
                      xmDiyId: "2xt83in9xo",
                      className: "image39",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/82db866fb7840ff8c483a7a92ff96d51.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div40" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "he8ir3sd5o",
                          className: "split_text1916",
                          transKey: "ksp_14",
                        },
                        "Dual device smart connectivity"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div41" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "uz4qkoobtf",
                          className: "split_text1917",
                          transKey: "ksp_15",
                        },
                        "Switch effortlessly between your smartphone and PC"
                      )
                    )
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div42" },
                  r.createElement(
                    "div",
                    { className: "div43" },
                    r.createElement(N.Z, {
                      xmDiyId: "npnrli7ihv",
                      className: "image44",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/5a1a9b90d74a4ba3235159635f03ca18.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div45" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "3zez92nw5b",
                          className: "split_text1918",
                          transKey: "ksp_16",
                        },
                        "3-microphone noise cancellation for calls"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div46" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "twtz4gimaq",
                          className: "split_text1919",
                          transKey: "ksp_17",
                        },
                        "Crystal-clear calls"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div47" },
                    r.createElement(N.Z, {
                      xmDiyId: "qt1uprqllo",
                      className: "image48",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/6c7d4bcb707f5d8237fb3bfd0928f0d1.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div49" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "xjgkz8xkm9",
                          className: "split_text1920",
                          transKey: "ksp_18",
                        },
                        "Ergonomic design"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div50" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "wg3y9lji3q",
                          className: "split_text1921",
                          transKey: "ksp_19",
                        },
                        "Comfortable fit"
                      )
                    )
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div51" },
                r.createElement(k.R, {
                  xmDiyId: "102ioduzta1",
                  src: "https://i02.appmifile.com/366_operatorx_operatorx_xm/25/08/2022/87613256c6353fdbdfef86be4a88d064.mp4",
                  isAutoplay: !1,
                  className: "video52",
                  isControls: !1,
                  playBtnImage:
                    "https://i02.appmifile.com/541_operatorx_operatorx_xm/23/08/2022/a89fec5fff0412e78b848bb27449d594.png",
                  poster:
                    "https://i02.appmifile.com/520_operatorx_operatorx_xm/23/08/2022/d579a5083f99bbaf2464e6c13754ed3e.png",
                })
              ),
              r.createElement(
                "div",
                { className: "div54" },
                r.createElement(N.Z, {
                  xmDiyId: "68b2ploxe7",
                  className: "image55",
                  src:
                    Y +
                    "m/redmi-buds-4-pro/18847aad127d02229d5fa95ac2cdefe5.jpg",
                }),
                r.createElement(
                  "div",
                  { className: "div56" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "mssszlfg2y",
                      className: "split_text1923",
                      transKey: "overview_1",
                    },
                    "Hi-Res Audio Wireless Supported"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div57" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "dwzljqtlgp",
                      className: "split_text1922",
                      transKey: "overview_2",
                    },
                    "Incredible sound"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div58" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "dspcuhdmkz",
                      className: "split_text1924",
                      transKey: "overview_3",
                    },
                    "A feast for your ears – Redmi Buds 4 Pro is certified by Hi-Res Audio Wireless and supports LDAC audio codec at transmission speeds of up to 990kbps, as well as audio resolutions of 96kHz/24bit and above."
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div59" },
                r.createElement(
                  "div",
                  { className: "div60" },
                  r.createElement(
                    "div",
                    { className: "div61" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "icldbry28u",
                        className: "split_text1932",
                        transKey: "overview_4",
                      },
                      "Hi-Fi sound quality"
                    )
                  ),
                  r.createElement(N.Z, {
                    xmDiyId: "pruy3k7k0n",
                    className: "image62",
                    src: "https://i02.appmifile.com/664_operatorx_operatorx_xm/23/08/2022/1b71bee047447568363f65d5ac2a9570.png",
                  })
                ),
                r.createElement(
                  "div",
                  { className: "div63" },
                  r.createElement(
                    "div",
                    { className: "div64" },
                    r.createElement(
                      "div",
                      { className: "div65" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "m4tuemfhf0",
                          className: "split_text1929",
                          transKey: "overview_5",
                        },
                        "Dual dynamic drivers"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div70" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "cats2jey8x",
                          className: "split_text1930",
                          transKey: "overview_6",
                        },
                        "Create your own personal sound system"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div71" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "jkd5vjfmgx",
                          className: "split_text1931",
                          transKey: "overview_7",
                        },
                        "Redmi Buds 4 Pro features an all-new dual dynamic driver system, which consists of a 10mm aluminium alloy diaphragm and a 6mm titanium diaphragm for treble frequencies. Together, the two drivers combine to deliver crystal-clear treble and rich bass in a wide range of genres."
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div68" },
                    r.createElement(N.Z, {
                      xmDiyId: "m0gfuolqrq",
                      className: "image69",
                      src: "https://i02.appmifile.com/567_operatorx_operatorx_xm/23/08/2022/0e7f8a58c1a51505843c2b4717f29bc6.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div66" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "gnf5t0dhxd",
                          className: "split_text1927",
                          transKey: "overview_8",
                        },
                        "10mm"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div67" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "aluewj7o2x",
                          className: "split_text1925",
                          transKey: "overview_9",
                        },
                        "aluminium alloy dynamic driver"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div72" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "pjhyc7yu52",
                          className: "split_text1928",
                          transKey: "overview_10",
                        },
                        "6mm"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div73" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "g5twflq8bm",
                          className: "split_text1926",
                          transKey: "overview_11",
                        },
                        "titanium dynamic driver for treble sounds"
                      )
                    )
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div74" },
                r.createElement(N.Z, {
                  xmDiyId: "x9tjpxhcz3",
                  className: "image75",
                  src: "https://i02.appmifile.com/26_operatorx_operatorx_xm/23/08/2022/2e10f57aa3074ed55c9a78ed3828ba22.png",
                }),
                r.createElement(
                  "div",
                  { className: "div76" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "vaon9ipgki",
                      className: "split_text1936",
                      transKey: "overview_12",
                    },
                    "Cinema-like listening experience"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div79" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "4fl1syw9in",
                      className: "split_text1933",
                      transKey: "overview_13",
                    },
                    "Immersive sound"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div80" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "a5wa2jt2uw",
                      className: "split_text1934",
                      transKey: "overview_14",
                    },
                    "For a live immersive ",
                    r.createElement("br", null),
                    "experience"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div81" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "ima5foczf6",
                      className: "split_text1935",
                      transKey: "overview_15",
                    },
                    "Redmi Buds 4 Pro features an all-new immersive sound system, which uses a Xiaomi proprietary HRTF sound algorithm to simulate real-life sound and a deliver a truly immersive experience when watching video, compatible with various audio ",
                    r.createElement("br", null),
                    "source and playback devices.*"
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div82" },
                r.createElement(
                  "div",
                  { className: "div83" },
                  r.createElement(
                    "div",
                    { className: "div84" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "4vs97usfnw",
                        className: "split_text1943",
                        transKey: "overview_16",
                      },
                      "Cutting-edge noise cancellation technology"
                    )
                  ),
                  r.createElement(N.Z, {
                    xmDiyId: "99rw0ixjxs",
                    className: "image85",
                    src: "https://i02.appmifile.com/9_operatorx_operatorx_xm/23/08/2022/83d22465f45aa64aaaf4b0316408c858.png",
                  })
                ),
                r.createElement(
                  "div",
                  { className: "div86" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "11d02aqm68",
                      className: "split_text1937",
                      transKey: "overview_17",
                    },
                    "Up to 43dB active noise cancellation"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div87" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "qpoi0mtvov",
                      className: "split_text1938",
                      transKey: "overview_18",
                    },
                    "Effectively reduce unwanted noise"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div88" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "zlhrhzi98q",
                      className: "split_text1939",
                      transKey: "overview_19",
                    },
                    "The earbuds can reduce noise by up to 43dB, blocking up to 99.3% of external noise*, allowing you to enjoy your music in peace and quiet."
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div89" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "mqfodf18vg",
                      className: "split_text1940",
                      transKey: "overview_20",
                    },
                    "Light noise cancellation"
                  )
                ),
                r.createElement(N.Z, {
                  xmDiyId: "puaxi5c4xj",
                  className: "image90",
                  src: "https://i02.appmifile.com/75_operatorx_operatorx_xm/25/08/2022/27e45d9e9718be5eb34a5f3b23f29015.png",
                }),
                r.createElement(
                  "div",
                  { className: "div91" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "45s19hwr7r",
                      className: "split_text1942",
                      transKey: "overview_21",
                    },
                    "Balanced noise cancellation"
                  )
                ),
                r.createElement(N.Z, {
                  xmDiyId: "puaxi5c4dj",
                  className: "image91",
                  src: "https://i02.appmifile.com/75_operatorx_operatorx_xm/25/08/2022/27e45d9e9718be5eb34a5f3b23f29015.png",
                }),
                r.createElement(
                  "div",
                  { className: "div92" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "rfmzjciwe6",
                      className: "split_text1941",
                      transKey: "overview_22",
                    },
                    "Deep noise cancellation"
                  )
                ),
                r.createElement(N.Z, {
                  xmDiyId: "jklh7mxdba",
                  className: "image93",
                  src: "https://i02.appmifile.com/981_operatorx_operatorx_xm/23/08/2022/9bf034f6b0a0f2eb4ba8f08064db5147.png",
                })
              ),
              r.createElement(
                "div",
                { className: "div94" },
                r.createElement(
                  "div",
                  { className: "div95" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "xaga0mmdpa",
                      className: "split_text1951",
                      transKey: "overview_24",
                    },
                    "AI adaptive ANC"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div96" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "6ppcw2xffa",
                      className: "split_text1950",
                      transKey: "overview_23",
                    },
                    "Intelligently switches between 3 ANC levels"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div97" },
                  r.createElement(
                    "div",
                    { className: "div98" },
                    r.createElement(N.Z, {
                      xmDiyId: "llr55bz9cz",
                      className: "image99",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/9a6ffbabfcc8ebd2862d6a8dc00ae740.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div100" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "6axz1r6zd5",
                          className: "split_text1945",
                          transKey: "overview_25",
                        },
                        "Balanced noise cancellation"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div101" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "uoyya9mk3q",
                          className: "split_text1944",
                          transKey: "overview_26",
                        },
                        "| Cafes, Parks"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div102" },
                    r.createElement(N.Z, {
                      xmDiyId: "cztswv0igm",
                      className: "image103",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/95d3101e680af4e769310a83cc5dd134.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div104" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "qiyejm68fp",
                          className: "split_text1947",
                          transKey: "overview_27",
                        },
                        "Deep noise cancellation"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div105" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "370nnl6pa9",
                          className: "split_text1946",
                          transKey: "overview_28",
                        },
                        "| Underground stations, Airports"
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div106" },
                    r.createElement(N.Z, {
                      xmDiyId: "6zbp0yso6y",
                      className: "image107",
                      src:
                        Y +
                        "m/redmi-buds-4-pro/9e9f1723a8f99c64a56945a9d36a362e.png",
                    }),
                    r.createElement(
                      "div",
                      { className: "div108" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "ewppf951r7",
                          className: "split_text1949",
                          transKey: "overview_29",
                        },
                        "Light noise cancellation"
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "div109" },
                      r.createElement(
                        F.Z,
                        {
                          xmDiyId: "bwtkay6jqo",
                          className: "split_text1948",
                          transKey: "overview_30",
                        },
                        "| Offices, Libraries"
                      )
                    )
                  )
                )
              )
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "8ri27i7t2w", className: "section div2-2" },
              r.createElement(
                "div",
                { className: "div3" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "mpvou5ts6s",
                    className: "split_text1826",
                    transKey: "overview_31",
                  },
                  "Dual transparency mode"
                )
              ),
              r.createElement(
                "div",
                { className: "div4" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ljj1m9hxai",
                    className: "split_text1827",
                    transKey: "overview_32",
                  },
                  "Listen to your surroundings and conversations"
                )
              ),
              r.createElement(
                "div",
                { className: "div5" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "aoerutoh6i",
                    className: "split_text1825",
                    transKey: "overview_33",
                  },
                  "In regular transparency mode, you can hear your surroundings without having to remove the earbuds. You can also switch to enhance voice mode when you need to talk to someone face to face."
                )
              ),
              r.createElement(
                "div",
                { className: "div6" },
                r.createElement(
                  "div",
                  { className: "div7" },
                  r.createElement(
                    "div",
                    { className: "div8" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "3cftply1av",
                        className: "split_text1828",
                        transKey: "overview_34",
                      },
                      "Regular transparency mode"
                    )
                  ),
                  r.createElement(N.Z, {
                    xmDiyId: "7s2t7dfrgl",
                    className: "image9",
                    src:
                      Y +
                      "m/redmi-buds-4-pro/c77fc0404432c02aab365e8143d8538a.png",
                  })
                ),
                r.createElement("div", { className: "spacer" }),
                r.createElement(
                  "div",
                  { className: "div10" },
                  r.createElement(
                    "div",
                    { className: "div11" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "nya05gly2h",
                        className: "split_text1829",
                        transKey: "overview_36",
                      },
                      "Enhance voice"
                    )
                  ),
                  r.createElement(N.Z, {
                    xmDiyId: "pwundzmh8a",
                    className: "image12",
                    src:
                      Y +
                      "m/redmi-buds-4-pro/1f0bee874894462779410b4479ff2457.png",
                  })
                )
              ),
              r.createElement(N.Z, {
                xmDiyId: "hcrxzx9kfz",
                className: "image13",
                src: "https://i02.appmifile.com/598_operatorx_operatorx_xm/26/08/2022/6d97acc7583f76c1a556b1305f2b0ad5.png",
              })
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "qiffjbguij", className: "section div14-2" },
              r.createElement(
                "div",
                { className: "div15" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "qq1hvmywao",
                    className: "split_text1831",
                    transKey: "overview_37",
                  },
                  "Innovative wind noise ",
                  r.createElement("br", null),
                  "reduction technology"
                )
              ),
              r.createElement(
                "div",
                { className: "div16" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "zgn4b59yvi",
                    className: "split_text1832",
                    transKey: "overview_38",
                  },
                  "Run to your heart's content and leave the wind behind you"
                )
              ),
              r.createElement(
                "div",
                { className: "div17" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "3oulzwmjb2",
                    className: "split_text1830",
                    transKey: "overview_39",
                  },
                  "Each earbud features a built-in metal wind shield to effectively reduce wind noise, as well as a proprietary wind noise reduction algorithm that automatically switches on when the wind reaches a certain ",
                  r.createElement("br", null),
                  "speed so that you can enjoy your outdoor ",
                  r.createElement("br", null),
                  "activities without being disturbed."
                )
              ),
              r.createElement(N.Z, {
                xmDiyId: "37tgolenv7",
                className: "image18",
                src:
                  Y + "m/redmi-buds-4-pro/292c1cb7b11dec6be9c4156e15fe9453.png",
              })
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "ar6w7snyvl", className: "section div19-2" },
              r.createElement(
                "div",
                { className: "div20" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ufn571psay",
                    className: "split_text1834",
                    transKey: "overview_40",
                  },
                  "3-microphone noise cancellation for calls"
                )
              ),
              r.createElement(
                "div",
                { className: "div21" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "8frougursc",
                    className: "split_text1835",
                    transKey: "overview_41",
                  },
                  "Crystal-clear call quality, wherever you are"
                )
              ),
              r.createElement(
                "div",
                { className: "div22" },
                r.createElement(N.Z, {
                  xmDiyId: "a8ohecpe6p",
                  className: "image23",
                  src: "https://i02.appmifile.com/511_operatorx_operatorx_xm/23/08/2022/4e282c753002e2994f840d08bf9eec72.png",
                }),
                r.createElement(
                  "div",
                  { className: "div24" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "wtikm9npdp",
                      className: "split_text1833",
                      transKey: "overview_42",
                    },
                    "Each of the three microphones has its own function and extracts voice sounds with precision to effectively filter out external noise. Call quality is further enhanced by means of a neural network noise reduction algorithm."
                  )
                )
              )
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "z1l6z31lpp", className: "section div28-2" },
              r.createElement(
                "div",
                { className: "div25" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "cj1mhwt7e6",
                    className: "split_text1840",
                    transKey: "overview_46",
                  },
                  "Up to 36 hours ultra-long battery life"
                )
              ),
              r.createElement(
                "div",
                { className: "div26" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "lzunvli5rg",
                    className: "split_text1841",
                    transKey: "overview_47",
                  },
                  "Run a marathon with your favourite music"
                )
              ),
              r.createElement(
                "div",
                { className: "div27" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "c51afe1g7n",
                    className: "split_text1839",
                    transKey: "overview_48",
                  },
                  "Listen to up to 9 hours of music on a single charge, or up to 36 hours when used with the charging case. And if you're in a hurry and forgot to recharge, the earbuds can play up to 2 hours of music after a quick 5-minute charge."
                )
              ),
              r.createElement(
                "div",
                { className: "div-con" },
                r.createElement(
                  "div",
                  { className: "div28" },
                  r.createElement(
                    "div",
                    { className: "div28_1" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "bwk9y1th97",
                        className: "split_text1842",
                        transKey: "overview_49",
                      },
                      "Up to 9"
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div28_2" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "no9xbsxp9v",
                        className: "split_text1843",
                        transKey: "overview_50",
                      },
                      "hours"
                    )
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div29" },
                  r.createElement(
                    "div",
                    { className: "div29_1" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "tz3nq2supy",
                        className: "split_text1845",
                        transKey: "overview_52",
                      },
                      "Up to 36"
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "div29_2" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "paxdxj0nhj",
                        className: "split_text1846",
                        transKey: "overview_53",
                      },
                      "hours"
                    )
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div32" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "36yivv4mbe",
                    className: "split_text1844",
                    transKey: "overview_51",
                  },
                  "Single charge"
                )
              ),
              r.createElement(
                "div",
                { className: "div33" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "4ja0ilo885",
                    className: "split_text1847",
                    transKey: "overview_54",
                  },
                  "Total battery life with case"
                )
              ),
              r.createElement(
                "div",
                { className: "div34" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "obvxeh9fpx",
                    className: "split_text1848",
                    transKey: "overview_56",
                  },
                  "5"
                ),
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "k8ta8ko4ur",
                    className: "split_text1849",
                    transKey: "overview_57",
                  },
                  "min"
                )
              ),
              r.createElement(
                "div",
                { className: "div36" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "8tnrkqv9zs",
                    className: "split_text1850",
                    transKey: "overview_55",
                  },
                  "Charging time for"
                )
              ),
              r.createElement(
                "div",
                { className: "div37" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "g9vi14oplo",
                    className: "split_text1851",
                    transKey: "overview_59",
                  },
                  "Up to 2"
                ),
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "7i9fj5kj0t",
                    className: "split_text1852",
                    transKey: "overview_60",
                  },
                  "hours"
                )
              ),
              r.createElement(
                "div",
                { className: "div39" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "3m9etk0014",
                    className: "split_text1853",
                    transKey: "overview_58",
                  },
                  "Music playback"
                )
              ),
              r.createElement(N.Z, {
                xmDiyId: "7u406vaj9m",
                className: "image28-2",
                src: "https://i02.appmifile.com/605_operatorx_operatorx_xm/23/08/2022/a57e980a180d3236865ce58b91b7322e.png",
              })
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "sd13pei70m", className: "div40-2" },
              r.createElement(N.Z, {
                xmDiyId: "38trvx0tfb",
                className: "image40",
                src:
                  Y + "m/redmi-buds-4-pro/278ae2c8077b10ae26442ab5888b84e5.png",
              }),
              r.createElement(
                "div",
                { className: "div41" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "d7j6t5r9xj",
                    className: "split_text1837",
                    transKey: "overview_61",
                  },
                  "Dual device smart ",
                  r.createElement("br", null),
                  "connectivity*"
                )
              ),
              r.createElement(
                "div",
                { className: "div42" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "idkm815nfm",
                    className: "split_text1838",
                    transKey: "overview_62",
                  },
                  "Switch effortlessly between your smartphone ",
                  r.createElement("br", null),
                  "and computer"
                )
              ),
              r.createElement(
                "div",
                { className: "div43" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "yty0e2b547",
                    className: "split_text1836",
                    transKey: "overview_63",
                  },
                  "The earbuds can connect to two Android, iOS or Windows devices at the same time, allowing you to use the same headset when you're in the office. On compatible MIUI devices, the MIUI Pop-up for Quick Pairing requests automatically appear when you open the charging case (with earbuds) near your phone.*"
                )
              ),
              r.createElement(N.Z, {
                xmDiyId: "mrodxx2fpg",
                className: "image40-2",
                src: "https://i02.appmifile.com/430_operatorx_operatorx_xm/23/08/2022/1e30a93b468cf3274cad15b99ff9afd8.png",
              })
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "q71zidk1f9", className: "section div44-2" },
              r.createElement(
                "div",
                { className: "div44" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "3in31pjqsi",
                    className: "split_text1855",
                    transKey: "overview_64",
                  },
                  "Touch control"
                )
              ),
              r.createElement(
                "div",
                { className: "div45" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "rtqkabnlhf",
                    className: "split_text1856",
                    transKey: "overview_65",
                  },
                  "Control music and switch modes with your fingertips"
                )
              ),
              r.createElement(
                "div",
                { className: "div46" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ewsqxqmfcw",
                    className: "split_text1854",
                    transKey: "overview_66",
                  },
                  "Each earbud is equipped with a sensor that allows you to pause music playback and switch modes with a short or long press."
                )
              ),
              r.createElement(N.Z, {
                xmDiyId: "pikuizozl8",
                className: "image47",
                src:
                  Y + "m/redmi-buds-4-pro/98154bb2f1ce01dad658ea54f6d22887.png",
              }),
              r.createElement(
                "div",
                { className: "div48" },
                r.createElement(N.Z, {
                  xmDiyId: "gp777lw7dq",
                  className: "image49",
                  src: "https://i02.appmifile.com/426_operatorx_operatorx_xm/24/08/2022/9a232eb5e69b362728cf6333f951a249.png",
                }),
                r.createElement(
                  "div",
                  { className: "div50" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "8go4jho4cg",
                      className: "split_text1857",
                      transKey: "overview_67",
                    },
                    "Touch area"
                  )
                )
              )
            ),
            r.createElement(
              T.Z,
              {
                xmDiyId: "k94r3g4xdi",
                className: "section div51-2",
                src: "https://i02.appmifile.com/574_operatorx_operatorx_xm/23/08/2022/d0cb96b52782febc841c77d48dd8f080.png",
              },
              r.createElement(
                "div",
                { className: "div53" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "58utru6641",
                    className: "split_text1859",
                    transKey: "overview_68",
                  },
                  "Ergonomic design"
                )
              ),
              r.createElement(
                "div",
                { className: "div54" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ry3rks7a08",
                    className: "split_text1860",
                    transKey: "overview_69",
                  },
                  "Comfortable fit"
                )
              ),
              r.createElement(
                "div",
                { className: "div55" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "h2huqmi4er",
                    className: "split_text1858",
                    transKey: "overview_70",
                  },
                  "Redmi Buds 4 Pro features an innovative and sleek design with curved edges. It is also ergonomically designed to reduce pressure in the ear canal, and weighes just around 5.0 grams to ensure a comfortable fit."
                )
              ),
              r.createElement(
                "div",
                { className: "slider-box" },
                r.createElement(C.Z, {
                  xmDiyId: "coz64epfkx",
                  className: "scroll-slider",
                  sliderSrc: [
                    "https://i02.appmifile.com/832_operatorx_operatorx_xm/25/08/2022/a0df62317f01930d3815d362e8eff5b4.png",
                    "https://i02.appmifile.com/833_operatorx_operatorx_xm/25/08/2022/04ad5d38d4637330c1ed6b7e6b918575.png",
                  ],
                  settings: {
                    autoplay: !0,
                    beforeChange: function (e, t) {
                      i(1 === e), a(t);
                    },
                  },
                  sliderIndex: o,
                })
              ),
              r.createElement(
                "div",
                { className: "div56" },
                r.createElement(
                  "div",
                  { className: "div58" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "ls564cwde4",
                      className: (t && "black-active") + " split_text1861",
                      transKey: "overview_72",
                      onClick: function () {
                        return a(0);
                      },
                    },
                    "Midnight Black"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div60" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "ngw610t65i",
                      className: (!t && "white-active") + " split_text1862",
                      transKey: "overview_71",
                      onClick: function () {
                        return a(1);
                      },
                    },
                    "Moon White"
                  )
                )
              )
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "oitrevlt1i", className: "section div61-2" },
              r.createElement(N.Z, {
                xmDiyId: "q2zik91hie",
                className: "image62",
                src:
                  Y + "m/redmi-buds-4-pro/a59fa02538e77927f0c6bebef4f7c87c.png",
              }),
              r.createElement(
                "div",
                { className: "div63" },
                r.createElement(
                  "div",
                  { className: "div64" },
                  r.createElement(N.Z, {
                    xmDiyId: "r3oqm06cxt",
                    className: "image65",
                    src: "https://i02.appmifile.com/420_operatorx_operatorx_xm/25/08/2022/334655e5c7a76701f4db73b6ef1d1172.png",
                  }),
                  r.createElement(
                    "div",
                    { className: "div66" },
                    r.createElement(
                      F.Z,
                      {
                        xmDiyId: "jkaxry05wg",
                        className: "split_text1866",
                        transKey: "overview_73",
                      },
                      "Xiaomi Earbuds*"
                    )
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div68" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "pnnzft3az8",
                    className: "split_text1865",
                    transKey: "overview_74",
                  },
                  "Easily customise your earbuds"
                )
              ),
              r.createElement(
                "div",
                { className: "div69" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "1ayapuopms",
                    className: "split_text1863",
                    transKey: "overview_75",
                  },
                  "Download the Xiaomi Earbuds App to adjust the noise cancellation and touch control settings for your Redmi Buds 4 Pro wireless earbuds. You're in control — adjust settings for optimal audio and install online firmware upgrades."
                )
              ),
              r.createElement(
                "div",
                { className: "div70" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "5kf370xzuj",
                    className: "split_text1864",
                    transKey: "overview_76",
                  },
                  "There are even more features for you to discover."
                )
              ),
              r.createElement(N.Z, {
                xmDiyId: "bciaq35ugc",
                className: "image67",
                src:
                  Y + "m/redmi-buds-4-pro/8b15b881c983371d48edad3b9edcabf6.png",
              })
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "33tsy6j82x", className: "section div71-2" },
              r.createElement(
                "div",
                { className: "div73" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "zf24ra0u7m",
                    className: "split_text1876",
                    transKey: "overview_77",
                  },
                  "Personalised and fun"
                )
              ),
              r.createElement(
                "div",
                { className: "div74" },
                r.createElement(N.Z, {
                  xmDiyId: "0po042zi2q",
                  className: "image75",
                  src:
                    Y +
                    "m/redmi-buds-4-pro/34fccd532cf50947939d2d12d9fdcc95.png",
                }),
                r.createElement(
                  "div",
                  { className: "div76" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "rjhff5maup",
                      className: "split_text1869",
                      transKey: "overview_78",
                    },
                    "IP54 dust and water-resistance*"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div77" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "0hypjkkxjk",
                      className: "split_text1867",
                      transKey: "overview_79",
                    },
                    "Ideal for workouts –"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div78" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "didvzspqns",
                      className: "split_text1868",
                      transKey: "overview_80",
                    },
                    "sweat-resistant design"
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div79" },
                r.createElement(N.Z, {
                  xmDiyId: "44a77x5jdp",
                  className: "image80",
                  src:
                    Y +
                    "m/redmi-buds-4-pro/4c91c954e68a2eacd60603aea6d98259.png",
                }),
                r.createElement(
                  "div",
                  { className: "div81" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "nwsozx8e2j",
                      className: "split_text1872",
                      transKey: "overview_81",
                    },
                    "In-ear detection*"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div82" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "i5h5v0mpnb",
                      className: "split_text1870",
                      transKey: "overview_82",
                    },
                    "Playback is paused automatically when you remove the earbuds from your ears,"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div83" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "z0uyeuuou3",
                      className: "split_text1871",
                      transKey: "overview_83",
                    },
                    "and resumes when you put them back in."
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div84" },
                r.createElement(N.Z, {
                  xmDiyId: "u439b1rdgz",
                  className: "image85",
                  src:
                    Y +
                    "m/redmi-buds-4-pro/00a6eb3ed253712511135ccaafe395eb.png",
                }),
                r.createElement(
                  "div",
                  { className: "div86" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "zgcmmzmmlu",
                      className: "split_text1875",
                      transKey: "overview_84",
                    },
                    "Find your earphones*"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div87" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "98ndmf7tmt",
                      className: "split_text1873",
                      transKey: "overview_85",
                    },
                    "Within the Bluetooth connection range,"
                  )
                ),
                r.createElement(
                  "div",
                  { className: "div88" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "lnm1i75ja6",
                      className: "split_text1874",
                      transKey: "overview_86",
                    },
                    "you can use the Xiaomi Earbuds App to locate your earbuds by playing a sound through either one."
                  )
                )
              )
            ),
            r.createElement(
              T.Z,
              { xmDiyId: "p7rzoclrqc", className: "section div89-2" },
              r.createElement(
                "div",
                { className: "div90" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "hno6h7o12f",
                    className: "split_text1877",
                    transKey: "note_1",
                  },
                  "*The images on this page are for illustration purposes only and may not be the exact representation of the product. Product parameters are for reference only. Some product parameters may vary due to external factors such as environment and differences in smartphone systems. Please refer to the actual product for details."
                )
              ),
              r.createElement(
                "div",
                { className: "div91" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "wocb4l0xgk",
                    className: "split_text1878",
                    transKey: "note_2",
                  },
                  "*Noise cancellation test carried out by the manufacturer. Actual results may vary depending on usage conditions. Touching and holding either earbud only enables switching between ANC and Transparency modes by default. ANC and transparency mode settings available only on Xiaomi Earbuds app."
                )
              ),
              r.createElement(
                "div",
                { className: "div92" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "336j5lxwkk",
                    className: "split_text1879",
                    transKey: "note_3",
                  },
                  "*To experience Hi-Res Audio and LDAC at 990kbps, please make sure LDAC has been activated on compatible Android™ OS smartphones with correct bitrate selection with Immersive sound off."
                )
              ),
              r.createElement(
                "div",
                { className: "div93" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ovaghs4h6c",
                    className: "split_text1880",
                    transKey: "note_4",
                  },
                  "*Immersive sound is applicable to music and videos in apps that support this function. Immersive sound is switched off as default, settings available only on Xiaomi Earbuds app. The use of LDAC audio codec and immersive sound are mutually exclusive."
                )
              ),
              r.createElement(
                "div",
                { className: "div94" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ucbwpipu9s",
                    className: "split_text1881",
                    transKey: "note_5",
                  },
                  "*You can find your earphones via sound on Xiaomi Earbuds app. The earbuds do not support this function when placed in the charging case. According to Xiaomi internal lab data, when searching for your earbuds through via sound within a close range, the distance between the phone and the earbuds should be within 10 meters in a quiet, accessible environment. The earbuds and phone should be connected via Bluetooth. Actual distances may vary depending on environmental conditions."
                )
              ),
              r.createElement(
                "div",
                { className: "div95" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "iu4rpftm72",
                    className: "split_text1882",
                    transKey: "note_6",
                  },
                  "*IP54 dust and water-resistant test. According to the GB/T 4208-2017. Enclosure Protection Rating (IP Code), it passed the test conducted by Suzhou Institute of Product Quality Supervision and Inspection. The test report no. is WPHE220067. The test result showed that it is in compliance with the GB/T 4208-2017 standard. IP54 rating applies to the earbuds themselves, not the earbud charging case. Please do not use your earbuds around hot water, your earbuds cannot be used when bathing or showering. Please try to avoid using your earbuds during strenuous exercise, sweat during exercise may cause damage to the device. This product is splash-proof, water-resistant and dust-resistant at the time of purchase, however, these properties are not permanent and may diminish over time with everyday wear and tear. Your warranty does not cover damage caused to your device by immersion in liquid."
                )
              ),
              r.createElement(
                "div",
                { className: "div96" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "ok4qno82lm",
                    className: "split_text1883",
                    transKey: "note_7",
                  },
                  "*Battery life and fast charging test conditions: Connect to Xiaomi 12 Pro, the earbuds' battery level is 100%, volume of the earbuds is adjusted to 50%, the Bluetooth encoding mode is AAC, and the ANC feature, transparency mode, Immersive sound and Dual-device connection are turned off through the Xiaomi Earbuds app. Test item: Fully discharge the Redmi Buds 4 Pro battery while playing audio until either earbud stops playing. Ensure that the charging port is free of liquid and foreign objects before charging. Earbud charging and battery life data was retrieved from internal test carried out by the manufacturer. Actual hours of use may vary depending on usage condition, charging level and environmental factors."
                )
              ),
              r.createElement(
                "div",
                { className: "div97" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "l08q8w1yn4",
                    className: "split_text1884",
                    transKey: "note_13",
                  },
                  "*5 minutes fast charging requires the battery of the charging case to be at 30% or above."
                )
              ),
              r.createElement(
                "div",
                { className: "div98" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "7xe6d6dzvf",
                    className: "split_text1885",
                    transKey: "note_8",
                  },
                  "*Dual-device connectivity is turned on as default, experience may vary depending on the device. Please download Xiaomi Earbuds app to switch off. 3rd party computer applications are required to support synchronous pausing or resuming when answering or ending phone calls. Feature name may differ from actual settings."
                )
              ),
              r.createElement(
                "div",
                { className: "div99" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "21l4e318q5",
                    className: "split_text1886",
                    transKey: "note_9",
                  },
                  "*Gesture settings and in-ear detection are only available on Xiaomi Earbuds app."
                )
              ),
              r.createElement(
                "div",
                { className: "div100" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "cpx1x4tucp",
                    className: "split_text1887",
                    transKey: "note_10",
                  },
                  "*Xiaomi Earbuds app is available for download on Google Play store. Xiaomi Earbuds app is not available for iOS devices."
                )
              ),
              r.createElement(
                "div",
                { className: "div101" },
                r.createElement(
                  "div",
                  { className: "text-container-1589" },
                  r.createElement(
                    F.Z,
                    {
                      xmDiyId: "c2bguk1qsr",
                      className: "split_text1888",
                      transKey: "note_11",
                    },
                    "*Only Xiaomi, Redmi devices with the latest MIUI versions support MIUI Pop-up for Quick Pairing. Compatible models: POCO F4 GT 、Xiaomi 12 Pro、Xiaomi 12、Redmi Note 11 Pro、 Redmi Note 11S、Redmi Note 11、Redmi Note 11 Pro 5G."
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "div102" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "psnyomchzv",
                    className: "split_text1901",
                    transKey: "note_12",
                  },
                  "*The Bluetooth® word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Xiaomi inc. is under license. Other trademarks and trade names are those of their respective owners."
                )
              ),
              r.createElement(
                "div",
                { className: "div103" },
                r.createElement(
                  F.Z,
                  {
                    xmDiyId: "capxd1xquj",
                    className: "split_text1902",
                    transKey: "note_14",
                  },
                  "*To enjoy Dual device connectivity between two Xiaomi/Redmi smartphone devices, please switch on the function via Xiaomi Earbuds App on one smartphone only - this feature will operate via traditional Bluetooth connection."
                )
              )
            )
          );
        },
        specs: function () {
          return r.createElement(
            "div",
            { className: "specs-con" },
            ((e = "m"),
            (t = "specs"),
            K.map(function (r) {
              return W({
                componentName: r.componentName,
                componentProps: r.componentProps,
                uuid: r.uuid,
                children: r.children,
                platform: e,
                pageName: t,
                sectionConfig: i,
              });
            }))
          );
          var e, t, i;
        },
        layout: function (e) {
          var t,
            i = e.productName,
            n = e.platform,
            o = e.children,
            a =
              (null === (t = window.__PRODUCT_DATA__) || void 0 === t
                ? void 0
                : t.page) || "";
          return r.createElement(
            G.Z,
            { productName: i, pageName: a, platform: n },
            r.createElement(q.Z, {
              xmDiyId: "5w5rvv40ha0",
              productName: i,
              platform: n,
            }),
            o
          );
        },
      };
      !(function (e, t) {
        (0, n.hydrate)(
          r.createElement(S, { productConfig: e, pageMap: t }),
          document.getElementById("root-product")
        );
      })(_(), J);
    },
    9306: (e, t, i) => {
      var r = i(5461).defaultRoutes;
      e.exports = {
        productName: "redmi-buds-4-pro",
        platform: "mobile",
        routes: r,
      };
    },
    6970: (e, t, i) => {
      "use strict";
      i.d(t, { c: () => u });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = i(1848),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = (0, n.o)(d),
        l = (0, r.createContext)(s);
      function u(e) {
        var t = e.productConfig,
          i = e.isServiceAutoFetch,
          n = e.children,
          u = c((0, r.useState)(s), 2),
          m = u[0],
          p = u[1],
          f = t.local,
          h = t.platform,
          y = t.id;
        function g(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: d(t || {}, n), errMsg: i, errNo: r };
        }
        var b = {
          method: "POST",
          url: (0, a.scmConfig)(f).goSite + "/comment/glist",
          basicParams: { from: "pc" === h ? "pc" : "mobile" },
          params: {
            pageindex: 1,
            orderby: 0,
            product_id: y,
            star: 0,
            showimg: 0,
            type: 0,
          },
          withCredentials: !0,
          retryOptions: {
            maxRetryAttempts: 5,
            scalingDuration: 5e3,
            excludedErrorCodes: [2004007],
          },
        };
        return r.createElement(
          o.h,
          {
            context: l,
            setState: p,
            defaultValue: s,
            adapterError: function (e) {
              return g(e);
            },
            adapter: g,
            value: m,
            nationConfig: t,
            isAutoFetch: !1 !== i,
            ajaxConfig: b,
          },
          n
        );
      }
      function d(e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = null),
          {
            pageIndex: e.page_index || 1,
            pageTotal: e.page_total || 0,
            comments: m(e.comments || []),
            commentDetailCount: f(e.comment_detail_count || {}),
          }
        );
      }
      function m(e) {
        return (
          void 0 === e && (e = []),
          (e || []).map(function (e) {
            return {
              addTime: e.add_time || "0",
              additionalAddTime: e.additional_add_time || "",
              additionalCommentContent: e.additional_comment_content || "",
              additionalCommentImages: e.additional_comment_images || [],
              additionalCommentVideo: e.additional_comment_video || [],
              commentContent: e.comment_content || "",
              afterDays: e.after_days || "",
              canAddComment: e.can_add_comment || !1,
              commentId: e.comment_id || "",
              commentImages: e.comment_images || [],
              commentTitle: e.comment_title || "",
              commentVideo: e.comment_video || [],
              downNum: e.down_num || "0",
              goodsName: e.goods_name || "",
              specValue: e.spec_value || "",
              isAnonymous: e.is_anonymous || "0",
              orderId: e.order_id || "",
              orderItemId: e.order_item_id || "",
              pmsCommodityId: e.pms_commodity_id || "",
              pmsGoodsId: e.pms_goods_id || "",
              pmsProductId: e.pms_product_id || "",
              productTag: e.product_tag || "",
              replyContent: e.reply_content || "",
              replyTime: e.reply_time || "0",
              replyUpNum: e.reply_up_num || "0",
              totalGrade: e.total_grade || "5",
              upNum: e.up_num || "0",
              userAvatar: e.user_avatar || "",
              userId: e.user_id || "",
              userName: e.user_name || "",
              userReplyNum: e.user_reply_num || 0,
              commentNum: e.comment_num || 0,
              userUpNum: e.user_up_num || 0,
              recentComments: e.recent_comments || "",
              createTime: e.create_time || "",
              userReplys: p(e.user_replys || []),
              userDetail: h(e.user_detail || {}),
              upStat: e.up_stat || !1,
              downStat: e.down_stat || !1,
              customerStat: e.customer_stat || !1,
            };
          })
        );
      }
      function p(e) {
        return (
          void 0 === e && (e = []),
          (e || []).map(function (e) {
            return {
              commentId: e.comment_id || 0,
              isAnonymous: e.is_anonymous || "0",
              replyContent: e.reply_content || "",
              replyId: e.reply_id || 0,
              replyTime: e.reply_time || "",
              userAvatar: e.user_avatar || "",
              userId: e.user_id || "",
              userName: e.user_name || "",
            };
          })
        );
      }
      function f(e) {
        return {
          additionalComment: e.additional_comment || 0,
          allComment: e.all_comment || 0,
          imageComment: e.image_comment || 0,
          videoComment: e.video_comment || 0,
        };
      }
      function h(e) {
        return {
          isAnonymous: e.is_anonymous || "",
          userAvatar: e.user_avatar || "",
          nickName: e.nick_name || "",
          createTime: e.create_time || "",
          commentNum: e.comment_num || 0,
          replyNum: e.reply_num || 0,
          upNum: e.up_num || 0,
          downNum: e.down_num || 0,
          recentComments: y(e.recent_comments || {}),
        };
      }
      function y(e) {
        return { commentId: e.comment_id || 0, goodsName: e.goods_name || "" };
      }
    },
    9076: (e, t, i) => {
      "use strict";
      i.d(t, { j: () => u, D: () => m });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = i(1848),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = (0, n.o)(d),
        l = (0, r.createContext)(s);
      function u(e) {
        var t,
          i = e.productConfig,
          n = e.isServiceAutoFetch,
          u = e.children,
          m = c((0, r.useState)(s), 2),
          p = m[0],
          f = m[1],
          h = i.local;
        function y(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: d(t), errMsg: i || "", errNo: r || 0 };
        }
        var g = {
          url:
            (null === (t = (0, a.scmConfig)(h)) || void 0 === t
              ? void 0
              : t.goSite) + "/base/urlversion/mobile/buy/select",
          method: "GET",
          withCredentials: !1,
        };
        return r.createElement(
          o.h,
          {
            context: l,
            setState: f,
            defaultValue: s,
            adapterError: function (e) {
              return y(e);
            },
            adapter: y,
            value: p,
            nationConfig: i,
            isAutoFetch: !1 !== n,
            ajaxConfig: g,
          },
          u
        );
      }
      function d(e) {
        return "object" == typeof e ? "" : e;
      }
      var m = l;
    },
    843: (e, t, i) => {
      "use strict";
      i.d(t, { d: () => u, g: () => m });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = i(1848),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = (0, n.o)(d),
        l = (0, r.createContext)(s);
      function u(e) {
        var t,
          i = e.productConfig,
          n = e.isServiceAutoFetch,
          u = e.children,
          m = c((0, r.useState)(s), 2),
          p = m[0],
          f = m[1],
          h = i.local;
        function y(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: d(t), errMsg: i || "", errNo: r || 0 };
        }
        var g = {
          url:
            (null === (t = (0, a.scmConfig)(h)) || void 0 === t
              ? void 0
              : t.goSite) + "/base/urlversion/pc/v4/buy-product-channel",
          method: "GET",
          withCredentials: !1,
        };
        return r.createElement(
          o.h,
          {
            context: l,
            setState: f,
            defaultValue: s,
            adapterError: function (e) {
              return y(e);
            },
            adapter: y,
            value: p,
            nationConfig: i,
            isAutoFetch: !1 !== n,
            ajaxConfig: g,
          },
          u
        );
      }
      function d(e) {
        return "string" != typeof e ? "" : e;
      }
      var m = l;
    },
    8386: (e, t, i) => {
      "use strict";
      i.d(t, { t: () => u, z: () => m });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = i(1848),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = (0, n.o)(d),
        l = (0, r.createContext)(s);
      function u(e) {
        var t,
          i = e.productConfig,
          n = e.isServiceAutoFetch,
          u = e.children,
          m = c((0, r.useState)(s), 2),
          p = m[0],
          f = m[1],
          h = i.local;
        function y(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: d(t), errMsg: i || "", errNo: r || 0 };
        }
        var g = {
          url:
            (null === (t = (0, a.scmConfig)(h)) || void 0 === t
              ? void 0
              : t.goSite) + "/base/urlversion/pc/v4/buy-product",
          method: "GET",
          withCredentials: !1,
        };
        return r.createElement(
          o.h,
          {
            context: l,
            setState: f,
            defaultValue: s,
            adapterError: function (e) {
              return y(e);
            },
            adapter: y,
            value: p,
            nationConfig: i,
            isAutoFetch: !1 !== n,
            ajaxConfig: g,
          },
          u
        );
      }
      function d(e) {
        return "string" != typeof e ? "" : e;
      }
      var m = l;
    },
    7123: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => l, O: () => d });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        c = (0, n.o)(u),
        s = (0, r.createContext)(c);
      function l(e) {
        var t = e.productConfig,
          i = e.isServiceAutoFetch,
          n = e.children,
          l = a((0, r.useState)(c), 2),
          d = l[0],
          m = l[1];
        function p(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return {
            data: u(t && t.length ? t[0] : {}),
            errMsg: i || "",
            errNo: r || 0,
          };
        }
        var f = { url: "", method: "GET", withCredentials: !1 };
        return r.createElement(
          o.h,
          {
            context: s,
            setState: m,
            defaultValue: c,
            adapterError: function (e) {
              return p(e);
            },
            adapter: p,
            value: d,
            nationConfig: t,
            isAutoFetch: !1 !== i,
            ajaxConfig: f,
          },
          n
        );
      }
      function u(e) {
        var t, i, r, n;
        void 0 === e && (e = {});
        var o = (null === (t = null == e ? void 0 : e.energy) || void 0 === t
          ? void 0
          : t[0]) || {
          product_energy: "",
          product_energy_info: "",
          energy_image: "",
          energy_info: "",
        };
        return {
          productId: e.productId || 0,
          productName: e.productName || "",
          salePrice:
            (null === (i = e.marketPrice) || void 0 === i
              ? void 0
              : i.s_price.value) || "",
          marketPrice:
            (null === (r = e.marketPrice) || void 0 === r
              ? void 0
              : r.m_price.value) || "",
          from:
            (null === (n = e.marketPrice) || void 0 === n
              ? void 0
              : n.s_price.name) || "",
          priceLabel: e.priceLabel || "",
          product_energy: o.product_energy,
          product_energy_info: o.product_energy_info,
          energy_image: o.energy_image,
          energy_info: o.energy_info,
        };
      }
      var d = s;
    },
    9806: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => u });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = i(1848),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = (0, n.o)(d),
        l = (0, r.createContext)(s);
      function u(e) {
        var t,
          i = e.productConfig,
          n = e.isServiceAutoFetch,
          u = e.children,
          m = c((0, r.useState)(s), 2),
          p = m[0],
          f = m[1],
          h = i.local,
          y = i.platform;
        function g(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: d(t), errMsg: i || "", errNo: r || 0 };
        }
        var b = {
          url:
            (null === (t = (0, a.scmConfig)(h)) || void 0 === t
              ? void 0
              : t.goSite) +
            "/base/urlversion/" +
            ("pc" === y ? "pc" : "mobile") +
            "/review",
          method: "GET",
          withCredentials: !1,
        };
        return r.createElement(
          o.h,
          {
            context: l,
            setState: f,
            defaultValue: s,
            adapterError: function (e) {
              return g(e);
            },
            adapter: g,
            value: p,
            nationConfig: i,
            isAutoFetch: !1 !== n,
            ajaxConfig: b,
          },
          u
        );
      }
      function d(e) {
        return "string" != typeof e ? "" : e;
      }
    },
    1214: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => u, C: () => m });
      var r = i(7294),
        n = i(6607),
        o = i(3143),
        a = i(1848),
        c = function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            n,
            o = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
        s = (0, n.o)(d),
        l = (0, r.createContext)(s);
      function u(e) {
        var t,
          i = e.productConfig,
          n = e.isServiceAutoFetch,
          u = e.children,
          m = c((0, r.useState)(s), 2),
          p = m[0],
          f = m[1],
          h = i.local;
        function y(e) {
          var t = e.data,
            i = e.errmsg,
            r = e.errno;
          return { data: d(t || {}), errMsg: i || "", errNo: r || 0 };
        }
        var g = {
          url:
            (null === (t = (0, a.scmConfig)(h)) || void 0 === t
              ? void 0
              : t.goSite) + "/comment/count",
          method: "GET",
          withCredentials: !0,
        };
        return r.createElement(
          o.h,
          {
            context: l,
            setState: f,
            defaultValue: s,
            adapterError: function (e) {
              return y(e);
            },
            adapter: y,
            value: p,
            nationConfig: i,
            isAutoFetch: !1 !== n,
            ajaxConfig: g,
          },
          u
        );
      }
      function d(e) {
        return (
          void 0 === e && (e = {}),
          { count: e.count || 0, count_text: e.count_text || "" }
        );
      }
      var m = l;
    },
    3972: (e, t, i) => {
      "use strict";
      i.d(t, { H: () => l });
      var r = i(7294),
        n = i(6607),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        a = (0, n.o)(s),
        c = (0, r.createContext)(a);
      function s(e) {
        return void 0 === e && (e = {}), o(o({}, e), { data: e.data || {} });
      }
      var l = c;
    },
    2776: (e, t, i) => {
      "use strict";
      i.d(t, { z: () => l });
      var r = i(7294),
        n = i(6607),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        a = (0, n.o)(s),
        c = (0, r.createContext)(a);
      function s(e) {
        return void 0 === e && (e = {}), o(o({}, e), { data: e.data || {} });
      }
      var l = c;
    },
    9493: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => r });
      const r = function () {
        var e,
          t = {};
        return (
          window.__PRELOADED_STATE__ && (t = window.__PRELOADED_STATE__),
          {
            url: t.url,
            platform: t.platform,
            pageData: JSON.parse(
              (null === (e = t.pagedata) || void 0 === e ? void 0 : e.data) ||
                "{}"
            ),
            local: t.app_local,
            tag: t.tag,
          }
        );
      };
    },
    7788: (e, t, i) => {
      "use strict";
      i.d(t, { zG: () => n, ud: () => o, b5: () => a });
      var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        n = {
          default: {
            b: 21,
            e: 2845,
            header: { c: 4, e: 3087 },
            footer: { c: 3, e: 3086 },
          },
          overview: {
            b: 21,
            e: 2845,
            header: { c: 4, e: 3087 },
            footer: { c: 3, e: 3086 },
          },
          specs: {
            b: 22,
            e: 2848,
            header: { c: 2, e: 3089 },
            footer: { c: 1, e: 3088 },
          },
          review: {
            b: 23,
            e: 2849,
            header: { c: 1, e: 3092 },
            footer: { c: 2, e: 3090 },
          },
          faq: {
            b: 24,
            e: 2850,
            header: { c: 1, e: 3093 },
            footer: { c: 2, e: 3094 },
          },
          gallery: {
            b: 25,
            e: 2851,
            header: { c: 1, e: 3095 },
            footer: { c: 2, e: 3096 },
          },
          feature: {
            b: 26,
            e: 2852,
            header: { c: 1, e: 3097 },
            footer: { c: 2, e: 3098 },
          },
          filter: {
            b: 27,
            e: 2853,
            header: { c: 2, e: 3099 },
            footer: { c: 1, e: 3100 },
          },
          horizon: {
            b: 54,
            e: 5219,
            header: { c: 1, e: 5220 },
            footer: { c: 2, e: 5222 },
          },
        },
        o = {
          tip: { b: 0, c: 0, d: 0, e: 0 },
          tag: "",
          productId: "",
          viewTipDisabledB: [21, 22, 23, 24, 25, 26, 27, 54],
          viewTipEnabledE: [
            3086, 3087, 3088, 3089, 3090, 3092, 3093, 3094, 3095, 3096, 3097,
            3098, 3099, 3100, 5220, 5222,
          ],
        },
        a = function (e, t) {
          if (!e) return t;
          var i = t.tip,
            n = t.viewTipDisabledB,
            o = void 0 === n ? [] : n,
            a = t.viewTipEnabledE,
            c = void 0 === a ? [] : a,
            s = r(r({}, i), e.tip || {});
          return (
            o.length && o.push(e.viewTipDisabledB),
            c.length && c.push(e.viewTipEnabledE),
            r(r(r({}, t), e), {
              tip: s,
              viewTipDisabledB: o,
              viewTipEnabledE: c,
            })
          );
        };
    },
    655: (e, t, i) => {
      "use strict";
      i.d(t, { ZT: () => n, CR: () => o });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
          })(e, t);
      };
      function n(e, t) {
        function i() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((i.prototype = t.prototype), new i()));
      }
      function o(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r,
          n,
          o = i.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            r && !r.done && (i = o.return) && i.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return a;
      }
    },
    2473: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
    2482: () => {},
  },
  (e) => {
    "use strict";
    e.O(0, [333, 212, 354, 715], () => {
      return (t = 259), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
