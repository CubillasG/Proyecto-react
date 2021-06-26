import ArtistCard from './components/artist-card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='container'>
      <div className ='row'>
        <ArtistCard 
        img='https://pbs.twimg.com/profile_images/413792425224597504/kc0x2FpP.jpeg'
        titulo= 'Andres Calamaro.'
        />
        <ArtistCard
        img ='https://www.zonadeobras.com/wp-content/uploads/2021/02/cerati-cuadrada.jpg'
        titulo ='Gustavo Cerati.'
        />
        <ArtistCard
        img ='https://pbs.twimg.com/profile_images/2962117172/bc1c9b519e069397e2ebe062bd405e3c.jpeg'
        titulo ='Charly Garcia.'
        />
        <ArtistCard
        img ='https://pbs.twimg.com/profile_images/3286131982/de312deb4a28155b0ef2d4f509dae0fb.jpeg'
        titulo ='Indio Solari'
        />
       
     </div>
  </div>
  );
}

export default App;
