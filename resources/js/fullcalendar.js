import { Calendar } from 'fullcalendar'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from "jquery";
import moment from "moment"

$.ajaxSetup({
  headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

$(function () {
  const calendarEl = document.getElementById('calendar');
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    headerToolbar: {
      start: 'prev next',
      center: 'title',
      end: 'today',
    },
    events: booking,
    selectable: true,
    select: function (start, end, allDays) {
      $('#title-error, #price-error').text('');
      $('#bookingModal').modal('toggle');

      $('#saveBookingBtn').click(function () {
        $('#title-error, #price-error').text('');
        let title = $('#titleInput').val();
        let start_date = moment(start).format('YYYY-MM-DD');
        let end_date = moment(end).format('YYYY-MM-DD');

        $.ajax({
          url: $('meta[name="calendar-store-route"]').attr('content'),
          type: 'POST',
          dataType: 'json',
          data: { title, start_date, end_date },
          success: function (response) {
            console.log(response);
          },
          error: function (response) {
            let errors = response.responseJSON.errors;
            $('#title-error').text('');
            $.each(errors, function (field, errors) {
              $('#' + field + '-error').text(errors[0]);
            });
          },
        });
      });
    }
  });

  calendar.render();
});