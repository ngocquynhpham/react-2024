import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemTodo from "./components/ItemTodo";
import { ITodo } from "./type";
import { Plus } from "lucide-react";
import "./index.scss";
import EmptyStatus from "../components/status/empty/Empty";

const apiUrl = "https://huge-currently-rat.ngrok-free.app";

const TodoPage = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    mess: string;
    type: "alert-success" | "alert-error";
    show: boolean;
  }>({ mess: "", type: "alert-error", show: false });

  async function handleCreate(data: { title: string }) {
    try {
      const res = await fetch(apiUrl + "/todo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        await getTodos();
        setAlert({
          mess: "Created success :)",
          type: "alert-success",
          show: true,
        });
        setIsCreate(false);
      } else {
        throw new Error("Oh no, An error occured !!!");
        // setAlert({
        //   mess: "Hệ thống bị gián đoạn",
        //   type: "alert-error",
        //   show: true,
        // });
      }
    } catch (error) {
      setAlert({
        mess: (error as Error).message,
        type: "alert-error",
        show: true,
      });
    }
  }
  async function getTodos() {
    try {
      const res = await fetch(apiUrl + "/todos.io/");
      const dataApi = await res.json();
      setTodoList(dataApi);
    } catch (error) {
      setAlert({
        mess: "Oh no, Can't get todo list !!!",
        type: "alert-error",
        show: true,
      });
    }
  }
  async function deleteTodo(id: number) {
    try {
      const res = await fetch(apiUrl + "/todo/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        await getTodos();
        setAlert({
          mess: "Deleted success :)",
          type: "alert-success",
          show: true,
        });
      } else {
        throw new Error("Oh no, An error occured !!!");
      }
    } catch (error) {
      setAlert({
        mess: "Oh no, An error occured !!!",
        type: "alert-error",
        show: true,
      });
    }
  }
  async function updateTodo(todo: ITodo) {
    try {
      const res = await fetch(apiUrl + "/todo/" + todo.id + "/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
      });
      if (res.status === 200) {
        await getTodos();
        setAlert({
          mess: "Updated success :)",
          type: "alert-success",
          show: true,
        });
      } else {
        throw new Error("Oh no, An error occured !!!");
      }
    } catch (error) {
      setAlert({
        mess: "Oh no, An error occured !!!",
        type: "alert-error",
        show: true,
      });
    }
  }
  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 3000);
    }
  }, [alert.show]);
  return (
    <div className="main-page">
      {alert.show && (
        <div
          role="alert"
          className={"alert absolute w-fit right-0 " + alert.type}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{alert.mess}</span>
        </div>
      )}

      <div className="flex flex-col gap-4 items-center py-4">
        <p className="text-3xl">Welcome to Todo Project</p>
        <div className="flex gap-4 justify-center items-center w-full">
          <button
            className="w-fit btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <button
            className="w-fit btn btn-outline"
            onClick={() => {
              getTodos();
            }}
          >
            Refresh
          </button>
          <button
            className="w-fit btn btn-primary focus:outline-none text-white"
            onClick={() => {
              setIsCreate(true);
            }}
          >
            <Plus />
            Create new
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 list-todo">
        {isCreate && (
          <ItemTodo
            isCreate={{
              iCreate: isCreate,
              setIsCreate: setIsCreate,
              handleCreate: handleCreate,
            }}
            todo={{ id: -1, title: "", completed: false }}
          />
        )}
        {todoList?.length === 0 && !isCreate ? (
          <EmptyStatus />
        ) : (
          todoList.map((item, index: any) => {
            return (
              <ItemTodo
                todo={item}
                key={index}
                isDelete={{ iDelete: true, handleDelete: deleteTodo }}
                isUpdate={{iUpdate:true, handleUpdate: updateTodo}}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoPage;
