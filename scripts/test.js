   $("#
$(function() {


   //alert("Hello boys !");
   $("#name1").text("Hello Boys");

   $("#Hide").click(function() {
       $("#block").hide();
   });


   $("#Show").click(function() {
       $("#block").fadeOut(1000, function() {
           alert("we are here");
       });
   });

toggle").click(function() {
       $("#block").toggle();
   });

});
