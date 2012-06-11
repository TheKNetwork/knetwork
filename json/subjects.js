var subjects = {

	english: {
		name: 'English', 
		'task-types': [
			{
				name: 'Narrative',
				helpText: 'This is a narrative Task'
			},
	
			{
				name: 'Instructional',
				helpText: 'This is an Instructional Task'
			},
	
			{	name: 'Argumentative',
				helpText: 'This is an Argumentative Task'
			}
		]

	},
	social: {
		name: 'Social Studies', 
		'task-types': [
			{
				name: 'Narrative',
				helpText: 'This is a narrative Task'
			},

			{	name: 'Argumentative',
				helpText: 'This is an Argumentative Task'
			}
		]

	},

	sciences: {
		name: 'Sciences', 
		'task-types': [
			{
				name: 'Instructional',
				helpText: 'This is an Instructional Task'
			}
		]

	}

}		
	 
$(function() {
	_.each(subjects, function(subject, key){

			//Template
			var subjectTemplate = $("#subjects-template").html()
			//Data to load
			var data = { subjectName : subject.name, subject: key
			};

			var subject = Mustache.to_html(subjectTemplate, data)
			$('.subjects').append(subject)
			
	});
});

//onclick show task types associated with subject
$(document).ready(function() {

	$(".subject-select").bind('click', function() {
		$('.task-type-set').remove()
		var id = $(this).attr('id')
		var types = subjects[id]['task-types']

		_.each(types, function(taskTypes) {
			var taskTypeTemplate = $("#task-types-template").html()
			var data = { taskType: taskTypes.name, taskTypeHelp: taskTypes.helpText
			};
			
			var task = Mustache.to_html(taskTypeTemplate, data)
			$('.controls').append(task)
		}); 
	});	
});
