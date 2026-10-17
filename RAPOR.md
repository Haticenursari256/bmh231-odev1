# BMH231 – WEB PROGRAMLAMA

## 2026–2027 Güz Dönemi
### ÖDEV 1 – ARAŞTIRMA VE UYGULAMA RAPORU

**Ad Soyad:** Hatice Nur Sarı

**Öğrenci Numarası:** 16008125060

**Ders Kodu:** BMH231

**GitHub Deposu:** https://github.com/Haticenursari256/bmh231-odev1

**Teslim Tarihi:** 23 Ekim 2026

---



# A – Kavramsal Sorular

## A1 – İnternet, WWW ve Web Uygulamasının Katmanları

İnternet, dünya genelindeki bilgisayarların ve ağların TCP/IP protokolleri aracılığıyla iletişim kurmasını sağlayan ağlar bütünüdür. World Wide Web (WWW) ise internet üzerinde çalışan, web sayfalarına ve diğer kaynaklara HTTP veya HTTPS üzerinden erişilmesini sağlayan bir hizmettir. Bu nedenle internet ile WWW aynı kavram değildir; WWW, internetin sunduğu hizmetlerden biridir.

Web dışında kullanılan internet hizmetlerine e-posta (SMTP, IMAP) ve dosya aktarımı (FTP) örnek verilebilir.

Bir web uygulaması genel olarak üç katmandan oluşur:

1. **Sunum katmanı (istemci):** Kullanıcının gördüğü arayüzdür. HTML, CSS ve JavaScript kullanılır.
2. **Uygulama katmanı (sunucu):** İstekleri işler ve uygulamanın iş mantığını çalıştırır. Node.js, PHP veya Python gibi teknolojiler kullanılabilir. İstemciyle genellikle HTTP/HTTPS üzerinden haberleşir.
3. **Veri katmanı (veritabanı):** Uygulamanın verilerini saklar ve sorgular. MySQL, PostgreSQL veya MongoDB gibi sistemler kullanılabilir.

Bu üç katman birlikte çalışarak kullanıcının tarayıcıdan gönderdiği isteğin işlenmesini ve sonucun kullanıcıya gösterilmesini sağlar.

## A2 – Statik ve Dinamik Web Siteleri, LAMP ve MERN

**Statik web siteleri**, içerikleri genellikle önceden hazırlanmış HTML, CSS ve JavaScript dosyalarından oluşan sitelerdir. Sunucu aynı dosyayı farklı kullanıcılara gönderebilir. Örneğin, yalnızca iletişim bilgileri ve çalışma saatlerini gösteren basit bir işletme tanıtım sitesi statik olabilir.

**Dinamik web siteleri** ise kullanıcıya, veritabanındaki bilgilere veya yapılan işlemlere göre farklı içerikler sunabilir. Örneğin, bir üniversitenin öğrenci bilgi sisteminde her öğrencinin kendi derslerini ve notlarını görmesi dinamik bir web uygulamasıdır.

**LAMP**, dört teknolojiden oluşan bir web geliştirme yığınıdır:

- **L:** Linux – işletim sistemi
- **A:** Apache – web sunucusu
- **M:** MySQL – veritabanı
- **P:** PHP – sunucu tarafı programlama dili

**MERN** ise şu teknolojilerden oluşur:

- **M:** MongoDB – veritabanı
- **E:** Express.js – Node.js üzerinde çalışan web uygulama çatısı
- **R:** React – kullanıcı arayüzü kütüphanesi
- **N:** Node.js – JavaScript çalışma ortamı

LAMP ile MERN arasındaki temel fark, kullanılan teknolojiler ve uygulamanın geliştirilme biçimidir. LAMP genellikle Apache, PHP ve ilişkisel MySQL veritabanını kullanırken MERN, JavaScript ekosistemine dayanır ve MongoDB ile çalışır. MERN'de hem istemci hem de sunucu tarafında JavaScript kullanılabilir.

## A3 – URL'nin Bileşenleri

İncelenen URL:

`https://api.ornek.com.tr:8443/v1/urunler?kategori=kitap&sirala=fiyat#yorumlar`

Bu URL'nin bileşenleri şunlardır:

| Bileşen | Değer | Açıklama |
|---|---|---|
| Şema (scheme) | `https` | HTTPS protokolünün kullanılacağını belirtir. |
| Ana makine (host) | `api.ornek.com.tr` | İsteğin gönderileceği sunucunun alan adıdır. |
| Port | `8443` | Sunucunun bağlantıyı kabul ettiği port numarasıdır. |
| Yol (path) | `/v1/urunler` | Sunucuda istenen kaynağı belirtir. |
| Sorgu parametresi 1 | `kategori=kitap` | Ürünleri kitap kategorisine göre filtrelemek için kullanılabilir. |
| Sorgu parametresi 2 | `sirala=fiyat` | Ürünleri fiyata göre sıralamak için kullanılabilir. |
| Parça (fragment) | `yorumlar` | Sayfanın yorumlar bölümünü işaret eder. |

**Sunucuya gönderilmeyen bölüm:** `#yorumlar` parçasıdır. Fragment, tarayıcı tarafından istemci tarafında yorumlanır ve normal HTTP isteğinin bir parçası olarak sunucuya gönderilmez.

