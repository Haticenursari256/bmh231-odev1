const http = require("http");
const dayjs = require("dayjs");

const sunucu = http.createServer((istek, yanit) => {
    const yol = new URL(istek.url, "http://localhost:3000").pathname;
    console.log(istek.method, yol);

    if (istek.method !== "GET") {
        yanit.writeHead(405, {
            "Content-Type": "text/plain; charset=utf-8",
            "Allow": "GET"
        });
        yanit.end("Yönteme izin verilmiyor");
        return;
    }

    if (yol === "/") {
        yanit.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        yanit.end(`<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Web Programlama Ödevim</title>
</head>
<body>
<h1>BMH231 - Hatice Nur Sari - Web Odevim</h1>
    <a href="/hakkimda">Hakkımda</a>
</body>
</html>`);
    } else if (yol === "/hakkimda") {
        yanit.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        yanit.end(`<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Hakkımda</title>
</head>
<body>
    <h1>Hatice Nur Sari</h1>
    <p>Yozgat Bozok Üniversitesi Bilgisayar Mühendisliği
    ikinci sınıf öğrencisiyim. Web programlamayı öğreniyorum.</p>
    <a href="/">Ana sayfaya dön</a>
</body>
</html>`);
    } else if (yol === "/iletisim") {
        yanit.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        yanit.end("İletişim sayfası");

    } else if (yol === "/dersler") {
        yanit.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        yanit.end("Derslerim");

    } else if (yol === "/projeler") {
        yanit.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        yanit.end("Projelerim");
    } else if (yol === "/agep") {
        const bugun = dayjs();
        const agepTarihi = dayjs("2026-11-01");
        const kalanGun = agepTarihi.diff(bugun, "day");

        yanit.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        yanit.end("AGEP'e kalan gün: " + kalanGun);

    } else {
        yanit.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        yanit.end("Sayfa bulunamadı");
    }
});

sunucu.listen(3000, () => {
    console.log("Sunucu çalışıyor: http://localhost:3000");
});