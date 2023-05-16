import React from "react";

const DataFeatureCard = (props) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/5 h-1/5 items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo-700x394.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            FEATURING:
            <br /> {props.title}
          </h2>
          <p>{props.description}</p>
          <div className="overflow-x-auto">
            <table className="table w-4/5 mx-20">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                {Object.getOwnPropertyNames(props.select_features).map(
                  (select_feature) => (
                    <tr key={select_feature.name}>
                      <td>{select_feature}</td>
                      <td>{props.select_features[select_feature]}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DataFeatureCard;
