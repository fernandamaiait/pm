import Button from '../../design-system/Button/Button';
import TabBar from '../../design-system/TabBar/TabBar';
import Board from '../components/Board';

export default function HomePage() {
  const tabBarItems = [
    { text: 'Sales Pipeline Settings', selected: true },
    { text: 'Opportunity Details Settings' }
  ];
  return (
    <div className="bg-gray-200 min-h-screen ">
      {/* <div className="font-archivo font-normal">Teste1</div>
      <div className="font-archivo font-bold">Teste1</div>
      <div className="font-archivo-narrow">Teste1</div> */}
      <div className="flex justify-between items-center h-[109px] mx-[23px]">
        <div>
          <Logo />
        </div>
        <TabBar items={tabBarItems} />
        <Button text="Next" onClick={() => {}} />
      </div>
      <Board />
    </div>
  );
}

function Logo() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.757 1.75736L35.2714 14.2717C37.6145 16.6149 37.6145 20.4139 35.2714 22.757L22.757 35.2714C20.4139 37.6145 16.6149 37.6145 14.2717 35.2714L1.75736 22.757C-0.585786 20.4139 -0.585787 16.6149 1.75736 14.2717L14.2717 1.75736C16.6149 -0.585786 20.4139 -0.585786 22.757 1.75736Z"
        fill="#1B3E67"
      />
      <path
        d="M17.9174 7.47347C16.0111 7.75269 14.2713 8.71523 13.022 10.1818C11.7727 11.6484 11.099 13.5191 11.1264 15.4455V27.5575C11.1263 27.6829 11.1633 27.8056 11.2328 27.9101C11.3022 28.0147 11.4009 28.0963 11.5166 28.1449C11.6323 28.1935 11.7598 28.2069 11.883 28.1833C12.0062 28.1598 12.1198 28.1003 12.2094 28.0125L17.5004 22.8145C19.5424 23.1855 21.8324 22.8915 24.3114 20.3915C25.0782 19.6626 25.6828 18.7804 26.0858 17.8022C26.4889 16.8241 26.6812 15.772 26.6504 14.7145C26.586 13.6531 26.3045 12.6162 25.8233 11.6679C25.3422 10.7197 24.6716 9.88022 23.853 9.20151C23.0344 8.52279 22.0853 8.01924 21.0644 7.72201C20.0434 7.42478 18.9723 7.34019 17.9174 7.47347ZM18.8954 20.3305C17.5295 20.3305 16.2196 19.7879 15.2538 18.8221C14.2879 17.8563 13.7454 16.5463 13.7454 15.1805C13.7454 13.8146 14.2879 12.5047 15.2538 11.5389C16.2196 10.5731 17.5295 10.0305 18.8954 10.0305C20.2612 10.0305 21.5711 10.5731 22.537 11.5389C23.5028 12.5047 24.0454 13.8146 24.0454 15.1805C24.0454 16.5463 23.5028 17.8563 22.537 18.8221C21.5711 19.7879 20.2612 20.3305 18.8954 20.3305Z"
        fill="#EDEEEF"
      />
    </svg>
  );
}
