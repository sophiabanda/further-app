import './contact-modal.css';

export default function ContactModal() {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <h3>
                    Submit your information here in order to schedule your
                    fitting
                </h3>
                <form action="">
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input
                        type="datetime-local"
                        id="meeting-time"
                        name="meeting-time"
                        value="2018-06-12T19:30"
                        min="2018-06-07T00:00"
                        max="2018-06-14T00:00"
                    />
                    <label htmlFor="">Preferred Date & Time</label>
                </form>
            </div>
        </div>
    );
}
