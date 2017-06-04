import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application index');

test('visiting home page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
