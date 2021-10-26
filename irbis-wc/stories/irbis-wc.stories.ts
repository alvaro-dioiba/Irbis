import { html, TemplateResult } from 'lit';
import '../src/irbis-wc.js';

export default {
  title: 'IrbisWc',
  component: 'irbis-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <irbis-wc
    style="--irbis-wc-background-color: ${backgroundColor}"
    .title=${title}
  ></irbis-wc>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
