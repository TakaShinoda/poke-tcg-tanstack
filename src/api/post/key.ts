// queryKey を管理

// https://tkdodo.eu/blog/effective-react-query-keys#structure
// GET	/posts                   -> ['posts']
// GET  /posts?id=               -> ['posts', 'list', { id }]
// GET	/posts/1                 -> ['posts', 'detail', id]
// GET	/posts/1/comments        -> ['posts', 'detail', id, 'comments']

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  idList: (id?: string) => [...postKeys.lists(), { id }] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: number) => [...postKeys.details(), id] as const,
  detailComments: (id: number) => [...postKeys.details(), id, 'comments'] as const,
} as const

