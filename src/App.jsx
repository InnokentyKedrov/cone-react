import { useEffect, useRef, useState } from 'react';
import './App.css';

import Renderer from './components/Renderer/Renderer';
import { API_URI } from './utils/consts';

export default function App() {
  const heightRef = useRef();
  const radiusRef = useRef();
  const segmentsRef = useRef();
  const [data, setData] = useState();
  const [positions, setPositions] = useState([]);
  const [clear, setClear] = useState(false);

  const onSabmit = async (event) => {
    event.preventDefault();
    setData({
      height: heightRef.current.value,
      radius: radiusRef.current.value,
      segments: segmentsRef.current.value
    });
  };

  const clearScreen = () => {
    setClear(true);
  };

  useEffect(() => {
    fetch(`${API_URI}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        setPositions(data);
        setClear(false);
      });
  }, [data]);

  useEffect(() => {
    if (clear) {
      setPositions([]);
    }
  }, [clear]);

  return (
    <>
      <div className="form__container">
        <form className="form" onSubmit={onSabmit}>
          <div className="form__inputs">
            <fieldset className="form__fieldset">
              <legend className="form__legend">Cone height</legend>
              <input
                className="form__input"
                type="number"
                name="height"
                id="height"
                placeholder="Enter the height of the cone"
                ref={heightRef}
                required
              />
            </fieldset>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Cone radius</legend>
              <input
                className="form__input"
                type="number"
                name="radius"
                id="radius"
                placeholder="Enter the radius of the cone base"
                ref={radiusRef}
                required
              />
            </fieldset>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Number of segments</legend>
              <input
                className="form__input"
                type="number"
                name="segments"
                id="segments"
                placeholder="Enter the number of segments"
                ref={segmentsRef}
                required
              />
            </fieldset>
          </div>
          <input className="form__submit" type="submit" value="Submit" />
        </form>
        <button type="button" onClick={clearScreen}>
          Clear
        </button>
      </div>
      <Renderer props={positions} />
    </>
  );
}
