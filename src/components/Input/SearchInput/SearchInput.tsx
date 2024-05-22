import { Search } from "lucide-react";
type Props = {
    onChange: () => void;
}
const SearchInput = (props:Props) => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        <input onChange={props.onChange} type="text" className="grow" placeholder="Search ..." />
        <Search />
      </label>
    </div>
  );
};

export default SearchInput;
