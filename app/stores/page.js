'use client'
import "bootswatch/dist/brite/bootstrap.min.css";
import '../cards.css'

export default function Stores() {
    return (
      <div className="stores-card-container">
        <div className="card bg-primary mb-1 card-card" style={{ maxWidth: "50vw"}}>
          <div className="card-header">Flagship Location</div>
          <div className="card-body">
            <h4 className="card-title">North Carolina</h4>
            <p className="card-text">
              1234 Main St. #475 <br/>
              Chapel Hill, NC 27588<br/>
              <a href="https://lumon-industries.com/"><span style={{ fontWeight: "bold"}}>Phone:</span> 555-876-0987</a>
            </p>
          </div>
        </div>
      </div>
      )
    }