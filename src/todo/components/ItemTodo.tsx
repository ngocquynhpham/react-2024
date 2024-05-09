import { useState } from "react";
import { ITodo } from "../type";
import { Pencil, Save, Trash } from "lucide-react";
type isCreate = {
  iCreate: boolean;
  handleCreate: (data: { title: string }) => void;
};
const ItemTodo = (props: { todo: ITodo; isCreate?: isCreate }) => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [canEdit, setCanEdit] = useState<boolean>(false);

  const [dataInput, setDataInput] = useState<{ title: string }>({
    title: "",
  });
  return (
    <div
      className={`flex items-center justify-between gap-4 hover:bg-zinc-300 px-4 py-2 rounded-md ${
        completed ? "bg-blue-300" : "bg-white"
      } `}
    >
      <div className="flex  gap-2 items-center w-full">
        <input
          type="checkbox"
          className={`checkbox ${completed ? "" : "checkbox-success"}`}
          onChange={(e) => {
            setCompleted(e.target.checked);
          }}
        />
        {canEdit || props.isCreate?.iCreate ? (
          <input
            onChange={(e) => {
              setDataInput({ title: e.target.value });
            }}
            value={dataInput.title}
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
        ) : (
          <p className="text-black w-full text-left">{props.todo.title}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 btn btn-link focus:outline-none">
          <Trash size={18} color={"red"} />
        </button>
        {!props.isCreate?.iCreate ? (
          !canEdit ? (
            <button
              className="p-1 btn btn-link focus:outline-none"
              onClick={() => {
                setCanEdit(true);
              }}
            >
              <Pencil size={18} color={"green"} />
            </button>
          ) : (
            <button
              className="p-1 btn btn-link focus:outline-none"
              onClick={() => {
                setCanEdit(false);
              }}
            >
              <Save size={18} color={"green"} />
            </button>
          )
        ) : (
          <button
            className="p-1 btn btn-link focus:outline-none"
            onClick={() => {
                console.log("handleCreate")
              props.isCreate?.handleCreate(dataInput);
            }}
          >
            <Save size={18} color={"green"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemTodo;
