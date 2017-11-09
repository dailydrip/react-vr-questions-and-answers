import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

const questions = [
  {
    text: "Question 1",
    option1: "YES",
    option2: "NO",
    correct: "NO"
  },
  {
    text: "Question 2",
    option1: "YES",
    option2: "NO",
    correct: "NO"
  },
  {
    text: "Question 3",
    option1: "YES",
    option2: "NO",
    correct: "YES"
  },
  {
    text: "Question 4",
    option1: "YES",
    option2: "NO",
    correct: "YES"
  },
  {
    text: "Question 5",
    option1: "YES",
    option2: "NO",
    correct: "YES"
  }
];

export default class MouseActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textColor: "orange", current: 0 };
  }

  render() {
    const { current, textColor } = this.state;
    const question = questions[current].text;
    const option1 = questions[current].option1;
    const option2 = questions[current].option2;
    console.log(question);
    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />
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
              onEnter={() => this.setState({ current: current + 1 })}
            >
              {option1}
            </Text>
            <Text
              style={{
                color: textColor
              }}
              onEnter={() => this.setState({ current: current + 1 })}
            >
              {option2}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("MouseActions", () => MouseActions);
