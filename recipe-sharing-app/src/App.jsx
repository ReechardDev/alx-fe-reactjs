import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <BrowserRouter>
      <nav><Link to="/">Home</Link></nav>
      <Routes>
        <Route path="/" element={<div><h1>HOME</h1><SearchBar /><AddRecipeForm /><RecipeList /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
