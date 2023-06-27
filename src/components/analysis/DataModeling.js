import React from "react";
import { Link } from "gatsby";
import ExtLink from "../ExtLink";

const DataModeling = () => {
  return (
    <div>
      <h3>Model Parameters</h3>
      <ul>
        <li>Model - Gradient-Boosted Trees (XGBoost)</li>
        <li>
          Features - vectorized tweet tokens, leni_sentiment, and
          marcos_sentiment
        </li>
        <li>Target - classifies if a tweet is disinfo or not</li>
        <li>
          Samples - 201 disinformation and 265 non-disinfo tweets regarding the
          Robredo sisters
        </li>
        <li>Evaluation - 5-fold cross-validation</li>
      </ul>
      <h3>Classification Report</h3>
      <p>
        The model performed well given <code>f1 scores</code> of about{" "}
        <code>0.8</code> and <code>accuracy</code> of <code>0.81</code>.
      </p>
      <div className="center">
        <table className="table table-compact w-1/2">
          <tr>
            <td></td>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1 Score</th>
            <th>Support</th>
          </tr>
          <tr>
            <th>Disinformation</th>
            <td>0.82</td>
            <td>0.85</td>
            <td>0.84</td>
            <td>53</td>
          </tr>
          <tr>
            <th>Non-disinformation</th>
            <td>0.81</td>
            <td>0.76</td>
            <td>0.78</td>
            <td>40.2</td>
          </tr>
          <tr>
            <th>Accuracy</th>
            <td></td>
            <td></td>
            <td>0.81</td>
            <td>93</td>
          </tr>
        </table>
      </div>
      <h3>Confusion Matrix</h3>
      <h3>Most Important Features</h3>
      <p>
        The following features (mostly) decide the disinformation classification
        problem.
      </p>
      <ol>
        <li>leni_sentiment</li>
        <li>igorot</li>
        <li>educate</li>
        <li>jillian</li>
        <li>fake</li>
        <li>facewithtearsofjoy (emoji)</li>
      </ol>
      <h3>Insights</h3>
      <p>
        A tweet's sentiment towards ex-VP Robredo is an important predictor if
        it is disinformation or not. In fact, a tweet with negative sentiment
        towards the ex-VP will most likely be a disinformation tweet (see graph
        above).
      </p>
    </div>
  );
};

export default DataModeling;
