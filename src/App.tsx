import './App.css'
import { useFetchAllPosts, useCreatePost } from './api/post'

function App() {
  const { mutate, status } = useCreatePost()
  console.log('useCreatePost/status', status)

  const handleClick = () => {
    const postData = {
      userId: 101,
      id: 101,
      title: 'test',
      body: 'testtesttest',
    }
    mutate(postData)
  }

  const { data, isPending, isError } = useFetchAllPosts()

  console.log('useFetchAllPosts/data', data)
  console.log('useFetchAllPosts/isPending', isPending)
  console.log('useFetchAllPosts/isError', isError)

  return (
    <>
      <h1>tanstack-query-demo</h1>
      <button onClick={handleClick}>POST</button>
    </>
  )
}

export default App
