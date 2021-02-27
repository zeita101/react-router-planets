import { Link } from "react-router-dom";

function Planets(props) {
  return (
    <div>
      <h1>Planet List</h1>

      <ul>
        {
          props.planets.map((item, i) => {
            return <Link key={i} to={"/planets/Details/" + item.id}>
              <li>
                {item.name}
              </li>
            </Link>
          })
        }
        <li>

        </li>
      </ul>


    </div >
  )
}

export default Planets;