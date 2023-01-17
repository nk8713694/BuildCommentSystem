import React from 'react';
import Comments from './comments/Comments';
import '@fontsource/roboto';

const App = () => {
  return (
    <div>
      <h1>Comment Section Application</h1>
      <Comments currentUserId='1'></Comments>
    </div>
  );
};

export default App;
