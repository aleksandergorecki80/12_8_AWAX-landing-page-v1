
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
    var $arrow = $('.fa-angle-right');
    $projectsMenuIcon.click(function(){
        console.log('kki');
        if ($projectsMenu.css('display') == 'none'){
            $projectsMenu.css('display', 'block'); 
            $arrow.css('transform', 'rotate(90deg)'); 
        } else {
            $projectsMenu.css('display', 'none'); 
            $arrow.css('transform', 'rotate(0deg)'); 
        }
    }); 

});
/*
function showRulesSection() {
    
    if (ruleSection.style.display == "block") {
        ruleSection.style.display = "none";
    } else {
        ruleSection.style.display = "block";
    }
}
*/