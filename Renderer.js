const Renderer = function (data) {

	const render = function () {
		$("#container-for-template").empty()
		const soruce = $("#tweeter-template").html()
		const template = Handlebars.compile(soruce)
		
			const someHTML = template({posts: data, comments:data.comments })
			$("#container-for-template").append(someHTML)
		}

		return render
	}

