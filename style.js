$(document).ready(function(){
    $(".btn").click(function(){
      var div = $("div");
      div.animate({height: '1000px', opacity: '0.4'}, "slow");
      div.animate({width: '1000px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow",function(){
        if(div.attr('d-name')=='custom'){
          alert('ok');
        }
      });
    })

  });