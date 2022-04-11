$(document).ready(function(){
  let messages_div = $( "#messages" );

  let request = function(){
    $.ajax({url:"http://127.0.0.1/messages", type: "GET" })
    .done(function( messages ) {
      messages_div.empty();
      for(let m of messages){
        messages_div.prepend("<h3>" + m + "</h3>");
      }
    })
  }
  setInterval(request, 1000);
})
