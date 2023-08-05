import BoardCard from './BoardCard';
import Switch from '../../design-system/Switch/Switch';

interface IBoardColumnProps {
  title: string;
  color: string;
  active?: boolean;
}
export default function BoardColumn({ title, color, active = false }: IBoardColumnProps) {
  console.log(color);
  return (
    <div
      className={`bg-gradient-to-b from-${color}-lighter to-white flex flex-col py-[14px] px-[5.25px
    ] rounded-[14px] w-[222px] min-h-screen`}>
      <div className="px-[14px] mb-[10px]">
        <p className={`text-${color}-darker font-bold text-sm mb-[14px]`}>{title.toUpperCase()}</p>
        <Switch color={color} active={active} />
      </div>
      <div className="px-[5.25px]">
        <BoardCard color={color} />
      </div>
    </div>
  );
}