**Portun açıkça yazılmasının nedeni:** HTTPS için varsayılan port `443` olmasına rağmen bu URL'de `8443` kullanılmıştır. Sunucu standart port yerine farklı bir port üzerinden hizmet verdiği için port numarasının URL'de belirtilmesi gerekir.

## A4 – DNS Çözümleme Süreci

Tarayıcıya `www.bozok.edu.tr` adresi yazıldığında, bilgisayarın bu alan adına karşılık gelen IP adresini öğrenmesi gerekir. DNS (Domain Name System), alan adlarının IP adreslerine çevrilmesini sağlayan sistemdir.

Önbelleklerin boş olduğu varsayıldığında DNS çözümleme süreci şu şekilde gerçekleşir:

1. **Özyinelemeli DNS çözücü (recursive resolver):** Bilgisayar, DNS sorgusunu yapılandırılmış DNS çözücüsüne gönderir. Çözücü, IP adresini bulmak için diğer DNS sunucularına sorgular yapar.
2. **Kök DNS sunucusu (root):** Çözücü kök DNS sunucusuna başvurur. Kök sunucu, `.tr` uzantısından sorumlu DNS sunucularına yönlendirir.
3. **`.tr` DNS sunucuları:** Çözücü `.tr` bölgesinden başlayarak `edu.tr` ve `bozok.edu.tr` alan adlarına ilişkin yetkili sunuculara ulaşmasını sağlayan yönlendirme bilgilerini takip eder.
4. **Yetkili DNS sunucusu (authoritative):** `bozok.edu.tr` alan adının yetkili DNS sunucusu, `www.bozok.edu.tr` için tanımlanmış DNS kaydını döndürür. Sonuç bir IP adresi veya başka bir alan adına işaret eden kayıt olabilir.
5. **Sonucun iletilmesi:** Özyinelemeli çözücü elde ettiği yanıtı bilgisayara iletir. Tarayıcı bu bilgiyi kullanarak sunucuya bağlantı kurabilir.

**TTL (Time to Live):** DNS yanıtının önbellekte ne kadar süre tutulabileceğini belirten değerdir. TTL süresi dolana kadar kayıt yeniden kullanılabilir. Böylece tekrar eden DNS sorguları azaltılır.

**A kaydı:** Bir alan adını IPv4 adresiyle eşleştirir.

**CNAME kaydı:** Bir alan adını başka bir alan adına yönlendiren takma ad kaydıdır. CNAME kullanıldığında hedef alan adının IP adresinin de çözümlenmesi gerekir.

Bu süreç sayesinde kullanıcıların IP adreslerini ezberlemesine gerek kalmadan alan adları üzerinden web sitelerine erişmesi mümkün olur.

## A5 – HTTP POST İsteği ve Oturum Yönetimi

Bir öğrencinin `BMH231` kodlu dersi seçmek için sunucuya JSON verisi gönderdiğini varsayalım. Bu işlem için örnek bir HTTP POST isteği şöyledir:

```http
POST /api/dersler HTTP/1.1
Host: ogrenci.ornek.edu.tr
Content-Type: application/json
Accept: application/json
Content-Length: 16

{"kod":"BMH231"}
```

İsteğin ilk satırında HTTP yöntemi (`POST`), istenen yol (`/api/dersler`) ve HTTP sürümü (`HTTP/1.1`) bulunur. `Host` başlığı hedef sunucuyu belirtir. `Content-Type` gönderilen verinin JSON olduğunu, `Accept` ise istemcinin JSON yanıtını kabul ettiğini ifade eder. Başlıklar ile JSON gövdesi arasında boş bir satır bulunur.

**HTTP'nin durumsuz (stateless) olması**, sunucunun her HTTP isteğini kendi başına değerlendirmesi ve önceki isteğin oturum durumunu protokol gereği otomatik olarak hatırlamaması anlamına gelir.

Web uygulamalarında kullanıcı oturumunu sürdürebilmek için çerezler kullanılabilir. Kullanıcı giriş yaptıktan sonra sunucu, yanıtında `Set-Cookie` başlığıyla bir oturum kimliği gönderebilir. Tarayıcı bu çerezi saklar ve uygun sonraki isteklerde `Cookie` başlığıyla sunucuya iletir. Sunucu da oturum kimliğini kontrol ederek kullanıcının giriş durumunu belirleyebilir.

Bu şekilde HTTP durumsuz olmasına rağmen uygulama düzeyinde oturum yönetimi sağlanabilir.

## A6 – HTTP Durum Kodları

HTTP durum kodları, sunucunun bir isteğe verdiği yanıtın sonucunu belirtir. Durum kodları genel olarak 2xx (başarılı), 3xx (yönlendirme), 4xx (istemci hatası) ve 5xx (sunucu hatası) gruplarına ayrılır.

| Durum | HTTP durum kodu | Açıklama |
|---|---|---|
| a) Yeni bir öğrenci kaydı oluşturuldu. | **201 Created** | Yeni bir kaynak başarıyla oluşturulmuştur. |
| b) Giriş yapmamış kullanıcı notlarını görmek istiyor. | **401 Unauthorized** | Kullanıcının kimliğini doğrulaması gerekir. |
| c) Giriş yapmış öğrenci not girme işlemi yapmak istiyor. | **403 Forbidden** | Kullanıcının kimliği bilinse de bu işlem için yetkisi yoktur. |
| d) Bir sayfa kalıcı olarak başka adrese taşındı. | **301 Moved Permanently** | Kaynağın kalıcı olarak başka URL'ye taşındığını belirtir. |
| e) Önbellekteki içerik hâlâ geçerli. | **304 Not Modified** | Önbellekteki kaynak yeniden kullanılabilir. |
| f) İstenen sayfa bulunamadı. | **404 Not Found** | Sunucuda istenen kaynak bulunamamıştır. |
| g) Sunucuda beklenmeyen bir hata oluştu. | **500 Internal Server Error** | Sunucu isteği işlerken beklenmeyen bir hatayla karşılaşmıştır. |
| h) Sunucu bakım nedeniyle geçici olarak hizmet veremiyor. | **503 Service Unavailable** | Sunucu geçici olarak isteği karşılayamamaktadır. |

