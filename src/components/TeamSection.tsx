import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamSection = () => {
  const team = [
    {
      name: "Marcelo Nascimento",
      role: "CEO e Líder de Projetos",
      image: "/lovable-uploads/bacdf0c2-e8f8-4db8-9244-465ef56c9b4a.png",
      description: "Líder experiente com visão estratégica para desenvolvimento de soluções inovadoras."
    },
    {
      name: "João Paulo",
      role: "Vice-líder e Desenvolvedor",
      image: "/placeholder.svg",
      description: "Profissional com ampla experiência em desenvolvimento e gestão de equipes."
    },
    {
      name: "Luiz Guilherme",
      role: "Desenvolvedor",
      image: "/lovable-uploads/60f9c7e9-53fb-44b3-9253-6c1f14d6fda2.png",
      description: "Desenvolvedor talentoso especializado em criar soluções eficientes."
    },
    {
      name: "Alef Ryan",
      role: "Desenvolvedor",
      image: "/lovable-uploads/6e2f2c93-2dd3-4e66-8fd0-007bf232bd2a.png",
      description: "Desenvolvedor experiente com foco em qualidade e inovação, trazendo vasta experiência do mercado."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os principais colaboradores dedicados que fazem a diferença em cada projeto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-up">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};