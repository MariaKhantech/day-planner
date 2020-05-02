$(document).ready(function() {
	//sets up the date and time on the page//
	var m = moment();
	var dateFormat = m.format('LLLL');

	$('#currentDay').text(dateFormat);
	console.log();

	//variables to create table elements//
	var tableElement = $('<table></table>').addClass("time-block table")
	
	var dailyTimesArray = [];

	//appending elements to the table
	$('.container').append(tableElement);

	//calling function to build array//
	workingMoments();
	//Building HTML table//
	dailyTimesArray.forEach(function (item, index) {
		console.log("q", index, item);
		var rowElement = $('<tr></tr>')
		var tdElement = $('<td></td>');
		var tdElementMiddle = $('<td></td>');
		var tdElementLast = $('<td></td>');
		var saveBtn = $("<button>Save</button>");

		//creating rows and data entries//
		tableElement.append(rowElement);
		rowElement.append(tdElement).addClass("hour")
		rowElement.append(tdElementMiddle).addClass("text-block")
		rowElement.append(tdElementLast);
		tdElementLast.append(saveBtn).addClass("saveBtn");
		//timeblock, buttons and input//
		tdElement.text(item.format("hA"));
		tdElementMiddle.text('p');
	  });

	//Building array of moments(which populates working hours)//
	function workingMoments() {
		for (var i = 9; i <= 17; i++) {
			//gets moments api//
			var m = moment();
			//changes the hours of the moment date//
			m.hour(i);
			dailyTimesArray.push(m);
		}
	}
});
