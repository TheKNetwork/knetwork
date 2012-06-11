// Step 1 and 2 Subjects / Task Types Model
var subjects = {

	english: {
		name: 'English', 
		'task-types': [
			{
				name: 'Narrative',
				helpText: 'This is a Narrative Task'
			},
	
			{
				name: 'Informational',
				helpText: 'This is an Informational Task'
			},
	
			{	name: 'Argumentation',
				helpText: 'This is an Argumentation Task'
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

			{	name: 'Argumentation',
				helpText: 'This is an Argumentation Task'
			}
		]

	},

	sciences: {
		name: 'Sciences', 
		'task-types': [
			{
				name: 'Informational',
				helpText: 'This is an Informational Task'
			}
		]

	}

}

var templates = {

    Argumenation: {
        analysis: {
        	research: {
				english: "argument analysis  task english",
				social: "task1"
			},		
            essential: "text"
        },
        comparisson: {
            research: {
				english: "argument comparisson task english"
			},
           	essential: "text"
        },
        evaluation: {
            research: "text",
            essential: "text"
        }
    },

	Informational: {
		analysis: {
			research: "text",
			essential: "text",
		},
		comparisson: {
			research: "text",
			essential: "text"
		}
	}
}

//Step 1 View

//populate step1 with data from subjects model	
$(function() {

	//Set the template that populates subjects
	var subjectTemplate = $("#subjects-template").html()
	
	//Loop through each subject and populate the template
	_.each(subjects, function(subject, key){

			
			//Create a var to hold the data to pass to the template
			var data = { subjectName : subject.name, subject: key
			};

			//Populate view and append it to the template
			var subject = Mustache.to_html(subjectTemplate, data)
			$('.subjects').append(subject)
			
	});
});

$(document).ready(function() {

	//Step 2 View

	//onclick populate step2 task types associated with subject
	$(".subject-select").bind('click', function() {

		//First clear any task types already there
		$('.task-type-set').remove()

		//Get the subject ID and then the subjects Task Types
		var id = $(this).attr('id')
		var types = subjects[id]['task-types']

		//Set the template to populate
		var taskTypeTemplate = $("#task-types-template").html()

		//Loop through each Task Type for the subject clicked and populate the template
		_.each(types, function(taskTypes) {
		
			//Create a var to hold the data to pass to the template	
			var data = { taskType: taskTypes.name, taskTypeHelp: taskTypes.helpText
			};
			// Populate the view and append it to the template
			var task = Mustache.to_html(taskTypeTemplate, data)
			$('.controls').append(task)
		}); 
	});	

	var sub = "english";
	var temp = "Argumentation";
var count = 0
	var typeTemplate = $("#task-list-template").html()

	_.each(templates, function(templateType, templateName){
		_.each(templateType, function(taskType, templateTypeName){
			_.each(taskType, function(task, taskName){
				_.each(task, function(subject, subjectName){
					if (subjectName == sub) {
						var data = { count: count, type : templateTypeName}
						var temp = Mustache.to_html(typeTemplate, data)
						$(".nav-tabs").append(temp)
					}
				});
			});
		});

	});
});
