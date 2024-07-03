import { RevealAnimation, RocketIllustration, Text } from "@/components";

export const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 items-center justify-center md:grid-cols-2">
      <div className="col-span-1 flex justify-center md:justify-center">
        <RocketIllustration className="m-8 size-40 md:size-60 lg:size-72" />
      </div>

      <div className="col-span-1 space-y-8">
        <RevealAnimation>
          <Text>
            Sou um desenvolvedor <strong>Front-end</strong> em constante
            evolução. Adoro desafios de programação e estou me especializando em{" "}
            <strong>React</strong> e <strong>TypeScript</strong>.
          </Text>
        </RevealAnimation>
        <RevealAnimation>
          <Text>
            Meu objetivo?{" "}
            <strong className="text-primary">**Dominar o mundo**</strong> (do
            desenvolvimento web, é claro{" "}
            <span className="text-foreground/100">😅</span>) e criar interfaces
            que deixem os usuários maravilhados.
          </Text>
        </RevealAnimation>
      </div>
    </section>
  );
};