**401 ve 403 arasındaki fark:** 401, kimlik doğrulamasının gerekli olduğunu veya geçerli olmadığını belirtir. 403 ise sunucunun isteği anladığını ancak kullanıcının bu işlemi yapmasına izin verilmediğini gösterir.

**301 ve 308 arasındaki fark:** Her ikisi de kalıcı yönlendirmedir. Ancak 308, isteğin HTTP yönteminin ve gövdesinin korunmasını gerektirir. Bu nedenle POST gibi yöntemlerin korunması gereken durumlarda 308 tercih edilebilir.

## A7 – HTTP Yöntemleri: GET, POST, PUT ve DELETE

HTTP yöntemleri, istemcinin sunucudaki kaynak üzerinde yapmak istediği işlemi belirtir.

| Yöntem | Temel amacı | Safe (güvenli) | Idempotent (tekrarlanabilir) |
|---|---|---|---|
| **GET** | Kaynağı okumak veya görüntülemek | Evet | Evet |
| **POST** | Veri göndermek, işlem başlatmak veya yeni kaynak oluşturmak | Hayır | Genellikle hayır |
| **PUT** | Belirli bir kaynağı oluşturmak veya bütünüyle değiştirmek | Hayır | Evet |
| **DELETE** | Belirli bir kaynağı silmek | Hayır | Evet |

**Safe (güvenli) yöntem:** İsteğin amacı sunucudaki kaynakların durumunu değiştirmek değildir. Örneğin GET, veri okumak için kullanılır. Buradaki güvenli ifadesi, isteğin şifreli veya siber saldırılara karşı korumalı olduğu anlamına gelmez.

**Idempotent yöntem:** Aynı isteğin bir kez veya birden fazla kez uygulanması, sunucudaki kaynak üzerinde aynı amaçlanan son durumu oluşturur.

Örneğin `PUT /api/ogrenciler/5` isteğiyle bir öğrencinin bilgileri aynı verilerle tekrar tekrar güncellendiğinde sonuç değişmez. Benzer şekilde, bir kaynağı DELETE ile silmek için aynı istek tekrarlandığında kaynak silinmiş durumda kalır. İkinci isteğin yanıt kodu farklı olabilir ancak kaynağın son durumu aynıdır.

**POST isteğinin tekrar gönderilme riski:** Kullanıcı bir kayıt oluşturma isteğini bağlantı sorunu nedeniyle yeniden gönderirse sunucuda iki ayrı kayıt oluşabilir. Bu nedenle özellikle ödeme ve kayıt oluşturma gibi işlemlerde tekrar eden istekleri kontrol etmek önemlidir.

**PUT ve PATCH farkı:** PUT genellikle kaynağın tamamını değiştirmek için kullanılırken PATCH kaynağın yalnızca belirli alanlarını güncellemek amacıyla kullanılır. PATCH yönteminin idempotent olması zorunlu değildir.

## A8 – HTTPS, TLS ve Dijital Sertifikalar

**HTTPS (Hypertext Transfer Protocol Secure)**, HTTP iletişiminin TLS (Transport Layer Security) protokolüyle korunmuş hâlidir. HTTPS, tarayıcı ile web sunucusu arasında aktarılan verilerin güvenliğini artırır.

TLS, iletişimde üç temel güvenlik özelliği sağlar:

1. **Gizlilik (confidentiality):** Tarayıcı ile sunucu arasında gönderilen veriler şifrelenir. Böylece ağ trafiğini izleyen üçüncü kişilerin iletilen bilgileri okuması zorlaştırılır.
2. **Bütünlük (integrity):** Verilerin aktarım sırasında değiştirilip değiştirilmediği kontrol edilir. Yetkisiz değişiklikler tespit edilebilir.
3. **Kimlik doğrulama (authentication):** Tarayıcı, sunucunun sunduğu dijital sertifikayı kontrol ederek bağlandığı alan adının kimliğini doğrulamaya çalışır.

**Dijital sertifika**, sunucunun alan adı ile açık anahtarı arasında doğrulanabilir bir bağlantı kurar. Sertifikalar genellikle güvenilir bir **Sertifika Otoritesi (CA – Certificate Authority)** tarafından imzalanır. Tarayıcı; sertifikanın geçerlilik süresini, alan adıyla eşleşmesini ve güven zincirini kontrol eder.

TLS bağlantısı kurulurken tarayıcı ve sunucu, güvenli bir anahtar değişim süreci sonucunda ortak oturum anahtarları oluşturur. Bu anahtarlar, bağlantı boyunca verilerin şifrelenmesinde kullanılır.

