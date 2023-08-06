import { CheckBox } from '../../design-system';

interface ICheckBoxGroup {
  options: Array<string>;
  onChange: any;
  selectedOption: string;
}

export default function CheckBoxGroup({ options, onChange, selectedOption }: ICheckBoxGroup) {
  return (
    <div className="flex justify-center mb-[63px] gap-[10px]">
      {options.map((option) => {
        return (
          <CheckBox
            key={option}
            text={option}
            onChange={() => onChange(option)}
            checked={option === selectedOption}
          />
        );
      })}
    </div>
  );
}
