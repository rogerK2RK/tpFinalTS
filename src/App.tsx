import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/HomePage/HomePage"
import { ProductPage } from "@pages/ProductPage/ProductPage";
import { ContactPage } from "@pages/ContactPage/ContactPage";
import { CategoryPage } from "@pages/CategoryPage/CategoryPage";
import { ProductDetailPage } from "@pages/ProductDetailPage/ProductDetailPage";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} /> 
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};
