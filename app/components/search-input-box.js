import Ember from 'ember';

export default Ember.Component.extend({
  isFocus: false,
  searchValue: '',
  searchPlaceholder: 'Search...',

  searchListBox: Ember.computed('searchValue', function() {
    var searchValue = this.get('searchValue');

    if (searchValue.length === 0) {
      return [];
    }

    var items = this.get('items');

    items = items.filter(function (item) {
      return item.key.includes(searchValue);
    });

    if (items.length > 3) {
        return items.slice(0, 3);
    }

    if ((items.length === 1) && (items[0].key === searchValue)) {
      return [];
    }

    return items;
  }),

  isVisibleSearchListBox: Ember.computed('searchListBox', 'isFocus', function() {
    return (this.get('isFocus')) && (this.get('searchListBox').length !== 0);
  }),

  actions: {
    select(value) {
      this.set('searchValue', value);
    },
    search() {
      // var value = this.get('searchValue');
      this.set('searchValue', '');
    },
    toggleIsFocus() {
      setTimeout(() => {
        this.toggleProperty('isFocus');
      }, 500); //bad solution - will be rewritten to event
    },
  }
});
