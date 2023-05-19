import React from "react";

import { Twitter } from "react-feather";

const DataFeatureCard = (props) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body text-justify">
          <Twitter></Twitter>
          <h2 className="card-title">
            FEATURING:
            <br /> {props.title}
          </h2>
          <p>{props.description}</p>
          <div className="overflow-x-auto">
            <table className="table w-4/5">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                {Object.getOwnPropertyNames(props.selectFeatures).map(
                  (selectFeature) => (
                    <tr key={selectFeature.name}>
                      <td>{selectFeature}</td>
                      <td>{props.selectFeatures[selectFeature]}</td>
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