**Adres çubuğundaki kilit simgesi ne anlama gelir?** Kilit veya bağlantı güvenliği göstergesi, tarayıcı ile site arasındaki bağlantının HTTPS üzerinden korunduğunu ifade eder. Ancak bu gösterge, web sitesindeki bilgilerin mutlaka doğru olduğunu veya sitenin dolandırıcılık amacı taşımadığını garanti etmez. Zararlı bir site de geçerli bir HTTPS sertifikasına sahip olabilir.

Sonuç olarak HTTPS, iletişimin gizliliğini, bütünlüğünü ve sunucu kimliğinin doğrulanmasını destekler; ancak tek başına web sitesinin tamamen güvenilir olduğunu kanıtlamaz.

## A9 – Tarayıcıda Kaynakların Yüklenmesi ve Sayfanın Oluşturulması

Bir web sayfasında HTML belgesiyle birlikte `stil.css`, `menu.js`, `proje1.png` ve `proje2.png` dosyalarının kullanıldığını varsayalım.

Tarayıcı, HTML belgesini aldıktan sonra içeriği ayrıştırır ve gerekli ek kaynakları istemeye başlar. Bu örnekte normal koşullarda **toplam 5 HTTP isteği** yapılması beklenir:

1. HTML belgesi için 1 istek
2. `stil.css` için 1 istek
3. `menu.js` için 1 istek
4. `proje1.png` için 1 istek
5. `proje2.png` için 1 istek

Bu sayı, kaynakların önbellekte bulunmaması ve başka ek kaynakların yüklenmemesi varsayımına dayanır.

**DOM (Document Object Model):** Tarayıcı, HTML belgesini ayrıştırarak sayfanın yapısını temsil eden DOM ağacını oluşturur.

**CSSOM (CSS Object Model):** CSS kuralları ayrıştırılarak CSSOM oluşturulur. DOM ve CSSOM bilgileri kullanılarak sayfanın görünür öğelerini temsil eden render tree (oluşturma ağacı) hazırlanır. Ardından öğelerin konumları ve boyutları hesaplanır, sayfa ekrana çizilir.

**`defer` özelliği:** `menu.js` dosyası `defer` ile yükleniyorsa JavaScript dosyası HTML ayrıştırılırken paralel indirilebilir. Ancak kodun çalıştırılması HTML belgesinin ayrıştırılması tamamlanana kadar ertelenir. Bu nedenle `defer`, HTML ayrıştırılmasının JavaScript dosyasının indirilmesi yüzünden durmasını önlemeye yardımcı olur.

**`display: none` kullanılan görsel:** `proje2.png` görselinin CSS ile gizlenmiş olması, dosyanın kesinlikle indirilmeyeceği anlamına gelmez. HTML içindeki bir `<img>` öğesinin `src` özelliğiyle belirtilen görsel, öğe görünmese bile tarayıcı tarafından indirilebilir. Ancak `display: none` uygulanan öğe render tree içinde yer almaz ve ekranda gösterilmez.

Sonuç olarak tarayıcı, kaynakları indirip HTML ve CSS'yi işleyerek sayfayı oluşturur. Bir öğenin ekranda görünmemesi, ona ait kaynağın ağ üzerinden hiç istenmediği anlamına gelmez.

## A10 – Git Çalışma Alanları ve npm Sürüm Yönetimi

**Git**, yazılım projelerinde dosyalarda yapılan değişikliklerin geçmişini takip etmek ve farklı geliştirme çalışmalarını yönetmek için kullanılan bir sürüm kontrol sistemidir.

Git'te üç temel çalışma alanı bulunur:

1. **Working Tree (çalışma dizini):** Proje dosyalarının bilgisayarda düzenlendiği alandır. Henüz Git'e kaydedilmemiş değişiklikler burada bulunabilir.
2. **Staging Area / Index (hazırlık alanı):** Bir sonraki commit işlemine eklenecek değişikliklerin seçildiği alandır.
3. **Local Repository (yerel depo):** Commit işlemleriyle kaydedilmiş sürümlerin ve proje geçmişinin tutulduğu alandır.

**Temel Git komutları:**

- `git add`: Seçilen dosya değişikliklerini staging area'ya ekler.
- `git commit`: Staging area'daki değişiklikleri yeni bir commit olarak yerel depoya kaydeder.
- `git restore`: Çalışma dizinindeki değişiklikleri geri almak için kullanılabilir. `git restore --staged` ise dosyayı staging area'dan çıkarır.
- `git merge`: Farklı dallarda yapılan değişiklikleri birleştirir. Aynı satırlarda uyumsuz değişiklikler varsa **merge conflict (birleştirme çakışması)** oluşabilir. Bu durumda çakışan içerik düzenlenir, ardından `git add` ve uygun commit işlemleriyle birleştirme tamamlanır.

**`package.json` dosyasındaki sürüm ifadeleri:**

Semantic Versioning (SemVer) yaklaşımında sürüm numaraları genel olarak `MAJOR.MINOR.PATCH` biçimindedir.

- **`^3.2.1` (caret):** Genellikle `3.2.1` ve üzerindeki, ancak `4.0.0` sürümünden küçük sürümlere izin verir. Yani uyumlu minor ve patch güncellemelerini kabul eder.
- **`~3.2.1` (tilde):** Genellikle `3.2.1` ve üzerindeki, ancak `3.3.0` sürümünden küçük sürümlere izin verir. Yani yalnızca aynı minor sürüm içindeki patch güncellemelerini kabul eder.

