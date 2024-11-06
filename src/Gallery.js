import React from 'react';
import Profile from './Profile';

function Gallery() {
  return (
    <div className="p-3 mb-3 border rounded bg-light">
        <section>
            <h4>Cientistas Extraordinários</h4>
            <Profile />
            <Profile />
            <Profile />
        </section>
    </div>
  );
}

export default Gallery;