import React from "react";
import ImageGrid from "./gallery/imageFlex.component";
import Title from "./gallery/title.component";
import UploadForm from "./gallery/uploadform.component";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
