import { Calendar } from 'fullcalendar'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from "jquery";
    
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
      select: function(start, end, allDays){
        console.log('selected ' );
        $('#bookingModal').modal('toggle');
      }
    });
  
    calendar.render();
  });