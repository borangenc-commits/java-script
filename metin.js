const metinUzunlugunuBul=metin=>metin.length;
let cumle=prompt("Bir cümle girin");
if (cumle===null || cumle.trim()===""){
    document.writeln("Lütfen geçerli bir cümle giriniz");

}
else{
    let uzunluk=metinUzunlugunuBul(cumle.trim());
    document.writeln(`Gridiğiniz cümlenin uzunluğu:  ${uzunluk} karakterdir`);
}