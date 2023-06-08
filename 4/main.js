$().ready(function () {
	$('.progress-bar[data-EndDate]').each(function () {
		var progress = $(this);
		var deadline = $(this).attr('data-EndDate');

		var start = new Date('2020-09-01'),
				end = new Date(deadline),
				today = new Date(),
				dday = today.getTime() - end.getTime();
		dday = Math.floor(dday / (1000 * 60 * 60 * 24)) * -1;
		p = Math.round(((today - start) / (end - start)) * 100) + '%';

		$(this).css("width", p); //progress bar width
		if (dday >= 0) {
			dday = '<span class="text-bold">D-' + dday + '</span>';
		} else {
			dday = '<span class="text-bold">END</span>'
		}
		$(this).parent().find('.progress-completed').html(dday); //D-day

	});
});