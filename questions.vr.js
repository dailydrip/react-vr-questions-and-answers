import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

const questions = [
  {
    text: "JavaScript is a compiled language?",
    option1: "YES",
    option2: "NO",
    correct: "NO"
  },
  {
    text: "Elm is not a function language.",
    option1: "TRUE",
    option2: "FALSE",
    correct: "FALSE"
  },
  {
    text: "JavaScript comes from Java",
    option1: "YES",
    option2: "NO",
    correct: "NO"
  },
  {
    text: "React Native and React are totally different.",
    option1: "YES",
    option2: "NO",
    correct: "NO"
  },
  {
    text: "JavaScript is statically typed.",
    option1: "YES",
    option2: "NO",
    correct: "NO"
  }
];

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textColor: "orange", current: 0, msg: "" };
  }

  nextQuestion = answer => {
    const { current } = this.state;
    const correctAnswer = questions[current].correct;

    if (answer == correctAnswer) {
      if (current < questions.length) {
        console.log("current", current);
        if (current != questions.length - 1) {
          this.setState({ current: current + 1 });
        }
      }
      this.setState({ msg: "CORRECT ANSWER" });
      this.checkFinalGame();
    }
    if (answer != correctAnswer) {
      this.setState({ msg: "WRONG ANSWER" });
    }
  };

  checkFinalGame = () => {
    if (questions.length - 1 == this.state.current) {
      this.setState({ msg: "FINISHED" });
    }
  };

  render() {
    const { current, textColor, msg } = this.state;
    const question = questions[current].text;
    const option1 = questions[current].option1;
    const option2 = questions[current].option2;

    const showMessage = msg == ""
      ? <Text
          style={{
            height: 0,
            transform: [{ translate: [0, 0, 0] }]
          }}
        />
      : <Text
          style={{
            flexDirection: "column",
            backgroundColor: "gray",
            textAlign: "center",
            transform: [{ translate: [-0.5, 0.3, -2] }]
          }}
        >
          {msg}
        </Text>;
    return (
      <View>
        {showMessage}
        <View
          style={{
            flexDirection: "column",
            width: 1,
            backgroundColor: "gray",
            transform: [{ translate: [-0.5, 0, -2] }]
          }}
        >
          <Text
            style={{
              color: textColor,
              textAlign: "center"
            }}
          >
            {question}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: textColor,
                marginRight: 0.3
              }}
              onEnter={() => this.nextQuestion(option1)}
            >
              {option1}
            </Text>
            <Text
              style={{
                color: textColor
              }}
              onEnter={() => this.nextQuestion(option2)}
            >
              {option2}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
