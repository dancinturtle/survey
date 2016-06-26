var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
	name: {type: String},
	question: {type: String, required: [true, 'A question is required.'], minlength: [8, 'Question must be at least 8 characters long.']},
  option1: {type: String, required: [true, 'Option 1 is required.'], minlength: [3, 'Option 1 must have at least 3 characters.']},
	option2: {type: String, required: [true, 'Option 2 is required.'], minlength: [3, 'Option 2 must have at least 3 characters.']},
	option3: {type: String, required: [true, 'Option 3 is required.'], minlength: [3, 'Option 3 must have at least 3 characters.']},
	option4: {type: String, required: [true, 'Option 4 is required.'], minlength: [3, 'Option 4 must have at least 3 characters.']},
	vote1: {type: Number},
	vote2: {type: Number},
	vote3: {type: Number},
	vote4: {type: Number}
	}, {timestamps: true })

var Poll = mongoose.model('Poll', PollSchema);
