var dodoCounter = function () {
  return "Il est reste plusieurs dodos avant que Tom arrive";
};

var runner = function () {
  $("#container").html(dodoCounter());
  window.setTimeout(runner, 1000);
};

runner();
