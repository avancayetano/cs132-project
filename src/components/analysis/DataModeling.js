import React from "react";
import { Link } from "gatsby";
import ExtLink from "../ExtLink";

import confusion_disinfo from "../../graphs/confusion_disinfo.png";
import Image from "../Image";

const DataModeling = () => {
  return (
    <div>
      <p>
        We created a disinformation classifier that aims to classify if a given
        tweet is disinformation or not. The purpose of this is so that we can
        identify the recurring patterns or features occuring among
        disinformation tweets -- in other words, what are the best{" "}
        <b>predictors</b> that identify a disinformation tweet.
      </p>
      <p>
        The code for this section can be found in{" "}
        <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/disinfo_classifier.py">
          disinfo_classifier.py.
        </ExtLink>
      </p>
      <h3>Model Structure</h3>
      <p>
        We used gradient-boosted trees as our model, using the software library{" "}
        <ExtLink to="https://github.com/dmlc/xgboost">XGBoost</ExtLink>. The
        features are the{" "}
        <Link to="/exploration/#nlp">vectorized tweet tokens</Link>,
        leni_sentiment, and marcos_sentiment. The target variable is whether or
        not a tweet is disinformation or not.
      </p>
      <p>
        Here, we used 201 disinformation tweets and 265 non-disinformation
        tweets as our samples. We performed 5-fold cross-validation on this
        dataset.
      </p>
      <h3>Classification Report</h3>
      <p>
        The table below shows the classification report of our model -- averaged
        over the five rounds of cross-validation. The model performed well given{" "}
        <code>f1 scores</code> of about <code>0.8</code> and{" "}
        <code>accuracy</code> of <code>0.81</code>.
      </p>
      <div className="center">
        <table className="table table-compact w-1/2 mx-auto z-0">
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
      <div>
        The figure below shows the classification confusion matrix of our model
        -- averaged over the five rounds of cross-validation.
        <Image image={confusion_disinfo} width="w-1/2" />
      </div>
      <h3>Most Important Features</h3>
      <p>
        The following features (mostly) decide the disinformation classification
        problem. This is based on XGBoost's{" "}
        <ExtLink to="https://xgboost.readthedocs.io/en/stable/R-package/discoverYourData.html#feature-importance">
          feature importance.
        </ExtLink>{" "}
        In particular, it is based on <code>gain</code> or the improvement in
        accuracy when this feature is used to split a branch.
      </p>
      <ol>
        <li>
          <code>leni_sentiment</code> (label)
        </li>
        <li>igorot (token)</li>
        <li>educate (token)</li>
        <li>jillian (token)</li>
        <li>fake (token)</li>
        <li>facewithtearsofjoy (emoji token)</li>
      </ol>
      <h3>Insights</h3>
      <p>
        While the tweets' primary targets were the Robredo siblings, many of the
        tweets malign the image of ex-VP Robredo as well. In fact, as we've just
        seen, a tweet's sentiment towards ex-VP Robredo is an important
        predictor if it is disinformation or not. In fact, a tweet with negative
        sentiment towards the ex-VP will{" "}
        <Link to={"/exploration/#tweet-perception-123"}>
          most likely be a disinformation tweet
        </Link>
        . This is consistent with our findings in{" "}
        <Link to="/analysis/#results-hypothesis">Statistical Analysis.</Link>{" "}
      </p>
      <p>
        This observation, combining with the fact that most of disinformation
        tweets were posted just{" "}
        <Link to="/exploration/#cumulative-disinfo">
          one month before the election
        </Link>
        , tells us that the disinformation tweets targeting the Robredo siblings
        were somehow linked to the national elections. In particular, we
        conjecture that disinformation tweets targeting the Robredo sisters have
        the primary goal to ruin the image of the ex-VP just because she was
        running for presidency. In other words, the Robredo siblings were used
        by trolls and fake news peddlers to ruin the image of the ex-VP in order
        to reduce her chances of winning the national elections.
      </p>
    </div>
  );
};

export default DataModeling;
