// FeedItem function
// <FeedItem/> component

import FeedItem from "./FeedItem";
import { useEffect, useState } from "react";
import axios from "axios";

function FeedList() {
  //fetch will return a promise , convert it to json
  // const number = 1;
  // const posts = [{id : 1 , title : "First" , content : "lorem ipsum dolor set amet"},{id : 1 , title : "Second" , content : "lorem ipsum dolor set amet"},{id : 1 , title : "Third" , content : "lorem ipsum dolor set amet"},{id : 1 , title : "First" , content : "lorem ipsum dolor set amet"}]

  //const [data, setdata] = useState([]);
  //const [loading, isLoading] = useState(true);
  //   useEffect(()=>{
  // fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
  //  // console.log(result)
  //   result.json().then((resp)=>{
  //     //console.log(resp);
  //    setdata(resp)

  //   })
  // })
  //   },[])

  // useEffect(() => {
  //   // axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
  //   //   console.log(res)
  //   //   setdata(res.data)
  //   // })
  //   // .catch(err=>{
  //   //   console.log(err)
  //   // })
  //   const fetchData = async () => {
  //     isLoading(true);
  //     const data = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     isLoading(false);
  //     setdata(data.data);
  //   };

  //   fetchData();
  // }, []);
  // return (
  //   //jsx
  //   <div id="post-list">
  //     <h1>Navbar</h1>
  //     {loading ? (
  //       <h1>Loading</h1>
  //     ) : (
  //       data.map((post) => {
  //         return <FeedItem post={post} name="sohel" />;
  //       })
  //     )}
  //   </div>
  // );

  //const [number, changeNumber] = useState(0);
  // changeNumber(2)
  // const [name, setName] = useState("");
  // const [number, sum] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  function renderContent() {
    if (num1 == null && num2 == null) {
      return <h1>Enter both</h1>;
    } else if (num1 == null || num2 == null) {
      return <h1>Enter one</h1>;
    } else {
      const ans = Number(num1) + Number(num2);
      if (isNaN(ans)) {
        return <h1>Enter valid input</h1>;
      } else {
        return <h1>{ans}</h1>;
      }
    }
  }

  return (
    <div>
      <input type="string" onChange={(e) => setNum1(e.target.value)}></input>
      <input type="string" onChange={(e) => setNum2(e.target.value)}></input>
      {renderContent()}
      {/* <h1>{number}</h1>
      <button
        onClick={() => {
          changeNumber(number + 1);
        }}
      >
        Click me
      </button> */}

      {/* <input
        type="string"
        onChange={(e) => {
          // console.log(e.target.value);
          setName(e.target.value);
        }}
      ></input>
      {/* <h1>Hello {name}</h1> */}
    </div>
  );
}

export default FeedList;
