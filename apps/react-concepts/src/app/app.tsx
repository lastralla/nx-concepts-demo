// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';

// import './app.module.scss';
import './App.scss';

import { MainNav } from './components/MainNav';
import { ContentSlot } from './components/ContentSlot';

export function App() {
  return (
    <>
      <header className="site-header">
        <h1>React Concepts</h1>
        <MainNav />
      </header>
      <main className="site-content">
        <div className="content">
          <ContentSlot />
        </div>
      </main>
    </>
  );
}

export default App;
