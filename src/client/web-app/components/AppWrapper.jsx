import React, { useState } from 'react';

function AppWrapper() {
  const [tab, setTab] = useState('metrics');

  return (
    <div>
      <div className="absolute top-0 bottom-16 p-4 w-full overflow-x-auto">
        <h1 className="text-lg font-bold mb-4">Welcome back, Thomas!</h1>
        {tab === 'metrics' && <div>Metrics</div>}
        {tab === 'workouts' && <div>Workouts</div>}
        {tab === 'settings' && <div>Settings</div>}
      </div>
      <div className="bg-gray-100 w-full h-16 fixed bottom-0">
        <ul className="flex items-center divide-x justify-center">
          <li
            onClick={() => setTab('metrics')}
            className={`cursor-pointer p-4 flex flex-col items-center ${tab !== 'metrics' &&
              'text-gray-400'}`}
          >
            <svg
              className="fill-current h-4 w-4 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="current"
            >
              <path d="M22.8 11.819l-1.667 1.66-6.781-6.762-2.992 2.993-5.922-5.835-1.41 1.418 7.336 7.242 3.001-3.002 5.351 5.358-1.716 1.708 6 1.221-1.2-6.001zm1.2 8.181v2h-24v-20h2v18h22z" />
            </svg>
            <span className="text-xs">Metrics</span>
          </li>
          <li
            onClick={() => setTab('workouts')}
            className={`cursor-pointer p-4 flex flex-col items-center ${tab !== 'workouts' &&
              'text-gray-400'}`}
          >
            <svg
              className="fill-current h-4 w-4 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="current"
            >
              <path d="M24 24h-24v-2h2v-14h-2v-2h24v2h-2v14h2v2zm-13-5h-2v4h2v-4zm4 0h-2v4h2v-4zm5-11h-16v14h3v-5h10v5h3v-14zm-6 7h-4v-5h4v5zm-5 0h-4v-5h4v5zm10 0h-4v-5h4v5zm-10-12v1c0 .551-.447 1-1 1-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1 .553 0 1 .449 1 1v1h6v-1c0-.551.447-1 1-1 .553 0 1 .449 1 1v3c0 .551-.447 1-1 1-.553 0-1-.449-1-1v-1h-6zm9.5 0v.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v.5h.5v1h-.5zm-13-1v-.5c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-.5h-.5v-1h.5z" />
            </svg>
            <span className="text-xs">Workouts</span>
          </li>
          <li
            onClick={() => setTab('settings')}
            className={`cursor-pointer p-4 flex flex-col items-center ${tab !== 'settings' &&
              'text-gray-400'}`}
          >
            <svg
              className="fill-current h-4 w-4 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="current"
            >
              <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
            </svg>
            <span className="text-xs">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppWrapper;
