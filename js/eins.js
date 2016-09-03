// JavaScript Document


// Jquery Document

 

$(document).ready(function(){
	  $("#btn_mobil").click(function(){
			$("header nav").toggleClass("show");
			$("#btn_mobil").addClass("hide");
			$("#btn_mobil").removeClass("show");
	  });


	  $("#btn_close").click(function(){
			$("header nav").removeClass("show");
			$("#btn_mobil").addClass("show");
		
	  });
});	

$(document).mouseup(function(e)
{
    var container = $("header nav");
	var btn = $("#btn_mobil");

    if (!container.is(e.target)&& container.has(e.target).length === 0 )
		{
			container.removeClass("show");
			btn.removeClass("hide");
		}
});
  
  
$(function() {
     var pgurl = window.location.href;
     $("nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});
