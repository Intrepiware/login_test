$('form').submit((evt) => {
   evt.preventDefault();
   event.stopImmediatePropagation();
   $(".form").html(`<h2>Welcome ${$("input[name='username']").val()}!</h2>`);
})