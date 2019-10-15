// Title : To-Do List.js
// Author : Angad Sudesh Srivastav
// Time : 15th October 2019 (4:31 pm)
// Objective : To make a javascript file so the page for our todo app is dynamic. Our app can add new items. Remove old ones and even strik through them if the user wishes to keep them.  

//Checking off Todos when Clicked : 
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Deleting Todos when X is Hit : 
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//Adding New Todos when enter key is fired after inserting text in inoput field : 
$("input[type=text]").on("keypress", function(e){
    if(e.which === 13){
        //Grabbing Todo Text once enter has been hit :  
        var todoText = $(this).val();
        $(this).val(" ");
        //Adding A new li to the Ul : 
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
    }
});

//Toggling the add new todo : 
$(".fa-plus").on("click", function(){
    $("input[type=text]").fadeToggle();
});
