var prevVal;
      $("#color").on("change",function(){
        var lval = $(this).find('option:selected').val();
        $(".shoe").removeClass(`${prevVal}`).addClass(`${lval}`);
        prevVal = lval;
      });
var soleVal;
$("#selectsole").on("change",function(){
  var soval = $(this).find('option:selected').val();
  $(".sole").removeClass(`${soleVal}`).addClass(`${soval}`);
  soleVal = val;
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