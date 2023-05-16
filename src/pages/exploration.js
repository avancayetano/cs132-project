import React from "react";
import BasePage from "../components/BasePage";
import DataFeatureCard from "../components/DataFeatureCard";

const DataPage = () => {
  return (
    <BasePage page={"Data"}>
      <div className="container mx-auto w-4/5 text-left">
        <article className="prose lg:prose-xl mx-auto text-justify">
          <h1 className="text-center">Data Exploration</h1>
          <h2>Introduction</h2>
          <p>
            We are able to scrape a total of x,xxx tweets, at least 205 of which
            are disinformation from xxx accounts. Collection of data for this
            project was both done manually and by a scraper. [scraper link]
            Keywords used in searching and scraping came from fact-checking
            articles defending the Robredo sisters which were first identified
            by the team.
          </p>
          <h2>The Allegations</h2>
          <p>
            We have identified five disinformation topics about the Robredo
            sisters.
          </p>
          <ul>
            <li>Jillian Robredo heckling at Baguio (codename: Baguio)</li>
            <li>
              Alleged Sensitive Videos of Aika and Tricia Robredo (codename:
              Scandal)
            </li>
            <li>
              Alleged Quarantine Violation by the Robredo’s (codename:
              Quarantine)
            </li>
            <li>
              Alleged Ladder Incident Involving Tricia Robredo (codename:
              Hagdan)
            </li>
            <li>
              Other topics include, “dissemination of anti-BBM flyers,” and
              “accusing Leni of using public funds for her daughter’s Harvard
              tuition.” (codename: Other)”
            </li>
          </ul>
          <h4>Distribution of Tweets by Topic</h4>
          <p>insert Bar graph of distribution of tweets per topic</p>
          <h4>Distribution of Topic Tweets per Day</h4>
          <p>Insert “kdeplot” for each topic</p>
          <p>
            It is also interesting to graph and observe when each topic was the
            most popular.
          </p>
          <p>
            It should be noted that news articles surrounding topic 1 were
            published on the following dates: Topic 2, 3…”
          </p>
          <h3>Names Entangled to the Disinformation Mire</h3>
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
            insert a table with the format “Entity: Names: Total Number of
            mentions”
          </p>
          <DataFeatureCard
            title="The Disinfo Account"
            description="This card attempts to describe the “average” features of an account involved in posting disinformation."
            select_features={{ mean: 5, median: 8, mode: 9 }}
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
            share any location, shared a location that cannot be identified with
            any country, or shared an obscure location. The team labeled
            locations with countries when applicable.
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
          <DataFeatureCard title="The Disinfo Tweet" />
          <p>
            *Person with the most references other than Aika, Tricia, or Jillian
            Robredo.
          </p>
          <p>
            **Engagement is the sum of likes, replies, and retweets of a tweet.
          </p>
          <p>***The most common content type is rational.</p>
          <p>Insert Date posted Boxplot</p>
          <p>
            Similar to the account creation dates, the day of the election takes
            the “zero” value of the x-axis. The tweets are assigned the number
            of days they are posted after the election (most values are
            negative.) There is one outlier, a tweet posted in 2017. The data is
            skewed to the right?? Interestingly, some tweets were posted way
            past the election day.
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

export default DataPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Data</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
