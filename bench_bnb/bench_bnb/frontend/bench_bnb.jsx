import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Route } from 'react-router-dom';
// import configureStore from './store/store';


// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <Route/>
//   </Provider>
// )

document.addEventListener("DOMContentLoaded", ()=> {
  // const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  // ReactDOM.render(<Root store={ store } />,root)
});
