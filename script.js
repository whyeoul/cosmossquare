const newFont = [
  {
    name: "one"
    
     
  },
  {
    name: "two"
  },
  {
    name: "three"
  },
  {
    name: "four"
  }
,
  {
    name: "Five"
  }
,
  {
    name: "Six"
  }

  ,
  {
    name: "Seven"
  }

  ,
  {
    name: "Eight"
  }

  ,
  {
    name: "Nine"
  }

  ,
  {
    name: "Ten"
  }


];

var font = newFont;

font.forEach(function (index) {
  var selectFont = $("#font");
  selectFont.append(
    '<option value="' + index.name + '"> ' + index.name + "</option>"
  );
});

//Font Change
var selectedFont = $("select");
var formTable = $("form");

selectedFont.on("change", function () {
  formTable.css({ "font-family": this.value });
});



//Font Size Change
var inputRange = $("#fontSize");

inputRange.on("change", function () {
  formTable.css({ "font-size": this.value + "1px" });
  $(".text").html(this.value + "1px");
});
