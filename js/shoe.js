// Leather shoe
var prevVal;
      $("#color").on("change",function(){
        var lval = $(this).find('option:selected').val();
        $(".texture").removeClass(`${prevVal}`).addClass(`${lval}`);
        prevVal = lval;
      });
var textVal = 'baseshoe';
$("#selecttexture").on("change",function(){
  var teval = $(this).find('option:selected').val();
  $(".texture").removeClass(`${textVal}`).addClass(`${teval}`);
  textVal = teval;
});
var leastich;
$("#leastich").on("change",function(){
  var lestich = $(this).find('option:selected').val();
  $(".stiching").removeClass(`${leastich}`).addClass(`${lestich}`);
  leastich = lestich;
});
var lealaces;
$("#lealaces").on("change",function(){
  var lelaces = $(this).find('option:selected').val();
  $(".llaces").removeClass(`${lealaces}`).addClass(`${lelaces}`);
  lealaces = lelaces;
});
// Everyday shoe
var soleVal;
$("#selectsole").on("change",function(){
  var soval = $(this).find('option:selected').val();
  $(".sole").removeClass(`${soleVal}`).addClass(`${soval}`);
  soleVal = soval;
});
var laceVal;
$("#selectlace").on("change",function(){
  var laval = $(this).find('option:selected').val();
  $(".lace").removeClass(`${laceVal}`).addClass(`${laval}`);
  laceVal = laval;
});
var upperVal;
$("#selectupper").on("change",function(){
  var upval = $(this).find('option:selected').val();
  $(".decor").removeClass(`${upperVal}`).addClass(`${upval}`);
  upperVal = upval;
});
var baseVal;
$("#selectbase").on("change",function(){
  var baval = $(this).find('option:selected').val();
  $(".base").removeClass(`${baseVal}`).addClass(`${baval}`);
  baseVal = baval;
});

var testVal;
$("#selecttest").on("change",function(){
  var tval = $(this).find('option:selected').val();
  $(".base").removeClass(`${testVal}`).addClass(`${tval}`);
  testVal = tval;
});

// Pre Customisations WIP

var customVal;
$("#selectcustom").on("change", function(){
  var cval = $(this).find('option:selected').each(function() {
    $("select#color").val($(this).val());
  });
});