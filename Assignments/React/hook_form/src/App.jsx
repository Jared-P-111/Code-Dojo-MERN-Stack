import './glassmorphic.css';
import './styles.css';
import Form from './Components/Form';

function App() {
  return (
    <div className="container mt-3">
      <div className="card border-dark mb-3">
        <div className="card-header">User Information</div>
        <div className="card-body">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
