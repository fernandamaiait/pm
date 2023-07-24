interface ITabButtonProps {
  index: number;
  text: String;
  selected?: boolean;
}
export default function TabButton({ index, text, selected = false }: ITabButtonProps) {
  return (
    <>
      <button
        className={`${
          selected ? 'bg-gray-800 text-white' : 'bg-white text-navy-blue border border-light-gray'
        } font-archivo font-[17.5px]`}>
        {index}
      </button>
      <div className="font-[10.5px] font-press-start">{text}</div>
    </>
  );
}
