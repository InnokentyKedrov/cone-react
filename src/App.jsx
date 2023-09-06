import './App.css';

import Renderer from './components/Renderer/Renderer';

export default function App() {
  return (
    <>
      <form className="form">
        <div className="form__inputs">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Cone height</legend>
            <input
              className="form__input"
              type="number"
              name="height"
              id="height"
              placeholder="Enter the height of the cone"
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
            />
          </fieldset>
        </div>
        <input className="form__submit" type="submit" value="Submit" />
      </form>
      <Renderer />
    </>
  );
}
