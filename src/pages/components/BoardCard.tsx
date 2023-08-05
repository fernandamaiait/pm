interface IBoardCardProps {
  color: string;
}
export default function BoardCard({ color }: IBoardCardProps) {
  return <div className={`border border-${color}-light h-[175px] rounded-[10.5px]`}></div>;
}
