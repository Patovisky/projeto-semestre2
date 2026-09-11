import Image from "next/image";
import styles from "./page.module.css";

export default function Analitica() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>

          {/* CABEÇALHO */}
          <div className={styles.title}>
            <h3>Química Analítica</h3>

            <h2>
              A química analítica é a área da química responsável por
              <span> identificar, separar e determinar</span> as substâncias
              presentes em uma amostra.
              <br></br>
              <br></br>
              Ela fornece informações
              <span> qualitativas e quantitativas</span> sobre a composição
              da matéria e é fundamental para análises ambientais,
              clínicas, farmacêuticas, industriais e laboratoriais.
            </h2>


          </div>

          <br></br>
          <br></br>

          {/* ANÁLISE QUALITATIVA */}
          <div className={styles.infoConfig}>
            <h2>Análise qualitativa</h2>

            <p className={styles.pinfo}>
              A análise qualitativa busca determinar
              <span> quais substâncias estão presentes</span> em uma amostra.
              Seu objetivo principal é identificar os componentes químicos,
              sem necessariamente determinar a quantidade de cada um.
            </p>

            <p className={styles.pinfo}>
              Ela responde principalmente à pergunta:
              <span> “o que está presente na amostra?”</span>
            </p>

            <p className={styles.pinfo}>
              Em uma análise ambiental, por exemplo, pode-se investigar a
              presença de determinados elementos químicos, como
              <span> chumbo (Pb) ou arsênio (As)</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* ANÁLISE QUANTITATIVA */}
          <div className={styles.infoConfig}>
            <h2>Análise quantitativa</h2>

            <p className={styles.pinfo}>
              A análise quantitativa determina
              <span> quanto de uma determinada substância</span> está presente
              em uma amostra.
            </p>

            <p className={styles.pinfo}>
              O resultado pode ser expresso como
              <span> concentração, massa ou quantidade de matéria</span>,
              dependendo do método utilizado.
            </p>

            <p className={styles.pinfo}>
              Nesse caso, a pergunta principal é:
              <span> “quanto está presente na amostra?”</span>
            </p>

            <p className={styles.pinfo}>
              Em análises ambientais, por exemplo, pode-se determinar a
              concentração de <span>Pb ou As no solo</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* ANALITO */}
          <div className={styles.infoConfig}>
            <h2>Analito</h2>

            <p className={styles.pinfo}>
              Analito é a
              <span> espécie química que está sendo determinada</span>
              durante uma análise.
            </p>

            <p className={styles.pinfo}>
              Pode ser um elemento, íon, composto ou outra espécie química
              que seja objeto de interesse analítico.
            </p>

            <p className={styles.pinfo}>
              Em uma análise ambiental destinada à investigação de elementos
              potencialmente tóxicos, por exemplo,
              <span> Pb e As podem ser os analitos</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* MATRIZ */}
          <div className={styles.infoConfig}>
            <h2>Matriz</h2>

            <p className={styles.pinfo}>
              A matriz corresponde ao
              <span> conjunto de componentes presentes na amostra</span>
              no qual o analito está inserido.
            </p>

            <p className={styles.pinfo}>
              A composição da matriz pode influenciar o procedimento analítico,
              principalmente quando outros componentes interferem na
              determinação do analito.
            </p>

            <p className={styles.pinfo}>
              Exemplos de matrizes são
              <span> solo, água, urina, sangue, alimentos e materiais
                biológicos</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* ANALITO E MATRIZ */}
          <div className={styles.infoConfig}>
            <h2>Analito × Matriz</h2>

            <p className={styles.pinfo}>
              O analito e a matriz devem ser considerados conjuntamente no
              planejamento de uma análise química.
            </p>

            <p className={styles.pinfo}>
              A mesma substância pode apresentar diferentes dificuldades
              analíticas quando está presente em matrizes diferentes.
            </p>

            <p className={styles.pinfo}>
              Por isso, a
              <span> escolha do método analítico</span> deve considerar as
              características do analito e da matriz.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* MÉTODOS ANALÍTICOS */}
          <div className={styles.infoConfig}>
            <h2>Métodos analíticos</h2>

            <p className={styles.pinfo}>
              Métodos analíticos são procedimentos utilizados para
              <span> identificar ou determinar componentes de uma amostra</span>.
            </p>

            <p className={styles.pinfo}>
              A escolha do método depende de fatores como a natureza da
              amostra, concentração esperada do analito, quantidade de
              amostra disponível, precisão necessária e seletividade.
            </p>

            <p className={styles.pinfo}>
              Também devem ser considerados
              <span> equipamentos disponíveis, tempo, custo e características
                da matriz</span>.
            </p>

            <p className={styles.pinfo}>
              Entre as principais classes estão os métodos
              <span> gravimétricos, volumétricos e instrumentais</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* MÉTODOS GRAVIMÉTRICOS */}
          <div className={styles.infoConfig}>
            <h2>Métodos gravimétricos</h2>

            <p className={styles.pinfo}>
              Os métodos gravimétricos são baseados na
              <span> determinação de massa</span>.
            </p>

            <p className={styles.pinfo}>
              Em um procedimento gravimétrico, o analito pode ser convertido
              em uma espécie química adequada para separação e posterior
              determinação de sua massa.
            </p>

            <p className={styles.pinfo}>
              A quantidade de analito é calculada a partir da relação entre
              a massa obtida e a composição química da espécie determinada.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* MÉTODOS VOLUMÉTRICOS */}
          <div className={styles.infoConfig}>
            <h2>Métodos volumétricos</h2>

            <p className={styles.pinfo}>
              Os métodos volumétricos, também chamados de titrimétricos,
              utilizam a
              <span> medida do volume de uma solução</span> que participa de
              uma reação com o analito.
            </p>

            <p className={styles.pinfo}>
              A quantidade ou concentração do analito é determinada a partir
              da relação estequiométrica entre as espécies envolvidas.
            </p>

            <p className={styles.pinfo}>
              A
              <span> titulação</span> é um dos procedimentos mais conhecidos
              dessa classe de métodos.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* MÉTODOS INSTRUMENTAIS */}
          <div className={styles.infoConfig}>
            <h2>Métodos instrumentais</h2>

            <p className={styles.pinfo}>
              Os métodos instrumentais utilizam equipamentos para medir uma
              propriedade física ou físico-química relacionada à presença ou
              concentração do analito.
            </p>

            <p className={styles.pinfo}>
              Dependendo da técnica, podem ser avaliadas propriedades
              relacionadas à
              <span> radiação eletromagnética, corrente, potencial elétrico,
                massa ou outras grandezas físicas</span>.
            </p>

            <p className={styles.pinfo}>
              Esses métodos são especialmente importantes quando é necessária
              maior
              <span> sensibilidade, rapidez ou capacidade de detectar baixas
                concentrações</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* AMOSTRAGEM */}
          <div className={styles.infoConfig}>
            <h2>Amostragem</h2>

            <p className={styles.pinfo}>
              A amostragem é uma das etapas mais importantes da análise
              química. Ela consiste na obtenção de uma
              <span> porção do material que represente adequadamente o
                conjunto de interesse</span>.
            </p>

            <p className={styles.pinfo}>
              A qualidade da amostra pode influenciar diretamente o resultado
              final da análise.
            </p>

            <p className={styles.pinfo}>
              Uma amostra que não seja representativa pode produzir resultados
              que não correspondem às características reais do material
              investigado.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* AMOSTRA REPRESENTATIVA */}
          <div className={styles.infoConfig}>
            <h2>Amostra representativa</h2>

            <p className={styles.pinfo}>
              Uma amostra representativa apresenta características que
              refletem adequadamente o material ou conjunto que se pretende
              estudar.
            </p>

            <p className={styles.pinfo}>
              Em estudos ambientais, a representatividade pode depender da
              <span> distribuição espacial do analito ou contaminante</span>,
              da localização dos pontos e da estratégia de coleta.
            </p>

            <p className={styles.pinfo}>
              Por isso, o planejamento da amostragem deve ocorrer antes da
              realização da análise laboratorial.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* PREPARAÇÃO DA AMOSTRA */}
          <div className={styles.infoConfig}>
            <h2>Preparação da amostra</h2>

            <p className={styles.pinfo}>
              Depois da coleta, a amostra pode precisar de diferentes etapas
              de preparação antes da medição.
            </p>

            <p className={styles.pinfo}>
              Dependendo da matriz e do método, podem ser realizadas operações
              como
              <span> secagem, homogeneização, moagem, dissolução, digestão
                ou diluição</span>.
            </p>

            <p className={styles.pinfo}>
              O objetivo é obter uma amostra em condições adequadas para a
              determinação do analito, evitando perdas e reduzindo fontes de
              erro.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* REPLICATAS */}
          <div className={styles.infoConfig}>
            <h2>Amostras replicadas</h2>

            <p className={styles.pinfo}>
              As replicatas correspondem à realização de determinações
              repetidas de uma amostra ou de porções equivalentes.
            </p>

            <p className={styles.pinfo}>
              Elas permitem avaliar a
              <span> variabilidade e a repetibilidade</span> do procedimento
              analítico.
            </p>

            <p className={styles.pinfo}>
              A comparação entre resultados replicados também fornece
              informações importantes sobre a
              <span> precisão</span> das medições.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* INTERFERÊNCIAS */}
          <div className={styles.infoConfig}>
            <h2>Interferências</h2>

            <p className={styles.pinfo}>
              Interferência ocorre quando uma espécie presente na matriz
              influencia a resposta utilizada para determinar o analito.
            </p>

            <p className={styles.pinfo}>
              A presença de interferentes pode provocar resultados
              diferentes daqueles que seriam obtidos na ausência dessas
              espécies.
            </p>

            <p className={styles.pinfo}>
              Por isso, o método deve considerar estratégias para
              <span> identificar, eliminar ou controlar as interferências</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* SELETIVIDADE */}
          <div className={styles.infoConfig}>
            <h2>Seletividade</h2>

            <p className={styles.pinfo}>
              Seletividade é a capacidade de um método produzir uma resposta
              relacionada ao analito mesmo quando outras espécies químicas
              estão presentes na amostra.
            </p>

            <p className={styles.pinfo}>
              Essa característica é importante porque as amostras reais
              geralmente apresentam
              <span> vários componentes simultaneamente</span>.
            </p>

            <p className={styles.pinfo}>
              Um método adequado deve minimizar a influência de componentes
              que não são o objeto principal da determinação.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* CALIBRAÇÃO */}
          <div className={styles.infoConfig}>
            <h2>Calibração</h2>

            <p className={styles.pinfo}>
              A calibração estabelece uma relação entre a
              <span> resposta obtida pelo método</span> e uma quantidade
              conhecida do analito.
            </p>

            <p className={styles.pinfo}>
              Para isso, podem ser utilizados padrões ou soluções de
              concentração conhecida.
            </p>

            <p className={styles.pinfo}>
              Essa relação permite utilizar a resposta obtida para uma amostra
              desconhecida na determinação da concentração do analito.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* PADRÕES */}
          <div className={styles.infoConfig}>
            <h2>Padrões analíticos</h2>

            <p className={styles.pinfo}>
              Padrões analíticos são materiais ou soluções com
              <span> composição ou concentração conhecida</span>, utilizados
              como referência em uma determinação.
            </p>

            <p className={styles.pinfo}>
              Eles permitem estabelecer uma relação quantitativa entre a
              concentração do analito e a resposta observada no procedimento.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* CURVA DE CALIBRAÇÃO */}
          <div className={styles.infoConfig}>
            <h2>Curva de calibração</h2>

            <p className={styles.pinfo}>
              A curva de calibração representa a relação entre
              <span> concentrações conhecidas</span> de padrões e as respostas
              produzidas pelo método analítico.
            </p>

            <p className={styles.pinfo}>
              Depois de estabelecida essa relação, a resposta da amostra
              desconhecida pode ser utilizada para estimar a concentração
              correspondente.
            </p>

            <p className={styles.pinfo}>
              Assim, a calibração conecta a
              <span> resposta experimental</span> ao resultado quantitativo.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* PRECISÃO E EXATIDÃO */}
          <div className={styles.infoConfig}>
            <h2>Precisão e exatidão</h2>

            <p className={styles.pinfo}>
              A precisão está relacionada à
              <span> proximidade entre resultados obtidos em medições
                repetidas</span>.
            </p>

            <p className={styles.pinfo}>
              A exatidão está relacionada à proximidade entre o resultado
              obtido e um valor considerado verdadeiro ou de referência.
            </p>

            <p className={styles.pinfo}>
              Essas características são importantes para avaliar a qualidade
              dos resultados produzidos por um método analítico.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* CONFIABILIDADE */}
          <div className={styles.infoConfig}>
            <h2>Confiabilidade dos resultados</h2>

            <p className={styles.pinfo}>
              A confiabilidade de uma análise depende de todo o processo
              analítico, desde a
              <span> seleção do método e obtenção da amostra</span> até a
              medição e interpretação dos resultados.
            </p>

            <p className={styles.pinfo}>
              Também devem ser consideradas as etapas de preparação,
              calibração, controle de interferências e avaliação da qualidade
              dos dados.
            </p>

            <p className={styles.pinfo}>
              Portanto, um resultado confiável não depende apenas do
              equipamento utilizado, mas de
              <span> todas as etapas do procedimento analítico</span>.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* ERROS */}
          <div className={styles.infoConfig}>
            <h2>Erros em análise química</h2>

            <p className={styles.pinfo}>
              Os resultados analíticos podem apresentar diferenças em relação
              ao valor verdadeiro devido a diferentes fontes de erro.
            </p>

            <p className={styles.pinfo}>
              Essas fontes podem estar relacionadas à
              <span> amostragem, preparação, reagentes, instrumentos,
                procedimento ou tratamento dos dados</span>.
            </p>

            <p className={styles.pinfo}>
              O controle dessas fontes de erro é fundamental para aumentar a
              qualidade e a confiabilidade dos resultados.
            </p>
          </div>

          <br></br>
          <br></br>

          {/* SEQUÊNCIA DA ANÁLISE */}
          <div className={styles.infoConfig}>
            <h2>Sequência geral de uma análise quantitativa</h2>

            <p className={styles.pinfo}>
              A análise quantitativa pode ser compreendida como uma sequência
              de etapas interdependentes. A qualidade de uma etapa pode
              influenciar diretamente as etapas seguintes.
            </p>
            <br></br><br></br>
            <ol>
              <li>
                <span>Seleção do método</span>
                <br />
                Escolha do procedimento mais adequado ao analito e à matriz.
              </li>

              <br />

              <li>
                <span>Obtenção da amostra</span>
                <br />
                Coleta de uma quantidade representativa do material.
              </li>

              <br />

              <li>
                <span>Preparação da amostra</span>
                <br />
                Tratamento necessário para tornar a amostra adequada à análise.
              </li>

              <br />

              <li>
                <span>Controle das interferências</span>
                <br />
                Identificação e redução da influência de componentes da matriz.
              </li>

              <br />

              <li>
                <span>Medição</span>
                <br />
                Determinação da propriedade relacionada ao analito.
              </li>

              <br />

              <li>
                <span>Cálculo</span>
                <br />
                Transformação da medida experimental em quantidade ou
                concentração.
              </li>

              <br />

              <li>
                <span>Avaliação da confiabilidade</span>
                <br />
                Verificação da qualidade e consistência dos resultados.
              </li>
            </ol>
          </div>

          <br></br>
          <br></br>

          {/* VISÃO GERAL */}
          <div className={styles.infoConfig}>
            <h2>Visão geral da análise química</h2>

            <p className={styles.pinfo}>
              A análise química deve ser entendida como um
              <span> processo integrado</span>, e não apenas como uma medição
              realizada em um instrumento.
            </p>

            <p className={styles.pinfo}>
              O resultado final depende da qualidade da amostragem, preparação
              da amostra, escolha do método, controle das interferências,
              calibração, medição, cálculos e avaliação dos dados.
            </p>

            <p className={styles.pinfo}>
              Dessa forma, uma análise confiável começa
              <span> antes da medição</span> e termina somente após a avaliação
              adequada do resultado.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}