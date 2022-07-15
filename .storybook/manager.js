import { addons } from '@storybook/addons';

import { create } from '@storybook/theming';

const MainTheme =  create({
  base: 'light',
  brandTitle: 'SIB',
  brandUrl: 'https://study-in-belarus.vercel.app/',
  brandImage: './logo.ico',
  brandTarget: '_self',
});

addons.setConfig({
    theme: MainTheme,
})