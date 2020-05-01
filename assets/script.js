$(document).ready(function() {
	//sets up the date and time on the page//
	var m = moment();
	var dateFormat = m.format('LLLL');

	$('#currentDay').text(dateFormat);
	console.log();

	//variables to create table elements//
	var tableElement = $('<table></table>');
	tableElement.addClass('table');

	var dailyTimesArray = [ '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM' ];

	//appending elements to the table
	$('.container').append(tableElement);

	//for loop to create multiple rows
	for (var i = 0; i < dailyTimesArray.length; i++) {
		var trElement = $('<tr></tr>');
		var tdElement = $('<td></td>');
		//creating rows and data entries//
		tableElement.append(trElement);
		trElement.append(tdElement);
		tdElement.text(dailyTimesArray[i]);
		console.log('im in here');
	}
});
