function tekrarla(){
    
    //max left=1280  max top=560
    let left=Math.floor(Math.random()*1100)
    let right=Math.floor(Math.random()*480)
    let s1=Math.floor(Math.random()*16).toString(16)
    let s2=Math.floor(Math.random()*16).toString(16)
    let s3=Math.floor(Math.random()*16).toString(16)
    let en=Math.floor(Math.random()*60+50)
    let boy=Math.floor(Math.random()*60+50)

    var element=$("<div></div>").css({"paddingLeft":`${en}px`, "paddingTop":`${boy}px`, "position":"absolute",
    "left":`${left}px`, "top":`${right}px`, "backgroundColor": `#${s1}${s2}${s3}`});

    
    $("body").append(element);


    $(document).ready(function(){
        $(element).click(function(){
          $(this).hide();
        });
    });

    setTimeout(tekrarla, Math.random()*3000+500);
    
}

tekrarla();


 







