import React from "react";
//import { openSansBold } from "./Themes/Fonts";
// import { Font } from "expo";

import AppNavigation from "src/navigation/AppNavigation";
import NavigationService from "src/navigation/NavigationService";

// let prefix = Expo.Linking.makeUrl("/");

class Application extends React.Component {
  async componentDidMount() {
    // await Font.loadAsync({
    //   "open-sans-bold": openSansBold
    // });

    // this.setState({ fontLoaded: true });

  }
  render() {
    return (
      <AppNavigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
export default Application;