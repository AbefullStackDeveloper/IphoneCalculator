$(document).ready(function(){
var operators = {
    "+": function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "*": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
    
    
   };
  
   $(".one").on("click", function() {
    selectAndWrite(1);
  });
  $(".two").on("click", function() {
    selectAndWrite(2);
  });
  $(".three").on("click", function() {
    selectAndWrite(3);
  });
  $(".four").on("click", function() {
    selectAndWrite(4);
  });
  $(".five").on("click", function() {
    selectAndWrite(5);
  });
  $(".six").on("click", function() {
    selectAndWrite(6);
  });
  $(".seven").on("click", function() {
    selectAndWrite(7);
  });
  $(".eight").on("click", function() {
    selectAndWrite(8);
  });
  $(".nine").on("click", function() {
    selectAndWrite(9);
  });
  $(".number-0").on("click", function() {
    selectAndWrite(0);
  });
  // $(".ab").on("click", function() {
  //   selectAndWrite(".");
  // });


  $(".operatora").on("click", function () {
    if ($(".operator").text() == "") { $(".operator").text("+") }
    else if ($(".operator").text() !== "") {
      var operation = $(".operator").text();
      $(".value1").text(operators[operation](+($(".value1").text()), +($(".value2").text())));
      $(".operator").text("+");
      $(".value2").text("")
      } 
  });
  $(".operatorsub").on("click", function () {
    if ($(".operator").text() == "") { $(".operator").text("-") }
    else if ($(".operator").text() !== "") {
      var operation = $(".operator").text();
      $(".value1").text(operators[operation](+($(".value1").text()), +($(".value2").text())));
      $(".operator").text("+");
      $(".value2").text("")
      } 
    // $(".operator").text("-")
  });
  $(".operatorm").on("click", function () {
    if ($(".operator").text() == "") { $(".operator").text("*") }
    else if ($(".operator").text() !== "") {
      var operation = $(".operator").text();
      $(".value1").text(operators[operation](+($(".value1").text()), +($(".value2").text())));
      $(".operator").text("*");
      $(".value2").text("")
      } 
    // $(".operator").text("*");
  });
  $(".operatord").on("click", function () {
    if ($(".operator").text() == "") { $(".operator").text("/") }
    else if ($(".operator").text() !== "") {
      var operation = $(".operator").text();
      $(".value1").text(operators[operation](+($(".value1").text()), +($(".value2").text())));
      $(".operator").text("/");
      $(".value2").text("")
      } 
    // $(".operator").text("/");
  });
  // $(".ab").on("click", function(e) {
  //   let q=e.target.innerHTML

  //   $(".value1").text("");
  // });
  $(".equal").on("click", function() {
    var operation = $(".operator").text();
    $(".result").text(parseFloat(operators[operation](+($(".value1").text()), +($(".value2").text()))).toFixed(2));
    
    // if ((fi(+[fi.length - 1])) +(+ (fi[fi.length - 2])) == 0) {
    //   let fi = $(".result").text()
    //   // fi = fi.substring(0, fi.length - 3)
    //   $(".result").text(fi.substring(0, fi.length - 3))
    // }
      });
      $(".ac").on("click", function() {
        clearAll();
        $(".result").html("0");
      });
      function clearAll() {
        $(".operator").html("")
        $(".value1").html("");
        $(".value2").html("");
        $(".result").html("");
    };
    
    function selectAndWrite(num) {
        if ($(".result").html() === "") {
            if ($(".operator").html() === "") {
                $(".value1").append(num);
            } else {
                $(".value2").append(num);
            }
        } 




        else {
            clearAll()
            if ($(".operator").html() === "") {
                $(".value1").append(num);
            } else {
                $(".value2").append(num);
            }
        }
}    
});

$(".result").css('color',"yellow")
$(".operator").css('color',"blue")

$(".ab").click( function(e){
  var btn = e.target.innerHTML;
  if ($(".operator").html() === "") {
    $(".value1").append(btn);
}
else{
  $(".value2").append(btn);
}
  // $(".value1").append(btn)
})
$(".percent").on("click",function(){
  $(".result").text($(".value1").text()/100)
})
$(".pm").on("click",function(){
  if($(".operator").text()=="-"){
    $(".result").html($(".value2").text())
  }
  else{
    $(".result").text($(".value1").text()*(-1))
  }
  
//   $(".abe").on("click", function () {
//   if ($(".vale1").text()!="")&&($(".value2").text()!="")&&($(""))
//     $(".result").text(operators[operation](+($(".value1").text()), +($(".value2").text())));
// });
})
function updatetime() {
  var a=new Date()
var b=a.toString()
// console.log(b);
var c=b.substring(16,18)
// console.log(c);
d=b.substring(19,21)
$(".clock").text(c+":"+d)

}
setInterval(updatetime,1000)
// console.log(d);
// $(".minute").text(d)

