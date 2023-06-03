import { useEffect, useState } from "react";
export default function ToDo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function onDelete(id) {
    setList((prevState) => {
      return prevState.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
    });
  }
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

  const handleCheckboxClick = (id) => {
    setList((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          const val = item.isDone;
          return { ...item, isDone: !val };
        }
        return item;
      });
    });
  };

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
      {list.length == 0 ? (
        <h1>have a day off</h1>
      ) : (
        list.map((item) => {
          return (
            <div>
              <input
                type="checkbox"
                id={item.id}
                checked={item.isDone}
                onChange={() => {
                  handleCheckboxClick(item.id);
                }}
              />
              <span key={item.id}>{item.task}</span> {"    "}
              {item.isDone ? <span>Done</span> : <span>Do it</span>}
              <button
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
