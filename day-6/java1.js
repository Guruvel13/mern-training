commentCode = async() => {
    return new Promise((cComment) => {
        setTimeout(() => {
            cComment("Comment has been added successfully");
        }, 5000);
    });
};

async function likecode (){
 return new Promise((likingPost)=>{
        setTimeout(()=>{
            likingPost("Post Liked");
        }, 2000);   
 })
};

async function createPost() {
    var post = new Promise((cPost)=>{
        setTimeout(()=>{
            cPost("Post has been created successfully");
        }, 2000);
    });
    var [post, like, comment] = await Promise.all([post, likecode(), commentCode()]);
    console.log(post);
    console.log(like);
    console.log(comment);

}

createPost();