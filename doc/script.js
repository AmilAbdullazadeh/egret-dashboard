$.get(
  "https://api.github.com/gists/f7c7285f79a504d9fa919495e2c9149e",
  function(data) {
    console.log()
    data = JSON.parse(data.files['ui-lib-products.json'].content);
    var items = [];

    $.each(data, function(key, val) {
      items.push(
        "<a class='product' href='"+val.url+"' target='_blank'> <img src='" +
          val.photo +
          "'> <h4>" +
          val.name +
          "</h4>"+
          "</a>"
      );
    });

    $( "<div/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "#uilib-products" );
  }
);
