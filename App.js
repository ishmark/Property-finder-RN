'use strict';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyView from './PropertyView';
import { StackNavigator, } from 'react-navigation';


const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Property: { screen: PropertyView },
});
export default App;
