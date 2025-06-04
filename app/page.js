'use client'
import "bootswatch/dist/brite/bootstrap.min.css";
import styles from "./page.module.css";

export default function Home() {

const sendData = () => {
  window.dataLayer.push({
    event: "demo_request"
  });
  console.log("pushed!")
}
  
  return (
    <div className={styles.container}>
      <button className="btn btn-primary" onClick={sendData}>Request Demo</button>
    </div>
  );
}
