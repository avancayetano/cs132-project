import React from "react";

const OverviewAbout = () => {
  return (
    <>
      <div className="container mx-auto w-3/5">
        <article className="prose max-w-none prose-a:text-blue-600">
          <h1 className="text-center">About our study.</h1>
          <p className="text-justify">
            The recent 2022 Philippine Elections has been a dense mixture of
            information and conspiracies. Within the campaign period, defamation
            through disinformation (has often been done/is typically) against
            Leni Robredo, a strong contender for the presidency{" "}
            <a
              href="https://www.rappler.com/moveph/election-disinformation-efforts-target-robredo-image-boost-marcos-jr-tsek-ph-study/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Chua, 2022]
            </a>
            . Even the three children of Robredo were victims of disinformation
            up to the point of sexual harassment{" "}
            <a
              href="https://www.rappler.com/nation/elections/aika-robredo-seeks-nbi-assistance-fake-video-scandal-issue/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Bolledo, 2022]
            </a>
            . This study aims to detail, analyze, and interpret malicious tweets
            which declare disinformation about Jessica Marie "Aika" Robredo,
            Janine Patricia "Tricia" Robredo, and Jillian Therese Robredo.
          </p>
          <p className="text-justify">
            It is not a straightforward task to come up with a topic. We
            initially thought that choosing an election-related topic could be
            mundane, so we considered alternatives. Harold suggested subjects
            regarding the Covid Pandemic and China-US propaganda. Raphael
            pondered over topics about the economy and basketball. In the end,
            we settled for the allegations against the Robredo sisters because
            we think it is easier to gather tweets about it and fact-checking
            should require less research.
          </p>
        </article>
      </div>

      <div className="container mx-auto mb-12 w-3/4 text-center">
        <p className="my-6 text-2xl">
          Want to learn more? View our source codes.
        </p>
        <a
          href="https://github.com/avancayetano/cs132-project"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Website GitHub Repo
        </a>
      </div>
    </>
  );
};

export default OverviewAbout;
