import React from "react";
import ExtLink from "../ExtLink";

const FeatureAnalysis = () => {
  return (
    <div>
      The codes described in this section can be found in{" "}
      <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/feature_analysis.py">
        feature_analysis.py
      </ExtLink>
      . Thus, all the functions/methods stated in this section can be found on
      the linked page.
      <ul>
        <li>
          Feature selection (see the method <code>feature_selection</code>)
          <p className="text-justify">
            Features with zero variance are removed. We used{" "}
            <code>scikit-learn</code>'s <code>VarianceThreshold</code> to
            perform this. Three columns were removed, which are{" "}
            <code>views</code>, <code>views_std</code> (standardized views), and{" "}
            <code>views_norm</code> (normalized views). This is because all the
            values of the views column are actually empty (and thus were set to
            0 in the preprocessing stage.)
          </p>
        </li>
        <li>
          Dimensionality reduction{" "}
          <p className="text-justify">We were not able to implement this.</p>
        </li>
        <li>
          Feature engineering (see the method <code>feature_engineering</code>)
          <p className="justify-text">
            The following new features were generated.
            <ul>
              <li>
                followers_bin. This is the binned version of the{" "}
                <code>followers</code> column. The bins are{" "}
                {
                  "(-inf, 10], (10, 100], (100, 1000], (1000, 10000], (10000, inf)"
                }
                , which are labeled as 0, 1, 2, 3, 4, respectively.
              </li>
              <li>
                engagement. Based on the equation:{" "}
                <code>
                  engagement = likes + replies + retweets + quote_tweets
                </code>
                .
              </li>
              <li>
                engagement_bin. This is the binned version of the{" "}
                <code>engagement</code> column. The bins are{" "}
                {
                  "(-inf, 10], (10, 100], (100, 1000], (1000, 10000], (10000, inf)"
                }
                , which are labeled as 0, 1, 2, 3, 4, respectively.
              </li>
              <li>
                diff_joined_election. Based on the equation:{" "}
                <code>diff_joined_election = joined - election_date</code> (in
                terms of days), where <code>election_date</code> is May 9, 2022.
              </li>
              <li>
                diff_date_posted_election. Likewise,{" "}
                <code>
                  diff_date_posted_election = date_posted - election_date
                </code>{" "}
                (in terms of days), where <code>election_date</code> is May 9,
                2022.
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeatureAnalysis;
