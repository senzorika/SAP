# Vzorce a parametre v senzorikej analýze

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

**Interpretácia:** S 95% istotou tvrdíme, že skutočný priemer populácie leží v tomto intervale.

### 1.4 Variabilita (CV - koeficient variácie)

$$CV = \frac{s}{\bar{x}} \times 100\%$$

| CV hodnota | Interpretácia |
|------------|---------------|
| < 10% | nízka variabilita (konzistentné hodnotenie) |
| 10–20% | mierna variabilita |
| 20–30% | vysoká variabilita |
| > 30% | veľmi vysoká variabilita (problém s panelom) |

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

**Pre trojuholníkový test:** $p = 1/3$ (tri rozdielne vzorky)

### 2.2 Kritické hodnoty pre trojuholníkový test

Minimálny počet správnych odpovedí pre štatistickú významnosť:

| Počet panelistov (n) | α = 0.05 | α = 0.01 | α = 0.001 |
|----------------------|----------|----------|-----------|
| 10 | 8 | 9 | 10 |
| 15 | 10 | 12 | 13 |
| 20 | 13 | 14 | 16 |
| 25 | 15 | 17 | 19 |
| 30 | 17 | 19 | 21 |
| 35 | 19 | 21 | 23 |
| 40 | 21 | 23 | 25 |
| 50 | 24 | 27 | 29 |
| 60 | 28 | 30 | 33 |

*Zdroj: ISO 4120:2004, tabuľka A.1*

### 2.3 Výpočet počtu panelistov

$$n = \frac{(Z_{\alpha/2} + Z_\beta)^2 \cdot p(1-p)}{(p - p_0)^2}$$

| Symbol | Význam |
|--------|--------|
| $Z_{\alpha/2}$ | kritická hodnota pre hladinu významnosti |
| $Z_\beta$ | kritická hodnota pre silu testu (power) |
| $p$ | očakávaná úspešnosť panelistov |
| $p_0$ | náhodná úspešnosť (1/3 pre trojuholníkový test) |

**Typické hodnoty:**

| Parameter | Hodnota | Význam |
|-----------|---------|--------|
| $Z_{\alpha/2}$ (α=0.05) | 1.96 | dvojstranný test |
| $Z_{\alpha}$ (α=0.05) | 1.645 | jednostranný test |
| $Z_\beta$ (power=0.80) | 0.84 | 80% sila testu |
| $Z_\beta$ (power=0.90) | 1.28 | 90% sila testu |

### 2.4 Power analysis (Sila testu)

Sila testu = $1 - \beta$ = pravdepodobnosť správne zamietnutú nulovú hypotézu, keď je fakt neplatná.

| Sila testu | $Z_\beta$ | Význam |
|------------|-----------|--------|
| 0.70 | 0.52 | minimálna |
| 0.80 | 0.84 | štandardná |
| 0.90 | 1.28 | vysoká |
| 0.95 | 1.645 | veľmi vysoká |

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
| 3 | 3.88 | 3.49 | 3.38 | 3.26 |
| 4 | 4.29 | 3.82 | 3.67 | 3.51 |
| 5 | 4.59 | 4.07 | 3.89 | 3.70 |
| 6 | 4.82 | 4.26 | 4.07 | 3.85 |

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
| Ztráta vitamínov | 2–10 |

### 5.2 Arrheniusov model

$$k = A \cdot e^{-\frac{E_a}{RT}}$$

| Symbol | Význam | Jednotka |
|--------|--------|----------|
| $k$ | konštanta rýchlosti reakcie | s⁻¹ |
| $A$ | preexponenciálny faktor | s⁻¹ |
| $E_a$ | aktivačná energia | J/mol |
| $R$ | univerzálny plynový konštants (8.314) | J/(mol·K) |
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
| β < 1 | rastúca intenzita poruchy (early failures) |
| β = 1 | exponenciálne rozdelenie (konštantná intenzita) |
| β > 1 | klesajúca intenzita poruchy (wear-out failures) |

### 5.4 Median survival time (t₅₀)

$$t_{50} = \eta \cdot (\ln 2)^{1/\beta}$$

| β | t₅₀/η pomer |
|---|------------|
| 0.5 | 4.81 |
| 1.0 | 0.693 |
| 1.5 | 0.783 |
| 2.0 | 0.833 |
| 3.0 | 0.885 |

---

## 6. Senzorické parametre

### 6.1 Threshold (prah)

