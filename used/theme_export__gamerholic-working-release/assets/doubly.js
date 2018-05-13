function loadJqueryGrizzly() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var data = xhr.responseText;
            jQueryGrizzly = data.replace(/jQuery/g, 'jQueryGrizzly');
            eval(jQueryGrizzly);
            if (typeof jQuery !== 'undefined') {
                $ = jQuery.noConflict();
            }
        }
    };
    xhr.open('GET', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', false);
    xhr.send(null);
}
var forceJqueryLoad = false;
if (typeof jQuery == 'undefined' || forceJqueryLoad) {
    loadJqueryGrizzly();
} else {
    var vernums = jQuery.fn.jquery.split('.');
    if ((parseInt(vernums[0]) == 1 && parseInt(vernums[1]) >= 7) || parseInt(vernums[0]) > 1) {
        var jQueryGrizzly = jQuery;
    } else {
        loadJqueryGrizzly();
    }
}
var DoublyGlobalCurrency, catchXHR = true;
if (typeof CurrenciesJSON === 'undefined') {
    var CurrenciesJSON = '';
    jQueryGrizzly.get('https://init.grizzlyapps.com/9e32c84f0db4f7b1eb40c32bdb0bdea9', function(data) {
        if (data == '') {
            CurrenciesJSON = 'forbidden';
            return false;
        }
        CurrenciesJSON = data.replace('Currency', 'DoublyCurrency');
        eval(CurrenciesJSON);
        var spanClass = 'money',
            cookieName = 'currency1480030166',
            countryCookieName = 'country1480030166'; /* JavaScript Cookie v2.0.4 * https://github.com/js-cookie/js-cookie * Copyright 2006, 2015 Klaus Hartl & Fagner Brack * Released under the MIT license */
        ! function(e) {
            var n = window.Cookies,
                t = window.Cookies = e();
            t.noConflict = function() {
                return window.Cookies = n, t
            }
        }(function() {
            function e() {
                for (var e = 0, n = {}; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var o in t) n[o] = t[o]
                }
                return n
            }

            function n(t) {
                function o(n, r, i) {
                    var c;
                    if (arguments.length > 1) {
                        if (i = e({
                                path: "/"
                            }, o.defaults, i), "number" == typeof i.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires), i.expires = s
                        }
                        try {
                            c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                        } catch (a) {}
                        return r = t.write ? t.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", r, i.expires && "; expires=" + i.expires.toUTCString(), i.path && "; path=" + i.path, i.domain && "; domain=" + i.domain, i.secure ? "; secure" : ""].join("")
                    }
                    n || (c = {});
                    for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                        var f = p[u].split("="),
                            l = f[0].replace(d, decodeURIComponent),
                            m = f.slice(1).join("=");
                        '"' === m.charAt(0) && (m = m.slice(1, -1));
                        try {
                            if (m = t.read ? t.read(m, l) : t(m, l) || m.replace(d, decodeURIComponent), this.json) try {
                                m = JSON.parse(m)
                            } catch (a) {}
                            if (n === l) {
                                c = m;
                                break
                            }
                            n || (c[l] = m)
                        } catch (a) {}
                    }
                    return c
                }
                return o.get = o.set = o, o.getJSON = function() {
                    return o.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, o.defaults = {}, o.remove = function(n, t) {
                    o(n, "", e(t, {
                        expires: -1
                    }))
                }, o.withConverter = n, o
            }
            return n(function() {})
        }); /* Currency tools * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com) * Licensed under the MIT license: * http://www.opensource.org/licenses/mit-license.php */
        if (typeof Country === "undefined") {
            var Country = {};
        }
        Country.cookie = {
            configuration: {
                expires: 365,
                path: "/",
                domain: window.location.hostname
            },
            name: countryCookieName,
            write: function(country) {
                Cookies.set(this.name, country, this.configuration);
            },
            read: function() {
                return Cookies.get(this.name);
            },
            destroy: function() {
                Cookies.remove(this.name, this.configuration);
            }
        };
        if (typeof DoublyCurrency === "undefined") {
            var DoublyCurrency = {};
        }
        DoublyCurrency.cookie = {
            configuration: {
                expires: 365,
                path: "/",
                domain: window.location.hostname
            },
            name: cookieName,
            write: function(currency) {
                Cookies.set(this.name, currency, this.configuration)
            },
            read: function() {
                return Cookies.get(this.name)
            },
            destroy: function() {
                Cookies.remove(this.name, this.configuration)
            }
        };
        DoublyCurrency.moneyFormats = {
            USD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} USD"
            },
            EUR: {
                money_format: "&euro;{{amount}}",
                money_with_currency_format: "&euro;{{amount}} EUR"
            },
            GBP: {
                money_format: "&pound;{{amount}}",
                money_with_currency_format: "&pound;{{amount}} GBP"
            },
            CAD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} CAD"
            },
            ALL: {
                money_format: "Lek {{amount}}",
                money_with_currency_format: "Lek {{amount}} ALL"
            },
            DZD: {
                money_format: "DA {{amount}}",
                money_with_currency_format: "DA {{amount}} DZD"
            },
            AOA: {
                money_format: "Kz{{amount}}",
                money_with_currency_format: "Kz{{amount}} AOA"
            },
            ARS: {
                money_format: "${{amount_with_comma_separator}}",
                money_with_currency_format: "${{amount_with_comma_separator}} ARS"
            },
            AMD: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} AMD"
            },
            AWG: {
                money_format: "Afl{{amount}}",
                money_with_currency_format: "Afl{{amount}} AWG"
            },
            AUD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} AUD"
            },
            BBD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} Bds"
            },
            AZN: {
                money_format: "m.{{amount}}",
                money_with_currency_format: "m.{{amount}} AZN"
            },
            BDT: {
                money_format: "Tk {{amount}}",
                money_with_currency_format: "Tk {{amount}} BDT"
            },
            BSD: {
                money_format: "BS${{amount}}",
                money_with_currency_format: "BS${{amount}} BSD"
            },
            BHD: {
                money_format: "{{amount}} BD",
                money_with_currency_format: "{{amount}} BHD"
            },
            BYN: {
                money_format: "Br {{amount}}",
                money_with_currency_format: "Br {{amount}} BYN"
            },
            BZD: {
                money_format: "BZ${{amount}}",
                money_with_currency_format: "BZ${{amount}} BZD"
            },
            BTN: {
                money_format: "Nu {{amount}}",
                money_with_currency_format: "Nu {{amount}} BTN"
            },
            BAM: {
                money_format: "KM {{amount_with_comma_separator}}",
                money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
            },
            BRL: {
                money_format: "R$ {{amount_with_comma_separator}}",
                money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
            },
            BOB: {
                money_format: "Bs{{amount_with_comma_separator}}",
                money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
            },
            BWP: {
                money_format: "P{{amount}}",
                money_with_currency_format: "P{{amount}} BWP"
            },
            BND: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} BND"
            },
            BGN: {
                money_format: "{{amount}} лв",
                money_with_currency_format: "{{amount}} лв BGN"
            },
            MMK: {
                money_format: "K{{amount}}",
                money_with_currency_format: "K{{amount}} MMK"
            },
            KHR: {
                money_format: "KHR{{amount}}",
                money_with_currency_format: "KHR{{amount}}"
            },
            KYD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} KYD"
            },
            XAF: {
                money_format: "FCFA{{amount}}",
                money_with_currency_format: "FCFA{{amount}} XAF"
            },
            CLP: {
                money_format: "${{amount_no_decimals}}",
                money_with_currency_format: "${{amount_no_decimals}} CLP"
            },
            CNY: {
                money_format: "&#165;{{amount}}",
                money_with_currency_format: "&#165;{{amount}} CNY"
            },
            COP: {
                money_format: "${{amount_with_comma_separator}}",
                money_with_currency_format: "${{amount_with_comma_separator}} COP"
            },
            CRC: {
                money_format: "&#8353; {{amount_with_comma_separator}}",
                money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
            },
            HRK: {
                money_format: "{{amount_with_comma_separator}} kn",
                money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
            },
            CZK: {
                money_format: "{{amount_with_comma_separator}} K&#269;",
                money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
            },
            DKK: {
                money_format: "kr {{amount_with_comma_separator}}",
                money_with_currency_format: "kr {{amount_with_comma_separator}} DKK"
            },
            DOP: {
                money_format: "RD$ {{amount}}",
                money_with_currency_format: "RD$ {{amount}}"
            },
            XCD: {
                money_format: "${{amount}}",
                money_with_currency_format: "EC${{amount}}"
            },
            EGP: {
                money_format: "LE {{amount}}",
                money_with_currency_format: "LE {{amount}} EGP"
            },
            ETB: {
                money_format: "Br{{amount}}",
                money_with_currency_format: "Br{{amount}} ETB"
            },
            XPF: {
                money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
                money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
            },
            FJD: {
                money_format: "${{amount}}",
                money_with_currency_format: "FJ${{amount}}"
            },
            GMD: {
                money_format: "D {{amount}}",
                money_with_currency_format: "D {{amount}} GMD"
            },
            GHS: {
                money_format: "GH&#8373;{{amount}}",
                money_with_currency_format: "GH&#8373;{{amount}}"
            },
            GTQ: {
                money_format: "Q{{amount}}",
                money_with_currency_format: "{{amount}} GTQ"
            },
            GYD: {
                money_format: "G${{amount}}",
                money_with_currency_format: "${{amount}} GYD"
            },
            GEL: {
                money_format: "{{amount}} GEL",
                money_with_currency_format: "{{amount}} GEL"
            },
            HNL: {
                money_format: "L {{amount}}",
                money_with_currency_format: "L {{amount}} HNL"
            },
            HKD: {
                money_format: "HK${{amount}}",
                money_with_currency_format: "HK${{amount}} HKD"
            },
            HUF: {
                money_format: "{{amount_no_decimals_with_comma_separator}}",
                money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
            },
            ISK: {
                money_format: "{{amount_no_decimals}} kr",
                money_with_currency_format: "{{amount_no_decimals}} kr ISK"
            },
            INR: {
                money_format: "&#8377; {{amount}}",
                money_with_currency_format: "&#8377; {{amount}} INR"
            },
            IDR: {
                money_format: "{{amount_with_comma_separator}} IDR",
                money_with_currency_format: "Rp {{amount_with_comma_separator}} IDR"
            },
            ILS: {
                money_format: "&#8362;{{amount}} NIS",
                money_with_currency_format: "&#8362;{{amount}} NIS"
            },
            JMD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} JMD"
            },
            JPY: {
                money_format: "&#165;{{amount_no_decimals}}",
                money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
            },
            JEP: {
                money_format: "&pound;{{amount}}",
                money_with_currency_format: "&pound;{{amount}} JEP"
            },
            JOD: {
                money_format: "{{amount}} JD",
                money_with_currency_format: "{{amount}} JOD"
            },
            KZT: {
                money_format: "{{amount}} KZT",
                money_with_currency_format: "{{amount}} KZT"
            },
            KES: {
                money_format: "KSh{{amount}}",
                money_with_currency_format: "KSh{{amount}}"
            },
            KWD: {
                money_format: "{{amount}} KD",
                money_with_currency_format: "{{amount}} KWD"
            },
            KGS: {
                money_format: "лв{{amount}}",
                money_with_currency_format: "лв{{amount}}"
            },
            LVL: {
                money_format: "Ls {{amount}}",
                money_with_currency_format: "Ls {{amount}} LVL"
            },
            LBP: {
                money_format: "L.L.{{amount}}",
                money_with_currency_format: "L.L.{{amount}} LBP"
            },
            LTL: {
                money_format: "{{amount}} Lt",
                money_with_currency_format: "{{amount}} Lt"
            },
            MGA: {
                money_format: "Ar {{amount}}",
                money_with_currency_format: "Ar {{amount}} MGA"
            },
            MKD: {
                money_format: "ден {{amount}}",
                money_with_currency_format: "ден {{amount}} MKD"
            },
            MOP: {
                money_format: "MOP${{amount}}",
                money_with_currency_format: "MOP${{amount}}"
            },
            MVR: {
                money_format: "Rf{{amount}}",
                money_with_currency_format: "Rf{{amount}} MRf"
            },
            MXN: {
                money_format: "$ {{amount}}",
                money_with_currency_format: "$ {{amount}} MXN"
            },
            MYR: {
                money_format: "RM{{amount}}",
                money_with_currency_format: "RM{{amount}} MYR"
            },
            MUR: {
                money_format: "Rs {{amount}}",
                money_with_currency_format: "Rs {{amount}} MUR"
            },
            MDL: {
                money_format: "{{amount}} MDL",
                money_with_currency_format: "{{amount}} MDL"
            },
            MAD: {
                money_format: "{{amount}} dh",
                money_with_currency_format: "Dh {{amount}} MAD"
            },
            MNT: {
                money_format: "{{amount_no_decimals}} &#8366",
                money_with_currency_format: "{{amount_no_decimals}} MNT"
            },
            MZN: {
                money_format: "{{amount}} Mt",
                money_with_currency_format: "Mt {{amount}} MZN"
            },
            NAD: {
                money_format: "N${{amount}}",
                money_with_currency_format: "N${{amount}} NAD"
            },
            NPR: {
                money_format: "Rs{{amount}}",
                money_with_currency_format: "Rs{{amount}} NPR"
            },
            ANG: {
                money_format: "&fnof;{{amount}}",
                money_with_currency_format: "{{amount}} NA&fnof;"
            },
            NZD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} NZD"
            },
            NIO: {
                money_format: "C${{amount}}",
                money_with_currency_format: "C${{amount}} NIO"
            },
            NGN: {
                money_format: "&#8358;{{amount}}",
                money_with_currency_format: "&#8358;{{amount}} NGN"
            },
            NOK: {
                money_format: "kr {{amount_with_comma_separator}}",
                money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
            },
            OMR: {
                money_format: "{{amount_with_comma_separator}} OMR",
                money_with_currency_format: "{{amount_with_comma_separator}} OMR"
            },
            PKR: {
                money_format: "Rs.{{amount}}",
                money_with_currency_format: "Rs.{{amount}} PKR"
            },
            PGK: {
                money_format: "K {{amount}}",
                money_with_currency_format: "K {{amount}} PGK"
            },
            PYG: {
                money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
                money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
            },
            PEN: {
                money_format: "S/. {{amount}}",
                money_with_currency_format: "S/. {{amount}} PEN"
            },
            PHP: {
                money_format: "&#8369;{{amount}}",
                money_with_currency_format: "&#8369;{{amount}} PHP"
            },
            PLN: {
                money_format: "{{amount_with_comma_separator}} zl",
                money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
            },
            QAR: {
                money_format: "QAR {{amount_with_comma_separator}}",
                money_with_currency_format: "QAR {{amount_with_comma_separator}}"
            },
            RON: {
                money_format: "{{amount_with_comma_separator}} lei",
                money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
            },
            RUB: {
                money_format: "&#8381; {{amount_with_comma_separator}}",
                money_with_currency_format: "&#8381; {{amount_with_comma_separator}} RUB"
            },
            /*RUB: { money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}", money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB" }, */ RWF: {
                money_format: "{{amount_no_decimals}} RF",
                money_with_currency_format: "{{amount_no_decimals}} RWF"
            },
            WST: {
                money_format: "WS$ {{amount}}",
                money_with_currency_format: "WS$ {{amount}} WST"
            },
            SAR: {
                money_format: "{{amount}} SR",
                money_with_currency_format: "{{amount}} SAR"
            },
            STD: {
                money_format: "Db {{amount}}",
                money_with_currency_format: "Db {{amount}} STD"
            },
            RSD: {
                money_format: "{{amount}} RSD",
                money_with_currency_format: "{{amount}} RSD"
            },
            SCR: {
                money_format: "Rs {{amount}}",
                money_with_currency_format: "Rs {{amount}} SCR"
            },
            SGD: {
                money_format: "S${{amount}}",
                money_with_currency_format: "S${{amount}} SGD"
            },
            SYP: {
                money_format: "S&pound;{{amount}}",
                money_with_currency_format: "S&pound;{{amount}} SYP"
            },
            ZAR: {
                money_format: "R {{amount}}",
                money_with_currency_format: "R {{amount}} ZAR"
            },
            KRW: {
                money_format: "&#8361;{{amount_no_decimals}}",
                money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
            },
            LKR: {
                money_format: "Rs {{amount}}",
                money_with_currency_format: "Rs {{amount}} LKR"
            },
            SEK: {
                money_format: "kr {{amount_no_decimals}}",
                money_with_currency_format: "kr {{amount_no_decimals}} SEK"
            },
            CHF: {
                money_format: "SFr. {{amount}}",
                money_with_currency_format: "SFr. {{amount}} CHF"
            },
            TWD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} TWD"
            },
            THB: {
                money_format: "{{amount}} &#xe3f;",
                money_with_currency_format: "{{amount}} &#xe3f; THB"
            },
            TZS: {
                money_format: "{{amount}} TZS",
                money_with_currency_format: "{{amount}} TZS"
            },
            TTD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} TTD"
            },
            TND: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} DT"
            },
            TRY: {
                money_format: "{{amount}} TL",
                money_with_currency_format: "{{amount}} TL"
            },
            UGX: {
                money_format: "Ush {{amount_no_decimals}}",
                money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
            },
            UAH: {
                money_format: "₴{{amount}}",
                money_with_currency_format: "₴{{amount}} UAH"
            },
            AED: {
                money_format: "Dhs. {{amount}}",
                money_with_currency_format: "Dhs. {{amount}} AED"
            },
            UYU: {
                money_format: "${{amount_with_comma_separator}}",
                money_with_currency_format: "${{amount_with_comma_separator}} UYU"
            },
            VUV: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}}VT"
            },
            VEF: {
                money_format: "Bs. {{amount_with_comma_separator}}",
                money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
            },
            VND: {
                money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
                money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
            },
            BTC: {
                money_format: "{{amount_no_decimals}} BTC",
                money_with_currency_format: "{{amount_no_decimals}} BTC"
            },
            XOF: {
                money_format: "CFA{{amount}}",
                money_with_currency_format: "CFA{{amount}} XOF"
            },
            ZMW: {
                money_format: "K{{amount_no_decimals_with_comma_separator}}",
                money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
            },
            AFN: {
                money_format: "&#65;&#102; {{amount}}",
                money_with_currency_format: "&#65;&#102; {{amount}} AFN"
            },
            BMD: {
                money_format: "&#36; {{amount}}",
                money_with_currency_format: "&#36; {{amount}} BMD"
            },
            BIF: {
                money_format: "&#70;&#66;&#117; {{amount}}",
                money_with_currency_format: "&#70;&#66;&#117; {{amount}} BIF"
            },
            CVE: {
                money_format: "&#36; {{amount}}",
                money_with_currency_format: "&#36; {{amount}} CVE"
            },
            KMF: {
                money_format: "&#67;&#70; {{amount}}",
                money_with_currency_format: "&#67;&#70; {{amount}} KMF"
            },
            CDF: {
                money_format: "&#70;&#67; {{amount}}",
                money_with_currency_format: "&#70;&#67; {{amount}} CDF"
            },
            CUC: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} CUC"
            },
            CUP: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} CUP"
            },
            DJF: {
                money_format: "&#70;&#100;&#106; {{amount}}",
                money_with_currency_format: "&#70;&#100;&#106; {{amount}} DJF"
            },
            ERN: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} ERN"
            },
            EEK: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} EEK"
            },
            FKP: {
                money_format: "&#163; {{amount}}",
                money_with_currency_format: "&#163; {{amount}} FKP"
            },
            GIP: {
                money_format: "&#163; {{amount}}",
                money_with_currency_format: "&#163; {{amount}} GIP"
            },
            XAU: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} XAU"
            },
            GGP: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} GGP"
            },
            GNF: {
                money_format: "&#70;&#71; {{amount}}",
                money_with_currency_format: "&#70;&#71; {{amount}} GNF"
            },
            HTG: {
                money_format: "&#71; {{amount}}",
                money_with_currency_format: "&#71; {{amount}} HTG"
            },
            XDR: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} XDR"
            },
            IRR: {
                money_format: "&#65020; {{amount}}",
                money_with_currency_format: "&#65020; {{amount}} IRR"
            },
            IQD: {
                money_format: "&#1593;.&#1583; {{amount}}",
                money_with_currency_format: "&#1593;.&#1583; {{amount}} IQD"
            },
            IMP: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} IMP"
            },
            LAK: {
                money_format: "&#8365; {{amount}}",
                money_with_currency_format: "&#8365; {{amount}} LAK"
            },
            LSL: {
                money_format: "&#76; {{amount}}",
                money_with_currency_format: "&#76; {{amount}} LSL"
            },
            LRD: {
                money_format: "&#36; {{amount}}",
                money_with_currency_format: "&#36; {{amount}} LRD"
            },
            LYD: {
                money_format: "&#1604;.&#1583; {{amount}}",
                money_with_currency_format: "&#1604;.&#1583; {{amount}} LYD"
            },
            MWK: {
                money_format: "&#77;&#75; {{amount}}",
                money_with_currency_format: "&#77;&#75; {{amount}} MWK"
            },
            MRO: {
                money_format: "&#85;&#77; {{amount}}",
                money_with_currency_format: "&#85;&#77; {{amount}} MRO"
            },
            KPW: {
                money_format: "&#8361; {{amount}}",
                money_with_currency_format: "&#8361; {{amount}} KPW"
            },
            XPD: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} XPD"
            },
            PAB: {
                money_format: "&#66;&#47;&#46; {{amount}}",
                money_with_currency_format: "&#66;&#47;&#46; {{amount}} PAB"
            },
            XPT: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} XPT"
            },
            SHP: {
                money_format: "&#163; {{amount}}",
                money_with_currency_format: "&#163; {{amount}} SHP"
            },
            SVC: {
                money_format: "&#36; {{amount}}",
                money_with_currency_format: "&#36; {{amount}} SVC"
            },
            SPL: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} SPL"
            },
            SLL: {
                money_format: "&#76;&#101; {{amount}}",
                money_with_currency_format: "&#76;&#101; {{amount}} SLL"
            },
            XAG: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} XAG"
            },
            SKK: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} SKK"
            },
            SBD: {
                money_format: "&#36; {{amount}}",
                money_with_currency_format: "&#36; {{amount}} SBD"
            },
            SOS: {
                money_format: "&#83; {{amount}}",
                money_with_currency_format: "&#83; {{amount}} SOS"
            },
            SDG: {
                money_format: "&#163; {{amount}}",
                money_with_currency_format: "&#163; {{amount}} SDG"
            },
            SRD: {
                money_format: "&#36; {{amount}}",
                money_with_currency_format: "&#36; {{amount}} SRD"
            },
            SZL: {
                money_format: "&#76; {{amount}}",
                money_with_currency_format: "&#76; {{amount}} SZL"
            },
            TJS: {
                money_format: "&#84;&#74;&#83; {{amount}}",
                money_with_currency_format: "&#84;&#74;&#83; {{amount}} TJS"
            },
            TOP: {
                money_format: "&#84;&#36; {{amount}}",
                money_with_currency_format: "&#84;&#36; {{amount}} TOP"
            },
            TMT: {
                money_format: "&#109; {{amount}}",
                money_with_currency_format: "&#109; {{amount}} TMT"
            },
            TVD: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} TVD"
            },
            UZS: {
                money_format: "&#1083;&#1074; {{amount}}",
                money_with_currency_format: "&#1083;&#1074; {{amount}} UZS"
            },
            YER: {
                money_format: "&#65020; {{amount}}",
                money_with_currency_format: "&#65020; {{amount}} YER"
            },
            ZWD: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} ZWD"
            }
        };
        DoublyCurrency.formatMoney = function(cents, format, isShopCurrency, hasSup) {
            function defaultOption(opt, def) {
                if (typeof opt == "undefined") {
                    return def;
                } else {
                    return opt;
                }
            }

            function formatWithDelimiters(number, precision, thousands, decimal) {
                precision = defaultOption(precision, 2);
                thousands = defaultOption(thousands, ",");
                decimal = defaultOption(decimal, ".");
                if (isNaN(number) || number == null) {
                    return 0;
                }
                number = (number / 100).toFixed(precision);
                var parts = number.split("."),
                    dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
                    cents = parts[1] ? (decimal + parts[1]) : "";
                if (hasSup) {
                    return dollars + "<sup>" + cents + "</sup>";
                } else {
                    return dollars + cents;
                }
            }
            if (typeof cents == "string") {
                cents = cents.replace(".", "");
            }
            var value = "",
                placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
                formatString = format || "${{amount}}",
                decimals = 2;
            if ((!isShopCurrency && (DoublyCurrency.currentCurrency == "KWD" || DoublyCurrency.currentCurrency == "BHD" || DoublyCurrency.currentCurrency == "JOD" || DoublyCurrency.currentCurrency == "OMR")) || (isShopCurrency && (shopCurrency == "KWD" || shopCurrency == "BHD" || shopCurrency == "JOD" || shopCurrency == "OMR"))) {
                decimals = 3;
            }
            if (removeDecimals) {
                decimals = 0;
            }
            if ((!isShopCurrency && DoublyCurrency.currentCurrency == "BTC") || (isShopCurrency && shopCurrency == "BTC")) {
                decimals = 8;
            }
            switch (formatString.match(placeholderRegex)[1]) {
                case "amount":
                case "amount_no_decimals":
                    value = formatWithDelimiters(cents, decimals);
                    if (roundDecimals && !isShopCurrency && this.currentCurrency != shopCurrency && this.currentCurrency != "BTC" && value != 0 && value.toString().indexOf(".") !== -1) {
                        value = value.substr(0, (value.toString().indexOf(".") + 1)) + roundTo;
                        if (DoublyCurrency.currentCurrency == "KWD" || DoublyCurrency.currentCurrency == "BHD" || DoublyCurrency.currentCurrency == "JOD" || DoublyCurrency.currentCurrency == "OMR") {
                            value += "0";
                        }
                        if (hasSup) {
                            value += "</sup>";
                        }
                    }
                    break;
                case "amount_with_comma_separator":
                case "amount_no_decimals_with_comma_separator":
                    value = formatWithDelimiters(cents, decimals, ".", ",");
                    if (roundDecimals && !isShopCurrency && this.currentCurrency != shopCurrency && this.currentCurrency != "BTC" && value.toString().replace(",", ".") != 0 && value.toString().indexOf(",") !== -1) {
                        value = value.substr(0, (value.toString().indexOf(",") + 1)) + roundTo;
                        if (DoublyCurrency.currentCurrency == "KWD" || DoublyCurrency.currentCurrency == "BHD" || DoublyCurrency.currentCurrency == "JOD" || DoublyCurrency.currentCurrency == "OMR") {
                            value += "0";
                        }
                        if (hasSup) {
                            value += "</sup>";
                        }
                    }
            }
            if (!isNaN(cents)) {
                return formatString.replace(placeholderRegex, value)
            } else {
                return ""
            }
        };
        DoublyCurrency.currentCurrency = "";
        DoublyCurrency.format = "money_with_currency_format";
        DoublyCurrency.getPriceOnly = function(priceHtml, oldFormat) {
            var regex = /\{\{\s*(\w+)\s*\}\}/;
            var array = oldFormat.replace(regex, " ").replace(/ +/g, " ").split(" "); /* remove $ or USD from price, without removing any html tags or dots (.) or commas (,) */
            jQueryGrizzly(array).each(function(index, value) {
                priceHtml = priceHtml.replace(jQueryGrizzly("<div/>").html(value).text(), "");
            }); /* get decimal point or comma */
            decimal = ".";
            if (oldFormat.indexOf("comma") !== -1) {
                decimal = ",";
            } /* check for and remove <sup></sup> html tags */
            if (priceHtml.indexOf(decimal) === -1 && priceHtml.indexOf("<sup>") !== -1) {
                priceHtml = priceHtml.replace("<sup>", decimal).replace("</sup>", "");
            }
            return priceHtml;
        };
        DoublyCurrency.convertAll = function(newCurrency, selector) {
            var isShopCurrency = false;
            if (selector == undefined) {
                this.currentCurrency = newCurrency;
                this.cookie.write(newCurrency);
            }
            if (selector !== undefined && selector == ".price-on-hover") {
                var dataCurrencyShop = jQueryGrizzly(selector).closest("." + spanClass).attr("doubly-currency-" + shopCurrency);
                jQueryGrizzly(selector).attr("doubly-currency-" + shopCurrency, dataCurrencyShop);
                isShopCurrency = true;
            }
            jQueryGrizzly(selector || "span." + spanClass).each(function() { /* If the amount has already been converted, we leave it alone. */
                if (jQueryGrizzly(this).attr("doubly-currency") === newCurrency) return; /* If we are converting to a currency that we have saved, we will use the saved amount. */
                if (jQueryGrizzly(this).attr("doubly-currency-" + newCurrency)) {
                    var newFormat = DoublyCurrency.moneyFormats[newCurrency][DoublyCurrency.format] || "{{amount}}";
                    if (newCurrency !== "BTC") {
                        cents = parseInt(jQueryGrizzly(this).attr("doubly-currency-" + newCurrency), 10);
                    } else {
                        cents = Number(jQueryGrizzly(this).attr("doubly-currency-" + newCurrency));
                    }
                    var hasSup = false;
                    if (jQueryGrizzly(this).html().indexOf("<sup>") !== -1) {
                        hasSup = true;
                    }
                    var newFormattedAmount = DoublyCurrency.formatMoney(cents, newFormat, isShopCurrency, hasSup);
                    jQueryGrizzly(this).html(newFormattedAmount);
                } else { /* convert to Y for the first time */
                    var cents = 0,
                        shopPrice = 0,
                        oldFormat = DoublyCurrency.moneyFormats[shopCurrency][DoublyCurrency.format] || "{{amount}}",
                        newFormat = DoublyCurrency.moneyFormats[newCurrency][DoublyCurrency.format] || "{{amount}}";
                    if (jQueryGrizzly(this).attr("doubly-currency-" + shopCurrency)) {
                        shopPrice = jQueryGrizzly(this).attr("doubly-currency-" + shopCurrency);
                    } else {
                        var priceHtml = jQueryGrizzly(this).html();
                        priceHtml = DoublyCurrency.getPriceOnly(priceHtml, oldFormat);
                        if (priceHtml.indexOf(decimal) == -1) {
                            shopPrice = parseInt(jQueryGrizzly(this).html().replace(/[^0-9]/g, ""), 10) * 100;
                        } else if (shopCurrency === "KWD" || shopCurrency === "JOD" || shopCurrency == "BHD" || shopCurrency == "OMR") {
                            shopPrice = parseInt(jQueryGrizzly(this).html().replace(/[^0-9]/g, ""), 10) / 10;
                        } else {
                            shopPrice = parseInt(jQueryGrizzly(this).html().replace(/[^0-9]/g, ""), 10);
                        }
                        jQueryGrizzly(this).attr("doubly-currency-" + shopCurrency, shopPrice);
                    }
                    if (shopCurrency != newCurrency) {
                        cents = DoublyCurrency.convert(shopPrice, shopCurrency, newCurrency);
                    } else {
                        cents = shopPrice;
                    }
                    jQueryGrizzly(this).attr("doubly-currency-" + newCurrency, cents);
                    var hasSup = false;
                    if (jQueryGrizzly(this).html().indexOf("<sup>") !== -1) {
                        hasSup = true;
                    }
                    var newFormattedAmount = DoublyCurrency.formatMoney(cents, newFormat, isShopCurrency, hasSup);
                    jQueryGrizzly(this).html(newFormattedAmount);
                } /* We record the new currency locally. */
                jQueryGrizzly(this).attr("doubly-currency", newCurrency);
            });
        };
        jQueryGrizzly('head').append('<style>.layered-currency-switcher{width:auto;float:right;padding:0 0 0 50px;margin:0px;}.layered-currency-switcher li{display:block;float:left;font-size:15px;margin:0px;}.layered-currency-switcher li button.currency-switcher-btn{width:auto;height:auto;margin-bottom:0px;background:#fff;font-family:Arial!important;line-height:18px;border:1px solid #dadada;border-radius:25px;color:#9a9a9a;float:left;font-weight:700;margin-left:-46px;min-width:90px;position:relative;text-align:center;text-decoration:none;padding:10px 11px 10px 49px}.price-on-hover,.price-on-hover-wrapper{font-size:15px!important;line-height:25px!important}.layered-currency-switcher li button.currency-switcher-btn:focus{outline:0;-webkit-outline:none;-moz-outline:none;-o-outline:none}.layered-currency-switcher li button.currency-switcher-btn:hover{background:#ddf6cf;border-color:#a9d092;color:#89b171}.layered-currency-switcher li button.currency-switcher-btn span{display:none}.layered-currency-switcher li button.currency-switcher-btn:first-child{border-radius:25px}.layered-currency-switcher li button.currency-switcher-btn.selected{background:#de4c39;border-color:#de4c39;color:#fff;z-index:99;padding-left:23px!important;padding-right:23px!important}.layered-currency-switcher li button.currency-switcher-btn.selected span{display:inline-block}.doubly,.money{position:relative; font-weight:inherit !important; font-size:inherit !important;text-decoration:inherit !important;}.price-on-hover-wrapper{position:absolute;left:-50%;text-align:center;width:200%;top:110%;z-index:100000000}.price-on-hover{background:#333;border-color:#FFF!important;padding:2px 5px 3px;font-weight:400;border-radius:5px;font-family:Helvetica Neue,Arial;color:#fff;border:0}.price-on-hover:after{content:"";position:absolute;left:50%;margin-left:-4px;margin-top:-2px;width:0;height:0;border-bottom:solid 4px #333;border-left:solid 4px transparent;border-right:solid 4px transparent}.doubly-message{margin:5px 0}.doubly-wrapper{float:right}.doubly-float{position:fixed;bottom:10px;left:10px;right:auto;z-index:100000;}select.currency-switcher{margin:0px; position:relative; top:auto;}</style>'); /* jQueryGrizzly Nice Select - v1.0 http://hernansartorio.github.io/jquery-nice-select Made by Hernán Sartorio */
        ! function(e) {
            e.fn.niceSelect = function() {
                this.each(function() {
                    var s = e(this);
                    if (!s.next().hasClass("doubly-nice-select") && !s.hasClass("doubly-nice-select")) {
                        s.after('<div class="doubly-nice-select ' + (s.attr("class") || "") + (s.attr("disabled") ? "disabled" : '" tabindex="0') + '"><span class="current notranslate"></span><ul class="list"></ul></div>');
                        var t = s.next(),
                            n = s.find("option"),
                            a = s.find("option:selected");
                        t.find(".current").html('<span class="flags flags-' + a.data("country") + '"></span> &nbsp;' + a.data("display") || a.text()), n.each(function() {
                            var s = e(this).data("display");
                            t.find("ul").append('<li class="option notranslate ' + (e(this).is(":selected") ? "selected" : "") + '" data-value="' + e(this).val() + '" data-country="' + e(this).data("country") + (s ? '" data-currency-symbol="' + e(this).data("currency-symbol") + '" data-display="' + s : "") + '"><span class="flags flags-' + e(this).data("country") + '"></span> &nbsp;' + e(this).text() + "</li>")
                        })
                    }
                }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".doubly-nice-select.doubly-nice-select", function(s) {
                    var t = e(this);
                    e(".doubly-nice-select").not(t).removeClass("open"), t.toggleClass("open"), t.hasClass("open") ? (t.find(".option"), t.find(".focus").removeClass("focus"), t.find(".selected").addClass("focus")) : t.focus()
                }), e(document).on("click.nice_select", function(s) {
                    0 === e(s.target).closest(".doubly-nice-select").length && e(".doubly-nice-select").removeClass("open").find(".option")
                }), e(document).on("click.nice_select", ".doubly-nice-select .option", function(s) {
                    var t = e(this);
                    e(".doubly-nice-select").each(function() {
                        var s = e(this).find('.option[data-value="' + t.data("value") + '"]'),
                            n = s.closest(".doubly-nice-select");
                        n.find(".selected").removeClass("selected"), s.addClass("selected");
                        var a = '<span class="flags flags-' + s.data("country") + '"></span> &nbsp;' + s.data("display") || s.text();
                        n.find(".current").html(a), n.prev("select").val(s.data("value")).trigger("change")
                    })
                }), e(document).on("keydown.nice_select", ".doubly-nice-select", function(s) {
                    var t = e(this),
                        n = e(t.find(".focus") || t.find(".list .option.selected"));
                    if (32 == s.keyCode || 13 == s.keyCode) return t.hasClass("open") ? n.trigger("click") : t.trigger("click"), !1;
                    if (40 == s.keyCode) return t.hasClass("open") ? n.next().length > 0 && (t.find(".focus").removeClass("focus"), n.next().addClass("focus")) : t.trigger("click"), !1;
                    if (38 == s.keyCode) return t.hasClass("open") ? n.prev().length > 0 && (t.find(".focus").removeClass("focus"), n.prev().addClass("focus")) : t.trigger("click"), !1;
                    if (27 == s.keyCode) t.hasClass("open") && t.trigger("click");
                    else if (9 == s.keyCode && t.hasClass("open")) return !1
                })
            }
        }(jQueryGrizzly);
        jQueryGrizzly('head').append('<style>select.currency-switcher{display:none}.doubly-nice-select{-webkit-tap-highlight-color:transparent;background-color:#fff;border-radius:5px;border:1px solid #e8e8e8;box-sizing:border-box;cursor:pointer;display:block;float:left;font-family:"Helvetica Neue",Arial;font-size:14px;font-weight:400;height:42px;line-height:40px;outline:0;padding-left:12px;padding-right:30px;position:relative;text-align:left!important;transition:all .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;width:auto}.doubly-nice-select:hover{border-color:#dbdbdb}.doubly-nice-select.open,.doubly-nice-select:active,.doubly-nice-select:focus{border-color:#88bfff}.doubly-nice-select:after{border-bottom:2px solid #999;border-right:2px solid #999;content:"";display:block;height:5px;box-sizing:content-box;pointer-events:none;position:absolute;right:14px;top:16px;-webkit-transform-origin:66% 66%;transform-origin:66% 66%;-webkit-transform:rotate(45deg);transform:rotate(45deg);transition:all .15s ease-in-out;width:5px}.doubly-nice-select.open:after{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.doubly-nice-select.open .list{opacity:1;pointer-events:auto;-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0); z-index:1000000 !important;}.doubly-nice-select.disabled{border-color:#ededed;color:#999;pointer-events:none}.doubly-nice-select.disabled:after{border-color:#ccc}.doubly-nice-select.wide{width:100%}.doubly-nice-select.wide .list{left:0!important;right:0!important}.doubly-nice-select.right{float:right}.doubly-nice-select.right .list{left:auto;right:0}.doubly-nice-select.small{font-size:12px;height:36px;line-height:34px}.doubly-nice-select.small:after{height:4px;width:4px}.flags-Afghanistan,.flags-Albania,.flags-Algeria,.flags-Andorra,.flags-Angola,.flags-Antigua-and-Barbuda,.flags-Argentina,.flags-Armenia,.flags-Aruba,.flags-Australia,.flags-Austria,.flags-Azerbaijan,.flags-Bahamas,.flags-Bahrain,.flags-Bangladesh,.flags-Barbados,.flags-Belarus,.flags-Belgium,.flags-Belize,.flags-Benin,.flags-Bermuda,.flags-Bhutan,.flags-Bitcoin,.flags-Bolivia,.flags-Bosnia-and-Herzegovina,.flags-Botswana,.flags-Brazil,.flags-Brunei,.flags-Bulgaria,.flags-Burkina-Faso,.flags-Burundi,.flags-Cambodia,.flags-Cameroon,.flags-Canada,.flags-Cape-Verde,.flags-Cayman-Islands,.flags-Central-African-Republic,.flags-Chad,.flags-Chile,.flags-China,.flags-Colombia,.flags-Comoros,.flags-Congo-Democratic,.flags-Congo-Republic,.flags-Costa-Rica,.flags-Cote-d_Ivoire,.flags-Croatia,.flags-Cuba,.flags-Curacao,.flags-Cyprus,.flags-Czech-Republic,.flags-Denmark,.flags-Djibouti,.flags-Dominica,.flags-Dominican-Republic,.flags-East-Timor,.flags-Ecuador,.flags-Egypt,.flags-El-Salvador,.flags-Equatorial-Guinea,.flags-Eritrea,.flags-Estonia,.flags-Ethiopia,.flags-European-Union,.flags-Falkland-Islands,.flags-Fiji,.flags-Finland,.flags-France,.flags-Gabon,.flags-Gambia,.flags-Georgia,.flags-Germany,.flags-Ghana,.flags-Gibraltar,.flags-Grecee,.flags-Grenada,.flags-Guatemala,.flags-Guernsey,.flags-Guinea,.flags-Guinea-Bissau,.flags-Guyana,.flags-Haiti,.flags-Honduras,.flags-Hong-Kong,.flags-Hungary,.flags-IMF,.flags-Iceland,.flags-India,.flags-Indonesia,.flags-Iran,.flags-Iraq,.flags-Ireland,.flags-Isle-of-Man,.flags-Israel,.flags-Italy,.flags-Jamaica,.flags-Japan,.flags-Jersey,.flags-Jordan,.flags-Kazakhstan,.flags-Kenya,.flags-Korea-North,.flags-Korea-South,.flags-Kosovo,.flags-Kuwait,.flags-Kyrgyzstan,.flags-Laos,.flags-Latvia,.flags-Lebanon,.flags-Lesotho,.flags-Liberia,.flags-Libya,.flags-Liechtenstein,.flags-Lithuania,.flags-Luxembourg,.flags-Macao,.flags-Macedonia,.flags-Madagascar,.flags-Malawi,.flags-Malaysia,.flags-Maldives,.flags-Mali,.flags-Malta,.flags-Marshall-Islands,.flags-Mauritania,.flags-Mauritius,.flags-Mexico,.flags-Micronesia-_Federated_,.flags-Moldova,.flags-Monaco,.flags-Mongolia,.flags-Montenegro,.flags-Morocco,.flags-Mozambique,.flags-Myanmar,.flags-Namibia,.flags-Nauru,.flags-Nepal,.flags-Netherlands,.flags-New-Zealand,.flags-Nicaragua,.flags-Niger,.flags-Nigeria,.flags-Norway,.flags-Oman,.flags-Pakistan,.flags-Palau,.flags-Panama,.flags-Papua-New-Guinea,.flags-Paraguay,.flags-Peru,.flags-Philippines,.flags-Poland,.flags-Portugal,.flags-Qatar,.flags-Romania,.flags-Russia,.flags-Rwanda,.flags-Saint-Helena,.flags-Saint-Kitts-and-Nevis,.flags-Saint-Lucia,.flags-Saint-Vincent-and-the-Grenadines,.flags-Samoa,.flags-San-Marino,.flags-Sao-Tome-and-Principe,.flags-Saudi-Arabia,.flags-Seborga,.flags-Senegal,.flags-Serbia,.flags-Seychelles,.flags-Sierra-Leone,.flags-Singapore,.flags-Slovakia,.flags-Slovenia,.flags-Solomon-Islands,.flags-Somalia,.flags-South-Africa,.flags-South-Sudan,.flags-Spain,.flags-Sri-Lanka,.flags-Sudan,.flags-Suriname,.flags-Swaziland,.flags-Sweden,.flags-Switzerland,.flags-Syria,.flags-Taiwan,.flags-Tajikistan,.flags-Tanzania,.flags-Thailand,.flags-Togo,.flags-Tonga,.flags-Trinidad-and-Tobago,.flags-Tunisia,.flags-Turkey,.flags-Turkmenistan,.flags-Tuvalu,.flags-Uganda,.flags-Ukraine,.flags-United-Arab-Emirates,.flags-United-Kingdom,.flags-United-States,.flags-Uruguay,.flags-Uzbekistan,.flags-Vanuatu,.flags-Vatican-City,.flags-Venezuela,.flags-Vietnam,.flags-Wallis-and-Futuna,.flags-XAG,.flags-XAU,.flags-XPT,.flags-Yemen,.flags-Zambia,.flags-Zimbabwe{width:30px;height:20px}.doubly-nice-select.small .option{line-height:34px;min-height:34px}.doubly-nice-select .list{background-color:#fff;border-radius:5px;box-shadow:0 0 0 1px rgba(68,68,68,.11);box-sizing:border-box;margin:4px 0 0!important;opacity:0;overflow:scroll;overflow-x:hidden;padding:0;pointer-events:none;position:absolute;top:100%;max-height:260px;left:0;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(.75) translateY(-21px);transform:scale(.75) translateY(-21px);transition:all .2s cubic-bezier(.5,0,0,1.25),opacity .15s ease-out;z-index:100000}.doubly-nice-select .current img,.doubly-nice-select .option img{vertical-align:top;padding-top:10px}.doubly-nice-select .list:hover .option:not(:hover){background-color:transparent!important}.doubly-nice-select .option{font-size:13px !important;float:none!important;text-align:left !important;margin:0px !important;font-family:Helvetica Neue,Arial !important;letter-spacing:normal;text-transform:none;display:block!important;cursor:pointer;font-weight:400;line-height:40px!important;list-style:none;min-height:40px;min-width:55px;margin-bottom:0;outline:0;padding-left:18px!important;padding-right:52px!important;text-align:left;transition:all .2s}.doubly-nice-select .option.focus,.doubly-nice-select .option.selected.focus,.doubly-nice-select .option:hover{background-color:#f6f6f6}.doubly-nice-select .option.selected{font-weight:700}.doubly-nice-select .current img{line-height:45px}.doubly-nice-select.slim{padding:0 18px 0 0;height:20px;line-height:20px;border:0;background:0 0!important}.doubly-nice-select.slim .current .flags{margin-top:0 !important}.doubly-nice-select.slim:after{right:4px;top:6px}.flags{background-image:url(https://cdn.shopify.com/s/files/1/0987/8934/t/17/assets/currency-flags.png?6693732819916392949);background-repeat:no-repeat;display:block;margin:10px 4px 0 0 !important;float:left}.flags-Zimbabwe{background-position:-5px -5px}.flags-Zambia{background-position:-45px -5px}.flags-Yemen{background-position:-85px -5px}.flags-Vietnam{background-position:-125px -5px}.flags-Venezuela{background-position:-165px -5px}.flags-Vatican-City{background-position:-205px -5px}.flags-Vanuatu{background-position:-245px -5px}.flags-Uzbekistan{background-position:-285px -5px}.flags-Uruguay{background-position:-325px -5px}.flags-United-States{background-position:-365px -5px}.flags-United-Kingdom{background-position:-405px -5px}.flags-United-Arab-Emirates{background-position:-445px -5px}.flags-Ukraine{background-position:-5px -35px}.flags-Uganda{background-position:-45px -35px}.flags-Tuvalu{background-position:-85px -35px}.flags-Turkmenistan{background-position:-125px -35px}.flags-Turkey{background-position:-165px -35px}.flags-Tunisia{background-position:-205px -35px}.flags-Trinidad-and-Tobago{background-position:-245px -35px}.flags-Tonga{background-position:-285px -35px}.flags-Togo{background-position:-325px -35px}.flags-Thailand{background-position:-365px -35px}.flags-Tanzania{background-position:-405px -35px}.flags-Tajikistan{background-position:-445px -35px}.flags-Taiwan{background-position:-5px -65px}.flags-Syria{background-position:-45px -65px}.flags-Switzerland{background-position:-85px -65px}.flags-Sweden{background-position:-125px -65px}.flags-Swaziland{background-position:-165px -65px}.flags-Suriname{background-position:-205px -65px}.flags-Sudan{background-position:-245px -65px}.flags-Sri-Lanka{background-position:-285px -65px}.flags-Spain{background-position:-325px -65px}.flags-South-Sudan{background-position:-365px -65px}.flags-South-Africa{background-position:-405px -65px}.flags-Somalia{background-position:-445px -65px}.flags-Solomon-Islands{background-position:-5px -95px}.flags-Slovenia{background-position:-45px -95px}.flags-Slovakia{background-position:-85px -95px}.flags-Singapore{background-position:-125px -95px}.flags-Sierra-Leone{background-position:-165px -95px}.flags-Seychelles{background-position:-205px -95px}.flags-Serbia{background-position:-245px -95px}.flags-Senegal{background-position:-285px -95px}.flags-Saudi-Arabia{background-position:-325px -95px}.flags-Sao-Tome-and-Principe{background-position:-365px -95px}.flags-San-Marino{background-position:-405px -95px}.flags-Samoa{background-position:-445px -95px}.flags-Saint-Vincent-and-the-Grenadines{background-position:-5px -125px}.flags-Saint-Lucia{background-position:-45px -125px}.flags-Saint-Kitts-and-Nevis{background-position:-85px -125px}.flags-Rwanda{background-position:-125px -125px}.flags-Russia{background-position:-165px -125px}.flags-Romania{background-position:-205px -125px}.flags-Qatar{background-position:-245px -125px}.flags-Portugal{background-position:-285px -125px}.flags-Poland{background-position:-325px -125px}.flags-Philippines{background-position:-365px -125px}.flags-Peru{background-position:-405px -125px}.flags-Paraguay{background-position:-445px -125px}.flags-Papua-New-Guinea{background-position:-5px -155px}.flags-Panama{background-position:-45px -155px}.flags-Palau{background-position:-85px -155px}.flags-Pakistan{background-position:-125px -155px}.flags-Oman{background-position:-165px -155px}.flags-Norway{background-position:-205px -155px}.flags-Nigeria{background-position:-245px -155px}.flags-Niger{background-position:-285px -155px}.flags-Nicaragua{background-position:-325px -155px}.flags-New-Zealand{background-position:-365px -155px}.flags-Netherlands{background-position:-405px -155px}.flags-Nepal{background-position:-445px -155px}.flags-Nauru{background-position:-5px -185px}.flags-Namibia{background-position:-45px -185px}.flags-Myanmar{background-position:-85px -185px}.flags-Mozambique{background-position:-125px -185px}.flags-Morocco{background-position:-165px -185px}.flags-Montenegro{background-position:-205px -185px}.flags-Mongolia{background-position:-245px -185px}.flags-Monaco{background-position:-285px -185px}.flags-Moldova{background-position:-325px -185px}.flags-Micronesia-_Federated_{background-position:-365px -185px}.flags-Mexico{background-position:-405px -185px}.flags-Mauritius{background-position:-445px -185px}.flags-Mauritania{background-position:-5px -215px}.flags-Marshall-Islands{background-position:-45px -215px}.flags-Malta{background-position:-85px -215px}.flags-Mali{background-position:-125px -215px}.flags-Maldives{background-position:-165px -215px}.flags-Malaysia{background-position:-205px -215px}.flags-Malawi{background-position:-245px -215px}.flags-Madagascar{background-position:-285px -215px}.flags-Macedonia{background-position:-325px -215px}.flags-Luxembourg{background-position:-365px -215px}.flags-Lithuania{background-position:-405px -215px}.flags-Liechtenstein{background-position:-445px -215px}.flags-Libya{background-position:-5px -245px}.flags-Liberia{background-position:-45px -245px}.flags-Lesotho{background-position:-85px -245px}.flags-Lebanon{background-position:-125px -245px}.flags-Latvia{background-position:-165px -245px}.flags-Laos{background-position:-205px -245px}.flags-Kyrgyzstan{background-position:-245px -245px}.flags-Kuwait{background-position:-285px -245px}.flags-Kosovo{background-position:-325px -245px}.flags-Korea-South{background-position:-365px -245px}.flags-Korea-North{background-position:-405px -245px}.flags-Kiribati{width:30px;height:20px;background-position:-445px -245px}.flags-Kenya{background-position:-5px -275px}.flags-Kazakhstan{background-position:-45px -275px}.flags-Jordan{background-position:-85px -275px}.flags-Japan{background-position:-125px -275px}.flags-Jamaica{background-position:-165px -275px}.flags-Italy{background-position:-205px -275px}.flags-Israel{background-position:-245px -275px}.flags-Ireland{background-position:-285px -275px}.flags-Iraq{background-position:-325px -275px}.flags-Iran{background-position:-365px -275px}.flags-Indonesia{background-position:-405px -275px}.flags-India{background-position:-445px -275px}.flags-Iceland{background-position:-5px -305px}.flags-Hungary{background-position:-45px -305px}.flags-Honduras{background-position:-85px -305px}.flags-Haiti{background-position:-125px -305px}.flags-Guyana{background-position:-165px -305px}.flags-Guinea{background-position:-205px -305px}.flags-Guinea-Bissau{background-position:-245px -305px}.flags-Guatemala{background-position:-285px -305px}.flags-Grenada{background-position:-325px -305px}.flags-Grecee{background-position:-365px -305px}.flags-Ghana{background-position:-405px -305px}.flags-Germany{background-position:-445px -305px}.flags-Georgia{background-position:-5px -335px}.flags-Gambia{background-position:-45px -335px}.flags-Gabon{background-position:-85px -335px}.flags-France{background-position:-125px -335px}.flags-Finland{background-position:-165px -335px}.flags-Fiji{background-position:-205px -335px}.flags-Ethiopia{background-position:-245px -335px}.flags-Estonia{background-position:-285px -335px}.flags-Eritrea{background-position:-325px -335px}.flags-Equatorial-Guinea{background-position:-365px -335px}.flags-El-Salvador{background-position:-405px -335px}.flags-Egypt{background-position:-445px -335px}.flags-Ecuador{background-position:-5px -365px}.flags-East-Timor{background-position:-45px -365px}.flags-Dominican-Republic{background-position:-85px -365px}.flags-Dominica{background-position:-125px -365px}.flags-Djibouti{background-position:-165px -365px}.flags-Denmark{background-position:-205px -365px}.flags-Czech-Republic{background-position:-245px -365px}.flags-Cyprus{background-position:-285px -365px}.flags-Cuba{background-position:-325px -365px}.flags-Croatia{background-position:-365px -365px}.flags-Cote-d_Ivoire{background-position:-405px -365px}.flags-Costa-Rica{background-position:-445px -365px}.flags-Congo-Republic{background-position:-5px -395px}.flags-Congo-Democratic{background-position:-45px -395px}.flags-Comoros{background-position:-85px -395px}.flags-Colombia{background-position:-125px -395px}.flags-China{background-position:-165px -395px}.flags-Chile{background-position:-205px -395px}.flags-Chad{background-position:-245px -395px}.flags-Central-African-Republic{background-position:-285px -395px}.flags-Cape-Verde{background-position:-325px -395px}.flags-Canada{background-position:-365px -395px}.flags-Cameroon{background-position:-405px -395px}.flags-Cambodia{background-position:-445px -395px}.flags-Burundi{background-position:-5px -425px}.flags-Burkina-Faso{background-position:-45px -425px}.flags-Bulgaria{background-position:-85px -425px}.flags-Brunei{background-position:-125px -425px}.flags-Brazil{background-position:-165px -425px}.flags-Botswana{background-position:-205px -425px}.flags-Bosnia-and-Herzegovina{background-position:-245px -425px}.flags-Bolivia{background-position:-285px -425px}.flags-Bhutan{background-position:-325px -425px}.flags-Benin{background-position:-365px -425px}.flags-Belize{background-position:-405px -425px}.flags-Belgium{background-position:-445px -425px}.flags-Belarus{background-position:-5px -455px}.flags-Barbados{background-position:-45px -455px}.flags-Bangladesh{background-position:-85px -455px}.flags-Bahrain{background-position:-125px -455px}.flags-Bahamas{background-position:-165px -455px}.flags-Azerbaijan{background-position:-205px -455px}.flags-Austria{background-position:-245px -455px}.flags-Australia{background-position:-285px -455px}.flags-Armenia{background-position:-325px -455px}.flags-Argentina{background-position:-365px -455px}.flags-Antigua-and-Barbuda{background-position:-405px -455px}.flags-Andorra{background-position:-445px -455px}.flags-Algeria{background-position:-5px -485px}.flags-Albania{background-position:-45px -485px}.flags-Afghanistan{background-position:-85px -485px}.flags-Bermuda{background-position:-125px -485px}.flags-European-Union{background-position:-165px -485px}.flags-XPT{background-position:-205px -485px}.flags-XAU{background-position:-245px -485px}.flags-XAG{background-position:-285px -485px}.flags-Wallis-and-Futuna{background-position:-325px -485px}.flags-Seborga{background-position:-365px -485px}.flags-Aruba{background-position:-405px -485px}.flags-Angola{background-position:-445px -485px}.flags-Saint-Helena{background-position:-485px -5px}.flags-Macao{background-position:-485px -35px}.flags-Jersey{background-position:-485px -65px}.flags-Isle-of-Man{background-position:-485px -95px}.flags-IMF{background-position:-485px -125px}.flags-Hong-Kong{background-position:-485px -155px}.flags-Guernsey{background-position:-485px -185px}.flags-Gibraltar{background-position:-485px -215px}.flags-Falkland-Islands{background-position:-485px -245px}.flags-Curacao{background-position:-485px -275px}.flags-Cayman-Islands{background-position:-485px -305px}.flags-Bitcoin{background-position:-485px -335px}.flags-small{background-image:url(https://cdn.shopify.com/s/files/1/0987/8934/t/17/assets/currency-flags-small.png?6693732819916392949);background-repeat:no-repeat;display:block;margin:5px 3px 0 0 !important;border:1px solid #fff;box-sizing:content-box;float:left}.doubly-nice-select.open .list .flags-small{margin-top:15px !important}.flags-small.flags-Zimbabwe{width:15px;height:10px;background-position:0 0}.flags-small.flags-Zambia{width:15px;height:10px;background-position:-15px 0}.flags-small.flags-Yemen{width:15px;height:10px;background-position:-30px 0}.flags-small.flags-Vietnam{width:15px;height:10px;background-position:-45px 0}.flags-small.flags-Venezuela{width:15px;height:10px;background-position:-60px 0}.flags-small.flags-Vatican-City{width:15px;height:10px;background-position:-75px 0}.flags-small.flags-Vanuatu{width:15px;height:10px;background-position:-90px 0}.flags-small.flags-Uzbekistan{width:15px;height:10px;background-position:-105px 0}.flags-small.flags-Uruguay{width:15px;height:10px;background-position:-120px 0}.flags-small.flags-United-Kingdom{width:15px;height:10px;background-position:-150px 0}.flags-small.flags-United-Arab-Emirates{width:15px;height:10px;background-position:-165px 0}.flags-small.flags-Ukraine{width:15px;height:10px;background-position:0 -10px}.flags-small.flags-Uganda{width:15px;height:10px;background-position:-15px -10px}.flags-small.flags-Tuvalu{width:15px;height:10px;background-position:-30px -10px}.flags-small.flags-Turkmenistan{width:15px;height:10px;background-position:-45px -10px}.flags-small.flags-Turkey{width:15px;height:10px;background-position:-60px -10px}.flags-small.flags-Tunisia{width:15px;height:10px;background-position:-75px -10px}.flags-small.flags-Trinidad-and-Tobago{width:15px;height:10px;background-position:-90px -10px}.flags-small.flags-Tonga{width:15px;height:10px;background-position:-105px -10px}.flags-small.flags-Togo{width:15px;height:10px;background-position:-120px -10px}.flags-small.flags-Thailand{width:15px;height:10px;background-position:-135px -10px}.flags-small.flags-Tanzania{width:15px;height:10px;background-position:-150px -10px}.flags-small.flags-Tajikistan{width:15px;height:10px;background-position:-165px -10px}.flags-small.flags-Taiwan{width:15px;height:10px;background-position:0 -20px}.flags-small.flags-Syria{width:15px;height:10px;background-position:-15px -20px}.flags-small.flags-Switzerland{width:15px;height:10px;background-position:-30px -20px}.flags-small.flags-Sweden{width:15px;height:10px;background-position:-45px -20px}.flags-small.flags-Swaziland{width:15px;height:10px;background-position:-60px -20px}.flags-small.flags-Suriname{width:15px;height:10px;background-position:-75px -20px}.flags-small.flags-Sudan{width:15px;height:10px;background-position:-90px -20px}.flags-small.flags-Sri-Lanka{width:15px;height:10px;background-position:-105px -20px}.flags-small.flags-Spain{width:15px;height:10px;background-position:-120px -20px}.flags-small.flags-South-Sudan{width:15px;height:10px;background-position:-135px -20px}.flags-small.flags-South-Africa{width:15px;height:10px;background-position:-150px -20px}.flags-small.flags-Somalia{width:15px;height:10px;background-position:-165px -20px}.flags-small.flags-Solomon-Islands{width:15px;height:10px;background-position:0 -30px}.flags-small.flags-Slovenia{width:15px;height:10px;background-position:-15px -30px}.flags-small.flags-Slovakia{width:15px;height:10px;background-position:-30px -30px}.flags-small.flags-Singapore{width:15px;height:10px;background-position:-45px -30px}.flags-small.flags-Sierra-Leone{width:15px;height:10px;background-position:-60px -30px}.flags-small.flags-Seychelles{width:15px;height:10px;background-position:-75px -30px}.flags-small.flags-Serbia{width:15px;height:10px;background-position:-90px -30px}.flags-small.flags-Senegal{width:15px;height:10px;background-position:-105px -30px}.flags-small.flags-Saudi-Arabia{width:15px;height:10px;background-position:-120px -30px}.flags-small.flags-Sao-Tome-and-Principe{width:15px;height:10px;background-position:-135px -30px}.flags-small.flags-San-Marino{width:15px;height:10px;background-position:-150px -30px}.flags-small.flags-Samoa{width:15px;height:10px;background-position:-165px -30px}.flags-small.flags-Saint-Vincent-and-the-Grenadines{width:15px;height:10px;background-position:0 -40px}.flags-small.flags-Saint-Lucia{width:15px;height:10px;background-position:-15px -40px}.flags-small.flags-Saint-Kitts-and-Nevis{width:15px;height:10px;background-position:-30px -40px}.flags-small.flags-Rwanda{width:15px;height:10px;background-position:-45px -40px}.flags-small.flags-Russia{width:15px;height:10px;background-position:-60px -40px}.flags-small.flags-Romania{width:15px;height:10px;background-position:-75px -40px}.flags-small.flags-Qatar{width:15px;height:10px;background-position:-90px -40px}.flags-small.flags-Portugal{width:15px;height:10px;background-position:-105px -40px}.flags-small.flags-Poland{width:15px;height:10px;background-position:-120px -40px}.flags-small.flags-Philippines{width:15px;height:10px;background-position:-135px -40px}.flags-small.flags-Peru{width:15px;height:10px;background-position:-150px -40px}.flags-small.flags-Paraguay{width:15px;height:10px;background-position:-165px -40px}.flags-small.flags-Papua-New-Guinea{width:15px;height:10px;background-position:0 -50px}.flags-small.flags-Panama{width:15px;height:10px;background-position:-15px -50px}.flags-small.flags-Palau{width:15px;height:10px;background-position:-30px -50px}.flags-small.flags-Pakistan{width:15px;height:10px;background-position:-45px -50px}.flags-small.flags-Oman{width:15px;height:10px;background-position:-60px -50px}.flags-small.flags-Norway{width:15px;height:10px;background-position:-75px -50px}.flags-small.flags-Nigeria{width:15px;height:10px;background-position:-90px -50px}.flags-small.flags-Niger{width:15px;height:10px;background-position:-105px -50px}.flags-small.flags-Nicaragua{width:15px;height:10px;background-position:-120px -50px}.flags-small.flags-New-Zealand{width:15px;height:10px;background-position:-135px -50px}.flags-small.flags-Netherlands{width:15px;height:10px;background-position:-150px -50px}.flags-small.flags-Nepal{width:15px;height:10px;background-position:-165px -50px}.flags-small.flags-Nauru{width:15px;height:10px;background-position:0 -60px}.flags-small.flags-Namibia{width:15px;height:10px;background-position:-15px -60px}.flags-small.flags-Myanmar{width:15px;height:10px;background-position:-30px -60px}.flags-small.flags-Mozambique{width:15px;height:10px;background-position:-45px -60px}.flags-small.flags-Morocco{width:15px;height:10px;background-position:-60px -60px}.flags-small.flags-Montenegro{width:15px;height:10px;background-position:-75px -60px}.flags-small.flags-Mongolia{width:15px;height:10px;background-position:-90px -60px}.flags-small.flags-Monaco{width:15px;height:10px;background-position:-105px -60px}.flags-small.flags-Moldova{width:15px;height:10px;background-position:-120px -60px}.flags-small.flags-Micronesia-_Federated_{width:15px;height:10px;background-position:-135px -60px}.flags-small.flags-Mexico{width:15px;height:10px;background-position:-150px -60px}.flags-small.flags-Mauritius{width:15px;height:10px;background-position:-165px -60px}.flags-small.flags-Mauritania{width:15px;height:10px;background-position:0 -70px}.flags-small.flags-Marshall-Islands{width:15px;height:10px;background-position:-15px -70px}.flags-small.flags-Malta{width:15px;height:10px;background-position:-30px -70px}.flags-small.flags-Mali{width:15px;height:10px;background-position:-45px -70px}.flags-small.flags-Maldives{width:15px;height:10px;background-position:-60px -70px}.flags-small.flags-Malaysia{width:15px;height:10px;background-position:-75px -70px}.flags-small.flags-Malawi{width:15px;height:10px;background-position:-90px -70px}.flags-small.flags-Madagascar{width:15px;height:10px;background-position:-105px -70px}.flags-small.flags-Macedonia{width:15px;height:10px;background-position:-120px -70px}.flags-small.flags-Luxembourg{width:15px;height:10px;background-position:-135px -70px}.flags-small.flags-Lithuania{width:15px;height:10px;background-position:-150px -70px}.flags-small.flags-Liechtenstein{width:15px;height:10px;background-position:-165px -70px}.flags-small.flags-Libya{width:15px;height:10px;background-position:0 -80px}.flags-small.flags-Liberia{width:15px;height:10px;background-position:-15px -80px}.flags-small.flags-Lesotho{width:15px;height:10px;background-position:-30px -80px}.flags-small.flags-Lebanon{width:15px;height:10px;background-position:-45px -80px}.flags-small.flags-Latvia{width:15px;height:10px;background-position:-60px -80px}.flags-small.flags-Laos{width:15px;height:10px;background-position:-75px -80px}.flags-small.flags-Kyrgyzstan{width:15px;height:10px;background-position:-90px -80px}.flags-small.flags-Kuwait{width:15px;height:10px;background-position:-105px -80px}.flags-small.flags-Kosovo{width:15px;height:10px;background-position:-120px -80px}.flags-small.flags-Korea-South{width:15px;height:10px;background-position:-135px -80px}.flags-small.flags-Korea-North{width:15px;height:10px;background-position:-150px -80px}.flags-small.flags-Kiribati{width:15px;height:10px;background-position:-165px -80px}.flags-small.flags-Kenya{width:15px;height:10px;background-position:0 -90px}.flags-small.flags-Kazakhstan{width:15px;height:10px;background-position:-15px -90px}.flags-small.flags-Jordan{width:15px;height:10px;background-position:-30px -90px}.flags-small.flags-Japan{width:15px;height:10px;background-position:-45px -90px}.flags-small.flags-Jamaica{width:15px;height:10px;background-position:-60px -90px}.flags-small.flags-Italy{width:15px;height:10px;background-position:-75px -90px}.flags-small.flags-Israel{width:15px;height:10px;background-position:-90px -90px}.flags-small.flags-Ireland{width:15px;height:10px;background-position:-105px -90px}.flags-small.flags-Iraq{width:15px;height:10px;background-position:-120px -90px}.flags-small.flags-Iran{width:15px;height:10px;background-position:-135px -90px}.flags-small.flags-Indonesia{width:15px;height:10px;background-position:-150px -90px}.flags-small.flags-India{width:15px;height:10px;background-position:-165px -90px}.flags-small.flags-Iceland{width:15px;height:10px;background-position:0 -100px}.flags-small.flags-Hungary{width:15px;height:10px;background-position:-15px -100px}.flags-small.flags-Honduras{width:15px;height:10px;background-position:-30px -100px}.flags-small.flags-Haiti{width:15px;height:10px;background-position:-45px -100px}.flags-small.flags-Guyana{width:15px;height:10px;background-position:-60px -100px}.flags-small.flags-Guinea{width:15px;height:10px;background-position:-75px -100px}.flags-small.flags-Guinea-Bissau{width:15px;height:10px;background-position:-90px -100px}.flags-small.flags-Guatemala{width:15px;height:10px;background-position:-105px -100px}.flags-small.flags-Grenada{width:15px;height:10px;background-position:-120px -100px}.flags-small.flags-Grecee{width:15px;height:10px;background-position:-135px -100px}.flags-small.flags-Ghana{width:15px;height:10px;background-position:-150px -100px}.flags-small.flags-Germany{width:15px;height:10px;background-position:-165px -100px}.flags-small.flags-Georgia{width:15px;height:10px;background-position:0 -110px}.flags-small.flags-Gambia{width:15px;height:10px;background-position:-15px -110px}.flags-small.flags-Gabon{width:15px;height:10px;background-position:-30px -110px}.flags-small.flags-France{width:15px;height:10px;background-position:-45px -110px}.flags-small.flags-Finland{width:15px;height:10px;background-position:-60px -110px}.flags-small.flags-Fiji{width:15px;height:10px;background-position:-75px -110px}.flags-small.flags-Ethiopia{width:15px;height:10px;background-position:-90px -110px}.flags-small.flags-Estonia{width:15px;height:10px;background-position:-105px -110px}.flags-small.flags-Eritrea{width:15px;height:10px;background-position:-120px -110px}.flags-small.flags-Equatorial-Guinea{width:15px;height:10px;background-position:-135px -110px}.flags-small.flags-El-Salvador{width:15px;height:10px;background-position:-150px -110px}.flags-small.flags-Egypt{width:15px;height:10px;background-position:-165px -110px}.flags-small.flags-Ecuador{width:15px;height:10px;background-position:0 -120px}.flags-small.flags-East-Timor{width:15px;height:10px;background-position:-15px -120px}.flags-small.flags-Dominican-Republic{width:15px;height:10px;background-position:-30px -120px}.flags-small.flags-Dominica{width:15px;height:10px;background-position:-45px -120px}.flags-small.flags-Djibouti{width:15px;height:10px;background-position:-60px -120px}.flags-small.flags-Denmark{width:15px;height:10px;background-position:-75px -120px}.flags-small.flags-Czech-Republic{width:15px;height:10px;background-position:-90px -120px}.flags-small.flags-Cyprus{width:15px;height:10px;background-position:-105px -120px}.flags-small.flags-Cuba{width:15px;height:10px;background-position:-120px -120px}.flags-small.flags-Croatia{width:15px;height:10px;background-position:-135px -120px}.flags-small.flags-Cote-d_Ivoire{width:15px;height:10px;background-position:-150px -120px}.flags-small.flags-Costa-Rica{width:15px;height:10px;background-position:-165px -120px}.flags-small.flags-Congo-Republic{width:15px;height:10px;background-position:0 -130px}.flags-small.flags-Congo-Democratic{width:15px;height:10px;background-position:-15px -130px}.flags-small.flags-Comoros{width:15px;height:10px;background-position:-30px -130px}.flags-small.flags-Colombia{width:15px;height:10px;background-position:-45px -130px}.flags-small.flags-China{width:15px;height:10px;background-position:-60px -130px}.flags-small.flags-Chile{width:15px;height:10px;background-position:-75px -130px}.flags-small.flags-Chad{width:15px;height:10px;background-position:-90px -130px}.flags-small.flags-Central-African-Republic{width:15px;height:10px;background-position:-105px -130px}.flags-small.flags-Cape-Verde{width:15px;height:10px;background-position:-120px -130px}.flags-small.flags-Canada{width:15px;height:10px;background-position:-135px -130px}.flags-small.flags-Cameroon{width:15px;height:10px;background-position:-150px -130px}.flags-small.flags-Cambodia{width:15px;height:10px;background-position:-165px -130px}.flags-small.flags-Burundi{width:15px;height:10px;background-position:0 -140px}.flags-small.flags-Burkina-Faso{width:15px;height:10px;background-position:-15px -140px}.flags-small.flags-Bulgaria{width:15px;height:10px;background-position:-30px -140px}.flags-small.flags-Brunei{width:15px;height:10px;background-position:-45px -140px}.flags-small.flags-Brazil{width:15px;height:10px;background-position:-60px -140px}.flags-small.flags-Botswana{width:15px;height:10px;background-position:-75px -140px}.flags-small.flags-Bosnia-and-Herzegovina{width:15px;height:10px;background-position:-90px -140px}.flags-small.flags-Bolivia{width:15px;height:10px;background-position:-105px -140px}.flags-small.flags-Bhutan{width:15px;height:10px;background-position:-120px -140px}.flags-small.flags-Benin{width:15px;height:10px;background-position:-135px -140px}.flags-small.flags-Belize{width:15px;height:10px;background-position:-150px -140px}.flags-small.flags-Belgium{width:15px;height:10px;background-position:-165px -140px}.flags-small.flags-Belarus{width:15px;height:10px;background-position:0 -150px}.flags-small.flags-Barbados{width:15px;height:10px;background-position:-15px -150px}.flags-small.flags-Bangladesh{width:15px;height:10px;background-position:-30px -150px}.flags-small.flags-Bahrain{width:15px;height:10px;background-position:-45px -150px}.flags-small.flags-Bahamas{width:15px;height:10px;background-position:-60px -150px}.flags-small.flags-Azerbaijan{width:15px;height:10px;background-position:-75px -150px}.flags-small.flags-Austria{width:15px;height:10px;background-position:-90px -150px}.flags-small.flags-Australia{width:15px;height:10px;background-position:-105px -150px}.flags-small.flags-Armenia{width:15px;height:10px;background-position:-120px -150px}.flags-small.flags-Argentina{width:15px;height:10px;background-position:-135px -150px}.flags-small.flags-Antigua-and-Barbuda{width:15px;height:10px;background-position:-150px -150px}.flags-small.flags-Andorra{width:15px;height:10px;background-position:-165px -150px}.flags-small.flags-Algeria{width:15px;height:10px;background-position:0 -160px}.flags-small.flags-Albania{width:15px;height:10px;background-position:-15px -160px}.flags-small.flags-Afghanistan{width:15px;height:10px;background-position:-30px -160px}.flags-small.flags-Bermuda{width:15px;height:10px;background-position:-45px -160px}.flags-small.flags-European-Union{width:15px;height:10px;background-position:-60px -160px}.flags-small.flags-United-States{width:15px;height:9px;background-position:-75px -160px}.flags-small.flags-XPT{width:15px;height:10px;background-position:-90px -160px}.flags-small.flags-XAU{width:15px;height:10px;background-position:-105px -160px}.flags-small.flags-XAG{width:15px;height:10px;background-position:-120px -160px}.flags-small.flags-Wallis-and-Futuna{width:15px;height:10px;background-position:-135px -160px}.flags-small.flags-Seborga{width:15px;height:10px;background-position:-150px -160px}.flags-small.flags-Aruba{width:15px;height:10px;background-position:-165px -160px}.flags-small.flags-Angola{width:15px;height:10px;background-position:0 -170px}.flags-small.flags-Saint-Helena{width:15px;height:10px;background-position:-15px -170px}.flags-small.flags-Macao{width:15px;height:10px;background-position:-30px -170px}.flags-small.flags-Jersey{width:15px;height:10px;background-position:-45px -170px}.flags-small.flags-Isle-of-Man{width:15px;height:10px;background-position:-60px -170px}.flags-small.flags-IMF{width:15px;height:10px;background-position:-75px -170px}.flags-small.flags-Hong-Kong{width:15px;height:10px;background-position:-90px -170px}.flags-small.flags-Guernsey{width:15px;height:10px;background-position:-105px -170px}.flags-small.flags-Gibraltar{width:15px;height:10px;background-position:-120px -170px}.flags-small.flags-Falkland-Islands{width:15px;height:10px;background-position:-135px -170px}.flags-small.flags-Curacao{width:15px;height:10px;background-position:-150px -170px}.flags-small.flags-Cayman-Islands{width:15px;height:10px;background-position:-165px -170px}.flags-small.flags-Bitcoin{width:15px;height:10px;background-position:-180px 0}.doubly-float .doubly-nice-select .list{top:-210px;left:0;right:auto}</style>');
        jQueryGrizzly('head').append('<style>.doubly-nice-select, .doubly-nice-select .list { background: #FFFFFF; } .doubly-nice-select .current, .doubly-nice-select .list .option { color: #333333; } .doubly-nice-select .option:hover, .doubly-nice-select .option.focus, .doubly-nice-select .option.selected.focus { background-color: #DDDDDD; } .price-on-hover { background-color: #333333 !important; color: #FFFFFF !important; } .price-on-hover:after { border-bottom-color: #333333 !important;}</style>');
        var doublyInstalled = false;
        jQueryGrizzly('script').each(function() {
            if (jQueryGrizzly(this).text().indexOf('ginit.js?') != -1 && jQueryGrizzly(this).text().indexOf('asyncLoad') != -1) {
                doublyInstalled = true;
            }
        });
        if (doublyInstalled && typeof DoublyCurrency !== 'undefined') { /* add select in select wrapper or body */
            if (jQueryGrizzly('.doubly-wrapper').length > 0) {
                var doublyWrapper = '.doubly-wrapper';
            } else if (jQueryGrizzly('.doubly-float').length == 0) {
                var doublyWrapper = '.doubly-float';
                jQueryGrizzly('body').append('<div class="doubly-float"></div>');
            }
            jQueryGrizzly(doublyWrapper).each(function() {
                jQueryGrizzly(this).prepend('<select class="currency-switcher right" name="doubly-currencies"><option value="AUD" data-country="Australia" data-currency-symbol="&#36;" data-display="AUD">Australian Dollar</option><option value="NZD" data-country="New-Zealand" data-currency-symbol="&#36;" data-display="NZD">New Zealand Dollar</option><option value="USD" data-country="United-States" data-currency-symbol="&#36;" data-display="USD">US Dollar</option><option value="EUR" data-country="European-Union" data-currency-symbol="&#8364;" data-display="EUR">Euro</option><option value="GBP" data-country="United-Kingdom" data-currency-symbol="&#163;" data-display="GBP">British Pound Sterling</option></select>');
            });
            var shopCurrency = 'AUD';
            var defaultCurrency = shopCurrency;
            var allowedCurrencies = jQueryGrizzly.parseJSON('["AUD","NZD","USD","EUR","GBP"]');
            var removeDecimals = 0;
            var roundDecimals = 0;
            var roundTo = '99';
            var showPriceOnHover = 0;
            var showCurrencyMessage = 0;
            var currencyMessage = 'All orders are processed in AUD. While the content of your cart is currently displayed in <span class="selected-currency"></span>, you will checkout using AUD at the most current exchange rate.';
            DoublyCurrency.format = 'money_with_currency_format';

            function initCurrencySwitcher() { /* Cookie currency */
                var cookieCurrency = DoublyCurrency.cookie.read(); /* Set select value before document ready functions fire to avoid lag */
                if (cookieCurrency == null || cookieCurrency == 'undefined') {
                    jQueryGrizzly('[name=doubly-currencies]').val(defaultCurrency);
                } else {
                    jQueryGrizzly('[name=doubly-currencies]').val(cookieCurrency);
                }
                jQueryGrizzly('.doubly-wrapper .currency-switcher, .doubly-float .currency-switcher').niceSelect(); /* Fix for customer account pages */
                jQueryGrizzly('span.' + spanClass + ' span.' + spanClass).each(function() {
                    jQueryGrizzly(this).parents('span.' + spanClass).removeClass(spanClass);
                }); /* If there's no cookie. */
                if (cookieCurrency == null || cookieCurrency == 'undefined') {
                    DoublyCurrency.convertAll(defaultCurrency);
                } /* If the cookie value does not correspond to any value in the currency dropdown. */
                else if (jQueryGrizzly.inArray(cookieCurrency, allowedCurrencies) === -1) {
                    DoublyCurrency.currentCurrency = shopCurrency;
                    DoublyCurrency.cookie.write(shopCurrency);
                } else {
                    DoublyCurrency.convertAll(cookieCurrency);
                }
                jQueryGrizzly('[name=doubly-currencies]').change(function() {
                    var newCurrency = jQueryGrizzly(this).val();
                    DoublyCurrency.convertAll(newCurrency); /* in case more than 1 currency switcher, update value of all of them */
                    jQueryGrizzly('[name=doubly-currencies]').val(jQueryGrizzly(this).val());
                    initExtraFeatures();
                });
                jQueryGrizzly('.single-option-selector').bind('change.single-option-selector', function() {
                    DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                    initExtraFeatures();
                });
                if (jQueryGrizzly('.single-option-radio label').length > 0) {
                    jQueryGrizzly('.single-option-radio label').bind('click.single-option-radio', function() {
                        setTimeout(function() {
                            DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                            initExtraFeatures();
                        }, 1);
                    });
                    jQueryGrizzly('.single-option-radio label').bind('touchend.single-option-radio', function() {
                        setTimeout(function() {
                            DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                            initExtraFeatures();
                        }, 1);
                    });
                } /* Panda Swatchify app */
                if (jQueryGrizzly('.swatch-panda .color label').length > 0) {
                    jQueryGrizzly('.swatch-panda .color label').click(function() {
                        setTimeout(function() {
                            DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                        }, 1);
                        initExtraFeatures();
                    });
                } /* sca-qv-button */
                setTimeout(function() {
                    jQueryGrizzly('.sca-qv-button').bind('click.changeCurrency', function() {
                        setTimeout(function() {
                            DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                            jQueryGrizzly('.single-option-selector').bind('change.single-option-selector', function() {
                                DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                                initExtraFeatures();
                            });
                        }, 1000);
                    });
                }, 1000);
                if (jQueryGrizzly('.swatch-element').length > 0) {
                    jQueryGrizzly('.swatch-element').bind('click.swatch-element', function() {
                        setTimeout(function() {
                            DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                        }, 1);
                    });
                } /* beeketing xhr */
                if (catchXHR) {
                    function addXMLRequestCallback(callback) {
                        var oldSend, i;
                        if (XMLHttpRequest.callbacks) {
                            XMLHttpRequest.callbacks.push(callback);
                        } else {
                            XMLHttpRequest.callbacks = [callback];
                            oldSend = XMLHttpRequest.prototype.send;
                            XMLHttpRequest.prototype.send = function() {
                                for (i = 0; i < XMLHttpRequest.callbacks.length; i++) {
                                    XMLHttpRequest.callbacks[i](this);
                                }
                                oldSend.apply(this, arguments);
                            }
                        }
                    }
                    addXMLRequestCallback(function(xhr) {
                        if (xhr._url.indexOf('recommendation/result/view-product/') !== -1 || xhr._url.indexOf('recommendation/result/recent-view/') !== -1) {
                            setTimeout(function() {
                                DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                                initExtraFeatures();
                            }, 1000);
                        }
                    });
                }
                jQueryGrizzly(document).bind('ajaxComplete.doubly', function() {
                    DoublyCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
                    initExtraFeatures();
                });
                initExtraFeatures();
                if (typeof afterCurrencySwitcherInit == 'function') {
                    afterCurrencySwitcherInit();
                }
                DoublyGlobalCurrency = DoublyCurrency;
            }

            function initExtraFeatures() { /* initPriceHover */
                jQueryGrizzly('span.' + spanClass).unbind('mouseenter mouseleave');
                if (showPriceOnHover && DoublyCurrency.currentCurrency !== shopCurrency) {
                    jQueryGrizzly('span.' + spanClass).hover(function() {
                        jQueryGrizzly(this).append('<span class="price-on-hover-wrapper"><span class="price-on-hover">' + jQueryGrizzly(this).text() + '</span></span>');
                        DoublyCurrency.convertAll(shopCurrency, '.price-on-hover');
                    }, function() {
                        jQueryGrizzly('span').remove('.price-on-hover-wrapper');
                    });
                    jQueryGrizzly('*').off('touchend.removePriceOnHover');
                    jQueryGrizzly('*').on('touchend.removePriceOnHover', function() {
                        jQueryGrizzly('span').remove('.price-on-hover-wrapper');
                    });
                    jQueryGrizzly('span.' + spanClass).off('touchend.addPriceOnHover');
                    jQueryGrizzly('span.' + spanClass).on('touchend.addPriceOnHover', function() {
                        var element = jQueryGrizzly(this);
                        setTimeout(function() {
                            element.append('<span class="price-on-hover-wrapper"><span class="price-on-hover">' + element.text() + '</span></span>');
                            DoublyCurrency.convertAll(shopCurrency, '.price-on-hover');
                        }, 1);
                    });
                } /* initCartMessage */
                if (showCurrencyMessage) {
                    if (jQueryGrizzly('.doubly-message').html() == '') {
                        jQueryGrizzly('.doubly-message').html(currencyMessage);
                    }
                    jQueryGrizzly('.selected-currency').text(DoublyCurrency.currentCurrency);
                }
                if (DoublyCurrency.currentCurrency == shopCurrency) {
                    jQueryGrizzly('.doubly-message').hide();
                } else {
                    jQueryGrizzly('.doubly-message').show();
                }
            } /* if user came from google shopping ad, disable converter */
            var utmSource = getParameterByName('utm_source');
            var dfwTracker = getParameterByName('dfw_tracker');
            if ((utmSource == null || utmSource != 'googleshopping') && dfwTracker == null) { /* Country code */
                var autoSwitch = 0;
                if (autoSwitch) {
                    var cookieCountry = Country.cookie.read();
                    var currencyByCountry = [];
                    if (cookieCountry == null || cookieCountry == 'undefined') {
                        jQueryGrizzly.get('https://currency.grizzlyapps.com/getCountry', function(data) {
                            countryCode = data.country_code;
                            if (countryCode in currencyByCountry) {
                                if (jQueryGrizzly.inArray(currencyByCountry[countryCode], allowedCurrencies) != -1) {
                                    defaultCurrency = currencyByCountry[countryCode];
                                    DoublyCurrency.cookie.write(defaultCurrency);
                                    Country.cookie.write(countryCode);
                                } else {
                                    Country.cookie.write('not-allowed');
                                }
                                initCurrencySwitcher();
                            } else {
                                Country.cookie.write('not-allowed');
                            }
                        }, 'json');
                    } else {
                        if (jQueryGrizzly.inArray(currencyByCountry[cookieCountry], allowedCurrencies) != -1) {
                            defaultCurrency = currencyByCountry[cookieCountry];
                        }
                        initCurrencySwitcher();
                    }
                } else {
                    initCurrencySwitcher();
                }
            } else {
                defaultCurrency = shopCurrency;
                DoublyCurrency.cookie.write(defaultCurrency);
                initCurrencySwitcher();
                jQueryGrizzly('.doubly-wrapper').hide();
                jQueryGrizzly('.doubly-float').hide();
            }

            function getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }
        }
    }, "text");
}