**`node_modules` klasörü neden Git'e eklenmez?**

`node_modules`, projede kullanılan bağımlılıkların kurulduğu klasördür. Çok sayıda dosya içerebilir ve `package.json` ile `package-lock.json` kullanılarak yeniden oluşturulabilir. Bu nedenle genellikle `.gitignore` dosyasına eklenir.

Projeyi başka bir bilgisayara klonlayan kişi, proje klasöründe `npm install` komutunu çalıştırarak gerekli bağımlılıkları yükleyebilir. Ardından projeyi çalıştırabilir.

Bu ödevde de proje GitHub'a yüklenmiş, farklı bir klasöre klonlanmış ve bağımlılıklar yeniden yüklenerek çalıştırılması test edilmiştir.

# B – Bir Web Sitesinin Anatomisi

## İncelenen Web Sitesi

Bu bölümde `https://www.wikipedia.org` adresini inceledim. DNS sorgulaması, HTTP yanıt başlıkları, tarayıcı Network kayıtları, HTTPS sertifikası ve çerez özelliklerini kontrol ettim.

## B1 – Arama URL'sinin İncelenmesi

Wikipedia'nın Türkçe sürümünde arama kutusuna `web programlama` yazarak arama yaptım. Arama sonucunda adres çubuğunda aşağıdaki URL oluştu:

`https://tr.wikipedia.org/w/index.php?title=%C3%96zel:Ara&go=Go&search=web+programlama&ns0=1`

Bu URL'nin bileşenlerini inceledim:

- **Protokol:** `https`
- **Alan adı:** `tr.wikipedia.org`
- **Yol:** `/w/index.php`
- **Sorgu parametreleri:** `title=Özel:Ara`, `go=Go`, `search=web programlama`, `ns0=1`
- **Fragment:** Bulunmuyor.

Sorgu parametreleri URL'de `?` işaretinden sonra başlamakta ve `&` işaretleriyle birbirinden ayrılmaktadır. `search` parametresi aranan ifadeyi belirtirken `ns0=1` parametresi ana ad alanının aramaya dahil edildiğini belirtmektedir.

Bu inceleme sayesinde bir web uygulamasında kullanıcı tarafından yapılan arama işleminin URL üzerinden nasıl ifade edilebildiğini gözlemledim.

## B2 – DNS İncelemesi

PowerShell terminalinde aşağıdaki komutu çalıştırdım:

`nslookup www.wikipedia.org`

Sorgu sonucunda aşağıdaki bilgiler elde edildi:

- DNS sunucusu: `dnscache.kyk.turktelekom.com.tr`
- DNS sunucusu IP adresi: `10.106.4.20`
- Alan adı takma adı: `dyna.wikimedia.org`
- IPv4 adresi: `185.15.58.224`
- IPv6 adresi: `2a02:ec80:600:ed1a::1`

Sorgu sırasında iki kez zaman aşımı uyarısı görülmesine rağmen DNS sunucusundan yanıt alındı. Bu işlem sayesinde alan adlarının IP adreslerine nasıl çözümlendiğini gözlemledim.

### www Olan ve Olmayan Alan Adlarının Karşılaştırılması

`www.wikipedia.org` adresine ek olarak `nslookup wikipedia.org` komutunu çalıştırdım.

Her iki sorguda da IPv4 adresi `185.15.58.224`, IPv6 adresi ise `2a02:ec80:600:ed1a::1` olarak döndü.

`www.wikipedia.org` sorgusunda `dyna.wikimedia.org` takma adı görüntülenirken `wikipedia.org` sorgusunda takma ad gösterilmedi.

Her iki sorguda da DNS zaman aşımı uyarıları görülmesine rağmen IP adresleri başarıyla elde edildi.

Bu ölçümlerde iki alan adının aynı IP adreslerine çözümlendiğini, ancak DNS yanıtlarında farklılık bulunabildiğini gözlemledim.

## B3 – HTTP Yanıt Başlıkları

`curl.exe -I https://www.wikipedia.org` komutunu çalıştırdım.

Sunucudan `HTTP/1.1 200 OK` yanıtı alındı. Yanıt başlıklarında `content-type: text/html`, `cache-control`, `strict-transport-security` ve `set-cookie` alanlarını gözlemledim.

Bu başlıklar sunucunun döndürdüğü içerik türü, önbellekleme kuralları, HTTPS güvenliği ve çerez işlemleri hakkında bilgi vermektedir.

### HTTP'den HTTPS'ye Yönlendirme Testi

Wikipedia'nın HTTP üzerinden gelen istekleri HTTPS'ye yönlendirip yönlendirmediğini kontrol etmek için PowerShell terminalinde şu komutu çalıştırdım:

`curl.exe -I http://www.wikipedia.org`

Komut sonucunda `HTTP/1.1 301 Moved Permanently` yanıtı aldım. Yanıt başlıklarında `location: https://www.wikipedia.org/` bilgisi bulunuyordu.

301 durum kodu, istenen kaynağın kalıcı olarak başka bir adrese taşındığını belirtmektedir. Bu testte Wikipedia'nın HTTP adresinden HTTPS adresine yönlendirme yaptığını gözlemledim.

HTTPS kullanılması, tarayıcı ile sunucu arasındaki iletişimin TLS ile şifrelenmesine yardımcı olur.

## B4 – Network ve Timing İncelemesi

