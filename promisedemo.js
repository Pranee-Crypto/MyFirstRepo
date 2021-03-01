function getUser(id){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('getting the user from the database')
           resolve({
                id:id,
                name:'amarjeet'
            })
        }, 2000);
    })
    }
    function getBlogs(username){
        return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('loading all his posts from various apps...')
           resolve
               (['post1','post2','post3'])
        
        }, 2000);
    })
    }
    function getComments(post){
        return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('loading comments from multiple posts' +post)
           resolve( ['comments for ' +post])
        }, 2000);
    })
    }
    
    getUser(101)
    .then (user => getBlogs(user.name))
    .then(blogpost =>getComments(blogpost[0]))
    .then(comments => console.log(comments))
    .catch(err => console.log('error' ,err.message))