import { useContext } from "react";
import { dataContext } from "../context/GlobalContext";

function Menu() {
  const {state: { data }, deleteItem} = useContext(dataContext);
  return (
    <div className="py-5">
     <div className="grid grid-cols-3 gap-4">
     {data
        ? data.map(({id,title, ingredinet, method, time}) => {
            return (
              <div key={id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h3>{ingredinet}</h3>
                    <h4>{method}</h4>
                    <h3>{time} minutes</h3>
                    <div className="card-actions">
                      <button onClick={()=>{
                        deleteItem(id)
                      }} className="btn btn-error">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "No Recipe Yet like this"}
     </div>
    </div>
  );
}

export default Menu;