Chrome geliştirici araçlarının Network sekmesini kullanarak Wikipedia'nın ana belge isteğini inceledim.

Ölçülen değerler:

- Queueing: 1.59 ms
- Stalled: 0.63 ms
- Request sent: 0.40 ms
- Waiting (TTFB): 65.52 ms
- Content download: 0.76 ms
- Toplam süre: 68.91 ms

Ölçüm sırasında ana belge isteğinin HTTP/2 üzerinden gerçekleştiğini ve `304` durum kodu döndürdüğünü gözlemledim. Bu durum, tarayıcının önbellekteki içeriği yeniden kullanabildiğini göstermektedir.

### Önbellek Açık ve Kapalı Ölçümlerinin Karşılaştırılması

Chrome Network sekmesinde Wikipedia ana sayfasını önbellek açık ve kapalı olacak şekilde yeniden yükleyerek karşılaştırdım.

| Ölçüm | Önbellek açık | Önbellek kapalı |
|---|---:|---:|
| İstek sayısı | 6 | 6 |
| Aktarılan veri | 774 B | 101 kB |
| Kaynak boyutu | 242 kB | 242 kB |
| Load süresi | 141 ms | 2.17 sn |
| DOMContentLoaded | 135 ms | 2.17 sn |
| Ana HTML durum kodu | 304 | 200 |

Her iki ölçümde de HTTP/2 (`h2`) protokolünü gözlemledim. Önbellek açıkken ana HTML isteği `304 Not Modified` yanıtı verirken önbellek kapalıyken `200 OK` yanıtı verdi.

Önbellek kapalı ölçümünde en büyük üç aktarılan kaynak `Wikipedia-logo-v2@2x.png` (38.3 kB), ana HTML belgesi (30.1 kB) ve `sprite-e49fbf32.svg` (19.1 kB) oldu.

Önbellek kullanımı, bu ölçümlerde ağ üzerinden aktarılan veri miktarını azaltmış ve sayfanın daha kısa sürede yüklenmesini sağlamıştır.

## B5 – HTTPS Sertifikası ve Çerez İncelemesi

Chrome üzerinden Wikipedia'nın HTTPS sertifikasını görüntüledim.

- Sertifika alan adı: `*.wikipedia.org`
- Sertifikayı veren kuruluş: Let's Encrypt
- Veren sertifikanın CN değeri: YE2
- Başlangıç tarihi: 4 Ekim 2026
- Bitiş tarihi: 2 Ocak 2027
- Parmak izi algoritması: SHA-256

HTTPS sertifikaları, bağlantının güvenli kurulmasına ve sunucunun kimliğinin doğrulanmasına yardımcı olur.

### Çerez İncelemesi

Chrome geliştirici araçlarında Application → Cookies bölümünü kullanarak Wikipedia'nın çerezlerini inceledim.

Beş çerez gözlemledim: `GeoIP`, `NetworkProbeLimit`, `WMF-Last-Access`, `WMF-Last-Access-Global` ve `WMF-Uniq`.

Çerezlerin tamamında Secure özelliğinin etkin olduğunu gördüm. Üç çerezde HttpOnly özelliği etkin durumdaydı. Ayrıca iki çerezde SameSite=None değeri bulunuyordu.

Bu inceleme sayesinde çerezlerin tarayıcıda nasıl saklandığını ve güvenlik özelliklerinin nasıl kontrol edilebildiğini öğrendim.

## Genel Değerlendirme

Wikipedia üzerinde yaptığım inceleme, bir web sitesine erişimin DNS çözümlemesi, HTTP iletişimi, güvenli bağlantı kurulması ve tarayıcı işlemleri gibi birden fazla aşamadan oluştuğunu gösterdi. Chrome geliştirici araçları ve terminal komutları sayesinde bu süreçleri doğrudan gözlemleyebildim.

# C – Git, GitHub ve npm ile Node.js Sunucusu

## C1 – Git Deposunun Hazırlanması

Projem için `bmh231-odev1` adlı bir Git deposu oluşturdum. Git kullanıcı bilgilerimi yapılandırdım ve `git init` komutuyla yerel depoyu başlattım.

`.gitignore` dosyasında `node_modules/` ve `.env` girdilerini kullanarak bağımlılıkların ve ortam değişkeni dosyalarının Git geçmişine eklenmesini engelledim.

## C2 – npm ve dayjs Kurulumu

`npm init -y` komutuyla Node.js projesini başlattım ve `dayjs` paketini kurdum.

`package.json` dosyasına `npm start` komutuyla sunucuyu çalıştıracak başlangıç betiğini ekledim.

`package.json` ve `package-lock.json` dosyalarını Git'e ekledim. `node_modules` klasörünü ise `.gitignore` sayesinde depoya dahil etmedim.

## C3 – Node.js HTTP Sunucusu

Express kullanmadan, Node.js'in yerleşik `http` modülünü kullanarak 3000 portunda çalışan bir sunucu geliştirdim.

Sunucuda dört geçerli adres bulunmaktadır:

- `/` – Ana sayfa, HTML
- `/hakkimda` – Hakkımda sayfası, HTML
- `/api/ders` – Ders bilgileri, JSON
- `/api/agep` – AGEP teslim tarihine kalan gün bilgisi, JSON

`/api/agep` adresinde `dayjs` kütüphanesiyle `2026-11-01` tarihine kalan gün sayısını hesapladım.

