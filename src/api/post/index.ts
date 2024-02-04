// useQuery, useMutation の Custom Hook
import { useMutation, useQuery } from '@tanstack/react-query'
import { postKeys } from './key.ts'
import { fetchAllPosts, createPost } from './function.ts'

const useFetchAllPosts = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: postKeys.all,
    queryFn: fetchAllPosts
  })

  return {
    data,
    isPending,
    isError
  }
}

const useCreatePost = () => {
  const { mutate, status } = useMutation({
    mutationFn: createPost
  })

  return {
    mutate,
    status
  }

}

export { useFetchAllPosts, useCreatePost }
