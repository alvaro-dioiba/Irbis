import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { IrbisWc } from '../src/IrbisWc.js';
import '../src/irbis-wc.js';

describe('IrbisWc', () => {
  let element: IrbisWc;
  beforeEach(async () => {
    element = await fixture(html`<irbis-wc></irbis-wc>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
