import React from "react";
import { Link } from "gatsby";
import ExtLink from "../ExtLink";

import DataFeatureCard from "../DataFeatureCard";
import Image from "../Image";

import topics_bar_graph from "../../graphs/exploration/tweets_per_incident.png";
import topics_kde from "../../graphs/exploration/dist_incident_tweets_across_time.png";
import joined_boxplot from "../../graphs/exploration/dist_acct_creation_wrt_election.png";
import posted_boxplot from "../../graphs/exploration/dist_tweet_post_wrt_election.png";
import leni_sentiment_pairplot from "../../graphs/exploration/pairplot_leni_sentiment.png";
import has_leni_ref_pairplot from "../../graphs/exploration/pairplot_has_leni_ref.png";
import feats_heatmap from "../../graphs/exploration/heatmap_num_feats.png";
import wordcloud_all from "../../graphs/exploration/wordcloud_all.png";
import wordcloud_baguio from "../../graphs/exploration/wordcloud_baguio.png";
import wordcloud_scandal from "../../graphs/exploration/wordcloud_scandal.png";
import wordcloud_quarantine from "../../graphs/exploration/wordcloud_quarantine.png";
import wordcloud_ladder from "../../graphs/exploration/wordcloud_ladder.png";
import wordcloud_others from "../../graphs/exploration/wordcloud_others.png";
import leni_marcos_sentiment from "../../graphs/exploration/sentiment_doublehisto.png";
import lxrscatter from "../../graphs/exploration/lxrscatter.png";

