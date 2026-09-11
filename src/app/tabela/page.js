import Image from "next/image";
import styles from "./page.module.css";

export default function Tabela() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.tabelah1}>Tabela periódica</h1>
                <main className={styles.mainContainer}>
                    <table>
                        <colgroup>
                            <col /><col /><col /><col /><col /><col />
                            <col /><col /><col /><col /><col /><col />
                            <col /><col /><col /><col /><col /><col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td className={styles.hidrogenio}>
                                    <span className={styles.nAtomico}>1</span><br />
                                    <p className={styles.sigla}>H</p>
                                    <p className={styles.nome}>Hidrogênio</p>
                                </td>
                                <td colSpan={16} className={styles.vazio}></td>
                                <td className={styles.gasesNobres}>
                                    <span className={styles.nAtomico}>2</span><br />
                                    <p className={styles.sigla}>He</p>
                                    <p className={styles.nome}>Hélio</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.metaisAlcalinos}>
                                    <span className={styles.nAtomico}>3</span><br />
                                    <p className={styles.sigla}>Li</p>
                                    <p className={styles.nome}>Lítio</p>
                                </td>
                                <td className={styles.metaisAlcalinoterrosos}>
                                    <span className={styles.nAtomico}>4</span><br />
                                    <p className={styles.sigla}>Be</p>
                                    <p className={styles.nome}>Berílio</p>
                                </td>
                                <td colSpan={10} className={styles.vazio}></td>
                                <td className={styles.semimetais}>
                                    <span className={styles.nAtomico}>5</span><br />
                                    <p className={styles.sigla}>B</p>
                                    <p className={styles.nome}>Boro</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>6</span><br />
                                    <p className={styles.sigla}>C</p>
                                    <p className={styles.nome}>Carbono</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>7</span><br />
                                    <p className={styles.sigla}>N</p>
                                    <p className={styles.nome}>Nitrogênio</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>8</span><br />
                                    <p className={styles.sigla}>O</p>
                                    <p className={styles.nome}>Oxigênio</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>9</span><br />
                                    <p className={styles.sigla}>F</p>
                                    <p className={styles.nome}>Flúor</p>
                                </td>
                                <td className={styles.gasesNobres}>
                                    <span className={styles.nAtomico}>10</span><br />
                                    <p className={styles.sigla}>Ne</p>
                                    <p className={styles.nome}>Neônio</p>
                                </td>
                            </tr>

                            <tr>
                                <td className={styles.metaisAlcalinos}>
                                    <span className={styles.nAtomico}>11</span><br />
                                    <p className={styles.sigla}>Na</p>
                                    <p className={styles.nome}>Sódio</p>
                                </td>
                                <td className={styles.metaisAlcalinoterrosos}>
                                    <span className={styles.nAtomico}>12</span><br />
                                    <p className={styles.sigla}>Mg</p>
                                    <p className={styles.nome}>Magnésio</p>
                                </td>
                                <td colSpan={10} className={styles.vazio}></td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>13</span><br />
                                    <p className={styles.sigla}>Al</p>
                                    <p className={styles.nome}>Alumínio</p>
                                </td>
                                <td className={styles.semimetais}>
                                    <span className={styles.nAtomico}>14</span><br />
                                    <p className={styles.sigla}>Si</p>
                                    <p className={styles.nome}>Silício</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>15</span><br />
                                    <p className={styles.sigla}>P</p>
                                    <p className={styles.nome}>Fósforo</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>16</span><br />
                                    <p className={styles.sigla}>S</p>
                                    <p className={styles.nome}>Enxofre</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>17</span><br />
                                    <p className={styles.sigla}>Cl</p>
                                    <p className={styles.nome}>Cloro</p>
                                </td>
                                <td className={styles.gasesNobres}>
                                    <span className={styles.nAtomico}>18</span><br />
                                    <p className={styles.sigla}>Ar</p>
                                    <p className={styles.nome}>Argônio</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.metaisAlcalinos}>
                                    <span className={styles.nAtomico}>19</span><br />
                                    <p className={styles.sigla}>K</p>
                                    <p className={styles.nome}>Potássio</p>
                                </td>
                                <td className={styles.metaisAlcalinoterrosos}>
                                    <span className={styles.nAtomico}>20</span><br />
                                    <p className={styles.sigla}>Ca</p>
                                    <p className={styles.nome}>Cálcio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>21</span><br />
                                    <p className={styles.sigla}>Sc</p>
                                    <p className={styles.nome}>Escândio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>22</span><br />
                                    <p className={styles.sigla}>Ti</p>
                                    <p className={styles.nome}>Titânio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>23</span><br />
                                    <p className={styles.sigla}>V</p>
                                    <p className={styles.nome}>Vanádio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>24</span><br />
                                    <p className={styles.sigla}>Cr</p>
                                    <p className={styles.nome}>Cromo</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>25</span><br />
                                    <p className={styles.sigla}>Mn</p>
                                    <p className={styles.nome}>Manganês</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>26</span><br />
                                    <p className={styles.sigla}>Fe</p>
                                    <p className={styles.nome}>Ferro</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>27</span><br />
                                    <p className={styles.sigla}>Co</p>
                                    <p className={styles.nome}>Cobalto</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>28</span><br />
                                    <p className={styles.sigla}>Ni</p>
                                    <p className={styles.nome}>Níquel</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>29</span><br />
                                    <p className={styles.sigla}>Cu</p>
                                    <p className={styles.nome}>Cobre</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>30</span><br />
                                    <p className={styles.sigla}>Zn</p>
                                    <p className={styles.nome}>Zinco</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>31</span><br />
                                    <p className={styles.sigla}>Ga</p>
                                    <p className={styles.nome}>Gálio</p>
                                </td>
                                <td className={styles.semimetais}>
                                    <span className={styles.nAtomico}>32</span><br />
                                    <p className={styles.sigla}>Ge</p>
                                    <p className={styles.nome}>germânio</p>
                                </td>
                                <td className={styles.semimetais}>
                                    <span className={styles.nAtomico}>33</span><br />
                                    <p className={styles.sigla}>As</p>
                                    <p className={styles.nome}>Arsênio</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>34</span><br />
                                    <p className={styles.sigla}>Se</p>
                                    <p className={styles.nome}>Selênio</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>35</span><br />
                                    <p className={styles.sigla}>Br</p>
                                    <p className={styles.nome}>Bromo</p>
                                </td>
                                <td className={styles.gasesNobres}>
                                    <span className={styles.nAtomico}>36</span><br />
                                    <p className={styles.sigla}>Kr</p>
                                    <p className={styles.nome}>Criptônio</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.metaisAlcalinos}>
                                    <span className={styles.nAtomico}>37</span><br />
                                    <p className={styles.sigla}>Rb</p>
                                    <p className={styles.nome}>Rubídio</p>
                                </td>
                                <td className={styles.metaisAlcalinoterrosos}>
                                    <span className={styles.nAtomico}>38</span><br />
                                    <p className={styles.sigla}>Sr</p>
                                    <p className={styles.nome}>Estrôncio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>39</span><br />
                                    <p className={styles.sigla}>Y</p>
                                    <p className={styles.nome}>Ítrio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>40</span><br />
                                    <p className={styles.sigla}>Zr</p>
                                    <p className={styles.nome}>Zircônio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>41</span><br />
                                    <p className={styles.sigla}>Nb</p>
                                    <p className={styles.nome}>Nióbio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>42</span><br />
                                    <p className={styles.sigla}>Mo</p>
                                    <p className={styles.nome}>Molibdênio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>43</span><br />
                                    <p className={styles.sigla}>Tc</p>
                                    <p className={styles.nome}>Tecnécio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>44</span><br />
                                    <p className={styles.sigla}>Ru</p>
                                    <p className={styles.nome}>Rutênio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>45</span><br />
                                    <p className={styles.sigla}>Rh</p>
                                    <p className={styles.nome}>Ródio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>46</span><br />
                                    <p className={styles.sigla}>Pd</p>
                                    <p className={styles.nome}>Paládio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>47</span><br />
                                    <p className={styles.sigla}>Ag</p>
                                    <p className={styles.nome}>Prata</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>48</span><br />
                                    <p className={styles.sigla}>Cd</p>
                                    <p className={styles.nome}>Cádmio</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>49</span><br />
                                    <p className={styles.sigla}>In</p>
                                    <p className={styles.nome}>Índio</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>50</span><br />
                                    <p className={styles.sigla}>Sn</p>
                                    <p className={styles.nome}>Estanho</p>
                                </td>
                                <td className={styles.semimetais}>
                                    <span className={styles.nAtomico}>51</span><br />
                                    <p className={styles.sigla}>Sb</p>
                                    <p className={styles.nome}>Antimônio</p>
                                </td>
                                <td className={styles.semimetais}>
                                    <span className={styles.nAtomico}>52</span><br />
                                    <p className={styles.sigla}>Te</p>
                                    <p className={styles.nome}>Telúrio</p>
                                </td>
                                <td className={styles.ametais}>
                                    <span className={styles.nAtomico}>53</span><br />
                                    <p className={styles.sigla}>I</p>
                                    <p className={styles.nome}>Iodo</p>
                                </td>
                                <td className={styles.gasesNobres}>
                                    <span className={styles.nAtomico}>54</span><br />
                                    <p className={styles.sigla}>Xe</p>
                                    <p className={styles.nome}>Xenônio</p>
                                </td>
                            </tr>

                            <tr>
                                <td className={styles.metaisAlcalinos}>
                                    <span className={styles.nAtomico}>55</span><br />
                                    <p className={styles.sigla}>Cs</p>
                                    <p className={styles.nome}>Césio</p>
                                </td>
                                <td className={styles.metaisAlcalinoterrosos}>
                                    <span className={styles.nAtomico}>56</span><br />
                                    <p className={styles.sigla}>Ba</p>
                                    <p className={styles.nome}>Bário</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>57</span><br />
                                    <p className={styles.sigla}>la</p>
                                    <p className={styles.nome}>Lantânio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>72</span><br />
                                    <p className={styles.sigla}>Hf</p>
                                    <p className={styles.nome}>Háfnio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>73</span><br />
                                    <p className={styles.sigla}>Ta</p>
                                    <p className={styles.nome}>Tântalo</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>74</span><br />
                                    <p className={styles.sigla}>W</p>
                                    <p className={styles.nome}>Tungstênio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>75</span><br />
                                    <p className={styles.sigla}>Re</p>
                                    <p className={styles.nome}>Rênio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>76</span><br />
                                    <p className={styles.sigla}>Os</p>
                                    <p className={styles.nome}>Ósmio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>77</span><br />
                                    <p className={styles.sigla}>Ir</p>
                                    <p className={styles.nome}>Irídio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>78</span><br />
                                    <p className={styles.sigla}>Pt</p>
                                    <p className={styles.nome}>Platina</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>79</span><br />
                                    <p className={styles.sigla}>Au</p>
                                    <p className={styles.nome}>Ouro</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>80</span><br />
                                    <p className={styles.sigla}>Hg</p>
                                    <p className={styles.nome}>Mercúrio</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>81</span><br />
                                    <p className={styles.sigla}>Tl</p>
                                    <p className={styles.nome}>Tálio</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>82</span><br />
                                    <p className={styles.sigla}>Pb</p>
                                    <p className={styles.nome}>Chumbo</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>83</span><br />
                                    <p className={styles.sigla}>Bi</p>
                                    <p className={styles.nome}>Bismuto</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>84</span><br />
                                    <p className={styles.sigla}>Po</p>
                                    <p className={styles.nome}>Polônio</p>
                                </td>
                                <td className={styles.blocoP}>
                                    <span className={styles.nAtomico}>85</span><br />
                                    <p className={styles.sigla}>At</p>
                                    <p className={styles.nome}>Ástato</p>
                                </td>
                                <td className={styles.gasesNobres}>
                                    <span className={styles.nAtomico}>86</span><br />
                                    <p className={styles.sigla}>Rn</p>
                                    <p className={styles.nome}>Radônio</p>
                                </td>
                            </tr>

                            <tr>
                                <td className={styles.metaisAlcalinos}>
                                    <span className={styles.nAtomico}>87</span><br />
                                    <p className={styles.sigla}>Fr</p>
                                    <p className={styles.nome}>Frâncio</p>
                                </td>
                                <td className={styles.metaisAlcalinoterrosos}>
                                    <span className={styles.nAtomico}>88</span><br />
                                    <p className={styles.sigla}>Ra</p>
                                    <p className={styles.nome}>Rádio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>89</span><br />
                                    <p className={styles.sigla}>Ac</p>
                                    <p className={styles.nome}>Actínio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>104</span><br />
                                    <p className={styles.sigla}>Rf</p>
                                    <p className={styles.nome}>Rutherfórdio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>105</span><br />
                                    <p className={styles.sigla}>Db</p>
                                    <p className={styles.nome}>Dúbnio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>106</span><br />
                                    <p className={styles.sigla}>Sg</p>
                                    <p className={styles.nome}>Seabórgio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>107</span><br />
                                    <p className={styles.sigla}>Bh</p>
                                    <p className={styles.nome}>Bóhrio</p>
                                </td>
                                <td className={styles.metalTransicao}>
                                    <span className={styles.nAtomico}>108</span><br />
                                    <p className={styles.sigla}>Hs</p>
                                    <p className={styles.nome}>Hássio</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>109</span><br />
                                    <p className={styles.sigla}>Mt</p>
                                    <p className={styles.nome}>Meitnério</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>110</span><br />
                                    <p className={styles.sigla}>Ds</p>
                                    <p className={styles.nome}>Darmstádtio</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>111</span><br />
                                    <p className={styles.sigla}>Rg</p>
                                    <p className={styles.nome}>Roentgênio</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>112</span><br />
                                    <p className={styles.sigla}>Cn</p>
                                    <p className={styles.nome}>Copernício</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>113</span><br />
                                    <p className={styles.sigla}>Nh</p>
                                    <p className={styles.nome}>Nihônio</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>114</span><br />
                                    <p className={styles.sigla}>Fl</p>
                                    <p className={styles.nome}>Fleróvio</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>115</span><br />
                                    <p className={styles.sigla}>Mc</p>
                                    <p className={styles.nome}>Moscóvio</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>116</span><br />
                                    <p className={styles.sigla}>Lv</p>
                                    <p className={styles.nome}>Livermório</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>117</span><br />
                                    <p className={styles.sigla}>Ts</p>
                                    <p className={styles.nome}>Tenesso</p>
                                </td>
                                <td className={styles.desconhecido}>
                                    <span className={styles.nAtomico}>118</span><br />
                                    <p className={styles.sigla}>Og</p>
                                    <p className={styles.nome}>organessônio</p>
                                </td>
                            </tr>
                            <tr className={styles.espaco}>
                                <td colSpan={18}></td>
                            </tr>
                            <tr>
                                <td colSpan={3} className={styles.vazio}></td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>58</span><br />
                                    <p className={styles.sigla}>Ce</p>
                                    <p className={styles.nome}>Cério</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>59</span><br />
                                    <p className={styles.sigla}>Pr</p>
                                    <p className={styles.nome}>Praseodímio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>60</span><br />
                                    <p className={styles.sigla}>Nd</p>
                                    <p className={styles.nome}>Neodímio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>61</span><br />
                                    <p className={styles.sigla}>Pm</p>
                                    <p className={styles.nome}>Promécio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>62</span><br />
                                    <p className={styles.sigla}>Sm</p>
                                    <p className={styles.nome}>Samário</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>63</span><br />
                                    <p className={styles.sigla}>Eu</p>
                                    <p className={styles.nome}>Európio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>64</span><br />
                                    <p className={styles.sigla}>Gd</p>
                                    <p className={styles.nome}>Gadolíneo</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>65</span><br />
                                    <p className={styles.sigla}>Tb</p>
                                    <p className={styles.nome}>Térbio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>66</span><br />
                                    <p className={styles.sigla}>Dy</p>
                                    <p className={styles.nome}>Disprósio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>67</span><br />
                                    <p className={styles.sigla}>Ho</p>
                                    <p className={styles.nome}>Hólmio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>68</span><br />
                                    <p className={styles.sigla}>Er</p>
                                    <p className={styles.nome}>Érbio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>69</span><br />
                                    <p className={styles.sigla}>Tm</p>
                                    <p className={styles.nome}>Túlio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>70</span><br />
                                    <p className={styles.sigla}>Yb</p>
                                    <p className={styles.nome}>Itérbio</p>
                                </td>
                                <td className={styles.lantanideos}>
                                    <span className={styles.nAtomico}>71</span><br />
                                    <p className={styles.sigla}>Lu</p>
                                    <p className={styles.nome}>Lutécio</p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3} className={styles.vazio}></td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>90</span><br />
                                    <p className={styles.sigla}>Th</p>
                                    <p className={styles.nome}>Tório</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>91</span><br />
                                    <p className={styles.sigla}>Pa</p>
                                    <p className={styles.nome}>Protactínio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>92</span><br />
                                    <p className={styles.sigla}>U</p>
                                    <p className={styles.nome}>Urânio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>93</span><br />
                                    <p className={styles.sigla}>Np</p>
                                    <p className={styles.nome}>Neptúnio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>94</span><br />
                                    <p className={styles.sigla}>Pu</p>
                                    <p className={styles.nome}>Plutônio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>95</span><br />
                                    <p className={styles.sigla}>Am</p>
                                    <p className="nome">Amerício</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>96</span><br />
                                    <p className={styles.sigla}>Cm</p>
                                    <p className={styles.nome}>Cúrio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>97</span><br />
                                    <p className={styles.sigla}>Bk</p>
                                    <p className={styles.nome}>Berquélio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>98</span><br />
                                    <p className={styles.sigla}>Cf</p>
                                    <p className={styles.nome}>Califórnio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>99</span><br />
                                    <p className={styles.sigla}>Es</p>
                                    <p className={styles.nome}>Einstênio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>100</span><br />
                                    <p className={styles.sigla}>Fm</p>
                                    <p className={styles.nome}>Férmio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>101</span><br />
                                    <p className={styles.sigla}>Md</p>
                                    <p className={styles.nome}>Mendelévio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>102</span><br />
                                    <p className={styles.sigla}>No</p>
                                    <p className={styles.nome}>Nobélio</p>
                                </td>
                                <td className={styles.actinideos}>
                                    <span className={styles.nAtomico}>103</span><br />
                                    <p className={styles.sigla}>Lr</p>
                                    <p className={styles.nome}>Laurêncio</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
                <div className={styles.familias}>
                    <ul className={styles.column}>
                        <li className={styles.p1}>Metais alcalinos</li>
                        <li className={styles.p2}>Metais alcalino-terrosos</li>
                        <li className={styles.p3}>Metais de transição</li>
                        <li className={styles.p4}>Bloco p</li>
                        <li className={styles.p5}>Semimetais</li>
                        <li className={styles.p6}>Ametais</li>
                        <li className={styles.p7}>Gases nobres</li>
                        <li className={styles.p8}>Lantanídeos</li>
                        <li className={styles.p9}>Actinídeos</li>
                        <li className={styles.p10}>Propriedades desconhecidas</li>
                        <li className={styles.p11}>Hidrogênio</li>
                    </ul>
                </div>
                <div className={styles.infoConfig}>
                    <h2>Organização da Tabela Periódica</h2>
                    <p className={styles.pinfo}>
                        Os <span>períodos</span> correspondem às linhas horizontais numeradas
                        da Tabela Periódica. Os elementos presentes em um mesmo período
                        possuem a mesma quantidade de <span>camadas eletrônicas</span>.
                        Ao todo, existem sete períodos.
                        <br /><br />

                        <span>1º Período:</span> possui 2 elementos.
                        <br />
                        <span>2º Período:</span> possui 8 elementos.
                        <br />
                        <span>3º Período:</span> possui 8 elementos.
                        <br />
                        <span>4º Período:</span> possui 18 elementos.
                        <br />
                        <span>5º Período:</span> possui 18 elementos.
                        <br />
                        <span>6º Período:</span> possui 32 elementos.
                        <br />
                        <span>7º Período:</span> possui 32 elementos.
                        <br /><br />

                        Como algumas dessas linhas poderiam ficar muito extensas,
                        as séries dos <span>lantanídeos</span> e dos
                        <span> actinídeos</span> costumam ser representadas separadamente
                        na parte inferior da tabela.
                    </p>
                </div>

                <div className={styles.infoConfig}>
                    <h2>Grupos e Famílias</h2>
                    <p className={styles.pinfo}>
                        Os <span>grupos</span>, também conhecidos tradicionalmente como
                        famílias, correspondem às colunas verticais da Tabela Periódica.
                        Elementos pertencentes ao mesmo grupo apresentam características
                        semelhantes e, nos elementos representativos, possuem o mesmo
                        número de <span>elétrons na camada de valência</span>.
                        <br /><br />

                        A Tabela Periódica possui <span>18 grupos</span>, numerados de 1
                        a 18 de acordo com a organização estabelecida pela
                        <span>IUPAC</span>. Muitos dos elementos presentes nesses grupos
                        apresentam propriedades químicas semelhantes.
                        <br /><br />

                        <span>Grupo 1 (Família 1A):</span> Metais alcalinos — lítio,
                        sódio, potássio, rubídio, césio e frâncio.
                        <br />
                        <span>Grupo 2 (Família 2A):</span> Metais alcalino-terrosos —
                        berílio, magnésio, cálcio, estrôncio, bário e rádio.
                        <br />
                        <span>Grupo 13 (Família 3A):</span> Família do Boro — boro,
                        alumínio, gálio, índio, tálio e nihônio.
                        <br />
                        <span>Grupo 14 (Família 4A):</span> Família do Carbono —
                        carbono, silício, germânio, estanho, chumbo e fleróvio.
                        <br />
                        <span>Grupo 15 (Família 5A):</span> Família do Nitrogênio —
                        nitrogênio, fósforo, arsênio, antimônio, bismuto e moscóvio.
                        <br />
                        <span>Grupo 16 (Família 6A):</span> Calcogênios — oxigênio,
                        enxofre, selênio, telúrio, polônio e livermório.
                        <br />
                        <span>Grupo 17 (Família 7A):</span> Halogênios — flúor, cloro,
                        bromo, iodo, astato e tenesso.
                        <br />
                        <span>Grupo 18 (Família 8A):</span> Gases nobres — hélio,
                        neônio, argônio, criptônio, xenônio, radônio e oganessônio.
                    </p>
                </div>

                <div className={styles.infoConfig}>
                    <h2>Elementos de Transição</h2>
                    <p className={styles.pinfo}>
                        Os <span>elementos de transição</span>, também chamados de
                        metais de transição, ocupam a região central da Tabela
                        Periódica e pertencem aos grupos de 3 a 12.
                        <br /><br />

                        <span>Grupo 3 (Família 3B):</span> escândio, ítrio e a série
                        dos lantanídeos e actinídeos.
                        <br />
                        <span>Grupo 4 (Família 4B):</span> titânio, zircônio, háfnio
                        e rutherfórdio.
                        <br />
                        <span>Grupo 5 (Família 5B):</span> vanádio, nióbio, tântalo
                        e dúbnio.
                        <br />
                        <span>Grupo 6 (Família 6B):</span> cromo, molibdênio,
                        tungstênio e seabórgio.
                        <br />
                        <span>Grupo 7 (Família 7B):</span> manganês, tecnécio, rênio
                        e bóhrio.
                        <br />
                        <span>Grupo 8 (Família 8B):</span> ferro, rutênio, ósmio
                        e hássio.
                        <br />
                        <span>Grupo 9 (Família 8B):</span> cobalto, ródio, irídio
                        e meitnério.
                        <br />
                        <span>Grupo 10 (Família 8B):</span> níquel, paládio, platina
                        e darmstádio.
                        <br />
                        <span>Grupo 11 (Família 1B):</span> cobre, prata, ouro
                        e roentgênio.
                        <br />
                        <span>Grupo 12 (Família 2B):</span> zinco, cádmio, mercúrio
                        e copernício.
                    </p>
                </div>

                <div className={styles.infoConfig}>
                    <h2>Séries dos Lantanídeos e Actinídeos</h2>
                    <p className={styles.pinfo}>
                        A <span>série dos lantanídeos</span> é formada por 15 elementos:
                        lantânio, cério, praseodímio, neodímio, promécio, samário,
                        európio, gadolínio, térbio, disprósio, hólmio, érbio, túlio,
                        itérbio e lutécio.
                        <br /><br />

                        Já a <span>série dos actinídeos</span> também reúne 15 elementos:
                        actínio, tório, protactínio, urânio, netúnio, plutônio,
                        amerício, cúrio, berquélio, califórnio, einstênio, férmio,
                        mendelévio, nobélio e laurêncio.
                        <br /><br />

                        Essas duas séries são normalmente colocadas abaixo da tabela
                        principal para evitar que sua representação torne os períodos
                        ainda mais extensos.
                    </p>
                </div>

                <div className={styles.infoConfig}>
                    <h2>Sistema de Grupos da IUPAC</h2>
                    <p className={styles.pinfo}>
                        A <span>União Internacional de Química Pura e Aplicada
                            (IUPAC)</span> estabeleceu a numeração dos grupos da Tabela
                        Periódica de 1 a 18. Apesar disso, a antiga identificação
                        por letras e números, como 1A, 2A e 8B, ainda aparece
                        frequentemente em materiais didáticos.
                        <br /><br />

                        Uma característica importante dessa organização é que a antiga
                        <span> família 8B</span> corresponde atualmente aos
                        <span> grupos 8, 9 e 10</span>. Essa mudança ajuda a padronizar
                        a identificação dos elementos em diferentes países.
                    </p>
                </div>

                <div className={styles.infoConfig}>
                    <h2>Posição do Hidrogênio</h2>
                    <p className={styles.pinfo}>
                        O <span>hidrogênio</span> aparece na primeira coluna da Tabela
                        Periódica, acima dos metais alcalinos, principalmente por
                        apresentar uma configuração eletrônica semelhante à desses
                        elementos.
                        <br /><br />

                        Entretanto, o hidrogênio possui características próprias e
                        <span> não pertence aos metais alcalinos</span>. Por isso,
                        sua posição na tabela deve ser interpretada levando em conta
                        suas propriedades químicas e sua configuração eletrônica.
                    </p>
                </div>
            </main>
        </div>
    );
}
