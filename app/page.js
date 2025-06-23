'use client';
import 'bootswatch/dist/brite/bootstrap.min.css';
import styles from './page.module.css';
import Cards from './cards';
import ContactModal from './contact-modal';
import { useState } from 'react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const sendData = () => {
        window.dataLayer.push({
            event: 'demo_request',
        });
    };

    const openContactModal = () => {
        openModal();
        sendData();
    };

    return (
        <div className={styles.container}>
            {isModalOpen ? <ContactModal onClose={closeModal} /> : null}
            <Cards />
            <button className="btn btn-primary" onClick={openContactModal}>
                Request Demo
            </button>
        </div>
    );
}
