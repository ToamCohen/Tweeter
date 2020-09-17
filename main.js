const renderer = Renderer(posts)
const logic = Logic()

const removePosts = function () {
	const post = $(this).closest('.container').attr('id')
	console.log(renderer(logic.removePost(post)))
}

const addPosts = function () {
	const inputVal = $("#input").val()
	renderer(logic.addPost(inputVal))
}


const addComments = function (){
	const post = $(this).closest('.container').attr('id')
	const inputVal = $(this).closest('.container').find('.inputs').val()
	renderer(logic.addComment(inputVal, post))	
}

const removeComments = function (){
	const post = $(this).closest('.container').attr('id')
	const comment = $('.container').find('.comments').attr('id')
	renderer(logic.removeComment(post, comment))
	console.log(comment)
	console.log(post)

}



$("#post").on('click', addPosts)
$("#container-for-template").on('click', '.delete', removePosts)
$("#container-for-template").on('click', '.buttons', addComments)
$("#container-for-template").on('click', '.delete-comment', removeComments)












