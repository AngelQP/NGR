/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({

// });

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-magenta': 'hsl(243, 51%, 18%)',

        'dark-blue' : 'hsl(249, 10%, 26%) ',
        'grayish-blue': 'hsl(246, 25%, 77%)'
      }
    },
  },
  plugins: [ 
    require('flowbite/plugin')
   ],
});

