const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $form = $("form");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$form.submit(function(e) {
  e.preventDefault();
});

$add.click(function() {
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
});

$(document).ready(function() {
  $(document).on("click", ".item-text", function() {
    $(this).toggleClass("done");
  });

  $(document).on("click", ".item-remove", function() {
    $(this)
      .parent()
      .fadeOut(400, function() {
        $(this).remove();
      });
  });
});
