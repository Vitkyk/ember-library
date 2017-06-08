
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-equal', 'helper:es-equal', {
  integration: true
});

// Replace this with your real tests.
test('it returns true', function(assert) {

  this.render(hbs`{{es-equal '1' '1'}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('it returns false', function(assert) {

  this.render(hbs`{{es-equal '1' '2'}}`);

  assert.equal(this.$().text().trim(), 'false');
});
