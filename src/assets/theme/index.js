const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#007d85',
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px 2px #ddd;
      }
    `,
  },
}

export default theme
