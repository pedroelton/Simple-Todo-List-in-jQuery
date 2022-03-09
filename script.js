// Listen the input with type text and add an keypress event to it
$("input[type='text']").on("keypress", function (event) {
    
    // if the key pressed is enter (enter code is 13)
    if (event.which === 13) {
        //get the todo text from input
        let todoText = $(this).val();
        event.preventDefault();
        $(this).val("");
        //Create a new li and add to ul
        $("ul").prepend("<li> <span><i class='fa-solid fa-circle-xmark'></i></span> " + todoText + "</li>")
    }
});
    // Listen to li and add a click event
    $("ul").on("click", "li", function (event) {
        // toggle the class compleated to the clicked li
        $(this).toggleClass("completed")
        event.stopPropagation();
    });
    // Listen to the span and add a click event on it
    $("ul").on("click", "span", function (event) {
        // fadeOut in 500ms the parent of the span, which is the li
        $(this).parent().fadeOut(500, function () {
            // remove after the fadeOut is compleated
            $(this).remove();
        });
        event.stopPropagation();
    });