Bilinmeyen adresler için `404 Not Found`, GET dışındaki HTTP yöntemleri için `405 Method Not Allowed` yanıtı döndürdüm. Yanıtlarda uygun `Content-Type` başlıklarını kullandım ve isteklerin yöntemini ve yolunu terminale yazdırdım.

### C3 – HTTP İsteklerinin Test Edilmesi

Geliştirdiğim Node.js sunucusunun yanıtlarını PowerShell terminalinde `curl.exe -i` komutuyla test ettim.

| Test | Komut | Beklenen durum |
|---|---|---|
| Ana sayfa | `curl.exe -i http://localhost:3000/` | 200 OK |
| Hakkımda | `curl.exe -i http://localhost:3000/hakkimda` | 200 OK |
| Ders API | `curl.exe -i http://localhost:3000/api/ders` | 200 OK |
| AGEP API | `curl.exe -i http://localhost:3000/api/agep` | 200 OK |
| Olmayan sayfa | `curl.exe -i http://localhost:3000/olmayan-sayfa` | 404 Not Found |
| POST yöntemi | `curl.exe -i -X POST http://localhost:3000/api/ders` | 405 Method Not Allowed |

Bu testler sunucunun geçerli adreslere başarılı yanıt verdiğini, bilinmeyen adresleri 404 durum koduyla bildirdiğini ve desteklenmeyen HTTP yöntemlerini 405 durum koduyla reddettiğini kontrol etmek amacıyla hazırlandı.

### C3 – Gerçek Test Sonuçları

17 Ekim 2026 tarihinde PowerShell terminalinde altı HTTP isteğini çalıştırdım. Ana sayfa, Hakkımda sayfası, Ders API ve AGEP API istekleri `200 OK` yanıtı verdi.

Olmayan sayfa isteğinde `404 Not Found` ve `Sayfa bulunamadı` metni döndürüldü.

POST yöntemiyle `/api/ders` adresine gönderdiğim istekte `405 Method Not Allowed` yanıtı alındı. Sunucu ayrıca `Allow: GET` başlığını gönderdi.

AGEP API yanıtında `sonTeslimTarihi` değeri `2026-11-01`, ölçüm anındaki `kalanGun` değeri ise `14` olarak görüntülendi.

Bu sonuçlar sunucunun beklenen HTTP durum kodlarını, içerik türlerini ve yöntem kısıtlamalarını doğru uyguladığını göstermektedir.

![Sunucu HTTP test sonuçları](ekran-goruntuleri/sunucu-testleri.png)

## C4 – Git Dalları ve Birleştirme İşlemleri

Git üzerinde `hakkimda` ve `baslik` adlı iki dal kullanarak dal oluşturma ve birleştirme işlemlerini gerçekleştirdim.

`hakkimda` dalında Hakkımda sayfasını güncelledim ve değişiklikleri ana dala birleştirdim.

`baslik` dalında ana sayfanın başlığını değiştirdim. Ana dalda da aynı başlık üzerinde farklı bir değişiklik yaparak birleştirme çakışması oluşturdum. Çakışmayı düzenleyerek çözdüm ve birleştirme işlemini tamamladım.

`git log --oneline --graph --all` komutuyla commit geçmişini ve dalların birleşme yapısını görüntüledim. Çıktıda 16 commit bulunmaktadır. Bu sayı, ödevde istenen en az sekiz commit koşulunu karşılamaktadır.

## C5 – GitHub Deposu

Projemi GitHub üzerindeki `bmh231-odev1` deposuna gönderdim.

Depo adresi: `https://github.com/Haticenursari256/bmh231-odev1`

Projede `README.md`, `package.json`, `package-lock.json`, `.gitignore` ve `sunucu.js` dosyaları bulunmaktadır.

GitHub'daki projeyi farklı bir klasöre klonlayarak `npm install` ve `npm start` komutlarıyla çalıştırmayı da test ettim.

Git geçmişinde `main` ve `origin/main` işaretçilerinin aynı commit üzerinde olduğunu gözlemledim.

# D – Bütünleştirme: Yerel Sunucu ve Wikipedia Karşılaştırması

## Giriş

Bu çalışmada Node.js kullanarak oluşturduğum yerel web sunucusu ile Wikipedia web sitesinin HTTP isteklerini karşılaştırdım. Amacım, yerel ortamda çalışan bir sunucu ile internet üzerinden erişilen gerçek bir web sitesinin yanıt süreleri arasındaki farkları incelemekti. Ölçümleri Google Chrome tarayıcısının geliştirici araçlarında bulunan Network sekmesindeki Timing bölümünü kullanarak gerçekleştirdim.

## Ölçüm Yöntemi

İlk olarak kendi geliştirdiğim sunucuyu `localhost:3000` adresinde çalıştırdım. Daha sonra `http://localhost:3000/api/agep` adresine giderek sunucunun JSON biçiminde AGEP teslim tarihini ve kalan gün sayısını döndürdüğünü kontrol ettim. Chrome geliştirici araçlarını açıp Network sekmesinden ilgili isteği seçtim ve Timing değerlerini inceledim.

Karşılaştırma için `https://www.wikipedia.org` adresini kullandım. Aynı işlemleri Wikipedia üzerinde de gerçekleştirdim. Böylece iki farklı ortamda yapılan HTTP isteklerinin bekleme, gönderme ve indirme sürelerini karşılaştırabildim.

## Ölçüm Sonuçları


