function FeedItem({ post }) {
  const {  id, title, content } = post;
  return (
    <div id="post-item">
      {/* <h4>User id={userId}</h4> */}
      <h4>Id={id}</h4>
      <h4>Title{title}</h4>
      <p>Body={content}</p>
    </div>
  );
}

export default FeedItem;
