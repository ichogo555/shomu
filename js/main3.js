{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 19 - 9);
    const m = Math.floor(Math.random() * 19 - 9);
    const l = Math.floor(Math.random() * 19 - 9);
    const s = Math.floor(Math.random() * 19 - 9);
    btn1.textContent = n;
    btn2.textContent = m;
    btn3.textContent = l;
    btn4.textContent = s; 
    btn5.textContent = n+m+l+s;
  });
}
function num(a,b,c,d,e,f)
    {
      return a;
    }
    var a = Math.floor(Math.random() * 8 + 2);
    var b = Math.floor(Math.random() * 8 + 2);
    var c = Math.floor(Math.random() * 8 + 2);
    var d = Math.floor(Math.random() * 8 + 2);
    var e = Math.floor(Math.random() * 8 + 2);
    var f = Math.floor(Math.random() * 8 + 2);

    document.write('('+num(a)+'x+'+num(b)+'y)('+num(c)+'x+'+num(d)+'y) = ')

    document.write(a*c+"x<sup>2</sup>+" + (a*d+b*c) + "xy+" + (b*d) + "y<sup>2</sup>" + "<br><br>");

    document.write("ex+fx = (e+f)x<sup>2</sup>" + "<br>");
    document.write("e = " + num(e) + "<br>");
    document.write("f = " + num(f) + "<br>");
    document.write(e+f + "x<sup>2</sup>" + "<br><br>");
    var h = new Date();
    document.write((h.getFullYear() + "年" + (h.getMonth() + 1) + "月" + h.getDate()　+ "日").big().big().big()  .italics()+"<br>");

    document.write(("問題　　"　+ num(e) + "+" + num(f) + " = ").big().big().big().fontcolor("blue").bold()+ "<br>");


function onButtonClick()
 {
   var val =document.forms.form1.textBox1.value;
   var target = document.getElementById("output");
 
 if(val == num(e+f)) {
   target.innerHTML = "正解";
 } else {
   target.innerHTML = "誤り";
 }
}