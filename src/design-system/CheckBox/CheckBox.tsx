import { ChangeEventHandler } from 'react';

interface ICheckBoxProps {
  text: string;
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function CheckBox({ text, checked, onChange }: ICheckBoxProps) {
  return (
    <div>
      <div className="flex items-center z-50 relative left-[14px] top-[35.75px] ">
        <input
          className="rounded-[5.25px] w-[17.5px] h-[17.5px] mr-[13.5px] border border-gray-400 checked:border-none focus:ring-0 checked:bg-blue-highlight"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <p className="text-gray-800 text-sm font-archivo">{text}</p>
      </div>
      <svg
        width="210"
        height="56"
        viewBox="0 0 210 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_1287_12" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 0C4.70101 0 0 4.70101 0 10.5V38.5C0 44.299 4.70101 49 10.5 49H97.1096L103.673 54.8225C104.43 55.4944 105.57 55.4944 106.327 54.8225L112.89 49H199.5C205.299 49 210 44.299 210 38.5V10.5C210 4.70101 205.299 0 199.5 0H10.5Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 0C4.70101 0 0 4.70101 0 10.5V38.5C0 44.299 4.70101 49 10.5 49H97.1096L103.673 54.8225C104.43 55.4944 105.57 55.4944 106.327 54.8225L112.89 49H199.5C205.299 49 210 44.299 210 38.5V10.5C210 4.70101 205.299 0 199.5 0H10.5Z"
          fill="white"
        />
        <path
          d="M97.1096 49L98.4368 47.5039L97.8688 47H97.1096V49ZM103.673 54.8225L105 53.3264L103.673 54.8225ZM106.327 54.8225L107.655 56.3186L106.327 54.8225ZM112.89 49V47H112.131L111.563 47.5039L112.89 49ZM2 10.5C2 5.80558 5.80558 2 10.5 2V-2C3.59644 -2 -2 3.59644 -2 10.5H2ZM2 38.5V10.5H-2V38.5H2ZM10.5 47C5.80558 47 2 43.1944 2 38.5H-2C-2 45.4036 3.59644 51 10.5 51V47ZM97.1096 47H10.5V51H97.1096V47ZM105 53.3264L98.4368 47.5039L95.7823 50.4961L102.345 56.3186L105 53.3264ZM105 53.3264V53.3264L102.345 56.3186C103.86 57.6623 106.14 57.6623 107.655 56.3186L105 53.3264ZM111.563 47.5039L105 53.3264L107.655 56.3186L114.218 50.4961L111.563 47.5039ZM199.5 47H112.89V51H199.5V47ZM208 38.5C208 43.1944 204.194 47 199.5 47V51C206.404 51 212 45.4036 212 38.5H208ZM208 10.5V38.5H212V10.5H208ZM199.5 2C204.194 2 208 5.80558 208 10.5H212C212 3.59644 206.404 -2 199.5 -2V2ZM10.5 2H199.5V-2H10.5V2Z"
          fill="#2462D1"
          mask="url(#path-1-inside-1_1287_12)"
        />
      </svg>
    </div>
  );
}
