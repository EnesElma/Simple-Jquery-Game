var score=0;

function tekrarla(){
    
    //max left=1280  max top=560
    let left=Math.floor(Math.random()*1100)
    let right=Math.floor(Math.random()*480)
    let s1=Math.floor(Math.random()*16).toString(16)
    let s2=Math.floor(Math.random()*16).toString(16)
    let s3=Math.floor(Math.random()*16).toString(16)
    let en=Math.floor(Math.random()*80+60)
    let boy=Math.floor(Math.random()*80+60)

    var element=$("<div></div>").css({"paddingLeft":`${en}px`, "paddingTop":`${boy}px`, "position":"absolute",
    "left":`${left}px`, "top":`${right}px`, "backgroundColor": `#${s1}${s2}${s3}`});
    
    $("body").append(element);  //oluşturulan elementi body e ekliyoruz

    $(document).ready(function(){
        $(element).mouseover(function(){    //mouse div in üstüne gelince olacaklar:
          $(this).css({"border-style":"outset","border":"2px solid #cd94c4"})
        });
        $(element).mouseout(function(){     //mouse div in üstünden gidince olacaklar: 
          $(this).css({"border-style":"none"})
        });
        
        $(element).click(function(){
          score++;
          $("#score").text("Score: "+score); //Oyunda kazanılan puan bilgisini yazdırma
          
          $(this).animate({            
            left: '600px',
            top:'200px',
            opacity: '0.5',
            height: '40px',
            width: '40px'
          });          

          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))  //tıklayınca div in hemen kaybolmaması için sleep fonksiyonu
          }          
          sleep(500).then(() => {
            $(this).toggle("explode");    //tıklayınca parçalanma efekti
            $(this).remove();             //tıklayınca div in yok olması            
          })
        });
    });
    setTimeout(tekrarla, Math.floor(Math.random()*1000+500));
}

tekrarla();


var start = new Date();
setInterval(function() {
    $("#zaman").text(Math.floor((new Date-start) /1000) + " saniye");
}, 1000);


var basY=0;     //pikachu nun üste göre ilk başlangıç konumu
var basX=0;     //pikachu nun sola göre ilk başlangıç konumu
var sonY=0;
var sonX=0;
var xMesafe=0;   //ilk ve son konum arası mesafe
var yMesafe=0;

$(document).ready(function(){
  $(document).mousemove(function(){
    sonX=event.clientX+15;
    sonY=event.clientY+15;
  });
});

setInterval(function(){
  xMesafe=sonX-basX;
  yMesafe=sonY-basY;   
},40);

function hareket(){
  xMesafe=xMesafe/6;
  basX=basX+xMesafe;
  
  yMesafe=yMesafe/6;
  basY=basY+yMesafe;

  $("#pikachu").css({left:basX,top:basY});
}

setInterval(hareket,1);







 







