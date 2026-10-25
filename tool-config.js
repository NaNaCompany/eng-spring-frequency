export const tool = {
  "id": "E030",
  "title": "질량 스프링 고유진동수 계산기",
  "inputs_text": "스프링 상수 k [N/m], 질량 m [kg]",
  "formula": "f_n = √(k/m) / (2π)",
  "output_text": "비감쇠 고유진동수 f_n [Hz]",
  "assumptions": "k,m>0. 선형·1자유도·스프링 자체 질량 무시 모델이다. 감쇠 고유진동수나 강제진동 응답은 계산하지 않는다.",
  "purpose": "스프링 질량 고유진동수 / 방진·진동 실험",
  "sources": [
    {
      "label": "OpenStax · Simple Harmonic Motion",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion"
    }
  ],
  "slug": "eng-spring-frequency",
  "category": "진동",
  "result_label": "비감쇠 고유진동수 f_n",
  "result_dimension": "frequency",
  "fields": [
    {
      "key": "k",
      "label": "스프링 상수 k",
      "dimension": "stiffness",
      "example": 100,
      "constraint": "positive",
      "display_unit": "Nm",
      "display_value": "100"
    },
    {
      "key": "m",
      "label": "질량 m",
      "dimension": "mass",
      "example": 1,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "1"
    }
  ],
  "site": "https://nanalab.kr/eng-spring-frequency/",
  "repository": "https://github.com/NaNaCompany/eng-spring-frequency",
  "condition": "",
  "output_unit": "Hz"
};
