import React from "react";
import BasePage from "../components/BasePage";
import DataFeatureCard from "../components/DataFeatureCard";
import { Link } from "gatsby";

const ExplorationPage = () => {
  return (
    <BasePage page={"Exploration"}>
      <div className="container mx-auto w-4/5 text-left">
        <article className="prose lg:prose-xl mx-auto text-justify prose-a:text-blue-600">
          <h1 className="text-center">Data Exploration</h1>
          <section className="text-center">
            The codes corresponding to the processes discussed on this page can
            be found on this link: <b>INSERT LINK</b>.<br></br>Make sure that
            you've read the <Link to="/collection">Data Collection</Link> page
            first.
          </section>

          <h2>Outline</h2>
          <ol>
            <li>
              <a href="#exploration-questions">Data Exploration Questions</a>
            </li>
            <li>
              <a href="#preprocessing">Preprocessing</a>
            </li>
            <ol>
              <li>
                <a href="#init-preprocessing">Initial Preprocessing</a>
              </li>
              <li>
                <a href="#nlp">Natural Language Processing</a>
              </li>
              <li>
                <a href="#time-series">Time Series Processing</a>
              </li>
            </ol>
            <li>
              <a href="#feature-analysis">Feature Analysis</a>
            </li>
            <li>
              <a href="#visualization">Visualization</a>
            </li>
          </ol>

          <section>
            <h2 id="exploration-questions">Data Exploration Questions</h2>
            <div>
              Please refer to{" "}
              <Link to={"/problem/#exploration-questions"}>
                Data Exploration Questions
              </Link>{" "}
              on the Problem page.
            </div>
          </section>
          <section>
            <h2 id="preprocessing">Preprocessing</h2>
            <div>
              <h3 id="init-preprocessing">Initial Preprocessing</h3>
              <p className="text-justify">
                The codes described in this section can be found in{" "}
                <b>INSERT LINK</b>. Thus, all the functions/methods stated in
                this section can be found on the linked page.
              </p>
              <ul>
                <li>
                  Handling missing values. (see the method{" "}
                  <code>handle_missing_values</code>)
                  <p className="text-justify">
                    For the columns with string data type, all the empty values
                    are set to the empty string. On the other hand, for the
                    columns with numerical data type, only the 'views' columns
                    have empty values. The empty values of the said column are
                    set to 0.
                  </p>
                </li>
                <li>
                  Handling outliers. (see the method{" "}
                  <code>handle_outliers</code>)
                  <p className="text-justify">
                    We decided to not remove any of the numerical outliers.
                  </p>
                </li>

                <li>
                  Ensuring formatting consistency. (see the method{" "}
                  <code>ensure_formatting_consistency</code>)
                  <p className="text-justify">
                    We ensured formatting consistency for all the
                    manually-labeled columns, which are: leni_sentiment,
                    marcos_sentiment, incident, account_type, tweet_type,
                    content_type, keywords, and alt-text. After lower-casing all
                    the above columns, we used regex pattern matching to verify
                    that all the following criteria are met:
                    <ul>
                      <li>
                        leni_sentiment - values should be one of the following
                        only: "negative", "neutral", "positive".
                      </li>
                      <li>
                        marcos_sentiment - values should be one of the following
                        only: "negative", "neutral", "positive".
                      </li>
                      <li>
                        account_type - values should be one of the following
                        only: "identified", "anonymous", "media".
                      </li>
                      <li>
                        tweet_type - values should be a combination of the
                        following values only: "text", "image", "video", "url",
                        "reply".
                      </li>
                      <li>
                        country - values should be one of the following values
                        only: "unspecified", "" (empty string), any alphabetic
                        string.
                      </li>
                      <li>
                        content_type - values should be a combination of the
                        following values only: "rational", "emotional",
                        "transactional".
                      </li>
                      <li>
                        keywords - any alphanumeric string that is not empty.
                      </li>
                      <li>
                        alt-text - values should be one of the following values
                        only: any string enclosed by curly braces {"{ }"}, ""
                        (empty string)
                      </li>
                    </ul>
                    Fortunately, all our labels passed all the above criteria.
                    <br></br>
                    Note that there is no need to ensure formatting consistency
                    for the date columns. This is because the scraper already
                    provided us with date values so it is guaranteed that the
                    date values are correct and properly formatted.
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
                    *Note: we converted the date columns (the{" "}
                    <code>joined</code> and <code>date_posted</code> columns) to
                    numerical values by converting them to unix time, so we can
                    perform normalization and standardization to their values as
                    well.<br></br>
                    We normalized each numerical column (all the features in the
                    table above) by translating and scaling their values to the
                    range [0, 1]. We also standardized each numerical column by
                    getting their z-scores. This whole process resulted to two
                    new columns for each numerical column.<br></br>
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
                    There are two types of categorical data columns. First are
                    those columns that can only have a single category (these
                    are leni_sentiment, marcos_sentiment, incident,
                    account_type, and country). Second are those columns that
                    can have multiple categories (tweet_type and content_type).
                    You may refer again to the{" "}
                    <i>Ensuring formatting consistency</i> bullet above for the
                    valid values of these columns.
                    <br></br>
                    We'll discuss first the single category columns. We
                    converted each single category columns to numerical data by
                    following the mapping below.
                    <ul>
                      <li>
                        leni_sentiment: (negative, neutral, positive) &rarr;
                        (-1, 0, 1)
                      </li>
                      <li>
                        marcos_sentiment: (negative, neutral, positive) &rarr;
                        (-1, 0, 1)
                      </li>
                      <li>
                        incident: (baguio, ladder, scandal, quarantine, others)
                        &rarr; (0, 1, 2, 3, 4)
                      </li>
                      <li>
                        account_type: (anonymous, identified, media) &rarr; (0,
                        1, 2)
                      </li>
                      <li>
                        country: ("" or unspecified, any alphabetic string)
                        &rarr; (0, 1)
                      </li>
                    </ul>
                    For the multiple category columns, it's a little bit more
                    complicated. First, we converted multiple-categorical-values
                    to single category only. You will understand what we mean by
                    this through the illustration below.
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
                    As you may have observed, the tweet_type_code is obtained by
                    getting the first letter of each category, sorting all of
                    the first-letter-characters, and concatenating them to form
                    a string (the tweet_type_code). The same process is done for
                    the content_type_code.<br></br>
                    The possible values of tweet_type_code is essentially all
                    the possible combinations of the set{" "}
                    {"{'I', 'R', 'T', 'U', 'V'}"} sorted lexicographically,
                    which is 32 combinations in total (thus, 32 possible
                    tweet_type_codes). What this means is that we can map each
                    32 codes/combinations to integers from 0 to 1. This mapping
                    is then used to convert a tweet_type_code to its
                    corresponding numerical value. <br></br>
                    The same process goes for the content_type_code (where the
                    content_type_codes are essentially all the possible
                    combinations of the set {"{'E', 'R', 'T'}"}).
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 id="nlp">Natural Language Processing</h3>
              <p className="text-justify">
                The codes described in this section can be found in{" "}
                <b>INSERT LINK</b>. Thus, all the functions/methods stated in
                this section can be found on the linked page.
              </p>
              <ul>
                <li>Tokenization and lower casing.</li>
                <li>Stop words removal.</li>
                <li>Stemming and lemmatization.</li>
              </ul>
              <p>
                The team wrote a code inspired by the natural language
                processing notebook provided by the professor. First, emojis and
                punctuation were replaced with their word counterparts. It can
                be noted that a number of emojis and punctuations have
                persisted. To address this, all the unaffected punctuation and
                emojis were manually translated. The resulting text was casted
                into lowercase.
              </p>
              <p>
                Next, the team installed the googletrans api version 3.1.0a0.
                This was the method used in translating the Tagalog tweets into
                English. The team does not have a focus on NLP anyway. However,
                there were empty tweets because such tweets were only images.
                The error was finally caught and empty tweets translated into
                empty strings.
              </p>
              <p>
                Lastly, the tweets were tokenized using the nltk. The rest of
                the professor's code has worked nicely. In the end, the
                disinformation dataframe was appended the stemmed and lemmatized
                version of the tweets. It should be noted that the tweets were
                translated poorly by the automatic translator.
              </p>
            </div>
            <div>
              <h3 id="time-series">Time Series Processing</h3>
              <p className="text-justify">
                The codes described in this section can be found in{" "}
                <b>INSERT LINK</b>. Thus, all the functions/methods stated in
                this section can be found on the linked page.
              </p>
              <ul>
                <li>
                  Interpolation
                  <p className="text-justify">
                    All our samples have no missing datetime values. Thus, there
                    is no need to interpolate any datetime values.
                  </p>
                </li>
                <li>
                  Binning (see the method <code>bin</code>)
                  <p className="text-justify">
                    The two datetime columns (joined and date_posted) are binned
                    daily, weekly, monthly, and yearly. Thus, this results in
                    eight new columns, which are:
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
                      <li>
                        For daily bins: 2016-1-1, 2016-1-2, ... (yyyy-mm-dd)
                      </li>
                    </ul>
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 id="feature-analysis">Feature Analysis</h2>
            The codes described in this section can be found in{" "}
            <b>INSERT LINK</b>. Thus, all the functions/methods stated in this
            section can be found on the linked page.
            <ul>
              <li>
                Feature selection (see the method <code>feature_selection</code>
                )
                <p className="text-justify">
                  Features with zero variance are removed. We used{" "}
                  <code>scikit-learn</code>'s <code>VarianceThreshold</code> to
                  perform this. Three columns were removed, which are{" "}
                  <code>views</code>, <code>views_std</code> (standardized
                  views), and <code>views_norm</code> (normalized views). This
                  is because all the values of the views column are actually
                  empty (and thus were set to 0 in the preprocessing stage.)
                </p>
              </li>
              <li>
                Dimensionality reduction{" "}
                <p className="text-justify">
                  We were not able to implement this.
                </p>
              </li>
              <li>
                Feature engineering (see the method{" "}
                <code>feature_engineering</code>)
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
                      <code>diff_joined_election = joined - election_date</code>{" "}
                      (in terms of days), where <code>election_date</code> is
                      May 9, 2022.
                    </li>
                    <li>
                      diff_date_posted_election. Likewise,{" "}
                      <code>
                        diff_date_posted_election = date_posted - election_date
                      </code>{" "}
                      (in terms of days), where <code>election_date</code> is
                      May 9, 2022.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2 id="visualization">Visualization</h2>
          </section>

          <h4>Distribution of Tweets by Topic</h4>
          <p>insert Bar graph of distribution of tweets per topic</p>
          <h4>Distribution of Topic Tweets per Day</h4>
          <p>Insert “kdeplot” for each topic</p>
          <p>
            It is also interesting to graph and observe when each topic was the
            most popular.
          </p>
          <p>
            The Baguio incident disinformation tweets were possibly triggered by
            the heckling at the Baguio Public Market on April 27, 2022. The
            Scandal incident disinformation tweets were possibly triggered by
            the surfacing of suspicious links on April 11, 2022. The Quarantine
            incident disinformation tweets were possibly triggered by Jay
            Sonza's Facebook post on December 31, 2021. The Hagdan incident
            disinformation tweets were possibly triggered by Jam Magno's tweet
            on April 6, 2022.
          </p>
          <h3>Names Entangled in the Mire of Disinformation</h3>
          <p>
            There are certain names referring to certain individuals appearing
            in the disinformation tweets.
          </p>
          <h4>Names in Baguio Incident</h4>
          <p>Insert Baguio word cloud</p>
          <h4>Names in the Scandal Incident</h4>
          <p>Insert Baguio word cloud</p>
          <h4>Names in the Quaratine Incident</h4>
          <p>Insert Baguio word cloud</p>
          <h4>Names in the Hagdan Incident</h4>
          <p>Insert Hagdan word cloud</p>
          <h4>Names in Other Incidents</h4>
          <p>Insert Other word cloud</p>
          <p>
            This was accomplished by tokenizing all the tweets and{" "}
            <u>manually</u> identifying the entity associated with each token.
            We have collected more than 9000 1-gram, 2-gram, and 3-gram tokens
            and labeled about a hundred as referring to relevant individuals and
            groups of people. In the case of ambiguous terms, we referred back
            to the original tweets to identify the entity the tweets were
            referring to. In total, we named 14 relevant entities.
          </p>
          <p>
            FUN FACT: Jillian's Baguio group was associated with Karens of the
            English speaking world.
          </p>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th className="text-center">Entity</th>
                  <th className="text-center">Names</th>
                  <th className="text-center">Number of References*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <i>Individuals</i>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Aika Robredo</th>
                  <td>
                    <p>"aika", "aika diri", "aika robredo", "aika rob", "she</p>
                    <p> admitted"</p>
                  </td>
                  <td>34</td>
                </tr>
                <tr>
                  <th>Bam Aquino</th>
                  <td>"bembem"</td>
                  <td>1**</td>
                </tr>
                <tr>
                  <th>Bongbong Marcos</th>
                  <td>"bbm", "bbmarcos", "marcos"</td>
                  <td>24</td>
                </tr>
                <tr>
                  <th>Gwyneth Chua</th>
                  <td>"chua"</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th>Jillian Robredo</th>
                  <td>
                    <p>
                      "jillian robredo", "mrs robredo daughter", "hindot ka",
                    </p>
                    <p>"jillian", "jillrobredo", "ma am jill"</p>
                  </td>
                  <td>60</td>
                </tr>
                <tr>
                  <th>Leni Robredo</th>
                  <td>
                    <p>
                      "kaylenipataytayo", "kaylenitalo", "leni lugaw", "leni
                    </p>
                    <p>
                      robredog", "lutangina", "mrs robredo", "president leni",
                    </p>
                    <p>
                      "president leni robredo", "vp leni", "vice president",
                    </p>
                    <p>"withdrawleni", "fake vp", "fake vp leni", "her mom",</p>
                    <p>"lenlen" "lenlenloser", "leni", "leni robredo",</p>
                    <p>
                      "lenirobredo", "lugaw", "lutang", "lutang ina", "lutang
                      ina mo",
                    </p>
                    <p>"mama", "mama nyo", "mom", "mother", "nanay kong</p>
                    <p>lutang", "nanay mong lumulutang", "philippines vice</p>
                    <p>
                      president", "robredog", "saint inamo", "sarili niyang ina"
                    </p>
                  </td>
                  <td>125</td>
                </tr>
                <tr>
                  <th>Tricia Robredo</th>
                  <td>
                    <p>
                      "tricia", "tricia robredo", "trisha", "trisha robredo",
                    </p>
                    <p>"vice president daughter", "she went straight"</p>
                  </td>
                  <td>120</td>
                </tr>
                <tr>
                  <th>Thinking Pinoy</th>
                  <td>"tp"</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <i>Groups</i>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>BBM Supporters</th>
                  <td>"bbm supporters", "maka bbm tao"</td>
                  <td>4</td>
                </tr>
                <tr>
                  <th>Communists</th>
                  <td>"cpp", "cpp ndf npa", "komunista"</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th>Filipino People</th>
                  <td>
                    <p>
                      "igorot sa baguio", "igorots", "igorot people", "igorot",
                    </p>
                    <p>
                      "igorot friends", "igorot native", "ilocano", "kpatid na
                    </p>
                    <p>
                      igorot", "locals", "taong bayan", "they are good", "they
                      are
                    </p>
                    <p>respectful", "they value education"</p>
                  </td>
                  <td>85</td>
                </tr>
                <tr>
                  <th>Jillian's Baguio Group</th>
                  <td>
                    <p>
                      "grupo ni jillian", "her camp", "her crowd", "team nila
                    </p>
                    <p>jillian"</p>
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <th>Kakampinks</th>
                  <td>
                    <p>
                      "baguio fenks", "dilapinks", "dilawkadiri", "dilawan",
                    </p>
                    <p>"fenks", "kakampikon", "kakampwet", "kakamdogs",</p>
                    <p>"kakampink", "kakampinks", "kampo ni leni", "pink",</p>
                    <p>"pinkilawan", "pinklawan", "supporters nyoga bastos"</p>
                  </td>
                  <td>25</td>
                </tr>
                <tr>
                  <th>Robredo Family</th>
                  <td>
                    <p>
                      "anak ni leni", "anak mo lenlen", "anak ni lenlen", "anak
                      ni
                    </p>
                    <p>robredo", "daughter of robredo", "daughter of saint",</p>
                    <p>"daughter of lugaw", "mga robredo", "mga anak niya",</p>
                    <p></p>"robredo", "tatlong anak"
                  </td>
                  <td>118</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            *The number of references to an entity is simply the sum of all the
            appearances of each gram in the tweets.
          </p>
          <p>
            **Due to being a single reference to Bam Aquino, "bembem A." and its
            associated tweet does not conclusively refer to Bam Aquino. However,
            there is a circulating cartoon of Leni and Bam Aquino in which they
            supposedly planned the scandal issue.
          </p>
          <p>
            Note: The team has accomplished stemming and lemmatization of the
            tweets. However, this method was discontinued due to poor
            translation of Google Translate and time considerations. Moreover,
            translating the tweets in English would lose some valuable data from
            the tweets. For instance, the invented names for Leni "lugaw" and
            "lutang" gave rise to adjective and verb derivatives. It is not
            preferable to translate "lugaw" as porridge and "lumulutang-lutang"
            as floating.
          </p>
          <DataFeatureCard
            title="The Disinfo Account"
            description="This card attempts to describe the “average” features of an account involved in posting disinformation."
            select_features={{
              "Account type": "Anonymous*",
              "Most Disinfo Tweets from a Single Account": 6,
              Location: "Unspecified**",
              "Median Following": 216,
              "Median Followers": 212,
            }}
          />
          <p>
            *Accounts are tagged anonymous when the accounts have pseudonyms,
            aliases, or names/bio which are untraceable. Accounts are tagged as
            identified when the accounts have real names, bio and/or which are
            verified. Accounts are tagged as media when the accounts are owned
            by news outlets/personalities or are pretending to be.
          </p>
          <p>
            **Location is tagged as unspecified when the twitter user did not
            share any location (NULL), shared a location that cannot be
            identified with any country, or shared an obscure location. The team
            labeled locations with countries when applicable.
          </p>
          <p>Insert Join Boxplot</p>
          <p>Insert Join Cumulative Line Graph</p>
          <p>
            All account creation dates were compared to the election date
            resulting in the number of months an account has joined after the
            election (the values are negative). This means that May 2022 is the
            “zero” of the x-axis and an account joining twitter in December 2021
            will be assigned the value -5. There are _ outliers, data points
            that are 3 standard deviations away from the mean. The data is
            skewed to the right.?? All accounts have joined before the
            elections.
          </p>
          <DataFeatureCard
            title="The Disinfo Tweet"
            description="This card attempts to describe the “average” features of an account involved in posting disinformation."
            select_features={{
              "Person with the Most References": "Leni Robredo*",
              "Tweets with Negative Sentiments to Leni Robredo":
                "25% of Disinfo Tweets",
              "Tweets with Negative Sentiments to Bongbong Marcos":
                "8% of Disinfo Tweets",
              "Median Tweet Length": "N words",
              "Median Tweet Engagement": "smth**",
              "Most Common Content Type": "Rational",
            }}
          />
          <p>
            *Person with the most references other than Aika, Tricia, or Jillian
            Robredo.
          </p>
          <p>
            **Engagement is the sum of likes, replies, and retweets of a tweet.
          </p>
          <p>Insert Date posted Boxplot</p>
          <p>
            Similar to the account creation dates, the day of the election takes
            the “zero” value of the x-axis. The tweets are assigned the number
            of days they are posted after the election (most values are
            negative.) There is one outlier, a tweet posted in 2017 which was
            included because there are few data. The data is skewed to the
            right?? Interestingly, some tweets were posted way past the election
            day.
          </p>
          <h2>Feature Trends</h2>
          <p>Insert sns.pairplot</p>
          <p>These are my comments about the pairplot.</p>
          <p>Insert correlation heatmap</p>
          <p>These are my comments about the correlations.</p>
        </article>
      </div>
    </BasePage>
  );
};

export default ExplorationPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Data Exploration</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
