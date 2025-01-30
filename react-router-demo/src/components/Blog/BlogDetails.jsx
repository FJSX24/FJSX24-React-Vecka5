import { useParams } from "react-router-dom";

function BlogDetails() {
  const { blogId } = useParams(); // Hämta bloggens ID från URL:en
  console.log("blogId", blogId);

  return (
    <div>
      <h3>Blog Post {blogId}</h3>
      <p>Här kommer information om blogginlägget med ID {blogId}.</p>
    </div>
  );
}

export default BlogDetails;
