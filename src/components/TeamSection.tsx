import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamSection = () => {
  const team = [
    {
      name: "João Silva",
      role: "Desenvolvedor Full Stack",
      image: "/placeholder.svg",
      description: "Especialista em desenvolvimento web com mais de 5 anos de experiência."
    },
    {
      name: "Maria Santos",
      role: "UI/UX Designer",
      image: "/placeholder.svg",
      description: "Designer criativa com foco em experiências digitais intuitivas."
    },
    {
      name: "Pedro Costa",
      role: "Gerente de Projetos",
      image: "/placeholder.svg",
      description: "Profissional certificado em gestão ágil de projetos."
    },
    {
      name: "Ana Oliveira",
      role: "Desenvolvedora Front-end",
      image: "/placeholder.svg",
      description: "Especialista em criar interfaces modernas e responsivas."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais dedicados que fazem a diferença em cada projeto
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