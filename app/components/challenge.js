import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

/**
 * @param {ChallengeModel} challenge
 */
export default class ChallengeComponent extends Component {
  @service flashMessages;

  @tracked isEditing = false;
  @tracked showDeleteConfirmation = false;

  get isNewOrEditing() {
    return this.args.challenge.isNew || this.isEditing;
  }

  get streakBarInnerStyle() {
    let completionFraction = Math.min(
      this.args.challenge.currentStreak / this.args.challenge.requiredStreakForCompletion,
      1
    );

    let completionPercentage = 100 * completionFraction;

    return `width: ${completionPercentage}%`;
  }

  @task
  *saveChallenge() {
    try {
      yield this.args.challenge.save();
      let message = 'Challenge saved ';

      if (this.args.challenge.status === 'queued') {
        message += 'and added to the queue';
      } else {
        message += 'and added to active challenges';
      }

      this.flashMessages.success(message);
      this.isEditing = false;
    } catch (error) {
      this.flashMessages.danger('There was an error saving the challenge. Please try again later.');
      console.log(error);
    }
  }

  @action
  cancel() {
    let challenge = this.args.challenge;

    if (challenge.isNew) {
      challenge.deleteRecord();
    } else {
      this.args.challenge.rollbackAttributes();
    }

    this.isEditing = false;
  }

  @task
  *destroyChallenge() {
    try {
      yield this.args.challenge.destroyRecord();
      this.flashMessages.success('Challenge deleted');
      this.showDeleteConfirmation = false;
    } catch (error) {
      this.flashMessages.danger('There was an error deleting the challenge. Please try again later.');
      console.log(error);
    }
  }
}
