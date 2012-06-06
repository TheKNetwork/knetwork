$(document).ready(function() {
	$(function () {
		$(".btn").bind('click', function () {
 			span = "." + $(this).parent().find("input").attr("id")
			$(span).text(" " + $(this).parent().find('input:text').val())
		
		});
	});
});
