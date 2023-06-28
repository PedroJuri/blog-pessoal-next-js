import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    const post = await getPosts();
    const foundPost = post.find((post) => post.id === id);

    if (foundPost) {
        return foundPost;
    }

    return { title: "Sua postagem infelizmente não foi encontrada" };
}