import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import DashboardPage from '@/pages/Dashboard';
import NewUserPage from '@/pages/NewUser';
import { RegistrationsProvider } from '@/context/registrations/registrationsProvider';

const Router = () => {
  return (
    <RegistrationsProvider>
      <div style={{ marginTop: 64 }}>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.dashboard}>
              <DashboardPage />
            </Route>
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
    </RegistrationsProvider>
  );
};

export default Router;
