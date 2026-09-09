import Image from "next/image";
import styles from "./page.module.css";

export default function Estequi() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>

          <div className={styles.title}>
            <h3>Estequiometria</h3>

            <h2>
              A estequiometria é um ramo da química que estuda e calcula a relação quantitativa <br></br>
              entre reagentes e produtos em uma reação química. <br></br>
              Para começar o estudo de estequiometria, é preciso ter conhecimentos de alguns conceitos básicos:
            </h2>

            <Image
              src='/estequiImg.webp'
              width={300}
              height={400}
              alt="https://www.manualdaquimica.com/quimica-geral/estequiometria-das-reacoes-quimicas.html"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Reagente:</h2>

            <p className={styles.pinfo}>
              São substâncias utilizadas em análises laboratoriais para <span>provocar</span>,
              <span> identificar</span> ou <span>medir</span> reações químicas.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Graus de pureza:</span> A pureza de um reagente é o quanto de uma determinada
              amostra de fato corresponde ao composto que vai reagir.
              Para calcular a pureza de uma amostra, divida a massa da substância pura pela massa
              total da amostra e multiplique por 100. Você também pode usar uma regra de três simples.
            </p>

            <Image
              src='/pureza.jpg'
              width={400}
              height={200}
              alt="pureza"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Produto:</h2>

            <p className={styles.pinfo}>
              É a <span>matéria gerada</span> quando os reagentes (substâncias iniciais) se
              <span> transformam e se combinam</span> entre si.
              Nas equações químicas, os produtos aparecem sempre do lado direito da seta →,
              que indica o sentido da transformação.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Obs: </span>
              Pode ter características físicas e químicas totalmente diferentes dos materiais iniciais.
            </p>

            <Image
              src='/enxofre.jpg'
              width={400}
              height={200}
              alt="produto"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Lei de lavoisier (conservação da massa):</h2>

            <div className={styles.quoteDiv}>
              <p>
                <Image
                  src='/quote-left-svgrepo-com.svg'
                  width={20}
                  height={20}
                  alt="blublu"
                  className={styles.quote}
                />
                Na natureza, nada se cria, nada se perde, tudo se transforma
                <Image
                  src='/quote-right-svgrepo-com.svg'
                  width={20}
                  height={20}
                  alt="blublu"
                  className={styles.quote}
                />
              </p>
            </div>

            <p className={styles.pinfo}>
              Enunciou lavoisier, criador da lei da conservação da massa.
              A lei de Lavoisier, estabelece que, em um sistema fechado, a <span>soma</span> das
              <span> massas dos reagentes </span> é sempre <span>igual</span> à soma das
              <span> massas dos produtos</span> em qualquer reação química.
              Nesse sentido, essa lei foi corroborada por meio de experimentos pioneiros,
              especialmente o de combustão do enxofre em um sistema fechado,
              proporcionando evidências cruciais para a aceitação da teoria atômica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Lei de Proust (proporções constantes):</h2>

            <div className={styles.quoteDiv}>
              <p>
                <Image
                  src='/quote-left-svgrepo-com.svg'
                  width={20}
                  height={20}
                  alt="blublu"
                  className={styles.quote}
                />
                As substâncias que se combinam para formar um composto
                sempre o fazem em uma relação de massas fixas, constantes e invariaveis
                <Image
                  src='/quote-right-svgrepo-com.svg'
                  width={20}
                  height={20}
                  alt="blublu"
                  className={styles.quote}
                />
              </p>
            </div>

            <p className={styles.pinfo}>
              Essa lei é muito importante porque forneceu as bases para o atomismo e
              também é usada para a obtenção de outras fórmulas químicas importantes,
              tais como a <span>fórmula molecular</span>, a <span>fórmula percentual ou centesimal</span>
              e a <span>fórmula mínima ou empírica</span>.
              Segundo a lei de Proust, as reações sempre ocorreram na mesma proporção de massas.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplo:</span> A água é formada por hidrogênio e oxigênio na proporção
              de 4 gramas de hidrogênio para cada 32 gramas de oxigênio,
              produzindo 36 gramas de água.
            </p>

            <Image
              src='/doisagadoiso2aaaaa.jpg'
              width={800}
              height={400}
              alt="produto"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Massa atômica:</h2>

            <p className={styles.pinfo}>
              A massa atômica é <span>a unidade que faz referência à massa de um átomo, </span>
              cujos valores são dimensionados pela unidade de massa atômica expressa por U ou u.m.a
              (sendo u mais utilizado).
              1 u equivale a 1/12 de um átomo de carbono-12 em seu estado fundamental e é aproximadamente
              igual a 1,6605402 x 10^−27 kg.
            </p>

            <br></br>
            <br></br>

            <h1 className={styles.h1}>
              <span>"Porque carbono-12?"</span> Fiz uma breve pesquisa, não tão aprofundada, mas encontrei
              um resumo de um artigo IMENSO da IUPAC,
              traduzi ele e resumi mais um pouco pra simplificar pra vocês:
              A definição da massa atômica e do mol está ligada à história, à precisão, à mensurabilidade e à repetibilidade.
              No início do século XIX, John Dalton propôs o hidrogênio como padrão, mas surgiram dificuldades de medição e erros.
              Por isso, os químicos passaram a utilizar o oxigênio natural como referência.
              <br></br>
              <br></br>
              No século XX, os físicos perceberam que a composição isotópica do oxigênio natural
              varia conforme o local, o tempo e o clima, tornando o padrão menos consistente.
              Eles propuseram utilizar apenas o oxigênio-16, mas isso provocaria uma
              mudança muito grande (275 ppm) em relação ao padrão usado pelos químicos, exigindo
              alterações em livros, tabelas e processos industriais, com enormes custos comerciais.
              <br></br>
              <br></br>
              O carbono-12 foi escolhido como um compromisso entre físicos e químicos. Por acaso,
              definir a massa atômica como 1/12 da massa de um átomo de carbono-12 era muito próximo
              do antigo padrão baseado no oxigênio natural, causando uma mudança de apenas 42 ppm,
              em vez dos 275 ppm do oxigênio-16.
              Além disso, o carbono-12 é um isótopo puro e estável,
              o que atendia à necessidade dos físicos de um padrão mais preciso e reprodutível,
              enquanto a pequena mudança mantinha a compatibilidade com os padrões químicos e industriais já existentes.
            </h1>

            <br></br>

            <p className={styles.pinfo}>
              <span>Como calcular:</span> A massa atômica para um determinado elemento é
              a média ponderada das massas dos seus respectivos <span>isótopos</span> relativamente estáveis,
              em que o peso aplicado na média é a <span>abundância isotópica.</span> Tais valores são revistos
              a cada dois anos pela Iupac.
              <br></br>
              <br></br>
              <span>Exemplo:</span> O cloro apresenta dois isótopos: cloro-35 e cloro-37.
              O cloro-35 apresenta uma abundância isotópica média de 75,8% e uma massa atômica
              de 34,969 u aproximadamente, enquanto o cloro-37 apresenta uma abundância isotópica
              média de 24,2% e uma massa atômica de 36,966 u, aproximadamente.
              Assim, a massa atômica para o cloro pode ser determinada da seguinte forma:
            </p>

            <Image
              src='/massaAtomica.png'
              width={500}
              height={100}
              alt="pureza"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Mol:</h2>

            <p className={styles.pinfo}>
              O <span>mol</span> é a unidade usada para representar a quantidade de matéria.
              Um mol contém aproximadamente <span>6,022 x 10²³ partículas</span>, valor conhecido
              como constante de Avogadro. O mol é uma das unidades utilizadas pelo Sistema
              Internacional de Unidades (SI).
            </p>
            <br></br>
            <p className={styles.pinfo}>
              A palavra mol tem origem no termo latino <i>moles</i>, que significa “uma massa”.
              O termo foi introduzido pelo químico alemão <span>Wilhelm Ostwald</span>.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              O mol pode ser utilizado para quantificar qualquer tipo de substância ou entidade.
              Ele permite representar tanto partículas microscópicas, como átomos, íons e moléculas,
              quanto objetos macroscópicos, como sementes.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Por exemplo, <span>1 mol de água</span> representa aproximadamente 6,022 x 10²³
              moléculas de água. Da mesma maneira, 1 mol de sementes corresponde a
              6,022 x 10²³ sementes. Portanto, a quantidade de entidades presentes em um mol
              permanece a mesma, independentemente do que está sendo contado.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Na Química, o uso do mol é fundamental para relacionar quantidades de partículas
              durante os cálculos e as reações químicas. Dessa forma, ele permite estabelecer
              uma ligação entre o mundo microscópico dos átomos e moléculas e as quantidades
              que conseguimos medir em laboratório.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Moléculas:</h2>

            <p className={styles.pinfo}>
              Uma <span>molécula</span> é formada por dois ou mais átomos, que podem ser iguais
              ou diferentes, unidos por <span>ligações covalentes</span>.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Por serem formadas por átomos ligados por meio de compartilhamento de elétrons,
              as moléculas são <span>eletricamente neutras</span> e constituem unidades que
              formam diversas substâncias.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Nos estados <span>sólido e líquido</span>, as moléculas encontram-se bastante
              próximas umas das outras. Essa proximidade permite que ocorram deformações
              momentâneas em suas nuvens eletrônicas, provocando a formação temporária de
              regiões com polos positivo e negativo.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Há moléculas bastante simples, como o <span>oxigênio (O₂)</span> presente no ar
              que respiramos. Também existem estruturas muito mais complexas, como as
              <span> buckyballs</span>, constituídas por átomos de carbono organizados em
              uma estrutura aproximadamente esférica.
            </p>
            <br></br>
            <h1 className={styles.h1}>
              <span>"Curiosidade: buckminsterfulereno"</span> O buckminsterfulereno (C₆₀)
              é uma forma alotrópica do carbono composta por <span>60 átomos</span>.
              Esses átomos se organizam formando pentágonos e hexágonos, criando uma estrutura
              que lembra bastante uma <span>bola de futebol</span>.
              <br></br>
              <br></br>
              Os carbonos presentes nessa estrutura estabelecem ligações simples e duplas,
              dando origem ao que também é chamado de <span>buckyball</span>.
              Sua estrutura em forma de gaiola e sua poliaromaticidade produzem uma distribuição
              eletrônica diferenciada, permitindo que essas moléculas participem de complexos
              de transferência de carga.
            </h1>

            <br></br>
          </div>

          <div className={styles.infoConfig}>
            <h2>Volume molar:</h2>

            <p className={styles.pinfo}>
              Em condições normais de temperatura e pressão, conhecidas como
              <span> CNTP</span>, um mol de qualquer gás ideal ocupa um volume de
              aproximadamente <span>22,4 litros</span>.
            </p>
            <Image
              src='/estequiometria.webp'
              width={400}
              height={400}
              alt="pureza"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Estequiometria: passo a passo</h2>

            <p className={styles.pinfo}>
              <span>Passo 1:</span> Primeiro, escreva a equação química, identificando
              corretamente todas as substâncias que participam da reação.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 2:</span> Em seguida, realize o <span>balanceamento da equação química</span>.
              Os coeficientes devem ser ajustados para que a quantidade de átomos de cada elemento
              seja igual nos reagentes e nos produtos, respeitando as Leis Ponderais,
              especialmente as Leis de Proust e Lavoisier.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 3:</span> Organize os valores fornecidos pelo exercício e identifique
              claramente qual informação já foi dada e qual quantidade precisa ser descoberta.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 4:</span> Determine a relação entre as grandezas envolvidas no problema,
              como quantidade de matéria, massa ou volume.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 5:</span> Por fim, utilize uma <span>regra de três</span> para encontrar
              o valor solicitado pela questão.
            </p>
          </div>
          <br></br>
          <div className={styles.infoConfig}>
            <h2>Exemplo de cálculo estequiométrico:</h2>

            <p className={styles.pinfo}>
              <span>Questão:</span> Quantos moles de gás hidrogênio são necessários para formar
              amônia (NH₃), considerando que estão disponíveis 4 moles de gás nitrogênio?
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 1:</span> Escrevemos a equação da reação:
              N₂ + H₂ → NH₃
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 2:</span> A equação ainda não está balanceada. Nos reagentes existem
              2 átomos de nitrogênio e 2 átomos de hidrogênio. Já no produto temos 1 átomo
              de nitrogênio e 3 átomos de hidrogênio.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Para equilibrar o nitrogênio, colocamos o coeficiente 2 diante da amônia:
              N₂ + H₂ → <span>2 NH₃</span>.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Agora temos 6 átomos de hidrogênio no lado dos produtos. Por isso, colocamos
              o coeficiente 3 diante do H₂:
              N₂ + <span>3 H₂ → 2 NH₃</span>.
              A equação está balanceada.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 3:</span> O exercício fornece <span>4 moles de N₂</span> e solicita
              a quantidade necessária de H₂. Portanto, chamaremos essa quantidade desconhecida
              de <span>x moles de H₂</span>.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 4:</span> Como estamos comparando mol com mol, não é necessário
              realizar nenhuma conversão adicional. Pela equação balanceada, percebemos que
              <span> 1 mol de N₂</span> reage com <span>3 moles de H₂</span>.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Passo 5:</span> Agora podemos utilizar uma regra de três para determinar
              a quantidade de hidrogênio necessária.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              <span>Atenção!</span> Ao montar a regra de três, mantenha cada substância
              correspondente na mesma posição. Assim, os valores referentes ao nitrogênio
              devem ficar sobre o nitrogênio, enquanto os valores referentes ao hidrogênio
              devem ficar sobre o hidrogênio.
            </p>
            <Image
              src='/estequiExemplo.webp'
              width={400}
              height={400}
              alt="pureza"
              className={styles.imgRep}
            />
          </div>
          <br></br>
          <br></br>
          <div className={styles.infoConfig}>
            <p className={styles.pinfo}>
              <span>Nota: </span>Refletindo há algum tempo,
              cheguei a um vislumbre de que a famosa frase
              de Heráclito de Éfeso — “Ninguém entra em um mesmo rio
              uma segunda vez, pois, quando isso acontece, já não se é o
              mesmo, assim como as águas que já serão outras.”
              — pode nos ajudar a discernir melhor a lei de
              conservação de Lavoisier. Antes de continuar
              a explicar como as duas ideias se relacionam, é preciso entender
              o ponto central de ambas.
              <br></br>
              <br></br>
              Heráclito propunha que o ser é um constante "vir-a-ser, pois estamos
              sempre nos tornando a todo momento uma versão transformada, renovada
              e diferente de nós mesmos. A vida acontece neste fluxo, impulsionada
              por contradições, e é por meio destas que o mundo modifica e evolui.
              Nada permanece igual, e tudo está em contínua mutação. Recapitulando
              a ideia de Lavoisier brevemente —
              os átomos apenas se rearranjam, a quantidade de matéria permanece constante durante
              uma transformação química.
              <br></br>
              <br></br>
              Agora posso finalmente chegar ao ponto-chave. Lembrem-se das seguintes palavras:
              fluxo e rearranjam. A frase de Heráclito pode, e deve, ser interpretada de forma literal.
              O homem e o rio nunca serão os mesmos de antes; tudo está, de fato, em um fluxo
              de constante transformação; os átomos sempre se rearranjam, passando
              continuamente por processos químicos, físicos e biológicos. Sabia que, em um ano,
              grande parte dos nossos átomos já não é a mesma? Somos basicamente um monte
              de matéria reciclada, que continuará se transformando eternamente. A matéria e energia
              do Big Bang podem estar, de alguma forma, presentes até mesmo em nós.
              <br></br>
              <br></br>
              Em resumo: A frase de Heráclito ganha uma profundidade maior
              e uma perspectiva literal quando lembramos que o corpo humano
              é feito de matéria. As células do nosso corpo morrem e se regeneram;
              os átomos que nos compõem hoje, em sua maioria, já não são os mesmos de anos atrás.
              A ciência comprova: nós não somos os mesmos de forma literal. Mas isso não
              anula as diversas interpretações do que é “ser” ou do que é “você”. Na minha
              opinião, apesar de sermos pura matéria, a forma como nos relacionamos é o que
              define quem somos. O lado filosófico do "ser", ou simplesmente como a sociologia
              explica o ser, não é anulado pela física ou química. Mas não irei me aprofundar;
              isso se trata de ideias sociológicas e filosóficas que deixariam este texto ainda
              maior.
              (Essa parte do site já está grande o suficiente…).
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}