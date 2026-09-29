# Overenie zdrojov — SAP Repozitár

Dokument zaznamenáva overovanie informácií a zdrojov použitých v repozitári SAP (Senzorická Analýza Potravín) a opravy, ktoré z neho vyplynuli.

---

## Obsah

1. [Metodológia overovania](#1-metodológia-overovania)
2. [Výsledky kontroly 09/2026](#2-výsledky-kontroly-092026)
3. [Overené zdroje](#3-overené-zdroje)
4. [Kontroverzné témy](#4-kontroverzné-témy)
5. [Prepojenie so SaIT](#5-prepojenie-so-sait)
6. [Odporúčania pre ďalší výskum](#6-odporúčania-pre-ďalší-výskum)

---

## 1. Metodológia overovania

### 1.1 Postup overovania

1. **Identifikácia zdroja** — primárny zdroj (norma, vedecký článok, kniha, predpis)
2. **Kontrola existencie** — dohľadanie v databázach (PubMed, katalóg ISO, EUR-Lex)
3. **Kontrola obsahu** — zodpovedá tvrdenie tomu, čo zdroj skutočne uvádza?
4. **Prepočet** — všetky tabuľky kritických hodnôt, príklady a vzorce boli **nezávisle prepočítané** (Python: `scipy.stats`; psychometrické funkcie podľa Ennisa)
5. **Klasifikácia** — overené / prevažujúce / kontroverzné / neoverené

### 1.2 Kritériá kvality

| Kritérium | Ako overujeme | Prijateľná úroveň |
|-----------|---------------|-------------------|
| Primárny zdroj | Peer-reviewed článok, norma, právny predpis | Povinné |
| Dohľadateľnosť | DOI, PMID, číslo normy/predpisu | Povinné |
| Zhoda obsahu | Tvrdenie zodpovedá zdroju | Povinné |
| Reprodukovateľnosť výpočtu | Prepočet dáva rovnaký výsledok | Povinné |
| Aktuálnosť | Platné vydanie normy | Odporúčané |

### 1.3 Klasifikácia spoľahlivosti

| Kategória | Označenie | Popis |
|-----------|-----------|-------|
| Overené | ✅ | Potvrdené primárnym zdrojom alebo prepočtom |
| Prevažujúce | ⚠️ | Väčšina zdrojov súhlasí, existujú alternatívne názory |
| Kontroverzné | ❌ | Zdroje sa rozchádzajú |
| Neoverené | ❓ | Zdroj sa nepodarilo nájsť alebo nepodporuje tvrdenie |

> **Upozornenie k predošlej verzii:** Predošlá verzia tohto dokumentu tvrdila, že „každá informácia v repozitári prešla procesom overovania". Kontrola 09/2026 ukázala, že to neplatilo — repozitár obsahoval chybné tabuľky, neexistujúce normy a neoveriteľné citácie (pozri kapitolu 2). Dokument bol preto prepísaný.

---

## 2. Výsledky kontroly 09/2026

### 2.1 Štatistické tabuľky a výpočty (prepočítané)

| Oblasť | Chyba v predošlej verzii | Oprava | Súbory |
|--------|--------------------------|--------|--------|
| Kritické hodnoty trojuholníkového testu | pre n ≥ 20 príliš nízke (napr. n = 60: 25 namiesto 27; n = 100: 33 namiesto 42) alebo naopak posunuté nahor | presné binomické hodnoty (zhodné s ISO 4120:2021) | iso_metody, metody (3×), claims, vzorce |
| Kritické hodnoty duo-trio a párového testu | výrazne nižšie ako správne (napr. n = 60: 33 namiesto 37) | presné binomické hodnoty, jednostranné aj obojstranné | iso_metody, metody |
| Obojstranný párový test | napr. n = 20: 6/14 namiesto 5/15 | prepočítané | iso_metody, metody_senzoriky |
| Test „A – nie A" a same-different | vyhodnotené binomickým testom s p = 1/2 | χ² / McNemar na tabuľke 2 × 2 (ISO 8588), d′ | iso_metody, metody (2×) |
| Príklad trojuholníkového testu (16/30) | p ≈ 0.0089 | p ≈ 0.019 | diskriminacne_metody |
| Príklad párového testu (38/60) | p ≈ 0.014, „významný rozdiel" | obojstranne p ≈ 0.052 → **nevýznamný** | diskriminacne_metody |
| Príklad claimu (24/54, trojuholník) | „24 > 22, významný rozdiel" | kritická hodnota je 25, p ≈ 0.058 → nevýznamný | claims |
| Replikácie v claims správe | 3 × 54 hodnotení sčítané ako 162 nezávislých pokusov | príklad nahradený; upozornenie na beta-binomický model | claims |
| Počet hodnotiteľov | obojstranné z, nesprávny tvar vzorca, vzorec pre CI namiesto sily testu | jednostranný vzorec + presný binomický výpočet; porovnanie testov pri d′ = 1 | iso_metody, vzorce, claims |
| Porovnanie citlivosti testov | trojuholník „najcitlivejší", párový „nízka citlivosť" | Thurstonovský výpočet: 2-AFC/3-AFC najsilnejšie, trojuholník a duo-trio najslabšie | iso_metody, metody (2×) |
| Waldova sekvenčná analýza | chybný vzorec hraníc (ln(0.5/0.5) = 0, sklon 0.5) | správne hranice SPRT: 4.00 + 0.415n / −2.25 + 0.415n | skalovanie |
| Penalty analýza (limonáda) | zle označené kategórie, chybný menovateľ, záver o kyslosti | opravené, doplnený vážený pokles a pravidlo 20 % | skalovanie |
| Tukeyho q hodnoty | pre k ≥ 3 podhodnotené | prepočítané (`studentized_range`) | vzorce |
| Weibull – interpretácia β | β < 1 a β > 1 zamenené; t₅₀/η pri β = 0.5 = 4.81 | opravené; 0.480 | vzorce |
| Weibull – príklad (vitamín C) | η = 44.7, t₅₀ = 37.2 d (menej ako najkratší čas 45 d!) | η ≈ 51.1, β ≈ 16.9, t₅₀ ≈ 50.0 d | vzorce |
| Weibull – príklady shelf-life | parametre nezodpovedali dátam, aritmetické chyby | nové fity (jogurt t₅₀ ≈ 28.6 d, chlieb ≈ 3.4 d) | shelf_life |
| Q10 / Ea | chybné znamienko v exponente; nesprávny vzťah Q10–Ea | ln Q10 = 10·Ea/(R·T·(T+10)) | shelf_life |
| Interval spoľahlivosti (príklad) | SS = 0.825 namiesto 0.950 | CI = [5.86; 6.24] | vzorce |
| Signifikancia TDS | P₀ = 1/n (n = panelisti) | P₀ = 1/k (k = atribúty), hranica Pineau et al. (2009) | deskriptivne_profily |
| CATA | χ² test nezávislosti | Cochranov Q test (závislé binárne dáta) | deskriptivne, metody |

### 2.2 Normy ISO

| Tvrdenie v predošlej verzii | Skutočnosť | Stav |
|-----------------------------|-----------|------|
| ISO 16741:2015 – shelf-life | Takáto senzorická norma neexistuje; správne **ISO 16779:2015** | ❌ opravené |
| ISO 16779:2015 – časovo-intenzitná analýza | ISO 16779 je norma pre **trvanlivosť** | ❌ opravené |
| ISO 20784:2005 – rýchle profily | Nenájdená v katalógu ISO | ❌ odstránené |
| ISO 22308:2005 – káva | Norma pre **korkové zátky**; nahradená ISO 22308-1:2021 | ❌ opravené |
| ISO 11037 – vnímanie textúry | Norma pre **farbu** (aktuálne 2011) | ❌ opravené |
| ISO 8586 – požiadavky na laboratórium (teplota, lux, dB…) | Priestory rieši **ISO 8589**; ISO 8586 = hodnotitelia | ❌ opravené |
| ISO 13299 ako zdroj kódovania vzoriek, kalibrácie váh | Nepravdivé priradenie; kódovanie/poradie → ISO 6658 | ❌ opravené |
| ISO 4120:2004, ISO 8586:2012, ISO 10399:2004, ISO 11036:1994, ISO 6658:2005 | Neaktuálne vydania | ⚠️ aktualizované na 2021 / 2023 / 2017 / 2020 / 2017 |

### 2.3 Fakty z fyziológie a psychofyziky

| Tvrdenie v predošlej verzii | Oprava | Zdroj |
|-----------------------------|--------|-------|
| Horkosť: receptory T1R1 + T1R3 | Horkosť = rodina **T2R (TAS2R)**; T1R1+T1R3 = umami | Chandrashekar et al.; Li et al. 2002, PNAS 99, 4692 |
| Kapsaicín ako horká látka (4 miesta) | Kapsaicín spôsobuje **pálivosť** (TRPV1), nie horkosť | — |
| Kyslá chuť: PKD2L1 | Receptorom je **OTOP1**; PKD2L1 je marker buniek | Zhang et al. 2019, [DOI](https://doi.org/10.1016/j.cell.2019.08.031) |
| GNAT3 = gustín | GNAT3 = **α-gustducín**; gustín = CA6 | — |
| PAV/PAV = supertaster | Supertaster je fenotyp, genotyp TAS2R38 ho neurčuje | Hayes et al. 2008, [DOI](https://doi.org/10.1093/chemse/bjm084) |
| „80 % chuti je čuch" | Nepodložené číslo | Spence 2015, *Flavour* 4, 30 |
| WHO: < 5 g **sodíka** | < 5 g **soli** (≈ 2 g sodíka) | WHO 2012 |
| Redukcia soli 10–15 % ročne bez detekcie | Overené: 25 % v chlebe za 6 týždňov po 5 % krokoch | Girgis et al. 2003, [DOI](https://doi.org/10.1038/sj.ejcn.1601583) |
| Umami receptor identifikovaný 2000 (Li et al., Nature) | mGluR4 variant: Chaudhari et al. 2000 (*Nat. Neurosci.*); T1R1+T1R3: Nelson et al. 2002 (*Nature*), Li et al. 2002 (*PNAS*) | ✅ opravené |
| TDS zavedené v 90. rokoch | TDS: Pineau et al. **2009** | — |
| Texture Profile Method v 80. rokoch | **1963** (Brandt, Skinner & Coleman) | — |
| Pangborn symposium každoročne | Každé **dva roky** | — |

### 2.4 Citácie, ktoré sa nepodarilo overiť (odstránené)

Kapitola *Literatúra o chuti* obsahovala ~40 citácií typu „Autor et al. (2021–2023)" bez názvu, časopisu a DOI. Náhodná vzorka bola overovaná v PubMed:

| Citácia | Výsledok overenia |
|---------|-------------------|
| Thanarajah et al. (2022) – obezita a dopamín | ❓ Neexistuje; existuje Thanarajah et al. **2019** (*Cell Metab.*) s iným obsahom |
| Han et al. (2022) – antibiotiká a T1R3/T2R138 na jazyku | ❓ Nenájdené; najbližšia je Caremoli et al. **2023** (receptory v **čreve**) |
| Lim & Johnson (2020) – 80 % zážitku z čuchu | ❓ Nenájdené |
| Boesveldt et al. (2021), Zhou et al. (2022), Risso et al. (2021) a ďalšie | ❓ Nenájdené s uvedeným obsahom |
| Plassmann et al. (2020) – očakávanie | ⚠️ Chybný rok; overená práca je z **2008** (*PNAS*) |

Všetky neoverené citácie boli z textu odstránené a nahradené overenými zdrojmi s DOI. **Odporúčanie:** každú novú citáciu pridávať s DOI.

### 2.5 Právne a regulačné údaje (claims)

| Tvrdenie v predošlej verzii | Oprava |
|-----------------------------|--------|
| Zákon č. 152/**2005** Z. z. o potravinách | Zákon č. **152/1995** Z. z. |
| Senzorické tvrdenia upravuje 1924/2006 | 1924/2006 = výživové a zdravotné tvrdenia; senzorické → 1169/2011 čl. 7, smernice 2006/114/ES a 2005/29/ES; metodicky ASTM E1958 |
| „Nízky obsah soli" < 150 mg Na/100 g | ≤ **0,12 g** sodíka/100 g |
| Redukčný claim: ≥ 25 % „pre senzorickú detekovateľnosť" + povinný spotrebiteľský test | Právne: ≥ 30 % (sodík/soľ ≥ 25 %), overenie analyticky |
| „Bez trans tukov" < 1 g/100 g tuku | Nie je definované v 1924/2006; limit priemyselných trans-tukov 2 g/100 g tuku (2019/649) |
| Čl. 7 1924/2006 = „registrácia tvrdení" | Čl. 7 = nutričné označovanie; povolené zdravotné tvrdenia → čl. 10, 13, 14 |
| 21 CFR 101.54 = tuk, 101.56 = sodík, 101.60 = vláknina | 101.62 = tuk, 101.61 = sodík, 101.60 = kalórie/cukor, 101.54 = „good source/high" |
| „70–80 % nákupných rozhodnutí sa opiera o claims" | Bez zdroja — odstránené |

---

## 3. Overené zdroje

### 3.1 Normy (platné vydania k 09/2026)

| Norma | Názov | Stav |
|-------|-------|------|
| ISO 4120:2021 | Triangle test | ✅ |
| ISO 5495:2005 (+Amd 1:2016) | Paired comparison test | ✅ |
| ISO 6658:2017 | General guidance (methodology) | ✅ |
| ISO 8586:2023 | Selection, training and monitoring of assessors | ✅ |
| ISO 8588:2017 | "A" – "not A" test | ✅ |
| ISO 8589:2007 (+Amd 1:2014) | Design of test rooms | ✅ |
| ISO 10399:2017 | Duo-trio test | ✅ |
| ISO 11035:1994 | Identification and selection of descriptors | ⚠️ staršia norma, overiť platnosť |
| ISO 11036:2020 | Texture profile | ✅ |
| ISO 11037:2011 | Colour assessment | ✅ |
| ISO 11132:2021 | Performance of a quantitative descriptive panel | ✅ (overené v katalógoch národných normalizačných orgánov) |
| ISO 11136:2014 | Hedonic tests | ✅ |
| ISO 13299:2016 | Establishing a sensory profile | ✅ |
| ISO 16779:2015 | Shelf life of foodstuffs | ✅ (overené v katalógoch národných normalizačných orgánov) |
| ISO 22308-1:2021 | Cork bark – sensory evaluation (nahrádza ISO 22308:2005) | ✅ |

### 3.2 Knihy

| Autor(i) | Názov | Vydavateľ | Rok | Overenie |
|----------|-------|-----------|-----|----------|
| Lawless, H.T. & Heymann, H. | Sensory Evaluation of Food: Principles and Practices (2nd ed.) | Springer | 2010 | ✅ |
| Stone, H. & Sidel, J.L. | Sensory Evaluation Practices (3rd ed.) | Academic Press | 2004 | ✅ |
| Meilgaard, M.C., Civille, G.V. & Carr, B.T. | Sensory Evaluation Techniques (5th ed.) | CRC Press | 2016 | ✅ |
| Kemp, S.E., Hollowood, T. & Hort, J. | Sensory Evaluation: A Practical Handbook | Wiley-Blackwell | **2009** | ✅ (predtým chybne 2011) |
| Hough, G. | Sensory Shelf Life Estimation of Food Products | CRC Press | 2010 | ✅ |
| Bi, J. | Sensory Discrimination Tests and Measurements | Blackwell | 2006 | ✅ |
| Næs, T., Brockhoff, P.B. & Tomic, O. | Statistics for Sensory and Consumer Science | Wiley | 2010 | ✅ |

### 3.3 Články overené v PubMed (výber)

| Citácia | DOI |
|---------|-----|
| Kim et al. (2003). Positional cloning … PTC. *Science* 299, 1221–1225 | [10.1126/science.1080190](https://doi.org/10.1126/science.1080190) |
| Hayes et al. (2008). Supertasting and PROP bitterness depends on more than the TAS2R38 gene. *Chem. Senses* 33, 255–265 | [10.1093/chemse/bjm084](https://doi.org/10.1093/chemse/bjm084) |
| Garneau et al. (2014). Crowdsourcing taste research. *Front. Integr. Neurosci.* 8, 33 | [10.3389/fnint.2014.00033](https://doi.org/10.3389/fnint.2014.00033) |
| Small et al. (2005). Orthonasal vs. retronasal odorant perception. *Neuron* 47, 593–605 | [10.1016/j.neuron.2005.07.022](https://doi.org/10.1016/j.neuron.2005.07.022) |
| Thanarajah et al. (2019). Food intake recruits … dopaminergic circuits. *Cell Metab.* 29, 695–706 | [10.1016/j.cmet.2018.12.006](https://doi.org/10.1016/j.cmet.2018.12.006) |
| Plassmann et al. (2008). Marketing actions … experienced pleasantness. *PNAS* 105, 1050–1054 | [10.1073/pnas.0706929105](https://doi.org/10.1073/pnas.0706929105) |
| Zhang et al. (2019). Sour sensing from the tongue to the brain. *Cell* 179, 392–402 | [10.1016/j.cell.2019.08.031](https://doi.org/10.1016/j.cell.2019.08.031) |
| Running, Craig & Mattes (2015). Oleogustus. *Chem. Senses* 40, 507–516 | [10.1093/chemse/bjv036](https://doi.org/10.1093/chemse/bjv036) |
| Tordoff et al. (2012). T1R3: a human calcium taste receptor. *Sci. Rep.* 2, 496 | [10.1038/srep00496](https://doi.org/10.1038/srep00496) |
| Girgis et al. (2003). A one-quarter reduction in the salt content of bread … *Eur. J. Clin. Nutr.* 57, 616–620 | [10.1038/sj.ejcn.1601583](https://doi.org/10.1038/sj.ejcn.1601583) |
| Hutchings, Low & Keast (2019). Sugar reduction … *Crit. Rev. Food Sci. Nutr.* 59, 2287–2307 | [10.1080/10408398.2018.1450214](https://doi.org/10.1080/10408398.2018.1450214) |
| Stelick et al. (2018). Dynamic context sensory testing (VR). *J. Food Sci.* 83, 2047–2051 | [10.1111/1750-3841.14275](https://doi.org/10.1111/1750-3841.14275) |
| Caremoli et al. (2023). Microbiota-dependent upregulation of bitter taste receptor subtypes … *Nutrients* 15, 4145 | [10.3390/nu15194145](https://doi.org/10.3390/nu15194145) |
| Talavera et al. (2005). Heat activation of TRPM5 underlies thermal sensitivity of sweet taste. *Nature* 438, 1022–1025 | PMID 16355226 |
| Wolraich et al. (1995). The effect of sugar on behavior or cognition in children. *JAMA* 274, 1617–1621 | PMID 7474248 |

### 3.4 Webové zdroje

| Zdroj | URL |
|-------|-----|
| ISO – katalóg ISO/TC 34/SC 12 | https://www.iso.org/committee/47858/x/catalogue/ |
| EUR-Lex (predpisy EÚ) | https://eur-lex.europa.eu/ |
| PubMed (NIH) | https://pubmed.ncbi.nlm.nih.gov/ |
| SaIT – Senzometria v R | https://github.com/senzorika/SaIT |

---

## 4. Kontroverzné témy

### 4.1 „5 chutí" vs. viac chutí

| Téma | Status | Podrobnosti |
|------|--------|-------------|
| Základných chutí je 5 | ✅ Overené | Sladká, slaná, kyslá, horká, umami; umami opísal K. Ikeda (1908), receptory identifikované 2000–2002 |
| Kyslá chuť | ✅ Overené | Samostatná základná chuť s vlastným receptorom (OTOP1) a vlastnou nervovou dráhou (Zhang et al., 2019) |
| Chuť tuku (oleogustus) | ⚠️ Prevažujúce | Navrhovaná, existujú receptory (CD36, GPR120) aj percepčné dôkazy (Running et al., 2015) |
| Chuť vápnika | ❌ Kontroverzné | Receptor T1R3 (Tordoff et al., 2012), ale u ľudí málo skúmané |
| Kokumi | ❌ Kontroverzné | Skôr modulátor (CaSR) než samostatná chuťová kvalita |

> Predošlá verzia uvádzala „kakao ako šiestu chuť" a „kyslú chuť ako kontroverznú" — obe tvrdenia boli nesprávne.

### 4.2 Supertasteri

| Tvrdenie | Status | Podrobnosti |
|----------|--------|-------------|
| Supertasteri existujú (fenotyp) | ✅ Overené | Bartoshuk et al. (1994) |
| ~25 % populácie sú supertasteri | ⚠️ Prevažujúce | 15–35 % podľa definície (rezu škály) a populácie |
| Supertasteri majú viac hubovitých papíl | ❌ Kontroverzné | Veľká štúdia nenašla vzťah (Garneau et al., 2014) |
| Supertasteri vnímajú horkosť PROP intenzívnejšie | ✅ Overené | Definícia fenotypu |
| Supertaster = genotyp PAV/PAV | ❌ Nesprávne | Hayes et al. (2008) |
| Supertasteri jedia menej zeleniny | ❌ Kontroverzné | Nekonzistentné výsledky |
| Supertasteri sú lepší hodnotitelia | ❌ Kontroverzné | Nie je dôkaz |

### 4.3 Farba a vnímanie chuti

| Tvrdenie | Status | Podrobnosti |
|----------|--------|-------------|
| Farba ovplyvňuje identifikáciu a intenzitu chuti | ✅ Overené | Napr. DuBose, Cardello & Maller (1980), *J. Food Sci.*; prehľad Spence et al. (2010), *Chemosensory Perception* |
| Červená farba zvyšuje vnímanú sladkosť | ⚠️ Prevažujúce | Viaceré štúdie (napr. Johnson & Clydesdale, 1982), ale efekt závisí od kontextu a nie je vždy replikovaný |
| Modrá/zelená farba mení vnímanie sladkosti/kyslosti | ⚠️ Prevažujúce | Menej konzistentné dôkazy |

**Mechanizmus:** Prevažne naučené asociácie (zrelé ovocie ↔ sladké) — kultúrne podmienené.

### 4.4 Glutamát a „Chinese restaurant syndrome"

| Tvrdenie | Status | Podrobnosti |
|----------|--------|-------------|
| Glutamát spôsobuje „Chinese restaurant syndrome" | ❌ Nepotvrdené | Pôvodne list Kwoka (1968, *NEJM*); dvojito zaslepené štúdie konzistentnú reakciu nepotvrdzujú |
| Glutamát je bezpečný pri bežnom príjme | ✅ Overené | JECFA, EFSA (EFSA 2017 stanovila skupinový ADI 30 mg/kg ž. h./deň pre glutamáty E 620–625) |
| Glutamát sa prirodzene vyskytuje v potravinách | ✅ Overené | Paradajky, zrejúce syry, huby, mäso |

### 4.5 Cukor a hyperaktivita

| Tvrdenie | Status | Podrobnosti |
|----------|--------|-------------|
| Cukor spôsobuje hyperaktivitu u detí | ❌ Nepotvrdené | Metaanalýza Wolraich et al. (1995), *JAMA* |
| Rodičia vnímajú hyperaktivitu po cukre | ⚠️ Prevažujúce | Efekt očakávania |
| Cukor spôsobuje ADHD | ❌ Nepotvrdené | — |

---

## 5. Prepojenie so SaIT

Štatistické postupy opísané v repozitári SAP je možné prakticky overiť v R pomocou cvičení v repozitári **[senzorika/SaIT](https://github.com/senzorika/SaIT)** (Senzometria v R, SK/EN). Mapovanie kapitol SAP na cvičenia SaIT je v [README](../README.md#prepojenie-so-sait--senzometria-v-r). Kontrolné výpočty tejto revízie (kritické hodnoty, sila testov, Weibull) je možné reprodukovať napr. funkciami `binom.test()`, `sensR::discrim()`, `sensR::discrimSS()` a `survival::survreg()` — [cvičenia 5a, 10, 13, 14](https://senzorika.github.io/SaIT/teoria/index.html).

---

## 6. Odporúčania pre ďalší výskum

### 6.1 Kde hľadať spoľahlivé informácie

| Zdroj | Typ | Odporúčanie |
|-------|-----|-------------|
| Katalóg ISO, ASTM | Normy | Primárny zdroj pre metodiku; vždy overiť aktuálne vydanie |
| EUR-Lex | Predpisy EÚ | Konsolidované znenia nariadení |
| PubMed, Scopus, Web of Science | Databázy článkov | Overiť existenciu a obsah (DOI) |
| Učebnice (Lawless & Heymann, Meilgaard, Næs et al.) | Metodika a štatistika | Pre výpočty a interpretáciu |

### 6.2 Ako vyhodnocovať zdroje

1. **Citácia bez DOI/časopisu je podozrivá** — dohľadajte ju skôr, než ju použijete
2. **Prepočítajte tabuľky a príklady** — kritické hodnoty sa dajú overiť jedným príkazom (`qbinom`, `binom.test`)
3. **Overte, či zdroj skutočne tvrdí to, čo sa mu pripisuje**
4. **Rozlišujte normatívne požiadavky a odporúčania z praxe**
5. **Pozor na „populárne čísla"** (80 % chuti je čuch, 70–80 % nákupov…) — často nemajú zdroj

### 6.3 Témy pre budúci výskum

| Téma | Prečo je dôležité | Aktuálna medzera |
|------|-------------------|------------------|
| Genetika chuťových receptorov | Individuálne rozdiely | Vzťah genotyp – fenotyp – strava |
| Mikrobióm a chuť | Individuálne rozdiely | Kauzálne dôkazy u ľudí |
| AI predikcia senzorických profilov | Efektivita výskumu | Validácia modelov |
| Kultúrne rozdiely v chuti | Globalizácia potravín | Systematické štúdie |
| Udržateľnosť a senzorika | Alternatívne potraviny | Akceptácia spotrebiteľov |

---

**Posledná aktualizácia:** September 2026 (úplná revízia faktov, výpočtov a citácií)

*Dokument vytvorený pre projekt SAP — Senzorická Analýza Potravín*
