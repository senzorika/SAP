# Škálovanie v senzorickej analýze

## 1. Úvod do škálovania

### 1.1 Čo je škálovanie?

Škálovanie (scaling) je proces **priradení číselných hodnôt** senzorickým vlastnostiam alebo subjektívnym pocitom. V senzorickej analýze umožňuje kvantifikovať kvalitatívne vlastnosti produktov (napr. sladkosť, horkosť, príjemnosť) do **kvantitatívnych dát**, ktoré je možné štatisticky analyzovať.

### 1.2 Prečo je škálovanie dôležité?

| Dôvod | Vysvetlenie |
|---|---|
| **Kvantifikácia** | Prevod subjektívnych pocitov na číselné hodnoty |
| **Štatistická analýza** | Umožňuje výpočet priemerov, smerodajných odchýlok, testov |
| **Porovnateľnosť** | Umožňuje porovnávať produkty, panely, časové body |
| **Komunikácia** | Objektívny spôsob prenosu senzorických výsledkov |
| **Vývoj produktu** | Sledovanie zmien v čase, optimalizácia receptúr |
| **Kontrola kvality** | Stanovenie akceptačných limitov |

### 1.3 Typy škál

```
Škály v senzorickej analýze
├── Kvalitatívé škály
│   ├── Nominálne (kategorické)
│   └── Ordinálne (poradové)
├── Kvantitatívne škály
│   ├── Intervalové
│   └── Poměrové
└── Špeciálne senzorické škály
    ├── Hedonické škály
    ├── Intenzitné škály
    ├── Semantické škály
    ├── JAR škála
    └── Lineárne škály (VAS)
```

---

## 2. Hedonické škály (Hedonic Scales)

### 2.1 9-bodová hedonická škála (Peryam & Pilgrim)

Najrozšírenejšia hedonická škála, predstavená Peryamom a Pilgrimom v roku 1957. Používa sa na meranie **celkovej príjemnosti** (overall liking) produktu.

**Škála:**

| Bod | Označenie | Popis |
|---|---|---|
| 9 | Mimoriadne sa mi páči | Najvyššia možná príjemnosť |
| 8 | Veľmi sa mi páči | Vysoká príjemnosť |
| 7 | Stredne sa mi páči | Stredne vysoká príjemnosť |
| 6 | Trochu sa mi páči | Mierna príjemnosť |
| 5 | Ani sa mi páči, ani sa mi nepáči | Neutrálna hodnota |
| 4 | Trochu sa mi nepáči | Mierna nepríjemnosť |
| 3 | Stredne sa mi nepáči | Stredne vysoká nepríjemnosť |
| 2 | Veľmi sa mi nepáči | Vysoká nepríjemnosť |
| 1 | Mimoriadne sa mi nepáči | Najnižšia možná príjemnosť |

*Originál (Peryam & Pilgrim, 1957): like extremely / very much / moderately / slightly / neither like nor dislike / dislike slightly / … / dislike extremely.*

### 2.2 7-bodová škála

Kompaktná verzia 9-bodovej škály, vhodná pre **rýchle testy** alebo **konzumentov**.

| Bod | Označenie |
|---|---|
| 7 | Veľmi sa mi páči |
| 6 | Páči sa mi |
| 5 | Trochu sa mi páči |
| 4 | Neutrálne |
| 3 | Trochu sa mi nepáči |
| 2 | Nepáči sa mi |
| 1 | Veľmi sa mi nepáči |

### 2.3 5-bodová škála

Najjednoduchšia hedonická škála, vhodná pre **rýchle screeningové testy** alebo **deti**.

| Bod | Označenie |
|---|---|
| 5 | Veľmi dobré |
| 4 | Dobré |
| 3 | Priemerné |
| 2 | Zlé |
| 1 | Veľmi zlé |

### 2.4 Výpočet prijatia a odmietnutia

**Priemerné skóre (Mean Score):**

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$

**Percento prijatia (% Acceptance):**

