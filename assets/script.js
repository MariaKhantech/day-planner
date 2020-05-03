$(document).ready(function() {
	//sets up the date and time on the page//
	var m = moment();
	var dateFormat = m.format('LLLL');

	$('#currentDay').text(dateFormat);
	console.log();

	//variables to create table elements//
	var tableElement = $('<table></table>').addClass(' table time-block');

	var dailyTimesArray = [];

	//appending elements to the table
	$('.container').append(tableElement);

	//calling function to build array//
	workingMoments();
	//Building HTML table//
	dailyTimesArray.forEach(function(momentElement, position) {
		//getHrInteger taking date/momentElement in the array and formating into an hour//
		var getHrInteger = parseInt(momentElement.format('H'));
		var rowElement = $('<tr></tr>');
		var tdElement = $('<td></td>').addClass('hour');

		//giving two classes and giving an id getHrInteger changes hr//
		var tdElementMiddle = $('<td></td>')
			.addClass(pastPresentFuture(getHrInteger) + ' text-block')
			.attr('id', getHrInteger);

		var saveBtn = $('<button><i class="fas fa-save"></i></button>').addClass('saveBtn float-left');

		//creating rows and data entries//
		tableElement.append(rowElement);
		rowElement.append(tdElement);
		rowElement.append(tdElementMiddle);
		rowElement.append(saveBtn);
		// tdElementLast.append(saveBtn);

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

	//button to capture save event to local storage//
	$('button').on('click', function() {
		var takeText = this.previousElementSibling.innerHTML;
		var takeTextId = this.previousElementSibling.id;
		//put the takeText in local storage
		localStorage.setItem(takeTextId, JSON.stringify(takeText));
	});

	//load items from the local storage
	for (var i = 9; i <= 17; i++) {
		var textNote = JSON.parse(localStorage.getItem(i));
		$('#' + i).text(textNote);
	}
});
