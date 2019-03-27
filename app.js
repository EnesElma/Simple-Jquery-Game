function tekrarla(){
    
    //max left=1280  max top=560
    let left=Math.floor(Math.random()*1100)
    let right=Math.floor(Math.random()*480)
    let s1=Math.floor(Math.random()*16).toString(16)
    let s2=Math.floor(Math.random()*16).toString(16)
    let s3=Math.floor(Math.random()*16).toString(16)
    let en=Math.floor(Math.random()*60+60)
    let boy=Math.floor(Math.random()*60+60)

    var element=$("<div></div>").css({"paddingLeft":`${en}px`, "paddingTop":`${boy}px`, "position":"absolute",
    "left":`${left}px`, "top":`${right}px`, "backgroundColor": `#${s1}${s2}${s3}`});

    
    $("body").append(element);


    $(document).ready(function(){
        $(element).mouseover(function(){
          $(this).css({"border-style":"outset","border":"2px solid #cd94c4"})
        });
        $(element).mouseout(function(){
          $(this).css({"border-style":"none"})
        });
        
        $(element).click(function(){
          $(this).animate({
            left: '500px',
            top:'200px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
          }); 
          

          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }          
          sleep(500).then(() => {
            $(this).toggle("explode");
            $(this).remove();
          })

        });
    });
    let zaman
    setTimeout(tekrarla, zaman=Math.floor(Math.random()*3000+500));
    
    $(document).ready(function(){
      $("#test1").text(zaman/1000+"sn");
    });

    

    

}

$(document).ready(function(){
  $("img").click(function(){
    
  });

  $(document).mousemove(function(e){
    let x=event.pageX;
    let y=event.pageY;
    
    $("#pikachu").css({'top': e.clientY , 'left': e.clientX});

  });
});

tekrarla();






 