$$\% \text{ Prijatia} = \frac{\text{Počet testovateľov so skóre} \geq 6}{n} \times 100$$

**Percento odmietnutia (% Rejection):**

$$\% \text{ Odmietnutia} = \frac{\text{Počet testovateľov so skóre} \leq 4}{n} \times 100$$

**Index prijatia (Acceptance Index):**

$$AI = \frac{\bar{x} - 1}{8} \times 100$$

Kde $\bar{x}$ je priemerné skóre na 9-bodovej škále. V literatúre sa používa aj varianta $AI = \bar{x}/9 \times 100$ (s orientačnou hranicou ≥ 70 %); vždy uveďte, ktorú definíciu používate.

> 🧪 **Precvič v R ([SaIT](https://github.com/senzorika/SaIT)):** interval spoľahlivosti priemeru — [cvičenie 2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · grafy rozdelenia odpovedí — [cvičenie 4](https://senzorika.github.io/SaIT/teoria/cvicenie04.html) · porovnanie produktov (ANOVA / Friedman) — [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html)

### 2.5 Kedy použiť ktorú

| Škála | Odporúčané použitie |
|---|---|
| **9-bodová** | Výskum produktu, konzumentské testy, porovnanie produktov |
| **7-bodová** | Rýchle testy, konzumentské testy, deti |
| **5-bodová** | Screeningové testy, deti, rýchle kontroly |

### 2.6 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Jednoduchá na použitie | Subjektívne skóre (závisí od testovateľa) |
| Široko akceptovaná | Menej citlivá ako intenzitné škály |
| Vhodná pre konzumentov | Nemožnosť kvantifikovať intenzitu rozdielu |
| Jednoduchá interpretácia | „Central tendency bias" (testovateľia sa vyhýbajú extrémom) |
| Umožňuje rýchle testy | Kultúrne rozdiely v používaní škál |

---

## 3. Intenzitné škály (Intensity Scales)

### 3.1 Kategorické škály (3, 5, 7, 9-bodové)

Kategorické škály sa používajú na meranie **intenzity** konkrétneho senzorického atribútu (napr. sladkosť, horkosť, kyslosť).

**Príklad – 9-bodová intenzitná škála pre sladkosť:**

| Bod | Označenie |
|---|---|
| 9 | Extrémne sladké |
| 8 | Veľmi sladké |
| 7 | Výrazne sladké |
| 6 | Stredne sladké |
| 5 | Mierne sladké |
| 4 | Trochu sladké |
| 3 | Slabo sladké |
| 2 | Veľmi slabo sladké |
| 1 | Nesladké |

### 3.2 Lineárna škála (15 cm)

Lineárna škála (tiež **Visual Analogue Scale – VAS**) je **nepretržitá škála**, v senzorike typicky 15 cm (kotvy často 1,25 cm od okrajov), kde testovateľ označí intenzitu atribútu čiarou.

**Formát:**
```
0 cm                                          15 cm
|─────────────────────────────────────────────|
Najslabšie                              Najsilnejšie
vnímané                                  vnímané
```

**Výpočet hodnoty:**

$$Hodnota = \frac{\text{Vzdialenosť od ľavého okraja (cm)}}{15} \times 100$$

### 3.3 Semantická diferenciálna škála

Semantická diferenciálna škála (Osgood, 1957) používa **bipolárne adjektíva** na meranie **perceptuálnych** a **afektívnych** reakcií.

**Príklad – 7-bodová semantická škála:**

```
Nepríjemné  ←──┼──┼──┼──┼──┼──→  Príjemné
              1  2  3  4  5  6  7

Slabé       ←──┼──┼──┼──┼──┼──→  Silné
              1  2  3  4  5  6  7

Prírodné    ←──┼──┼──┼──┼──┼──→  Umelé
              1  2  3  4  5  6  7
```

### 3.4 Výpočet priemerov a CI

**Priemerné skóre:**

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$

**Smerodajná odchýlka:**

$$s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$$

**95% Interval spoľahlivosti (CI):**

$$CI = \bar{x} \pm t_{0.025, n-1} \times \frac{s}{\sqrt{n}}$$

Kde $t_{0.025, n-1}$ je kritická hodnota t-rozdelenia pre n-1 stupňov voľnosti.

### 3.5 Kedy použiť ktorú

| Škála | Odporúčané použitie |
|---|---|
| **3-bodová** | Rýchle screeningové testy, deti |
| **5-bodová** | Konzumentské testy, rýchle testy |
| **7-bodová** | Výskum produktu, porovnanie atribútov |
| **9-bodová** | Cvičený panel, detaná analýza |
| **Lineárna (VAS)** | Výskum, maximálna citlivosť |
| **Semantická** | Perceptuálna analýza, branding |

### 3.6 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Kvantifikuje intenzitu | Vyžaduje tréning (pre kategorické škály) |
| Vysoká citlivosť (VAS) | „End-effect bias" (testovateľia sa vyhýbajú extrémom) |
| Umožňuje štatistickú analýzu | Kultúrne rozdiely v používaní škál |
| Vhodná pre cvičený panel | Menej vhodná pre konzumentov (VAS) |

---

## 4. Waldova sekvenčná analýza (Wald's Sequential Analysis)

### 4.1 Princíp

Waldova sekvenčná analýza je **adaptívny prístup** k testovaniu, kde sa rozhodnutie prijíma **postupne** po každej odpovedi testovateľa. Na rozdiel od tradičných metód s fixným počtom testovateľov, sekvenčná analýza umožňuje **skončiť test skôr**, ak je výsledok jednoznačný.

### 4.2 Ako funguje

**Kroky:**

1. **Stanovenie hypotéz:**
   - H₀: Neexistuje rozdiel medzi vzorkami (p = p₀)
   - H₁: Existuje rozdiel (p = p₁)

2. **Stanovenie parametrov:**
   - α = pravdepodobnosť chyby I. typu (typicky 0.05)
   - β = pravdepodobnosť chyby II. typu (typicky 0.20)
   - p₀ = pravdepodobnosť úspechu pri H₀ (napr. 1/3 pre trojuholníkový test)
   - p₁ = pravdepodobnosť úspechu pri H₁ (napr. 0.5)

3. **Výpočet hraníc** (SPRT pre binomické dáta; ISO 16820:2019):
   - Spoločný menovateľ: $D = \ln\left(\frac{p_1}{p_0}\right) + \ln\left(\frac{1-p_0}{1-p_1}\right)$
   - Sklon hraníc: $s = \ln\left(\frac{1-p_0}{1-p_1}\right) / D$
   - Horná hranica (prijmi H₁): $a_n = \frac{\ln\left(\frac{1-\beta}{\alpha}\right)}{D} + s \cdot n$
   - Dolná hranica (prijmi H₀): $b_n = -\frac{\ln\left(\frac{1-\alpha}{\beta}\right)}{D} + s \cdot n$

4. **Pravidlá rozhodovania:**
   - Ak počet správnych odpovedí ≥ a_n → **Zamietni H₀** (existuje rozdiel)
   - Ak počet správnych odpovedí ≤ b_n → **Prijmni H₀** (neexistuje rozdiel)
   - Ak b_n < počet správnych odpovedí < a_n → **Pokračuj v testovaní**

### 4.3 Výpočet

**Príklad pre trojuholníkový test (p₀ = 1/3, p₁ = 0.5, α = 0.05, β = 0.20):**

```
D = ln(0.5/0.333) + ln(0.667/0.5) = 0.405 + 0.288 = 0.693
s = 0.288 / 0.693 = 0.415

a_n = ln(0.80/0.05) / 0.693 + 0.415·n = 2.773/0.693 + 0.415·n ≈ 4.00 + 0.415·n
b_n = −ln(0.95/0.20) / 0.693 + 0.415·n = −1.558/0.693 + 0.415·n ≈ −2.25 + 0.415·n
```

Napr. po n = 20 hodnoteniach: H₁ sa prijme pri ≥ 12.3 → **13** správnych odpovediach, H₀ pri ≤ 6.05 → **6** správnych; medzi tým sa pokračuje. (Predošlá verzia mala chybný vzorec — ln(0.5/0.5) = 0 a sklon 0.5.)

### 4.4 Kedy použiť

- Keď je **čas obmedzený**
- Keď je **náročné získať testovateľov**
- Pri **drahých** alebo **vzácnych** vzorkách
- Keď je potrebné **rýchlo rozhodnúť**
- Pri **pilotných** testoch

### 4.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Môže skrátiť test o 30–50% | Zložitá interpretácia |
| Flexibilný počet testovateľov | Vyžaduje počítačovú podporu |
| Etický prístup (menej testovateľov) | Menej známa v praxi |
| Vhodný pre drahé vzorky | Nemožnosť presného plánovania |

---

## 5. Thurstone d-prime (d')

### 5.1 Princíp signal detection theory

Thurstone d-prime (d') je miera **citlivosti** (sensitivity) odvodená z **teórie detekcie signálu** (Signal Detection Theory – SDT). Meria schopnosť testovateľa **rozlíšiť** signál (rozdiel) od šumu (náhodná variabilita).

**Koncepcia:**
- **Signál:** Skutočný rozdiel medzi vzorkami
- **Šum:** Náhodná variabilita v percepcii
- **d':** Vzdialenosť medzi distribúciou signálu a šumu (v jednotkách smerodajnej odchýlky)

### 5.2 Výpočet d'

$$d' = z(\text{Hit Rate}) - z(\text{False Alarm Rate})$$

Kde:
- **Hit Rate (H):** Pravdepodobnosť správnej identifikácie odlišnej vzorky
- **False Alarm Rate (F):** Pravdepodobnosť chybnej identifikácie (keď testovateľ povie „odlišná", ale vzorky sú rovnaké)
- **z:** Inverzná kumulatívna funkcia štandardného normálneho rozdelenia

**Výpočet krokov:**

1. Vypočítaj Hit Rate: $H = \frac{\text{Počet správnych identifikácií}}{\text{Celkový počet pokusov s odlišnou vzorkou}}$
2. Vypočítaj False Alarm Rate: $F = \frac{\text{Počet chybných identifikácií}}{\text{Celkový počet pokusov s rovnakými vzorkami}}$
3. Prevod na z-skóre pomocou inverznej normálnej funkcie
4. Výpočet d' = z(H) - z(F)

### 5.3 Interpretácia d'

| d' hodnota | Interpretácia | Úroveň citlivosti |
|---|---|---|
| 0.0 | Žiadna citlivosť | Náhodné hádanie |
| 0.5 | Veľmi slabá | Takmer neznáma |
| 1.0 | Slabá | Rozoznateľná |
| 1.5 | Stredná | Jasná |
| 2.0 | Dobrá | Veľmi jasná |
| 2.5 | Výborná | Takmer dokonalá |
| 3.0+ | Výborná | Takmer dokonalá |

### 5.4 Tabuľka d' hodnôt a ich význam

Rovnaké d′ dáva v rôznych testoch rôzny podiel správnych odpovedí (psychometrické funkcie):

| d' | A–nie A, nestranné kritérium: Φ(d′/2) | 2-AFC: Φ(d′/√2) | Trojuholník | Význam v praxi |
|---|---|---|---|---|
| 0.0 | 50 % | 50 % | 33 % | Náhodné hádanie |
| 0.5 | 60 % | 64 % | 36 % | Subtilný rozdiel |
| 1.0 | 69 % | 76 % | 42 % | Mierny rozdiel |
| 1.5 | 77 % | 86 % | 51 % | Výrazný rozdiel |
| 2.0 | 84 % | 92 % | 61 % | Veľmi výrazný rozdiel |
| 2.5 | 89 % | 96 % | 70 % | Extrémne výrazný rozdiel |
| 3.0 | 93 % | 98 % | 78 % | Takmer dokonalé rozlíšenie |

> 🧪 **SaIT:** Thurstonov model a d′ — [cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html)

### 5.5 Kedy použiť

- Keď je potrebné **oddeliť** citlivosť od response bias
- Pri **porovnaní** citlivosti rôznych panelov
- Keď sa testuje **subtilný** rozdiel
- Pri **výskumných** štúdiách senzorického vnímania
- Keď je potrebné **korigovať** za guessing strategy

### 5.6 Praktický príklad s výpočtom

**Scénár:** Testuje sa schopnosť panelu rozlíšiť dve vzorky kávy úlohou **A – nie A** (yes/no). Panel má 20 testovateľov, každý vykoná 10 pokusov (5 × vzorka „nie A" = odlišná, 5 × vzorka A = štandard).

> Poznámka: vzorec d′ = z(H) − z(F) platí pre úlohu A – nie A (yes/no). Pri teste **same-different** (páry rovnaké/odlišné) treba iný Thurstonov model (sensR::samediff) — preto bol pôvodný scenár upravený.

**Výsledky:**
- Pri vzorke „nie A": 85 odpovedí „nie A" zo 100 pokusov (hit rate)
- Pri vzorke A: 15 chybných odpovedí „nie A" zo 100 pokusov (false alarm)

**Výpočet:**

```
Hit Rate (H) = 85/100 = 0.85
False Alarm Rate (F) = 15/100 = 0.15

z(H) = z(0.85) ≈ 1.036
z(F) = z(0.15) ≈ -1.036

d' = 1.036 - (-1.036) = 2.072
```

**Interpretácia:** d' = 2.072 → **Dobrá citlivosť**. Panel je schopný spoľahlivo rozlíšiť dve vzorky kávy. Pri nestrannom kritériu to zodpovedá približne 85 % správnych odpovedí (Φ(d′/2) = Φ(1.036) ≈ 0.85). Pozn.: 100 pokusov pochádza od 20 hodnotiteľov — pokusy nie sú úplne nezávislé, čo treba zohľadniť pri intervale spoľahlivosti d′.

---

## 6. Just-About-Right (JAR) škála

### 6.1 Princíp

JAR škála je **speciálna senzorická škála** používaná na meranie **optimálnej intenzity** atribútu. Testovateľ hodnotí, či je intenzita atribútu **príliš nízka**, **práve správna** alebo **príliš vysoká**.

**JAR škála:**

| Hodnotenie | Označenie |
|---|---|
| 1 | Príliš slabé |
| 2 | Trochu slabé |
| 3 | Práve správne (JAR) |
| 4 | Trochu silné |
| 5 | Príliš silné |

### 6.2 5-bodová škála

```
1        2        3        4        5
│────────│────────│────────│────────│
Príliš   Trochu   Práve    Trochu   Príliš
slabé    slabé    správne  silné    silné
```

### 6.3 Penalty analysis

Penalty analysis je **kľúčová analýza** pre JAR dáta. Vypočíta sa **priemerné skóre** pre každú kategóriu a **penalty** (trest) za odchýlku od optima.

**Výpočet penalty:**

$$\text{Penalty} = \bar{x}_{JAR} - \bar{x}_{non-JAR}$$

Kde:
- $\bar{x}_{JAR}$ = priemerné skóre príjemnosti pre testovateľov, ktorí označili atribút ako JAR
- $\bar{x}_{non-JAR}$ = priemerné skóre príjemnosti pre testovateľov, ktorí označili atribút ako príliš slabý/silný (počíta sa zvlášť pre „málo" a „veľa")

**Vážený pokles (weighted penalty)** = penalty × podiel respondentov v skupine. Skupiny s < 20 % respondentov sa zvyčajne neinterpretujú (Rothman & Parker, 2009, ASTM MNL 63).

**Orientačná interpretácia penalty** (konvencia, nie norma; na 9-bodovej škále):

| Penalty | Význam |
|---|---|
| < 0.5 | Zanedbateľný |
| 0.5 – 1.0 | Malý |
| 1.0 – 1.5 | Stredný |
| > 1.5 | Významný |

Štatistickú významnosť poklesu možno overiť t-testom alebo bootstrapom.

### 6.4 Výpočet

**Príklad:**

| Kategória | Počet testovateľov | Priemerné skóre príjemnosti |
|---|---|---|
| Príliš slabé (1) | 15 | 5.2 |
| Trochu slabé (2) | 25 | 6.1 |
| JAR (3) | 40 | 7.8 |
| Trochu silné (4) | 18 | 6.3 |
| Príliš silné (5) | 12 | 5.5 |

**Penalty za „príliš slabé":**

$$\text{Penalty}_{slabé} = 7.8 - \frac{(15 \times 5.2) + (25 \times 6.1)}{15 + 25} = 7.8 - 5.76 = 2.04$$

**Penalty za „príliš silné":**

$$\text{Penalty}_{silné} = 7.8 - \frac{(18 \times 6.3) + (12 \times 5.5)}{18 + 12} = 7.8 - 5.98 = 1.82$$

### 6.5 Kedy použiť

- Pri **optimalizácii** receptúr
- Keď je potrebná **maximálna** príjemnosť
- Pri **vývoji** nových produktov
- Keď sa testuje **konkrétny atribút** (napr. sladkosť, horkosť)
- Pri **konzumentských** testoch

### 6.6 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Identifikuje smer úpravy | Kombinuje intenzitu a hodnotenie v jednej otázke |
| Jednoduchá interpretácia | Penalty vyžaduje súčasne zbierať celkovú obľúbenosť |
| Vhodná pre optimalizáciu | Menej vhodná pre porovnanie produktov |
| Kvantifikuje penalty | Závisí od výberu atribútu; nie pre trénovaný panel |

> 🧪 **SaIT:** JAR škála a penalty analýza — [cvičenie 12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html)

---

## 7. Porovnanie škál

### 7.1 Komparatívna tabuľka

| Škála | Typ | Citlivosť | Jednoduchosť | Vhodnosť pre konzumentov | Vhodnosť pre cvičený panel |
|---|---|---|---|---|---|
| **9-bodová hedonická** | Kategorická | Stredná | Vysoká | Vysoká | Vysoká |
| **7-bodová hedonická** | Kategorická | Stredná | Vysoká | Vysoká | Vysoká |
| **5-bodová hedonická** | Kategorická | Nízka | Vysoká | Vysoká | Stredná |
| **9-bodová intenzitná** | Kategorická | Vysoká | Stredná | Nízka | Vysoká |
| **Lineárna (VAS)** | Kontinuálna | Vysoká | Stredná | Nízka | Vysoká |
| **Semantická** | Kategorická | Stredná | Stredná | Stredná | Vysoká |
| **JAR** | Kategorická (bipolárna) | Stredná | Vysoká | Vysoká | Nevhodná |

### 7.2 Výhody a nevýhody podľa typu

| Typ škály | Výhody | Nevýhody |
|---|---|---|
| **Hedonické** | Jednoduché, rýchle, vhodné pre konzumentov | Nekvantifikuje intenzitu |
| **Intenzitné** | Kvantifikujú intenzitu, vysoká citlivosť | Vyžadujú tréning |
| **Semantické** | Komplexný obraz, perceptuálne dimenzie | Zložitá interpretácia |
| **JAR** | Identifikuje smer úpravy, praktické | Spája intenzitu a hodnotenie |

---

## 8. Výber správnej škály

### 8.1 Rozzhodovacie kritériia

```
                    ┌─────────────────────────┐
                    │  Aký je cieľ merania?    │
                    └───────────┬─────────────┘
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
        Príjemnosť          Intenzita          Optimalizácia
            │                   │                   │
    ┌───────┴───────┐   ┌───────┴───────┐   ┌───────┴───────┐
    │ Hedonická     │   │ Intenzitná    │   │ JAR škála     │
    │ škála         │   │ škála         │   │               │
    └───────┬───────┘   └───────┬───────┘   └───────────────┘
            │                   │
    ┌───────┴───────┐   ┌───────┴───────┐
    │ Kto testuje?  │   │ Kto testuje?  │
    └───────┬───────┘   └───────┬───────┘
            │                   │
    ┌───────┴───────┐   ┌───────┴───────┐
    │ Konzument →   │   │ Cvičený →     │
    │ 9-bodová      │   │ 9-bodová      │
    │               │   │ intenzitná    │
    │ Cvičený →     │   │               │
    │ 9-bodová      │   │ Konzument →   │
    │               │   │ 5-bodová      │
    └───────────────┘   └───────────────┘
```

### 8.2 Kritériá výbera

| Kritérium | Odporúčaná škála |
|---|---|
| Celková príjemnosť | 9-bodová hedonická |
| Intenzita atribútu | 9-bodová intenzitná |
| Maximálna citlivosť | Lineárna (VAS) |
| Optimalizácia produktu | JAR škála |
| Rýchly screening | 5-bodová hedonická |
| Konzumentský test | 9-bodová hedonická |
| Perceptuálna analýza | Semantická škála |
| Výskum vnímania | Thurstone d' |

---

## 9. Praktické príklady

### Príklad 1: 9-bodová hedonická škála – Test príjemnosti jogurta

**Scénár:** Testuje sa príjemnosť nového jogurta s nízkym obsahom cukru. Vzorka: 50 konzumentov.

**Výsledky:**

| Skóre | Počet testovateľov |
|---|---|
| 9 | 5 |
| 8 | 12 |
| 7 | 15 |
| 6 | 10 |
| 5 | 5 |
| 4 | 2 |
| 3 | 1 |
| 2 | 0 |
| 1 | 0 |

**Výpočet:**

```
Priemerné skóre = (9×5 + 8×12 + 7×15 + 6×10 + 5×5 + 4×2 + 3×1 + 2×0 + 1×0) / 50
               = (45 + 96 + 105 + 60 + 25 + 8 + 3 + 0 + 0) / 50
               = 342 / 50
               = 6.84

% Prijatia (skóre ≥ 6) = (5 + 12 + 15 + 10) / 50 × 100 = 84%
% Odmietnutia (skóre ≤ 4) = (2 + 1 + 0 + 0) / 50 × 100 = 6%

Index prijatia = (6.84 - 1) / 8 × 100 = 73%
```

**Záver:** Jogurt má **vysokú príjemnosť** (84% prijatia, index 73%). Produkt je vhodný pre trh.

---

### Príklad 2: Thurstone d' – Citlivosť panelu

**Scénár:** Testuje sa schopnosť panelu rozlíšiť dve vzorky syra úlohou **A – nie A**. Panel má 20 testovateľov, každý vykoná 10 pokusov (5 × vzorka „nie A", 5 × vzorka A).

**Výsledky:**
- Pri vzorke „nie A": 80 odpovedí „nie A" zo 100 pokusov (hit rate)
- Pri vzorke A: 20 chybných odpovedí „nie A" zo 100 pokusov (false alarm)

**Výpočet:**

```
Hit Rate (H) = 80/100 = 0.80
False Alarm Rate (F) = 20/100 = 0.20

z(H) = z(0.80) ≈ 0.842
z(F) = z(0.20) ≈ -0.842

d' = 0.842 - (-0.842) = 1.684
```

**Interpretácia:** d' = 1.684 → **Stredná citlivosť**. Panel je schopný rozlíšiť vzorky, ale existuje priestor pre zlepšenie. Odporúča sa ďalší tréning.

---

### Príklad 3: JAR škála – Optimalizácia sladkosti limonády

**Scénár:** Testuje sa sladkosť limonády s rôznym obsahom cukru. Vzorka: 80 konzumentov.

**Výsledky:**

| Kategória | Počet | Priemerné skóre príjemnosti |
|---|---|---|
| Oveľa menej sladká, ako by mala byť (1) | 10 | 4.5 |
| Trochu málo sladká (2) | 20 | 6.2 |
| JAR (3) | 35 | 7.9 |
| Trochu príliš sladká (4) | 12 | 6.5 |
| Oveľa sladšia, ako by mala byť (5) | 3 | 4.8 |

**Výpočet penalty:**

```
Penalty za „málo sladké"   = 7.9 - [(10×4.5 + 20×6.2) / (10+20)]
                          = 7.9 - [(45 + 124) / 30]
                          = 7.9 - 5.63
                          = 2.27     (skupina: 30/80 = 37.5 % → vážený pokles 0.85)

Penalty za „príliš sladké" = 7.9 - [(12×6.5 + 3×4.8) / (12+3)]
                          = 7.9 - [(78 + 14.4) / 15]
                          = 7.9 - 6.16
                          = 1.74     (skupina: 15/80 = 18.75 % → vážený pokles 0.33)
```

**Záver:** Rozhodujúca je skupina „málo sladké" — je veľká (37.5 % > 20 %) a má vysoký pokles (2.27). Skupina „príliš sladké" je pod hranicou 20 %. Odporúča sa **mierne zvýšiť sladkosť** a zmenu overiť ďalším testom. (Predošlá verzia mala zle označené kategórie, chybu v menovateli a nesprávny záver o znížení cukru a kyslosti — kyslosť sa v teste vôbec nemerala.)

---

## Záver

Škálovanie je **základný pilier** senzorickej analýze. Výber správnej škály závisí od:
- **Cieľa merania** (príjemnosť vs. intenzita vs. optimalizácia)
- **Typu panelu** (cvičený vs. konzument)
- **Počtu atribútov** (jeden vs. viacero)
- **Dostupných zdrojov** (čas, testovatelia)

Vždy je dôležité **kombinovať** rôzne škály pre kompletný obraz o senzorických vlastnostiach produktu. Moderná senzorická analýza často používa **mix prístupov** – hedonické škály pre celkovú príjemnosť, intenzitné škály pre jednotlivé atribúty a JAR škály pre optimalizáciu.

---

## Prepojenie s praktickými cvičeniami v R (SaIT)

| Téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) | Skript |
|---|---|---|
| Priemer, interval spoľahlivosti | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) | [`cvicenie2.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie2.R) |
| Grafy škálových dát | [4](https://senzorika.github.io/SaIT/teoria/cvicenie04.html) | [`cvicenie4.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie4.R) |
| t-test vs. Wilcoxon, normalita | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) | [`cvicenie5a.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5a.R) |
| ANOVA, Kruskal-Wallis, Friedman | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) | [`cvicenie5b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5b.R) |
| JAR, penalty analýza | [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) | [`cvicenie12.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie12.R) |
| Thurstonov d′ | [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) | [`cvicenie13.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie13.R) |

---

*Referencie: Lawless, H.T. & Heymann, H. (2010). Sensory Evaluation of Food: Principles and Practices (2nd ed.). Springer. | Stone, H. & Sidel, J.L. (2004). Sensory Evaluation Practices (3rd ed.). Elsevier. | Peryam, D.R. & Pilgrim, F.J. (1957). Hedonic scale method of measuring food preferences. Food Technology 11(9), 9–14. | Osgood, C.E., Suci, G.J. & Tannenbaum, P.H. (1957). The Measurement of Meaning. University of Illinois Press. | Wald, A. (1947). Sequential Analysis. Wiley. | Rothman, L. & Parker, M.J. (Eds.) (2009). Just-About-Right (JAR) Scales: Design, Usage, Benefits, and Risks. ASTM MNL 63. | ISO 16820:2019.*
