import React from "react";
import { Link } from "gatsby";
import ExtLink from "../ExtLink";

const Results = () => {
  return (
    <div>
      <h3>???Number of Disinformation Tweets received by each Robredo???</h3>
      <h3 id="results-suspect-events">
        Suspect Events leading to Disinformation Incident
      </h3>
      <p>pa-screenshot nga nung nasa canva</p>
      <h3>Tweet Perception</h3>
      <h3 id="results-hypothesis">Statistical Analysis</h3>
      <p>
        Is there a significant difference between tweet disinformation groups in
        terms of sentiment towards Leni Robredo?
      </p>
      <h4>Contingency Table</h4>
      <table className="table table-compact">
        <tr>
          <td></td>
          <th></th>
          <th>Leni Sentiment</th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <th>Negative</th>
          <th>Neutral</th>
          <th>Postive</th>
        </tr>
        <tr>
          <th>Disinformation</th>
          <td>92</td>
          <td>111</td>
          <td>0</td>
        </tr>
        <tr>
          <th>Non-disinformation</th>
          <td>0</td>
          <td>218</td>
          <td>47</td>
        </tr>
      </table>
      <h4>Hypothesis Testing</h4>
      <p>
        We used chi-square test for independence to test whether or not to
        reject the null hypothesis.
      </p>
      <table className="table table-compact w-1/4">
        <tr>
          <th>Chi Square Statistic</th>
          <td>169.01</td>
        </tr>
        <tr>
          <th>p-value</th>
          <td>2.00e-37</td>
        </tr>
      </table>
      <p>
        Reject the null hypothesis: There is a significant difference between
        the disinformation groups in terms of sentiment towards Leni Robredo.
      </p>
    </div>
  );
};

export default Results;
