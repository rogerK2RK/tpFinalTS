import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/HomePage/HomePage"
import { ProductPage } from "@pages/ProductPage/ProductPage"; // Exemple de page produit

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default App;
