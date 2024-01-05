import QueryPanel from './QueryPanel';
import DarkModeSwitch from './DarkModeSwitch';
import useAppStore from '../store/useAppStore';

const QueryTab = () => {
  const fullScreen = useAppStore((state) => state.fullScreen);
  const activeTab = useAppStore((state) => state.activeTab);
  const changeActiveTab = useAppStore((state) => state.changeActiveTab);
  const addNewTab = useAppStore((state) => state.addNewTab);
  const tabs = useAppStore((state) => state.tabs);
  const removeTab = useAppStore((state) => state.removeTab);

  return (
    <div className='flex flex-col w-full divide-y dark:divide-slate-700'>
      <div
        className={`${
          fullScreen ? '' : 'hidden'
        } flex justify-between dark:bg-slate-900 dark:text-slate-300`}
      >
        <div className='flex gap-x-1 max-w-[calc(100vw-350px)]'>
          <div className='flex overflow-auto'>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`hover:border-b-blue-500 dark:hover:border-b-blue-400 mr-1 flex justify-center items-center whitespace-nowrap px-4 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white-100 border-b-2 border-b-blue-500'
                    : 'bg-gray-200 dark:border-slate-800 border-b-2 dark:bg-slate-800 '
                }`}
                onClick={() => changeActiveTab(tab.id)}
              >
                <span> {tab.title}</span>

                <button
                  className='flex items-center justify-center ml-2 text-gray-400 hover:text-gray-900 dark:hover:text-slate-500'
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTab(tab.id);
                  }}
                >
                  <span className='-mr-1 material-symbols-outlined'>close</span>
                </button>
              </div>
            ))}
          </div>
          <button
            className='min-w-[50px] h-[50px] bg-gray-200 text-blue-600 dark:bg-slate-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-slate-700 dark:text-blue-400'
            onClick={() => addNewTab()}
          >
            <span className='material-symbols-outlined'>add</span>
          </button>
        </div>
        <DarkModeSwitch />
      </div>

      {tabs.map((tab) => (
        <QueryPanel
          key={tab.id}
          tabId={tab.id}
          initialQueryName={tab.queryName}
          initialQuery={tab.query}
        />
      ))}
    </div>
  );
};

export default QueryTab;
