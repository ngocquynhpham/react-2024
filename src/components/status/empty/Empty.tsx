import "./Empty.scss";
type Props = {
  text?: string;
};
const EmptyStatus = (props: Props) => {
  const text = props.text || "Nothing to do";
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src="/public/imgs/bg_empty.png" />
      <span className="font-bold text-xl">{text}</span>
    </div>
  );
};

export default EmptyStatus;
