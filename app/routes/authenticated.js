import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticatedRoute extends Route {
  @service session;

  beforeModel(transition) {
    let authenticated = this.session.requireAuthentication(transition, 'login');

    if (authenticated && transition.targetName === 'authenticated.index') {
      this.transitionTo('authenticated.home');
    }
  }
}
