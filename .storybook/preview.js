import { addParameters } from "@storybook/react"
import {INITIAL_VIEWPORT} from "@storybook/addon-viewport"

const CUSTOM_VIEWPORTS = {
  nestHubMax: {
    name: 'Nest Hub Max',
    style: {
      width: '1280px',
      height: '800px',
    }
  },
  iphoneXR: {
    name: 'iPhone XR',
    styles: {
      width: '414px',
      height: '896px',
    }
  },
  ...INITIAL_VIEWPORT,
}

addParameters({
  viewport: {
    viewports: CUSTOM_VIEWPORTS,
    defaultViewport: 'nestHubMax',
  },
  previewTabs: {
    'storybook/docs/panel': {
      title: 'Docs',
    },
    canvas: {
      title: 'Playground'
    }
  },
  options: {
    storySort: {
      order: [
        "Basic",
        "Components"
      ]
    }
  },
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twiitter',
    values: [
      {
        name: 'Light',
        value: 'white',
      },
      {
        name: 'Dark',
        value: 'black',
      },
    ],
  },
}