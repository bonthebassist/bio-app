import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Title from './components/Title';
import HobbiesList from './components/HobbiesList';

function App() {
  const myHobbies = ["Painting (acrylic on canvas)", "Running", "Yoga", "Photography", "Brunch"]
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
      </header>
      <section>
        <AboutMe/>
      </section>
      <HobbiesList myHobbies={myHobbies}/>
    </div>
  );
}

export default App;
