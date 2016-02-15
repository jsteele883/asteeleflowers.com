
function toggleChevron(e) {
	$(e.target)
	.prev('.panel-heading')
	.find("i.indicator")
	.toggleClass('glyphicon-minus-sign glyphicon-plus-sign');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

$('.carousel').carousel();

