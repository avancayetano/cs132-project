import React from "react";
import ExtLink from "../ExtLink";

const NaturalLanguage = () => {
  return (
    <div>
      {" "}
      <p className="text-justify">
        The codes described in this section can be found in{" "}
        <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/blob/main/analysis/nlp.py">
          nlp.py
        </ExtLink>
        . Thus, all the functions/methods stated in this section can be found on
        the linked page.
      </p>
      <ul>
        <li>Tokenization and lower casing.</li>
        <li>Stop words removal.</li>
        <li>Stemming and lemmatization.</li>
      </ul>
      <p>
        The team wrote a code inspired by the natural language processing
        notebook provided by the professor. First, emojis and punctuation were
        replaced with their word counterparts. It can be noted that a number of
        emojis and punctuations have persisted. To address this, all the
        unaffected punctuation and emojis were manually translated. The
        resulting text was casted into lowercase.
      </p>
      <p>
        Next, the team installed the googletrans api version 3.1.0a0. This was
        the method used in translating the Tagalog tweets into English. The team
        does not have a focus on NLP anyway. However, there were empty tweets
        because such tweets were only images. The error was finally caught and
        empty tweets translated into empty strings.
      </p>
      <p>
        Lastly, the tweets were tokenized using the nltk. The rest of the
        professor's code has worked nicely. In the end, the disinformation
        dataframe was appended the stemmed and lemmatized versions of the
        tweets. It should be noted that the tweets were translated poorly by the
        automatic translator.
      </p>
      <p>
        But, actually, the group has performed some kind of natural language
        processing manually. The team has identified the names being mentioned
        in the disinformation tweets. More about this will be discuss at the
        latter part of this article below.
      </p>
    </div>
  );
};

export default NaturalLanguage;
