var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var timeFrame = ['past', 'present', 'future'];

var rootEl = $('#root');
var divHour = new Array();
var startHour = 9;
var hourEl = new Array();
var divTimeFrame = new Array();
var eventEl = new Array();
var divSave = new Array();
var btnSav = new Array();
var iSave = new Array();

for (let i = 0; i < 9; i++) {
    divHour[i] = $('<div>');
    divHour[i].addClass('hour col-12 col-md-4 col-lg-3 hour');

    hourEl[i] = $('<h1>');
    hourEl[i].text(moment().set('hour', startHour++).format('h a'));
    hourEl[i].attr('style', 'text-align: right');

    divHour[i].append(hourEl[i]);
    rootEl.append(divHour[i]);

    divTimeFrame[i] = $('<div>');
    divTimeFrame[i].addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[0]);
    eventEl[i] = $('<h1>');
    eventEl[i].text('present');

    divTimeFrame[i].append(eventEl[i]);
    rootEl.append(divTimeFrame[i]);

    divSave[i] = $('<div>');
    divSave[i].addClass('class="col-12 col-md-6 col-lg-3 saveBtn bi bi-save2');
    iSave[i] = $('<i>');

    iSave[i].attr('style', 'text-align: left; font-size: small');
    divSave[i].append(iSave);
    rootEl.append(divSave[i]);
}