const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list"> <br />

      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{blog.title}</h2>
          <h4> {blog.body}    </h4>
          <p>écrit par {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}> supprimer le blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;