const Visualization = () => {
  return (
    <div>
      <p>
        In this section, the results of data exploration are presented through
        different graphs. All the plot creation logic can be found in{" "}
        <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/visualizer.py">
          visualizer.py
        </ExtLink>
        .
      </p>
      <section>
        <div>
          <h4>Distribution of Tweets by Disinformation Incident</h4>
          <Image image={topics_bar_graph} width="w-1/2" />
          <p>
            It is important to note that it has been several months after the
            2022 elections. Therefore, the collected data is prone to
            survivorship bias. Due to the fact-checking community, it is
            reasonable to think that disinformation tweets have already been
            deleted.
          </p>
          <p>
            The data collection methodology should also be put into
            consideration. The team looked up fact-checking articles involving
            the Robredo sisters and created the tweet keywords from the
            articles. This implies that the bar graph above, the distribution of
            tweets across disinformation incidents, may not reflect the actual
            extent of the allegations.
          </p>
        </div>
        <div>
          <h4>Distribution of Incident Tweets per Day</h4>
          <Image image={topics_kde} width="w-4/5" />
          <p>
            It is also interesting to graph and observe when each incident was
            the most popular. Interestingly, the highest peak of each
            disinformation incident is a hundredfold taller than the other
            peaks. This means that the tweets were categorized nicely. The
            presence of the other peaks also means that after the onset of a
            disinformation incident, twitter users tend to talk about it again
            at a later time. Kindly refer to the{" "}
            <Link to="/collection">Data Collection</Link> page for more
            information about the items in the graph legend.
          </p>
          <p>
            The Baguio incident disinformation tweets were possibly triggered by
            the heckling at the Baguio Public Market on April 27, 2022. The
            Scandal incident disinformation tweets were possibly triggered by
            the surfacing of suspicious links on April 11, 2022. The Quarantine
            incident disinformation tweets were possibly triggered by Jay
            Sonza's Facebook post on December 31, 2021. The Ladder incident
            disinformation tweets were possibly triggered by Jam Magno's tweet
            on April 6, 2022.
          </p>
        </div>
        <div>
          <h4>Distribution of Tweets Across Leni, Marcos Sentiment</h4>
          <Image image={leni_marcos_sentiment} />
          <p>
            The tweets may also be grouped according to their sentiment towards
            the presidentiables last 2022 elections. Interestingly, there are no
            positive sentiments for Leni Robredo, and there are no negative
            sentiments against Bongbong Marcos. This is reminiscent of a news
            during the campaign period.{" "}
            <ExtLink to="https://www.gmanetwork.com/news/topstories/nation/830939/tsek-ph-92-of-false-info-favorable-to-marcos-96-of-disinformation-vs-robredo-negative/story/">
              Tsek.ph: 92% of false info favorable to Marcos, 96% of
              disinformation vs Robredo negative
            </ExtLink>
          </p>
        </div>
      </section>
      <section>
        <h3>Names Entangled in the Mire of Disinformation</h3>
        <p>
          There are certain names referring to certain individuals appearing in
          the disinformation tweets.
        </p>
        <h4>Names in the Baguio Incident</h4>
        <Image image={wordcloud_baguio} />
        <h4>Names in the Scandal Incident</h4>
        <Image image={wordcloud_scandal} />
        <h4>Names in the Quaratine Incident</h4>
        <Image image={wordcloud_quarantine} />
        <h4>Names in the Ladder Incident</h4>
        <Image image={wordcloud_ladder} />
        <h4>Names in Other Incidents</h4>
        <Image image={wordcloud_others} />
        <p>
          The largest aliases appearing in the word clouds are the victims of
          the corresponding disinformation incident, which is the Robredo
          family. Naturally, the key words appearing are dependent on the
          situation and nature of the incidents. In the Baguio incident, most
          tweets are talking about the Kakampinks by calling them names such as
          "kakampwet", "pinklawan", and "kakampikon." In the Ladder incident,
          there were fewer names because Jam Magno's tweet is not easily
          believable and that the incident was short-lived.
        </p>
        <p>
          Now, it is interesting to observe the medium-size aliases. No
          disinformation incident fell short in mentioning Leni Robredo and her
          aliases such as "lutang" and "lugaw." This is a confirmation of the
          real world observation of the team, that Leni Robredo was being
          implicated in most disinformation incident which is most notable in
          the Quarantine incident.
        </p>
        <p>
          The word clouds were accomplished by tokenizing all the tweets and{" "}
          <u>manually</u> identifying the entity associated with each token. We
          have collected more than 9000 1-gram, 2-gram, and 3-gram tokens and
          labeled about a hundred as referring to relevant individuals and
          groups of people. In the case of ambiguous terms, we referred back to
          the original tweets to identify the entity the tweets were referring
          to. In total, we named 14 relevant entities. The code for
          vectorization and counting references can be found in{" "}
          <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/harold-analysis/misc_computations.py">
            misc_computations.py
          </ExtLink>
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
                <th className="text-center">Aliases</th>
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
                  <p>"jillian robredo", "mrs robredo daughter", "hindot ka",</p>
                  <p>"jillian", "jillrobredo", "ma am jill"</p>
                </td>
                <td>60</td>
              </tr>
              <tr>
                <th>Leni Robredo</th>
                <td>
                  <p>"kaylenipataytayo", "kaylenitalo", "leni lugaw", "leni</p>
                  <p>
                    robredog", "lutangina", "mrs robredo", "president leni",
                  </p>
                  <p>"president leni robredo", "vp leni", "vice president",</p>
                  <p>"withdrawleni", "fake vp", "fake vp leni", "her mom",</p>
                  <p>"lenlen" "lenlenloser", "leni", "leni robredo",</p>
                  <p>
                    "lenirobredo", "lugaw", "lutang", "lutang ina", "lutang ina
                    mo",
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
                  <p>"tricia", "tricia robredo", "trisha", "trisha robredo",</p>
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
                    igorot", "locals", "taong bayan", "they are good", "they are
                  </p>
                  <p>respectful", "they value education"</p>
                </td>
                <td>85</td>
              </tr>
              <tr>
                <th>Jillian's Baguio Group</th>
                <td>
                  <p>"grupo ni jillian", "her camp", "her crowd", "team nila</p>
                  <p>jillian"</p>
                </td>
                <td>6</td>
              </tr>
              <tr>
                <th>Kakampinks</th>
                <td>
                  <p>"baguio fenks", "dilapinks", "dilawkadiri", "dilawan",</p>
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
                    "anak ni leni", "anak mo lenlen", "anak ni lenlen", "anak ni
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
          tweets. However, this method was discontinued due to poor translation
          of Google Translate and time considerations. Moreover, translating the
          tweets in English would lose some valuable data from the tweets. For
          instance, the invented aliases for Leni "lugaw" and "lutang" gave rise
          to adjective and verb derivatives. It is not preferable to translate
          "lugaw" as porridge and "lumulutang-lutang" as floating.
        </p>
      </section>
      <section>
        <DataFeatureCard
          title="The Disinfo Account"
          description="This card attempts to describe the “average” features of an account involved in posting disinformation."
          selectFeatures={{
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
          verified. Accounts are tagged as media when the accounts are owned by
          news outlets/personalities or are pretending to be.
        </p>
        <p>
          **Location is tagged as unspecified when the twitter user shared a
          location that cannot be identified with any country, or shared an
          obscure location. The team labeled locations with countries when
          applicable. Twitter accounts who have not shared their location were
          ignored.
        </p>
        <div className="mx-auto">
          <h4>Distribution of Accounts That Joined Twitter per Month</h4>
          <div className="mx-auto">
            <iframe
              className="mx-auto"
              width="1000"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~rj42guez/23.embed"
            ></iframe>
          </div>
          <h4>
            Cumulative Distribution of Accounts That Joined Twitter per Month
          </h4>
          <iframe
            className="mx-auto"
            width="900"
            height="800"
            frameborder="0"
            scrolling="no"
            src="//plotly.com/~rj42guez/25.embed"
          ></iframe>{" "}
          <p>
            These line graphs were made using plotly. In the upper graph, it can
            be seen that the highest number of accounts joined is in April 2022.
            In the lower graph, the cumulative version is shown. There were a
            total of 158 disinformation accounts collected in this project.
          </p>
        </div>
        <Image image={joined_boxplot} />
        <p>
          All account creation dates were compared to the election date
          resulting in the number of months an account has joined after the
          election (the values are negative). This means that May 2022 is the
          “zero” of the x-axis and an account joining twitter in December 2021
          will be assigned the value -5. The data is skewed to the right. All
          accounts have joined before the elections.
        </p>
      </section>
      <section>
        <DataFeatureCard
          title="The Disinfo Tweet"
          description="This card attempts to describe the “average” features of an account involved in posting disinformation."
          selectFeatures={{
            "Person with the Most References": "Leni Robredo*",
            "Tweets with Negative Sentiments to Leni Robredo":
              "25% of Disinfo Tweets",
            "Tweets with Negative Sentiments to Bongbong Marcos":
              "8% of Disinfo Tweets",
            "Median Tweet Length": "22 words",
            "Median Tweet Engagement": 1,
            "Most Common Content Type": "Rational",
          }}
        />
        <p>
          *Person with the most references other than Aika, Tricia, or Jillian
          Robredo.
        </p>
        <p>
          **Engagement is the sum of likes, replies, retweets, and quotes of a
          tweet.
        </p>
        <Image image={posted_boxplot} />
        <p>
          Similar to the account creation dates, the day of the election takes
          the “zero” value of the x-axis. The tweets are assigned the number of
          days they are posted after the election (most values are negative.)
          There is one outlier, a tweet posted in 2017 which was included
          because there are few data. The data is skewed to the right.
          Interestingly, some tweets were posted way past the election day.
        </p>
        <div>
          <h4>Distribution of Tweets With Negative Leni-Sentiment per Day</h4>
          <div className="mx-auto">
            <iframe
              className="mx-auto"
              width="1000"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~rj42guez/9.embed"
            ></iframe>
          </div>
          <p>
            This line graph was made using plotly. It is interesting to note
            that the highest number of posted tweets with negative Leni
            sentiment occurred on the 27th of April 2022, also before the 2022
            Elections. Moreover, most of the tweets that are labeled 'Negative'
            in the leni_sentiment column were generated in 2022.
          </p>
        </div>
        <h4>Wordcloud of a Tweet</h4>
        <Image image={wordcloud_all} />
        <p>
          This word cloud shows the aliases being mentioned in all the
          disinformation tweets collected by the team. No surprise when the
          largest word is Robredo and the first names of the women. Although it
          is reasonable to expect the name "leni," the appearances of the
          invented caricature names for the former vice president is harrassment
          in our opinion.
        </p>
      </section>
      <section>
        <h2>Feature Trends</h2>
        <h3>Leni Sentiment Pairplot</h3>
        <Image image={leni_sentiment_pairplot} />
        <p>
          In most cases, the distribution of the data points do not imply some
          relationship about the variable Leni Sentiment. There is one pair that
          is noticeably correlated, the pair of followers and engagement. It is
          predictable that these two variables are correlated.
        </p>
        <p>
          In this pairplot, the single outlier of diff_date_posted_election was
          ignored because it obscured the visualization of the graph.
        </p>
        <h3>Leni Reference Pairplot</h3>
        <Image image={has_leni_ref_pairplot} />
        <p>
          Similar to the pairplot above, this graph also does not show
          significant relationship between the variable has_leni_ref and the
          select features.
        </p>
        <h3>Features Heatmap</h3>
        <Image image={feats_heatmap} />
        <p>
          Most features have negligible correlation. Variables related
          engagement and popularity of an account are significantly correlated.
          This is to be expected in social media environments. According to{" "}
          <ExtLink to="https://statistics.laerd.com/statistical-guides/pearson-correlation-coefficient-statistical-guide.php">
            Laerd Statistics
          </ExtLink>
          , the following are the thresholds for the interpretation of the
          absolute value of correlation r:
        </p>
        <ul>
          <li>.1 to .3 means "small" correlation</li>
          <li>.3 to .5 means "medium" correlation</li>
          <li>.5 to 1 means "large" correlation</li>
        </ul>
        <p>
          Following and followers have a large correlation. Based on the social
          media experience of the team, Filipinos mostly have a "follow me I'll
          follow you back" culture. Some of the "medium" correlations involved
          categorical variables which means the correlation has no meaning.
        </p>
        <p>
          Of significance are the variables Leni Sentiment and Marcos Sentiment,
          which refer to the sentiment of a tweet to Leni Robredo and Bongbong
          Marcos respectively. Unfortunately, the heatmap enables the team to
          not conclusively draw relations of other features to these variables.
        </p>
      </section>
    </div>
  );
};

export default Visualization;
