import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import DashboardPage from '@/pages/Dashboard';
import NewUserPage from '@/pages/NewUser';
import { RegistrationsProvider } from '@/context/registrations/registrationsProvider';

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <BrowserRouter>
        <Switch>
          <RegistrationsProvider>
            <Route exact path={routes.dashboard} component={DashboardPage} />
          </RegistrationsProvider>
          <Route exact path={routes.newUser} component={NewUserPage} />
          <Route
            exact
            path={routes.history}
            component={() => <div>History</div>}
          />
          <Route exact path="*">
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
