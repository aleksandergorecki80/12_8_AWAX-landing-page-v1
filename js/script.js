
$(function(){
		var $menu = $('nav');
		$('#menuIcon').click(function(){
			
			if ($menu.css('display') == "block"){

				$menu.css('display', 'none');
				
			} else{
				$menu.css('display', 'block' );			
			}
		});

    $(window).resize(function(){
        console.log('resiz');
        if ($(window).width() > 768){
        	$menu.css('display', 'block' );
        } else {
            $menu.css('display', 'none' );
        }
    });

    var $projectsMenu = $('#menuProjects');
    var $projectsMenuIcon = $('#projectsMenuIcon');
    var $arrow = $('.fa-angle-down');
    $projectsMenuIcon.click(function(){
        if ($projectsMenu.css('display') == 'none'){
            $projectsMenu.css('display', 'block'); 
           $arrow.css({
                    '-webkit-transform' : 'rotate(180deg)',
                    '-moz-transform' : 'rotate(180deg)',  
                    '-ms-transform' : 'rotate(180deg)',  
                    '-o-transform' : 'rotate(180deg)',  
                    'transform' : 'rotate(180deg)',  
                     });
       } 
           else {
            $projectsMenu.css('display', 'none'); 
            $arrow.css({
                    '-webkit-transform' : 'rotate(0deg)',
                    '-moz-transform' : 'rotate(0deg)',  
                    '-ms-transform' : 'rotate(0deg)',  
                    '-o-transform' : 'rotate(0deg)',  
                    'transform' : 'rotate(0deg)',  
                    });
        }
    });


$('.go-up').on("click",function(){
          $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

});