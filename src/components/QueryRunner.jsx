import { useState, memo } from 'react';
import useAppStore from '../store/useAppStore';
import copy from 'clipboard-copy';


const QueryRunner = memo(function QueryRunner({
  initialQueryName,
  query,
  handleQueryReset,
  onRunQuery,
  loading,
}) {
  const [queryName, setQueryName] = useState(initialQueryName);
  const saveNewQuery = useAppStore((state) => state.saveNewQuery);
  const toggleFullScreen = useAppStore((state) => state.toggleFullScreen);

  const handleCopyToClipboard = () => {
    if (query) {
      copy(query);
       alert("code copied!!")
    }
  };



  return (
    <div className='bg-gray-50 dark:bg-slate-800 flex justify-between items-center px-4 py-2 whitespace-nowrap'>
      <div className='flex gap-x-4'>
        <button
          disabled={!query || loading}
          onClick={onRunQuery}
          className='flex justify-center items-center text-sm dark:text-slate-100 dark:bg-green-700 dark:hover:bg-green-600 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg text-white px-5 py-2 gap-1 disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed'
        >
          <span className='-ml-2 material-symbols-outlined'>play_arrow</span>
          Run SQL »
        </button>
        {/* <button
          className="clear button"
        >
          Clear
        </button> */}
        <button
          onClick={() => handleQueryReset()}
          className='dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 text-sm flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'>
            settings_backup_restore
          </span>
        </button>

        <button
          onClick={toggleFullScreen}
          className='dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 text-sm flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'>aspect_ratio</span>
        </button>
      </div>
      <div className='flex gap-x-4'>
        <input
          className='dark:text-slate-300 dark:bg-slate-700 dark:border-slate-700 placeholder:text-sm focus:outline-blue-500 dark:focus:outline-none dark:focus:border-none px-4 py-2 rounded-lg w-[300px] border'
          placeholder='Enter query name...'
          spellCheck='false'
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
        />
        <button
          onClick={handleCopyToClipboard}
          className='dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 text-sm flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'>content_copy</span>
        </button>
        <button
          onClick={() => saveNewQuery(queryName, query)}
          className='dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 text-sm flex justify-center items-center border-solid border border-gray-500 rounded-lg px-5 py-2 gap-1 disables:opacity-80'
        >
          <span className='material-symbols-outlined'>save</span>
          Save Query
        </button>
      </div>
    </div>
  );
});
export default QueryRunner;
