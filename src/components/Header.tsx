import { Link } from "react-router-dom";
import logo from "@/assets/economica-logo.png";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="ECONOMICA - Empresa Júnior UNICAMP" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link to="/plano-de-negocios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Plano de Negócios
            </Link>
            <Link to="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
