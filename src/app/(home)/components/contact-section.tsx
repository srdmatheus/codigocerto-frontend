import { Link, RevealAnimation, Text } from "@/components";

export const ContactSection = () => {
  return (
    <section className="mx-auto max-w-[900px] space-y-8 py-20 md:py-40">
      <RevealAnimation>
        <Text>Uau, você chegou até aqui?!</Text>
      </RevealAnimation>
      <RevealAnimation>
        <Text>
          Sua atenção e interesse significam muito para mim. Se quiser
          acompanhar mais do meu trabalho ou entrar em contato, sinta-se à
          vontade para me adicionar no{" "}
          <Link href="https://linkedin.com/in/srdmatheus">LinkedIn</Link> e
          conferir meus projetos no{" "}
          <Link href="https://github.com/srdmatheus">GitHub</Link>.
        </Text>
      </RevealAnimation>
    </section>
  );
};
