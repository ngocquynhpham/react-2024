import { useEffect, useRef, useState } from "react";
import { ITodo } from "../type";
import { CircleX, Pencil, Save, Trash } from "lucide-react";
type isCreate = {
  iCreate: boolean;
  handleCreate: (data: { title: string }) => Promise<void>;
  setIsCreate: (iCreate: boolean) => void;
};
type isDelete = {
  iDelete: boolean;
  handleDelete: (id: number) => Promise<void>;
};
type isUpdate = {
  iUpdate: boolean;
  handleUpdate: (todo: ITodo) => Promise<void>;
};
const ItemTodo = (props: {
  todo: ITodo;
  isCreate?: isCreate;
  isDelete?: isDelete;
  isUpdate?: isUpdate;
}) => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const inputTodo = useRef<HTMLInputElement>(null);

  const [dataInput, setDataInput] = useState<{ title: string }>({
    title: "",
  });
  const enterSave = (e: any) => {
    if (e.key === "Enter") {
      if (canEdit) {
        actionUpdate();
      } else if (props.isCreate?.iCreate) {
        props.isCreate?.handleCreate(dataInput);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", enterSave);
    return () => {
      window.removeEventListener("keydown", enterSave);
    };
  }, [dataInput]);
  useEffect(() => {
    if (canEdit || props.isCreate?.iCreate) {
      inputTodo.current?.focus();
    }
  }, [canEdit, props.isCreate?.iCreate]);

  useEffect(() => {
    setCompleted(props.todo.completed);
  }, [props.todo]);

  function actionStartEdit() {
    setCanEdit(true);
    setDataInput({ title: props.todo.title });
  }
  async function actionUpdate() {
    await props.isUpdate?.handleUpdate({
      ...props.todo,
      title: dataInput.title,
    });
    setCanEdit(false);
  }
  async function handleChangeDone(checked: boolean) {
    await props.isUpdate?.handleUpdate({
      ...props.todo,
      completed: checked,
    });
  }
  return (
    <div
      className={`flex items-center justify-between gap-4 px-4 py-2 rounded-md ${
        completed ? "bg-blue-300" : "bg-white"
      } `}
    >
      <div className="flex  gap-2 items-center w-full">
        {canEdit || props.isCreate?.iCreate ? (
          <input
            ref={inputTodo}
            onChange={(e) => {
              setDataInput({ title: e.target.value });
            }}
            value={dataInput.title}
            type="text"
            placeholder="Walking the dog"
            className="input w-full max-w-xs"
          />
        ) : (
          <div className="flex  gap-2 items-center w-full">
            <input
              type="checkbox"
              checked={props.todo.completed}
              className={`checkbox ${completed ? "" : "checkbox-success"}`}
              onChange={(e) => {
                handleChangeDone(e.target.checked);
              }}
            />
            <p
              onDoubleClick={() => {
                actionStartEdit();
              }}
              className="text-black w-full text-left"
            >
              {props.todo.title}
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 btn btn-link focus:outline-none">
          {canEdit || props.isCreate?.iCreate ? (
            <CircleX
              size={18}
              color={"red"}
              onClick={() => {
                setCanEdit(!canEdit);
                props?.isCreate?.setIsCreate(!props.isCreate?.iCreate);
              }}
            />
          ) : (
            <Trash
              size={18}
              color={"red"}
              onClick={() => {
                props.isDelete?.handleDelete(props.todo.id);
              }}
            />
          )}
        </button>
        {!props.isCreate?.iCreate ? (
          !canEdit ? (
            <button
              className="p-1 btn btn-link focus:outline-none"
              onClick={() => {
                actionStartEdit();
              }}
            >
              <Pencil size={18} color={"green"} />
            </button>
          ) : (
            // Update
            <button
              className="p-1 btn btn-link focus:outline-none"
              onClick={() => {
                actionUpdate();
              }}
            >
              <Save size={18} color={"green"} />
            </button>
          )
        ) : (
          <button
            className="p-1 btn btn-link focus:outline-none"
            onClick={() => {
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
