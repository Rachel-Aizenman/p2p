
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import InfoContainer from "./DepositInfoContainer";
import DepositReport from "./DepositReport";

@inject("UserStore")
@observer
class Deposit extends Component {
  render() {
    return (
      <div
        id="deposite-container"
        style={{ position: "relative", width: "100vw" }}
      >
        <InfoContainer />
        <div
          class="explanation"
          style={{
            width: "100vw",
            backgroundColor: "grey",
            position: "inline-block",
            padding: "15px"
          }}
        >
          The poem "Jabberwocky" in Lewis Carroll's Through the Looking Glass is
          perhaps the most famous example of gibberish. Lewis Carroll, whose
          real name was actually Charles Lutwidge Dodgson, was famed for his
          love of nonsensical language and inventing new words. Here is an
          extract from the poem:ddition to nonsense words, phrases and
          sentences, there is also a language called Gibberish. The language is
          similar to Pig Latin and is used by people who want to play games with
          a secret language. To speak the language, you break each word down
          into its syllables. Each syllable will usually have a vowel sound. You
          then add otha-g before each vowel sound. Some examples of Gibberish
          words (and their English translations) include:
        </div>
        <div
          id="bank-info"
          style={{
            backgroundColor: "grey",
            position: "inline-block",
            width: "200px",
            margin: "30px",
            textAlign: "left",
            padding: "15px"
          }}
        >
          Bank: Poalim
          {}
          <br />
          Branch: 198
          <br />
          Account Number: 123456
        </div>
        <DepositReport />
      </div>
    );
  }

}

export default Deposit;
