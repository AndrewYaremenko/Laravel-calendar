import { Calendar } from 'fullcalendar'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from "jquery";

console.log('calendar import');

$(function () {
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
    });
  
    calendar.render();
  });