'use client'

import styles from "./page.module.css";

export default function Home() {
  
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={() => console.log('Clicked!')}>Request Demo</button>
    </div>
  );
}
