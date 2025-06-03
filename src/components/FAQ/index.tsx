import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import Section from "../Section";
import AccordionPsico from "../AccordionPsico";
export default function FAQ() {
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
        <Heading color="var(--rosa-escuro)">Perguntas Frequentes</Heading>
        {/* <Flex flexDir={{ base: "column", md: "row" }} gap={4}></Flex> */}
        <Accordion
          allowMultiple
          width={{ base: "100%", md: "50%" }}
          border="none"
        >
          <AccordionItem>
            <h2>
              <AccordionButton
                _hover={{ backgroundColor: "none" }}
                borderBottom="1px solid"
                borderColor="var(--rosa-claro)"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="var(--rosa-escuro) !important"
                  fontWeight="600"
                  fontSize={{ base: 16, md: 20 }}
                >
                  A primeira consulta precisa ser gratuita?
                </Box>
                <AccordionPsico />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="var(--rosa-escuro) !important"
              fontSize={{ base: 14, md: 18 }}
            >
              Sim, para facilitar o primeiro contato entre psicólogo e paciente,
              e incentivar o acesso ao cuidado, a PubliCare propõe que a
              primeira sessão seja gratuita. Após isso, o atendimento segue com
              o valor normal da sessão informado por você.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _hover={{ backgroundColor: "none" }}
                borderBottom="1px solid"
                borderColor="var(--rosa-claro)"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="var(--rosa-escuro) !important"
                  fontWeight="600"
                  fontSize={{ base: 16, md: 20 }}
                >
                  Posso definir meu próprio preço nas sessões seguintes?
                </Box>
                <AccordionPsico />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="var(--rosa-escuro) !important"
              fontSize={{ base: 14, md: 18 }}
            >
              Sim! Você informa o valor da sua sessão já no cadastro.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _hover={{ backgroundColor: "none" }}
                borderBottom="1px solid"
                borderColor="var(--rosa-claro)"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="var(--rosa-escuro) !important"
                  fontWeight="600"
                  fontSize={{ base: 16, md: 20 }}
                >
                  Como é feito o pagamento das sessões?{" "}
                </Box>
                <AccordionPsico />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="var(--rosa-escuro) !important"
              fontSize={{ base: 14, md: 18 }}
            >
              Neste momento, o pagamento será combinado diretamente entre o
              paciente e o psicólogo, sem intermediação.{" "}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _hover={{ backgroundColor: "none" }}
                borderBottom="1px solid"
                borderColor="var(--rosa-claro)"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="var(--rosa-escuro) !important"
                  fontWeight="600"
                  fontSize={{ base: 16, md: 20 }}
                >
                  Preciso atender presencialmente?{" "}
                </Box>
                <AccordionPsico />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="var(--rosa-escuro) !important"
              fontSize={{ base: 14, md: 18 }}
            >
              Não. Você pode escolher se deseja atender online, presencial ou
              ambos.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _hover={{ backgroundColor: "none" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="var(--rosa-escuro) !important"
                  fontWeight="600"
                  fontSize={{ base: 16, md: 20 }}
                >
                  A PubliCare cobra alguma comissão?{" "}
                </Box>
                <AccordionPsico />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="var(--rosa-escuro) !important"
              fontSize={{ base: 14, md: 18 }}
            >
              No MVP atual, não há cobrança de comissão sobre os atendimentos.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Section>
  );
}
