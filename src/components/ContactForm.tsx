import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail deve ter no máximo 255 caracteres"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone deve ter no máximo 20 caracteres"),
});

interface ContactFormProps {
  niche: string;
}

export const ContactForm = ({ niche }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // TODO: Replace with actual API call
      console.log("Form submitted:", { ...validatedData, niche });
      
      toast({
        title: "Mensagem enviada!",
        description: "Nossa equipe entrará em contato em breve.",
      });

      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro ao enviar o formulário. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-card-hover sticky top-6">
      <div className="bg-accent/10 rounded-lg p-4 mb-6 border border-accent/20">
        <h3 className="text-xl font-bold text-foreground mb-2">
          🎯 Solicite seu Plano de Negócios!
        </h3>
        <p className="text-sm text-muted-foreground">
          Preencha o formulário abaixo e nossa equipe entrará em contato
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold">Nome Completo</Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-11"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold">Seu Melhor E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-semibold">Telefone/WhatsApp</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-11"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base shadow-md hover:shadow-lg transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Fale com um Consultor Especialista"}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground pt-2">
          ✓ Resposta em até 24h | ✓ Sem compromisso
        </p>
      </form>
    </div>
  );
};
