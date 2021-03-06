$(function() {

  $("form.delete").submit(function(event) {
    event.preventDefault(); // Prevents the default of the event from occuring(form being submitted)
    event.stopPropagation(); // Stop the event from bubbling up and being interpreted by other parts of the page or the browser

    var ok = confirm("Are you sure? This cannot be undone!");
    if (ok) {
      var form = $(this);

      var request = $.ajax({
        url: form.attr("action"),
        method: form.attr("method")
      });

      request.done(function(data, textStatus, jqXHR) {
        if (jqXHR.status === 204) {
          form.parent("li").remove();
        } else if (jqXHR.status === 200) {
          document.location = data;
        }
      });
    }
  });


});
