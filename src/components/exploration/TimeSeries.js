import React from "react";
import ExtLink from "../ExtLink";

const TimeSeries = () => {
  return (
    <div>
      <p className="text-justify">
        The codes described in this section can be found in{" "}
        <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/time_series.py">
          time_series.py
        </ExtLink>
        . Thus, all the functions/methods stated in this section can be found on
        the linked page.
      </p>
      <ul>
        <li>
          Interpolation
          <p className="text-justify">
            All our samples have no missing datetime values. Thus, there is no
            need to interpolate any datetime values.
          </p>
        </li>
        <li>
          Binning (see the method <code>bin</code>)
          <p className="text-justify">
            The two datetime columns (joined and date_posted) are binned daily,
            weekly, monthly, and yearly. Thus, this results in eight new
            columns, which are:
            <table>
              <tbody>
                <tr>
                  <td>joined_day</td>
                  <td>joined_week</td>
                  <td>joined_month</td>
                  <td>joined_year</td>
                </tr>
                <tr>
                  <td>date_posted_day</td>
                  <td>date_posted_week</td>
                  <td>date_posted_month</td>
                  <td>date_posted_year</td>
                </tr>
              </tbody>
            </table>
            Below are some of the values of each bin:
            <ul>
              <li>For yearly bins: 2016, 2017, ... (yyyy)</li>
              <li>For monthly bins: 2016-1, 2016-2, ... (yyyy-mm)</li>
              <li>For weekly bins: 2016-1, 2016-2, ... (yyyy-ww)</li>
              <li>For daily bins: 2016-1-1, 2016-1-2, ... (yyyy-mm-dd)</li>
            </ul>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TimeSeries;
