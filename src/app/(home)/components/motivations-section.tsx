import {
  HeroIllustration,
  PeopleIllustration,
  RevealAnimation,
  Text
} from "@/components";

export const MotivationsSection = () => {
  return (
    <section>
      <div className="my-4 grid grid-cols-1 md:my-72 md:grid-cols-2">
        <div className="col-span-1 flex w-full justify-center md:justify-center">
          <HeroIllustration className="m-8 size-40 md:size-60 lg:size-72" />
        </div>

        <div className="col-span-1 w-full space-y-8 leading-relaxed">
          <RevealAnimation>
            <Text>
              Participar dessa comunidade é como receber um convite para a Liga
              da Justiça!
            </Text>
          </RevealAnimation>
          <RevealAnimation>
            <Text>
              Sempre acreditei que a programação nos dá super poderes, e estar
              cercado por outros{" "}
              <span className="text-primary">&quot;super-heróis&quot;</span>{" "}
              será uma oportunidade única.
            </Text>
          </RevealAnimation>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:my-72 md:grid-cols-2">
        <div className="col-span-1 flex w-full justify-center px-0 md:justify-end">
          <PeopleIllustration className="m-8 size-40 md:size-60 lg:size-72" />
        </div>

        <div className="col-span-1 w-full space-y-8 leading-relaxed">
          <RevealAnimation>
            <Text>
              Estou ansioso para colaborar,{" "}
              <span className="text-primary">aprender e compartilhar</span>{" "}
              experiências com outros apaixonados por tecnologia.
            </Text>
          </RevealAnimation>
          <RevealAnimation>
            <Text>
              Acredito que essa troca de conhecimento são essenciais para
              crescer e evoluir como desenvolvedor.
            </Text>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
