
function exportTo(type) {

	$('.table').tableExport({
		filename: 'Havayolu_Firmalari_%DD%-%MM%-%YY%',
		format: type,
		cols: '2,3,4,5,6,8,9,10'
	});

}

function exportAll(type) {

	$('.table').tableExport({
		filename: 'Havayolu_Firmalari_%DD%-%MM%-%YY%',
		format: type
	});

}