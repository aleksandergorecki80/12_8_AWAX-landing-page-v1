
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
        }
    });
});





function showRulesSection() {
    
    if (ruleSection.style.display == "block") {
        ruleSection.style.display = "none";
    } else {
        ruleSection.style.display = "block";
    }
}