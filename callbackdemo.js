const getBlogPost=(callbackdemo)=>{
    setTimeout( ()=>{
        callbackdemo({
            title: 'welcome to call back'
        })
    },2000);

}

/*const bp=getBlogPost
console.log(bp.title)*/
getBlogPost((bp) =>{
console.log(bp.title)
})


