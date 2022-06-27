import { Routes, Route, Link } from 'react-router-dom';
import { ApiRequestsExample } from '../pages/ApiRequestsExample';
import { FormikExample } from '../pages/formik-example/FormikExample';
import { Home } from '../pages/Home';
import { ReduxCounter } from '../pages/ReduxCounter';
import { ReduxTodo } from '../pages/ReduxTodo';
import { RouterParams } from '../pages/RouterParams';

export function ContentSlot() {
  return <Routes>
    <Route
      path="/"
      element={<Home />}
      ></Route>
    <Route
      path="/api-requests-example"
      element={<ApiRequestsExample />}
      ></Route>
    <Route
      path="/formik-example"
      element={<FormikExample />}
      ></Route>
    <Route
      path="/router-params"
      element={<RouterParams />}
      ></Route>
    <Route
      path="/redux-counter"
      element={<ReduxCounter />}
      ></Route>
    <Route
      path="/redux-todo"
      element={<ReduxTodo />}
      ></Route>
  </Routes>
}
