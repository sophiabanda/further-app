import './contact-modal.css';

export default function ContactModal() {
    function availableScheduleDates(date, days) {
        const todaysDate = new Date(date);
        todaysDate.setDate(date.getDate() + days);
        return todaysDate;
    }
    const currentDate = new Date();
    const weeksInDays = 28;

    const availableTimes = availableScheduleDates(currentDate, weeksInDays);

    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="button-div">
                    <button id="modal-button" className="btn btn-secondary">
                        X
                    </button>
                </div>
                <h3>
                    Add your details here and you will receive an appointment
                    within 48 hours.
                </h3>
                <form action="">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    ></input>
                    <input
                        type="datetime-local"
                        id="meeting-time"
                        name="meeting-time"
                        min={currentDate}
                        max={availableTimes.toDateString()}
                    />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
