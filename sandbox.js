// object literal notations

let user = {

    name: 'diana',
    age: 21,
    email: 'diana@gmail.com',
    location: 'Philippines',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],

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

    logBlogs: function(){
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }

    // logBlogs: () => {
    //     console.log('This user has written the following blogs:');
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }

};

// user.login();
// user.logout();
// user.logBlogs(user.blogs); // my correct solution
// user.logBlogs();
user.logBlogs();