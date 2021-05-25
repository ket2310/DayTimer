var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var timeFrame = ['past', 'present', 'future'];

var rootEl = $('#root');
var divHour = $('<div>');
divHour.addClass('hour col-12 col-md-4 col-lg-3 hour');

var hourEl = $('<h1>');
hourEl.text(moment().set('hour', 9).format('h a'));
hourEl.attr('style', 'text-align: right');

divHour.append(hourEl);
rootEl.append(divHour);

var divTimeFrame = $('<div>');
divTimeFrame.addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[0]);
var eventEl = $('<h1>');
eventEl.text('present');

divTimeFrame.append(eventEl);
rootEl.append(divTimeFrame);

var divSave = $('<div>');
divSave.addClass('class="col-12 col-md-6 col-lg-3 saveBtn');
var btnSave = $('<button>');
btnSave.text('save');
btnSave.attr('style', 'text-align: left; font-size: small');
divSave.append(btnSave);
rootEl.append(divSave);