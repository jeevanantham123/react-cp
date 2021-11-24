import { SketchPicker } from "./Sketch";
import React, { useState, useEffect } from "react";

export default function App() {
  const [color, setcolor] = useState("#000");
  const [state, setState] = useState();
  useEffect(() => {
    setState({
      h: 150,
      s: 0.5,
      l: 0.2,
      a: 1,
    });
  }, []);
  const handleChangeComplete = (data) => {
    // console.log(data);
    if (data.hsl !== state) {
      setState(data.hsl);
    }

    setcolor(data.hsl);
  };
  return (
    <div>
      <SketchPicker
        color={color}
        onChange={handleChangeComplete}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}
