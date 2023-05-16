import React from "react";

const DataFeatureCard = (props) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        {/*<figure className="w-1/8 h-1/5 items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo-700x394.png"
            alt="Movie"
          />
  </figure>*/}
        <div className="card-body">
          <h2 className="card-title">FEATURING: {props.title}</h2>
          <p>{props.description}</p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  {props.select_features.keys.map((select_feature_key) => (
                    <th>{select_feature_key}</th>
                  ))}
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataFeatureCard;
