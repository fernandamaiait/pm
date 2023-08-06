import { MouseEventHandler } from 'react';

interface IButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, onClick }: IButtonProps) {
  return (
    <button
      className="bg-blue-highlight text-white font-bold text-sm px-[21px] py-[13px] rounded-[34px] font-archivo"
      onClick={onClick}>
      {text}
    </button>
  );
}
