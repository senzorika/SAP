# Vzorce a parametre v senzorickej analýze

Komplexný sprievodca matematickými vzorcami, štatistickými parametrami a praktickými výpočtami používanými v senzorickom výskume potravín.

---

## Obsah

1. [Základné štatistické vzorce](#1-základné-štatistické-vzorce)
2. [Rozlišovacie testy](#2-rozlišovacie-testy)
3. [ANOVA a post-hoc testy](#3-anova-a-post-hoc-testy)
4. [Korelácia a regresia](#4-korelácia-a-regresia)
5. [Shelf-life vzorce](#5-shelf-life-vzorce)
6. [Senzorické parametre](#6-senzorické-parametre)
7. [Praktické výpočty](#7-praktické-výpočty)

---

## 1. Základné štatistické vzorce

### 1.1 Priemer (aritmetický priemer)

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

| Symbol | Význam |
|--------|--------|
| $\bar{x}$ | aritmetický priemer |
| $n$ | počet pozorovaní |
| $x_i$ | hodnota $i$-tého pozorovania |
| $\sum$ | suma |

**Praktické využitie:** Priemerné hodnotenie intenzity chuti panelistami na 9-bodovej hedonickej škále.

### 1.2 Štandardná odchýlka

$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

| Symbol | Význam |
|--------|--------|
| $s$ | štandardná odchýlka |
| $n-1$ | stupne voľnosti |
| $x_i - \bar{x}$ | odchýlka od priemeru |

**Poznámka:** Používa sa $n-1$ (Besselova korekcia), pretože pracujeme s vzorkou, nie s celou populáciou.

### 1.3 Konfidenčný interval

$$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$$

| Symbol | Význam |
|--------|--------|
| $t_{\alpha/2, n-1}$ | kritická hodnota t-rozdelenia |
| $\alpha$ | hladina významnosti (typicky 0.05) |
| $s/\sqrt{n}$ | štandardná chyba priemeru |

**Interpretácia:** Postup konštrukcie intervalu zachytí skutočný priemer populácie v 95 % opakovaní experimentu (pre jeden konkrétny interval to nie je „95 % pravdepodobnosť").

> 🧪 **Precvič v R ([SaIT](https://github.com/senzorika/SaIT)):** interval spoľahlivosti priemeru panelu — [cvičenie 2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html)

### 1.4 Variabilita (CV - koeficient variácie)

$$CV = \frac{s}{\bar{x}} \times 100\%$$

| CV hodnota | Interpretácia |
|------------|---------------|
| < 10% | nízka variabilita (konzistentné hodnotenie) |
| 10–20% | mierna variabilita |
| 20–30% | vysoká variabilita |
| > 30% | veľmi vysoká variabilita (problém s panelom) |

*Orientačné pásma (konvencia). CV je citlivé na polohu na škále — pri priemeroch blízko nuly je zavádzajúce; výkonnosť panelu sa preto hodnotí skôr podľa ISO 11132 (diskriminácia, zhoda, opakovateľnosť) — [SaIT cvičenie 15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html).*

---

## 2. Rozlišovacie testy

### 2.1 Binomická pravdepodobnosť

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

| Symbol | Význam |
|--------|--------|
| $n$ | počet pokusov (panelistov) |
| $k$ | počet úspešných identifikácií |
| $p$ | pravdepodobnosť úspechu pri náhodnom výbere |
| $\binom{n}{k}$ | binomický koeficient |

**Pre trojuholníkový test:** $p = 1/3$ (tri vzorky, z toho jedna odlišná — pravdepodobnosť uhádnutia)

### 2.2 Kritické hodnoty pre trojuholníkový test

Minimálny počet správnych odpovedí pre štatistickú významnosť (presný jednostranný binomický test):

| Počet panelistov (n) | α = 0.05 | α = 0.01 | α = 0.001 |
|----------------------|----------|----------|-----------|
| 10 | 7 | 8 | 9 |
| 15 | 9 | 10 | 12 |
| 20 | 11 | 13 | 14 |
| 25 | 13 | 15 | 17 |
| 30 | 15 | 17 | 19 |
| 35 | 17 | 19 | 22 |
| 40 | 19 | 21 | 24 |
| 50 | 23 | 26 | 28 |
| 60 | 27 | 30 | 33 |

*Prepočítané v Pythone (`scipy.stats.binom`); zhodné s tabuľkou v ISO 4120:2021. Predošlá verzia mala hodnoty posunuté o 1–2 nahor (príliš konzervatívne) a odkazovala na neaktuálne vydanie 2004.*

### 2.3 Výpočet počtu panelistov

Pre jednostranný rozlišovací test (normálna aproximácia):

$$n = \frac{\left(Z_{\alpha}\sqrt{p_0(1-p_0)} + Z_\beta\sqrt{p(1-p)}\right)^2}{(p - p_0)^2}$$

| Symbol | Význam |
|--------|--------|
| $Z_{\alpha}$ | kritická hodnota pre hladinu významnosti (jednostranne 1.645 pre α = 0.05) |
| $Z_\beta$ | kritická hodnota pre silu testu (power) |
| $p$ | očakávaná úspešnosť panelistov |
| $p_0$ | náhodná úspešnosť (1/3 pre trojuholníkový test) |

Rozlišovacie testy sú **jednostranné** (H₁: p > p₀), preto sa používa $Z_\alpha$, nie $Z_{\alpha/2}$. Presnejší je priamy binomický výpočet (napr. `sensR::discrimSS()`).

**Typické hodnoty:**

| Parameter | Hodnota | Význam |
|-----------|---------|--------|
| $Z_{\alpha/2}$ (α=0.05) | 1.96 | dvojstranný test |
| $Z_{\alpha}$ (α=0.05) | 1.645 | jednostranný test |
| $Z_\beta$ (power=0.80) | 0.84 | 80% sila testu |
| $Z_\beta$ (power=0.90) | 1.28 | 90% sila testu |

### 2.4 Power analysis (Sila testu)

Sila testu = $1 - \beta$ = pravdepodobnosť správneho zamietnutia nulovej hypotézy, keď je fakt neplatná.

| Sila testu | $Z_\beta$ | Význam |
|------------|-----------|--------|
| 0.70 | 0.52 | minimálna |
| 0.80 | 0.84 | štandardná |
| 0.90 | 1.28 | vysoká |
| 0.95 | 1.645 | veľmi vysoká |

> 🧪 **SaIT:** sila testu a veľkosť panelu — [cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · binomický test — [cvičenie 5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html)

---

## 3. ANOVA a post-hoc testy

### 3.1 F-statistika

$$F = \frac{MS_{between}}{MS_{within}} = \frac{SS_{between} / df_{between}}{SS_{within} / df_{within}}$$

| Symbol | Význam |
|--------|--------|
| $MS_{between}$ | stredný štvorcový rozptyl medzi skupinami |
| $MS_{within}$ | stredný štvorcový rozptyl v rámci skupín |
| $SS$ | suma štvorcov |
| $df$ | stupne voľnosti |

**Stupne voľnosti:**
- $df_{between} = k - 1$ (k = počet skupín)
- $df_{within} = N - k$ (N = celkový počet pozorovaní)

### 3.2 Tukey HSD (Honestly Significant Difference)

$$HSD = q_{\alpha, k, N-k} \cdot \sqrt{\frac{MS_{within}}{n}}$$

| Symbol | Význam |
|--------|--------|
| $q_{\alpha, k, N-k}$ | študentizovaný rozsah (Studentized range) |
| $k$ | počet skupín |
| $N-k$ | stupne voľnosti reziduá |
| $n$ | počet pozorovaní na skupinu |

**Kritické hodnoty q (α = 0.05):**

| k (skupiny) | df = 10 | df = 20 | df = 30 | df = 60 |
|-------------|---------|---------|---------|---------|
| 2 | 3.15 | 2.95 | 2.89 | 2.83 |
| 3 | 3.88 | 3.58 | 3.49 | 3.40 |
| 4 | 4.33 | 3.96 | 3.85 | 3.74 |
| 5 | 4.65 | 4.23 | 4.10 | 3.98 |
| 6 | 4.91 | 4.45 | 4.30 | 4.16 |

*Prepočítané (`scipy.stats.studentized_range`); predošlá verzia mala pre k ≥ 3 hodnoty podhodnotené.*

### 3.3 Dunnettov test

Používa sa pri porovaní viacerých experimentálnych skupín s jednou kontrolnou skupinou.

$$t_D = \frac{\bar{x}_i - \bar{x}_{control}}{\sqrt{MS_{within} \cdot \left(\frac{1}{n_i} + \frac{1}{n_c}\right)}}$$

| Vlastnosť | Dunnett | Tukey |
|-----------|---------|-------|
| Porovnávanie | vs. kontrola | všetky páry |
| Sila testu | vyššia | nižšia |
| Použitie | preferované pri dizajne s kontrolou | exploratívna analýza |

### 3.4 Bonferroni korekcia

$$\alpha_{adjusted} = \frac{\alpha}{m}$$

| Symbol | Význam |
|--------|--------|
| $\alpha$ | pôvodná hladina významnosti |
| $m$ | počet porovnaní |

**Príklad:** Pri α = 0.05 a 6 porovnaniach: $\alpha_{adj} = 0.05/6 = 0.0083$

> 🧪 **SaIT:** ANOVA a viacnásobné porovnania — [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · hodnotiteľ ako náhodný efekt — [cvičenie 16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html)

---

## 4. Korelácia a regresia

### 4.1 Pearsonov korelačný koeficient

$$r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \sum(y_i - \bar{y})^2}}$$

| Hodnota r | Sila korelácie |
|-----------|----------------|
| 0.00–0.19 | veľmi slabá |
| 0.20–0.39 | slabá |
| 0.40–0.59 | mierna |
| 0.60–0.79 | silná |
| 0.80–1.00 | veľmi silná |

*Konvenčné slovné pásma (platia pre |r|); v literatúre existujú rôzne varianty.*

> 🧪 **SaIT:** korelácia a lineárna regresia senzorických a inštrumentálnych dát — [cvičenie 6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html)

### 4.2 Lineárna regresia

$$y = \beta_0 + \beta_1 x + \epsilon$$

| Symbol | Význam |
|--------|--------|
| $\beta_0$ | intercept (posunutie) |
| $\beta_1$ | sklon (slope) |
| $\epsilon$ | chyba (reziduum) |

**Odhad parametrov:**

$$\hat{\beta}_1 = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2}$$

$$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$$

### 4.3 Determinačný koeficient (R²)

$$R^2 = 1 - \frac{SS_{residual}}{SS_{total}} = \frac{\sum(\hat{y}_i - \bar{y})^2}{\sum(y_i - \bar{y})^2}$$

| R² | Interpretácia |
|----|---------------|
| 0.0–0.3 | nízka vysvetľovacia schopnosť |
| 0.3–0.5 | mierna vysvetľovacia schopnosť |
| 0.5–0.7 | dobrá vysvetľovacia schopnosť |
| 0.7–0.9 | vysoká vysvetľovacia schopnosť |
| 0.9–1.0 | výborná vysvetľovacia schopnosť |

---

## 5. Shelf-life vzorce

### 5.1 Q10 model

$$Q_{10} = \frac{k_{T+10}}{k_T}$$

| Symbol | Význam |
|--------|--------|
| $k_{T+10}$ | rýchlosť degradácie o 10°C vyššej teploty |
| $k_T$ | rýchlosť degradácie pri teplote T |

**Typické Q10 hodnoty:**

| Proces | Q10 hodnota |
|--------|-------------|
| Enzymatická degradácia | 2–3 |
| Oxidácia lipidov | 2–4 |
| Reakcie Maillardovej | 3–5 |
| Mikrobiálny rast | 2–5 |
| Strata vitamínov | 2–10 |

*Orientačné hodnoty — silno závisia od matrice, a_w a teplotného rozsahu.*

### 5.2 Arrheniusov model

$$k = A \cdot e^{-\frac{E_a}{RT}}$$

| Symbol | Význam | Jednotka |
|--------|--------|----------|
| $k$ | konštanta rýchlosti reakcie | s⁻¹ |
| $A$ | preexponenciálny faktor | s⁻¹ |
| $E_a$ | aktivačná energia | J/mol |
| $R$ | univerzálna plynová konštanta (8.314) | J/(mol·K) |
| $T$ | absolútna teplota | K |

**Lineárna forma:**

$$\ln k = \ln A - \frac{E_a}{R} \cdot \frac{1}{T}$$

### 5.3 Weibull distribúcia

$$F(t) = 1 - e^{-(t/\eta)^\beta}$$

| Symbol | Význam |
|--------|--------|
| $F(t)$ | kumulatívna distribúcia poruchy |
| $t$ | čas |
| $\eta$ | charakteristický čas (scale parameter) |
| $\beta$ | tvarový parameter (shape parameter) |

**Interpretácia parametra β:**

| β | Význam |
|---|--------|
| β < 1 | klesajúca intenzita poruchy (early failures) |
| β = 1 | exponenciálne rozdelenie (konštantná intenzita) |
| β > 1 | rastúca intenzita poruchy (wear-out failures) |

*Predošlá verzia mala interpretáciu β < 1 a β > 1 obrátenú.*

### 5.4 Median survival time (t₅₀)

$$t_{50} = \eta \cdot (\ln 2)^{1/\beta}$$

| β | t₅₀/η pomer |
|---|------------|
| 0.5 | 0.480 |
| 1.0 | 0.693 |
| 1.5 | 0.783 |
| 2.0 | 0.833 |
| 3.0 | 0.885 |

> 🧪 **SaIT:** analýza prežitia a senzorická trvanlivosť — [cvičenie 10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html)

---

## 6. Senzorické parametre

### 6.1 Threshold (prah)

| Typ prahu | Definícia | Typická hodnota |
|-----------|-----------|-----------------|
| Detection threshold | najnižšia koncentrácia, ktorú subjekt odlíši od blanku (ISO 13301: 3-AFC) | silno látkovo špecifická: napr. sacharóza ~10⁻² mol/L, chinín ~10⁻⁵–10⁻⁶ mol/L |
| Recognition threshold | najnižšia koncentrácia, pri ktorej subjekt rozpozná kvalitu vnemu | vyššia ako detekčný prah (pomer závisí od látky) |
| Difference threshold | minimálna zmena stimulu, ktorú subjekt vníma | závisí od Weberovho zákona |
| Terminal threshold | koncentrácia, pri ktorej už nie je možné vnímať zvýšenie intenzity | produktovo špecifická |

### 6.2 Just Noticeable Difference (JND)

JND je najmenšia zmena intenzity stimulu, ktorú subjekt dokáže zaznamenať.

**Vzťah k Weberovmu zákonu:**

$$JND = k \cdot I$$

| Symbol | Význam |
|--------|--------|
| $k$ | Weberov zlomok |
| $I$ | intenzita stimulu |

### 6.3 Weberov zákon

$$\frac{\Delta I}{I} = k$$

| Symbol | Význam |
|--------|--------|
| $\Delta I$ | JND (minimálna zmena) |
| $I$ | počiatočná intenzita |
| $k$ | Weberov zlomok (konštanta) |

**Typické Weberove zlomky:**

| Stimul | Weberov zlomok (k) |
|--------|-------------------|
| Hmotnosť (záťaž) | ~0.02 |
| Hlasitosť (intenzita zvuku) | ~0.1 |
| Chuťové podnety (sacharóza, NaCl, kyseliny) | ~0.1–0.3 |
| Horkosť (chinín, kofeín) | ~0.2–0.3 |

*Orientačné hodnoty; chuťové Weberove zlomky sa v literatúre značne líšia podľa metódy a koncentrácie (Lawless & Heymann, 2010). Kapsaicín nie je horká látka — vyvoláva pálivosť (chemestéza, receptor TRPV1).*

### 6.4 Stevensov zákon

$$\psi = k \cdot I^n$$

| Symbol | Význam |
|--------|--------|
| $\psi$ | subjektívna intenzita |
| $k$ | konštanta |
| $I$ | fyzikálna intenzita |
| $n$ | exponent (špecifický pre každý stimul) |

**Typické hodnoty exponentu n:**

| Stimul | n | Vzťah |
|--------|---|-------|
| Hlasitosť (akustický tlak, tón 3 kHz) | 0.67 | podlineárny (kompresívny) |
| Sladkosť (sacharóza) | 1.3 | nadlineárny |
| Sladkosť (sacharín) | 0.8 | podlineárny |
| Slanosť (NaCl) | 1.3 | nadlineárny |
| Dĺžka čiary | 1.0 | lineárny |
| Hmotnosť (tiaž) | 1.45 | nadlineárny |

*Hodnoty podľa S. S. Stevensa (1957, 1975); exponent je < 1 kompresívny, > 1 expanzívny. Konkrétne hodnoty závisia od metódy a rozsahu podnetov.*

---

## 7. Praktické výpočty

### 7.1 Výpočet konfidenčného intervalu pre senzorický profil

**Dáta:** 12 panelistov hodnotilo intenzitu sladkosti na škále 0–10:

| Panelista | Hodnotenie |
|-----------|------------|
| 1 | 6.2 |
| 2 | 5.8 |
| 3 | 6.5 |
| 4 | 6.0 |
| 5 | 5.5 |
| 6 | 6.3 |
| 7 | 5.9 |
| 8 | 6.1 |
| 9 | 6.4 |
| 10 | 5.7 |
| 11 | 6.0 |
| 12 | 6.2 |

**Krok 1: Výpočet priemeru**

$$\bar{x} = \frac{6.2 + 5.8 + 6.5 + 6.0 + 5.5 + 6.3 + 5.9 + 6.1 + 6.4 + 5.7 + 6.0 + 6.2}{12} = \frac{72.6}{12} = 6.05$$

**Krok 2: Výpočet štandardnej odchýlky**

$$s = \sqrt{\frac{\sum(x_i - 6.05)^2}{11}} = \sqrt{\frac{0.950}{11}} = \sqrt{0.0864} = 0.294$$

**Krok 3: Výpočet štandardnej chyby**

$$SE = \frac{s}{\sqrt{n}} = \frac{0.294}{\sqrt{12}} = \frac{0.294}{3.464} = 0.085$$

**Krok 4: Nájdenie t-hodnoty**

Pre α = 0.05 (dvojstranný) a df = 11: $t_{0.025, 11} = 2.201$

**Krok 5: Výpočet konfidenčného intervalu**

$$CI = 6.05 \pm 2.201 \times 0.085 = 6.05 \pm 0.187$$

**Výsledok:** 95% CI = [5.86, 6.24]

*(Predošlá verzia mala chybný súčet štvorcov 0.825 namiesto 0.950 — prepočítané.)*

**Interpretácia:** Na 95 % hladine spoľahlivosti leží priemerná intenzita sladkosti produktu (v populácii hodnotení tohto panelu) medzi 5.86 a 6.24 na škále 0–10.

---

### 7.2 Výpočet Q10 pre produkt

**Dáta:** Mliečny produkt, meranie rýchlosti oxidácie lipidov:

| Teplota (°C) | Konštanta rýchlosti k (deň⁻¹) |
|---------------|-------------------------------|
| 25 | 0.015 |
| 35 | 0.045 |

**Výpočet:**

$$Q_{10} = \frac{k_{35}}{k_{25}} = \frac{0.045}{0.015} = 3.0$$

**Interpretácia:** Pri zvýšení teploty o 10°C sa rýchlosť oxidácie ztrojnásobí.

**Výpočet shelf-life:**

Ak je pri 25°C trvanlivosť 30 dní, pri 35°C:

$$t_{35} = \frac{t_{25}}{Q_{10}} = \frac{30}{3.0} = 10 \text{ dní}$$

---

### 7.3 Výpočet počtu panelistov pre trojuholníkový test

**Podmienky:**
- Očakávaná úspešnosť panelistov: p = 0.50 (50% správnych odpovedí)
- Náhodná úspešnosť: p₀ = 1/3 = 0.333
- Hladina významnosti: α = 0.05 (**jednostranný** — rozlišovací test testuje H₁: p > 1/3)
- Sila testu: 1 - β = 0.80

**Výpočet:**

$$n = \frac{\left(1.645\sqrt{0.333 \times 0.667} + 0.842\sqrt{0.50 \times 0.50}\right)^2}{(0.50 - 0.333)^2}$$

$$n = \frac{(0.776 + 0.421)^2}{0.0278} = \frac{1.433}{0.0278} = 51.5$$

**Výsledok:** Podľa aproximácie **52 panelistov**; presný binomický výpočet dáva **60 panelistov**.

**Alternatívne scenáre:**

| Očakávaná úspešnosť (p) | p_d | n – aproximácia | n – presný binomický výpočet |
|-------------------------|-----|------------------------|------|
| 0.40 | 10 % | 318 | 349 |
| 0.45 | 17.5 % | 105 | 121 |
| 0.50 | 25 % | 52 | 60 |
| 0.55 | 32.5 % | 31 | 39 |
| 0.60 | 40 % | 20 | 25 |

*(Predošlá verzia používala obojstranné z = 1.96 a nesprávny tvar vzorca, preto boli počty nadhodnotené pri veľkých a podhodnotené pri malých rozdieloch.)*

---

### 7.4 Výpočet Weibullových parametrov

**Dáta:** Doba do degradácie vitamínu C v ovocnej šťave (dni):

| Vzorka | Čas do degradácie (dni) |
|--------|------------------------|
| 1 | 45 |
| 2 | 52 |
| 3 | 48 |
| 4 | 55 |
| 5 | 50 |
| 6 | 47 |
| 7 | 53 |
| 8 | 49 |
| 9 | 51 |
| 10 | 46 |

**Krok 1: Triedenie a kumulatívna pravdepodobnosť**

| i | tᵢ (dni) | F(tᵢ) = (i-0.3)/(n+0.4) |
|---|----------|--------------------------|
| 1 | 45 | 0.067 |
| 2 | 46 | 0.161 |
| 3 | 47 | 0.255 |
| 4 | 48 | 0.349 |
| 5 | 49 | 0.443 |
| 6 | 50 | 0.537 |
| 7 | 51 | 0.631 |
| 8 | 52 | 0.725 |
| 9 | 53 | 0.819 |
| 10 | 55 | 0.913 |

**Krok 2: Lineárna regresia pre Weibullov graf**

Transformácia: $\ln(-\ln(1-F(t)))$ vs. $\ln(t)$

| ln(t) | ln(-ln(1-F)) |
|-------|---------------|
| 3.807 | -2.664 |
| 3.829 | -1.723 |
| 3.850 | -1.202 |
| 3.871 | -0.822 |
| 3.892 | -0.509 |
| 3.912 | -0.230 |
| 3.932 | 0.033 |
| 3.951 | 0.299 |
| 3.970 | 0.594 |
| 4.007 | 0.993 |

**Krok 3: Odhad parametrov**

Z regresie: sklon = β ≈ 16.9, intercept = -β·ln(η) ≈ -66.5

$$\eta = e^{66.5/16.9} = e^{3.933} \approx 51.1 \text{ dní}$$

**Výsledok:**
- β ≈ 16.9 (veľmi úzke rozdelenie — všetky časy sú medzi 45 a 55 dňami)
- η ≈ 51.1 dní (charakteristický čas; do η zlyhá 63.2 % vzoriek)

**Výpočet median survival time:**

$$t_{50} = 51.1 \times (\ln 2)^{1/16.9} = 51.1 \times 0.978 = 50.0 \text{ dní}$$

*Kontrola zmysluplnosti: medián dát je 49.5 dňa. Predošlá verzia uvádzala β ≈ 2.1, η = 44.7 a t₅₀ = 37.2 dňa — to je nemožné, keďže žiadna vzorka nezlyhala pred 45. dňom; chybné boli aj hodnoty v stĺpci ln(−ln(1−F)).*

---

## Referencie

1. ISO 4120:2021 — Sensory analysis — Methodology — Triangle test
2. ISO 5495:2005 — Sensory analysis — Methodology — Paired comparison test
3. ISO 13299:2016 — Sensory analysis — Methodology — General guidance for establishing a sensory profile
4. ISO 13301:2018 — Sensory analysis — Methodology — General guidance for measuring odour, flavour and taste detection thresholds by a three-alternative forced-choice (3-AFC) procedure
5. Lawless, H.T. & Heymann, H. (2010). *Sensory Evaluation of Food: Principles and Practices* (2nd ed.). Springer.
6. Stone, H. & Sidel, J.L. (2004). *Sensory Evaluation Practices* (3rd ed.). Academic Press.
7. Meilgaard, M.C., Civille, G.V. & Carr, B.T. (2016). *Sensory Evaluation Techniques* (5th ed.). CRC Press.
8. Stevens, S.S. (1957). On the psychophysical law. *Psychological Review* 64, 153–181.
9. Hough, G. (2010). *Sensory Shelf Life Estimation of Food Products*. CRC Press.

---

## Prepojenie s praktickými cvičeniami v R (SaIT)

| Vzorec / téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) |
|---|---|
| Priemer, SD, interval spoľahlivosti | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [3](https://senzorika.github.io/SaIT/teoria/cvicenie03.html) (práca s dátami v R) |
| Binomický test, t-test, χ² | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) |
| ANOVA, Tukey, Bonferroni | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) |
| Korelácia, regresia, R² | [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) |
| Kaplan-Meier, shelf-life | [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) |
| Thurstonov d′ | [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) |
| Sila testu, počet panelistov | [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) |
| Zmiešané modely | [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) |

---

*Dokument vytvorený pre projekt SAP — Senzorická Analýza Potravín*
*Posledná aktualizácia: September 2026*
