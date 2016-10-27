'use strict';

const qArr = [
	`Seinfeld is the greatest TV show ever.`,
	`So is Friends.`,
	`The last two questions are not contradictory.  At all.`,
	`I dream about a zombie apocalypse.`,
	`Slow zombies and fast zombies are equally entertaining.`,
	`I'm sad that there are no more questions about zombies.`,
	`Jeff's obsession with Pearl Jam is not at all strange.`,
	`I have no idea who Jeff is.`,
	`How many beers must one drink before the real fun starts?`,
	`My favorite number between one and five is ...`
];

for (let i = 0; i < qArr.length; i++) {
	$('#questions').append(`<h3>Question ${i+1}</h3>`)
		.append(`<p>${qArr[i]}</p>`)
		.append(`<select required class="chosen-select answer" id="${i}">
				<option value="" disabled selected hidden>Choose an option</option>
		    <option value="1">1 (Strongly Disagree)</option>
		    <option value="2">2</option>
	  	  <option value="3">3</option>
	    	<option value="4">4</option>
		    <option value="5">5 (Strongly Agree)</option>
	 		</select>`);
}

$('#submit').on('click', function () {
	let scoreArr = [];
	$('.answer').each(function () { scoreArr.push($(this).val()) });

	const newFriend = {
		name: $('#name').val().trim(),
		photo: $('#photo').val().trim(),
		scores: scoreArr
	};

	if (newFriend.name && newFriend.photo && !scoreArr.some((val) => !val)) {
		$.post('/api/friends', newFriend, function (data) {
			$('.modal-body').html(`<h3>${data.name}</h3>`)
				.append(`<img src="${data.photo}" class="photo">`);
			$('#myModal').modal();
		});

	} else {
		alert('Please fill out all fields before submitting.');
	}
});
		