$("document").ready(() => {
    $("form").submit(function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        location.href = "../index.html";
    });
});
