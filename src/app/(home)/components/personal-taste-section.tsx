import {
  BrainIllustration,
  GymIllustration,
  RevealAnimation,
  Text
} from "@/components";

export const PersonalTasteSection = () => {
  return (
    <section>
      <div className="my-4 grid grid-cols-1 md:my-72 md:grid-cols-2">
        <div className="col-span-1 flex w-full justify-center md:justify-end">
          <BrainIllustration className="m-8 size-40 md:size-60 lg:size-72" />
        </div>
        <div className="col-span-1 w-full space-y-8 leading-relaxed">
          <RevealAnimation>
            <Text>
              Quando não estou com a cara topada no vscode... provavelmente
              estou aprendendo sobre o <strong>cérebro humano</strong>, tenho
              gostado muito desse tema ultimamente.
            </Text>
          </RevealAnimation>
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 justify-center md:my-72 md:grid-cols-2">
        <div className="col-span-1 flex w-full justify-center md:justify-center">
          <GymIllustration className="m-8 size-40 md:size-60 lg:size-72" />
        </div>

        <div className="col-span-1 flex w-full items-center space-y-8 leading-relaxed">
          <RevealAnimation>
            <Text>
              Também gosto de ir à <strong>academia</strong>. E adivinha? No
              intervalo entre as séries eu fico matutando em como centralizar
              aquela{" "}
              <span className="text-nowrap text-primary">&lt;div /&gt;</span>.
            </Text>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
