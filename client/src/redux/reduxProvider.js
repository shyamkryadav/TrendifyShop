// 'use client'
// import { Provider } from "react-redux";
// import store from "./store";

// const ReduxProvider = ({ children }) => {
//   return (
//     <Provider store={store}>
//         {children}
//     </Provider>
//   )
// }
// export default ReduxProvider;

'use client'
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
const ReduxProvider = ({children})=>{
    return (
        <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
              {children}
              </PersistGate>
            </Provider>
    )
}

export default ReduxProvider