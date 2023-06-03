import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickedId, setClickedId] = useState(1);
  const [clickedDetails, setClickedDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setLoading(false);
      setBlogs(data.data);
    };

    fetchData();
  }, []);

  function onHandleclick(id) {
    setClickedId(id);
  }

  useEffect(() => {
    if (clickedId == null) return;
    const fetch = async () => {
      const newData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${clickedId}`
      );
      setClickedDetails(newData.data);
    };
    fetch();
  }, [clickedId]);

  return (
    <div style={{padding : "5rem"}}>
      <h1>Blogs</h1>
      {loading && <h1>Loading...</h1>}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <div style={{ width: "100%" }}>
          {blogs.map((blogItem, index) => {
            return (
              <h3
                onClick={() => {
                  onHandleclick(blogItem.id);
                }}
                key={blogItem.id}
              >
                {" "}
                {index + 1} {") "}
                {blogItem.title}
              </h3>
            );
          })}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "sticky",
            top: "0",
            height: "100vh",
            padding : "5rem 1rem 1rem 1rem"
          }}
        >
          {clickedDetails == null ? (
            <h4>Loading</h4>
          ) : (
            <div>
              <h4>{clickedDetails.title}</h4>
              <p>{clickedDetails.body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
