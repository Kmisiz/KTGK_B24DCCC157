import { useEffect, useState } from "react";
import { getPosts, deletePost, Post } from "../api/postsApi";
import PostCard from "../component/PostCard";
import "../css/PostList.css";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <PostCard post={post} />
          <div className="post-actions">
            <button onClick={() => handleEdit(post.id)}>Sửa</button>
            <button onClick={() => handleDelete(post.id)}>Xóa</button>
          </div>
        </div>
      ))}
    </div>
  );
}