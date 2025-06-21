'use client';
import 'bootswatch/dist/brite/bootstrap.min.css';
import styles from './page.module.css';
import Cards from './cards';
import ContactModal from './contact-modal';

export default function Home() {
    const sendData = () => {
        window.dataLayer.push({
            event: 'demo_request',
        });
    };

    return (
        <div className={styles.container}>
            <ContactModal />
            <Cards />
            <button className="btn btn-primary" onClick={sendData}>
                Request Demo
            </button>
        </div>
    );
}
