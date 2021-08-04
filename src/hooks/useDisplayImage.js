import React, {useState, useRef} from 'react'

export default function App() {
    const [image, setImage] = useState("");
    const imageRef = useRef(null);
  
    function useDisplayImage() {
      const [result, setResult] = useState("");
  
      function uploader(e) {
        const imageFile = e.target.files[0];
  
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          setResult(e.target.result);
        });
  
        reader.readAsDataURL(imageFile);
      }
  
      return { result, uploader };
    }

}