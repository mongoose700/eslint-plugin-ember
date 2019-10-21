'use strict';

const rule = require('../../../lib/rules/no-computed-properties-in-native-classes');
const RuleTester = require('eslint').RuleTester;

const { ERROR_MESSAGE } = rule;
debugger;
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-computed-properties-in-native-classes', rule, {
  valid: [
    `
      import { computed } from '@ember/object';
      import Component from '@ember/component';

      export default Ember.Component.extend({});
    `,
    `
      import { alias, or, and } from '@ember/object/computed';
      import Component from '@ember/component';

      export default Ember.Component.extend({});
    `,
    `
      import { tracked } from '@glimmer/tracking';
      import Component from '@ember/component';

      export default class MyComponent extends Component {}
    `,
  ],
  invalid: [
    {
      code: `
      import { computed } from '@ember/object';
      
      export default class MyComponent extends Component {
      
      }
      `,
      output: null,
      errors: [{ message: ERROR_MESSAGE }],
    },
    {
      code: `
      import { and, or, alias } from '@ember/object/computed';
      
      export default class MyComponent extends Component {
      
      }
      `,
      output: null,
      errors: [{ message: ERROR_MESSAGE }],
    },
  ],
});
