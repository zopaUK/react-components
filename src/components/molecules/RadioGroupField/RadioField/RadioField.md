### Summary

`<RadioField />` is a convenient wrapper that renders the following HTML elements:

- `input`: input radio component, hidden for styling purposes
- `label`: text to show next to the radio field. It uses CSS `::after` and `::before` to draw the actual circles of the radio field
- `div`: container to wrap the two previous elements.

⚠️ &nbsp;Note that a `value` prop **must be provided** to automatically set:

- `htmlFor` prop on the `<InputLabel />` component.
- `id` prop on `<InputRadio />` so that is easily to query (.i.e automated tests).

### Examples

- Default

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="Option" value="option" name="option" />;
```

- Hide control

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="Option" value="hideControl" name="hideControl" hideControl />;
```

- Default with multiline label

```tsx
import { RadioField } from '@zopauk/react-components';

<div style={{ maxWidth: '200px' }}>
  <RadioField label="This is an example of a multiline label" value="option1" name="option1" />
</div>;
```

- With an error

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField hasError={true} label="Option" value="radio2" name="radio2" />;
```

- Checked

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="I'm checked by default" value="radio4" name="radio4" defaultChecked={true} />;
```

- Valid and checked

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField isValid={true} label="Option" value="radio3" name="radio3" defaultChecked={true} />;
```

- Disabled

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="I'm disabled and checked" value="radio5" name="radio5" disabled={true} />;
```

- Disabled, valid and checked

```tsx
import { RadioField } from '@zopauk/react-components';

<RadioField
  label="I'm disabled, valid and checked"
  isValid={true}
  value="radio6"
  name="radio6"
  disabled={true}
  defaultChecked={true}
/>;
```
