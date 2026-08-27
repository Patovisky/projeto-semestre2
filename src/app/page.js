import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";

export default function Home() {
  return (
   
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Nomenclatura IUPAC</h3>
        <p>Tabela</p>
        <div className={styles.tabelas}>
          <table>
            <thead>
              <tr>
                <th>Prefixo</th>
                <th>Número de carbonos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>met</td>
                <td>1</td>
              </tr>
              <tr>
                <td>et</td>
                <td>2</td>
              </tr>
              <tr>
                <td>prop</td>
                <td>3</td>
              </tr>
              <tr>
                <td>but</td>
                <td>4</td>
              </tr>
              <tr>
                <td>pent</td>
                <td>5</td>
              </tr>
              <tr>
                <td>hex</td>
                <td>6</td>
              </tr>
              <tr>
                <td>hept</td>
                <td>7</td>
              </tr>
              <tr>
                <td>oct</td>
                <td>8</td>
              </tr>
              <tr>
                <td>non</td>
                <td>9</td>
              </tr>
              <tr>
                <td>dec</td>
                <td>10</td>
              </tr>
              <tr>
                <td>unodec</td>
                <td>11</td>
              </tr>
              <tr>
                <td>dodec</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Infixo</th>
                <th>ligação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>an</td>
                <td>Ligação simples</td>
              </tr>
              <tr>
                <td>en</td>
                <td>Ligação dupla</td>
              </tr>
              <tr>
                <td>in</td>
                <td>Ligação tripla</td>
              </tr>
              <tr>
                <td>Dien</td>
                <td>duas ligações duplas</td>
              </tr>
              <tr>
                <td>Diin</td>
                <td>Duas ligações triplas</td>
              </tr>
              <tr>
                <td>Trien</td>
                <td>Três ligações duplas</td>
              </tr>
              <tr>
                <td>Triin</td>
                <td>Três ligações triplas</td>
              </tr>
              <tr>
                <td>Enin</td>
                <td>Uma ligação dupla e uma tripla</td>
              </tr>
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
              <tr>
                <td>o</td>
                <td>Hidrocarbonetos</td>
              </tr>
              <tr>
                <td>ol</td>
                <td>Álcool</td>
              </tr>
              <tr>
                <td>al</td>
                <td>Aldeido</td>
              </tr>
              <tr>
                <td>ona</td>
                <td>cetona</td>
              </tr>
              <tr>
                <td>óico</td>
                <td>Ácido carboxilico</td>
              </tr>
              <tr>
                <td>Éster</td>
                <td>[Nome do ácido]+oato de [nome do radical]+a</td>
              </tr>
              <tr>
                <td>Amina</td>
                <td>amina</td>
              </tr>
              <tr>
                <td>Amida</td>
                <td>amida</td>
              </tr>
              <tr>
                <td>Ácido sulfônico</td>
                <td>sulfônico</td>
              </tr>
              <tr>
                <td>Éter</td>
                <td>Oficial: [Menor radical]+óxi+[Hidrocarboneto correspondente ao maior radical] Usual:
                  Éter + nome dos radicais em ordem alfabética terminados em -ico (ou seguidos pela palavra
                  éter) </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
