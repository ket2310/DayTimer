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

    // divTimeFrame[i] = $('<div>');
    // divTimeFrame[i].addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[0]);

    eventEl[i] = $('<textarea>');
    eventEl[i].addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[0]);
    var taId = "ta";
    taId = taId.concat(startHour - 1);
    eventEl[i].attr('id', taId);
    eventEl[i].val(localStorage.getItem(taId));

    //    if (eventEl[i].value != null || eventEl[i].value != '') {
    //   eventEl[i].val(localStorage.getItem(taId));

    var eventHour = moment().set('hour', startHour - 1).format('h:m')
    var nowHour = today.hour();
    console.log(eventHour)
    // now
    console.log('The difference is ' + moment().diff(eventHour, 'hours'));
    if (moment().diff(eventHour, 'hours') < 0) {
        eventEl[i].addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[0]);
        console.log('event is today or in future ' + eventHour);
    } else if (moment().diff(eventHour, 'hours') > 0) {
        eventEl[i].addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[2]);
        console.log('event is in the past ' + eventHour);
    }
    else if (moment().diff(eventHour, 'hours') === 0)
        eventEl[i].addClass('col-12 col-md-6 col-lg-6 ' + timeFrame[1]);
    //  }

    //divTimeFrame[i].append(eventEl[i]);
    rootEl.append(eventEl[i]);

    //divSave[i] = $('<div>');
    //divSave[i].addClass('class="col-12 col-md-6 col-lg-3 ');
    btnSav[i] = $('<button>');
    var btnId = "btn";
    btnId = btnId.concat(startHour - 1);
    btnSav[i].attr('id', btnId)
    btnSav[i].addClass('saveBtn bi bi-save2 col-12 col-md-6 col-lg-3');
    btnSav[i].on('click', savEvent);
    iSave[i] = $('<i>');

    iSave[i].attr('style', 'text-align: left; font-size: small');

    btnSav[i].append(iSave[i]);
    //divSave[i].append(btnSav[i]);

    rootEl.append(btnSav[i]);
}

function savEvent(event) {
    event.preventDefault();
    console.log(event.target.id)

    var tmp = event.target.id.substr(3);
    console.log(tmp);

    var txtaId = "ta";
    txtaId = txtaId.concat(tmp);
    var txtaEl = $('#ta' + tmp);
    console.log(txtaEl.val())

    localStorage.setItem(txtaId, txtaEl.val());
}
