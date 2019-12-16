//slide do indice
$(document).ready(function(){
    $("#sp-indice").mouseenter(function() {
        $(this).stop().animate({
            left: 0,
            }, 350, function() {
            });
    });
    
    $("#sp-indice").mouseleave(function() {
        $(this).stop().animate({
            left: "-15.5em",
            }, 350, function() {
            });
    });
});

//destacar links
$(document).ready(function(){
    $("a").mouseenter(function() {
        $(this).css("color", "#6699ff");
    });
    
    $("a").mouseleave(function() {
        $(this).css("color", "");
    });
});

//mostrar preview de links
$(document).ready(function() {
    var x;
    var y;
    var frame;
    
    $(document).mousemove(function(event) {
        x = event.pageX - 200;
        y = event.pageY - 130;
    });
    
    $(".preview-img").mouseenter(function() {
        var frame = $('#'+$(this).prop('id')+'-frame');
        var mouseLeftImg = false;
        var mouseLeftFrame = false;
        var display = false;
        
        $(frame).css({top: y, left: x, position:'absolute'});
        
        if(display == false) {
            $(frame).show();
            display = true;
        }
        
        $(this).mouseleave(function() {
          mouseLeftImg = true;
          if(mouseLeftFrame == true) setTimeout(mouseLeftBoth, 10);
        }).mouseenter(function() {
          mouseLeftImg = false;
        });

        $(frame).mouseleave(function() {
          mouseLeftFrame = true;
          if(mouseLeftImg == true) setTimeout(mouseLeftBoth, 10);
        }).mouseenter(function() {
          mouseLeftFrame = false;
        });

        function mouseLeftBoth() {
          if(mouseLeftImg && mouseLeftFrame) {
              $(frame).hide();
              display = false;
          }
        }
    });
    
});