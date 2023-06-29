import React from "react";
import { Link } from "gatsby";
import ExtLink from "../ExtLink";
import Image from "../Image";
import tweet_perception from "../../images/tweetPerception.png";
import suspect_events from "../../graphs/suspect_events.png";
const Results = () => {
  return (
    <div>
      {/* <h3>???Number of Disinformation Tweets received by each Robredo???</h3> */}
      {/* <h3 id="results-suspect-events">
        Suspect Events leading to Disinformation Incident
      </h3>
      <div>
        <Image image={suspect_events}></Image>
      </div>
      <h3>Tweet Perception</h3>
      <div>
        <Image image={tweet_perception}></Image>
      </div> */}

      <h2 id="results-hypothesis">Statistical Analysis</h2>
      <p>
        The code for this section can be found in{" "}
        <ExtLink
          to={
            "https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/apply_chi_square.py"
          }
        >
          apply_chi_square.py
        </ExtLink>
      </p>
      <p>
        <b>Research Question: </b>Is there a significant difference between
        tweet disinformation groups in terms of sentiment towards Leni Robredo?
      </p>
      <h3>Contingency Table</h3>
      <p>
        Note: this is the tabular form of{" "}
        <Link to="/exploration/#tweet-perception-123">this graph.</Link>
      </p>
      <table className="table table-compact mx-auto">
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
      <h3>Hypothesis Testing</h3>
      <p>
        We used chi-square test for independence to test whether or not to
        reject the null hypothesis.
      </p>
      <table className="table table-compact w-1/4 mx-auto z-0">
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
        <b>Reject the null hypothesis:</b> There is a significant difference
        between the disinformation groups in terms of sentiment towards Leni
        Robredo.
      </p>
    </div>
  );
};

export default Results;
