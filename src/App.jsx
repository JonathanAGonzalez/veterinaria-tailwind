import Form from './components/Form';
import Header from './components/Header';
import ListPatients from './components/ListPatients';
function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:flex mt-12">
        <Form />
        <ListPatients />
      </div>
    </div>
  );
}

export default App;