| Typ prahu | Definícia | Typická hodnota |
|-----------|-----------|-----------------|
| Detection threshold | najnižšia koncentrácia, ktorú subjekt deteguje | ~10⁻⁶ mol/L |
| Recognition threshold | koncentrácia, ktorú subjekt dokáže identifikovať | ~3× detection |
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
| Hmotnosť (záťaž) | 0.02–0.05 |
| Hlasitosť (dB) | 0.05–0.10 |
| Sladkosť (sacharóza) | 0.08–0.15 |
| Slanosť (NaCl) | 0.10–0.20 |
| Kyslosť (kyselina citrónová) | 0.10–0.20 |
| Horkosť (kapsaicín) | 0.15–0.30 |

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
| Hlasitosť (dB) | 0.67 | nadlineárny |
| Sladkosť (sacharóza) | 1.3 | nadlineárny |
| Slanosť (NaCl) | 1.4 | nadlineárny |
| Kyslosť | 1.0–1.3 | približne lineárny |
| Horkosť (kapsaicín) | 1.0–1.5 | nadlineárny |
| Dĺžka čiary | 1.0 | lineárny |
| Hmotnosť | 1.45 | nadlineárny |

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

$$s = \sqrt{\frac{\sum(x_i - 6.05)^2}{11}} = \sqrt{\frac{0.825}{11}} = \sqrt{0.075} = 0.274$$

**Krok 3: Výpočet štandardnej chyby**

$$SE = \frac{s}{\sqrt{n}} = \frac{0.274}{\sqrt{12}} = \frac{0.274}{3.464} = 0.079$$

**Krok 4: Nájdenie t-hodnoty**

Pre α = 0.05 (dvojstranný) a df = 11: $t_{0.025, 11} = 2.201$

**Krok 5: Výpočet konfidenčného intervalu**

$$CI = 6.05 \pm 2.201 \times 0.079 = 6.05 \pm 0.174$$

**Výsledok:** 95% CI = [5.88, 6.22]

**Interpretácia:** S 95% istotou tvrdíme, že skutočný priemerný senzorický profil sladkosti produktu leží medzi 5.88 a 6.22 na škále 0–10.

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
- Hladina významnosti: α = 0.05 (dvojstranný)
- Sila testu: 1 - β = 0.80

**Výpočet:**

$$n = \frac{(1.96 + 0.84)^2 \times 0.50 \times 0.50}{(0.50 - 0.333)^2}$$

$$n = \frac{(2.80)^2 \times 0.25}{(0.167)^2} = \frac{7.84 \times 0.25}{0.0279} = \frac{1.96}{0.0279} = 70.3$$

**Výsledok:** Potrebných je **71 panelistov** (zaokrúhlene nahor).

**Alternatívne scenáre:**

| Očakávaná úspešnosť (p) | n (α=0.05, power=0.80) |
|-------------------------|------------------------|
| 0.40 | 196 |
| 0.45 | 96 |
| 0.50 | 71 |
| 0.55 | 57 |
| 0.60 | 48 |

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
| 3.807 | -2.659 |
| 3.829 | -1.767 |
| 3.850 | -1.234 |
| 3.871 | -0.847 |
| 3.892 | -0.527 |
| 3.912 | -0.248 |
| 3.932 | -0.001 |
| 3.952 | 0.231 |
| 3.970 | 0.453 |
| 4.007 | 0.668 |

**Krok 3: Odhad parametrov**

Z regresie: sklon = β ≈ 2.1, intercept = -β·ln(η) ≈ -7.98

$$\eta = e^{7.98/2.1} = e^{3.80} = 44.7 \text{ dní}$$

**Výsledok:**
- β = 2.1 (nadlineárny tzar — degradácia sa zrýchľuje s časom)
- η = 44.7 dní (charakteristický čas)

**Výpočet median survival time:**

$$t_{50} = 44.7 \times (\ln 2)^{1/2.1} = 44.7 \times 0.693^{0.476} = 44.7 \times 0.833 = 37.2 \text{ dní}$$

---

## Referencie

1. ISO 4120:2004 — Sensory analysis — Methodology — Triangle test
2. ISO 5495:2005 — Sensory analysis — Methodology — Paired comparison test
3. ISO 13299:2016 — Sensory analysis — Methodology — General guidance for establishing a sensory profile
4. Lawless, H.T. & Heymann, H. (2010). *Sensory Evaluation of Food: Principles and Practices*. Springer.
5. Stone, H. & Sidel, J.L. (2004). *Sensory Evaluation Practices*. Academic Press.
6. Meilgaard, M.C., Civille, G.V. & Carr, B.T. (2007). *Sensory Evaluation Techniques*. CRC Press.

---

*Dokument vytvorený pre projekt SAP — Senzorická Analýza Potravín*
*Posledná aktualizácia: September 2026*
