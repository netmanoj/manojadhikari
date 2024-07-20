// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          glowing: {
            '0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }, // White color
            '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }, // Brighter white color
            '100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }, // White color
          },
        },
        animation: {
          glowing: 'glowing 1.5s infinite alternate',
        },
      },
    },
    plugins: [],
  }
  