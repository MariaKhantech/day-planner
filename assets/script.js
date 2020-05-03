$(document).ready(function() {
	//sets up the date and time on the page//
	var m = moment();
	var dateFormat = m.format('LLLL');

	$('#currentDay').text(dateFormat);
	console.log();

	//variables to create table elements//
	var tableElement = $('<table></table>').addClass('time-block table');

	var dailyTimesArray = [];

	//appending elements to the table
	$('.container').append(tableElement);

	//calling function to build array//
	workingMoments();
	//Building HTML table//
	dailyTimesArray.forEach(function(momentElement, position) {
		var getHrInteger = parseInt(momentElement.format('H'));
		var rowElement = $('<tr></tr>');
		var tdElement = $('<td></td>').addClass('hour');
		var tdElementMiddle = $('<td></td>').addClass('text-block').addClass(pastPresentFuture(getHrInteger));
		var tdElementLast = $('<td></td>');
		var saveBtn = $('<button>Save</button>').addClass('saveBtn');

		//creating rows and data entries//
		tableElement.append(rowElement);
		rowElement.append(tdElement);
		rowElement.append(tdElementMiddle);
		rowElement.append(tdElementLast);
		tdElementLast.append(saveBtn);

		//timeblock, buttons and input, h is formatting for 12 hours clock A is adding AM and PM capitals//
		tdElement.text(momentElement.format('hA'));
		tdElementMiddle.text('p');

		//td input area used https://stackoverflow.com/questions/6012823/how-to-make-html-table-cell-editable// to find contentedible//
		tdElementMiddle.attr('contenteditable', 'true');
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

	// returns back whether the time is in the past present or future based on current time//
	function pastPresentFuture(momentHour) {
		var currentHour = m.format('H');
		if (currentHour > momentHour) {
			return 'past';
		} else if (currentHour < momentHour) {
			return 'future';
		} else {
			return 'present';
		}
	}
});
