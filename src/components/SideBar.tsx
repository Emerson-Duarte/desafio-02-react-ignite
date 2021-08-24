import { Button } from '../components/Button';

export type ISideBar = {
  items: {
      id: number;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
      title: string;
    }[],
  handleClickButton: (id: number) => void,
  selectedItem: number,
};

export function SideBar({items, handleClickButton, selectedItem}: ISideBar) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {items.map(item => (
        <Button
          key={String(item.id)}
          title={item.title}
          iconName={item.name}
          onClick={() => handleClickButton(item.id)}
          selected={selectedItem === item.id}
        />
        ))}
      </div>
    </nav>
  );
};