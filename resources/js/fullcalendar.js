import { Calendar } from 'fullcalendar'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from "jquery";
import moment from "moment"
import Swal from 'sweetalert2'

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

$(function () {
	let start_date;
	let end_date;
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
		select: function ({ start, end }) {
			start_date = moment(start).format('YYYY-MM-DD');
			end_date = moment(end).format('YYYY-MM-DD');
			$('#title-error').text('');
			$('#bookingModal').modal('toggle');
		},
		editable: true,
		eventDrop: function (event) {
			let id = event.event.id;
			let start_date = moment(event.event.start).format('YYYY-MM-DD');
			let end_date = moment(event.event.end).format('YYYY-MM-DD');

			console.log($('meta[name="calendar-update-route"]').attr('content'));

			$.ajax({
				url: $('meta[name="calendar-update-route"]').attr('content') + '/' + id,
				type: 'PATCH',
				dataType: 'json',
				data: { start_date, end_date },
				success: function (response) {
					Swal.fire('Successful!');
				},
				error: function (response) {
					console.log(response);
				}
			})
		}
	});

	$(document).on('click', '#saveBookingBtn', function (e) {
		$('#title-error').text('');
		let title = $('#titleInput').val();

		$.ajax({
			url: $('meta[name="calendar-store-route"]').attr('content'),
			type: 'POST',
			dataType: 'json',
			data: { title, start_date, end_date },
			success: function (response) {
				const newEvent = {
					title,
					start: start_date,
					end: end_date,
				};
				calendar.addEvent(newEvent);
				$('#bookingModal').modal('hide');
				$('#titleInput').val('');
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

	calendar.render();
});


