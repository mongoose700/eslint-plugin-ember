# Use `module` instead of `moduleFor` (no-test-module-for)

`moduleForComponent`, `moduleFor`, `moduleForAcceptance`, etc have been deprecated and there are codemods to help migrate.

## Rule Details

Examples of **incorrect** code for this rule:

```js
moduleFor('Test Name');
```

Examples of **correct** code for this rule:

```js
module('Test Name', function(hooks) {

});
```

## Migration

A short guide for how each of the legacy APIs converts to the new APIs:

* `moduleFor`, `moduleForModel`

    ```ts
    import { module, test } from 'qunit';
    import { setupTest } from 'ember-qunit';

    module('...', function(hooks) {
      setupTest(hooks);
    });
    ```

* `moduleForComponent`

    ```ts
    import { module, test } from 'qunit';
    import { setupRenderingTest } from 'ember-qunit';

    module('...', function(hooks) {
      setupRenderingTest(hooks);
    });
    ```

* `moduleForAcceptance`

    ```ts
    import { module, test } from 'qunit';
    import { setupApplicationTest } from 'ember-qunit';

    module('...', function(hooks) {
      setupApplicationTest(hooks);
    });
    ```

## References

* [moduleFor* deprecation notice from ember-qunit 4.5.0](https://github.com/emberjs/ember-qunit/blob/master/CHANGELOG.md#rocket-enhancement-1)

* Codemod for automated upgrade of tests: [ember-qunit-codemod](https://github.com/ember-codemods/ember-qunit-codemod)
