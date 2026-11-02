import { usePostStore } from "../store/postStore"
import { useEffect } from "react"

function Posts() {
    const {posts, loading, error, fetchPosts} = usePostStore()
    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    if(loading) return <p>loading....</p>
    if(error) return <p>{error}</p>

  return (
    <ul>
        {posts.map((p) => (
            <li key={p.id}>{p.id}</li>
        ))}
    </ul>
  )
}

export default Posts
