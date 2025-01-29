import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/HomePage/HomePage"
import { ProductPage } from "@pages/ProductPage/ProductPage"; // Exemple de page produit
import { ContactPage } from "@pages/ContactPage/ContactPage";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};
