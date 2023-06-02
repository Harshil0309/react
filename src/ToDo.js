import { useEffect, useState } from "react";
export default function ToDo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function onButtonClick() {
    const obj = {
      task: task,
      id: list.length + 1,
      isDone: false,
      created: Date.now(),
    };
    setList([...list, obj]);
    setTask("");
  }

  return (
    <div>
      <input
        type="string"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>
      <button onClick={onButtonClick}>Submit</button>
      <br />
      {list.map((item) => {
        return (
          <>
            <span key={item.id}>{item.task}</span> {"    "}
            {item.isDone ? <span>Done</span> : <span>Do it</span>}
          </>
        );
      })}
    </div>
  );
}
