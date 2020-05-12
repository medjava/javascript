function loophalaman(a) {
    var b = _0x8cce[0];
    nomerkiri = parseInt(numshowpage / 2), nomerkiri == numshowpage - nomerkiri && (numshowpage = 2 * nomerkiri + 1), 
    mulai = nomerhal - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(a / postperpage) + 1, 
    maksimal - 1 == a / postperpage && (maksimal -= 1), akhir = mulai + numshowpage - 1, 
    akhir > maksimal && (akhir = maksimal), b += _0x8cce[1] + nomerhal + _0x8cce[2] + maksimal + _0x8cce[3];
    var c = parseInt(nomerhal) - 1;
    nomerhal > 1 && (b += 2 == nomerhal ? _0x8cce[4] == jenis ? _0x8cce[5] + home_page + _0x8cce[6] + upPageWord + _0x8cce[7] : _0x8cce[8] + lblname1 + _0x8cce[9] + postperpage + _0x8cce[6] + upPageWord + _0x8cce[7] : _0x8cce[4] == jenis ? _0x8cce[10] + c + _0x8cce[11] + upPageWord + _0x8cce[7] : _0x8cce[12] + c + _0x8cce[11] + upPageWord + _0x8cce[7]), 
    mulai > 1 && (b += _0x8cce[4] == jenis ? _0x8cce[13] + home_page + _0x8cce[14] : _0x8cce[8] + lblname1 + _0x8cce[9] + postperpage + _0x8cce[14]), 
    mulai > 2 && (b += _0x8cce[0]);
    for (var d = mulai; d <= akhir; d++) b += nomerhal == d ? _0x8cce[15] + d + _0x8cce[3] : 1 == d ? _0x8cce[4] == jenis ? _0x8cce[13] + home_page + _0x8cce[14] : _0x8cce[8] + lblname1 + _0x8cce[9] + postperpage + _0x8cce[14] : _0x8cce[4] == jenis ? _0x8cce[10] + d + _0x8cce[11] + d + _0x8cce[7] : _0x8cce[12] + d + _0x8cce[11] + d + _0x8cce[7];
    akhir < maksimal - 1 && (b += _0x8cce[0]), akhir < maksimal && (b += _0x8cce[4] == jenis ? _0x8cce[10] + maksimal + _0x8cce[11] + maksimal + _0x8cce[7] : _0x8cce[12] + maksimal + _0x8cce[11] + maksimal + _0x8cce[7]);
    var e = parseInt(nomerhal) + 1;
    nomerhal < maksimal && (b += _0x8cce[4] == jenis ? _0x8cce[10] + e + _0x8cce[11] + downPageWord + _0x8cce[7] : _0x8cce[12] + e + _0x8cce[11] + downPageWord + _0x8cce[7]);
    for (var f = document[_0x8cce[17]](_0x8cce[16]), g = document[_0x8cce[19]](_0x8cce[18]), h = 0; h < f[_0x8cce[20]]; h++) f[h][_0x8cce[21]] = b;
    f && f[_0x8cce[20]] > 0 && (b = _0x8cce[0]), g && (g[_0x8cce[21]] = b);
}

function hitungtotaldata(a) {
    var b = a[_0x8cce[22]], c = parseInt(b[_0x8cce[23]].$t, 10);
    loophalaman(c);
}

function halamanblogger() {
    var a = urlactivepage;
    -1 != a[_0x8cce[25]](_0x8cce[24]) && (lblname1 = -1 != a[_0x8cce[25]](_0x8cce[26]) ? a[_0x8cce[27]](a[_0x8cce[25]](_0x8cce[24]) + 14, a[_0x8cce[25]](_0x8cce[26])) : a[_0x8cce[27]](a[_0x8cce[25]](_0x8cce[24]) + 14, a[_0x8cce[25]](_0x8cce[28]))), 
    -1 == a[_0x8cce[25]](_0x8cce[29]) && -1 == a[_0x8cce[25]](_0x8cce[30]) && (-1 == a[_0x8cce[25]](_0x8cce[24]) ? (jenis = _0x8cce[4], 
    nomerhal = -1 != urlactivepage[_0x8cce[25]](_0x8cce[31]) ? urlactivepage[_0x8cce[27]](urlactivepage[_0x8cce[25]](_0x8cce[31]) + 15, urlactivepage[_0x8cce[20]]) : 1, 
    document[_0x8cce[34]](_0x8cce[32] + home_page + _0x8cce[33])) : (jenis = _0x8cce[35], 
    -1 == a[_0x8cce[25]](_0x8cce[36]) && (postperpage = 20), nomerhal = -1 != urlactivepage[_0x8cce[25]](_0x8cce[31]) ? urlactivepage[_0x8cce[27]](urlactivepage[_0x8cce[25]](_0x8cce[31]) + 15, urlactivepage[_0x8cce[20]]) : 1, 
    document[_0x8cce[34]](_0x8cce[32] + home_page + _0x8cce[37] + lblname1 + _0x8cce[38])));
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var b = document[_0x8cce[40]](_0x8cce[39])[0], c = document[_0x8cce[42]](_0x8cce[41]);
    c[_0x8cce[43]] = _0x8cce[44], c[_0x8cce[48]](_0x8cce[45], home_page + _0x8cce[46] + jsonstart + _0x8cce[47]), 
    b[_0x8cce[49]](c);
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var b = document[_0x8cce[40]](_0x8cce[39])[0], c = document[_0x8cce[42]](_0x8cce[41]);
    c[_0x8cce[43]] = _0x8cce[44], c[_0x8cce[48]](_0x8cce[45], home_page + _0x8cce[37] + lblname1 + _0x8cce[50] + jsonstart + _0x8cce[47]), 
    b[_0x8cce[49]](c);
}

function finddatepost(a) {
    post = a[_0x8cce[22]][_0x8cce[51]][0];
    var b = post[_0x8cce[53]][_0x8cce[52]][_0x8cce[27]](0, 19) + post[_0x8cce[53]][_0x8cce[52]][_0x8cce[27]](23, 29), c = encodeURIComponent(b);
    if (_0x8cce[4] == jenis) var d = _0x8cce[54] + c + _0x8cce[36] + postperpage + _0x8cce[31] + nopage; else var d = _0x8cce[24] + lblname1 + _0x8cce[55] + c + _0x8cce[36] + postperpage + _0x8cce[31] + nopage;
    location[_0x8cce[56]] = d;
}

var nopage, jenis, nomerhal, lblname1;

halamanblogger();
