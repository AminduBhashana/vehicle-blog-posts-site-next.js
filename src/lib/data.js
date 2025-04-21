const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Mike"}
];

const posts = [
    {id: 1, title: "Post 1", body: "This is my post 1", userId: 1},
    {id: 2, title: "Post 2", body: "This is my post 2", userId: 1},
    {id: 3, title: "Post 3", body: "This is my post 3", userId: 2},
    {id: 4, title: "Post 4", body: "This is my post 4", userId: 2},
];

export const getPosts = async () => {
    return posts;
};

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    return post;
}

export const getUser = async (userID) => {
    return users.find((user) => user.id === parseInt(userID));
}