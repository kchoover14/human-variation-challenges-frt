# Training Data Bias in Facial Recognition Produces Racially and Age-Stratified False Rejection Rates

This project applies NIST-style demographic fairness testing to FaceNet (ResNet-based, trained on VGGFace2) across 25,200 face verification comparisons spanning 126 demographic groups (7 races × 2 genders × 9 age groups). Synthetic data modeled documented NIST FRVT performance patterns to test for racial, age, and gender bias at a high-security decision threshold (0.75). The core finding: the system produces a 25% overall false rejection rate that falls disproportionately on Black individuals (51--52% accuracy for children and elderly), a direct consequence of VGGFace2 training data that is 90% White and East Asian faces -- a seemingly neutral technical decision that produces systematically inequitable outcomes with direct civil rights implications for government deployment.

## Portfolio Page

The [portfolio page](https://kchoover14.github.io/human-variation-challenges-frt) includes a full project narrative, key findings, and figures.

## Tools & Technologies

- **Languages:** Python
- **Platform:** Google Colab (Tesla T4 GPU)
- **Tools:** GitHub
- **Packages:** `facenet-pytorch`, `torch`, `torchvision`, `numpy`, `pandas`, `matplotlib`, `seaborn`, `scikit-learn`

## Reproducibility

Install dependencies with:

```bash
pip install -r requirements.txt
```

Run the notebook in Google Colab. Pin exact package versions by running `pip freeze` in your Colab environment and updating `requirements.txt`.

## Expertise

Applying deep domain knowledge of human biological variation to audit AI systems for demographic bias -- identifying where seemingly neutral technical decisions produce inequitable outcomes and articulating the civil rights implications for policy audiences.
