// queryFn, mutationFn を管理
import axios from 'axios'
import type { Post, GetPostsResponse } from './type'

const fetchAllPosts = async () => {
  const { data } = await axios.get<GetPostsResponse>(
    'https://jsonplaceholder.typicode.com/posts'
  )
  return data
}

const createPost = async (newPost: Post) => {
  await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
}

export { fetchAllPosts, createPost }
