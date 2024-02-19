import { useState } from "react";

const Todolist = () => {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  function addActivity() {
    setList((list) => {
      const updatedList = [...list, activity];
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedListData = list.filter((elem, id) => {
      return i != id;
    });
    setList(updatedListData);
  }
  function removeAll() {
    setList([]);
  }
  return (
    <>
      <div className="container">
        <input
          className="input1"
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Add Your Task"
        />
        <button className="add-button" onClick={addActivity}>
          Add Task
        </button>
      </div>
      <div className="List">
        <h1>Task List :{list.length}</h1>
        {list != [] &&
          list.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <button className="btn2" onClick={() => removeActivity(i)}>
                    Remove(-)
                  </button>
                </p>
              </>
            );
          })}
        {list.length == 0 && <h2>No Task Available</h2>}
        {list.length > 1 && (
          <button className="removeallbtn" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
};
export default Todolist;
