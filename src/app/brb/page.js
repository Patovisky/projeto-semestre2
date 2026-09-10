"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Brb() {
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
        </div>
      </main>
    </div>
  );
}