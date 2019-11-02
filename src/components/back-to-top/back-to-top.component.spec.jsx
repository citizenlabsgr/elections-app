import { describe } from 'riteway';
import render from 'riteway/render-component';
import React from 'react';

import BackToTop from './back-to-top.component.jsx';

describe('Back to Top component', async assert => {
  const $ = render(<BackToTop />);
  assert({
    given: 'Nothing',
    should: 'Render a link back to the top.',
    actual: $('.back-to-top').parent()
    .html()
    .trim(),
    expected:
      `<div class="back-to-top row flex-column"><a href="#root" class="back-to-top__anchor col-3 align-self-end">Back to top</a></div>`
  });
});