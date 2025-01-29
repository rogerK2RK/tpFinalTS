import { Header } from "@organisms/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Bienvenue sur MyShop</h1>
      </main>
    </div>
  );
};