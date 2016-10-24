/**
 * Created by JENN on 10/23/2016.
 */
$(document).ready(function(){
    "use strict";
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;

    var runSlideShow = function(){
        $("#caption").animate({width: "0px"},2000,"linear");
        $("#slide").animate({width: "0px"},2000,"linear",
            function(){
                if(nextSlide.next().length === 0){
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                nextSlideSource = nextSlide.attr("src");
                nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).animate({width: "1200px"},2000,"linear");
                $("#caption").text(nextCaption).animate({width: "1200px"},2000,"linear");
            }
        );

    };

    var timer1 = setInterval(runSlideShow, 1000);

    $("#slide").click(function(){
        if(timer1 !== null){
            clearInterval(timer1);
            timer1=null;
        }
        else{
            timer1=setInterval(runSlideShow, 3000);
        }
    });

});