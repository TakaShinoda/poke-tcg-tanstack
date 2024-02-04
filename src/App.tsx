import './App.css'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Post, Posts } from './types'
import axios from 'axios'

function App() {
  const fetchPosts = async (): Promise<Posts> => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return data
  }

  const { data } = useQuery({
    queryKey: ['posts'] as const,
    queryFn: fetchPosts,
  })

  console.log(data)

  const { mutate } = useMutation({
    mutationFn: async (newPost: Post) => {
      return await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        newPost
      )
    },
  })

  const handleClick = () => {
    console.log('click')
    mutate({
      userId: 101,
      id: 101,
      title: 'test',
      body: 'testtesttest',
    })
  }

  return (
    <>
      <h1>tanstack-query-demo</h1>
      <button onClick={handleClick}>POST</button>
    </>
  )
}

export default App
