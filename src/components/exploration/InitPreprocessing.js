import React from "react";
import ExtLink from "../ExtLink";

const InitPreprocessing = () => {
  return (
    <div>
      <p className="text-justify">
        The codes described in this section can be found in{" "}
        <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/preprocessor.py">
          preprocessor.py
        </ExtLink>
        . Thus, all the functions/methods stated in this section can be found on
        the linked page.
      </p>
      <ul>
        <li>
          Handling missing values. (see the method{" "}
          <code>handle_missing_values</code>)
          <p className="text-justify">
            For the columns with string data type, all the empty values are set
            to the empty string. On the other hand, for the columns with
            numerical data type, only the 'views' columns have empty values. The
            empty values of the said column are set to 0.
          </p>
        </li>
        <li>
          Handling outliers. (see the method <code>handle_outliers</code>)
          <p className="text-justify">
            We decided to not remove any of the numerical outliers.
          </p>
        </li>

        <li>
          Ensuring formatting consistency. (see the method{" "}
          <code>ensure_formatting_consistency</code>)
          <p className="text-justify">
            We ensured formatting consistency for all the manually-labeled
            columns, which are: leni_sentiment, marcos_sentiment, incident,
            account_type, tweet_type, content_type, keywords, and alt-text.
            After lower-casing all the above columns, we used regex pattern
            matching to verify that all the following criteria are met:
            <ul>
              <li>
                leni_sentiment - values should be one of the following only:
                "negative", "neutral", "positive".
              </li>
              <li>
                marcos_sentiment - values should be one of the following only:
                "negative", "neutral", "positive".
              </li>
              <li>
                account_type - values should be one of the following only:
                "identified", "anonymous", "media".
              </li>
              <li>
                tweet_type - values should be a combination of the following
                values only: "text", "image", "video", "url", "reply".
              </li>
              <li>
                country - values should be one of the following values only:
                "unspecified", "" (empty string), any alphabetic string.
              </li>
              <li>
                content_type - values should be a combination of the following
                values only: "rational", "emotional", "transactional".
              </li>
              <li>keywords - any alphanumeric string that is not empty.</li>
              <li>
                alt-text - values should be one of the following values only:
                any string enclosed by curly braces {"{ }"}, "" (empty string)
              </li>
            </ul>
            Fortunately, all our labels passed all the above criteria.
            <br></br>
            Note that there is no need to ensure formatting consistency for the
            date columns. This is because the scraper already provided us with
            date values so it is guaranteed that the date values are correct and
            properly formatted.
          </p>
        </li>
        <li>
          Normalization and standardization. (see the method{" "}
          <code>norm_std_ize</code>)
          <p className="text-justify">
            For context, here are all the numerical features/columns:
            <table>
              <tbody>
                <tr>
                  <td>following</td>
                  <td>followers</td>
                  <td>likes</td>
                  <td>replies</td>
                  <td>retweets</td>
                </tr>
                <tr>
                  <td>quote_tweets</td>
                  <td>views</td>
                  <td>has_leni_ref</td>
                  <td>joined_unix*</td>
                  <td>date_posted_unix*</td>
                </tr>
              </tbody>
            </table>
            *Note: we converted the date columns (the <code>joined</code> and{" "}
            <code>date_posted</code> columns) to numerical values by converting
            them to unix time, so we can perform normalization and
            standardization to their values as well.<br></br>
            We normalized each numerical column (all the features in the table
            above) by translating and scaling their values to the range [0, 1].
            We also standardized each numerical column by getting their
            z-scores. This whole process resulted to two new columns for each
            numerical column.<br></br>
          </p>
        </li>
        <li>
          Categorical data encoding. (see the method{" "}
          <code>encode_cat_feats</code>)
          <p className="text-justify">
            For context, here are all the categorical data columns.
            <table>
              <tbody>
                <tr>
                  <td>leni_sentiment</td>
                  <td>marcos_sentiment</td>
                  <td>incident</td>
                  <td>account_type</td>
                </tr>
                <tr>
                  <td>country</td>
                  <td>tweet_type</td>
                  <td>content_type</td>
                </tr>
              </tbody>
            </table>
            There are two types of categorical data columns. First are those
            columns that can only have a single category (these are
            leni_sentiment, marcos_sentiment, incident, account_type, and
            country). Second are those columns that can have multiple categories
            (tweet_type and content_type). You may refer again to the{" "}
            <i>Ensuring formatting consistency</i> bullet above for the valid
            values of these columns.
            <br></br>
            We'll discuss first the single category columns. We converted each
            single category columns to numerical data by following the mapping
            below.
            <ul>
              <li>
                leni_sentiment: (negative, neutral, positive) &rarr; (-1, 0, 1)
              </li>
              <li>
                marcos_sentiment: (negative, neutral, positive) &rarr; (-1, 0,
                1)
              </li>
              <li>
                incident: (baguio, ladder, scandal, quarantine, others) &rarr;
                (0, 1, 2, 3, 4)
              </li>
              <li>
                account_type: (anonymous, identified, media) &rarr; (0, 1, 2)
              </li>
              <li>
                country: ("" or unspecified, any alphabetic string) &rarr; (0,
                1)
              </li>
            </ul>
            For the multiple category columns, it's a little bit more
            complicated. First, we converted multiple-categorical-values to
            single category only. You will understand what we mean by this
            through the illustration below.
            <table>
              <thead>
                <th>tweet_type</th>
                <th>tweet_type_code</th>
                <th>content_type</th>
                <th>content_type_code</th>
              </thead>
              <tr>
                <td>text</td>
                <td>T</td>
                <td>emotional</td>
                <td>E</td>
              </tr>
              <tr>
                <td>text, image, url</td>
                <td>ITU</td>
                <td>rational, emotional</td>
                <td>ER</td>
              </tr>
              <tr>
                <td>text, url, image, reply</td>
                <td>IRTU</td>
                <td>emotional, transactional</td>
                <td>ET</td>
              </tr>
              <tr>
                <td>reply, video, text, url, image</td>
                <td>IRTUV</td>
                <td>transactional, rational, emotional</td>
                <td>ERT</td>
              </tr>
              <tr>
                <td>text, url, image, reply, video</td>
                <td>IRTUV</td>
                <td>rational, emotional, transactional</td>
                <td>ERT</td>
              </tr>
            </table>
            As you may have observed, the tweet_type_code is obtained by getting
            the first letter of each category, sorting all of the
            first-letter-characters, and concatenating them to form a string
            (the tweet_type_code). The same process is done for the
            content_type_code.<br></br>
            The possible values of tweet_type_code is essentially all the
            possible combinations of the set {"{'I', 'R', 'T', 'U', 'V'}"}{" "}
            sorted lexicographically, which is 32 combinations in total (thus,
            32 possible tweet_type_codes). What this means is that we can map
            each 32 codes/combinations to integers from 0 to 31. This mapping is
            then used to convert a tweet_type_code to its corresponding
            numerical value. <br></br>
            The same process goes for the content_type_code (where the
            content_type_codes are essentially all the possible combinations of
            the set {"{'E', 'R', 'T'}"}).
          </p>
        </li>
      </ul>
    </div>
  );
};

export default InitPreprocessing;
