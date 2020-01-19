
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 13);
    contry.textContent = n;
    capital.textContent = n;  
    capitala.textContent = n;
    flag.textContent = n;
    ex.textContent = n;
    output.textContent = '';
    textBox1.value = '';
    output.style = "display:none";
    btn.textContent = '';
    btn.style = "display:none";
    capitala.style = "display:none";
    ex.style="display: none";
    can3.style ="display: none";
    can2.style ="display: none";
    abc.style="display: none";
    can0.style="display: none";
    fra1.style="display: none";
    ko1.style="display : none";
    ja2.style="display: none";
    btn7.style="display: inline";
    bbb.style ="display: block";
    
    switch (n) {
      case 0:
        contry.textContent = 'イギリス';
        capital.textContent = 'ロンドン';
        capitala.textContent= '正解はロンドンです';
        ex.textContent ="イングランド、ウェールズ、スコットランド、北アイルランドという歴史的経緯に基づく4つの国が、同君連合型の単一の主権国家を形成する独特の統治体制を採る。";
        flag.style = 'background:url(../img/flag/en.png)';
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 1:
        contry.textContent = 'フランス';
        capital.textContent = 'パリ';
        capitala.textContent= '正解はパリです';
        ex.textContent ='西ヨーロッパの領土並びに複数の海外地域及び領土からなる共和制国家である。ヨーロッバで一番の観光立国であり、エッフェル塔、ルーブル美術館などが有名。';
        flag.style = 'background:url(../img/flag/fra.png)';
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 2:
        contry.textContent = 'ドイツ';
        capital.textContent = 'ベルリン';
        capitala.textContent= '正解はベルリンです';
        ex.textContent ='首相：　アンゲラ・メルケル(ドイツ初の女性首相)';
        flag.style = 'background:url(../img/flag/do.png)';
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 3:
        contry.textContent = '韓国';
        capital.textContent = 'ソウル';
        capitala.textContent= '正解はソウルです';
        ex.textContent ='東アジアに位置する共和制国家。戦後の冷戦で誕生した分断国家である。現在でも役人の権限が非常に強い役人社会であり腐敗が余りにも蔓延しているため、2015年にキムヨンナン法が制定された。韓国の多くの歴代大統領は退任後、暗殺、自殺、逮捕などその末路が悲惨である。';
        flag.style = 'background:url(../img/flag/ka.png)';
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 4:
        contry.textContent = 'イタリア';
        capital.textContent = 'ローマ';
        capitala.textContent= '正解はローマです';
        ex.textContent ='';
        flag.style = 'background:url(../img/flag/ita.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 5:
        contry.textContent = 'フィリピン';
        capital.textContent = 'マニラ';
        capitala.textContent= '正解はマニラです';
        ex.textContent ='タール火山で噴火が発生しました';
        flag.style = 'background:url(../img/flag/fi.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 6:
        contry.textContent = '日本';
        capital.textContent = '東京';
        capitala.textContent= '正解は東京です';
        ex.textContent ='2019年イチロー（本名：鈴木一朗)引退。日米通算28シーズンをプレーし、MLBシーズン最多安打(262安打),プロ野球における通算安打世界記録(NPB/MLB通算4367安打)保持者である。';
        flag.style = 'background:url(../img/flag/nihon.png)'
        flag.textContent = '';
        can1.style = "display: none";
        break;
      case 7:
        contry.textContent = 'カナダ';
        capital.textContent = 'オタワ';
        capitala.textContent= '正解はオタワです';
        ex.textContent ='世界で最も湖が多い国です';
        flag.style = 'background:url(../img/flag/canada.jpg.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 8:
        contry.textContent = 'オーストラリア';
        capital.textContent = 'キャンベラ';
        capitala.textContent= '正解はキャンベラです';
        ex.textContent ='オセアニアに位置し、オーストラリア大陸本土、タスマニア島及び多数の小島から成る連邦立憲君主国家。';
        flag.style = 'background:url(../img/flag/au.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 9:
        contry.textContent = 'エジプト';
        capital.textContent = 'カイロ';
        capitala.textContent= '正解はカイロです';
        ex.textContent ='';
        flag.style = 'background:url(../img/flag/eg.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 10:
        contry.textContent = 'アメリカ';
        capital.textContent = 'ワシントン';
        capitala.textContent= '正解はワシントンです';
        ex.textContent ='大統領：　ドナルド・トランプ';
        flag.style = 'background:url(../img/flag/am.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 11:
        contry.textContent = 'スリランカ';
        capital.textContent = 'スリジャヤワルダナプラコッテ';
        capitala.textContent= '正解はスリジャヤワルダナプラコッテです';
        ex.textContent ='1948年、イギリスから自治領(英連邦王国)のセイロンとしてとして独立。1978年から現在の国名(スリランカ民主社会主義共和国)となった。共和制。大統領制と議院内閣制が混合した体制となっている。';
        flag.style = 'background:url(../img/flag/suri.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
      case 12:
        contry.textContent = 'タイ';
        capital.textContent = 'バンコク';
        capitala.textContent= '正解はバンコクです';
        ex.textContent ='バンコクの正式名称はクルンテープ・プラマハーナコーン・アモーンラッタナコーシン・マヒンタラーユッタヤー・マハーディロックポップ・ノッパラット・ラーチャタニーブリーロム・ウドムラーチャニウェートマハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシットです';
        flag.style = 'background:url(../img/flag/tai.png)'
        flag.textContent = '';
        can1.style = "display:none";
        break;
    }
  });
  function onButtonClick()
 {
   var val =document.forms.form1.textBox1.value;
   var target = document.getElementById("output");
   bbb.style ="display: none";
   btn.style = "background: olive";
   btn.textContent = "次へ";
   btn7.style="display: none";

  if (val == capital.textContent && val == "ロンドン") {
   can2.style ="display: inline";
   target.innerHTML = "正解";
   target.style = "background: url(../img/ye.jpg)";
   ex.style ="display: inline";
   abc.style ="display: inline";
  }
  else if (val == capital.textContent && val == "パリ") {
    can0.style ="display: inline";
    target.innerHTML = "正解";
    target.style = "background: url(../img/ye.jpg)";
    ex.style ="display: inline";
    fra1.style ="display: inline";
   }
  else if (val == capital.textContent && val == "東京") {
    can3.style ="display: inline";
    target.innerHTML = "正解";
    target.style = "background: url(../img/ye.jpg)";
    btn.style = "background: olive";
    btn.textContent = "次へ";
    ex.style ="display: inline";
    ja2.style ="display: inline";
    btn7.style="display: none";
   }
  else if (val == capital.textContent && val == "ソウル") {
    target.innerHTML = "正解";
    target.style = "background: url(../img/ye.jpg)";
    ex.style ="display: inline";
    ko1.style ="display: inline";
   }
  else if (val == capital.textContent && val == "キャンベラ") {
    target.innerHTML = "正解";
    target.style = "background: url(../img/ye.jpg)";
    ex.style ="display: inline";
    can4.style ="display: inline";
   }
  else if(val == capital.textContent){
   target.innerHTML = "正解";
   target.style = "background: url(../img/ye.jpg)";
   ex.style ="display: inline";
 } 
 else if(val == "土田")　{
   can1.style = "visibility: visible";
 }
 else {
   target.innerHTML = "誤り";
   target.style = "color:black";
   target.style = "background:pink";
   btn.style = "background: olive";
   btn.textContent = "次へ";
   capitala.style = "display:inline";
   btn7.style="display: none";
 }
}
}
{
  const s = document.getElementById('s');

  s.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 2);
    contry.textContent = n;
    capital.textContent = n;  
    output.textContent = '';
    textBox1.value = '';
    s.style = 'display:none';
    bbb.style = 'display: block'
    switch (n) {
      case 0:
        contry.textContent = 'イギリス';
        capital.textContent = 'ロンドン';
        capitala.textContent= '正解はロンドンです';
        ex.textContent ='イングランド、ウェールズ、スコットランド、北アイルランドという歴史的経緯に基づく4つの国が、同君連合型の単一の主権国家を形成する独特の統治体制を採る。';
        flag.style = 'background:url(../img/flag/en.png)'
        flag.textContent = '';
        break;
      case 1:
        contry.textContent = 'フランス';
        capital.textContent = 'パリ';
        capitala.textContent= '正解はパリです';
        ex.textContent = '西ヨーロッパの領土並びに複数の海外地域及び領土からなる共和制国家である。ヨーロッバで一番の観光立国であり、エッフェル塔、ルーブル美術館、凱旋門、モン・サン・ミッシェルなどが有名。下の画像はモン・サン・ミッシェル。';
        flag.style = 'background:url(../img/flag/fra.png)'
        flag.textContent = '';
        break;
    }
  });
}
// {
//   var canvas = document.getElementById("can1");
//   var ctx = canvas.getContext('2d'); 

//   ctx.font="80px Arial bold";
//   ctx.fillStyle = 'blue';
//   ctx.fillText("かなこ",150,80);
// }
_=0;
      addEventListener('load', function(ev){
      _ ; [].slice.apply(document.querySelectorAll('button.counting')).forEach(function(e){
      _ , _ ; e.addEventListener('click', function(evt){
      _ , _ , _ ; var a = parseInt(this.getAttribute('data-count'));
      _ , _ , _ ; a = isNaN(a)? 1: a+1;
      _ , _ , _ ; ccc.textContent = a+1;
      _ , _ , _ ; this.setAttribute('data-count', a);
      _ , _ ; }, false);
      _ ; });
      }, false);