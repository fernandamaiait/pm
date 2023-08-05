import TabButton from '../TabButton/TabButton';

interface ITabBarItems {
  text: String;
  selected?: boolean;
}
export default function TabBar({ items }: { items: Array<ITabBarItems> }) {
  return (
    <div className="flex gap-[42px]">
      {items.map(({ text, selected }, index) => (
        <TabButton key={index} index={index + 1} text={text} selected={selected} />
      ))}
    </div>
  );
}
