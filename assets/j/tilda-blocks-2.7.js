function t381_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t381").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");var hideoffset=el.attr("data-hideoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("visibility","visible");el.animate({"opacity":"1"},300,function(){})}}else{el.stop();el.css("visibility","hidden")}}
if(hideoffset!=""){if(hideoffset.indexOf('vh')>-1){hideoffset=Math.floor((window.innerHeight*(parseInt(hideoffset)/100)))}
hideoffset=parseInt(hideoffset,10);if($(window).scrollTop()+$(window).height()>=$(document).height()-hideoffset){if(el.css('visibility')!='hidden'){el.finish();el.css("visibility","hidden")}}else{if(appearoffset!=""){if($(window).scrollTop()>=appearoffset){el.stop();el.css("visibility","visible")}}else{el.stop();el.css("visibility","visible")}}}})}}