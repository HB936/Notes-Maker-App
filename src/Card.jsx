import { useState } from "react";

function Card() {

    const [notes, setNotes] = useState([])

    const formHandler = (e) => {
        e.preventDefault();
        const title = e.target.Title.value;
        const detail = e.target.Detail.value;
        const timestamp = new Date().getTime();
        e.target.reset();

        const value = {
            title, detail, timestamp
        }

        const newArr = [...notes, value]

        setNotes(newArr)
    }

    const newDisp = notes.map(
        (n, i) => {
            return <div key={i} className="col-4 mt-2">
                <div className="card p-2 relative" style={{ height: 270 }}>
                    <h3>{n.title}</h3> <hr /> {n.detail}
                    <span className="position-absolute bottom-0 end-0 p-2 text-secondary">{timeAgo(n.timestamp)}</span>
                </div>
            </div>
        }
    )


    return (
        <>
            <div className="col-4">
                <form onSubmit={formHandler}>
                    <div className="mb-3">
                        <label className="form-label">
                            Title
                        </label>
                        <input
                            placeholder="Enter The Title"
                            required
                            type="text"
                            className="form-control"
                            name="Title"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Details
                        </label>
                        <textarea placeholder="Enter The Details" required name="Detail" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

            <div className="col-8">
                <div className="container">
                    <div className="row">
                        {newDisp}
                    </div>
                </div>
            </div>
        </>
    )
}

function timeAgo(timestamp) {

    const now = Date.now();

    const difference = Math.floor((now - timestamp) / 1000);

    if (difference < 0) {
        return "Invalid timestamp";
    }
    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    const parts = [];
    if (hours > 0) parts.push(`${hours}hrs`);
    if (minutes > 0 || hours > 0) parts.push(`${minutes}min`);
    parts.push(`${seconds}sec`);

    return parts.join(" ") + " ago";
}

export default Card