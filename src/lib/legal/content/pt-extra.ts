import type { LegalDocument } from "../types";

export const extraLegalDocuments: LegalDocument[] = [
  {
    slug: "kyc",
    updated: "2026-09-21",
    title: "Política de KYC e verificação",
    summary:
      "Todos os clientes devem concluir e pagar a verificação de identidade e da empresa antes de lançar testes ou ativar um plano pago.",
    meta_description:
      "Política KYC da Nubesti: verificação de identidade obrigatória e paga antes do acesso à plataforma e aos testes.",
    body: `A Nubesti vende ferramentas profissionais de segurança ofensiva. Não ativamos o acesso pago nem permitimos lançar testes até o cliente concluir o Know Your Customer (“KYC”) e a verificação de identidade **e** pagar a taxa de KYC / verificação.

Esta política faz parte dos [Termos de serviço](/legal/terms/). Lê-se com [Faturação e renovações](/legal/billing/), [Controlos de exportação e sanções](/legal/export-controls/) e a [Carta de autorização](/legal/authorization/).

## 1. Quem deve concluir o KYC

O KYC é obrigatório para:

- A organização contratante (pessoa coletiva ou empresário em nome individual)
- Beneficiários efetivos ou pessoas de controlo que peçamos de forma razoável
- Cada utilizador que possa lançar testes, alterar o âmbito ou convidar colegas
- Revendedores ou parceiros que comprem para um cliente final

Uma demo não substitui o KYC. Funções de teste que possam tocar alvos reais permanecem bloqueadas até à aprovação.

## 2. O cliente paga o KYC

A verificação de identidade é um **serviço pago**, não incluído no preço da subscrição.

- A taxa de KYC / verificação é a indicada no checkout, no portal ou na nota de encomenda
- É devida **adiantada**, além do plano, extras e impostos
- Autoriza a Nubesti e os processadores de pagamento a debitar o método registado pelas taxas KYC
- Utilizadores verificados extra, novas análises após falha e re-verificações periódicas podem ser faturados de novo
- As taxas KYC são **não reembolsáveis**, mesmo se recusarmos a conta, cancelar antes dos testes ou a subscrição for reembolsada depois por outras regras
- Os créditos do SLA nunca se aplicam às taxas KYC

Se uma nota de encomenda fixar outro preço KYC para esse cliente, prevalece a nota de encomenda.

## 3. O que verificamos

Podemos exigir:

- Documento de identidade com fotografia dos utilizadores autorizados
- Firma, documentos de constituição e morada registada da empresa
- Prova de que o signatário pode vincular a empresa
- Informação de beneficiários efetivos ou de controlo
- Prova de autorização para testar os sistemas que indicar (ver a [Carta de autorização](/legal/authorization/))
- Triagem de sanções, listas de vigilância e fraude

Podemos usar um prestador terceiro de verificação de identidade. Esse prestador é um subencarregado descrito em [Subencarregados](/legal/subprocessors/).

## 4. Quando o acesso começa

Podemos cobrar o plano e o KYC antes de terminar a análise. **Os testes não arrancam, as APIs de scan ficam desativadas e os lugares pagos inativos até o KYC ser aprovado.**

Se o KYC for recusado ou não for concluído no prazo que definirmos (em geral 14 dias), podemos cancelar o tempo de subscrição não usado. As taxas KYC já pagas consideram-se adquiridas. A subscrição pré-paga não usada pode ser reembolsada descontando KYC e custos de pagamento, salvo se a lei exigir o contrário.

## 5. Deveres contínuos

Deve manter a informação KYC exata. Avise-nos se mudar o controlo da empresa, os testers autorizados ou os contactos de faturação. Podemos congelar lançamentos até a re-verificação ser paga e aprovada.

Podemos pedir um KYC novo na renovação, após um evento de risco ou quando a lei ou os nossos parceiros bancários o exijam.

## 6. Dados e conservação

Os dados KYC são dados pessoais. Usamo-los para o onboarding, impedir o abuso de ferramentas de pentest, cumprir sanções e antifraude, e conservar registos. Ver a [Política de privacidade](/legal/privacy/).

Conservamos o KYC enquanto a conta existir e por um período comercialmente razoável depois (em geral pelo menos cinco anos), salvo retenção legal mais longa.

## 7. Sem garantia de aprovação

Pagar não garante aprovação. Podemos recusar ou limitar o serviço se a verificação for incompleta, inconsistente, de alto risco ou proibida pelas [regras de exportação e sanções](/legal/export-controls/).

## 8. Contacto

KYC e faturação: [legal@nubesti.com](mailto:legal@nubesti.com)  
Privacidade dos documentos KYC: [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "ai-policy",
    updated: "2026-09-21",
    title: "Política de uso de IA",
    summary:
      "Como a Nubesti usa inteligência artificial nos testes e relatórios, o que não treinamos e os limites dos achados automáticos.",
    meta_description:
      "Política de IA da Nubesti: dados do cliente, treino de modelos, revisão humana e limites dos achados automáticos.",
    body: `A Nubesti usa automatização e inteligência artificial para encontrar fraquezas e redigir relatórios. Esta política explica como. Complementa os [Termos de serviço](/legal/terms/) e a [Política de privacidade](/legal/privacy/).

## 1. O que a IA faz

Os motores de IA e automatização podem:

- Mapear e sondar os ativos no âmbito que indicar
- Classificar e priorizar achados
- Redigir relatórios, pistas de correção e sugestões de pull request
- Reduzir falsos positivos óbvios

Trabalho enterprise ou de serviços profissionais pode incluir revisão humana. Scans self-serve podem ser totalmente automáticos.

## 2. Dados do cliente e treino

Tratamos alvos, evidência e achados para prestar o serviço comprado.

**Não usamos os seus achados, evidência nem listas de alvos para treinar modelos de fundação públicos.** Podemos usar telemetria agregada e desidentificada do produto (por exemplo, fiabilidade de funções) para operar e melhorar a plataforma.

Se uma função futura usar conteúdo do cliente para melhorar modelos de um modo que o possa identificar, diremos no produto e atualizaremos esta página antes de a ativar.

## 3. As suas responsabilidades

Continua responsável por:

- Concluir o [KYC](/legal/kyc/) e ter uma [autorização](/legal/authorization/) válida
- Escolher um âmbito seguro (prefira staging)
- Rever a saída da IA antes de a tratar como definitiva
- Decidir que correções aplicar

As sugestões de IA podem estar erradas, incompletas ou ser inseguras no seu ambiente.

## 4. Limites

Os testes assistidos por IA **não** garantem que cada vulnerabilidade será encontrada, que os sistemas são inexpugnáveis ou que passará uma auditoria. Aplicam-se as [isenções](/legal/terms/) dos Termos.

## 5. Revisão humana e suporte

O suporte pago e os serviços profissionais podem incluir análise humana. Salvo se a nota de encomenda disser que um analista nomeado revê cada achado, a automatização é o predefinido.

## 6. Uso proibido da IA pelo cliente

Não pode usar a saída da Nubesti para atacar sistemas não autorizados, gerar malware para dano nem apresentar achados como certificação formal.

## 7. Contacto

[legal@nubesti.com](mailto:legal@nubesti.com) · [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "vulnerability-disclosure",
    updated: "2026-09-21",
    title: "Política de divulgação de vulnerabilidades",
    summary:
      "Como reportar um problema de segurança nos sistemas Nubesti, o nosso safe harbor e o que está fora de âmbito.",
    meta_description:
      "Política de divulgação coordenada de vulnerabilidades da Nubesti, safe harbor e canal de reporte da plataforma.",
    body: `Se encontrar um problema de segurança **nos sistemas Nubesti** (site, portal ou plataforma — não um alvo de cliente), queremos saber. Esta é a política referida em [/.well-known/security.txt](https://nubesti.com/.well-known/security.txt).

Os achados sobre alvos de um cliente pertencem a esse cliente. Não nos envie detalhes de exploit sobre produção de terceiros.

## 1. Como reportar

Escreva para [security@nubesti.com](mailto:security@nubesti.com) com:

- Descrição e impacto
- Passos para reproduzir
- URL, endpoint ou componente afetado
- Prova que não destrua dados nem exponha outros clientes

Procuramos acusar receção em **24 horas** e uma primeira avaliação em **48 horas**.

## 2. Safe harbor

Não intentaremos ação civil ou penal contra investigadores que:

- Atuem de boa-fé
- Evitem violações de privacidade, destruição de dados e degradação do serviço
- Não acedam a dados alheios além do necessário para demonstrar o problema
- Nos deem uma oportunidade razoável de corrigir antes de divulgação pública

Este safe harbor não cobre ataques a ambientes de clientes, intrusão física nem extorsão.

## 3. Fora de âmbito

- Negação de serviço ou floods volumétricos contra produção
- Spam, engenharia social da equipa ou phishing aos nossos clientes
- Ataques físicos
- Achados que só afetem browsers obsoletos ou exijam MITM na máquina do investigador
- Problemas de produtos de terceiros que não operamos, salvo má configuração clara sob o nosso controlo

## 4. Coordenação

Não publique um exploit completo antes de uma correção ou data acordada. Podemos creditar quem quiser ser nomeado.

Não temos bug bounty público neste momento. Podemos oferecer um agradecimento; não prometemos pagamento.

## 5. Páginas relacionadas

- [Visão geral de segurança](/legal/security/)
- [Política de uso aceitável](/legal/acceptable-use/)
- [Ética e denúncias](/legal/ethics/)`,
  },
  {
    slug: "authorization",
    updated: "2026-09-21",
    title: "Carta de autorização",
    summary:
      "A autorização escrita que o cliente deve dar antes de a Nubesti testar sistemas no âmbito, com uma carta pronta a copiar.",
    meta_description:
      "Carta de autorização e safe harbor do cliente Nubesti para testes de red team com IA no âmbito.",
    body: `A Nubesti não lançará testes até o KYC estar aprovado **e** confirmar autorização escrita do âmbito. Esta é a autorização padrão. Complementa as [Regras de engagement](/legal/engagement/) e a [Política de uso aceitável](/legal/acceptable-use/).

Ao marcar a caixa de autorização no portal, assinar uma nota de encomenda ou enviar a carta abaixo, declara que pode vincular o titular dos alvos.

## 1. O que autoriza

Autoriza a Nubesti LLC e os seus agentes automáticos a realizar testes de segurança **apenas** contra os ativos que indicar no produto ou num SOW, durante o período em que a conta estiver ativa ou o SOW o disser.

Confirma que é dono desses sistemas ou tem permissão escrita do titular, e que foi dado o aviso a cloud ou ISP se o prestador o exigir.

## 2. Safe harbor (só no âmbito)

Para a atividade no âmbito realizada através da Nubesti, aceita tratá-la como teste de segurança consentido. Não a tratará como acesso não autorizado **desde que** nos mantenhamos no âmbito e nas [Regras de engagement](/legal/engagement/).

Isto não autoriza testar sistemas de terceiros que não controla.

## 3. Os seus deveres

- Concluir e pagar o [KYC](/legal/kyc/)
- Manter um contacto de emergência contactável enquanto correm os testes
- Parar ou reduzir testes se houver impacto em produção
- Manter os achados confidenciais salvo remediação ou exigência legal

## 4. Carta para copiar

Pode enviá-la em papel timbrado para [legal@nubesti.com](mailto:legal@nubesti.com) ou carregá-la no KYC:

> Eu, [nome / cargo], estou autorizado a vincular [entidade]. Autorizo a Nubesti LLC a realizar testes de segurança, incluindo testes automáticos e assistidos por IA, contra os ativos que designarmos no portal Nubesti ou numa lista de âmbito anexa, durante a vigência do nosso acordo. Somos titulares desses ativos ou temos permissão escrita do titular. Concluímos (ou concluiremos e pagaremos) o KYC da Nubesti antes de lançar testes. Contacto de emergência: [nome, e-mail]. Assinatura: [nome], [data].

## 5. Retirada

Pode revogar a autorização parando os testes no portal e escrevendo para [legal@nubesti.com](mailto:legal@nubesti.com). Os trabalhos em curso serão interrompidos assim que for razoavelmente possível. As taxas já pagas seguem a [Política de reembolsos](/legal/refunds/) e a [Política KYC](/legal/kyc/).`,
  },
  {
    slug: "export-controls",
    updated: "2026-09-21",
    title: "Controlos de exportação e sanções",
    summary:
      "A Nubesti não presta serviços de testes de segurança a pessoas sancionadas nem a jurisdições sob sanção integral.",
    meta_description:
      "Política de controlo de exportações e sanções OFAC da Nubesti para a plataforma de red team com IA.",
    body: `O software de testes de segurança pode ser sensível. A Nubesti LLC cumpre as leis aplicáveis dos EUA de controlo de exportações e sanções, incluindo programas da OFAC, e regras equivalentes que nos sejam aplicáveis.

Esta página faz parte dos [Termos de serviço](/legal/terms/). O [KYC](/legal/kyc/) é uma das formas de triar clientes.

## 1. Quem não pode usar os serviços

Não pode aceder nem usar a Nubesti se:

- Estiver situado, residir habitualmente ou se organizar sob as leis de uma jurisdição sob sanção integral
- For uma pessoa ou entidade numa lista de sanções ou de partes recusadas dos EUA ou outra lista aplicável
- Atuar por conta dessa pessoa ou jurisdição
- Usar os serviços para um fim proibido (incluindo uso militar ou de armas não autorizado quando a lei o proíba)

Podemos acrescentar bloqueios geográficos ou de entidades quando as listas mudarem.

## 2. As suas declarações

Cada vez que iniciar sessão, pagar ou lançar um teste, declara que a secção 1 continua verdadeira, que o KYC é exato e que não desviará o serviço para uma parte proibida.

## 3. O que podemos fazer

Podemos recusar, suspender ou terminar contas, congelar lançamentos e conservar KYC e faturação quando o cumprimento de sanções o exigir. Não temos obrigação de prestar o serviço se isso violar a lei.

## 4. Responsabilidade de exportação do cliente

Se descarregar software, relatórios ou dados técnicos da plataforma, é responsável pelo seu próprio cumprimento de exportação e transferência.

## 5. Contacto

Questões de sanções e elegibilidade: [legal@nubesti.com](mailto:legal@nubesti.com)`,
  },
];
