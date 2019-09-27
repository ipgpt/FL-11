const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $form = $("form");
const todos = [{
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
const actions = (function () {
  const stopSubmit = function (e) {
    e.preventDefault();
  };
  const addTask = function () {
    let li = $("<li>").addClass("item"),
      span = $("<span>").addClass("item-text"),
      button = $("<button>")
      .addClass("item-remove")
      .text("Remove");
    if ($input.val()) {
      span.text($input.val());
      $list
        .hide()
        .append(li.append(span).append(button))
        .fadeIn(600);
    } else {
      alert("Warning: Write the task!");
    }
  };
  const changeTaskStatus = function () {
    $(this).toggleClass("done");
  };
  const removeTask = function () {
    $(this)
      .parent()
      .fadeOut(400, function () {
        $(this).remove();
      });
  };

  return {
    stopSubmit: stopSubmit,
    addTask: addTask,
    changeTaskStatus: changeTaskStatus,
    removeTask: removeTask
  };
})();

$form.submit(actions.stopSubmit);
$add.click(actions.addTask);
$(document).ready(function () {
  $(document)
    .on("click", ".item-text", actions.changeTaskStatus);
  $(document)
    .on("click", ".item-remove", actions.removeTask);
});