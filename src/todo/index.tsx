import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemTodo from "./components/ItemTodo";
import { ITodo } from "./type";
import { Plus } from "lucide-react";

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
        setAlert({
          mess: "Tạo mới thành công",
          type: "alert-success",
          show: true,
        });
        getTodos();
        setIsCreate(false);
      } else {
        throw new Error("Tạo mới không thành công !!!");
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
      const res = await fetch(apiUrl + "/todo/");
      const dataApi = await res.json();
      console.log("dataApi", dataApi);
      setTodoList(dataApi);
    } catch (error) {
      console.log("getTodos dataApi");
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
    <>
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

      <div className="flex flex-col gap-4 items-center">
        <h1>Welcome to Todo Project</h1>
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

      <div className="card flex flex-col gap-4">
        {todoList.map((item, index: any) => {
          return <ItemTodo todo={item} key={index} />;
        })}
        {isCreate && (
          <ItemTodo
            isCreate={{ iCreate: isCreate, handleCreate: handleCreate }}
            todo={{ id: -1, title: "", completed: false }}
          />
        )}
      </div>
    </>
  );
};

export default TodoPage;
