## Human Variation Confounds FRT Training Data

This project applies NIST-style demographic fairness testing to FaceNet (ResNet-based, trained on VGGFace2) across 25,200 face verification comparisons spanning 126 demographic groups (7 races × 2 genders × 9 age groups). Synthetic data modeled documented NIST FRVT performance patterns to test for racial, age, and gender bias at a high-security decision threshold (0.75). The core finding: the system produces a 25% overall false rejection rate that falls disproportionately on Black individuals -- 51--52% accuracy for children and elderly -- a direct consequence of training data that is 90% White and East Asian faces, with direct civil rights implications for government deployment.

### Portfolio Page

The [portfolio page](https://kchoover14.github.io/human-variation-challenges-frt) includes a full project narrative, key findings, and figures.

### Tools & Technologies

**Languages:** Python

**Platform:** Google Colab (Tesla T4 GPU)

**Tools:** Jupyter Notebook | GitHub

**Packages:** pandas | numpy | matplotlib | seaborn

### Environment

- `requirements.txt` -- install pinned Python package versions with `pip install -r requirements.txt`

### Expertise

Applying deep domain knowledge of human biological variation to audit AI systems for demographic bias -- identifying where seemingly neutral technical decisions produce inequitable outcomes and articulating the civil rights implications for policy audiences.

### License

- Code and scripts © Kara C. Hoover, licensed under the [MIT License](LICENSE).
- Data, figures, and written content © Kara C. Hoover, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
