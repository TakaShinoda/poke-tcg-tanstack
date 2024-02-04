import './App.css'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Post, Posts } from './types'

function App() {
  const fetchPosts = async (): Promise<Posts> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  }

  const { data } = useQuery({
    queryKey: ['posts'] as const,
    queryFn: fetchPosts,
  })

  console.log(data)

  const { mutate } = useMutation({
    mutationFn: async (newPost: Post) => {
      return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
      })
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
