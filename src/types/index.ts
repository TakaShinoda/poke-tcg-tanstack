type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type Posts = Post[]

type Email = `${string}@${string}`

type Comment = {
  postId: number
  id: number
  name: string
  email: Email
  body: string
}

export type Comments = Comment[]
