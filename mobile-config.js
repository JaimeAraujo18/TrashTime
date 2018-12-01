// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'xg4ysafrtc8g.xy983c1bvirc',
  name: 'TrashTime',
  description: 'Disponibiliza os horários de coleta de lixo da cidade',
  author: 'Jaime Moura de Araújo',
  email: 'jaimearaujo018@gmail.com',
  website: 'https://github.com/JaimeAraujo18'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': './public/logo.png',
  'iphone_3x': './public/logo.png',
  // More screen sizes and platforms...
});

App.launchScreens({
  'iphone_2x': './public/logo.png',
  'iphone5': './public/logo.png',
  // More screen sizes and platforms...
});
App.configurePlugin('phonegap-plugin-push', {
  SENDER_ID: 776272285457
});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');