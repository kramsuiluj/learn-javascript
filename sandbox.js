// object literal notations

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {

    name: 'diana',
    age: 21,
    email: 'diana@gmail.com',
    location: 'Philippines',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],

    login: () => {
        console.log('The user logged in');
    },

    logout: () => {
        console.log('The user logged out');
    },

    // my correct solution
    // logBlogs: blogs => {
    //     blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }

    // logBlogs: () => {
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }

    // logBlogs: function(){
    //     console.log('This user has written the following blogs:');
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }

    // logBlogs: () => {
    //     console.log('This user has written the following blogs:');
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }

    logBlogs(){
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {

            console.log(`Title: ${blog.title} | Likes: ${blog.likes}`);

        });
    }

};

// user.login();
// user.logout();
// user.logBlogs(user.blogs); // my correct solution
// user.logBlogs();
user.logBlogs();