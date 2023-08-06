interface ISwitchProps {
  color: string;
  active: boolean;
}
export default function Switch({ color, active = false }: ISwitchProps) {
  return (
    <div
      className={`bg-${color}-light h-[22px] w-[114px] rounded-[10.5px] flex justify-${
        active ? 'end' : 'start'
      }`}>
      <div className={`bg-${color} w-[42px] rounded-[10.5px] `} />
    </div>
  );
}
