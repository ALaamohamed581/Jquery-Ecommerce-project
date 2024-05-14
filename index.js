$(document).on("click",".search",function(){
$(".search-bar").addClass("search-bar-active")
})
$(document).on("click",".search-cancel",function(){
$(".search-bar").removeClass("search-bar-active")
})
$(document).on("click",".user",function(){
    $(".form").addClass("login-active")
})
$(document).on("click",".search-cancel",function(){
    $(".form").removeClass("login-active")
})
//sign up btn
$(document).on("click",".sign-up-btn",function(){
    $(".form").addClass("sign-up-active").removeClass("login-active")
})
$(document).on("click",".forget",function(){
    $(".form").addClass("login-active").removeClass("sign-up-active")
})
$(document).on("click",".cancel-form",function(){
    $(".form").removeClass("sign-up-active")
})
$(document).on("click",".cancel-form",function(){
    $(".form").removeClass("login-active")
})
/**slider script */
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});
//catgories 
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  var pb=document.getElementById("pb")
  $("#pb").on("scroll",function(){
if(pb.getBoundingClientRect().top)
alert("saddasd")}
)
