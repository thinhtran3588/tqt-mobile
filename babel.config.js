module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@test-utils': './__tests__/utils',
          '@lib': './src',
        },
      },
    ],
  ],
};
