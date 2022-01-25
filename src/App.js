/** @jsxImportSource @emotion/react */
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';

function App() {
  const blueBox = css`
    background-color: rgba(0, 122, 255);
    display: flex;
    flex-direction: row;
    font-family: inherit;
    line-height: inherit;
    height: 600px;
    width: 75% justify-content;
    line-height: 24px;
    padding-top: 70px;
    tab-size: 4;
    text-size-adjust: 100%;
    align-items: top;
  `;

  const bluetextBox = css`
    margin-left: 12rem;
    text-align: left;
  `;
  const blueboxPic = css`
    width: 395px; /* width of container */
    height: 600px; /* height of container */
    object-fit: cover;
    object-position: 20% 10%; /* try 20px 10px */
    padding-left: 12rem;
    margin-bottom: 0;
  `;
  const blueboxHone = css`
    color: white;
    font-size: 3rem;
    line-height: 1;
  `;
  const blueboxHtwo = css`
    color: white;
    opacity: 0.5;
  `;
  const redBox = css`
    background-color: #f5375a;
    display: flex;
    flex-direction: row;
    font-family: inherit;
    line-height: inherit;
    height: 600px;
    width: 75% justify-content;
    line-height: 24px;
    padding-top: 0;
    tab-size: 4;
    text-size-adjust: 100%;
    padding-left: 12rem;
  `;
  const blackBox = css`
    background-color: black;
    display: flex;
    flex-direction: row;
    font-family: inherit;
    line-height: inherit;
    height: 600px;
    width: 75% justify-content;
    line-height: 24px;
    padding-top: 0;
    tab-size: 4;
    text-size-adjust: 100%;
    padding-left: 12rem;
    margin-bottom: 10;
  `;

  return (
    <div className="App">
      <section css={blueBox}>
        <div css={bluetextBox}>
          <a href="https://apps.apple.com/app/triage-2/id1585295768">
            <img src="https://triage.cc/hero.svg" alt="button"></img>
          </a>
          <h1 css={blueboxHone}>Triage is first aid for your inbox.</h1>
          <h2 css={blueboxHtwo}>
            Everything you loved about the original Triage is back – only
            better. <br /> Download Triage 2 on the App Store today.
          </h2>
          <a href="https://apps.apple.com/app/triage-2/id1585295768">
            <img src="https://triage.cc/download.svg" alt="Buy"></img>
          </a>
        </div>
        <div>
          <img
            css={blueboxPic}
            src="https://triage.cc/screenshots/hero.png"
            alt="Screen"
          />
        </div>
      </section>
      <section css={redBox}>
        <div>
          <img
            css={blueboxPic}
            src="https://triage.cc/screenshots/archive.png"
            alt="Screen"
          />
        </div>
        <h1 css={blueboxHone}>Drag left to archive</h1>
        <h2 css={blueboxHtwo}>
          Unread messages appear in a stack of cards, like this.
        </h2>
      </section>
      <section css={blackBox}>
        <h1 css={blueboxHone}>Drag right to keep</h1>
        <h2 css={blueboxHtwo}>Or create your own custom workflow.</h2>
        <div>
          <img
            css={blueboxPic}
            src="https://triage.cc/screenshots/keep.png"
            alt="Screen"
          />
        </div>
      </section>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  );
}

export default App;
