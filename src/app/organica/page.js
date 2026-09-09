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

            <Image
              src="/orbitalPi.png"
              alt="Exemplos de cadeias abertas, fechadas e mistas"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Normais e Ramificadas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>normais</span>, também conhecidas como retas ou lineares,
              apresentam apenas duas extremidades e não possuem ramificações em sua estrutura.

              <br></br><br></br>

              As cadeias <span>ramificadas</span> possuem mais de duas extremidades,
              apresentando uma ou mais ramificações ao longo da cadeia principal.
            </p>

            <Image
              src="/orbitalPi.png"
              alt="Exemplos de cadeias normais e ramificadas"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Homogêneas e Heterogêneas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>homogêneas</span> não apresentam átomos de outros elementos
              entre os átomos de carbono que formam a cadeia.

              <br></br><br></br>

              Já as cadeias <span>heterogêneas</span> possuem pelo menos um átomo de outro
              elemento entre dois átomos de carbono. Esse átomo é chamado de
              <span>heteroátomo</span>, sendo comuns elementos como oxigênio, nitrogênio,
              enxofre e fósforo.
            </p>

            <Image
              src="/orbitalPi.png"
              alt="Exemplos de cadeias homogêneas e heterogêneas"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Saturadas e Insaturadas</h2>
            <p className={styles.pinfo}>
              As cadeias <span>saturadas</span> apresentam somente ligações simples entre
              os átomos de carbono.

              <br></br><br></br>

              As cadeias <span>insaturadas</span>, por outro lado, possuem pelo menos uma
              ligação dupla ou tripla entre átomos de carbono.
            </p>

            <Image
              src="/orbitalPi.png"
              alt="Exemplos de cadeias saturadas e insaturadas"
              width={400}
              height={400}
            />
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

            <Image
              src="/orbitalPi.png"
              alt="Exemplos de cadeias aromáticas e não aromáticas"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Tipos de Carbono</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Donec tincidunt lorem vitae neque consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Primário</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Integer consequat lorem vitae libero tincidunt.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Secundário</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Vestibulum vitae sapien vel neque consequat tincidunt.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Terciário</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Praesent tincidunt sapien vitae lorem consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Quaternário</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Mauris vitae sapien tincidunt, consequat lorem at.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Representações das Moléculas</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Donec vitae lorem malesuada, tincidunt sapien sed.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Molecular</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Integer consequat sapien vitae neque faucibus.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Estrutural</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Vestibulum consequat lorem vitae sapien tincidunt.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula Condensada</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Curabitur sapien neque, tincidunt vitae consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fórmula em Bastão</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Donec vitae lorem malesuada, tincidunt sapien sed.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Saturação e Aromaticidade</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Integer vitae neque tincidunt, malesuada sapien consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Praesent vitae sapien tincidunt, consequat lorem sed.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria Espacial</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Suspendisse vitae sapien tincidunt lorem consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria Geométrica</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Vestibulum consequat lorem vitae sapien malesuada.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Isomeria Óptica</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Donec sapien lorem, tincidunt vitae consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Carbono Quiral</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Integer tincidunt sapien vitae lorem consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Enantiômeros</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Mauris vitae neque tincidunt, consequat lorem.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Diastereoisômeros</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Curabitur consequat lorem vitae libero malesuada.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Funções Orgânicas</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Donec vitae sapien vel neque tincidunt consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hibridização</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Vestibulum tincidunt, ligula vitae consectetur consequat.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cadeias Conjugadas e Alternadas</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
              Aliquam erat volutpat. Sed tincidunt lorem at libero consequat.
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

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de alcadienos"
              width={500}
              height={300}
            />

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

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de nomenclatura de alceno"
              width={500}
              height={300}
            />
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

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de alcino"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de alcinos"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de alcadiino"
              width={500}
              height={300}
            />
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

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de alcenino ou enino"
              width={500}
              height={300}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Cicloalcanos e Cicloalcenos</h2>
            <p className={styles.pinfo}>
              Os cicloalcanos, ou ciclanos, são{" "}
              <span>hidrocarbonetos alicíclicos saturados</span>. Sua
              nomenclatura segue as regras dos alcanos, acrescentando-se o
              prefixo <span>ciclo-</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de cicloalcanos"
              width={500}
              height={300}
            />

            <p className={styles.pinfo}>
              Já os cicloalcenos, também chamados de ciclenos, são{" "}
              <span>hidrocarbonetos alicíclicos insaturados</span>, contendo
              pelo menos uma ligação dupla. Sua nomenclatura é semelhante à dos
              alcenos, também com o acréscimo do prefixo <span>ciclo-</span>.
            </p>

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de cicloalceno"
              width={500}
              height={300}
            />
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

            <Image
              src="/images/placeholder.png"
              alt="Representação de hidrocarboneto aromático"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de compostos aromáticos"
              width={500}
              height={300}
            />
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

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de haletos de alquila"
              width={500}
              height={300}
            />

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

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de álcool"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de álcoois"
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

            <Image
              src="/images/placeholder.png"
              alt="Exemplos de fenóis"
              width={500}
              height={300}
            />

            <Image
              src="/images/placeholder.png"
              alt="Exemplo de nomenclatura de fenol"
              width={500}
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