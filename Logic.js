let postIdCounter = 0
let commentIdCounter = 0

const posts = []
const Logic = function () {

	const getPosts = function () {
		return posts
	}

	const addPost = function (text) {
		const post = {
			text,
			id: 'p' + postIdCounter++,
			comments: []
		};
		posts.push(post);
		
	}

	const removePost = function (postID) {
		for (let i in posts) {
			if (posts[i].id === postID) {
				posts.splice(i, 1)
			}
		}
	}

	const addComment = function (text, postID) {
		const comment = {
			text,
			id: 'c' + commentIdCounter++,
			postID,
		}
		for (let i in posts) {
			if (posts[i].id === postID) {
				posts[i].comments.push(comment)
			}
		}
	}

	const removeComment = function (postID, commentID) {
		for (let pindex in posts) {
			if (posts[pindex].id === postID) {
				for (let i in posts[pindex].comments) {
					if (posts[pindex].comments[i].id === commentID) {
						posts[pindex].comments.splice(i, 1)
					}
				}
			}
		}
	}

	return { getPosts, addPost, removePost, addComment, removeComment }
}



