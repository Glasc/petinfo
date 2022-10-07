export interface Dog {
  bred_for: string;
  breed_group: string;
  country_code: string;
  height: Metrics;
  id: number;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: Metrics;
  image: {
    id: string,
    width: number,
    height: number,
    url: string
  }
}

export interface Metrics {
  imperial: string;
  metric: string;
}
