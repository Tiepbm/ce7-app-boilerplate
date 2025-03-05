module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["react-native-worklets-core/plugin"],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@containers': './src/containers',
          '@utils': './src/utils',
          '@core': './src/core',
          '@repositories': './src/repositories',
          '@services': './src/services',
          '@contexts': './src/contexts',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'react-native-reanimated/plugin',
      // {
      //   globals: ['__scanCodes','__scanOCR','__labelImage'],
      // },
    ]
  ],
};
