import { PropsWithChildren } from "react";
// import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "@/store";

export const ReduxProvider = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};
