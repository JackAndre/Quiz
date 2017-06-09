$(function() {

   var questions = "";

   function getData(){
       //var q;
       $.getJSON( "data/quiz.json", function( data ) {
           //console.log(data.questionsList);
           questions = data.questionsList;
          // console.log(questions);
           init();
       });
       //console.log(q);
       //return q;
   }


   function getQuestion(){
       showQuestion(questions[1]);
   }

   function showMessageNew(title1, text){
       alert(title1 + " : " + text);
   }

    function showMessage(){
       alert("here is the message");
    }

    function resetPage(){
       $("#answer-options").empty();
       $("#answer-response").empty();
    }

    function showQuestion(question){
       $("#question-number #number").text(question.id);
       $("#question-text").text(question.questionText);
       $("body").css("background-image", "url(" + question.backgroundImage + ")");
       var answerOptions = question.answerOptions;
       var correctAnswer = question.correct;

       resetPage();

       $.each( answerOptions, function( key, value ) {
           //alert(value);
           if (key == correctAnswer)
           {
               $("#answer-options").append('<button class="correct">' + value + "</button>");
           }
           else
           {
               $("#answer-options").append("<button>" + value + "</button>");
           }

       });

       answerOptionClicked();
  }

   function answerOptionClicked() {
       $("#answer-options button").click(function() {
           if ($(this).hasClass("correct")){
               $("#answer-response").removeClass("wrong");
               $("#answer-response").addClass("correct");
               $("#answer-response").text("correct");
               $("#btn-next").fadeIn(1000);
           }
           else {
               $("#answer-response").removeClass("correct");
               $("#answer-response").addClass("wrong");
               $("#answer-response").text("wrong");
               $("#btn-next").hide();
           }
       });
   }
  
   function init(){
     //var  questions = getData();
     console.log("This is questions "  + questions);
     showQuestion(questions[0]);
   }

   $("#btn-next").click(function(){
       showQuestion(questions [1]);
   });

   getData();
   //showMessage();
   //showMessageNew("Hey", "Hey2");
   //showMessageNew("dgnfghhj,");
   //getQuestion();

});
