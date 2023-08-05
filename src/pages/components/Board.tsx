import BoardColumn from './BoardColumn';

export default function Board() {
  const columns = [
    { title: 'Lead', color: 's-1', active: true },
    { title: 'Rep in progress', color: 's-2' },
    { title: 'Submitted', color: 's-3' },
    { title: 'Won', color: 's-4' },
    { title: 'Lost', color: 's-5' },
    { title: 'Closed', color: 's-6' }
  ];
  return (
    <div className="bg-white  mx-[10px] rounded-t-[21px] min-h-screen flex justify-start pt-[42px] flex-col">
      <p className=" text-gray-800 font-bold text-[26.25px] self-center mb-[42px]">
        Please select the type of sales pipeline that best fits to you company
      </p>
      <div className="flex gap-[14px] rounded-[14px] px-[14px]">
        {columns.map(({ title, color, active }) => (
          <BoardColumn key={title} title={title} color={color} active={active} />
        ))}
      </div>
    </div>
  );
}
