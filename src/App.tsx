import './App.css'
import { useQuery } from '@tanstack/react-query'

function App() {
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  }

  const { data } = useQuery({
    queryKey: ['posts'] as const,
    queryFn: fetchPosts,
  })

  console.log(data)

  return (
    <>
      <h1>tanstack-query-demo</h1>
    </>
  )
}

export default App
