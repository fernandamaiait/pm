import { useState } from 'react';
import BoardColumn from './BoardColumn';
import CheckBoxGroup from './CheckBoxGroup';

export default function Board() {
  const [selectedOption, setSelectedOption] = useState('Custom');

  const options = ['Basic', 'Advanced', 'Expert', 'Custom'];

  const columns = [
    { title: 'Lead', color: 's-1', active: true },
    { title: 'Rep in progress', color: 's-2' },
    { title: 'Submitted', color: 's-3' },
    { title: 'Won', color: 's-4' },
    { title: 'Lost', color: 's-5' },
    { title: 'Closed', color: 's-6' }
  ];

  const onChangeSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-white  mx-[10px] rounded-t-[21px] min-h-screen flex justify-start pt-[42px] flex-col">
      <p className=" text-gray-800 font-bold text-[26.25px] self-center mb-[42px] font-archivo ">
        Please select the type of sales pipeline that best fits to you company
      </p>
      <CheckBoxGroup
        options={options}
        selectedOption={selectedOption}
        onChange={onChangeSelectedOption}
      />
      <div className="flex gap-[14px] rounded-[14px] px-[14px]">
        {columns.map(({ title, color, active }, index) => {
          if (selectedOption === 'Basic' && index > 2) return;
          if (selectedOption === 'Advanced' && index > 3) return;
          if (selectedOption === 'Expert' && index > 4) return;
          return <BoardColumn key={title} title={title} color={color} active={active} />;
        })}
      </div>
    </div>
  );
}
