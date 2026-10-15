const http = require("http");

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
    <h1>Web Programlama Ödevim</h1>
    <a href="/hakkimda">Hakkımda</a>
</body>
</html>`);
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