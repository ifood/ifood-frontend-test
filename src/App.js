import React from 'react';
import FeaturedPlaylists from './components/FeaturedPlaylists/FeaturedPlaylists';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="container">
      <div className="row">
        <aside className="col-3">
          <Filter />
        </aside>
        <div className="col-9">
          <FeaturedPlaylists />
        </div>
      </div>
    </div>
  );
}

export default App;
