export interface ITabButtonProps {
  index: number;
  text: String;
  selected?: boolean;
}
export default function TabButton({ index, text, selected = false }: ITabButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        className={`${
          selected
            ? 'bg-gray-800 text-white border border-gray-800'
            : 'bg-white text-navy-blue  border-light-gray'
        } font-archivo-narrow font-[17.5px] py-4 px-5 rounded-[17.5px] border`}>
        {index}
      </button>
      <div className="font-[10.5px] font-archivo-narrow mt-[3px] ">{text}</div>
    </div>
  );
}