| Ölçüm | Yerel Sunucu /api/agep | Wikipedia |
|---|---:|---:|
| Queueing | 0.71 ms | 1.59 ms |
| Stalled | 0.53 ms | 0.63 ms |
| Request sent | 0.20 ms | 0.40 ms |
| Waiting (TTFB) | 6.25 ms | 65.52 ms |
| Content download | 0.54 ms | 0.76 ms |
| Toplam süre | 8.23 ms | 68.91 ms |

## Sonuçların Değerlendirilmesi
Ölçüm sonuçlarına göre yerel sunucumun `/api/agep` isteği 8.23 milisaniyede tamamlanırken Wikipedia'nın ana sayfa isteği 68.91 milisaniyede tamamlandı. Bu ölçümde Wikipedia isteği yaklaşık 8,4 kat daha uzun sürdü. İki istek arasındaki en büyük fark Waiting (TTFB) aşamasında ortaya çıktı. Yerel sunucuda bu süre 6.25 milisaniye, Wikipedia'da ise 65.52 milisaniye olarak ölçüldü. Yerel sunucunun aynı bilgisayarda çalışması, uzak bir internet sunucusuna erişilmesini gerektirmediği için süre farkını etkileyen önemli faktörlerden biridir. 


Request sent değerlerinin her iki ortamda da oldukça düşük olduğunu gördüm. Content download aşamasında da büyük bir fark oluşmadı. Ancak iki isteğin içerikleri aynı değildir. Kendi sunucum küçük bir JSON yanıtı gönderirken Wikipedia bir HTML belgesi döndürmektedir. Bu nedenle sonuçları değerlendirirken aktarılan verinin türünü ve boyutunu dikkate almak gerekir.

Ayrıca Wikipedia isteğinin tarayıcı önbelleğinden ve mevcut bağlantılardan etkilenmiş olabileceğini göz önünde bulundurmak gerekir. Tek bir ölçüm, sitelerin genel performansını kesin olarak belirlemek için yeterli değildir. Daha güvenilir bir değerlendirme yapmak için önbellek koşullarını kontrol ederek ölçümleri birkaç kez tekrarlamak ve ortalama süreleri karşılaştırmak daha doğru olacaktır.

### Bağlantı ve Tarayıcı İşlemlerinin Karşılaştırılması

`http://localhost:3000/api/agep` adresinde istek aynı bilgisayardaki Node.js sunucusuna gönderilir. Bu nedenle uzak bir sunucuya erişmek için internet üzerinden DNS sorgusu yapılması gerekmez. Bağlantı HTTP kullandığından TLS şifrelemesi de bulunmaz.

Wikipedia'da ise HTTPS kullanılır. Alan adının IP adresine çözümlenmesi, TCP bağlantısı ve TLS güvenliğinin sağlanması gerekebilir. Ancak mevcut bağlantılar yeniden kullanıldığında bu işlemler her istekte tekrarlanmayabilir.

Yerel sunucum JSON verisi döndürürken Wikipedia HTML belgesi ve ek kaynaklar sunar. Tarayıcı HTML içeriğini işleyerek sayfayı oluşturur; JSON yanıtı ise farklı şekilde görüntülenir.

Yerel sunucuyu internette yayımlamak isteseydim HTTPS desteği, HTTP'den HTTPS'ye yönlendirme ve uygun önbellekleme başlıkları eklemem gerekirdi.

## Genel Sonuç

Bu çalışma sayesinde HTTP isteklerinin yalnızca sunucuya gönderilip yanıt alınmasından ibaret olmadığını öğrendim. Tarayıcının isteği sıraya alması, bağlantı koşulları, sunucunun yanıt vermesi ve içeriğin indirilmesi toplam süreyi etkilemektedir.

Node.js ile oluşturduğum sunucunun yerel ortamda hızlı yanıt verdiğini gözlemledim. Wikipedia ise internet üzerinden erişilen ve farklı altyapı koşullarında çalışan bir web sitesidir. Bu yüzden elde ettiğim süre farkı, iki sistemin genel kalitesinden çok test ortamlarının ve istek özelliklerinin farklılığını göstermektedir.

Sonuç olarak Chrome Network ve Timing araçlarının web uygulamalarının performansını anlamak için oldukça faydalı olduğunu gördüm. Bu araçları kullanarak kendi geliştirdiğim uygulamanın ağ davranışını incelemeyi ve gerçek web siteleriyle karşılaştırmayı öğrendim.

# Kaynakça

1. MDN Web Docs – HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP
2. MDN Web Docs – Web teknolojileri: https://developer.mozilla.org/en-US/docs/Web
3. Node.js Resmî Dokümantasyonu: https://nodejs.org/docs/latest/api/
4. Git Resmî Dokümantasyonu: https://git-scm.com/doc
5. npm Resmî Dokümantasyonu: https://docs.npmjs.com/
6. Wikipedia: https://www.wikipedia.org/

# Yapay Zekâ Kullanım Beyanı

Bu ödevin hazırlanması sırasında ChatGPT'den konu açıklamaları, raporun düzenlenmesi, yazım kontrolü ve teknik sorunların çözümü konusunda destek aldım. Terminal komutlarını, Git işlemlerini, Node.js sunucusunun testlerini ve tarayıcı incelemelerini kendi bilgisayarımda gerçekleştirdim. Elde ettiğim sonuçları kontrol ederek rapora aktardım.