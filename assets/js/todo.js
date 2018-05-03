// Checke off Specifice To-Dos by Clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("complited");
});

//Click on X to delete Todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopImmediatePropagation();
});


$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoTextt = $(this).val();
        // create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTextt + "</li>")
    }
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
