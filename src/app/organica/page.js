import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Organica() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>

          <div className={styles.title}>
            <h3>Química Orgânica</h3>
          </div>

          <div className={styles.tituloSecao}>
            <h3>Nomenclatura IUPAC</h3>
            <p>Tabela</p>
          </div>

          <div className={styles.tabelas}>

            <table>
              <thead>
                <tr>
                  <th>Prefixo</th>
                  <th>Número de carbonos</th>
                </tr>
              </thead>

              <tbody>
                <tr><td>met</td><td>1</td></tr>
                <tr><td>et</td><td>2</td></tr>
                <tr><td>prop</td><td>3</td></tr>
                <tr><td>but</td><td>4</td></tr>
                <tr><td>pent</td><td>5</td></tr>
                <tr><td>hex</td><td>6</td></tr>
                <tr><td>hept</td><td>7</td></tr>
                <tr><td>oct</td><td>8</td></tr>
                <tr><td>non</td><td>9</td></tr>
                <tr><td>dec</td><td>10</td></tr>
                <tr><td>undec</td><td>11</td></tr>
                <tr><td>dodec</td><td>12</td></tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Infixo</th>
                  <th>Ligação</th>
                </tr>
              </thead>

              <tbody>
                <tr><td>an</td><td>Ligação simples</td></tr>
                <tr><td>en</td><td>Ligação dupla</td></tr>
                <tr><td>in</td><td>Ligação tripla</td></tr>
                <tr><td>dien</td><td>Duas ligações duplas</td></tr>
                <tr><td>diin</td><td>Duas ligações triplas</td></tr>
                <tr><td>trien</td><td>Três ligações duplas</td></tr>
                <tr><td>triin</td><td>Três ligações triplas</td></tr>
                <tr><td>enin</td><td>Uma ligação dupla e uma tripla</td></tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Sufixo</th>
                  <th>Função</th>
                </tr>
              </thead>

              <tbody>
                <tr><td>o</td><td>Hidrocarbonetos</td></tr>
                <tr><td>ol</td><td>Álcool</td></tr>
                <tr><td>al</td><td>Aldeído</td></tr>
                <tr><td>ona</td><td>Cetona</td></tr>
                <tr><td>óico</td><td>Ácido carboxílico</td></tr>
                <tr>
                  <td>Éster</td>
                  <td>[Nome do ácido]+oato de [nome do radical]+a</td>
                </tr>
                <tr><td>Amina</td><td>Amina</td></tr>
                <tr><td>Amida</td><td>Amida</td></tr>
                <tr><td>Ácido sulfônico</td><td>Sulfônico</td></tr>
                <tr>
                  <td>Éter</td>
                  <td>
                    Oficial: [Menor radical]+óxi+[Hidrocarboneto correspondente
                    ao maior radical]. Usual: Éter + nome dos radicais em
                    ordem alfabética terminados em -ico.
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className={styles.infoConfig}>
            <h2>Introdução à Química Orgânica</h2>
            <p className={styles.pinfo}>
              <br></br><br></br>

              A Química Orgânica é o ramo da química que estuda os <span>compostos de carbono</span>,
              também chamados de compostos orgânicos. Esses compostos são
              formados principalmente por átomos de carbono e podem apresentar
              outros elementos, como hidrogênio, oxigênio, nitrogênio,
              fósforo e enxofre. Entre os exemplos de compostos orgânicos
              estão as proteínas, os <span>glicídios, os lipídios, as vitaminas
                e as enzimas.</span> (veja <Link href="/bioquimica" className={styles.link}>Bioquímica</Link>)

              <br></br><br></br>

              O estudo da Química Orgânica começou a se desenvolver
              em meados do século XVIII, quando se acreditava que
              os compostos orgânicos só poderiam ser produzidos por
              organismos vivos. Essa ideia estava relacionada à Teoria
              da Força Vital, segundo a qual as substâncias orgânicas
              não poderiam ser sintetizadas em laboratório porque
              somente os seres vivos possuíam a energia necessária
              para produzi-las.

              <br></br><br></br>

              Essa concepção foi questionada em 1828, quando o químico
              alemão Friedrich Wöhler sintetizou ureia em laboratório
              a partir do cianato de amônio, um composto considerado
              inorgânico. O experimento demonstrou que <span>uma substância
                orgânica poderia ser produzida artificialmente, </span>
              enfraquecendo a Teoria da Força Vital. A partir
              disso, a Química Orgânica passou a ser definida
              principalmente como o ramo da química dedicado ao
              estudo dos compostos de carbono.

              <br></br><br></br>


            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Propriedades do Carbono</h2>
            <p className={styles.pinfo}>
              O carbono é o principal elemento dos compostos orgânicos.
              Ele possui número atômico 6 e massa atômica
              aproximadamente igual a 12. Sua distribuição eletrônica
              é 1s² 2s² 2p², apresentando quatro elétrons na camada
              de valência. Por isso, <span>o carbono pode realizar até
                quatro ligações covalentes,</span> formando uma grande
              variedade de compostos.

              <br></br><br></br>

              Uma das principais características do carbono é sua
              capacidade de <span>se ligar a outros átomos de carbono,
                formando cadeias curtas ou longas e com diferentes
                disposições. </span>Essa propriedade permite a existência
              de uma enorme diversidade de compostos orgânicos.

              <br></br><br></br>

              O carbono também pode ser classificado de acordo com a
              quantidade de outros átomos de carbono aos
              quais está ligado. É chamado de
              <span> primário</span> quando está
              ligado a um carbono,
              <span> secundário</span> quando está
              ligado a dois,
              <span> terciário</span> quando está
              ligado a três e
              <span> quaternário</span> quando está
              ligado a quatro átomos de carbono.

              <br></br><br></br>

              As <span>cadeias carbônicas</span> são estruturas formadas por átomos
              de carbono ligados entre si, podendo também apresentar outros elementos.
              Elas podem ser classificadas de acordo com sua estrutura e com os tipos
              de ligações presentes.

              <br></br><br></br>

              Quanto à forma, as cadeias podem ser <span>abertas</span>,
              quando possuem extremidades livres; <span>fechadas</span>,
              quando os átomos de carbono formam um ciclo; ou <span>mistas</span>,
              quando apresentam simultaneamente uma parte aberta e outra fechada.

              <br></br><br></br>

              As cadeias também podem ser classificadas como
              <span> homogêneas</span> ou <span>heterogêneas</span>.
              Uma cadeia homogênea não apresenta <span>heteroátomos </span>
              entre os carbonos da cadeia principal, enquanto uma cadeia
              heterogênea possui um heteroátomo, como oxigênio, nitrogênio
              ou enxofre, inserido na cadeia.

              <br></br><br></br>

              Quanto aos tipos de ligação, as cadeias são consideradas
              <span> saturadas</span> quando apresentam apenas ligações
              simples entre os átomos de carbono. Já as
              <span> insaturadas</span> possuem pelo menos
              uma ligação dupla ou tripla entre carbonos.

              <br></br><br></br>

              As <span>funções orgânicas</span> são grupos de compostos
              que apresentam propriedades químicas semelhantes. Elas são
              identificadas pela presença de determinados <span>grupos
                funcionais</span>, que influenciam as características e
              o comportamento das substâncias.

              <br></br><br></br>

              Entre as principais funções orgânicas estão as
              <span> funções nitrogenadas</span>,
              que apresentam nitrogênio na estrutura,
              como aminas, amidas, nitrilas e nitrocompostos;
              as <span>funções oxigenadas</span>, que possuem
              oxigênio, como aldeídos, cetonas, ácidos carboxílicos,
              ésteres, éteres, fenóis e álcoois; e as <span>funções
                halogenadas</span>, que apresentam elementos da família
              dos halogênios, como flúor, cloro, bromo, iodo e astato.

              <br></br><br></br>

              Também existem as <span>funções hidrogenadas</span>,
              representadas principalmente pelos
              <span>hidrocarbonetos</span>, que são compostos formados
              apenas por carbono e hidrogênio. Entre eles estão
              os alcanos, alcenos, alcinos, alcadienos,
              cicloalcanos e cicloalcenos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Tetravalência</h2>
            <p className={styles.pinfo}>
              O carbono tem <span>quatro elétrons em sua última camada
                (camada de valência). </span>
              Para ficar estável e seguir a regra do octeto, ele precisa compartilhar
              quatro elétrons. Isso faz com que ele crie sempre <span>quatro ligações
                químicas.</span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Capacidade de Formar Cadeias</h2>
            <p className={styles.pinfo}>
              Os átomos de carbono possuem a capacidade de se agrupar,
              formando estruturas chamadas de
              <span> cadeias carbônicas</span>.
              Essa capacidade é a principal responsável
              pela existência de milhões de
              <span>compostos orgânicos</span>.

              <br></br><br></br>

              Uma cadeia de carbono pode possuir, além de átomos de carbono,
              átomos de outros elementos, que podem estar inseridos entre
              os átomos de carbono. Os elementos que aparecem com maior
              frequência nas cadeias carbônicas são o oxigênio (O), o
              nitrogênio (N), o enxofre (S) e o fósforo (P). Nesse contexto,
              esses átomos são chamados de <span>heteroátomos</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações Simples, Duplas e Triplas</h2>

            <p className={styles.pinfo}>
              Uma ligação covalente pelo modelo do <span>orbital molecular</span> forma-se
              pela interpenetração de um orbital semicheio do átomo A com um orbital
              semicheio do átomo B, que possuem elétrons de spins contrários. Dessa
              interpenetração, resulta um <span>orbital molecular</span> contendo um par
              eletrônico compartilhado.

              <br></br><br></br>

              A interpenetração entre dois orbitais atômicos pode ocorrer de forma linear,
              quando eles pertencem a um mesmo eixo, formando uma <span>ligação sigma (σ)</span>,
              ou de forma paralela, quando pertencem a eixos paralelos, formando uma
              <span>ligação pi (π)</span>.

              <br></br><br></br>

              A <span>ligação sigma (σ)</span> está presente em ligações simples, duplas
              e triplas. Já a <span>ligação pi (π)</span> ocorre apenas em ligações duplas
              ou triplas. As ligações pi dependem das ligações sigma, portanto, uma ou
              duas ligações pi sempre estarão acompanhadas de uma ligação sigma.

              <br></br><br></br>

              Em uma <span>ligação simples</span>, há uma ligação sigma. Em uma
              <span> ligação dupla</span>, há uma ligação sigma e uma ligação pi. Já em
              uma <span>ligação tripla</span>, há uma ligação sigma e duas ligações pi.

              <br></br><br></br>

              <span>A – B</span> → uma ligação σ
              <br></br>
              <span>A = B</span> → uma ligação σ e uma ligação π
              <br></br>
              <span>A ≡ B</span> → uma ligação σ e duas ligações π
            </p>
            <br></br><br></br>
            <Image
              src="/orbitalSigma.png"
              alt="Alcanos"
              width={500}
              height={200}
            />
            <br></br><br></br>
            <Image
              src="/orbitalPi.png"
              alt="Alcanos"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Classificação das Cadeias Carbônicas</h2>
            <p className={styles.pinfo}>
              As cadeias carbônicas são classificadas em quatro
              critérios principais: <span>quanto ao
                fechamento (aberta ou fechada), tipo
                de ligação (saturada ou insaturada),
                presença de heteroátomo (homogênea
                ou heterogênea) e disposição dos
                carbonos (normal ou ramificada)</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Abertas, Fechadas e Mistas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>abertas</span>, também chamadas de acíclicas ou alifáticas,
              possuem duas ou mais extremidades e não apresentam ciclos ou anéis aromáticos.

              <br></br><br></br>

              As cadeias <span>fechadas</span>, também chamadas de cíclicas, possuem os
              átomos de carbono ligados de modo a formar um ou mais ciclos, não apresentando
              extremidades livres.

              <br></br><br></br>

              Já as cadeias <span>mistas</span> apresentam simultaneamente uma parte aberta,
              com pelo menos uma extremidade, e uma parte cíclica.
            </p>
            <br></br><br></br>
            <Image
              src="/AFeM.png"
              alt="Exemplos de cadeias normais e ramificadas"
              width={600}
              height={400}
            />

          </div>
          <br></br><br></br>
          <div className={styles.infoConfig}>
            <h2>Normais e Ramificadas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>normais</span>, também conhecidas como retas ou lineares,
              apresentam apenas duas extremidades e não possuem ramificações em sua estrutura.

              <br></br><br></br>

              As cadeias <span>ramificadas</span> possuem mais de duas extremidades,
              apresentando uma ou mais ramificações ao longo da cadeia principal.
            </p>
            <br></br><br></br>
            <Image
              src="/NeR.png"
              alt="Exemplos de cadeias normais e ramificadas"
              width={600}
              height={400}
            />
            <br></br><br></br>
          </div>

          <div className={styles.infoConfig}>
            <h2>Homogêneas e Heterogêneas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>homogêneas</span> não apresentam átomos de outros elementos
              entre os átomos de carbono que formam a cadeia.

              <br></br><br></br>

              Já as cadeias <span>heterogêneas</span> possuem pelo menos um átomo de outro
              elemento entre dois átomos de carbono. Esse átomo é chamado de
              <span> heteroátomo</span>, sendo comuns elementos como oxigênio, nitrogênio,
              enxofre e fósforo.
            </p>
            <br></br><br></br>
            <Image
              src="/HetHomo.png"
              alt="Exemplos de cadeias homogêneas e heterogêneas"
              width={450}
              height={400}
            />
          </div>
          <br></br><br></br>
          <div className={styles.infoConfig}>
            <h2>Saturadas e Insaturadas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>saturadas</span> apresentam somente ligações simples entre
              os átomos de carbono.

              <br></br><br></br>

              As cadeias <span>insaturadas</span>, por outro lado, possuem pelo menos uma
              ligação dupla ou tripla entre átomos de carbono.
            </p>
            <br></br><br></br>
            <Image
              src="/SeIn.png"
              alt="Exemplos de cadeias saturadas e insaturadas"
              width={450}
              height={400}
            />
            <br></br><br></br>
          </div>

          <div className={styles.infoConfig}>
            <h2>Aromáticas e Não Aromáticas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>aromáticas</span> são aquelas que possuem pelo menos um
              <span>anel benzênico</span> em sua estrutura. O anel benzênico é formado
              por seis átomos de carbono organizados em um ciclo com ligações conjugadas.

              <br></br><br></br>

              As cadeias <span>não aromáticas</span> não apresentam anel benzênico em
              sua estrutura.
            </p>
            <br></br><br></br>
            <Image
              src="/AroNaro.png"
              alt="Exemplos de cadeias aromáticas e não aromáticas"
              width={450}
              height={400}
            />
          </div>
          <br></br><br></br>
          <div className={styles.infoConfig}>
            <h2>Carbono Primário</h2>
            <p className={styles.pinfo}>
              Um <span>carbono primário</span> é aquele que está ligado a, no máximo, um
              outro átomo de carbono na estrutura orgânica. Um carbono que não está ligado
              a nenhum outro carbono, como o carbono do metano, também pode ser
              classificado como primário. Porém, alguns autores utilizam o termo
              <span> carbono nulário</span> para esse caso.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Secundário</h2>
            <p className={styles.pinfo}>
              O <span>carbono secundário</span> é aquele que está diretamente ligado a
              dois outros átomos de carbono em uma cadeia carbônica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Terciário</h2>
            <p className={styles.pinfo}>
              O <span>carbono terciário</span> é aquele que está diretamente ligado a
              três outros átomos de carbono em uma cadeia carbônica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Quaternário</h2>
            <p className={styles.pinfo}>
              O <span>carbono quaternário</span> é aquele que está diretamente ligado a
              quatro outros átomos de carbono em uma cadeia carbônica.
            </p>

            <Image
              src="/nDec.webp"
              alt="Exemplo de carbono quaternário"
              width={400}
              height={400}
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Molecular</h2>
            <p className={styles.pinfo}>
              A <span>fórmula molecular</span> indica quais elementos formam uma
              substância e a quantidade de átomos de cada elemento presente em uma
              molécula, chamada de <span>atomicidade</span>. Os símbolos dos elementos
              são acompanhados por números subscritos que indicam suas quantidades.
              <br /><br />
              Por exemplo, a água é formada por dois átomos de hidrogênio e um de
              oxigênio, sendo representada por <span>H₂O</span>. O número 2 indica os
              dois átomos de hidrogênio, enquanto o oxigênio não precisa de índice por
              possuir apenas um átomo.
              <br /><br />
              O etanol, por sua vez, possui dois átomos de carbono, seis de hidrogênio e
              um de oxigênio, apresentando a fórmula <span>C₂H₆O</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Estrutural</h2>
            <p className={styles.pinfo}>
              A <span>fórmula estrutural</span> representa como os átomos de uma molécula
              estão conectados por meio de suas ligações químicas. Ela permite observar
              a organização dos átomos, os tipos de ligações presentes e algumas
              características estruturais da molécula.
              <br /><br />
              Essa representação está relacionada à <span>estrutura de Lewis</span>,
              desenvolvida por Gilbert N. Lewis para explicar as ligações covalentes.
              Nela, os elétrons de valência são representados por pontos ao redor dos
              símbolos dos elementos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Estrutural Condensada</h2>
            <p className={styles.pinfo}>
              A <span>fórmula estrutural condensada</span> simplifica a representação de
              uma molécula agrupando os átomos de hidrogênio junto aos respectivos
              átomos de carbono. A quantidade de hidrogênios de cada grupo é indicada
              por um índice.
              <br /><br />
              Esse modelo permite representar estruturas orgânicas de maneira mais
              compacta, sem precisar desenhar individualmente todas as ligações entre
              carbono e hidrogênio.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Estrutural em Bastão</h2>
            <p className={styles.pinfo}>
              A <span>fórmula estrutural em bastão</span> é uma forma simplificada de
              representar estruturas orgânicas. Nessa representação, as ligações
              químicas são desenhadas como linhas, enquanto os átomos de
              <span> carbono e hidrogênio</span> geralmente são omitidos.
              <br /><br />
              Os carbonos são considerados nos vértices e nas extremidades das linhas.
              Já átomos diferentes de carbono e hidrogênio, como <span>oxigênio</span>
              e <span>nitrogênio</span>, são representados normalmente.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria</h2>
            <p className={styles.pinfo}>
              <span>Isomeria</span> é o fenômeno em que duas ou mais substâncias possuem
              a mesma fórmula molecular, mas apresentam estruturas diferentes e, por
              consequência, podem possuir propriedades físicas e químicas distintas.
              Essas substâncias são chamadas de <span>isômeros</span>.
              <br /><br />
              A isomeria pode ser dividida em <span>isomeria plana</span>, também chamada
              de constitucional, e <span>isomeria espacial</span>, ou
              estereoisomerismo.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria Espacial</h2>
            <p className={styles.pinfo}>
              A <span>isomeria espacial</span>, ou estereoisomerismo, ocorre quando os
              isômeros possuem a mesma conectividade entre os átomos, mas diferem no
              <span> arranjo espacial</span> de seus ligantes.
              <br /><br />
              Entre seus principais tipos estão a <span>isomeria geométrica</span>,
              relacionada aos casos cis-trans e E-Z, e a
              <span> isomeria óptica</span>, relacionada à quiralidade e aos
              enantiômeros.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria Geométrica</h2>
            <p className={styles.pinfo}>
              A <span>isomeria geométrica</span>, também chamada de isomeria cis-trans,
              ocorre quando não existe rotação livre em determinada ligação carbono-
              carbono. Isso pode acontecer em uma <span>ligação dupla</span> de alcenos
              ou em uma estrutura cíclica, como nos cicloalcanos.
              <br /><br />
              Quando os grupos de referência estão do mesmo lado, utiliza-se o
              estereodescritor <span>cis</span>. Quando estão em lados opostos,
              utiliza-se <span>trans</span>.
              <br /><br />
              Nos casos em que cis e trans não são suficientes, utiliza-se a regra de
              <span> Cahn-Ingold-Prelog (CIP)</span>. Os ligantes de maior prioridade
              determinam os estereodescritores <span>Z</span>, quando estão do mesmo
              lado, e <span>E</span>, quando estão em lados opostos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria Óptica</h2>
            <p className={styles.pinfo}>
              A <span>isomeria óptica</span> ocorre quando moléculas apresentam
              atividade óptica, ou seja, são capazes de desviar o plano da
              <span> luz polarizada</span>.
              <br /><br />
              Ela está relacionada à presença de elementos de <span>quiralidade</span>,
              como um carbono quiral. As estruturas resultantes podem ser imagens
              especulares não sobreponíveis umas das outras.
              <br /><br />
              Os enantiômeros que desviam a luz para a esquerda são chamados de
              <span> levogiros</span>, representados por l ou −. Os que desviam para a
              direita são chamados de <span>dextrogiros</span>, representados por d ou +.
              Essa característica é determinada experimentalmente e não pode ser
              identificada apenas observando a estrutura molecular.
            </p>
          </div>
          <div className={styles.infoConfig}>
            <h2>Isomeria Plana</h2>
            <p className={styles.pinfo}>
              A <span>isomeria plana</span>, ou constitucional, ocorre quando os
              isômeros apresentam diferenças perceptíveis na forma como seus átomos
              estão conectados na fórmula estrutural.
              <br /><br />
              Ela pode ser classificada em <span>isomeria de função</span>, quando os
              compostos pertencem a funções orgânicas diferentes; <span>isomeria de
                posição</span>, quando muda a posição de um grupo funcional, insaturação
              ou ramificação; e <span>isomeria de cadeia</span>, quando ocorre mudança
              no tipo de cadeia carbônica.
              <br /><br />
              Também existem a <span>isomeria de compensação</span>, na qual ocorre
              alteração na distribuição das cadeias ao redor de um heteroátomo, e a
              <span> tautomeria</span>, em que dois isômeros coexistem em equilíbrio e
              podem se transformar um no outro.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria de Função</h2>
            <p className={styles.pinfo}>
              Na <span>isomeria de função</span>, os isômeros possuem a mesma fórmula
              molecular, mas pertencem a <span>funções orgânicas diferentes</span>.
              Alguns exemplos são os pares entre álcoois e éteres, aldeídos e cetonas,
              e ácidos carboxílicos e ésteres.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria de Posição</h2>
            <p className={styles.pinfo}>
              Na <span>isomeria de posição</span>, os compostos possuem a mesma função
              orgânica e a mesma cadeia básica, mas apresentam diferença na posição de
              um <span>grupo funcional</span>, de uma <span>insaturação</span> ou de
              uma <span>ramificação</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria de Cadeia</h2>
            <p className={styles.pinfo}>
              A <span>isomeria de cadeia</span> ocorre quando os isômeros possuem
              diferentes tipos de cadeia carbônica, mantendo a mesma fórmula molecular.
              A diferença pode envolver, por exemplo, uma cadeia normal e uma cadeia
              ramificada ou diferentes formas de organização da cadeia.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria de Compensação</h2>
            <p className={styles.pinfo}>
              Na <span>isomeria de compensação</span>, também chamada de metameria,
              ocorre uma alteração na distribuição das cadeias carbônicas ao redor de
              um <span>heteroátomo</span>, mantendo-se a mesma função orgânica e a
              mesma fórmula molecular.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Tautomeria</h2>
            <p className={styles.pinfo}>
              A <span>tautomeria</span> é um tipo de isomeria em que dois isômeros,
              chamados de tautômeros, coexistem em equilíbrio e podem se transformar
              um no outro.
              <br /><br />
              Um exemplo é o equilíbrio entre a forma <span>aldeído e enol</span>,
              chamado de equilíbrio aldo-enólico, e entre <span>cetona e enol</span>,
              chamado de equilíbrio ceto-enólico.
            </p>
          </div>
          <div className={styles.infoConfig}>
            <h2>Carbono Quiral</h2>
            <p className={styles.pinfo}>
              Um <span>carbono quiral</span>, ou assimétrico, é um átomo de carbono
              ligado a quatro ligantes diferentes entre si por ligações simples.
              <br /><br />
              Como realiza apenas ligações simples, esse carbono apresenta
              <span> hibridização sp³</span> e geometria <span>tetraédrica</span>.
              Moléculas quirais não podem ser sobrepostas às suas imagens especulares e,
              geralmente, não possuem plano de simetria.
              <br /><br />
              Para identificar um carbono quiral, é necessário verificar se ele possui
              quatro grupos diferentes ligados a ele. Esses grupos devem ser analisados
              considerando toda a estrutura do ligante, e não apenas o átomo diretamente
              conectado ao carbono.
              <br /><br />
              O carbono quiral pode ser encontrado tanto em <span>cadeias abertas</span>
              quanto em <span>cadeias fechadas</span>. Em representações químicas, é
              comum indicar esse carbono com um <span>asterisco (*)</span>.
              <br /><br />
              A identificação do carbono quiral é importante porque a presença de
              centros quirais pode originar <span>isomeria óptica</span>. Os diferentes
              enantiômeros podem apresentar atividades fisiológicas distintas no
              organismo.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Enantiômeros</h2>
            <p className={styles.pinfo}>
              <span>Enantiômeros</span> são estereoisômeros que possuem estruturas
              assimétricas e são imagens especulares uma da outra, mas não podem ser
              sobrepostas.
              <br /><br />
              Essa relação pode ser comparada às <span>mãos direita e esquerda</span>:
              elas são imagens especulares, possuem a mesma composição, mas não podem
              ser perfeitamente sobrepostas.
              <br /><br />
              Os enantiômeros podem apresentar comportamentos diferentes em sistemas
              biológicos, pois seus organismos podem reconhecer cada uma das formas de
              maneira distinta. Um exemplo é a <span>adrenalina</span>, cujos
              enantiômeros apresentam diferentes níveis de atividade biológica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Diastereoisômeros</h2>
            <p className={styles.pinfo}>
              <span>Diastereoisômeros</span> são estereoisômeros que não são imagens
              especulares uns dos outros. Assim como os enantiômeros, possuem a mesma
              conectividade entre os átomos, mas diferem no <span>arranjo espacial</span>
              de seus ligantes.
              <br /><br />
              Uma diferença importante é que, enquanto os enantiômeros são imagens
              especulares entre si, os diastereoisômeros <span>não possuem essa relação
                de imagem no espelho</span>. Eles podem apresentar propriedades físicas e
              químicas diferentes.
              <br /><br />
              Em determinados casos, os diastereoisômeros podem ser classificados como
              <span> cis</span> ou <span>trans</span>, de acordo com a posição dos
              substituintes na molécula.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Funções Orgânicas</h2>
            <p className={styles.pinfo}>
              As <span>funções orgânicas</span> são grupos de compostos que apresentam
              propriedades químicas semelhantes devido à presença de determinados
              átomos ou grupos de átomos em suas estruturas.
              <br /><br />
              Esses conjuntos de átomos são chamados de <span>grupos funcionais</span>
              e influenciam diretamente a forma como as moléculas reagem e interagem
              com outras substâncias.
              <br /><br />
              Por exemplo, o grupo <span>hidroxila (–OH)</span>, quando ligado a um
              carbono saturado, caracteriza a função álcool. Já o grupo
              <span> carboxila (–COOH)</span> caracteriza os ácidos carboxílicos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hibridização</h2>
            <p className={styles.pinfo}>
              A <span>hibridização</span> é a combinação de orbitais atômicos para formar
              novos orbitais híbridos, capazes de participar de ligações químicas. Esse
              conceito ajuda a explicar a <span>geometria molecular</span> e as
              características das ligações.
              <br /><br />
              No carbono, a hibridização ocorre pela reorganização de seus elétrons de
              valência, permitindo a formação de diferentes tipos de ligações. Os
              principais tipos são <span>sp, sp² e sp³</span>.
              <br /><br />
              A <span>hibridização sp³</span> resulta em quatro orbitais híbridos e
              geometria tetraédrica, como no metano (CH₄). A
              <span> hibridização sp²</span> forma três orbitais híbridos e apresenta
              geometria trigonal plana, como no eteno (C₂H₄). Já a
              <span> hibridização sp</span> forma dois orbitais híbridos e apresenta
              geometria linear, como no acetileno (C₂H₂).
              <br /><br />
              Uma maneira de determinar a hibridização é observar a quantidade de
              regiões de densidade eletrônica ao redor do átomo: <span>2 regiões</span>
              correspondem a sp, <span>3 regiões</span> a sp² e
              <span>4 regiões</span> a sp³.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cadeias Conjugadas/Alternadas</h2>
            <p className={styles.pinfo}>
              Na química orgânica, cadeias alternadas
              (mais comumente conhecidas como cadeias
              conjugadas) são cadeias carbônicas que
              apresentam uma <span>alternância regular
                entre ligações duplas (ou triplas)
                e ligações simples.</span> Esse arranjo
              permite um fenômeno chamado
              ressonância, onde os elétrons
              pi (π) não ficam presos a apenas
              dois átomos, mas se movem
              livremente por toda a extensão
              do sistema conjugado <span>(elétrons
                deslocalizados).</span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hidrocarbonetos</h2>
            <p className={styles.pinfo}>
              São compostos orgânicos constituídos exclusivamente por{" "}
              <span>carbono e hidrogênio</span>. Entre os principais grupos
              estão alcanos, alcenos, alcinos, alcadienos, alcadiinos,
              cicloalcanos, cicloalcenos e alceninos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Alcanos</h2>
            <p className={styles.pinfo}>
              Os alcanos são <span>hidrocarbonetos saturados</span>, conhecidos
              também como parafinas. Quando possuem cadeia aberta, apresentam
              fórmula geral característica dos compostos saturados. São
              encontrados principalmente no petróleo e sua combustão é uma
              importante fonte de energia.
            </p>
            <br></br><br></br>
            <Image
              src="/parafina.webp"
              alt="Alcanos"
              width={400}
              height={200}
            />
            <br></br><br></br>
            <p className={styles.pinfo}>
              A nomenclatura orgânica pode ser entendida pela combinação de
              elementos que indicam a posição dos substituintes, a quantidade
              de carbonos da cadeia principal e a função química. Para os
              alcanos, utiliza-se o sufixo <span>-ano</span>. (ver a tabela de nomenclatura do início da página)
            </p>
            <br></br>
            <Image
              src="/divaTriva.webp"
              alt="Exemplos de nomenclatura de alcanos ramificados"
              width={400}
              height={400}
            />
            <Image
              src="/radLivre.webp"
              alt="Exemplos de nomenclatura de alcanos ramificados"
              width={400}
              height={400}
            />
            <Image
              src="/radBiva.webp"
              alt="Exemplos de nomenclatura de alcanos ramificados"
              width={400}
              height={400}
            />
            <Image
              src="/radEx.webp"
              alt="Exemplos de nomenclatura de alcanos ramificados"
              width={400}
              height={400}
            />
            <br></br>
            <p className={styles.pinfo}>
              Em cadeias ramificadas, primeiro é necessário identificar a
              <span> cadeia principal</span>, que corresponde à maior sequência
              contínua de carbonos. Caso existam duas cadeias com o mesmo
              tamanho, deve-se escolher aquela que apresenta maior número de
              ramificações.
            </p>
            <br></br>
            <p className={styles.pinfo}>
              Depois, a cadeia principal deve ser numerada a partir da
              extremidade mais próxima da primeira ramificação. Os substituintes
              são identificados e recebem nomes terminados em
              <span>-il</span>, acompanhados do número que indica sua posição.
            </p>


            <br></br>
            <p className={styles.pinfo}>
              Na formação do nome, utiliza-se <span>hífen</span> para separar
              letras e números e vírgula para separar números. Os substituintes
              aparecem em ordem alfabética e recebem prefixos de quantidade
              quando necessário.
            </p>
            <br></br><br></br>
            <Image
              src="/cadeiaEx.webp"
              alt="Exemplos de radicais orgânicos"
              width={500}
              height={300}
              className={styles.fundoParaImagem}
            />
            <br></br><br></br>
            <p className={styles.pinfo}>
              Quando o substituinte possui sua própria ramificação, ele deve
              ser nomeado como uma estrutura independente. Nesses casos,
              utilizam-se prefixos como <span>bis-, tris- e tetraquis-</span>{" "}
              quando o mesmo substituinte complexo aparece várias vezes.
              <br></br><br></br>
              Exemplo: Se você tem dois grupos "dimetilamina",
              o nome se torna bis(dimetilamina).
              Se usássemos "di", ficaria didimetilamina, o que soa confuso.
              <br></br><br></br>
              Difosfato (ou pirofosfato): Significa que os dois grupos fosfato estão
              ligados entre si (como no ADP).
              <br></br><br></br>
              Bis(fosfato): Significa que existem dois
              grupos fosfato na molécula, mas eles estão ligados a átomos diferentes
              (como na Frutose-1,6-bis(fosfato)).
            </p>
            <br></br><br></br>
            <Image
              src="/futoseBisFosfato.svg"
              alt="Exemplo de radical alquila ramificado"
              width={300}
              height={300}
              className={styles.fundoParaImagem}
            />
            <Image
              src="/rami.jpeg"
              alt="Exemplo de radical alquila ramificado"
              width={300}
              height={500}
            />

            <p className={styles.pinfo}>
              Os prefixos <span>sec-</span> e <span>terc-</span> não são
              considerados na ordem alfabética. Já <span>iso-</span> e{" "}
              <span>neo-</span> são considerados. A IUPAC, entretanto, não
              recomenda o uso desses prefixos em nomenclaturas sistemáticas.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Alcenos</h2>
            <p className={styles.pinfo}>
              Alcenos são <span>hidrocarbonetos alifáticos insaturados</span>,
              conhecidos tradicionalmente como olefinas. Possuem pelo menos uma
              ligação dupla entre átomos de carbono. Quando apresentam duas ou
              mais ligações duplas, recebem denominações como dienos e trienos.
            </p>
            <br></br><br></br>
            <Image
              src="/alalal.webp"
              alt="Exemplos de alcadienos"
              width={500}
              height={300}
            />
            <br></br><br></br>
            <p className={styles.pinfo}>
              O sufixo utilizado é <span>-eno</span>. Para duas ligações duplas,
              utiliza-se <span>-dieno</span>; para três, <span>-trieno</span>.
              A cadeia principal deve conter a ligação dupla e a numeração
              começa pela extremidade mais próxima dessa ligação.
            </p>

            <p className={styles.pinfo}>
              A posição da ligação dupla é indicada pelo número do primeiro
              carbono envolvido na ligação.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Alcinos</h2>
            <p className={styles.pinfo}>
              Os alcinos são <span>hidrocarbonetos alifáticos insaturados</span>{" "}
              que apresentam pelo menos uma ligação tripla. Sua nomenclatura é
              semelhante à dos alcenos, mas utiliza o sufixo{" "}
              <span>-ino</span>.
            </p>

            <p className={styles.pinfo}>
              O carbono envolvido na ligação tripla apresenta geometria linear.
              Quando a ligação tripla está em uma extremidade da cadeia, temos
              um alcino terminal, que apresenta caráter ácido e pode formar
              sais.
            </p>

          </div>

          <div className={styles.infoConfig}>
            <h2>Alceninos</h2>
            <p className={styles.pinfo}>
              Os alceninos, também chamados de eninos, possuem simultaneamente
              uma <span>ligação dupla e uma ligação tripla</span> na cadeia
              carbônica.
            </p>

            <p className={styles.pinfo}>
              A cadeia principal deve conter as duas ligações múltiplas. A
              numeração começa pela extremidade mais próxima de uma delas. Caso
              exista empate entre as duas extremidades, a ligação dupla recebe
              prioridade para determinar a numeração.
            </p>

          </div>

          <div className={styles.infoConfig}>
            <h2>Cicloalcanos e Cicloalcenos</h2>
            <p className={styles.pinfo}>
              Os cicloalcanos, ou ciclanos, são{" "}
              <span>hidrocarbonetos alicíclicos saturados</span>. Sua
              nomenclatura segue as regras dos alcanos, acrescentando-se o
              prefixo <span>ciclo-</span>.
            </p>
            <br></br><br></br>
            <Image
              src="/cicloCiclo.webp"
              alt="Exemplos de cicloalcanos"
              width={650}
              height={300}
            />
            <br></br><br></br>
            <p className={styles.pinfo}>
              Já os cicloalcenos, também chamados de ciclenos, são{" "}
              <span>hidrocarbonetos alicíclicos insaturados</span>, contendo
              pelo menos uma ligação dupla. Sua nomenclatura é semelhante à dos
              alcenos, também com o acréscimo do prefixo <span>ciclo-</span>.
            </p>

          </div>

          <div className={styles.infoConfig}>
            <h2>Hidrocarbonetos Aromáticos</h2>
            <p className={styles.pinfo}>
              Os hidrocarbonetos aromáticos recebem seus nomes a partir de
              compostos de referência, como <span>benzeno</span> e{" "}
              <span>naftaleno</span>. No anel benzênico, o círculo central
              representa a ressonância e é equivalente à representação com
              ligações duplas alternadas.
            </p>

            <p className={styles.pinfo}>
              Em anéis benzênicos dissubstituídos, os termos{" "}
              <span>orto, meta e para</span> podem indicar, respectivamente,
              as posições 1,2; 1,3; e 1,4. Esses termos são tradicionais e não
              constituem a nomenclatura sistemática preferida pela IUPAC.
            </p>

            <p className={styles.pinfo}>
              Para a numeração, o carbono ligado à ramificação de maior
              prioridade recebe o número 1 e a sequência segue pelo sentido que
              proporciona a menor numeração possível aos demais substituintes.
            </p>

          </div>

          <div className={styles.infoConfig}>
            <h2>Haletos de Alquila</h2>
            <p className={styles.pinfo}>
              Haletos de alquila são compostos nos quais um átomo de{" "}
              <span>hidrogênio de um hidrocarboneto é substituído por um
                halogênio</span>. O grupo funcional é representado por{" "}
              <span>-X</span>.
            </p>

            <p className={styles.pinfo}>
              Eles podem ser classificados como primários, secundários ou
              terciários de acordo com o carbono ao qual o halogênio está
              ligado.
            </p>

            <p className={styles.pinfo}>
              Na nomenclatura IUPAC, utilizam-se os prefixos{" "}
              <span>fluoro-, cloro-, bromo- e iodo-</span>, acompanhados da
              posição do halogênio na cadeia. Os nomes dos substituintes são
              organizados alfabeticamente.
            </p>
            <br></br><br></br>
            <Image
              src="/haletos.webp"
              alt="Exemplos de haletos de alquila"
              width={400}
              height={400}
            />
            <br></br><br></br>
            <p className={styles.pinfo}>
              Na nomenclatura não oficial, utiliza-se o nome do haleto seguido
              de <span>de</span> e do nome do radical orgânico. Termos como
              n-propila, terc-butila e isopropila não são recomendados pela
              nomenclatura sistemática da IUPAC.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Funções Oxigenadas</h2>
            <p className={styles.pinfo}>
              As funções oxigenadas são grupos de compostos orgânicos que
              apresentam <span>oxigênio</span> em sua estrutura. Entre os
              principais exemplos estão álcoois, fenóis, enóis, éteres,
              aldeídos, cetonas, ácidos carboxílicos, ésteres e anidridos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Álcoois</h2>
            <p className={styles.pinfo}>
              Os álcoois possuem o grupo funcional{" "}
              <span>hidroxila (-OH)</span> ligado a um carbono saturado.
              Podem ser classificados em primários, secundários ou terciários
              conforme o carbono ligado à hidroxila.
            </p>

            <p className={styles.pinfo}>
              A numeração da cadeia deve começar pela extremidade mais próxima
              da hidroxila. Na nomenclatura IUPAC, substitui-se a terminação{" "}
              <span>-o</span> do hidrocarboneto correspondente por{" "}
              <span>-ol</span>, podendo ser utilizados -diol, -triol e outros
              quando houver mais de uma hidroxila.
            </p>
            <br></br><br></br>
            <Image
              src="/etanol.webp"
              alt="Exemplo de álcool"
              width={500}
              height={300}
            />

          </div>

          <div className={styles.infoConfig}>
            <h2>Fenóis</h2>
            <p className={styles.pinfo}>
              Fenóis são compostos que possuem uma{" "}
              <span>hidroxila diretamente ligada a um anel aromático</span>.
              Sua nomenclatura segue lógica semelhante à dos hidrocarbonetos
              aromáticos, utilizando o termo <span>fenol</span>.
            </p>
            <br></br><br></br>
            <Image
              src="/fenol.png"
              alt="Exemplos de fenóis"
              width={300}
              height={300}
            />

          </div>

          <div className={styles.infoConfig}>
            <h2>Enóis</h2>
            <p className={styles.pinfo}>
              Os enóis apresentam uma <span>hidroxila ligada a um carbono
                insaturado</span>, especificamente a um carbono que participa de
              uma ligação dupla.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de enol"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Éteres e Epóxidos</h2>
            <p className={styles.pinfo}>
              Os éteres possuem um átomo de <span>oxigênio entre dois
                carbonos</span>, que podem apresentar diferentes hibridações,
              desde que não sejam carbonos carbonílicos.
            </p>

            <p className={styles.pinfo}>
              Na nomenclatura oficial, utiliza-se o grupo secundário seguido de{" "}
              <span>oxi</span> e do hidrocarboneto correspondente ao grupo
              principal. Na nomenclatura usual, os dois grupos ligados ao
              oxigênio são citados em ordem alfabética, seguidos da palavra
              éter.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de éteres"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Os epóxidos são <span>éteres cíclicos de três membros</span>.
              Os mais simples podem ser nomeados como derivados do oxirano.
              Quando fazem parte de outro sistema cíclico, utiliza-se o prefixo
              <span>epóxi-</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de epóxidos"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Alcóxidos e Fenóxidos</h2>
            <p className={styles.pinfo}>
              A nomenclatura desses compostos segue a estrutura{" "}
              <span>nome do álcool ou fenol + óxido + de + nome do cátion</span>.
              Eles são derivados, respectivamente, de álcoois e fenóis pela
              remoção do hidrogênio da hidroxila.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de alcóxidos e fenóxidos"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Funções Sulfuradas</h2>
            <p className={styles.pinfo}>
              As funções sulfuradas são compostos orgânicos que apresentam{" "}
              <span>enxofre</span> em sua estrutura. Entre elas estão tióis,
              sulfetos, dissulfetos e ácidos sulfônicos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Tióis</h2>
            <p className={styles.pinfo}>
              Os tióis são semelhantes aos álcoois, porém apresentam o grupo{" "}
              <span>sulfidrila (-SH)</span> no lugar da hidroxila. No passado,
              também eram chamados de mercaptanas.
            </p>

            <p className={styles.pinfo}>
              Sua nomenclatura segue um padrão semelhante ao dos álcoois,
              substituindo o sufixo <span>-ol</span> por{" "}
              <span>-tiol</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de tióis e compostos sulfurados"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Sulfetos ou Tioéteres</h2>
            <p className={styles.pinfo}>
              Sulfetos, também chamados de tioéteres, são semelhantes aos
              éteres, mas possuem um <span>átomo de enxofre no lugar do
                oxigênio</span>.
            </p>

            <p className={styles.pinfo}>
              Na nomenclatura, utiliza-se o infixo <span>-tio-</span> em
              substituição ao <span>-oxi-</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de sulfetos ou tioéteres"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Dissulfetos</h2>
            <p className={styles.pinfo}>
              A nomenclatura dos dissulfetos segue o modelo{" "}
              <span>dissulfeto + de + nomes dos grupos substituintes</span>,
              organizados em ordem alfabética.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de dissulfeto"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ácidos Sulfônicos e Sulfonatos</h2>
            <p className={styles.pinfo}>
              Os ácidos sulfônicos apresentam o grupo{" "}
              <span>hidroxissulfonila</span> ligado a um carbono. Sua
              nomenclatura é formada por <span>ácido + nome do hidrocarboneto
                + sulfônico</span>.
            </p>

            <p className={styles.pinfo}>
              Os sais derivados desses ácidos recebem o nome de{" "}
              <span>sulfonatos</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de ácidos sulfônicos"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Funções Nitrogenadas</h2>
            <p className={styles.pinfo}>
              As funções nitrogenadas são compostos orgânicos que possuem{" "}
              <span>nitrogênio</span> em sua estrutura. Entre os exemplos estão
              aminas, amidas, nitrilas, isonitrilas, nitrocompostos e sais de
              amônio.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Aminas</h2>
            <p className={styles.pinfo}>
              As aminas podem ser classificadas como{" "}
              <span>primárias, secundárias ou terciárias</span>, dependendo da
              quantidade de grupos carbônicos ligados ao nitrogênio.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Estrutura de uma amina"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Na nomenclatura, os grupos ligados ao nitrogênio são escritos em
              ordem alfabética e recebem o sufixo <span>-amina</span>. Para
              diaminas e poliaminas, utilizam-se infixos como{" "}
              <span>-di-, -tri- e -tetra-</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de nomenclatura de aminas"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de aminas"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Amidas</h2>
            <p className={styles.pinfo}>
              As amidas apresentam uma <span>carbonila ligada a um átomo de
                nitrogênio</span>. Podem ser classificadas em primárias,
              secundárias ou terciárias de acordo com a quantidade de carbonos
              ligados ao nitrogênio da carbonila.
            </p>

            <p className={styles.pinfo}>
              Sua nomenclatura utiliza o nome do hidrocarboneto correspondente
              seguido de <span>amida</span>. Substituintes ligados ao nitrogênio
              são indicados pelo prefixo <span>N-</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Estrutura de uma amida"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de amidas"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Quando existem duas carbonilas ligadas ao mesmo nitrogênio, o
              composto é denominado <span>imida</span>. As amidas cíclicas são
              chamadas de <span>lactamas</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nitrilas e Isonitrilas</h2>
            <p className={styles.pinfo}>
              As nitrilas são análogas ao <span>cianeto de hidrogênio</span>,
              com o hidrogênio substituído por um grupo orgânico. Na
              nomenclatura oficial, utiliza-se o nome do hidrocarboneto seguido
              de <span>nitrila</span>.
            </p>

            <p className={styles.pinfo}>
              Na nomenclatura não oficial, utiliza-se a expressão{" "}
              <span>cianeto de + nome do radical orgânico</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de nitrilas"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              As isonitrilas são relacionadas ao <span>isocianeto de
                hidrogênio</span>. Na nomenclatura oficial, utiliza-se{" "}
              <span>isocianeto de + nome do radical orgânico</span>. Na
              nomenclatura usual, utiliza-se o nome do radical seguido de
              carbilamina.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de isonitrila"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Nitrocompostos</h2>
            <p className={styles.pinfo}>
              Os nitrocompostos apresentam o <span>grupo nitro</span> ligado a
              um átomo de carbono. A nomenclatura é formada pela utilização do
              prefixo <span>nitro-</span> seguido do nome do hidrocarboneto.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de nitrocomposto"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de nitrocompostos"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais de Amônio</h2>
            <p className={styles.pinfo}>
              A nomenclatura dos sais de amônio segue a estrutura{" "}
              <span>nome do ânion + de + nomes dos substituintes do
                nitrogênio + amônio</span>, com os substituintes organizados em
              ordem alfabética.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de sal de amônio"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Outras Funções Nitrogenadas</h2>
            <p className={styles.pinfo}>
              Existem diversas outras funções nitrogenadas, como{" "}
              <span>iminas, hidrazinas, azidas, diazocompostos, isocianatos,
                cetenas, nitronas e carbamatos</span>. A nomenclatura dessas
              funções não é aprofundada neste material.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Compostos Carbonílicos</h2>
            <p className={styles.pinfo}>
              Compostos carbonílicos são aqueles que apresentam uma{" "}
              <span>carbonila</span>, grupo formado por um átomo de oxigênio
              ligado por dupla ligação a um carbono.
            </p>

            <p className={styles.pinfo}>
              Entre as funções que apresentam carbonila estão{" "}
              <span>aldeídos, cetonas, ácidos carboxílicos, ésteres, anidridos,
                haletos de acila e amidas</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Aldeídos</h2>
            <p className={styles.pinfo}>
              Os aldeídos possuem o grupo funcional <span>formila</span>, no
              qual uma carbonila está ligada a um átomo de hidrogênio.
            </p>

            <p className={styles.pinfo}>
              Na nomenclatura sistemática, o carbono da carbonila recebe o
              número 1 e utiliza-se o sufixo <span>-al</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Estrutura de aldeído"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de aldeídos"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Para indicar a distância entre grupos funcionais, é comum usar
              letras gregas. Assim, o carbono <span>alfa</span> está diretamente
              ligado ao carbono da carbonila, enquanto o carbono beta possui um
              carbono entre ele e a carbonila.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Posições alfa, beta e gama"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Cetonas</h2>
            <p className={styles.pinfo}>
              As cetonas apresentam uma <span>carbonila ligada a duas cadeias
                carbônicas</span>.
            </p>

            <p className={styles.pinfo}>
              Na nomenclatura oficial, utiliza-se o nome do hidrocarboneto
              correspondente seguido de <span>-ona</span>. A posição da
              carbonila é indicada pelo número do primeiro carbono envolvido.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de cetonas"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Cetonas cíclicas"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Na nomenclatura não oficial, são citados os dois radicais ligados
              à carbonila, em seguida a palavra <span>cetona</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ácidos Carboxílicos</h2>
            <p className={styles.pinfo}>
              Os ácidos carboxílicos possuem o grupo funcional{" "}
              <span>carboxila</span>, formado por uma carbonila ligada a uma
              hidroxila.
            </p>

            <p className={styles.pinfo}>
              A cadeia principal é numerada a partir do carbono da carboxila,
              que corresponde ao <span>carbono 1</span>. Na nomenclatura
              oficial, utiliza-se a estrutura{" "}
              <span>ácido + nome do hidrocarboneto + oico</span>.
            </p>

            <p className={styles.pinfo}>
              Também existem nomenclaturas usuais baseadas em prefixos
              tradicionais.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Estrutura de ácido carboxílico"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de ácidos carboxílicos"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ésteres e Sais de Ácidos Carboxílicos</h2>
            <p className={styles.pinfo}>
              Os ésteres podem ser obtidos pela substituição da{" "}
              <span>hidroxila da carboxila por um grupo alcóxi</span>. Esse
              grupo corresponde a uma estrutura derivada de um álcool pela
              retirada do hidrogênio da hidroxila.
            </p>

            <p className={styles.pinfo}>
              A nomenclatura dos ésteres utiliza o nome derivado do ácido,
              terminado em <span>-ato</span>, seguido do nome do grupo alcóxi.
              Nos sais, acrescenta-se <span>de + nome do cátion</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de ésteres"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de sais orgânicos"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Os ésteres cíclicos formados pela reação entre uma carboxila e
              uma hidroxila pertencentes à mesma molécula são chamados de{" "}
              <span>lactonas</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de lactona"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Anidridos de Ácido</h2>
            <p className={styles.pinfo}>
              Os anidridos de ácido são obtidos por meio da{" "}
              <span>desidratação de ácidos carboxílicos</span>.
            </p>

            <p className={styles.pinfo}>
              Sua nomenclatura utiliza <span>anidrido + nome do ácido</span>.
              Quando o anidrido é formado a partir de dois ácidos diferentes,
              os nomes são colocados em ordem alfabética e separados por hífen.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de anidridos de ácido"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Haletos de Acila</h2>
            <p className={styles.pinfo}>
              Um haleto de acila é formado pela substituição da{" "}
              <span>hidroxila carboxílica por um halogênio</span>, originando o
              grupo halocarbonil.
            </p>

            <p className={styles.pinfo}>
              A nomenclatura segue o modelo{" "}
              <span>haleto + de + nome do ácido adaptado</span>. Os halogênios
              podem ser flúor, cloro, bromo ou iodo.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de haletos de acila"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Lactonas e Lactamas</h2>
            <p className={styles.pinfo}>
              As <span>lactonas</span> são ésteres cíclicos formados quando uma
              carboxila e uma hidroxila pertencentes à mesma molécula reagem
              entre si.
            </p>

            <p className={styles.pinfo}>
              Já as <span>lactamas</span> são amidas cíclicas. A nomenclatura
              pode utilizar letras gregas para indicar a distância entre o
              carbono carbonílico e o átomo ligado ao oxigênio ou ao nitrogênio.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de lactona"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de lactamas"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Compostos Organometálicos</h2>
            <p className={styles.pinfo}>
              Compostos organometálicos são aqueles que possuem{" "}
              <span>átomos de metais ligados diretamente a grupos
                orgânicos</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de compostos organometálicos"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Compostos de Grignard</h2>
            <p className={styles.pinfo}>
              Os compostos de Grignard são organometálicos que possuem magnésio
              associado a um grupo orgânico e a um halogênio. Sua nomenclatura
              segue o modelo <span>haleto + de + radical orgânico +
                magnésio</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de compostos de Grignard"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Outros Organometálicos</h2>
            <p className={styles.pinfo}>
              Entre outros compostos organometálicos estão os{" "}
              <span>organoplúmbicos, organozíncicos, organomercúricos e
                organolítios</span>.
            </p>

            <p className={styles.pinfo}>
              A nomenclatura pode ser construída colocando os nomes dos
              radicais orgânicos em ordem alfabética seguidos do nome do metal.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de organometálicos"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de composto organolítio"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Nomenclatura de Biciclos</h2>
            <p className={styles.pinfo}>
              Compostos que apresentam <span>ciclos interconectados</span> por
              um ou mais átomos possuem regras específicas de nomenclatura.
              Eles podem apresentar estruturas do tipo espiro, anéis fundidos
              ou átomos formando pontes entre os anéis.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de estruturas bicíclicas"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Índice de Deficiência de Hidrogênio (IDH)</h2>
            <p className={styles.pinfo}>
              O índice de deficiência de hidrogênio, ou <span>IDH</span>, é
              utilizado para prever a quantidade de ciclos e insaturações
              presentes em uma molécula a partir de sua fórmula molecular ou
              estrutural.
            </p>

            <p className={styles.pinfo}>
              O IDH corresponde à metade da diferença entre a quantidade de
              hidrogênios que o composto teria em uma estrutura totalmente
              saturada e a quantidade que ele realmente apresenta.
            </p>

            <p className={styles.pinfo}>
              Cada <span>ciclo</span> ou <span>ligação dupla</span> contribui
              com uma unidade para o IDH. Uma ligação tripla corresponde a duas
              unidades.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Cálculo do índice de deficiência de hidrogênio"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Reações Orgânicas</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt sapien vitae lorem consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Reações de Adição</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae neque tincidunt, malesuada sapien consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Reações de Substituição</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae sapien tincidunt, consequat lorem sed.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Reações de Eliminação</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae sapien tincidunt lorem consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Reações de Oxidação e Redução</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consequat lorem vitae sapien malesuada.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Esterificação</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt sapien vitae libero consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hidrólise</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae neque tincidunt, commodo sapien sed.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Combustão</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consequat lorem sed neque faucibus.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Descarboxilização</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consequat lorem sed neque faucibus.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fenilização</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consequat lorem sed neque faucibus.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hidrogenação</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consequat lorem sed neque faucibus.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Neutralização</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consequat lorem sed neque faucibus.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Compostos de Função Mista</h2>
            <p className={styles.pinfo}>
              Quando uma molécula apresenta <span>mais de um grupo
                funcional</span>, é necessário determinar qual deles terá
              prioridade e será responsável pelo sufixo do composto.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ordem de Prioridade dos Grupos Funcionais</h2>
            <p className={styles.pinfo}>
              A prioridade dos grupos funcionais, em ordem decrescente, é:
            </p>

            <p className={styles.pinfo}>
              <span>Ácido carboxílico</span>, éster, haleto de acila, amida,
              nitrila, aldeído, cetona, álcool, tiol, amina, alceno, alcino,
              alcano, éter, haleto de alquila e nitrocomposto.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Polímeros</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              consequat sapien vitae lorem malesuada.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Polimerização</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tincidunt lorem vitae neque consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Polímeros de Adição</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae sapien consequat, faucibus lorem.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Polímeros de Condensação</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              consequat lorem vitae libero tincidunt.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Polímeros Naturais e Sintéticos</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sapien neque, tincidunt vitae consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Extra: Como se dá a cor?</h2>
            <p className={styles.pinfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sapien neque, tincidunt vitae consequat.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}