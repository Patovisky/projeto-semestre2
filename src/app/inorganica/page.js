import Image from "next/image";
import styles from "./page.module.css";

export default function Inorganica() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>

          <div className={styles.title}>
            <h3>Química Inorgânica</h3>

            <h2>
              A Química Inorgânica estuda as substâncias que, em geral, não possuem
              cadeias de carbono características da Química Orgânica.
              <br></br>
              Para facilitar esse estudo, os compostos são agrupados de acordo com
              suas propriedades e características químicas.
            </h2>
          </div>

          <div className={styles.infoConfig}>
            <h2>Introdução às funções inorgânicas:</h2>

            <p className={styles.pinfo}>
              Para tornar o estudo das <span>substâncias inorgânicas</span> mais
              simples, é comum agrupá-las em conjuntos que apresentam propriedades
              semelhantes. Esses conjuntos recebem o nome de <span>funções químicas</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              As principais funções da Química Inorgânica são:
              <span> ácidos, bases ou hidróxidos, sais, óxidos e hidretos</span>.
              Cada uma dessas funções possui características próprias e regras
              específicas de identificação e nomenclatura.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Para conseguir trabalhar corretamente com esses compostos, é
              importante saber relacionar o <span>nome de um íon à sua fórmula</span>
              e também fazer o caminho inverso. Esse conhecimento é fundamental
              para montar corretamente as fórmulas dos compostos inorgânicos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Outro conceito importante é o <span>número de oxidação (NOX)</span>,
              que auxilia na determinação das fórmulas e na compreensão das
              proporções entre os elementos presentes em um composto.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Principais ânions:</h2>

            <p className={styles.pinfo}>
              Os <span>ânions</span> são íons que possuem carga elétrica negativa.
              Conhecer seus nomes e fórmulas é essencial para montar compostos
              iônicos e reconhecer corretamente diversas substâncias inorgânicas.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Ânion</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>F⁻</td><td>Fluoreto</td></tr>
                  <tr><td>Cl⁻</td><td>Cloreto</td></tr>
                  <tr><td>Br⁻</td><td>Brometo</td></tr>
                  <tr><td>I⁻</td><td>Iodeto</td></tr>
                  <tr><td>O²⁻</td><td>Óxido</td></tr>
                  <tr><td>O₂²⁻</td><td>Peróxido</td></tr>
                  <tr><td>O₂⁻</td><td>Superóxido</td></tr>
                  <tr><td>S²⁻</td><td>Sulfeto</td></tr>
                  <tr><td>CN⁻</td><td>Cianeto</td></tr>
                  <tr><td>H⁻</td><td>Hidreto</td></tr>
                  <tr><td>CO₃²⁻</td><td>Carbonato</td></tr>
                  <tr><td>HCO₃⁻</td><td>Bicarbonato ou hidrogenocarbonato</td></tr>
                  <tr><td>SiO₄⁴⁻</td><td>Silicato</td></tr>
                  <tr><td>NO₂⁻</td><td>Nitrito</td></tr>
                  <tr><td>NO₃⁻</td><td>Nitrato</td></tr>
                  <tr><td>PO₄³⁻</td><td>Fosfato</td></tr>
                  <tr><td>SO₄²⁻</td><td>Sulfato</td></tr>
                  <tr><td>HSO₄⁻</td><td>Bissulfato ou hidrogenossulfato</td></tr>
                  <tr><td>SO₃²⁻</td><td>Sulfito</td></tr>
                  <tr><td>HSO₃⁻</td><td>Bissulfito ou hidrogenossulfito</td></tr>
                  <tr><td>S₂O₃²⁻</td><td>Tiossulfato</td></tr>
                  <tr><td>ClO⁻</td><td>Hipoclorito</td></tr>
                  <tr><td>ClO₂⁻</td><td>Clorito</td></tr>
                  <tr><td>ClO₃⁻</td><td>Clorato</td></tr>
                  <tr><td>ClO₄⁻</td><td>Perclorato</td></tr>
                  <tr><td>BrO⁻</td><td>Hipobromito</td></tr>
                  <tr><td>BrO₃⁻</td><td>Bromato</td></tr>
                  <tr><td>BrO₄⁻</td><td>Perbromato</td></tr>
                  <tr><td>IO⁻</td><td>Hipoiodito</td></tr>
                  <tr><td>IO₃⁻</td><td>Iodato</td></tr>
                  <tr><td>CrO₄²⁻</td><td>Cromato</td></tr>
                  <tr><td>Cr₂O₇²⁻</td><td>Dicromato</td></tr>
                  <tr><td>MnO₄⁻</td><td>Permanganato</td></tr>
                  <tr><td>MnO₄²⁻</td><td>Manganato</td></tr>
                  <tr><td>SCN⁻</td><td>Tiocianato</td></tr>
                  <tr><td>OCN⁻</td><td>Cianato</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ácidos:</h2>

            <p className={styles.pinfo}>
              Os <span>ácidos</span> são substâncias presentes em diversas
              situações do cotidiano. O ácido acético está presente no vinagre,
              o ácido cítrico pode ser encontrado em frutas como limão e laranja,
              enquanto o ácido sulfúrico é utilizado nas baterias de automóveis.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O ácido clorídrico está presente no sistema digestivo e também pode
              ser encontrado, em forma impura, no chamado ácido muriático. Já o
              ácido fosfórico está presente em alguns refrigerantes à base de cola.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Uma característica comum dessas substâncias é o <span>sabor azedo</span>
              quando presentes em soluções aquosas. Além disso, suas soluções
              conduzem eletricidade e podem alterar a coloração de determinados
              <span> indicadores ácido-base</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Por exemplo, o papel de tornassol azul tende a ficar vermelho em
              meio ácido, enquanto a fenolftaleína permanece incolor.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Definição de ácido segundo Arrhenius:</h2>

            <p className={styles.pinfo}>
              De acordo com <span>Arrhenius</span>, ácido é toda substância que,
              quando dissolvida em água, libera <span>cátions hidrogênio (H⁺)</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplos:</span>
            </p>

            <p className={styles.pinfo}>
              HCl → H⁺ + Cl⁻
            </p>

            <p className={styles.pinfo}>
              H₂SO₄ → 2H⁺ + SO₄²⁻
            </p>

            <p className={styles.pinfo}>
              HNO₃ → H⁺ + NO₃⁻
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Classificação dos ácidos:</h2>

            <p className={styles.pinfo}>
              Os ácidos podem ser classificados de acordo com a presença ou
              ausência de oxigênio em sua composição.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Classificação</th>
                    <th>Característica</th>
                    <th>Exemplos</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Hidrácidos</td>
                    <td>Não possuem oxigênio</td>
                    <td>HF, HCl, H₂S, HCN</td>
                  </tr>
                  <tr>
                    <td>Oxiácidos</td>
                    <td>Possuem oxigênio</td>
                    <td>HNO₃, H₂SO₄, H₃PO₄, HClO₄</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Como montar a fórmula de um ácido?</h2>

            <p className={styles.pinfo}>
              Para montar a fórmula de um ácido, devemos lembrar que ele é
              constituído pelo <span>cátion H⁺</span> e por um ânion.
              O hidrogênio deve aparecer primeiro na fórmula.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Em seguida, é necessário realizar o <span>balanceamento das cargas</span>.
              Como o composto é eletricamente neutro, a quantidade total de cargas
              positivas deve ser igual à quantidade total de cargas negativas.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Ácido clorídrico:</span> o ânion Cl⁻ possui carga -1.
              Portanto, basta um H⁺ para neutralizá-lo:
            </p>

            <p className={styles.pinfo}>
              H⁺ + Cl⁻ → <span>HCl</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Ácido sulfúrico:</span> o ânion SO₄²⁻ possui duas cargas
              negativas. Assim, são necessários dois H⁺:
            </p>

            <p className={styles.pinfo}>
              2H⁺ + SO₄²⁻ → <span>H₂SO₄</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Ácido fosfórico:</span> o ânion PO₄³⁻ apresenta três cargas
              negativas, exigindo três H⁺:
            </p>

            <p className={styles.pinfo}>
              3H⁺ + PO₄³⁻ → <span>H₃PO₄</span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nomenclatura dos hidrácidos:</h2>

            <p className={styles.pinfo}>
              Para nomear um hidrácido, utiliza-se a palavra <span>ácido</span>,
              seguida pelo nome do elemento com a terminação <span>-ídrico</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>HF</td><td>Ácido fluorídrico</td></tr>
                  <tr><td>HCl</td><td>Ácido clorídrico</td></tr>
                  <tr><td>HBr</td><td>Ácido bromídrico</td></tr>
                  <tr><td>HI</td><td>Ácido iodídrico</td></tr>
                  <tr><td>H₂S</td><td>Ácido sulfídrico</td></tr>
                  <tr><td>HCN</td><td>Ácido cianídrico</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nomenclatura dos oxiácidos:</h2>

            <p className={styles.pinfo}>
              Para nomear oxiácidos, uma das formas é observar a terminação do
              ânion correspondente. Quando o ânion termina em <span>-ito</span>,
              o ácido correspondente termina em <span>-oso</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Quando o ânion termina em <span>-ato</span>, o ácido correspondente
              recebe a terminação <span>-ico</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Ânion</th>
                    <th>Ácido</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>Nitrito (NO₂⁻)</td><td>Ácido nitroso (HNO₂)</td></tr>
                  <tr><td>Nitrato (NO₃⁻)</td><td>Ácido nítrico (HNO₃)</td></tr>
                  <tr><td>Sulfito (SO₃²⁻)</td><td>Ácido sulfuroso (H₂SO₃)</td></tr>
                  <tr><td>Sulfato (SO₄²⁻)</td><td>Ácido sulfúrico (H₂SO₄)</td></tr>
                  <tr><td>Fosfito (PO₃³⁻)</td><td>Ácido fosforoso (H₃PO₃)</td></tr>
                  <tr><td>Fosfato (PO₄³⁻)</td><td>Ácido fosfórico (H₃PO₄)</td></tr>
                  <tr><td>Hipoclorito (ClO⁻)</td><td>Ácido hipocloroso (HClO)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Variações dos oxiácidos:</h2>

            <p className={styles.pinfo}>
              Também é possível diferenciar oxiácidos de um mesmo elemento
              observando a quantidade de oxigênios presentes na fórmula.
              Para isso, são utilizados os prefixos <span>hipo</span> e
              <span> per</span>, juntamente com as terminações <span>-oso</span>
              e <span>-ico</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Quantidade de O</th>
                    <th>Prefixo</th>
                    <th>Terminação</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Menor quantidade</td>
                    <td>hipo</td>
                    <td>oso</td>
                  </tr>
                  <tr>
                    <td>Quantidade intermediária</td>
                    <td>—</td>
                    <td>oso</td>
                  </tr>
                  <tr>
                    <td>Quantidade intermediária</td>
                    <td>—</td>
                    <td>ico</td>
                  </tr>
                  <tr>
                    <td>Maior quantidade</td>
                    <td>per</td>
                    <td>ico</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplo com o cloro:</span>
            </p>

            <p className={styles.pinfo}>
              HClO → ácido hipocloroso
            </p>

            <p className={styles.pinfo}>
              HClO₂ → ácido cloroso
            </p>

            <p className={styles.pinfo}>
              HClO₃ → ácido clórico
            </p>

            <p className={styles.pinfo}>
              HClO₄ → ácido perclórico
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ácidos orto, meta e piro:</h2>

            <p className={styles.pinfo}>
              Alguns oxiácidos utilizam os prefixos <span>orto, meta e piro</span>
              para diferenciar compostos que possuem diferentes graus de hidratação,
              mesmo quando o elemento central apresenta o mesmo número de oxidação.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              No caso do fósforo, podemos comparar o ácido ortofosfórico,
              o metafosfórico e o pirofosfórico.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                    <th>Relação</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>H₃PO₄</td>
                    <td>Ácido ortofosfórico</td>
                    <td>Mais hidratado</td>
                  </tr>
                  <tr>
                    <td>HPO₃</td>
                    <td>Ácido metafosfórico</td>
                    <td>H₃PO₄ − H₂O</td>
                  </tr>
                  <tr>
                    <td>H₄P₂O₇</td>
                    <td>Ácido pirofosfórico</td>
                    <td>2H₃PO₄ − H₂O</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Bases ou hidróxidos:</h2>

            <p className={styles.pinfo}>
              As <span>bases</span>, também chamadas de hidróxidos, são substâncias
              bastante presentes no cotidiano. Entre os exemplos estão o hidróxido
              de sódio, utilizado em produtos para desentupimento, o hidróxido de
              magnésio, presente no leite de magnésia, e o hidróxido de cálcio,
              empregado em pinturas e argamassas.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Essas substâncias possuem, em geral, sabor <span>adstringente</span>
              e também podem alterar a coloração dos indicadores ácido-base.
              Em meio básico, o tornassol vermelho fica azul e a fenolftaleína
              adquire coloração rosa.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Definição de base segundo Arrhenius:</h2>

            <p className={styles.pinfo}>
              Para <span>Arrhenius</span>, base é toda substância que, quando
              dissolvida em água, libera o <span>ânion hidróxido (OH⁻)</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplos:</span>
            </p>

            <p className={styles.pinfo}>
              NaOH → Na⁺ + OH⁻
            </p>

            <p className={styles.pinfo}>
              Ca(OH)₂ → Ca²⁺ + 2OH⁻
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A fórmula geral de uma base pode ser representada por
              <span> E(OH)x</span>, em que E representa o cátion e x está
              relacionado ao seu número de oxidação.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nomenclatura das bases:</h2>

            <p className={styles.pinfo}>
              A nomenclatura dos hidróxidos é simples: utiliza-se a expressão
              <span> hidróxido de</span> seguida pelo nome do cátion.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>NaOH</td><td>Hidróxido de sódio</td></tr>
                  <tr><td>Mg(OH)₂</td><td>Hidróxido de magnésio</td></tr>
                  <tr><td>Ca(OH)₂</td><td>Hidróxido de cálcio</td></tr>
                  <tr><td>Fe(OH)₂</td><td>Hidróxido de ferro(II)</td></tr>
                  <tr><td>Fe(OH)₃</td><td>Hidróxido de ferro(III)</td></tr>
                </tbody>
              </table>
            </div>

            <br></br>

            <p className={styles.pinfo}>
              Quando o metal apresenta mais de um número de oxidação, ele deve
              ser indicado em <span>algarismos romanos e entre parênteses</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Amônia em água:</h2>

            <p className={styles.pinfo}>
              A amônia (NH₃), quando dissolvida em água, estabelece um equilíbrio
              que produz pequenas quantidades de íons amônio e hidróxido.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais:</h2>

            <p className={styles.pinfo}>
              Os <span>sais</span> são compostos muito comuns no cotidiano.
              O cloreto de sódio é utilizado na alimentação e conservação de
              alimentos, enquanto o bicarbonato de sódio aparece em antiácidos,
              fermentos químicos e extintores.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Outros exemplos são o fluoreto de sódio, utilizado na prevenção
              de cáries, e o hipoclorito de sódio, empregado como alvejante,
              desinfetante e no tratamento de água.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              De maneira geral, os sais podem ser obtidos pela reação entre
              um <span>ácido e uma base</span>, processo conhecido como
              neutralização.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              HCl + NaOH → NaCl + H₂O
            </p>

            <p className={styles.pinfo}>
              H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Como montar a fórmula de um sal?</h2>

            <p className={styles.pinfo}>
              Um sal pode ser entendido como a combinação de um
              <span> cátion</span> com um <span>ânion</span>. Para montar
              sua fórmula, escrevemos primeiro o cátion e depois o ânion,
              considerando suas respectivas cargas.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O número da carga do cátion determina o índice do ânion,
              enquanto a carga do ânion determina o índice do cátion.
              Dessa forma, as cargas são balanceadas e o composto se torna
              eletricamente neutro.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Sal</th>
                    <th>Cátion</th>
                    <th>Ânion</th>
                    <th>Fórmula</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Cloreto de cálcio</td>
                    <td>Ca²⁺</td>
                    <td>Cl⁻</td>
                    <td>CaCl₂</td>
                  </tr>
                  <tr>
                    <td>Sulfato de potássio</td>
                    <td>K⁺</td>
                    <td>SO₄²⁻</td>
                    <td>K₂SO₄</td>
                  </tr>
                  <tr>
                    <td>Fosfato de bário</td>
                    <td>Ba²⁺</td>
                    <td>PO₄³⁻</td>
                    <td>Ba₃(PO₄)₂</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nomenclatura dos sais:</h2>

            <p className={styles.pinfo}>
              Para nomear um sal, basta utilizar o <span>nome do ânion</span>,
              seguido da expressão <span>de</span> e do nome do cátion.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A terminação do nome do ânion também pode ser obtida a partir
              da terminação do ácido que lhe deu origem.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Ácido</th>
                    <th>Ânion</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>-ídrico</td>
                    <td>-eto</td>
                  </tr>
                  <tr>
                    <td>-oso</td>
                    <td>-ito</td>
                  </tr>
                  <tr>
                    <td>-ico</td>
                    <td>-ato</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplos:</span>
            </p>

            <p className={styles.pinfo}>
              Ácido clorídrico → cloreto
            </p>

            <p className={styles.pinfo}>
              Ácido sulfuroso → sulfito
            </p>

            <p className={styles.pinfo}>
              Ácido sulfúrico → sulfato
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Quando o cátion possui mais de um número de oxidação relevante,
              esse valor deve ser indicado em algarismos romanos.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>NaCl</td><td>Cloreto de sódio</td></tr>
                  <tr><td>K₃PO₄</td><td>Fosfato de potássio</td></tr>
                  <tr><td>Fe₂(SO₄)₃</td><td>Sulfato de ferro(III)</td></tr>
                  <tr><td>FeSO₄</td><td>Sulfato de ferro(II)</td></tr>
                  <tr><td>NH₄NO₃</td><td>Nitrato de amônio</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Classificação dos sais:</h2>

            <p className={styles.pinfo}>
              De acordo com sua estrutura e composição, os sais podem ser
              classificados em <span>neutros, ácidos, básicos, duplos e hidratados</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Característica</th>
                    <th>Exemplo</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Neutro</td>
                    <td>Neutralização total</td>
                    <td>NaCl</td>
                  </tr>
                  <tr>
                    <td>Ácido</td>
                    <td>Apresenta hidrogênio ionizável</td>
                    <td>NaHCO₃</td>
                  </tr>
                  <tr>
                    <td>Básico</td>
                    <td>Apresenta OH⁻ na estrutura</td>
                    <td>CaOHCl</td>
                  </tr>
                  <tr>
                    <td>Duplo</td>
                    <td>Possui dois cátions ou dois ânions</td>
                    <td>NaKSO₄</td>
                  </tr>
                  <tr>
                    <td>Hidratado</td>
                    <td>Possui água de cristalização</td>
                    <td>CuSO₄·5H₂O</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais neutros:</h2>

            <p className={styles.pinfo}>
              Nos <span>sais neutros</span>, a neutralização entre o ácido e
              a base ocorre de maneira completa. Por isso, não permanecem
              H⁺ nem OH⁻ na estrutura do sal.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplos:</span> NaCl, K₃PO₄, NH₄NO₃, CaCl₂ e K₂SO₄.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais ácidos ou hidrogenossais:</h2>

            <p className={styles.pinfo}>
              Os <span>sais ácidos</span> resultam de uma neutralização parcial
              do ácido. Dessa forma, ainda permanece hidrogênio em sua estrutura.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              H₃PO₄ + 2NaOH → Na₂HPO₄ + 2H₂O
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Na₂HPO₄ pode ser chamado de fosfato ácido de sódio ou
              hidrogenofosfato de sódio.
            </p>

            <p className={styles.pinfo}>
              NaHCO₃ é conhecido como bicarbonato de sódio ou
              hidrogenocarbonato de sódio.
            </p>

            <p className={styles.pinfo}>
              NaH₂PO₄ pode ser chamado de fosfato diácido de sódio ou
              diidrogenofosfato de sódio.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais básicos ou hidroxissais:</h2>

            <p className={styles.pinfo}>
              Nos <span>sais básicos</span>, a neutralização da base não ocorre
              completamente. Como resultado, grupos OH⁻ permanecem na estrutura
              do composto.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Ca(OH)₂ + HCl → CaOHCl + H₂O
            </p>

            <br></br>

            <p className={styles.pinfo}>
              CaOHCl pode ser denominado cloreto básico de cálcio ou
              hidroxicloreto de cálcio.
            </p>

            <p className={styles.pinfo}>
              Al(OH)₂Br pode ser chamado de brometo dibásico de alumínio
              ou diidroxibrometo de alumínio.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais duplos ou mistos:</h2>

            <p className={styles.pinfo}>
              Os <span>sais duplos</span> apresentam dois cátions diferentes
              ou dois ânions diferentes em sua estrutura.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplos:</span>
            </p>

            <p className={styles.pinfo}>
              NaKSO₄ → sulfato duplo de sódio e potássio.
            </p>

            <p className={styles.pinfo}>
              CaCl(ClO) → cloreto hipoclorito de cálcio.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Sais hidratados:</h2>

            <p className={styles.pinfo}>
              Os <span>sais hidratados</span> possuem moléculas de água
              incorporadas à sua estrutura cristalina. Essas moléculas são
              chamadas de <span>água de cristalização</span> ou água de hidratação.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>CuSO₄·5H₂O</td>
                    <td>Sulfato de cobre(II) pentaidratado</td>
                  </tr>
                  <tr>
                    <td>NiCl₂·6H₂O</td>
                    <td>Cloreto de níquel(II) hexaidratado</td>
                  </tr>
                  <tr>
                    <td>ZnSO₄·7H₂O</td>
                    <td>Sulfato de zinco heptaidratado</td>
                  </tr>
                  <tr>
                    <td>K₂C₂O₄·H₂O</td>
                    <td>Oxalato de potássio monoidratado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Óxidos:</h2>

            <p className={styles.pinfo}>
              Os <span>óxidos</span> são compostos binários formados por oxigênio
              ligado a outro elemento químico. Sua fórmula geral pode ser
              representada por <span>EₓOᵧ</span>, em que E representa o outro
              elemento e O representa o oxigênio.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Os óxidos podem ser classificados em <span>básicos, ácidos,
              anfóteros, neutros, salinos ou mistos, peróxidos e superóxidos</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Óxidos básicos:</h2>

            <p className={styles.pinfo}>
              Os <span>óxidos básicos</span> são geralmente formados por metais
              alcalinos, alcalino-terrosos e alguns outros metais com baixo
              número de oxidação.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Uma característica importante é que muitos deles reagem com água,
              formando hidróxidos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              CaO + H₂O → Ca(OH)₂
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A nomenclatura mais utilizada é <span>óxido de + nome do metal</span>.
              Quando o metal possui mais de um número de oxidação, ele deve ser
              indicado em algarismos romanos.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>Na₂O</td><td>Óxido de sódio</td></tr>
                  <tr><td>CaO</td><td>Óxido de cálcio</td></tr>
                  <tr><td>MnO</td><td>Óxido de manganês(II)</td></tr>
                  <tr><td>Mn₂O₃</td><td>Óxido de manganês(III)</td></tr>
                </tbody>
              </table>
            </div>

            <br></br>

            <p className={styles.pinfo}>
              Também é possível utilizar prefixos para indicar a quantidade
              de átomos presente na fórmula, como em <span>monóxido de dissódio</span>
              e <span>trióxido de dimanganês</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Óxidos ácidos ou anidridos:</h2>

            <p className={styles.pinfo}>
              Os <span>óxidos ácidos</span>, também chamados de anidridos,
              são geralmente formados por não metais ou por metais que apresentam
              números de oxidação elevados.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Esses óxidos podem reagir com água e formar ácidos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              SO₃ + H₂O → H₂SO₄
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Quando um elemento forma apenas um óxido ácido, pode-se utilizar
              o termo <span>anidrido</span> seguido do nome correspondente.
            </p>

            <p className={styles.pinfo}>
              CO₂ → anidrido carbônico
            </p>

            <p className={styles.pinfo}>
              B₂O₃ → anidrido bórico
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Quando existem dois óxidos ácidos, utiliza-se a terminação
              <span> -oso</span> para o menor NOX e <span>-ico</span> para o maior.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>SO₂</td><td>Anidrido sulfuroso</td></tr>
                  <tr><td>SO₃</td><td>Anidrido sulfúrico</td></tr>
                  <tr><td>P₂O₃</td><td>Anidrido fosforoso</td></tr>
                  <tr><td>P₂O₅</td><td>Anidrido fosfórico</td></tr>
                  <tr><td>N₂O₃</td><td>Anidrido nitroso</td></tr>
                  <tr><td>N₂O₅</td><td>Anidrido nítrico</td></tr>
                </tbody>
              </table>
            </div>

            <br></br>

            <p className={styles.pinfo}>
              Para elementos que formam mais de dois óxidos ácidos, também
              podem ser utilizados os prefixos <span>hipo</span> e <span>per</span>.
            </p>

            <p className={styles.pinfo}>
              Cl₂O → anidrido hipocloroso
            </p>

            <p className={styles.pinfo}>
              Cl₂O₃ → anidrido cloroso
            </p>

            <p className={styles.pinfo}>
              Cl₂O₅ → anidrido clórico
            </p>

            <p className={styles.pinfo}>
              Cl₂O₇ → anidrido perclórico
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Óxidos anfóteros:</h2>

            <p className={styles.pinfo}>
              Os <span>óxidos anfóteros</span> possuem comportamento que pode
              ser ácido ou básico dependendo do meio em que se encontram.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplo:</span>
            </p>

            <p className={styles.pinfo}>
              ZnO + 2HCl → ZnCl₂ + H₂O
            </p>

            <p className={styles.pinfo}>
              ZnO + 2NaOH → Na₂ZnO₂ + H₂O
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Alguns exemplos são <span>ZnO, Al₂O₃, Cr₂O₃, MnO₂, BeO, PbO,
              PbO₂, SnO e SnO₂</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Óxidos neutros:</h2>

            <p className={styles.pinfo}>
              Os <span>óxidos neutros</span> são aqueles que não apresentam
              reação significativa com água. Entre os principais exemplos estão
              CO, N₂O e NO.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                    <th>NOX do N ou C</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>CO</td>
                    <td>Monóxido de carbono</td>
                    <td>+2</td>
                  </tr>
                  <tr>
                    <td>N₂O</td>
                    <td>Óxido nitroso</td>
                    <td>+1</td>
                  </tr>
                  <tr>
                    <td>NO</td>
                    <td>Óxido nítrico</td>
                    <td>+2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Óxidos salinos, mistos ou duplos:</h2>

            <p className={styles.pinfo}>
              Os <span>óxidos mistos</span> são óxidos metálicos que apresentam
              mais de um número de oxidação para o mesmo elemento. Sua fórmula
              geral pode ser representada por <span>E₃O₄</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplos:</span>
            </p>

            <p className={styles.pinfo}>
              Fe₃O₄ → óxido de ferro(II) e (III)
            </p>

            <p className={styles.pinfo}>
              Pb₃O₄ → óxido de chumbo(II) e (IV)
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Peróxidos:</h2>

            <p className={styles.pinfo}>
              Nos <span>peróxidos</span>, o oxigênio apresenta número de oxidação
              igual a <span>-1</span>, diferente do valor -2 encontrado na
              maioria dos óxidos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A nomenclatura segue o padrão <span>peróxido de + nome do elemento</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>Na₂O₂</td><td>Peróxido de sódio</td></tr>
                  <tr><td>H₂O₂</td><td>Peróxido de hidrogênio</td></tr>
                  <tr><td>BaO₂</td><td>Peróxido de bário</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Superóxidos:</h2>

            <p className={styles.pinfo}>
              Nos <span>superóxidos</span>, cada oxigênio apresenta número de
              oxidação médio igual a <span>-1/2</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A nomenclatura é formada por <span>superóxido de + nome do elemento</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>KO₂</td><td>Superóxido de potássio</td></tr>
                  <tr><td>RbO₂</td><td>Superóxido de rubídio</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hidretos:</h2>

            <p className={styles.pinfo}>
              Os <span>hidretos</span> são compostos formados pela combinação
              do hidrogênio com outro elemento. Uma representação geral pode
              ser dada por <span>EHₓ</span>.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Eles podem ser divididos principalmente em
              <span> hidretos salinos</span> e <span>hidretos moleculares</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hidretos salinos:</h2>

            <p className={styles.pinfo}>
              Nos <span>hidretos salinos</span>, o hidrogênio apresenta
              número de oxidação <span>-1</span>. Eles são geralmente formados
              pela combinação do hidrogênio com metais.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Sua nomenclatura segue a estrutura <span>hidreto de + nome do elemento</span>.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>NaH</td><td>Hidreto de sódio</td></tr>
                  <tr><td>CaH₂</td><td>Hidreto de cálcio</td></tr>
                  <tr><td>AlH₃</td><td>Hidreto de alumínio</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Hidretos moleculares:</h2>

            <p className={styles.pinfo}>
              Nos <span>hidretos moleculares</span>, o hidrogênio apresenta
              número de oxidação <span>+1</span>. Muitos deles possuem nomes
              específicos que são mais utilizados do que a nomenclatura
              sistemática.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>CH₄</td><td>Metano</td></tr>
                  <tr><td>SiH₄</td><td>Silano</td></tr>
                  <tr><td>NH₃</td><td>Amônia</td></tr>
                  <tr><td>PH₃</td><td>Fosfina</td></tr>
                  <tr><td>AsH₃</td><td>Arsina</td></tr>
                  <tr><td>SbH₃</td><td>Estibina</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Principais números de oxidação:</h2>

            <p className={styles.pinfo}>
              O <span>número de oxidação (NOX)</span> representa, de maneira
              simplificada, a carga que um átomo teria se os elétrons das
              ligações fossem atribuídos ao elemento mais eletronegativo.
              Ele é muito importante para montar fórmulas e nomear diversos
              compostos inorgânicos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A tabela abaixo reúne alguns dos principais números de oxidação
              utilizados no estudo da Química Inorgânica.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Elemento(s)</th>
                    <th>Principais números de oxidação</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>Hidrogênio (H)</td><td>+1, -1</td></tr>
                  <tr><td>Li, Na, K, Rb, Cs, Fr</td><td>+1</td></tr>
                  <tr><td>Be, Mg, Ca, Sr, Ba, Ra</td><td>+2</td></tr>
                  <tr><td>B, Al</td><td>+3</td></tr>
                  <tr><td>C, Si</td><td>+4</td></tr>
                  <tr><td>N, P</td><td>-3, +3, +5</td></tr>
                  <tr><td>As, Sb</td><td>+3, +5</td></tr>
                  <tr><td>Oxigênio (O)</td><td>-2, -1</td></tr>
                  <tr><td>S, Se, Te</td><td>-2, +4, +6</td></tr>
                  <tr><td>Flúor (F)</td><td>-1</td></tr>
                  <tr><td>Cl, Br, I</td><td>-1, +1, +3, +5, +7</td></tr>
                  <tr><td>Bi</td><td>+3, +5</td></tr>
                  <tr><td>Cu, Hg</td><td>+1, +2</td></tr>
                  <tr><td>Ag</td><td>+1</td></tr>
                  <tr><td>Au</td><td>+1, +3</td></tr>
                  <tr><td>Zn, Cd</td><td>+2</td></tr>
                  <tr><td>Cr</td><td>+2, +3, +6</td></tr>
                  <tr><td>Mn</td><td>+2, +3, +4, +6, +7</td></tr>
                  <tr><td>Fe, Co, Ni</td><td>+2, +3</td></tr>
                  <tr><td>Pt</td><td>+2, +4</td></tr>
                </tbody>
              </table>
            </div>

            <br></br>

            <p className={styles.pinfo}>
              <span>Observação:</span> a tabela apresenta apenas alguns dos
              números de oxidação mais comuns. A ausência de determinado valor
              não significa que ele não possa existir em outras situações.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Compostos que não pertencem às principais funções:</h2>

            <p className={styles.pinfo}>
              Existem compostos inorgânicos que não se encaixam perfeitamente
              nas cinco funções principais estudadas. Mesmo assim, suas
              nomenclaturas podem ser determinadas observando diretamente
              a composição da fórmula.
            </p>

            <br></br>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Fórmula</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  <tr><td>PCl₃</td><td>Tricloreto de fósforo</td></tr>
                  <tr><td>PCl₅</td><td>Pentacloreto de fósforo</td></tr>
                  <tr><td>XeF₄</td><td>Tetrafluoreto de xenônio</td></tr>
                  <tr><td>ICl</td><td>Cloreto de iodo</td></tr>
                  <tr><td>BrF₅</td><td>Pentafluoreto de bromo</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Resumo das funções inorgânicas:</h2>

            <p className={styles.pinfo}>
              As principais funções estudadas podem ser diferenciadas pela
              composição e pelo comportamento químico de seus compostos.
            </p>

            <div className={styles.tabelas}>
              <table>
                <thead>
                  <tr>
                    <th>Função</th>
                    <th>Característica principal</th>
                    <th>Exemplo</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Ácidos</td>
                    <td>Liberação de H⁺ em água</td>
                    <td>HCl</td>
                  </tr>
                  <tr>
                    <td>Bases</td>
                    <td>Liberação de OH⁻ em água</td>
                    <td>NaOH</td>
                  </tr>
                  <tr>
                    <td>Sais</td>
                    <td>Formados por cátion e ânion</td>
                    <td>NaCl</td>
                  </tr>
                  <tr>
                    <td>Óxidos</td>
                    <td>Oxigênio ligado a outro elemento</td>
                    <td>CO₂</td>
                  </tr>
                  <tr>
                    <td>Hidretos</td>
                    <td>Hidrogênio ligado a outro elemento</td>
                    <td>NaH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}