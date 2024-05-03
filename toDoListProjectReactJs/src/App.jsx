import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodo = (e) => {
    // uuidv4();
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const newTodo = { id: uuidv4(), todoName: todo, iscompleted: false };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setTodo("");
  };

  const deleteTodos = (deletetodo) => {
    console.log(deletetodo);
    const newTodo = todos.filter((todo)=>{
      return todo.id !== deletetodo;
    })
    setTodos(newTodo);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <Navbar />
      <div className="w-screen h-min flex justify-center items-center flex-col">
        <div className="bg-violet-200 w-[80%]  min-h-[40%] rounded-lg flex justify-center items-center flex-col gap-4 m-3">
          <div className="flex justify-center items-center flex-col h-auto  w-[90%]">
            <h1 className="font-bold text-4xl p-3">Add ToDo List</h1>
            <div className="flex justify-around items-center w-[95%] h-12 rounded-full overflow-hidden">
              <input
                type="text"
                onChange={handleTodo}
                value={todo}
                className="w-[80%] h-12 outline-none px-5 font-medium text-lg "
                placeholder="Type Your Todo Here"
              />
              <button
                onClick={addTodo}
                className="w-[20%] round bg-violet-800 h-12 text-white font-bold text-lg"
              >
                Add
              </button>
            </div>
          </div>
          <hr className="bg-white w-[95%] h-[2px] rounded-full m-[3px]" />
          <div className="flex justify-center flex-col items-center w-full h-auto gap-4">
            <h1 className="font-bold text-4xl pb-4">Your ToDo List</h1>
            {todos.map((addingTodo) => {
              return (
                <div
                  key={addingTodo.id}
                  className="bg-white flex justify-start items-center mb-4 w-[85%] h-12 flex-row rounded-full  overflow-hidden"
                >
                  <div className="text-violet-600 font-bold w-[75%] border-1 border-black p-3">
                    {addingTodo.todoName}
                  </div>
                  <div className="flex justify-center items-center w-[25%] bg-violet-800 h-14 p-3 text-white font-bold">
                    <button onClick={() => deleteTodos(addingTodo.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
