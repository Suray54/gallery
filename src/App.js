import React from "react";
import ImageGrid from "./gallery/imageFlex.component";
import Title from "./gallery/title.component";
import UploadForm from "./gallery/uploadform.component";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
function App() {
  AOS.init({
    duration: 600,
    delay: 1000,
  });
  return (
    <div className="App">
      <SimpleReactLightbox>
        <SRLWrapper>
          <Title />
          <UploadForm />
          <ImageGrid />
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
