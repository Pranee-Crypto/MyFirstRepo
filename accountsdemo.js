function getUser(id,callbackfun){
    setTimeout(() => {
        console.log('getting the user from the database')
        callbackfun({
            id:id,
            name:'Praneetha'

        })
     }, 2000);

}

function getBlogs(username,callbackfun){
    setTimeout(() => {
        console.log("Getting the posts from the user")
        callbackfun(["Post1","Post2","Post3"])
    }, 2000);

}

function getComments(posts,callbackfun){
    setTimeout(() => {
        console.log("Getting comments from multiple posts" +posts)
        callbackfun(['comments for '+posts])
    }, 2000);

}

getUser(101,(user)=>{
    getBlogs(user.name,(blogspost)=>{
        getComments(blogspost[0],(comments)=>{
            console.log(user,blogspost[0],comments)
        })
    })
})