import { Flex, Heading } from "@chakra-ui/react";
import Section from "../Section";
import PsychologistCard from "../PsychologistCard";
export default function Psychologists() {
  return (
    <Section color="#fff">
      <Flex
        flexDir={{ base: "column" }}
        overflow="hidden"
        height="auto"
        width="100%"
        align="center"
        px={{
          base: 6,
          md: `var(--margin-medium)`,
          lg: `var(--margin-large)`,
          xl: `var(--margin-xlarge)`,
        }}
        py={{ base: 36, md: 12 }}
        gap={{ base: 12, md: 12 }}
        justifyContent="center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Heading color="var(--rosa-escuro)">
          Agende uma consulta com um psicólogo da PubliCare
        </Heading>
        <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
          <PsychologistCard
            name="Carolina"
            specialty="Análise do comportamento"
            image="/Caroline.jpg"
            price={60}
            type="Online"
            crp="06/196648"
            link="https://wa.me/5511959942485?text=Ol%C3%A1!%20%F0%9F%98%8A%20Encontrei%20seu%20perfil%20no%20site%20da%20PubliCare%20e%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20%F0%9F%92%9C"
            description="Desenvolvimento e aplicação do projeto Cuidando de Quem Cuida, junto a instituição de ensino Anhanguera, promovendo  atendimento de voluntários em assistência a pessoas em situação de vulnerabilidade, onde os sujeitos apresentavam alto grau de estresse e desgaste físico e emocional. 
Atendimento online e individual via plataforma por chamada de vídeo e voluntariado com atendimento de pessoas em situação de vulnerabilidade social."
          />
          <PsychologistCard
            name="Marina Culton"
            specialty="Terapia de Aceitação e Compromisso (ACT)"
            image="/Marina.jpeg"
            price={100}
            type="Online"
            crp="08/43338"
            link="https://wa.me/5545991028099?text=Ol%C3%A1!%20%F0%9F%98%8A%20Encontrei%20seu%20perfil%20no%20site%20da%20PubliCare%20e%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20%F0%9F%92%9C"
            description="Me chamo Marina, sou psicóloga e atendo adultos que estão enfrentando desafios emocionais ligados ao trabalho — como ansiedade, estresse, esgotamento, burnout, depressão, crises de propósito ou dúvidas sobre a carreira.

Meu trabalho é guiado pela Terapia de Aceitação e Compromisso (ACT), uma abordagem que busca promover mais flexibilidade psicológica — ou seja, a capacidade de lidar com pensamentos e emoções difíceis sem se paralisar por eles, fazendo escolhas mais conscientes e alinhadas com o que realmente tem valor na sua vida.

Acredito na importância de um espaço seguro, acolhedor e sem julgamentos, onde você possa se escutar com mais gentileza, compreender suas dores e construir caminhos mais saudáveis e com mais sentido.

Sou especialista em Psicologia Organizacional, área que também me trouxe conhecimento aprofundado sobre as relações entre trabalho e saúde mental, incluindo temas como burnout, adoecimento emocional e crises de carreira.

Se você sente que precisa de um tempo pra se cuidar e se reconectar com quem você é, será um prazer caminhar ao seu lado nessa jornada.

✨ Para acompanhar mais sobre meu trabalho, reflexões e conteúdos sobre saúde emocional no trabalho, me siga nas redes sociais:
📲 https://linktr.ee/psi.marinacultom"
          />
          <PsychologistCard
            name="Vitória Sorato"
            specialty="Psicanálise"
            image="/Vitória.jpeg"
            price={100}
            type="Online"
            crp="06/208253"
            link="https://wa.me/5551992669137?text=Ol%C3%A1!%20%F0%9F%98%8A%20Encontrei%20seu%20perfil%20no%20site%20da%20PubliCare%20e%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20%F0%9F%92%9C"
            description={
              "Olá! Sou psicóloga, atuo com acolhimento, escuta ativa e comprometimento com o desenvolvimento emocional e mental de cada paciente. Tenho experiência no atendimento a adolescentes, adultos e idosos, sempre com foco em promover o autoconhecimento, enfrentamento de dificuldades e construção de uma vida com mais equilíbrio e bem-estar."
            }
          />
          <PsychologistCard
            name="Brayan Pereira"
            specialty="Terapia Cognitvo-Comportamental e Terapia dos Esquemas"
            image="/Brayan.png"
            price={190}
            type="Online"
            crp="07/38282"
            link="https://wa.me/5511979638863?text=Ol%C3%A1!%20%F0%9F%98%8A%20Encontrei%20seu%20perfil%20no%20site%20da%20PubliCare%20e%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20%F0%9F%92%9C"
            description="Sou psicólogo clínico e atendo online pessoas a partir dos 16 anos. Minha prática tem foco em questões conjugais, familiares, de sexualidade, raça e etnia. Tenho especial interesse em compreender as histórias que moldam quem somos e como nos relacionamos. Já atuei em projetos com imigrantes haitianos e com pessoas LGBs de vivência cristã, sempre buscando ampliar escuta e cuidado em saúde mental.Você me encontra no Instagram: @brayan_psico"
          />
        </Flex>
      </Flex>
    </Section>
  );
}
