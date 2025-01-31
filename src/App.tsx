import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/HomePage/HomePage"
import { ProductPage } from "@pages/ProductPage/ProductPage";
import { ContactPage } from "@pages/ContactPage/ContactPage";
import { CategoryPage } from "@pages/CategoryPage/CategoryPage";
import { ProductDetailPage } from "@pages/ProductDetailPage/ProductDetailPage";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/tpFinalTS" element={<HomePage />} />
      <Route path="/tpFinalTS/products" element={<ProductPage />} />
      <Route path="/tpFinalTS/contact" element={<ContactPage />} />
      <Route path="/tpFinalTS/category/:categoryId" element={<CategoryPage />} />
      <Route path="/tpFinalTS/products/:id" element={<ProductDetailPage />} /> 
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};
