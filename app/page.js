'use client'
import "bootswatch/dist/brite/bootstrap.min.css";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.h1}>Hello world!</h1> */}
      <button className="btn btn-primary" onClick={() => console.log('Clicked!')}>Request Demo</button>
    </div>
  );
}
