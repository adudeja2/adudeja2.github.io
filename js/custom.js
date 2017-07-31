$(document).ready(function () {
        $(document).on('click', '.showToll', function () {
            $(this).closest('.text-center').find('.backDiv').show();
        });
        $(document).on('click', '.alpha', function () {
            $(".backDiv").hide();
        });
		$(document).scroll(function() {
			  var y = $(this).scrollTop();
			  if (y > 50) {
				$('.top').fadeIn();
			  } else {
				$('.top').fadeOut();
			  }
			});
		});
function closeToll(){
	$(".backDiv").hide();	
}
function showCategory(){
	$("#index-pick").hide();
	$("#includedCategory").fadeIn(500);
}
function closeCategory(){
	$("#index-pick").fadeIn(500);
	$("#includedCategory").hide();
}
function closeFeedback(){
	$("#index-pick").fadeIn(500);
	$("#includedFeedback").hide();
}
function showName(){
	$("#index-pick").hide();
	$("#includedName").fadeIn(500);
}
function closeName(){
	$("#index-pick").fadeIn(500);
	$("#includedName").hide();
}
function showBank(){
	$("#includedCategory").hide();
	$("#includedBank").fadeIn(500);
}
function showAirlines(){
	$("#includedCategory").hide();
	$("#includedAirlines").fadeIn(500);
}
function showAutomobile(){
	$("#includedCategory").hide();
	$("#includedAutomobile").fadeIn(500);
}
function showDTH(){
	$("#includedCategory").hide();
	$("#includedDTH").fadeIn(500);
}
function showMobile(){
	$("#includedCategory").hide();
	$("#includedMobile").fadeIn(500);
}
function showOperator(){
	$("#includedCategory").hide();
	$("#includedOperator").fadeIn(500);
}
function showCC(){
	$("#includedCategory").hide();
	$("#includedCC").fadeIn(500);
}
function showEdu(){
	$("#includedCategory").hide();
	$("#includedEdu").fadeIn(500);
}
function showHealth(){
	$("#includedCategory").hide();
	$("#includedHealth").fadeIn(500);
}
function showHome(){
	$("#includedCategory").hide();
	$("#includedHome").fadeIn(500);
}
function showCPM(){
	$("#includedCategory").hide();
	$("#includedCPM").fadeIn(500);
}
function showPC(){
	$("#includedCategory").hide();
	$("#includedPC").fadeIn(500);
}
function showPolicy(){
	$("#includedCategory").hide();
	$("#includedPolicy").fadeIn(500);
}
function showFood(){
	$("#includedCategory").hide();
	$("#includedFood").fadeIn(500);
}
function showRecharge(){
	$("#includedCategory").hide();
	$("#includedRecharge").fadeIn(500);
}
function showShop(){
	$("#includedCategory").hide();
	$("#includedShop").fadeIn(500);
}
function showGovt(){
	$("#includedCategory").hide();
	$("#includedGovt").fadeIn(500);
}
function backToCategory(){
		  $("#includedCategory").fadeIn(500);
		  $("#includedGovt").hide();
		  $("#includedBank").hide();
		  $("#includedAutomobile").hide();
		  $("#includedAirlines").hide();
		  $("#includedDTH").hide();
		  $("#includedMobile").hide();
		  $("#includedOperator").hide();
		  $("#includedCC").hide();
		  $("#includedEdu").hide();
		  $("#includedHealth").hide();
		  $("#includedHome").hide();
		  $("#includedCPM").hide();
		  $("#includedPC").hide();
		  $("#includedPolicy").hide();
		  $("#includedFood").hide();
		  $("#includedRecharge").hide();
		  $("#includedShop").hide();
}