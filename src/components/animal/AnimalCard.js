import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


//Ch 5 Updated AnimalCard

// export const AnimalCard = ({ animal, customer, location }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <Link to={`/animals/detail/${animal.id}`}>
//             { animal.name }
//           </Link>
//         <p className="breed">Breed: {animal.breed}</p>
//         <p className="location__address">Location: {location.name}</p>
//         <p className="owner">Customer: {customer.name}</p>
//     </section>
// )

//Ch11 updated AnimalCard
export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
          <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)

