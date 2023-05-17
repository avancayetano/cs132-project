import React from "react";
import BasePage from "../components/BasePage";

const CollectionPage = () => {
  return (
    <BasePage page={"Collection"}>
      <article className="prose lg:prose-xl mx-auto prose-a:text-blue-600">
        <h1 className="text-center">Data Collection</h1>
        <section className="text-center">
          The codes corresponding to the processes discussed on this page can be
          found on this link: <b>INSERT LINK</b>
        </section>
        <section>
          <h2>Web Scraping</h2>
          <p className="text-justify">
            Using the web scraping tool called{" "}
            <a href="https://github.com/JustAnotherArchivist/snscrape">
              snscrape
            </a>
            , we were able to scrape 2,730 unique tweets. Unfortunately, due to
            time constraints, we were not able to review and classify each
            scraped tweet whether it is a misinformation tweet or not. However,
            from these tweets, we managed to identify 203 misinformation tweets
            from 158 accounts.
          </p>
          <h3>Data Columns</h3>
          <p>
            The following are all the columns automatically labeled by the
            scraper.
            <table>
              <tbody>
                <tr>
                  <td>tweet_id</td>
                  <td>tweet_url</td>
                  <td>keywords</td>
                  <td>account_handle</td>
                  <td>account_name</td>
                </tr>
                <tr>
                  <td>account_bio</td>
                  <td>account_bio_rendered</td>
                  <td>account_verified</td>
                  <td>joined</td>
                  <td>following</td>
                </tr>
                <tr>
                  <td>followers</td>
                  <td>location</td>
                  <td>tweet</td>
                  <td>tweet_rendered</td>
                  <td>date_posted</td>
                </tr>
                <tr>
                  <td>likes</td>
                  <td>replies</td>
                  <td>retweets</td>
                  <td>quote_tweets</td>
                  <td>views</td>
                </tr>
                <tr>
                  <td>source_url</td>
                  <td>source_label</td>
                  <td>links_url</td>
                  <td>media</td>
                  <td>retweeted_tweet_id</td>
                </tr>
                <tr>
                  <td>quoted_tweet_id</td>
                  <td>in_reply_to_tweet_id</td>
                  <td>in_reply_to_user_id</td>
                  <td>conversation_id</td>
                </tr>
              </tbody>
            </table>
          </p>
        </section>
        <section>
          <h2>Date Labeling</h2>
          <p className="text-justify">
            Aside from the columns above, we also added new columns which we
            manually labeled. These new columns are:
            <ul>
              <li>
                leni_sentiment - The tweet's sentiment (negative, neutral,
                positive) towards former Vice President Robredo.
              </li>
              <li>
                marcos_sentiment - The tweet's sentiment (negative, neutral,
                positive) towards President Marcos Jr.
              </li>
              <li>
                incident - The incident associated to the misinformation tweet.
                This is expounded below.
              </li>
              <li>
                account_type - Indicates whether the account is anonymous,
                identified, or media.
              </li>
              <li>
                tweet_type - Indicates whether the tweet is text, reply, image,
                URL, video, or a combination of these.
              </li>
              <li>
                content_type - Indicates whether the tweet is rational,
                emotional, transactional, or a combination of these.
              </li>
              <li>
                country - Indicates the country of the account based on their
                profile location field.
              </li>
              <li>
                has_leni_ref - Indicates whether the tweet contains references
                to former Vice President Robredo (labeled as 1 if there is a
                reference, 0 otherwise).
              </li>
              <li>
                alt-text - The alt-text of the tweet in case it contains videos,
                images, or articles.
              </li>
            </ul>
            We added these manually labeled columns to the columns produced by
            the scraper. In other words, the tweet data that we used in data
            exploration (and we'll be using in data analysis) have all the
            columns stated above (union of the columns produced by the scraper
            and the columns we manually labeled.)
          </p>
          <h3>The Allegations/Incidents</h3>
          <p>
            We have identified five disinformation topics/incidents about the
            Robredo sisters.
          </p>
          <ul>
            <li>Jillian Robredo heckling at Baguio (codename: Baguio)</li>
            <li>
              Alleged ladder incident involving Tricia Robredo (codename:
              Ladder)
            </li>
            <li>
              Alleged sensitive videos of Aika and Tricia Robredo (codename:
              Scandal)
            </li>
            <li>
              Alleged quarantine violation by the Robredo's (codename:
              Quarantine)
            </li>
            <li>
              Other topics include, "dissemination of anti-BBM flyers," and
              "accusing Leni of using public funds for her daughter's Harvard
              tuition." (codename: Others)
            </li>
          </ul>
          The codenames indicated above are used to label the{" "}
          <code>incident</code> column.
        </section>
      </article>
    </BasePage>
  );
};

export default CollectionPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Data Collection</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
