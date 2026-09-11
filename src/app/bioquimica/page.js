import Image from "next/image";
import styles from "./page.module.css";

export default function Bioquimica() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>

          <h3>Bioquímica</h3>

          <div className={styles.title}>
            <h3>O que é Bioquímica?</h3>
            <h2>
              A Bioquímica é a área da Biologia que estuda as estruturas,
              a organização e as transformações químicas que acontecem nos
              organismos vivos. Ela procura compreender como as moléculas
              presentes nas células interagem, como as reações químicas são
              realizadas e de que maneira esses processos permitem a
              manutenção da vida.
              <br /><br />
              Os processos bioquímicos estão relacionados ao crescimento,
              à reprodução, à produção de energia, à síntese de moléculas,
              ao transporte de substâncias e à eliminação de produtos
              resultantes do metabolismo. Apesar da enorme diversidade dos
              seres vivos, muitos desses processos são compartilhados entre
              diferentes organismos.
            </h2>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Processos bioquímicos dos seres vivos</h2>
            <p className={styles.pinfo}>
              Os organismos vivos dependem de uma grande quantidade de
              reações químicas coordenadas para manter suas funções. Entre
              os principais processos estão a síntese de biomoléculas, o
              transporte de substâncias através das membranas, a produção
              e utilização de energia e a eliminação de metabólitos e
              substâncias que podem ser prejudiciais ao organismo.
              <br /><br />
              Essas reações dependem principalmente de elementos como
              <span> carbono, hidrogênio, oxigênio, nitrogênio, fósforo e enxofre</span>,
              que participam da formação de moléculas essenciais para a vida.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>A água e a vida</h2>
            <p className={styles.pinfo}>
              A água é uma das substâncias mais importantes para os seres
              vivos. Ela participa de inúmeras reações químicas, atua como
              solvente para diversas substâncias e contribui para a
              manutenção da temperatura dos organismos.
              <br /><br />
              Sua importância está relacionada à estrutura da molécula,
              que apresenta uma distribuição desigual de cargas e permite
              a formação de interações entre diferentes moléculas de água.
              Além disso, a água participa do transporte de substâncias,
              da regulação térmica e de diversas reações metabólicas.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Pontes de hidrogênio</h2>
            <p className={styles.pinfo}>
              As pontes de hidrogênio são interações importantes entre
              moléculas de água e também contribuem para a organização
              tridimensional de muitas biomoléculas. Na água, essas
              interações ajudam a explicar propriedades como a coesão,
              a adesão e a capacidade de interagir com diferentes
              substâncias.
              <br /><br />
              Essas interações também participam da estabilização de
              proteínas e ácidos nucleicos, contribuindo para a manutenção
              de suas estruturas.
            </p>

            <br />

            <Image
              src="/ponteH.jpg"
              width={400}
              height={400}
              alt="Ponte de hidrogênio"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Moléculas hidrofílicas, hidrofóbicas e anfipáticas</h2>
            <p className={styles.pinfo}>
              As substâncias <span>hidrofílicas</span> apresentam afinidade
              com a água e geralmente interagem bem com ela. As substâncias
              <span> hidrofóbicas</span> apresentam pouca afinidade com a
              água e tendem a evitar o contato com ela.
              <br /><br />
              Já as moléculas <span>anfipáticas</span> possuem regiões com
              características hidrofílicas e hidrofóbicas. Essa propriedade
              é fundamental para a organização das membranas celulares,
              especialmente na formação da bicamada de fosfolipídios.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Elementos químicos das biomoléculas</h2>
            <p className={styles.pinfo}>
              As biomoléculas são constituídas principalmente por
              <span> carbono, hidrogênio, oxigênio, nitrogênio, fósforo e enxofre</span>.
              O carbono possui grande importância porque consegue formar
              diferentes tipos de ligações químicas e cadeias bastante
              variadas.
              <br /><br />
              A combinação desses elementos permite a formação de estruturas
              moleculares complexas, responsáveis por funções específicas
              dentro das células.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Biomoléculas e macromoléculas</h2>
            <p className={styles.pinfo}>
              As biomoléculas são substâncias presentes nos organismos vivos
              e podem apresentar diferentes tamanhos e funções. Entre as
              principais estão <span>proteínas, carboidratos, lipídios e ácidos nucleicos</span>.
              <br /><br />
              Algumas biomoléculas podem formar estruturas muito grandes,
              chamadas <span>macromoléculas</span>. Muitas delas são construídas
              a partir da união de unidades menores, chamadas monômeros,
              formando polímeros.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Condensação e hidrólise</h2>
            <p className={styles.pinfo}>
              A formação de muitas moléculas maiores ocorre por reações de
              <span> condensação</span> ou desidratação, nas quais unidades
              menores são unidas com a eliminação de uma molécula de água.
              <br /><br />
              O processo inverso é a <span>hidrólise</span>, na qual a água
              participa da quebra de ligações químicas, permitindo a formação
              de moléculas menores. Esses processos são importantes na
              formação e na degradação de diversas biomoléculas.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Proteínas</h2>
            <p className={styles.pinfo}>
              As proteínas são macromoléculas formadas por cadeias de
              aminoácidos unidos por ligações peptídicas. Elas desempenham
              inúmeras funções nos organismos, podendo atuar na estrutura
              das células, no transporte de substâncias, na defesa, na
              comunicação celular e na catalisação de reações químicas.
              <br /><br />
              A função de uma proteína está diretamente relacionada à sua
              estrutura tridimensional. Alterações nessa estrutura podem
              modificar ou até impedir sua atividade biológica.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Aminoácidos</h2>
            <p className={styles.pinfo}>
              Os aminoácidos são as unidades fundamentais que constituem
              as proteínas. Cada aminoácido possui um grupo amino, um grupo
              carboxila, um átomo de hidrogênio e uma cadeia lateral,
              chamada grupo R, ligada a um carbono central.
              <br /><br />
              Existem diferentes aminoácidos, e as características de suas
              cadeias laterais influenciam as propriedades e a organização
              das proteínas. Eles podem ser classificados, entre outros
              critérios, em essenciais e não essenciais.
            </p>

            <br />

            <Image
              src="/aminoacidoEstrutura.jpeg"
              width={400}
              height={400}
              alt="Estrutura de um aminoácido"
            />

            <br /><br />

            <Image
              src="/aminoacidos.webp"
              width={400}
              height={400}
              alt="Aminoácidos"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligação peptídica</h2>
            <p className={styles.pinfo}>
              Os aminoácidos podem ser unidos por meio de
              <span> ligações peptídicas</span>, formando cadeias chamadas
              peptídeos. Essa ligação ocorre entre o grupo carboxila de
              um aminoácido e o grupo amino de outro, com a eliminação
              de uma molécula de água.
              <br /><br />
              Quando uma cadeia apresenta muitos aminoácidos e assume uma
              organização específica, ela pode constituir uma proteína.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Níveis de organização das proteínas</h2>
            <p className={styles.pinfo}>
              A estrutura das proteínas pode ser analisada em quatro níveis.
              A <span>estrutura primária</span> corresponde à sequência de
              aminoácidos. A <span>estrutura secundária</span> envolve
              organizações locais da cadeia, como hélices e folhas.
              <br /><br />
              A <span>estrutura terciária</span> corresponde ao dobramento
              tridimensional de uma cadeia polipeptídica. Já a
              <span> estrutura quaternária</span> ocorre quando diferentes
              cadeias polipeptídicas se associam para formar uma estrutura
              funcional.
            </p>

            <br />

            <Image
              src="/estruturadasproteinas.webp"
              width={400}
              height={400}
              alt="Estrutura das proteínas"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Interações que estabilizam as proteínas</h2>
            <p className={styles.pinfo}>
              A organização tridimensional das proteínas depende de
              diferentes interações químicas. Entre elas estão as
              interações hidrofóbicas, interações iônicas ou eletrostáticas,
              pontes de hidrogênio e ligações dissulfeto.
              <br /><br />
              Essas interações ajudam a manter a conformação necessária
              para que a proteína desempenhe sua função corretamente.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Desnaturação das proteínas</h2>
            <p className={styles.pinfo}>
              A <span>desnaturação</span> ocorre quando alterações no ambiente
              provocam a perda da organização estrutural característica de
              uma proteína. Mudanças de temperatura, pH ou outras condições
              podem modificar as interações responsáveis pela manutenção
              de sua estrutura tridimensional.
              <br /><br />
              Como a função de uma proteína depende de sua forma, a
              desnaturação pode comprometer sua atividade biológica.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Lipídios</h2>
            <p className={styles.pinfo}>
              Os lipídios constituem um grupo diversificado de moléculas
              orgânicas. Participam do armazenamento de energia, da
              constituição das membranas celulares e de processos de
              sinalização e regulação.
              <br /><br />
              Entre os principais exemplos estão os ácidos graxos,
              triglicerídeos, fosfolipídios e esteroides. Muitos lipídios
              apresentam baixa solubilidade em água, característica
              relacionada à presença de regiões hidrofóbicas.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Ácidos graxos</h2>
            <p className={styles.pinfo}>
              Os ácidos graxos apresentam uma cadeia de carbonos associada
              a um grupo carboxila. Podem ser classificados em saturados
              ou insaturados de acordo com a presença ou ausência de
              ligações duplas entre os carbonos.
              <br /><br />
              Eles participam da formação de diferentes lipídios e podem
              ser utilizados como fonte de energia.
            </p>

            <br />

            <Image
              src="/acidoGraxo.webp"
              width={400}
              height={400}
              alt="Estrutura de um ácido graxo"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Fosfolipídios</h2>
            <p className={styles.pinfo}>
              Os fosfolipídios são moléculas <span>anfipáticas</span> que
              possuem uma região hidrofílica e regiões hidrofóbicas.
              Essa característica permite sua organização espontânea em
              estruturas como a bicamada lipídica.
              <br /><br />
              A bicamada de fosfolipídios forma a base estrutural das
              membranas celulares, contribuindo para separar o meio interno
              da célula do ambiente externo.
            </p>

            <br />

            <Image
              src="/fosfolipideo.webp"
              width={400}
              height={400}
              alt="Estrutura de um fosfolipídio"
            />

            <br /><br />
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Carboidratos</h2>
            <p className={styles.pinfo}>
              Os carboidratos são biomoléculas que desempenham funções
              principalmente energéticas e estruturais. Podem ser
              classificados em <span>monossacarídeos, oligossacarídeos e polissacarídeos</span>,
              de acordo com o número de unidades de açúcares presentes
              em sua estrutura.
              <br /><br />
              Glicose, sacarose, amido, glicogênio e celulose são exemplos
              de carboidratos encontrados nos organismos.
            </p>

            <br />

            <Image
              src="/classificacaoDosCarboidratos.webp"
              width={400}
              height={400}
              alt="Classificação dos carboidratos"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Monossacarídeos</h2>
            <p className={styles.pinfo}>
              Os monossacarídeos são os carboidratos mais simples e não
              podem ser hidrolisados em açúcares menores. Eles constituem
              unidades fundamentais para a formação de carboidratos mais
              complexos.
              <br /><br />
              A <span>glicose</span> é um dos principais exemplos e possui
              grande importância no metabolismo energético das células.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Oligossacarídeos</h2>
            <p className={styles.pinfo}>
              Os oligossacarídeos são formados pela união de um pequeno
              número de monossacarídeos. Suas unidades são mantidas por
              ligações específicas entre os açúcares.
              <br /><br />
              A sacarose, por exemplo, é formada pela união de glicose
              e frutose.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Polissacarídeos</h2>
            <p className={styles.pinfo}>
              Os polissacarídeos são moléculas maiores constituídas por
              muitas unidades de açúcares. Podem desempenhar funções de
              reserva energética ou funções estruturais nos organismos.
              <br /><br />
              Entre os exemplos mais conhecidos estão o amido, o glicogênio,
              a celulose e a quitina.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Amido</h2>
            <p className={styles.pinfo}>
              O amido é um polissacarídeo relacionado à reserva energética
              dos vegetais. Sua estrutura é formada por unidades de glicose
              organizadas em cadeias.
              <br /><br />
              Quando necessário, o amido pode ser degradado e liberar
              moléculas de glicose que podem ser utilizadas no metabolismo
              energético.
            </p>

            <br />

            <Image
              src="/amido.webp"
              width={400}
              height={400}
              alt="Estrutura do amido"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Glicogênio</h2>
            <p className={styles.pinfo}>
              O glicogênio é um polissacarídeo utilizado como forma de
              reserva de glicose nos animais. Sua estrutura apresenta
              muitas ramificações, permitindo que a glicose seja armazenada
              e mobilizada de maneira eficiente.
              <br /><br />
              Nos animais, o glicogênio é armazenado principalmente no
              fígado e nos músculos.
            </p>

            <br />

            <Image
              src="/glicogenioMolecula.png"
              width={400}
              height={400}
              alt="Molécula de glicogênio"
            />

            <br /><br />

            <Image
              src="/sinteseGlicogenio.png"
              width={400}
              height={400}
              alt="Síntese do glicogênio"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Celulose</h2>
            <p className={styles.pinfo}>
              A celulose é um polissacarídeo estrutural encontrado
              principalmente nos vegetais. Suas características estruturais
              permitem a formação de fibras resistentes que contribuem
              para a sustentação das células vegetais.
              <br /><br />
              Embora seja constituída por glicose, a organização das suas
              ligações faz com que a celulose apresente propriedades
              diferentes das do amido.
            </p>

            <br />

            <Image
              src="/celulose.webp"
              width={400}
              height={400}
              alt="Estrutura da celulose"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Quitina</h2>
            <p className={styles.pinfo}>
              A quitina é um polissacarídeo de função estrutural. Está
              presente no exoesqueleto de artrópodes, como insetos e
              crustáceos, e também participa da composição da parede
              celular dos fungos.
              <br /><br />
              Sua estrutura contribui para a resistência e proteção
              dessas estruturas biológicas.
            </p>

            <br />

            <Image
              src="/quitina.jpg"
              width={400}
              height={400}
              alt="Estrutura da quitina"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ácidos nucleicos</h2>
            <p className={styles.pinfo}>
              Os ácidos nucleicos são biomoléculas relacionadas ao
              armazenamento, transmissão e utilização das informações
              genéticas. Os principais são o <span>DNA</span> e o
              <span> RNA</span>.
              <br /><br />
              Essas moléculas são formadas por nucleotídeos e desempenham
              papel fundamental na hereditariedade e na produção de
              proteínas.
            </p>

            <br />

            <Image
              src="/DNDeRNA.webp"
              width={400}
              height={400}
              alt="DNA e RNA"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Nucleotídeos</h2>
            <p className={styles.pinfo}>
              Os nucleotídeos são as unidades fundamentais dos ácidos
              nucleicos. Cada nucleotídeo é constituído por uma
              <span> base nitrogenada, um açúcar e um ou mais grupos fosfato</span>.
              <br /><br />
              Além de participarem da composição do DNA e do RNA, alguns
              nucleotídeos desempenham outras funções importantes, como
              o ATP, relacionado à transferência de energia celular.
            </p>

            <br />

            <Image
              src="/estruturaNucleotideo.webp"
              width={400}
              height={400}
              alt="Estrutura de um nucleotídeo"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Bases nitrogenadas</h2>
            <p className={styles.pinfo}>
              As bases nitrogenadas fazem parte da estrutura dos
              nucleotídeos. No DNA, as principais bases são adenina,
              timina, citosina e guanina. No RNA, a timina é substituída
              pela uracila.
              <br /><br />
              As combinações específicas dessas bases permitem o
              armazenamento e a transmissão das informações genéticas.
            </p>

            <br />

            <Image
              src="/basesNitro.png"
              width={400}
              height={400}
              alt="Bases nitrogenadas"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>DNA e RNA</h2>
            <p className={styles.pinfo}>
              O DNA e o RNA apresentam diferenças estruturais e funcionais,
              mas ambos são formados por nucleotídeos. O <span>DNA</span>
              está associado ao armazenamento da informação genética,
              enquanto o <span>RNA</span> participa de diferentes etapas
              relacionadas à expressão dessas informações.
              <br /><br />
              A compreensão da estrutura do DNA foi uma das descobertas
              fundamentais para o desenvolvimento da Bioquímica e da
              Biologia Molecular.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Enzimas</h2>
            <p className={styles.pinfo}>
              As enzimas são catalisadores biológicos que participam das
              reações químicas celulares. Elas aumentam a velocidade das
              reações ao reduzir a energia de ativação necessária para que
              elas ocorram.
              <br /><br />
              A maioria das enzimas é formada por proteínas e apresenta
              alta especificidade em relação às moléculas sobre as quais
              atua. Dessa maneira, elas são fundamentais para a regulação
              do metabolismo.
            </p>

            <br />

            <Image
              src="/cataliseEnzimatica.webp"
              width={400}
              height={400}
              alt="Catálise enzimática"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Enzima, substrato e sítio ativo</h2>
            <p className={styles.pinfo}>
              O <span>substrato</span> é a molécula sobre a qual uma enzima
              atua. A interação ocorre em uma região específica da enzima
              chamada <span>sítio ativo</span>.
              <br /><br />
              O modelo do encaixe induzido explica que a interação entre
              enzima e substrato pode provocar mudanças na conformação da
              enzima, favorecendo a ocorrência da reação.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Metabolismo</h2>
            <p className={styles.pinfo}>
              O metabolismo corresponde ao conjunto de reações químicas
              que ocorre nas células. Essas reações permitem obter energia,
              sintetizar moléculas e manter as funções celulares.
              <br /><br />
              O metabolismo é geralmente dividido em duas grandes
              categorias: <span>catabolismo</span> e <span>anabolismo</span>.
              Embora tenham funções diferentes, os dois processos estão
              relacionados e ocorrem de forma integrada.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Catabolismo</h2>
            <p className={styles.pinfo}>
              O catabolismo corresponde às vias metabólicas responsáveis
              pela degradação de moléculas complexas em moléculas menores.
              Essas reações geralmente estão associadas à liberação de
              energia.
              <br /><br />
              A degradação de carboidratos, lipídios e proteínas pode
              fornecer moléculas que serão utilizadas em outras etapas
              do metabolismo energético.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Anabolismo</h2>
            <p className={styles.pinfo}>
              O anabolismo corresponde às vias de síntese de moléculas.
              Pequenas moléculas precursoras são reunidas para formar
              estruturas mais complexas, como proteínas, lipídios e
              ácidos nucleicos.
              <br /><br />
              Por exigir energia, o anabolismo depende de moléculas que
              fornecem energia e poder redutor, como ATP e NADPH.
            </p>

            <br />

            <Image
              src="/NADP.svg"
              width={400}
              height={400}
              alt="NADP e NADPH"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>ATP e energia celular</h2>
            <p className={styles.pinfo}>
              O ATP, ou adenosina trifosfato, é um nucleotídeo que atua
              como uma das principais formas de transferência de energia
              química na célula.
              <br /><br />
              A energia disponibilizada pela hidrólise do ATP pode ser
              utilizada em diferentes processos celulares, como síntese
              de moléculas, transporte ativo através das membranas e
              movimentos celulares.
            </p>

            <br />

            <Image
              src="/ATP.webp"
              width={400}
              height={400}
              alt="Molécula de ATP"
            />

            <br /><br />
          </div>

          <div className={styles.infoConfig}>
            <h2>Glicólise</h2>
            <p className={styles.pinfo}>
              A glicólise é uma via metabólica relacionada à degradação
              da glicose. Ela ocorre no citoplasma e consiste em uma
              sequência de reações que transforma uma molécula de glicose
              em duas moléculas de piruvato.
              <br /><br />
              Durante esse processo ocorre produção de ATP e redução de
              NAD+ em NADH. A glicólise pode ocorrer independentemente
              da presença direta de oxigênio.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Fermentação</h2>
            <p className={styles.pinfo}>
              A fermentação é um processo metabólico que permite a
              continuidade da glicólise em condições nas quais o oxigênio
              não está disponível para a respiração celular aeróbica.
              <br /><br />
              Nesse processo, o piruvato é convertido em outros produtos,
              como ácido lático ou etanol, dependendo do organismo e do
              tipo de fermentação. A fermentação permite a regeneração
              do NAD+, necessário para a continuidade da glicólise.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Ciclo de Krebs</h2>
            <p className={styles.pinfo}>
              O ciclo de Krebs, também denominado ciclo do ácido cítrico
              ou ciclo dos ácidos tricarboxílicos, constitui uma etapa
              central do metabolismo aeróbico.
              <br /><br />
              O acetil-CoA entra nessa via e seus carbonos são
              progressivamente oxidados, formando dióxido de carbono e
              produzindo coenzimas reduzidas, como <span>NADH e FADH2</span>,
              que posteriormente participam da cadeia respiratória.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Cadeia respiratória e fosforilação oxidativa</h2>
            <p className={styles.pinfo}>
              Na cadeia transportadora de elétrons, as coenzimas reduzidas
              NADH e FADH2 transferem elétrons para os componentes da
              cadeia. O fluxo desses elétrons está associado ao
              bombeamento de prótons e à formação de um gradiente
              eletroquímico.
              <br /><br />
              O <span>oxigênio molecular</span> atua como aceptor final de
              elétrons. A energia armazenada no gradiente de prótons é
              utilizada na fosforilação do ADP e na produção de ATP,
              com formação de água ao final do processo.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Respiração celular</h2>
            <p className={styles.pinfo}>
              A respiração celular é um conjunto de processos metabólicos
              utilizados para obter energia a partir de moléculas
              orgânicas. Em organismos aeróbicos, a glicose pode ser
              degradada por etapas que envolvem glicólise, ciclo de Krebs
              e cadeia respiratória.
              <br /><br />
              O objetivo central é aproveitar a energia química presente
              nos nutrientes para produzir <span>ATP</span>, molécula
              utilizada em diversos processos celulares.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Integração das vias metabólicas</h2>
            <p className={styles.pinfo}>
              As vias metabólicas de carboidratos, lipídios e proteínas
              estão integradas. Embora essas biomoléculas sejam degradadas
              inicialmente por diferentes vias, seus produtos podem
              convergir para intermediários comuns.
              <br /><br />
              O <span>acetil-CoA</span> constitui uma importante molécula
              de convergência e pode seguir para o ciclo de Krebs,
              contribuindo para a produção de energia celular. Essa
              integração permite que a célula adapte seu metabolismo de
              acordo com as necessidades energéticas e a disponibilidade
              de nutrientes.
            </p>
          </div>

          <br />

          <div className={styles.infoConfig}>
            <h2>Importância da Bioquímica</h2>
            <p className={styles.pinfo}>
              O conhecimento bioquímico é fundamental para compreender
              como os organismos funcionam em nível molecular. A área
              contribui para o estudo de doenças, medicamentos, nutrição,
              genética, metabolismo e funcionamento celular.
              <br /><br />
              Na <span>medicina</span>, a Bioquímica auxilia na compreensão
              de doenças metabólicas e no desenvolvimento de métodos
              diagnósticos e tratamentos. Na <span>biotecnologia</span>,
              permite utilizar organismos, células e moléculas para a
              produção de medicamentos, alimentos e outros produtos.
              <br /><br />
              A Bioquímica também possui aplicações na agricultura,
              na indústria e em diversas áreas de pesquisa científica,
              sendo essencial para compreender os processos que sustentam
              a vida.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}