import React from "react";
import BasePage from "../components/BasePage";
import ExtLink from "../components/ExtLink";

const ConclusionPage = () => {
  return (
    <BasePage page={"Conclusion"}>
      <article className="prose lg:prose-xl text-justify mx-auto">
        <h1 className="text-center">Conclusion</h1>
        <p>
          As presidential aspirant Leni Robredo campaigned for the 2022 National
          Elections, her daughters were not spared by disinformation attacks. In
          this study, we collected, explored, and analyzed tweets that bore
          false information against the Robredo sisters as the surge of
          disinformation swept across the social media platform.
        </p>
        <p id="conclusion-incidents">
          It was shown that there are certain events leading to the elections
          associated with the surge of disinformation. The earliest event
          happened after Dr. Tricia Robredo{" "}
          <ExtLink to="https://news.abs-cbn.com/news/12/31/21/robredo-slams-fake-news-that-daughter-tricia-skipped-quarantine">
            tested positive
          </ExtLink>{" "}
          for Covid-19 on December 24, 2021 when{" "}
          <ExtLink to="https://www.philstar.com/headlines/2022/01/06/2152150/fact-check-robredos-daughter-did-not-skip-quarantine">
            she
          </ExtLink>{" "}
          and{" "}
          <ExtLink to="https://www.rappler.com/nation/leni-robredo-quarantine-close-in-security-tests-positive-covid-19-december-2021/">
            her family
          </ExtLink>{" "}
          were afterwards accused of violating quarantine protocols. The issue
          was brought up again in in Twitter in March and April 2022. On April
          6, 2022, Jam Magno posted a{" "}
          <ExtLink to="https://twitter.com/ItsJamMagno/status/1511560623062020097">
            tweet
          </ExtLink>{" "}
          claiming Tricia Robredo has fallen of a ladder during house-to-house
          campaign with a{" "}
          <ExtLink to="https://pressone.ph/robredos-daughter-did-not-fall-from-a-ladder-in-house-to-house-campaign/">
            photoshopped picture.
          </ExtLink>{" "}
          On April 26, 2022, Jillian Robredo was accused of provoking a man by
          saying "let me educate you," but it has been reported that{" "}
          <ExtLink to="https://news.abs-cbn.com/spotlight/04/28/22/jillian-robredo-walang-sinabing-let-me-educate-you">
            no such words were uttered
          </ExtLink>{" "}
          and that Jillian's team were{" "}
          <ExtLink to="https://thebaguiochronicle.com/fact-check/fact-check-jillian-robredo-heckling-was-due-to-impoliteness-blocking-factsfirstph/">
            polite
          </ExtLink>{" "}
          at the Baguio Public Market. Lastly, some time in April, now-removed
          suspicious links implicating Aika and Tricia Robredo to{" "}
          <ExtLink to="https://www.tsek.ph/pekeng-malisyosong-videos-nina-aika-at-tricia-robredo-ikinakalat/">
            sex scandals
          </ExtLink>{" "}
          has surfaced. Aika was also accused of{" "}
          <ExtLink to="https://factsfirstph-partners.rappler.com/2301/false-aika-robredo-tweet-admitted-sex-video/">
            admitting
          </ExtLink>{" "}
          to the act through a tweet made in 2016 when she participated in{" "}
          <ExtLink to="https://www.gmanetwork.com/news/hashtag/content/583335/everywoman-netizens-rally-against-showing-sex-video-in-congress/story/">
            protecting
          </ExtLink>{" "}
          the identity of a woman in a sex video viewed by the Congress.
        </p>
        <p>
          While the disinformation tweets primarily targeted the Robredo
          sisters, tweets containing disinformation have an associated
          perspective toward some candidates of the election. Disinformation
          tweets and non-disinformation tweets are associated with different
          perceptions toward then presiential aspirant Leni Robredo and
          Ferdinand Marcos Jr. In particular, about half of the disinformation
          tweets have a negative sentiment toward Robredo and about a tenth have
          a positive sentiment toward Marcos. Robredo was never praised by the
          disinformation tweets while Marcos was never maligned.
        </p>
        <p>
          It has been found that disinformation tweets are associated with
          defamation of Robredo during the campaign period. The difference of
          perceptions of disinformation tweets and non-disinformation tweets
          toward Robredo is statistically significant.
        </p>
        <h2>Recommendations</h2>
        <p>
          This research aims to contribute to the body of knowledge regarding
          disinformation in the digital age. Information and insights revealed
          by this study may be used in studying disinformation in general.
          Disinformation tweets collected by the team may be used by other
          researchers when modeling disinformation.
        </p>
      </article>
    </BasePage>
  );
};

export default ConclusionPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Results</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
