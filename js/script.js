
$(function(){
		var $menu = $('nav');
        var $menuIcon = $('#menuIcon');
        var $menuIconDiv = $('.menu-icon');
        console.log($menuIconDiv.css('display'));
        //$menuIconDiv.css('display', 'none');
		$menuIcon.click(function(){
			
			if ($menu.css('display') == "block"){

				$menu.css('display', 'none');
                $menu.attr('data-state', 'off' );
				
			} else{
                $menu.css('display', 'block' );         
				$menu.attr('data-state', 'on' );
			}
		});


$(window).resize(function(){
    var $width = $(window).width();
    if ($width < 767){
        $menuIconDiv.css('display', 'block');
        
        console.log($menu.attr('data-state'));

        if ($menu.attr('data-state') == 'off'){
            $menu.css('display', 'none');
        } else {
            $menu.css('display', 'block');
        }
        
        
        $('header .container').css('display', 'block');
    } else {
        $menu.css('display', 'block');
        $menuIconDiv.css('display', 'none');
        $('header .container').css('display', 'flex');
    }
});
     /*
    $(window).resize(function(){
        var $width = $(window).width();
        if ($width > 767){
        	$menu.css('display', 'block' );
            console.log('szer = ' + $width);
        } else {
            $menu.css('display', 'none' );
        }
    });
*/
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