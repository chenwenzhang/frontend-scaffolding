require("./style.css");

$(function(){
    $("#loginForm").on("submit", function(){
        var data = {
            username: $.trim($("#username").val()),
            password: $.trim($("#password").val())
        };
        $.post("/passport/login", data, function(result){
            console.log(result);
        }, "json");
        return false;
    });
});