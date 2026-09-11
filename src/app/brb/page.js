"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Brb() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.seriesIntro}>
          <div className={styles.introHeader}>
            <span>BREAKING_BAD.exe</span>
            <span>● SYSTEM ONLINE</span>
          </div>

          <div className={styles.introContent}>
            <div className={styles.introTitle}>
              <span>BREAKING BAD</span>
              <small>CHARACTER DATABASE</small>
            </div>

            <p>
              <b>Breaking Bad</b> acompanha Walter White, um professor de química
              do ensino médio que, após ser diagnosticado com câncer de pulmão,
              decide produzir metanfetamina para garantir o futuro financeiro de
              sua família. Ao lado de seu antigo aluno Jesse Pinkman, Walter entra
              no mundo do tráfico de drogas e assume gradualmente a identidade de
              <b> Heisenberg</b>.
            </p>

            <p>
              O que começa como uma tentativa desesperada de deixar dinheiro para
              sua família rapidamente se transforma em uma jornada de ambição,
              violência, poder e corrupção. Enquanto Walter se aprofunda no crime,
              sua relação com Jesse e com pessoas como Saul Goodman, Gus Fring e
              Mike Ehrmantraut se torna cada vez mais perigosa.
            </p>

            <div className={styles.introData}>
              <span>STATUS: <b>COMPLETED</b></span>
              <span>GENRE: CRIME / DRAMA</span>
              <span>LOCATION: ALBUQUERQUE, NM</span>
            </div>
          </div>
        </div>
        <div className={styles.brb}>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/walter.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList}>
                      <b>NOME:</b> <span className={styles.alignRight}>Walter White</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>50</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}> ̶P̶r̶o̶f̶e̶s̶s̶o̶r̶ ̶d̶e̶ ̶q̶u̶í̶m̶i̶c̶a̶ </span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>07/09/1958</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      Who are you talking to right now? Who is it that you think you see?
                      Do you know how much I make a year? I mean, even if I tell you,
                      you wouldn’t believe it. Do you know what happens if I suddenly
                      decide to stop going into work? A business big enough it could
                      be listed on the NASDAQ goes belly-up. Gone. It ceases to exist
                      without me. No, you clearly don’t know who you’re talking to so
                      let me clue you in. I am not in danger, Skylar. I am the danger.
                      A guy opens his front door and gets shot, and you think that
                      of me? No. I am the one who knocks.
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Walter White começa a série como um homem comum e
                      abatido de 48 anos, com cabelo castanho sem graça,
                      um bigode ralo, óculos de grau grandes e roupas
                      beges folgadas que refletem sua vida frustrada.
                      No entanto, ao se transformar no traficante
                      Heisenberg, seu visual muda drasticamente
                      para projetar power: ele adota uma cabeça
                      totalmente careca, um cavanhaque cheio e
                      imponente, óculos escuros e o icônico chapéu
                      Pork Pie preto, trocando as roupas claras
                      por jaquetas escuras e expressando uma
                      postura fria e intimidadora.
                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/jesse.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Jesse Pinkman</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>27</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}> ̶Fabricante e distribuidor de metanfetamina</span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>27/08/1979</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      Yo, yo, yo, 148-3-to-the-3-to-the-6-to-the-9,
                      representing ABQ, what up,
                      biatch? Leave a message.
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Jesse Pinkman (interpretado por Aaron Paul em Breaking Bad)
                      começa a série com o visual típico de um jovem marginal
                      dos anos 2000, marcado por roupas extremamente largas
                      e coloridas, casacos de moletom com capuz e estampas
                      chamativas, além de uma touca (beanie) cobrindo seu
                      cabelo raspado ou curto. Conforme o personagem amadurece
                      e enfrenta os traumas do mundo do crime, suas roupas
                      ganham tons mais escuros e cortes ajustados, como
                      jaquetas de couro pretas e amarelas escuras. Na fase
                      final e no filme El Camino, sua aparência reflete
                      o puro sofrimento e isolamento, surgindo com o rosto
                      severamente machucado, marcas de cicatrizes definitivas
                      e uma barba e cabelo longos e desgrenhados que evidenciam
                      o impacto psicológico e físico de sua jornada.
                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/saul.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Saul Goodman J̶i̶m̶m̶y̶ ̶M̶c̶G̶i̶l̶l̶</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>50</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}>Advogado</span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>12/11/1960</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      Hi, I'm Saul Goodman. Did you know that you have rights? The
                      Constitution says you do. And so do I. I believe that until
                      proven guilty, every man, woman, and child in this country
                      is innocent. And that's why I fight for you, Albuquerque!
                      Better call Saul!
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Saul Goodman (interpretado por Bob Odenkirk) possui
                      um visual espalhafatoso e deliberadamente cafona,
                      projetado para chamar a atenção como um advogado de
                      porta de cadeia extravagante. Ele é reconhecido por
                      seus ternos de corte largo em cores berrantes e
                      ultrajantes — como amarelo, rosa, azul-elétrico
                      e roxo —, sempre combinados com camisas de cores
                      contrastantes, gravatas de seda chamativas e um
                      lenço no bolso do paletó. Sua aparência física
                      inclui o cabelo castanho penteado em um
                      comb-over perfeitamente alinhado para disfarçar
                      a calvície na coroa da cabeça e um bronzeado
                      artificial de salão. Para arrematar o estilo
                      de vigarista sofisticado, ele nunca deixa de
                      usar acessórios dourados espessos, como
                      relógios e anéis grandes, além de uma fita
                      ou broche de conscientização sempre preso
                      à lapela para fingir empatia.
                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/gus.jpeg"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Gustavo Fring 'Gus'</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>51</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}>Cofundador do Los Pollos Hermanos</span> <br /><br></br>
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>??/??/1958</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      A man provides for his family. And he does it even when he's
                      not appreciated, or respected, or even
                      loved. He simply bears up and he does
                      it. Because he's a man.
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Gustavo Fring é um homem alto, esguio e de postura impecavelmente ereta,
                      com aparência sempre muito bem cuidada.
                      Tem pele morena, rosto alongado e traços
                      finos, cabelos pretos curtos e penteados
                      para trás, além de olhos escuros e
                      atentos. Costuma usar óculos de armação
                      discreta e se veste de maneira
                      extremamente formal, geralmente
                      com ternos bem ajustados, camisas
                      sociais e gravatas sóbrias.
                      Sua aparência transmite uma
                      imagem de elegância, disciplina
                      e respeitabilidade, reforçada por
                      sua expressão quase sempre séria e
                      controlada.
                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/mike.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Mike Ehrmantraut</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>65</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}>Chefe de Segurança do Los Pollos Hermanos</span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>??/??/1944</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      One day... one day, you're gonna wake up,
                      eat your breakfast, brush your teeth,
                      go about your business. And sooner or
                      later, you're gonna realize you haven't
                      thought about it. None of it.
                      And that's the moment you realize
                      you can forget.
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Mike Ehrmantraut é um homem idoso, alto e de aparência
                      robusta, com o rosto marcado por rugas e
                      uma expressão constantemente séria e
                      cansada. É completamente careca, possui
                      olhos claros e penetrantes e uma barba
                      grisalha curta que cobre o queixo e
                      parte das bochechas. Seu semblante
                      transmite dureza, experiência e
                      pouca paciência, reforçado por
                      suas sobrancelhas frequentemente
                      franzidas. Costuma vestir
                      roupas simples e discretas,
                      como camisas, jaquetas e
                      calças em tons sóbrios,
                      mantendo uma aparência
                      prática e pouco chamativa.

                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/skyler.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Skyler White</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>40</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}> Gerente do lava-rápido A1A</span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>11/08/1970</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      Someone has to protect this family from the man who protects this family.
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Skyler White é uma mulher de estatura média,
                      com aparência elegante e bem cuidada.
                      Tem pele clara, cabelos loiros claros
                      geralmente curtos, na altura dos ombros,
                      e olhos azuis. Seu rosto possui traços
                      delicados, mas frequentemente
                      apresenta uma expressão séria,
                      preocupada ou desconfiada. Costuma
                      vestir roupas discretas e formais,
                      como blusas, camisas, calças
                      e vestidos em tons neutros,
                      mantendo um visual sóbrio
                      e organizado que combina
                      com sua personalidade
                      prática e controlada.


                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/hank.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Hank Schrader</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>44</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}> Agente da DEA</span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>??/03/1966</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      You are the smartest guy I ever met,
                      and you're too stupid to see—he made
                      up his mind ten minutes ago.
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Hank Schrader é um homem alto, forte e de porte robusto,
                      com pele clara, cabeça completamente
                      careca.
                      Tem rosto largo, mandíbula marcada e
                      olhos claros, geralmente acompanhados
                      por uma expressão confiante ou
                      descontraída. Seu estilo é casual
                      e prático, usando principalmente
                      camisas polo, camisas sociais,
                      calças jeans e jaquetas, mantendo
                      uma aparência masculina e pouco
                      sofisticada.


                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.card1}>
              <div className={styles.card1config}>
                <div className={styles.card1image}>
                  <Image
                    src="/jane.png"
                    alt="Alcanos"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.ul}>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Dados
                </li>
                <li className={styles.ulItens}>
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Histórico
                </li>
                <li className={styles.ulItens} >
                  <Image
                    src="/folder.svg"
                    alt="Alcanos"
                    width={15}
                    height={15}
                    className={styles.folder}
                  />
                  Aparência
                </li>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.content1}>
                <div id="ABOUT" className={styles.tabPane}>
                  <div className={styles.headerBox}>
                    <div className={styles.headerPath}>
                      file:///home/user/documents/character/about.txt
                    </div>
                  </div>
                  <div className={styles.scrollContainer}>

                    <h4 className={styles.infoList} >
                      <b>NOME:</b> <span className={styles.alignRight}>Jane Margolis</span> <br />
                      <b>IDADE:</b> <span className={styles.alignRight}>26</span> <br />
                      <b>OCUPAÇÃO:</b> <span className={styles.alignRight}> Tatuadora -  Administrador de Imóveis</span> <br />
                      <b>ANIVERSÁRIO:</b> <span className={styles.alignRight}>04/04/1982</span> <br />
                    </h4>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>HISTÓRICO</b></h4>
                    <p className={styles.textContent}>
                      “
                      Hey, if you're trying to sell me something I've got 4 little words for you:
                      Do Not Call List. However, if you're cool, leave it at the beep
                      „
                    </p>
                    <div className={styles.greenDivider}></div>
                    <h4 className={styles.sectionTitle} ><b>APARÊNCIA</b></h4>
                    <p className={styles.textContent}>
                      Jane Margolis é uma jovem de aparência esbelta
                      e marcante, com pele clara, cabelos longos
                      e escuros, geralmente lisos e soltos, e
                      olhos castanhos. Possui traços delicados,
                      sobrancelhas bem definidas e uma expressão
                      que pode variar entre indiferente,
                      provocadora e introspectiva. Seu estilo
                      é alternativo e descontraído,
                      frequentemente usando roupas escuras,
                      camisetas, jaquetas, jeans e
                      acessórios, além de piercings
                      e tatuagens que reforçam sua
                      estética rebelde.

                    </p>
                    <div className={styles.footerBox}>
                      <div className={styles.wigglyLine}>
                        <hr className={styles.innerLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}