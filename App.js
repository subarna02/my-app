import UnAuthorizationNavigator from "./navigator/UnAuthorizationNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import AuthorizationNavigator from "./navigator/AuthorizationNavigator";
import {store} from "./store";
export default function App() {
  const StackSelector = () => {
    const { loggedIn } = useSelector((state) => state.accounts);
    return loggedIn ? <AuthorizationNavigator /> : <UnAuthorizationNavigator />;
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackSelector />
      </NavigationContainer>
    </Provider>
  );
}
