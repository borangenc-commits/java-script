/*let sayi1=prompt( "ilk sayıyı girin");
let sayi2=prompt("ikinci sayıyı grin");
let toplam=Number(sayi1) + Number(sayi2);

document.writeln("<h1> sayıların toplamı: "+ toplam + "</h1");*/
/*const dogruSifre="1234";
let sifre=prompt("şifre girin: ");
document.writeln("<h1>Girilen şifre: "+ sifre + "<h1>");
document.writeln("<h1>Doğru Şifre: "+ dogruSifre+ "<h1>");*/
let ürün=prompt("ürün adı");
let kategori=prompt("kategori adı");
let açiklama=prompt(" ürün açıklaması");
let fiyat=Number(prompt("fiyat girin"));
let adet=Number(prompt("adet girin"));
let aratoplam=(fiyat*adet);
let kdv= aratoplam*0.18;
let kargo= 49;
let toplam=Number(aratoplam + kdv + kargo);
//document.writeln("<h1><b> "Şİpariş Özeti "</b><h1>");
document.writeln("ürün: " + ürün + "<br>");
document.writeln("kategori: " + kategori + "<br>");
document.writeln("açıklama: " + açiklama + "<br>");
document.writeln("fiyat: " + fiyat + "<br>");
document.writeln("adet: "+ adet + "<br>");
document.writeln("kargo: " + kargo + "<br>");
document.writeln("toplam fiyat: " + toplam + "<br>");






