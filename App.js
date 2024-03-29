import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import AuthScreen from './src/screens/AuthScreen';
import DeckScreen from './src/screens/DeckScreen';
import MapScreen from './src/screens/MapScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as JobProvider } from './src/context/JobContext';

const reviewFlow = createStackNavigator({
	Review: ReviewScreen,
	Settings: SettingsScreen
});

reviewFlow.navigationOptions = {
	title: 'Review',
	tabBarIcon: ({ tintColor }) => (
		<Icon name='favorite' color={tintColor} size={30} />
	)
};

const navigator = createSwitchNavigator({
	Splash: SplashScreen,
	Welcome: WelcomeScreen,
	Auth: AuthScreen,
	mainFlow: createBottomTabNavigator(
		{
			Map: MapScreen,
			Deck: DeckScreen,
			reviewFlow
		},
		{
			tabBarOptions: {
				labelStyle: { fontSize: 12 }
			}
		}
	)
});

const App = createAppContainer(navigator);

export default () => {
	return (
		<AuthProvider>
			<JobProvider>
				<App />
			</JobProvider>
		</AuthProvider>
	);
};
