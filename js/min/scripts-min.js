(function(){$(function(){}),$("header .col-sm-6:first-child").height($("header .col-sm-6:last-child").height());var i=$("header .col-sm-6:first-child").height;$("header .col-sm-6:first-child a").css("line-height",i+"px"),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=$(this.hash);if(i=i.length?i:$("[name="+this.hash.slice(1)+"]"),i.length)return $("html,body").animate({scrollTop:i.offset().top-40},1e3),!1}})});var t=$("#navigation").offset();console.log(t.top),$(window).bind("scroll",function(){$(window).scrollTop()>t.top?$("#navigation").addClass("nav-fixed"):$("#navigation").removeClass("nav-fixed")})}).call(this);