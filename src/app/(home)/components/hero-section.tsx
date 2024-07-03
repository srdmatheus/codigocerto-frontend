import Image from "next/image";

import { Link, RevealAnimation, Text } from "@/components";

export const HeroSection = () => {
  return (
    <section className="grid min-h-dvh grid-cols-1 items-center justify-center md:grid-cols-2">
      <div className="flex grid-cols-1 items-center justify-center">
        <RevealAnimation>
          <Image
            src="https://github.com/srdmatheus.png"
            width={400}
            height={400}
            quality={100}
            priority
            className="rounded-xl"
            alt="Eu sorrindo segurando um meu cachorro filhote chamado Scott em um ambiente ao ar livre."
          />
        </RevealAnimation>
      </div>
      <div className="space-y-8 leading-relaxed">
        <RevealAnimation>
          <Text>
            Olá, me chamo{" "}
            <strong className="text-foreground">Matheus Ribeiro</strong>, tenho
            27 anos{" "}
            <span className="text-foreground/40">
              (mas com a energia de quem acabou de conhecer a <del>cocaína</del>{" "}
              cafeína)
            </span>{" "}
            e estou muito contente em te ver por aqui!
          </Text>
        </RevealAnimation>
        <RevealAnimation>
          <Text>
            Essa página foi criada com o intuito de me apresentar e explicar por
            que desejo fazer parte da comunidade{" "}
            <Link href="https://www.codigocertocoders.com.br">
              Código Certo
            </Link>
            .
          </Text>
        </RevealAnimation>
        <RevealAnimation>
          <Text>
            Dê uma <i>scrollada</i> para me conhecer ^^
          </Text>
        </RevealAnimation>
      </div>
    </section>
  );
};
