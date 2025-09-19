module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
          '.layout.tsx'
        ],
        alias: {
          '@lynx-state': './src/_supports/_lynx-state/engine.tsx',
          '@/models': './src/models',
          '@/views': './src/views',
          '@/utilities': './src/utilities',
          '@/services': './src/services',
          '@/components': './src/components',
          '@/interfaces': './src/interfaces',
          '@/asset-icons': './src/assets/icons',
          '@/asset-svg': './src/assets/svgs',
          '@/asset-datas': './src/assets/mock-datas'
        }
      }
    ],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    // '@babel/plugin-transform-private-methods',
    'react-native-worklets/plugin'
  ]
}
