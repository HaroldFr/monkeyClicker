//Note: $ is the jquery function!
// () invoke the function.
// "send-alert" is a CSS selector as a parameter.
// .click is the jQuery method we are using. 

$("#send-alert").click(function () {
	alert("I was a clicked!")
})

let count = 0;

$("#spaceMonkey").click(function () {
	count++
	$(".click-counts span").html(count)
})
$("#super-clicker").click(function () {
	count += 20;
	$(".click-counts span").html(count)
})
let numberOfItems = 0;


$("form").submit(function (e) {
	e.preventDefault()
	numberOfItems++
	let task = $("#item-name").val();
	let due = $("#due-date").val();
	$("tbody").append(`
	<tr>
					<th scope="row">${numberOfItems}</th>
					<td>${task}</td>
					<td>${due}</td>
					<td><i class="material-icons trash">delete</i></td>
				</tr>
	`) 
	$(".trash").click(function(){
		$(this).parents("tr").remove();
	})

})

